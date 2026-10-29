// Compile only completed, source-matching translation units into runtime overlays.
import fs from "node:fs";
import path from "node:path";
import { textKey } from "../src/lib/language/text-logic.ts";
const root = process.cwd();
const base = path.join(root, "translations/th");
const generated = path.join(root, "src/lib/i18n/generated");
fs.mkdirSync(generated, { recursive: true });
const messages = {}, names = {}, rulebook = {}, report = {};
const allOutput = fs.readdirSync(path.join(base, "translated")).filter((file) => file.endsWith(".json"));
const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
function write(file, value) {
  fs.writeFileSync(`${file}.tmp`, `${JSON.stringify(value)}\n`);
  fs.renameSync(`${file}.tmp`, file);
}
const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", mdash: "—", ndash: "–", hellip: "…", times: "×", copy: "©" };
function decode(text) { return text.replace(/&([a-z]+);/g, (whole, name) => entities[name] ?? whole); }
function kindOf(unit) {
  const file = unit.sourceFile;
  if (/authored-spells|\/manifest\/spells\.json$/.test(file)) return "spells";
  if (/\/(?:authored-)?feats?\.json$/.test(file)) return "feats";
  if (/subclasses/.test(file)) return /\/name$/.test(unit.pointer) ? "subclasses" : "features";
  if (/races/.test(file)) return /\/traits\//.test(unit.pointer) ? "features" : "races";
  if (/classes/.test(file)) return "classes";
  if (/backgrounds/.test(file)) return "backgrounds";
  if (/skills/.test(file)) return "skills";
  if (/creature/.test(file)) return "monsters";
  return "features";
}
function nameOnly(text, canonical) {
  const suffix = ` (${canonical})`;
  return text.endsWith(suffix) ? text.slice(0, -suffix.length) : text;
}
for (const group of ["ui", "system", "content", "rulebook"]) {
  const units = read(path.join(base, "inventory", `${group}.json`));
  const rows = new Map();
  const cache = path.join(base, "cache", `${group}.json`);
  if (fs.existsSync(cache)) for (const row of read(cache)) rows.set(row.id, row);
  for (const file of allOutput.filter((file) => file.startsWith(`${group}-`))) {
    for (const row of read(path.join(base, "translated", file))) rows.set(row.id, row);
  }
  let translated = 0, technical = 0, reviewed = 0;
  for (const unit of units) {
    const row = rows.get(unit.id);
    if (!row || row.sourceHash !== unit.sourceHash) continue;
    if (row.status === "technical") { technical++; continue; }
    translated++;
    if (row.reviewed === true) reviewed++;
    if (group === "rulebook") {
      rulebook[unit.id] = { sourceHash: row.sourceHash, title: row.title, md: row.md, ...(row.meta ? { meta: row.meta } : {}), ...(row.family ? { family: row.family } : {}) };
      const kind = { spell: "spells", item: "items", monster: "monsters", race: "races", class: "classes" }[unit.kind];
      if (kind) names[`${kind}|${textKey(unit.source.title)}`] = nameOnly(row.title, unit.source.title);
    } else if (group === "content" && /\/(name|n|feature)$/.test(unit.pointer)) {
      names[`${kindOf(unit)}|${textKey(unit.source)}`] = nameOnly(row.th, unit.source);
    } else if (group === "system" && unit.sites.some((site) => site.property === "name" && /^src\/lib\/srd\/(?:weapons|armor-table|adventuring-gear|magic-items|magic-gear)\.ts$/.test(site.file))) {
      names[`items|${textKey(unit.source)}`] = nameOnly(row.th, unit.source);
    } else {
      const source = decode(unit.source), target = decode(row.th);
      // Curated seed messages still win at runtime. Full descriptions keep
      // their newlines; only UI's AST candidates were whitespace-normalized.
      messages[source] ??= target;
    }
  }
  report[group] = { total: units.length, translated, technical, pending: units.length - translated - technical, reviewed };
}
write(path.join(generated, "messages-th.json"), messages);
write(path.join(generated, "names-th.json"), names);
write(path.join(generated, "rulebook-th.json"), rulebook);
write(path.join(base, "coverage.json"), { schema: 1, groups: report, note: "Translated/compiled is not the same as reviewed or browser-verified. Technical exclusions still need audit." });
console.log(JSON.stringify(report));
