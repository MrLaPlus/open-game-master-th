// Manual live Thai playtest, adapted from smoke-harness.mjs. Not included
// in npm test: it uses the signed-in agent plan and creates only an isolated
// encrypted test database. Full transcript is checkpointed after every turn.
// HARNESS=codex node scripts/smoke-thai-harness.mjs (GPT-6 Luna, low)
import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { register } from "node:module";

const HARNESS = process.env.HARNESS || "codex";
const MODEL = process.env.HARNESS_MODEL || (HARNESS === "claude" ? "haiku" : HARNESS === "codex" ? "gpt-6-luna" : "");
const TURNS = Number.parseInt(process.env.HARNESS_TURNS ?? "", 10) || 10;

const outputRoot = path.resolve(process.env.THAI_SMOKE_OUT || path.join(process.cwd(), "..", ".ogm-validation"));
fs.mkdirSync(outputRoot, { recursive: true, mode: 0o700 });
const dir = fs.mkdtempSync(path.join(outputRoot, "live-thai-"));
process.env.ODM_ENV_FILE = path.join(dir, "no-project-env");
process.env.TTS_PROVIDER = "off";
process.env.DM_TURN_WARMUP = "0";
// This baseline uses lexical recall; multilingual semantic quality is a
// separate evaluation. Do not download/load a model on the user's laptop.
globalThis.__odmEmbedderFailure = { at: Date.now(), failures: 1, permanent: true, error: new Error("Semantic embeddings disabled in Thai narration baseline") };
const transcript = [];
console.log(`Live Thai smoke output: ${dir}`);
process.env.SQLITE_DB_PATH = path.join(dir, "test.sqlite");
process.env.DB_ENCRYPTION_KEY = randomBytes(32).toString("hex");
fs.writeFileSync(path.join(dir, "key"), process.env.DB_ENCRYPTION_KEY, { mode: 0o600 });
delete process.env.HARNESS_FAKE;
register("./lib/register-alias.mjs", import.meta.url);

const { saveGlobalConfig } = await import("../src/lib/db/app-settings.ts");
const { createUser } = await import("../src/lib/db/users.ts");
const { createCampaign, setCampaignStatus, updateStorySettings, allocateSeq } = await import("../src/lib/db/campaigns.ts");
const { createSheet } = await import("../src/lib/db/sheets.ts");
const { createSheetSchema } = await import("../src/lib/schemas/sheet.ts");
const { insertCampaignMessage, listRecentMessages } = await import("../src/lib/db/messages.ts");
const { listRecentRolls } = await import("../src/lib/db/rolls.ts");
const { startDmTurn } = await import("../src/lib/dm/turn.ts");
const { handleMcpRequest } = await import("../src/lib/agents/mcp-server.ts");
const { activeBridgeSessions } = await import("../src/lib/harness/bridge.ts");
const { probeHarness } = await import("../src/lib/harness/status.ts");
const { recentAgentActivity } = await import("../src/lib/agents/activity.ts");
const { testHarness } = await import("../src/lib/harness/test-run.ts");

const server = http.createServer(async (req, res) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const response = await handleMcpRequest(
    new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method === "GET" || req.method === "HEAD" ? undefined : Buffer.concat(chunks),
    }),
  );
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
process.env.HARNESS_MCP_URL = `http://127.0.0.1:${server.address().port}/api/mcp`;

saveGlobalConfig({ harness: { id: HARNESS, model: MODEL, utilityModel: MODEL, effort: "low", utilityEffort: "low", maxConcurrent: 1 }, text: { provider: "harness" }, speech: { ttsProvider: "off" } });
const status = await probeHarness(HARNESS, { refresh: true });
console.log(`${status.label} ${status.version ?? "?"} at ${status.path ?? "?"}: auth=${status.auth.state} ${status.auth.plan ?? ""}`);
assert.ok(status.installed, status.message);

const probe = await testHarness();
for (const stage of probe.stages) {
  console.log(`  test stage ${stage.id}: ${stage.ok === null ? "skipped" : stage.ok ? "ok" : "FAILED"}${stage.detail ? ` (${stage.detail.replace(/[\w.+-]+@[\w.-]+/g, "[account]")})` : ""}`);
}
assert.ok(probe.stages.every((stage) => stage.ok), "the admin test turn failed");

const lead = createUser("thai-smoke-lead", randomBytes(16).toString("hex"), { isAdmin: true });
const campaign = createCampaign(lead.id, {
  title: "เสียงระฆังแห่งป่าหมอก",
  description: "Avery เดินทางถึงทางข้ามลำธารข้างป่าหมอก มีหอระฆังร้างอยู่ไกลออกไป ผู้เฝ้าสะพานอาจรู้ข่าวลือ แต่ยังไม่มีใครรู้ต้นตอของเสียงระฆัง",
  theme: "high fantasy, mysterious woodland ford and an old bell tower; warm human voices, ancient magic and meaningful choices",
  maxPlayers: 4,
  startingLevel: 3,
  difficulty: "normal",
  gameSettings: { tableLanguage: "thai", ttsEnabled: false, aiStorySetup: false, narrationLength: "short", companions: "off" },
});
updateStorySettings(campaign.id, { textProvider: "harness", imageGenerationEnabled: false, autoImages: false });
setCampaignStatus(campaign.id, "active");
const avery = createSheet(
  campaign.id,
  lead.id,
  3,
  createSheetSchema.parse({
    name: "Avery",
    race: "human",
    class: "rogue",
    abilities: { str: 12, dex: 17, con: 13, int: 12, wis: 12, cha: 11 },
    maxHp: 24,
    ac: 15,
    hitDice: { die: "d8", total: 3, spent: 0 },
    proficiencies: { saves: ["dex", "int"], skills: ["perception", "athletics"], languages: ["common"], tools: [], armor: [], weapons: ["shortsword"] },
    equipment: [{ name: "Shortsword", qty: 1 }],
    gold: 12,
  }),
);

