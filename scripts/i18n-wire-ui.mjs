// Bounded AST edit: presentation literals only. Never rewrite values, ids,
// object data, comparison operands, event data or user-authored text.
import fs from "node:fs";
import ts from "typescript";
import { execFileSync } from "node:child_process";
const attributes = new Set(["title", "placeholder", "aria-label", "alt", "label", "hint", "heading", "emptyText", "loadingText"]);
const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", mdash: "—", ndash: "–", hellip: "…", times: "×", copy: "©" };
function decode(text) {
  return text.replace(/&([a-z]+|#\d+|#x[\da-f]+);/gi, (whole, name) => name.startsWith("#x") ? String.fromCodePoint(parseInt(name.slice(2), 16)) : name.startsWith("#") ? String.fromCodePoint(Number(name.slice(1))) : entities[name] ?? whole);
}
function jsxText(text) {
  const lines = text.split(/\r\n|\r|\n/);
  let last = lines.length - 1;
  while (last >= 0 && !lines[last].trim()) last--;
  return decode(lines.map((line, index) => {
    let part = line.replace(/\t/g, " ");
    if (index !== 0) part = part.replace(/^ +/, "");
    if (index !== lines.length - 1) part = part.replace(/ +$/, "");
    return part && index < last ? `${part} ` : part;
  }).join(""));
}
function component(node) {
  if (ts.isFunctionDeclaration(node)) return /^[A-Z]/.test(node.name?.text ?? "") || node.modifiers?.some((item) => item.kind === ts.SyntaxKind.DefaultKeyword);
  if (ts.isFunctionExpression(node) && /^[A-Z]/.test(node.name?.text ?? "")) return true;
  if ((ts.isArrowFunction(node) || ts.isFunctionExpression(node)) && ts.isCallExpression(node.parent) && /(?:memo|forwardRef)$/.test(node.parent.expression.getText())) {
    const declaration = node.parent.parent;
    if (ts.isVariableDeclaration(declaration) && /^[A-Z]/.test(declaration.name.getText())) return true;
  }
  return (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) && ts.isVariableDeclaration(node.parent) && /^[A-Z]/.test(node.parent.name.getText());
}
const files = execFileSync("rg", ["--files", "src/app", "src/components"], { encoding: "utf8" }).trim().split("\n").filter((file) => file.endsWith(".tsx"));
let changed = 0, literals = 0;
const skipped = [];
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const source = ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const client = source.statements.some((node) => ts.isExpressionStatement(node) && ts.isStringLiteral(node.expression) && node.expression.text === "use client");
  const edits = [], hooked = new Set();
  let needText = false;
  function owner(node) {
    for (let parent = node.parent; parent; parent = parent.parent) if (component(parent) && parent.body && ts.isBlock(parent.body)) return parent;
    return null;
  }
  function expression(node, text, attribute = false) {
    if (!/[A-Za-z]{2}/.test(text) || /&[a-z]+;/i.test(text)) return null;
    const parent = owner(node);
    if (client && parent) {
      hooked.add(parent);
      return `_uiT(${JSON.stringify(text)})`;
    }
    if (attribute) {
      skipped.push({ file, line: source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1, text, reason: "Server/helper attribute requires explicit localization boundary" });
      return null;
    }
    needText = true;
    return `<_I18nText>{${JSON.stringify(text)}}</_I18nText>`;
  }
  function inTranslation(node) {
    for (let parent = node.parent; parent; parent = parent.parent) {
      if (ts.isJsxElement(parent) && /^(Tr|TranslatedText|_I18nText|style|script|code|pre)$/.test(parent.openingElement.tagName.getText(source))) return true;
    }
    return false;
  }
  function visit(node) {
    if (inTranslation(node)) return;
    if (ts.isJsxText(node)) {
      const text = jsxText(node.text), core = text.trim();
      const value = expression(node, core);
      if (value) {
        const before = text.match(/^\s*/)?.[0] ?? "", after = text.match(/\s*$/)?.[0] ?? "";
        const rendered = value.startsWith("<") ? value : `{${value}}`;
        edits.push({ start: node.getFullStart(), end: node.end, text: `${before ? `{${JSON.stringify(before)}}` : ""}${rendered}${after ? `{${JSON.stringify(after)}}` : ""}` });
        literals++;
      }
    } else if (ts.isJsxAttribute(node) && attributes.has(node.name.getText(source)) && node.initializer && ts.isStringLiteral(node.initializer)) {
      // Existing source contract; SettingToggle already translates this label.
      if (node.name.getText(source) === "label" && node.initializer.text === "Narration") return;
      const value = expression(node, decode(node.initializer.text), true);
      if (value) { edits.push({ start: node.initializer.getStart(source), end: node.initializer.end, text: `{${value}}` }); literals++; }
    } else if (ts.isJsxExpression(node) && node.expression && (ts.isJsxElement(node.parent) || ts.isJsxFragment(node.parent))) {
      const literal = node.expression;
      if (ts.isStringLiteralLike(literal) && literal.text.trim()) {
        const value = expression(node, literal.text);
        if (value) { edits.push({ start: node.getStart(source), end: node.end, text: value.startsWith("<") ? value : `{${value}}` }); literals++; }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (!edits.length) continue;
  for (const fn of hooked) {
    const declared = fn.body.statements.some((statement) => ts.isVariableStatement(statement) && statement.declarationList.declarations.some((declaration) => declaration.name.getText(source) === "_uiT"));
    if (!declared) edits.push({ start: fn.body.getStart(source) + 1, end: fn.body.getStart(source) + 1, text: "\n  const _uiT = _useUiText();" });
  }
  const first = source.statements[0];
  const at = client && first && ts.isExpressionStatement(first) ? first.end : 0;
  const imports = [hooked.size && !original.includes("useUiText as _useUiText") ? "useUiText as _useUiText" : "", needText && !original.includes("Tr as _I18nText") ? "Tr as _I18nText" : ""].filter(Boolean).join(", ");
  if (imports) edits.push({ start: at, end: at, text: `\nimport { ${imports} } from "@/lib/i18n/ui-language";\n` });
  let output = original;
  for (const edit of edits.sort((left, right) => right.start - left.start || right.end - left.end)) output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  fs.writeFileSync(file, output);
  changed++;
}
fs.writeFileSync("translations/th/ui-wiring-report.json", `${JSON.stringify({ changed, literals, skipped }, null, 2)}\n`);
console.log(`Wired ${literals} presentation literals in ${changed} files; ${skipped.length} explicit boundaries remain.`);
