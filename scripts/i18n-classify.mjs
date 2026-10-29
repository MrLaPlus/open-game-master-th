// Structural exclusions: tool contracts and internal prompt prose stay English.
// This runs before the system worker; never write a cache a worker is using.
import fs from "node:fs";
import path from "node:path";
const base = path.resolve("translations/th");
const units = JSON.parse(fs.readFileSync(path.join(base, "inventory/system.json"), "utf8"));
const file = path.join(base, "cache/system.json");
fs.mkdirSync(path.dirname(file), { recursive: true });
const rows = new Map((fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : []).map((row) => [row.id, row]));
const sources = new Map();
function technical(site) {
  if (!sources.has(site.file)) sources.set(site.file, fs.readFileSync(site.file, "utf8").split("\n"));
  const line = sources.get(site.file)[site.line - 1] ?? "";
  if (/^src\/lib\/dm\/catalog-/.test(site.file) && /^\s*(?:description|name)\s*:/.test(line)) return true;
  return /^src\/lib\/dm\/prompt[-.]/.test(site.file);
}
let marked = 0;
for (const unit of units) {
  if (!unit.sites.length || !unit.sites.every(technical)) continue;
  rows.set(unit.id, { id: unit.id, sourceHash: unit.sourceHash, th: unit.source, status: "technical", reviewed: true, reason: "AI-only tool schema/name or internal prompt contract; not rendered to players. Preserve canonical English." });
  marked++;
}
fs.writeFileSync(`${file}.tmp`, `${JSON.stringify([...rows.values()], null, 2)}\n`);
fs.renameSync(`${file}.tmp`, file);
console.log(`${marked} AI contract candidates classified; user-facing API errors and game feedback remain in scope.`);
