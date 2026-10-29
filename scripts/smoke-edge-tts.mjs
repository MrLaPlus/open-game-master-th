// Manual online check. Sends only these original sample lines to Microsoft;
// uses the real game render path and an isolated test settings database.
import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { register } from "node:module";

const root = path.resolve(process.cwd(), "..", ".ogm-validation");
fs.mkdirSync(root, { recursive: true, mode: 0o700 });
const output = fs.mkdtempSync(path.join(root, "edge-audio-"));
process.env.SQLITE_DB_PATH = path.join(output, "test.sqlite");
process.env.DB_ENCRYPTION_KEY = randomBytes(32).toString("hex");
process.env.ODM_ENV_FILE = path.join(output, "no-env");
register("./lib/register-alias.mjs", import.meta.url);
const { saveGlobalConfig } = await import("../src/lib/db/app-settings.ts");
const { serverVoices, ttsBackend, effectiveVoice, narrationModel } = await import("../src/lib/tts-backend.ts");
const { renderSpeech } = await import("../src/lib/tts-render.ts");

saveGlobalConfig({ speech: {
  ttsProvider: "openai", ttsBaseUrl: "http://127.0.0.1:8881/v1", ttsModel: "edge-tts",
  ttsVoice: "th-TH-PremwadeeNeural", ttsApiKey: "",
} });
const backend = ttsBackend();
assert.equal(backend.defaultVoice, "th-TH-PremwadeeNeural");
const { ids, listed } = await serverVoices(backend, true);
assert.ok(listed && ids.includes("th-TH-NiwatNeural"));
assert.equal(await narrationModel({ ...backend, model: "" }), "edge-tts");
assert.equal(effectiveVoice("af_heart", backend, ids), backend.defaultVoice);
const requests = [
  { text: "สายหมอกสีเงินไหลผ่านซากวิหาร เสียงระฆังดังมาจากหอคอยร้าง ในมือเจ้ามี Potion of Healing และเบื้องหน้าคือประตูที่ผนึกด้วยมนตรา เจ้าจะทำเช่นไร", voice: "af_heart", speed: 1 },
  { text: "นักเวทชูคทาขึ้น เปลวไฟจาก Fireball ส่องกำแพงหิน ขณะที่นักรบกำ Shortsword แน่น เงามังกรเคลื่อนผ่านแสงจันทร์", voice: "th-TH-NiwatNeural", speed: 0.95 },
];
const clips = await renderSpeech(requests, backend, (audio, index) => {
  assert.ok(audio.length > 1000, "a real speech clip must contain audio");
  fs.writeFileSync(path.join(output, `thai-dm-${index + 1}.mp3`), audio);
});
assert.equal(clips.length, 2);
fs.writeFileSync(path.join(output, "samples.json"), JSON.stringify(requests, null, 2));
console.log(`PASS: model discovery, Thai voices, saved settings, old voice fallback and two real game-rendered clips. Samples: ${output}`);