const actions = [
  "ฉันสำรวจทางข้ามลำธารและหอระฆังที่มองเห็นอยู่ไกลๆ ขอทอย Perception ผ่านระบบให้ด้วย",
  "ฉันเข้าทักผู้เฝ้าสะพานอย่างเป็นมิตร ถามชื่อของเขาและถามว่าทำไมคนในละแวกนี้จึงหลีกเลี่ยงหอระฆัง",
  "ฉันตั้งใจฟังคำเตือน ถามว่ามีใครหายตัวไปหรือพบร่องรอยอะไรบ้าง โดยยังไม่รับปากว่าจะเข้าไป",
  "ฉันตรวจรอยเท้าและกิ่งไม้ที่หักใกล้ทางข้าม ถ้าต้องตรวจให้ใช้เครื่องมือและผลทอยจริงของเกม",
  "ขอคำอธิบายนอกบทสั้นๆ ว่า Magic Missile และ Potion of Healing ใช้ทำอะไร เรียกชื่อสองอย่างนี้เป็นอังกฤษตามเดิม แล้วพากลับเข้าเรื่อง",
  "ฉันจับ Shortsword ที่เอวไว้แต่ยังไม่ชักดาบ ถามผู้เฝ้าสะพานว่าข้างหน้ามีที่พักหรือเส้นทางปลอดภัยหรือไม่",
  "ฉันเดินไปตามเส้นทางอย่างระวัง ขอให้มี Goblin หนึ่งตัวขวางทางตามบริบทของฉาก และเริ่มการต่อสู้ผ่านเครื่องมือเกมจริงเมื่อมันเป็นศัตรู",
  "ถ้ายังสู้กับ Goblin อยู่ ฉันโจมตีตัวที่ใกล้ที่สุดด้วย Shortsword ให้ระบบทอยและตัดสินผล ถ้าไม่อยู่ในการต่อสู้ให้ฉันตรวจร่องรอยในจุดที่พบมัน",
  "ฉันประเมินอาการบาดเจ็บและสิ่งที่เกิดขึ้น ถ้ายังอยู่ในการต่อสู้ให้ฉันใช้ Dodge และจบเทิร์นผ่านระบบ ถ้าปลอดภัยแล้วให้ฉันระวังหลังขณะพักหายใจ",
  "ฉันขอทบทวนว่าใครเตือนเรื่องหอระฆัง เตือนว่าอะไร และเราพบร่องรอยใดแล้ว สรุปเป็นไทยตามเหตุการณ์จริงและเสนอจุดให้ฉันตัดสินใจต่อ",
];
for (let index = 0; index < TURNS; index += 1) {
  insertCampaignMessage({
    campaignId: campaign.id,
    seq: allocateSeq(campaign.id),
    authorType: "player",
    userId: lead.id,
    characterId: avery.id,
    content: actions[index % actions.length],
  });
  const started = Date.now();
  await startDmTurn(campaign.id);
  // The DM's narration after the player's line. The engine may post table
  // notes behind it (an enemy whose turn the program left resolves on its
  // own), so the last message need not be the DM's.
  const recent = listRecentMessages(campaign.id, 10);
  const asked = recent.findLastIndex((message) => message.authorType === "player");
  const after = recent.slice(asked + 1);
  const narration = after.filter((message) => message.authorType === "dm").at(-1);
  console.log(
    `\n--- turn ${index + 1} (${Math.round((Date.now() - started) / 1000)}s) ---\n${(narration?.content ?? "(no narration)").slice(0, 900)}` +
      after
        .filter((message) => message.authorType !== "dm")
        .map((message) => `\n[${message.authorType}] ${message.content.slice(0, 200)}`)
        .join(""),
  );
  assert.ok(narration, `turn ${index + 1} did not produce narration: ${after.map((message) => message.content).join(" / ")}`);
  assert.ok((narration.content.match(/\p{Script=Thai}/gu) ?? []).length >= 20, `turn ${index + 1} is not Thai narration`);
  assert.ok(!/TABLE LANGUAGE:|THIS TURN|GAME STATE:/.test(narration.content), "internal prompt leaked into narration");
  transcript.push({ turn: index + 1, player: actions[index % actions.length], narration: narration.content, seconds: Math.round((Date.now() - started) / 1000) });
  fs.writeFileSync(path.join(dir, "transcript.json"), JSON.stringify(transcript, null, 2));
  assert.equal(activeBridgeSessions(), 0, "a session outlived its turn");
}

const calls = recentAgentActivity({ limit: 100 }).filter((row) => row.grantKind === "turn");
console.log(`\ntool calls through MCP: ${calls.map((row) => `${row.tool}${row.ok ? "" : "(refused)"}`).join(", ") || "none"}`);
console.log(`server rolls: ${listRecentRolls(campaign.id, 50).length}`);

assert.ok(listRecentRolls(campaign.id, 50).length > 0, "the session never exercised server dice");
fs.writeFileSync(path.join(dir, "result.json"), JSON.stringify({ campaignId: campaign.id, turns: transcript.length, serverRolls: listRecentRolls(campaign.id, 50).length, semanticEmbeddings: "disabled; lexical baseline only", harness: HARNESS, model: MODEL || "installed default", effort: "low" }, null, 2));
server.close();
console.log("\nTHAI LIVE HARNESS SMOKE PASS");
process.exit(0);
