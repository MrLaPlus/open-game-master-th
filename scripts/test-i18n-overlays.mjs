import assert from "node:assert/strict";
import { makeMessageFormatter } from "../src/lib/i18n/format.ts";
import { parseBook } from "../src/lib/rulebook/markdown.ts";
import { sameMechanics, validateTranslationRows } from "./lib/i18n-validation.mjs";

const format = makeMessageFormatter({
  "Save": "บันทึก",
  "It is now {0}'s turn (round {1}).": "ตอนนี้เป็นเทิร์นของ {0} (รอบ {1})",
  "A [test] ({0}) costs +{1}.": "การทดสอบ ({0}) ใช้ +{1}",
});
assert.equal(format("Save"), "บันทึก");
assert.equal(format("constructor"), "constructor");
assert.equal(format("__proto__"), "__proto__");
assert.equal(format("A private world name"), "A private world name");
assert.equal(format("It is now Avery's turn (round 2)."), "ตอนนี้เป็นเทิร์นของ Avery (รอบ 2)");
assert.equal(format("A [test] ($&.[Avery]) costs +1d6."), "การทดสอบ ($&.[Avery]) ใช้ +1d6");

const blocks = parseBook("## การกระทำ\n\nเลือกการกระทำของคุณ", { section: "actions-in-combat" });
assert.equal(blocks[0].anchor, "actions-in-combat");
assert.equal(parseBook("## Actions in combat\n\nChoose an action.")[0].anchor, "actions-in-combat");

assert.ok(sameMechanics("Gain 1 Strength, maximum 20, and four weapons.", "เพิ่ม Strength 1 สูงสุด 20 และอาวุธ 4 ชนิด"));
assert.ok(sameMechanics("Blind for a minute within 30 feet.", "ตาบอดเป็นเวลา 1 นาทีภายใน 30 ฟุต"));
assert.ok(sameMechanics("Deal 1d8-1 damage and take a -2 penalty.", "สร้างความเสียหาย 1d8-1 และรับค่าปรับ -2"));
assert.ok(!sameMechanics("Deal 1d8-1 damage.", "สร้างความเสียหาย 1d8+1"));
assert.ok(!sameMechanics("Take a -2 penalty.", "รับโบนัส 2"));
assert.ok(!sameMechanics("Gain 1 Strength, maximum 20.", "เพิ่ม Strength 2 สูงสุด 20"));

const source = [{ id: "test", sourceHash: "original", source: "Gain 1 Strength, maximum 20." }];
const result = validateTranslationRows(source, [{ id: "test", sourceHash: "model-cannot-change-this", th: "เพิ่ม Strength 1 สูงสุด 20", status: "translated" }], "content");
assert.equal(result[0].sourceHash, "original");
assert.equal(result[0].reviewed, false);
assert.throws(() => validateTranslationRows(source, [{ id: "other", th: "เพิ่ม Strength 1 สูงสุด 20" }], "content"));
assert.throws(() => validateTranslationRows(source, [{ id: "test", th: "เพิ่ม Strength 99 สูงสุด 20" }], "content"));
console.log("i18n overlays: formatter, preserved names, stable anchors, mechanics and source identity checks passed");
