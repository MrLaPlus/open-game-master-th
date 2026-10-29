// Explicit builder/sheet/reference data slots, not arbitrary user prose.
import fs from "node:fs";
import ts from "typescript";
import { execFileSync } from "node:child_process";
const files = execFileSync("rg", ["--files", "src/app/characters/builder", "src/components/sheet", "src/app/reference", "src/components/ui"], { encoding: "utf8" }).trim().split("\n").filter((file) => file.endsWith(".tsx"));
const kinds = { spell: "spells", feat: "feats", feature: "features", trait: "features", item: "items", gear: "items", weapon: "items", armor: "items", race: "races", species: "races", background: "backgrounds", subclass: "subclasses", archetype: "subclasses", cls: "classes", klass: "classes" };
let count = 0, changed = 0;
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  if (!/^['"]use client['"];/.test(text)) continue;
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX), edits = [];
  function visit(node) {
    if (ts.isJsxElement(node) && /^(GameText|_GameText|Tr|TranslatedText|_I18nText|_I18nValue|style|script|code|pre|title|textarea)$/.test(node.openingElement.tagName.getText(source))) return;
    if (ts.isJsxExpression(node) && node.expression && (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent)) && ts.isPropertyAccessExpression(node.expression)) {
      const value = node.expression, field = value.name.text, object = value.expression.getText(source);
      // Named character/player/campaign/world/NPC records are intentionally
      // absent: their names and prose are authored by people, not locale keys.
      if (!/^(?:spell|feat|feature|trait|item|gear|weapon|armor|race|species|background|subclass|archetype|cls|klass|entry|option|row|pick|candidate)\d*$/i.test(object)) return;
      const mode = /^(name|n)$/.test(field) ? "name" : /^(desc|description|d)$/.test(field) ? "description" : /^(label|hint|summary)$/.test(field) ? "label" : null;
      if (!mode) return;
      const kind = kinds[object.toLowerCase().replace(/\d+$/, "")] ?? "features";
      edits.push({ start: node.getStart(source), end: node.end, text: `<_GameText value={${value.getText(source)}} record={${object}} kind=${JSON.stringify(kind)} mode=${JSON.stringify(mode)} />` });
      count++; return;
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (!edits.length) continue;
  if (!text.includes("GameText as _GameText")) edits.push({ start: source.statements[0].end, end: source.statements[0].end, text: '\nimport { GameText as _GameText } from "@/lib/i18n/GameText";\n' });
  let output = text;
  for (const edit of edits.sort((a, b) => b.start - a.start)) output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  if (ts.createSourceFile(file, output, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX).parseDiagnostics.length) throw new Error(`Invalid edit refused: ${file}`);
  fs.writeFileSync(file, output); changed++;
}
console.log(`Wired ${count} built-in game-data slots in ${changed} files; user-name domains excluded.`);
