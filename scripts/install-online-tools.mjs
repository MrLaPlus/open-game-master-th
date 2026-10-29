// Optional Linux-only static helper; no root install or router changes.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const version = "1.104.4";
const arch = { x64: "amd64", arm64: "arm64" }[process.arch];
const directory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../data/online-tools");
try {
  if (process.platform !== "linux" || !arch) throw new Error("ตัวช่วยออนไลน์นี้รองรับ Linux x64/arm64 เท่านั้น ระบบเกมเดิมบนแพลตฟอร์มอื่นไม่เปลี่ยนแปลง");
  fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
  const binary = path.join(directory, "tailscale");
  if (fs.existsSync(binary) && fs.existsSync(path.join(directory, "tailscaled")) && execFileSync(binary, ["version"], { encoding: "utf8" }).split("\n")[0] === version) {
    console.log(`Tailscale ${version} พร้อมแล้ว`);
    process.exit(0);
  }
  const filename = `tailscale_${version}_${arch}.tgz`;
  const base = "https://pkgs.tailscale.com/stable/";
  console.log(`ดาวน์โหลด Tailscale ${version} จากผู้พัฒนา...`);
  const response = await fetch(base + filename, { signal: AbortSignal.timeout(120000) });
  if (!response.ok) throw new Error(`Download HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const checksum = await fetch(base + filename + ".sha256", { signal: AbortSignal.timeout(30000) });
  if (!checksum.ok) throw new Error(`Checksum HTTP ${checksum.status}`);
  const expected = (await checksum.text()).trim().split(/\s+/)[0];
  if (!/^[a-f\d]{64}$/i.test(expected) || createHash("sha256").update(bytes).digest("hex") !== expected) throw new Error("SHA-256 ไม่ตรง ยกเลิกการติดตั้ง");
  const archive = path.join(directory, filename);
  fs.writeFileSync(archive, bytes, { mode: 0o600 });
  const prefix = `tailscale_${version}_${arch}`;
  execFileSync("tar", ["-xzf", archive, "--strip-components=1", "-C", directory, `${prefix}/tailscale`, `${prefix}/tailscaled`]);
  console.log(`Tailscale ${version} พร้อมแล้ว ตรวจ SHA-256 ผ่าน`);
} catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
