// This helper keeps its network identity private under ignored data/.
// It never changes the app's voice or backup configuration.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import net from "node:net";
import { createHash } from "node:crypto";
import { execFileSync, spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const privateDir = path.join(root, "data", "online-host");
const tools = path.join(root, "data", "online-tools");
const socket = path.join(os.tmpdir(), `ogm-online-${process.getuid?.() ?? "user"}-${createHash("sha256").update(root).digest("hex").slice(0, 12)}.sock`);
const cli = path.join(tools, "tailscale");
const daemon = path.join(tools, "tailscaled");
const command = process.argv[2] ?? "status";
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
function configureDevOrigin() {
  const hostname = state()?.Self?.DNSName?.replace(/\.$/, "");
  if (!hostname || !/^[a-z\d.-]+\.ts\.net$/i.test(hostname)) throw new Error("ยังไม่มีชื่อโฮสต์ Tailscale ที่ใช้ได้");
  const file = path.join(root, ".env.local");
  const source = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  const line = /^ALLOWED_DEV_ORIGINS=(.*)$/m;
  const prior = source.match(line)?.[1]?.trim().replace(/^(["'])(.*)\1$/, "$2") ?? "";
  const origins = [...new Set([prior, process.env.ALLOWED_DEV_ORIGINS ?? "", hostname].flatMap((value) => value.split(",")).map((value) => value.trim()).filter(Boolean))];
  const value = origins.join(",");
  if (value === prior) return false;
  const replacement = `ALLOWED_DEV_ORIGINS=${value}`;
  fs.writeFileSync(file, line.test(source) ? source.replace(line, replacement) : `${source}${source && !source.endsWith("\n") ? "\n" : ""}${replacement}\n`, { mode: 0o600 });
  return true;
}
async function health(timeout = 3000) {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/health", { signal: AbortSignal.timeout(timeout) });
    return response.ok && (await response.json()).ok === true;
  } catch { return false; }
}
async function portInUse() {
  return new Promise((resolve) => {
    const socket = net.connect({ host: "127.0.0.1", port: 3000 });
    const done = (value) => { socket.destroy(); resolve(value); };
    socket.once("connect", () => done(true));
    socket.once("error", () => done(false));
    socket.setTimeout(1500, () => done(false));
  });
}
async function share() {
  if (configureDevOrigin() && await portInUse()) throw new Error("เพิ่มชื่อโฮสต์ใน .env.local แล้ว ปิดเกมที่เปิดอยู่ แล้วใช้ npm run play:online อีกครั้งเพื่อโหลดค่านี้");
  if (!await health(60000)) throw new Error("เปิดเกมและรอ /api/health พร้อมก่อนแชร์");
  // First use prints an approval URL and waits. Stream that prompt instead
  // of buffering it until timeout, so the host can complete authorization.
  await new Promise((resolve, reject) => {
    const child = spawn(cli, ["--socket", socket, "funnel", "--bg", "--yes", "http://127.0.0.1:3000"], { cwd: root, stdio: "inherit" });
    const timer = setTimeout(() => { child.kill("SIGTERM"); reject(new Error("ยังเปิด Funnel ไม่สำเร็จ ตรวจลิงก์อนุญาตด้านบนแล้วเรียกคำสั่งใหม่")); }, 5 * 60000);
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
    child.once("exit", (code) => { clearTimeout(timer); if (code === 0) resolve(); else reject(new Error(`Funnel stopped (${code})`)); });
  });
}
async function play() {
  if (!await login()) { process.exitCode = 2; return; }
  if (configureDevOrigin() && await portInUse()) throw new Error("เพิ่มชื่อโฮสต์ใน .env.local แล้ว ปิดเกมที่เปิดอยู่ แล้วใช้ npm run play:online อีกครั้งเพื่อโหลดค่านี้");
  const children = [];
  let closing = false;
  let keepAlive;
  // Only processes started by this launcher are stopped with it.
  const close = () => {
    if (closing) return;
    closing = true;
    clearInterval(keepAlive);
    try { run(["funnel", "reset"]); } catch { /* Already disconnected. */ }
    for (const child of children) {
      try { process.kill(-child.pid, "SIGTERM"); } catch { /* Already exited. */ }
    }
  };
  process.once("SIGINT", () => { close(); process.exit(0); });
  process.once("SIGTERM", () => { close(); process.exit(0); });
  const launch = (script, env = process.env) => {
    const args = ["run", script, ...(script === "start" ? ["--", "--port", "3000"] : [])];
    const child = spawn(npm, args, { cwd: root, env, detached: true, stdio: "inherit" });
    child.on("error", (error) => { console.error(error.message); close(); process.exitCode = 1; });
    child.on("exit", (code) => { if (!closing) { console.error(`${script} stopped (${code})`); close(); process.exitCode = 1; } });
    children.push(child);
  };
  try {
    if (!await portInUse()) {
      if (!fs.existsSync(path.join(root, ".next", "BUILD_ID"))) {
        console.log("กำลังเตรียมเกมครั้งแรก หลังจากนี้จะใช้ build เดิมโดยไม่คอมไพล์ระหว่างเล่น...");
        await new Promise((resolve, reject) => {
          const child = spawn(npm, ["run", "build", "--", "--webpack"], { cwd: root, env: { ...process.env, OGM_LOW_MEMORY_BUILD: "1", NODE_OPTIONS: process.env.NODE_OPTIONS || "--max-old-space-size=3072" }, detached: true, stdio: "inherit" });
          children.push(child);
          child.once("error", reject);
          child.once("exit", (code) => {
            const index = children.indexOf(child);
            if (index >= 0) children.splice(index, 1);
            if (code === 0) resolve(); else reject(new Error(`เตรียมเกมไม่สำเร็จ (${code}) ตรวจข้อความ build ด้านบน`));
          });
        });
      }
      if (closing) return;
      console.log("กำลังเปิดเกมจาก production build...");
      launch("start");
    }
    const settingsFile = path.join(root, ".env.server");
    const edge = fs.existsSync(settingsFile) && /^TTS_BASE_URL=.*(?:127\.0\.0\.1|localhost):8881/m.test(fs.readFileSync(settingsFile, "utf8"));
    if (edge) {
      let ready = false;
      try { ready = (await fetch("http://127.0.0.1:8881/v1/models", { signal: AbortSignal.timeout(1500) })).ok; } catch { /* Optional local bridge. */ }
      if (!ready) launch("speech:edge");
    }
    for (let attempt = 0; attempt < 120 && !await health(); attempt++) {
      if (closing) return;
      if (attempt % 5 === 0) console.log("กำลังรอเกมพร้อม...");
      await wait(2000);
    }
    if (closing) return;
    await share();
    console.log("ส่งลิงก์ HTTPS ด้านบนให้เพื่อน กด Ctrl+C เพื่อหยุดแชร์และปิดบริการที่ตัวเปิดนี้เริ่มไว้");
    keepAlive = setInterval(() => {}, 60000);
    process.once("exit", () => { clearInterval(keepAlive); close(); });
  } catch (error) { close(); throw error; }
}
function run(args, timeout = 20000) {
  return execFileSync(cli, ["--socket", socket, ...args], { cwd: root, encoding: "utf8", timeout, stdio: ["ignore", "pipe", "pipe"] });
}
function state() { try { return JSON.parse(run(["status", "--json"])); } catch { return null; } }
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function startDaemon() {
  if (state()) return;
  if (process.platform !== "linux") throw new Error("ตัวช่วยนี้ยังรองรับ Linux เท่านั้น ใช้เกมและระบบเสียงเดิมได้ตามปกติบนระบบอื่น");
  if (!fs.existsSync(cli) || !fs.existsSync(daemon)) execFileSync(process.execPath, [path.join(root, "scripts/install-online-tools.mjs")], { cwd: root, stdio: "inherit" });
  fs.mkdirSync(privateDir, { recursive: true, mode: 0o700 });
  const fd = fs.openSync(path.join(privateDir, "network.log"), "a", 0o600);
  const child = spawn(daemon, ["--tun=userspace-networking", `--statedir=${privateDir}`, `--state=${path.join(privateDir, "tailscaled.state")}`, `--socket=${socket}`], { cwd: root, detached: true, stdio: ["ignore", fd, fd] });
  fs.closeSync(fd);
  await new Promise((resolve, reject) => { child.once("spawn", resolve); child.once("error", reject); });
  child.unref();
  for (let attempt = 0; attempt < 20; attempt++) { if (state()) return; await wait(500); }
  throw new Error("บริการเครือข่ายยังไม่พร้อม ตรวจ data/online-host/network.log");
}
async function login() {
  await startDaemon();
  if (state()?.BackendState === "Running") { console.log("ล็อกอินแล้ว"); return true; }
  try { run(["up", "--hostname=ogm-host", "--accept-dns=false", "--timeout=60s"], 65000); } catch (error) {
    const url = state()?.AuthURL || `${error.stdout ?? ""}\n${error.stderr ?? ""}`.match(/https:\/\/login\.tailscale\.com\/a\/[^\s]+/)?.[0];
    if (url) { console.log(`เปิดลิงก์นี้และล็อกอินด้วยตนเอง:\n${url}\nหลังล็อกอินเรียบร้อย ใช้คำสั่งเดิมอีกครั้ง`); return false; }
    throw error;
  }
  return state()?.BackendState === "Running";
}
try {
  if (command === "start") await play();
  else if (command === "login") { if (!await login()) process.exitCode = 2; }
  else if (command === "status") {
    const s = state();
    console.log(JSON.stringify({ running: s?.BackendState === "Running", state: s?.BackendState ?? "not-started", hostname: s?.Self?.DNSName ?? null }, null, 2));
    if (s?.BackendState === "Running") console.log(run(["funnel", "status"]));
  } else if (command === "share") {
    if (await login()) {
      await share();
    } else process.exitCode = 2;
  } else if (command === "stop") {
    if (state()?.BackendState === "Running") console.log(run(["funnel", "reset"]));
    console.log("หยุดแชร์ลิงก์เกมแล้ว ไม่ได้ลบข้อมูลเกมหรือการตั้งค่าเสียง");
  } else throw new Error("ใช้ start, login, status, share หรือ stop");
} catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
