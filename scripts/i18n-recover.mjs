// Recheck parked proposals after validator fixes without another model call.
// Separate output files avoid racing either worker's active cache.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { validateTranslationRows } from "./lib/i18n-validation.mjs";
const base = path.resolve("translations/th");
const baseline = JSON.parse(fs.readFileSync(path.join(base, "inventory/scope.json"), "utf8")).baseline;
const originals = new Map();
const hash = (value) => createHash("sha256").update(value).digest("hex");
function originalHash(unit, group) {
  if (group === "ui" || group === "system") return unit.id === unit.sourceHash.slice(0, 20) ? unit.sourceHash : null;
  try {
    if (!originals.has(unit.sourceFile)) originals.set(unit.sourceFile, JSON.parse(execFileSync("git", ["show", `${baseline}:${unit.sourceFile}`], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 })));
    const original = originals.get(unit.sourceFile);
    if (group === "rulebook") {
      const page = original.pages.find((row) => row.id === unit.id);
      return page ? hash(JSON.stringify(page)) : null;
    }
    const value = unit.pointer.split("/").slice(1).reduce((entry, key) => entry?.[key.replaceAll("~1", "/").replaceAll("~0", "~")], original);
    return typeof value === "string" ? hash(value) : null;
  } catch { return null; }
}
fs.mkdirSync(path.join(base, "recovered"), { recursive: true });
for (const group of ["ui", "system", "content", "rulebook"]) {
  const units = new Map(JSON.parse(fs.readFileSync(path.join(base, "inventory", `${group}.json`), "utf8")).map((row) => [row.id, row]));
  const target = path.join(base, "recovered", `${group}.json`);
  const rows = new Map((fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, "utf8")) : []).map((row) => [row.id, row]));
  let added = 0;
  for (const file of fs.readdirSync(path.join(base, "progress")).filter((file) => file.startsWith(`${group}-`) && file.endsWith(".rejected.json"))) {
    for (const rejected of JSON.parse(fs.readFileSync(path.join(base, "progress", file), "utf8"))) {
      const source = units.get(rejected.id);
      if (!source || !rejected.proposed) continue;
      // Older rejected files predate the explicit hash field. Recover only
      // if the current source is still the pinned original, not an update.
      if ((rejected.sourceHash ?? originalHash(source, group)) !== source.sourceHash) continue;
      try {
        const [row] = validateTranslationRows([source], [rejected.proposed], group);
        rows.set(row.id, { ...row, recoveredFrom: file }); added++;
      } catch { /* Still invalid: do not publish it or erase the evidence. */ }
    }
  }
  fs.writeFileSync(`${target}.tmp`, `${JSON.stringify([...rows.values()], null, 2)}\n`);
  fs.renameSync(`${target}.tmp`, target);
  console.log(`${group}: ${added} parked proposals now pass structural/mechanical checks; semantic review still required.`);
}
