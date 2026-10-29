"""Loopback OpenAI speech adapter for the optional, unmodified edge-tts library."""

import asyncio
import json
import math
import os
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import edge_tts

MODEL = "edge-tts"
DEFAULT_VOICE = "th-TH-PremwadeeNeural"
# Keep Thai first: the game's compatible-server voice parser retains 400 ids.
VOICES = [DEFAULT_VOICE, "th-TH-NiwatNeural", "en-US-AriaNeural", "en-US-GuyNeural"]
MAX_BODY = 128 * 1024
MAX_TEXT = 8000
MAX_AUDIO = 16 * 1024 * 1024
TIMEOUT = 25
SLOTS = threading.BoundedSemaphore(2)


def speech_input(body):
    """Validate the compatible API before contacting Microsoft."""
    if not isinstance(body, dict):
        raise ValueError("Expected a JSON object.")
    text = body.get("input")
    if not isinstance(text, str) or not text.strip() or len(text) > MAX_TEXT:
        raise ValueError(f"input must contain 1 to {MAX_TEXT} characters.")
    if body.get("model", MODEL) != MODEL:
        raise ValueError("Choose the edge-tts narration model.")
    if body.get("response_format", "mp3") != "mp3":
        raise ValueError("Only mp3 audio is supported.")
    voice = body.get("voice") or DEFAULT_VOICE
    if voice not in VOICES:
        raise ValueError("Choose one of the voices listed by /v1/audio/voices.")
    speed = body.get("speed", 1)
    if isinstance(speed, bool) or not isinstance(speed, (int, float)) or not math.isfinite(speed) or not 0.25 <= speed <= 4:
        raise ValueError("speed must be a finite number from 0.25 to 4.")
    # OpenAI's multiplier becomes Edge's percentage relative to normal pace.
    return text, voice, f"{round((speed - 1) * 100):+d}%"


async def speech_audio(text, voice, rate):
    audio = bytearray()
    async with asyncio.timeout(TIMEOUT):
        async for chunk in edge_tts.Communicate(text, voice, rate=rate).stream():
            if chunk["type"] == "audio":
                audio.extend(chunk["data"])
                if len(audio) > MAX_AUDIO:
                    raise ValueError("The speech clip exceeded the audio limit.")
    if not audio:
        raise ValueError("Microsoft returned no audio.")
    return bytes(audio)


class SpeechServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True


class Handler(BaseHTTPRequestHandler):
    def setup(self):
        super().setup()
        self.connection.settimeout(10)

    def log_message(self, _format, *_args):
        # Narration and credentials must never appear in access logs.
        pass

    def reply(self, status, body, content_type="application/json"):
        payload = json.dumps(body, ensure_ascii=False).encode("utf-8") if content_type == "application/json" else body
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        try:
            self.wfile.write(payload)
        except (BrokenPipeError, ConnectionResetError):
            pass

    def error(self, status, message):
        self.reply(status, {"error": {"message": message}})

    def local_request(self):
        # Only the game server calls this bridge. Reject browser origins and
        # foreign Host headers so a web page cannot spend speech requests.
        port = self.server.server_address[1]
        if self.headers.get("Origin") or self.headers.get("Host") not in {f"127.0.0.1:{port}", f"localhost:{port}"}:
            self.error(403, "This speech bridge accepts local server requests only.")
            return False
        return True

    def do_GET(self):
        if not self.local_request():
            return
        if self.path == "/v1/models":
            self.reply(200, {"object": "list", "data": [{"id": MODEL, "object": "model", "owned_by": "edge-tts"}]})
        elif self.path == "/v1/audio/voices":
            self.reply(200, {"voices": VOICES})
        elif self.path == "/health":
            self.reply(200, {"ok": True, "provider": MODEL})
        else:
            self.error(404, "No such speech endpoint.")

    def do_POST(self):
        if not self.local_request():
            return
        if self.path != "/v1/audio/speech":
            self.error(404, "No such speech endpoint.")
            return
        if self.headers.get_content_type() != "application/json" or self.headers.get("Transfer-Encoding"):
            self.error(400, "Send a JSON body with Content-Length.")
            return
        try:
            size = int(self.headers.get("Content-Length", "0"))
            if not 0 < size <= MAX_BODY:
                self.error(413, "Speech request is empty or too large.")
                return
            arguments = speech_input(json.loads(self.rfile.read(size)))
        except (ValueError, TypeError, UnicodeError):
            self.error(400, "Invalid speech request: use edge-tts, a listed voice, mp3 and speed 0.25 to 4.")
            return
        if not SLOTS.acquire(blocking=False):
            self.error(503, "The Edge speech bridge is busy. Try again shortly.")
            return
        try:
            audio = asyncio.run(speech_audio(*arguments))
        except TimeoutError:
            self.error(504, "Microsoft Edge speech took too long to answer.")
        except Exception:
            # Upstream exception text can contain URLs/tokens or narration.
            self.error(502, "Microsoft Edge speech is unavailable. Check the connection and edge-tts version.")
        else:
            self.reply(200, audio, "audio/mpeg")
        finally:
            SLOTS.release()


if __name__ == "__main__":
    port = int(os.environ.get("EDGE_TTS_PORT", "8881"))
    with SpeechServer(("127.0.0.1", port), Handler) as server:
        print(f"Edge TTS ready at http://127.0.0.1:{server.server_port}/v1 — narration is sent to Microsoft.", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
