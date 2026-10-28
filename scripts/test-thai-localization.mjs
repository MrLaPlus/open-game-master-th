import assert from "node:assert/strict";
import { languageDirective, withLanguage } from "../src/lib/dm/table-language-logic.ts";
import { TABLE_LANGUAGES, TABLE_LANGUAGE_LABELS } from "../src/lib/schemas/game-settings-options.ts";
import { stems, stemWord, stopWordsFor } from "../src/lib/language/language.ts";
import { contentLabel, contentMatches, thaiContent, THAI_CONTENT } from "../src/lib/i18n/content.ts";
import { message } from "../src/lib/i18n/messages.ts";
import { lexicalScore, computeIdf, tokenize } from "../src/lib/dm/fusion-logic.ts";
import { scoreChaptersByKeywords } from "../src/lib/dm/recall-logic.ts";

let passed = 0;
function test(name, fn) { fn(); passed++; console.log(`ok: ${name}`); }
test("Thai is a valid choice with a native label; English prompts are unchanged", () => {
  assert.ok(TABLE_LANGUAGES.includes("thai"));
  assert.equal(TABLE_LANGUAGE_LABELS.thai, "ไทย (Thai)");
  assert.equal(withLanguage("rules", "english"), "rules");
  assert.match(withLanguage("rules", "thai"), /^rules\n\nTABLE LANGUAGE: The players read Thai\./);
});
test("Thai prose guidance protects mechanical fields, player choice and GM secrets", () => {
  const prompt = languageDirective("thai");
  for (const phrase of ["fluent Thai", "fantasy prose", "English", "JSON keys", "numeric mechanics", "hidden GM plans", "players to choose"]) assert.ok(prompt.includes(phrase), phrase);
});
test("Thai segmentation retains words and separates English names even without spaces", () => {
  const tokens = stems("ร่ายFireballใส่ศัตรูที่ประตูเมือง", "thai");
  assert.ok(tokens.includes("firebal"), JSON.stringify(tokens));
  assert.ok(tokens.includes("ประตู"), JSON.stringify(tokens));
  assert.ok(tokens.includes("เมือง"), JSON.stringify(tokens));
  assert.equal(stemWord("เมือง", "thai"), "เมือง");
  assert.ok(tokenize("ยารักษาพิษงู", "thai").includes("ยา"));
  assert.ok(!stopWordsFor("thai").has("เมือง"));
});
test("Thai recall ranks the matching chapter over unrelated scenes", () => {
  const chapters = [
    { index: 1, title: "ประตูเมือง", summary: "พ่อค้าซ่อนกุญแจไว้ข้างประตูเมือง", highlights: [] },
    { index: 2, title: "ป่าต้องสาป", summary: "หมาป่าติดตามนักล่าในป่าลึก", highlights: [] },
    { index: 3, title: "ทะเล", summary: "กัปตันพาเรือกลับท่า", highlights: [] },
  ];
  const ranked = scoreChaptersByKeywords(chapters, "กุญแจของพ่อค้าอยู่ที่ไหน", "thai");
  assert.equal(ranked[0]?.index, 1);
  const docs = chapters.map(x => x.summary);
  const idf = computeIdf(docs, "thai");
  assert.ok(lexicalScore("ประตู", docs[0], idf, "thai") > lexicalScore("ประตู", docs[1], idf, "thai"));
});
test("display overlays preserve canonical input and distinguish a spell from an item", () => {
  const record = Object.freeze({ name: "Fireball", slug: "fireball", data: Object.freeze({ damage: "8d6" }) });
  assert.equal(contentLabel("spells", record.name, "th"), "ลูกไฟ (Fireball)");
  assert.equal(contentLabel("spells", record.name, "en"), "Fireball");
  assert.equal(record.data.damage, "8d6");
  assert.notEqual(thaiContent("spells", "Shield").name, thaiContent("items", "Shield").name);
  assert.equal(contentLabel("spells", "A homebrew spell", "th"), "A homebrew spell");
});
test("Thai and English searches match the same canonical names, including partial Thai", () => {
  for (const [kind, rows] of Object.entries(THAI_CONTENT)) {
    for (const [name, entry] of Object.entries(rows)) {
      assert.ok(contentMatches(kind, name, entry.name), `${kind}: ${name}`);
      assert.ok(contentMatches(kind, name, name));
      assert.ok(entry.name.trim());
    }
  }
  assert.ok(contentMatches("spells", "Fireball", "ลูกไฟ"));
  assert.ok(contentMatches("spells", "Fireball", "fire"));
  assert.ok(!contentMatches("spells", "Shield", "ลูกไฟ"));
});
test("UI translation is opt-in and unknown content remains readable", () => {
  assert.equal(message("New campaign", "th"), "เปิดตำนานบทใหม่");
  assert.equal(message("New campaign", "en"), "New campaign");
  assert.equal(message("A custom world name", "th"), "A custom world name");
});
console.log(`\n${passed} Thai localization tests passed`);
