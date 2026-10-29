// Read-only source inventory; only generated translation work files are written.
// Re-run after source changes; stable hashes make completed batches reusable.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import ts from "typescript";

const root = process.cwd();
const out = path.join(root, "translations/th");
const hash = (text) => createHash("sha256").update(text).digest("hex");
const ui = new Map();
const system = new Map();
const json = [];
const visible = /^(label|title|description|desc|summary|hint|help|placeholder|aria-label|alt|emptyText|loadingText|message|error|reason|text|n|d|benefit|feature)$/;
const prose = (text) => /[A-Za-z]{2}/.test(text) && !/^[@./#]|^(https?:|data:|SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |PRAGMA )/i.test(text.trim());
const location = (file, node, source) => ({ file, line: source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1 });
function add(map, text, site, kind) {
  text = text.replace(/\s+/g, " ").trim();
  if (!prose(text)) return;
  const id = hash(text).slice(0, 20);
  const row = map.get(id) ?? { id, source: text, sourceHash: hash(text), kinds: [], sites: [] };
  if (!row.kinds.includes(kind)) row.kinds.push(kind);
  if (!row.sites.some((entry) => entry.file === site.file && entry.line === site.line)) row.sites.push(site);
  map.set(id, row);
}
const files = execFileSync("rg", ["--files", "src"], { encoding: "utf8" }).trim().split("\n").sort();
for (const file of files) {
  if (!/\.tsx?$/.test(file) || file.startsWith("src/lib/i18n/")) continue;
  const text = fs.readFileSync(file, "utf8");
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const uiFile = file.startsWith("src/app/") && !file.includes("/api/") || file.startsWith("src/components/");
  function visit(node) {
    if (ts.isJsxText(node)) add(ui, node.text, location(file, node, source), "jsx-text");
    if (ts.isJsxAttribute(node) && visible.test(node.name.getText(source)) && node.initializer && ts.isStringLiteral(node.initializer)) {
      add(ui, node.initializer.text, location(file, node, source), "attribute");
    }
    if (ts.isPropertyAssignment(node) && visible.test(node.name.getText(source).replace(/["']/g, ""))) {
      const value = node.initializer;
      if (ts.isStringLiteralLike(value)) add(uiFile ? ui : system, value.text, location(file, node, source), "display-property");
      if (ts.isTemplateExpression(value)) {
        const template = value.head.text + value.templateSpans.map((span, index) => `{${index}}${span.literal.text}`).join("");
        add(uiFile ? ui : system, template, location(file, node, source), "template-property");
      }
    }
    if (uiFile && ts.isJsxExpression(node) && node.expression && ts.isStringLiteralLike(node.expression)) {
      add(ui, node.expression.text, location(file, node, source), "jsx-expression");
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}
const bookFile = "src/lib/rulebook/srd-5.1.json";
const book = JSON.parse(fs.readFileSync(bookFile, "utf8"));
const bookUnits = book.pages.map((page) => ({
  id: page.id, kind: page.kind, sourceFile: bookFile,
  sourceHash: hash(JSON.stringify(page)), source: page,
}));
for (const file of files.filter((file) => /\.json$/.test(file) && /src\/lib\/(srd|help|backgrounds)\//.test(file))) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  function walk(value, pointer) {
    if (Array.isArray(value)) value.forEach((item, index) => walk(item, `${pointer}/${index}`));
    else if (value && typeof value === "object") {
      for (const [key, item] of Object.entries(value)) {
        if (key.startsWith("_")) continue;
        const child = `${pointer}/${key.replaceAll("~", "~0").replaceAll("/", "~1")}`;
        if (typeof item === "string" && visible.test(key) && prose(item)) {
          json.push({ id: hash(`${file}#${child}`).slice(0, 20), sourceFile: file, pointer: child, source: item, sourceHash: hash(item) });
        } else walk(item, child);
      }
    }
  }
  walk(data, "");
}
function write(file, value) {
  const target = path.join(out, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(`${target}.tmp`, `${JSON.stringify(value, null, 2)}\n`);
  fs.renameSync(`${target}.tmp`, target);
}
const sorted = (map) => [...map.values()].sort((a, b) => a.source.localeCompare(b.source, "en"));
const groups = { ui: sorted(ui), system: sorted(system), content: json, rulebook: bookUnits };
for (const [name, units] of Object.entries(groups)) {
  write(`inventory/${name}.json`, units);
  // Keep prompts bounded. Long rulebook chapters get their own batch.
  const maximum = name === "rulebook" ? 16_000 : 13_000;
  let batch = [], bytes = 0, number = 0;
  function flush() {
    if (batch.length) write(`batches/${name}-${String(number++).padStart(4, "0")}.json`, batch);
    batch = []; bytes = 0;
  }
  for (const unit of units) {
    const size = JSON.stringify(unit).length;
    if (batch.length && bytes + size > maximum) flush();
    batch.push(unit); bytes += size;
  }
  flush();
  console.log(`${name}: ${units.length} candidates, ${number} batches`);
}
write("inventory/book-structure.json", { source: book.source, parts: book.parts, chapters: book.chapters });
write("inventory/scope.json", {
  baseline: "123815ff819d639dbce0183163b1b46b026d5a33", schema: 1,
  counts: Object.fromEntries(Object.entries(groups).map(([name, units]) => [name, units.length])),
  note: "AST candidates require display/technical classification. Counts are not a claim of translation or review completion. External content packs, user text, license originals and developer-only text are outside the shipped-content denominator.",
});
