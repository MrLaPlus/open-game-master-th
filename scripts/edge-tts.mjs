import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const environment = path.join(root, ".venv-edge-tts");
const windows = process.platform === "win32";
const python = path.join(environment, windows ? "Scripts/python.exe" : "bin/python");

async function run(command, args) {
  const child = spawn(command, args, { cwd: root, stdio: "inherit", shell: false });
  const forward = (signal) => child.kill(signal);
  const term = () => forward("SIGTERM");
  const interrupt = () => forward("SIGINT");
  process.on("SIGTERM", term);
  process.on("SIGINT", interrupt);
  try {
    await new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("exit", (code, signal) => code === 0 ? resolve() : reject(new Error(`${command} stopped (${signal ?? code}).`)));
    });
  } finally {
    process.off("SIGTERM", term);
    process.off("SIGINT", interrupt);
  }
}

try {
  if (process.argv[2] === "install") {
    if (spawnSync("uv", ["--version"], { stdio: "ignore" }).status === 0) {
      if (!existsSync(python)) await run("uv", ["venv", "--python", "3.12", environment]);
      await run("uv", ["pip", "install", "--python", python, "-r", "scripts/edge-tts-requirements.txt"]);
    } else {
      const systemPython = windows ? "python" : "python3";
      const compatible = spawnSync(systemPython, ["-c", "import sys; sys.exit(0 if sys.version_info >= (3, 11) else 1)"], { stdio: "ignore" });
      if (compatible.status !== 0) throw new Error("Edge narration requires Python 3.11+ with venv/pip, or uv.");
      await run(systemPython, ["-m", "venv", environment]);
      await run(python, ["-m", "pip", "install", "-r", "scripts/edge-tts-requirements.txt"]);
    }
  } else if (!existsSync(python)) {
    throw new Error("Install the optional speech service first: npm run speech:edge:install");
  } else {
    await run(python, ["scripts/edge-tts-server.py"]);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
