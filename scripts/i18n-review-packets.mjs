// Prepare bounded, source-paired review packets without consuming model quota.
// Review evidence is separate from drafts and becomes stale if either text changes.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
const base = path.resolve("translations/th");
const destination = path.join(base, "review");
fs.mkdirSync(destination, { recursive: true });
const read = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const hash = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
const checklist = [
  "Use only the supplied SRD 5.1 source; do not substitute rules from another edition.",
  "Check prerequisites, triggers, exceptions, negations, optional versus mandatory effects.",
  "Check actions, bonus actions, reactions, per-turn limits and resource costs.",
  "Check duration, concentration, timing, range, area, eligible targets and creature types.",
  "Check saving throw success/failure, repeated saves, damage/healing types, scaling and stacking.",
  "Preserve complete meaning; fluent Thai and matching numbers alone do not establish correctness.",
  "Report pass, needs_fix or uncertain with exact source and Thai quotations for each issue.",
];
const manifest = [];
for (const group of ["content", "rulebook"]) {
  const rows = new Map();
  const ingest = (file) => { if (fs.existsSync(file)) for (const row of read(file)) rows.set(row.id, row); };
  ingest(path.join(base, "cache", `${group}.json`));
  for (const file of fs.readdirSync(path.join(base, "translated")).filter((name) => name.startsWith(`${group}-`) && name.endsWith(".json")).sort()) ingest(path.join(base, "translated", file));
  ingest(path.join(base, "recovered", `${group}.json`));
  for (const unit of read(path.join(base, "inventory", `${group}.json`))) {
    const row = rows.get(unit.id);
    if (!row || row.status !== "translated" || row.sourceHash !== unit.sourceHash) continue;
    if (group === "content" && !/\/(description|desc|text|entries|benefit)(\/|$)/i.test(unit.pointer ?? "") && String(unit.source).length < 200) continue;
    const translation = group === "rulebook" ? { title: row.title, md: row.md, meta: row.meta ?? "", family: row.family ?? "" } : row.th;
    const translationHash = hash(translation);
    const file = `${group}-${hash(unit.id).slice(0, 20)}.json`;
    const packet = { group, id: unit.id, sourceFile: unit.sourceFile, sourceHash: unit.sourceHash, translationHash, checklist, source: unit.source, translation };
    fs.writeFileSync(path.join(destination, file), `${JSON.stringify(packet, null, 2)}\n`);
    manifest.push({ group, id: unit.id, file, sourceHash: unit.sourceHash, translationHash, status: "pending" });
  }
}
fs.writeFileSync(path.join(destination, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Prepared ${manifest.length} review packets; no draft marked reviewed.`);
