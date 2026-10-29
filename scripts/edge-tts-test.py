"""Offline checks: python scripts/edge-tts-test.py (use the speech venv)."""

import importlib.util
import json
import threading
import unittest
import urllib.error
import urllib.request
from pathlib import Path
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("speech_bridge", Path(__file__).with_name("edge-tts-server.py"))
bridge = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bridge)


class SpeechTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = bridge.SpeechServer(("127.0.0.1", 0), bridge.Handler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def request(self, path, body=None, **headers):
        data = None if body is None else json.dumps(body, ensure_ascii=False).encode("utf-8")
        request = urllib.request.Request(self.base + path, data=data, headers={"Content-Type": "application/json", **headers})
        try:
            response = urllib.request.urlopen(request, timeout=3)
        except urllib.error.HTTPError as error:
            response = error
        with response:
            return response.status, response.read(), response.headers

    def test_discovery_and_health_are_local(self):
        status, data, _ = self.request("/v1/models")
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(data)["data"][0]["id"], "edge-tts")
        _, data, _ = self.request("/v1/audio/voices")
        self.assertEqual(json.loads(data)["voices"][:2], ["th-TH-PremwadeeNeural", "th-TH-NiwatNeural"])
        self.assertEqual(self.request("/health")[0], 200)

    def test_browser_origins_and_foreign_hosts_are_rejected(self):
        self.assertEqual(self.request("/v1/models", Origin="http://other.example")[0], 403)
        self.assertEqual(self.request("/v1/models", Host="other.example")[0], 403)

    def test_invalid_payload_never_contacts_microsoft(self):
        with patch.object(bridge, "speech_audio") as synthesize:
            for body in [[], {}, {"input": "x", "speed": True}, {"input": "x", "speed": float("nan")}, {"input": "x", "speed": 0}, {"input": "x", "voice": "unknown"}, {"input": "x", "model": "other"}, {"input": "x", "response_format": "wav"}, {"input": "x" * 8001}]:
                self.assertEqual(self.request("/v1/audio/speech", body)[0], 400)
            synthesize.assert_not_called()

    def test_thai_text_and_multiplier_survive_the_http_boundary(self):
        async def synthesize(text, voice, rate):
            self.assertEqual(text, "หมอกคลุมหุบเขา เจ้าเตรียมร่าย Fireball")
            self.assertEqual(voice, "th-TH-NiwatNeural")
            self.assertEqual(rate, "+20%")
            return b"ID3-test"
        with patch.object(bridge, "speech_audio", synthesize):
            status, data, headers = self.request("/v1/audio/speech", {"input": "หมอกคลุมหุบเขา เจ้าเตรียมร่าย Fireball", "voice": "th-TH-NiwatNeural", "speed": 1.2})
        self.assertEqual((status, data, headers["Content-Type"]), (200, b"ID3-test", "audio/mpeg"))

    def test_failure_is_bounded_and_does_not_disclose_upstream_text(self):
        async def unavailable(*_args):
            raise RuntimeError("private transcript and upstream token")
        with patch.object(bridge, "speech_audio", unavailable):
            status, data, _ = self.request("/v1/audio/speech", {"input": "ทดสอบ"})
        self.assertEqual(status, 502)
        self.assertNotIn(b"private", data)

    def test_timeout_and_capacity_have_explicit_errors(self):
        async def timeout(*_args):
            raise TimeoutError()
        with patch.object(bridge, "speech_audio", timeout):
            self.assertEqual(self.request("/v1/audio/speech", {"input": "ทดสอบ"})[0], 504)
        bridge.SLOTS.acquire()
        bridge.SLOTS.acquire()
        try:
            self.assertEqual(self.request("/v1/audio/speech", {"input": "ทดสอบ"})[0], 503)
        finally:
            bridge.SLOTS.release()
            bridge.SLOTS.release()


if __name__ == "__main__":
    unittest.main()
