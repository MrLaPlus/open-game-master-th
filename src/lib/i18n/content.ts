import { textKey } from "../language/text-logic.ts";
import generatedNames from "./generated/names-th.json" with { type: "json" };
import type { UiLanguage } from "./messages.ts";

export type ThaiContent = { name: string; summary?: string };
// Original Thai reading aids, separate from the licensed English rules.
// Summaries are explicitly not replacements for the full mechanics. Never
// feed a translated label back into a sheet, a tool argument or an icon ID.
export const THAI_CONTENT: Readonly<Record<string, Readonly<Record<string, ThaiContent>>>> = {
  spells: {
    "Fireball": { name: "ลูกไฟ", summary: "ระเบิดเพลิงพุ่งจากปลายนิ้วไปยังจุดที่เลือก แล้วแผ่คลุมพื้นที่ เป้าหมายใช้ Dexterity saving throw ตามกติกาเวท ตรวจระยะ รัศมี ความเสียหาย และผลเมื่อเซฟสำเร็จจากกติกาต้นฉบับด้านล่าง" },
    "Magic Missile": { name: "ศรเวท", summary: "สร้างศรพลังเวทที่โจมตีเป้าหมายที่มองเห็นโดยไม่ทอยโจมตี แบ่งศรใส่เป้าหมายเดียวหรือหลายเป้าหมายได้ จำนวนศรและผลเมื่อใช้ช่องเวทระดับสูงขึ้นเป็นไปตามต้นฉบับ" },
    "Cure Wounds": { name: "สมานบาดแผล", summary: "สัมผัสเพื่อฟื้นพลังชีวิตให้สิ่งมีชีวิตตามลูกเต๋าและค่าปรับความสามารถร่ายเวท เวทนี้ไม่มีผลต่อ undead และ construct ตรวจรายละเอียดและการใช้ช่องเวทระดับสูงขึ้นจากต้นฉบับ" },
    "Healing Word": { name: "วาจาเยียวยา", summary: "เปล่งถ้อยคำฟื้นพลังชีวิตให้สิ่งมีชีวิตที่มองเห็นในระยะ ใช้ bonus action จึงยังเหลือ action แต่ต้องเคารพข้อจำกัดการร่ายเวทในเทิร์นเดียวกัน ไม่มีผลต่อ undead และ construct" },
    "Shield": { name: "โล่มนตรา", summary: "เรียกกำแพงพลังด้วย reaction เมื่อเงื่อนไขของเวทเกิดขึ้น เพิ่ม AC ชั่วคราวและป้องกัน Magic Missile ตามกติกา ระยะเวลาคุ้มครองสิ้นสุดตามที่ต้นฉบับระบุ" },
    "Mage Armor": { name: "เกราะมนตรา", summary: "สัมผัสสิ่งมีชีวิตที่ไม่สวมเกราะเพื่อกำหนดค่า AC พื้นฐานด้วยเวท ไม่ใช่โบนัสที่นำไปบวกกับเกราะทุกชนิด ตรวจสูตร AC ระยะเวลา และเงื่อนไขสิ้นสุดจากต้นฉบับ" },
    "Fire Bolt": { name: "ศรเพลิง", summary: "ปล่อยประกายเพลิงใส่เป้าหมายด้วย ranged spell attack ความเสียหายเพิ่มตามระดับตัวละคร เวทพื้นฐานนี้ไม่ใช้ช่องเวท" },
    "Ray of Frost": { name: "ลำแสงเยือกแข็ง", summary: "ยิงลำแสงเย็นด้วย ranged spell attack เมื่อโจมตีโดนจะสร้างความเสียหายและลดความเร็วชั่วคราวตามต้นฉบับ" },
    "Eldritch Blast": { name: "ลำแสงเร้นลับ", summary: "ปล่อยลำแสงพลัง force ด้วย ranged spell attack จำนวนลำแสงเพิ่มตามระดับตัวละคร แต่ละลำแสงใช้การทอยโจมตีแยกกัน" },
    "Guidance": { name: "พรชี้ทาง", summary: "สัมผัสเพื่อช่วย ability check หนึ่งครั้งด้วยลูกเต๋าเสริมตามต้นฉบับ ต้องรักษา concentration และไม่ใช่โบนัสให้ attack roll หรือ saving throw" },
    "Sacred Flame": { name: "เปลวเพลิงศักดิ์สิทธิ์", summary: "เรียกแสงศักดิ์สิทธิ์ลงสู่เป้าหมายที่มองเห็น ให้เป้าหมายทอย Dexterity saving throw แทนการทอยโจมตี ความคุ้มครองจาก cover ใช้ตามข้อยกเว้นของเวท" },
    "Bless": { name: "ประทานพร", summary: "อวยพรพรรคพวกให้เพิ่มลูกเต๋าใน attack roll และ saving throw ต้องรักษา concentration จำนวนเป้าหมายและการใช้ช่องเวทระดับสูงขึ้นดูจากต้นฉบับ" },
    "Bane": { name: "คำสาปอับโชค" }, "Burning Hands": { name: "หัตถ์เพลิง" },
    "Detect Magic": { name: "สัมผัสมนตรา", summary: "รับรู้เวทมนตร์ใกล้ตัวตามขอบเขตที่ต้นฉบับกำหนด ไม่ได้บอกคุณสมบัติทุกอย่างของไอเทมเหมือน Identify ต้องรักษา concentration" },
    "Identify": { name: "หยั่งรู้มนตรา" }, "Sleep": { name: "นิทรามนตรา", summary: "ทำให้สิ่งมีชีวิตหลับตามลำดับและงบพลังชีวิตที่เวทกำหนด ไม่ใช้ saving throw แบบเวทควบคุมทั่วไป ตรวจภูมิคุ้มกันและเงื่อนไขปลุกจากต้นฉบับ" },
    "Charm Person": { name: "มนต์สะกดใจ" }, "Hold Person": { name: "พันธนาการร่าง" },
    "Misty Step": { name: "ย่างก้าวในม่านหมอก" }, "Counterspell": { name: "สลายการร่าย" },
    "Dispel Magic": { name: "สลายมนตรา" }, "Fly": { name: "เหินเวหา" },
    "Invisibility": { name: "ล่องหน" }, "Greater Invisibility": { name: "ล่องหนชั้นสูง" },
    "Light": { name: "แสงสว่าง" }, "Dancing Lights": { name: "แสงเริงระบำ" },
    "Mage Hand": { name: "หัตถ์มายา", summary: "สร้างมือเวทสำหรับหยิบจับและขยับสิ่งของในขอบเขตที่กำหนด มือเวทไม่สามารถโจมตี ใช้ไอเทมเวท หรือทำงานเกินขีดจำกัดน้ำหนักตามต้นฉบับ" },
    "Minor Illusion": { name: "ภาพลวงตาเล็กน้อย", summary: "สร้างเสียงหรือภาพวัตถุลวงตาตามข้อจำกัดของเวท การตรวจพิสูจน์และการสัมผัสมีผลตามต้นฉบับ ภาพลวงตาไม่ได้สร้างความเสียหายจริงด้วยตัวเอง" },
    "Prestidigitation": { name: "กลมนตรา" }, "Thaumaturgy": { name: "ปาฏิหาริย์น้อย" },
    "Vicious Mockery": { name: "วาจากรีดใจ" }, "Dissonant Whispers": { name: "เสียงกระซิบวิปลาส" },
    "Faerie Fire": { name: "ประกายภูต" }, "Goodberry": { name: "ผลไม้แห่งชีวิต" },
    "Entangle": { name: "เถาวัลย์พันธนาการ" }, "Speak with Animals": { name: "สนทนากับสัตว์" },
    "Thunderwave": { name: "คลื่นอัสนี" }, "Shatter": { name: "เสียงสลาย" },
    "Guiding Bolt": { name: "ศรแสงชี้เป้า" }, "Spiritual Weapon": { name: "ศาสตราแห่งจิต" },
    "Spirit Guardians": { name: "วิญญาณพิทักษ์" }, "Revivify": { name: "เรียกชีวิตคืน" },
    "Resurrection": { name: "คืนชีพ" }, "Wish": { name: "ปรารถนา" }, "Haste": { name: "เร่งกาล" },
    "Slow": { name: "หน่วงกาล" }, "Web": { name: "ใยพันธนาการ" }, "Grease": { name: "พื้นลื่น" },
    "Fog Cloud": { name: "ม่านหมอก" }, "Darkness": { name: "ความมืดมนตรา" }, "Silence": { name: "อาณาเขตไร้เสียง" },
    "Hunter's Mark": { name: "ตรานักล่า" }, "Hex": { name: "คำสาปเร้นลับ" }, "Armor of Agathys": { name: "เกราะแห่ง Agathys" },
    "Find Familiar": { name: "อัญเชิญบริวาร" }, "Feather Fall": { name: "ร่วงดุจขนนก" }, "Alarm": { name: "มนต์เตือนภัย" },
    "Message": { name: "ฝากวาจา" }, "Mending": { name: "ซ่อมแซม" }, "Resistance": { name: "พรต้านภัย" },
    "Chill Touch": { name: "สัมผัสสุสาน" }, "Poison Spray": { name: "ละอองพิษ" }, "Shocking Grasp": { name: "สัมผัสสายฟ้า" },
    "Acid Splash": { name: "สาดกรด" }, "True Strike": { name: "หยั่งรู้จุดโจมตี" }, "Spare the Dying": { name: "ประคองชีวิต" },
    "Produce Flame": { name: "ก่อเปลวเพลิง" }, "Shillelagh": { name: "พลังไม้ศักดิ์สิทธิ์" }, "Thorn Whip": { name: "แส้หนาม" },
  },
  items: {
    "Potion of Healing": { name: "ยาฟื้นพลังชีวิต", summary: "ยาวิเศษสำหรับฟื้นพลังชีวิต ปริมาณที่ฟื้นใช้ลูกเต๋าตามชนิดยา การดื่มหรือป้อนให้ผู้อื่นต้องใช้การกระทำตามกติกาของโต๊ะ" },
    "Longsword": { name: "ดาบยาว" }, "Shortsword": { name: "ดาบสั้น" }, "Dagger": { name: "กริช" },
    "Greatsword": { name: "ดาบใหญ่" }, "Rapier": { name: "ดาบเรเปียร์" }, "Scimitar": { name: "ดาบโค้ง" },
    "Quarterstaff": { name: "พลอง" }, "Mace": { name: "กระบองเหล็ก" }, "Warhammer": { name: "ค้อนศึก" },
    "Battleaxe": { name: "ขวานศึก" }, "Handaxe": { name: "ขวานมือ" }, "Greataxe": { name: "ขวานใหญ่" },
    "Longbow": { name: "ธนูยาว" }, "Shortbow": { name: "ธนูสั้น" }, "Light Crossbow": { name: "หน้าไม้เบา" },
    "Shield": { name: "โล่" }, "Leather Armor": { name: "เกราะหนัง" }, "Chain Mail": { name: "เกราะโซ่" },
    "Plate": { name: "เกราะแผ่น" }, "Torch": { name: "คบเพลิง" }, "Rope, Hempen (50 feet)": { name: "เชือกป่าน (50 feet)" },
    "Backpack": { name: "เป้สัมภาระ" }, "Rations (1 day)": { name: "เสบียง (1 วัน)" },
  },
  conditions: {
    "Blinded": { name: "ตาบอด", summary: "มองไม่เห็น การตรวจที่ต้องอาศัยการมองเห็นล้มเหลวโดยอัตโนมัติ การโจมตีของผู้ติดสถานะเสียเปรียบ และการโจมตีใส่ผู้ติดสถานะได้เปรียบ" },
    "Charmed": { name: "ถูกสะกดใจ", summary: "ไม่อาจโจมตีผู้ที่สะกดใจหรือเลือกผู้นั้นเป็นเป้าหมายของความสามารถและเวทที่เป็นอันตราย ผู้สะกดใจได้เปรียบในการทดสอบปฏิสัมพันธ์ทางสังคมกับผู้ติดสถานะ" },
    "Deafened": { name: "หูหนวก", summary: "ไม่ได้ยิน การตรวจที่ต้องอาศัยการได้ยินล้มเหลวโดยอัตโนมัติ" },
    "Frightened": { name: "หวาดกลัว" }, "Grappled": { name: "ถูกจับยึด" }, "Incapacitated": { name: "ไร้ความสามารถกระทำ" },
    "Invisible": { name: "ล่องหน" }, "Paralyzed": { name: "อัมพาต" }, "Petrified": { name: "กลายเป็นหิน" },
    "Poisoned": { name: "ติดพิษ" }, "Prone": { name: "ล้มอยู่" }, "Restrained": { name: "ถูกตรึง" },
    "Stunned": { name: "มึนงง" }, "Unconscious": { name: "หมดสติ" }, "Exhaustion": { name: "อ่อนล้า" },
  },
  classes: {
    "Barbarian": { name: "นักรบคลั่ง" }, "Bard": { name: "กวีมนตรา" }, "Cleric": { name: "นักบวช" },
    "Druid": { name: "ดรูอิด" }, "Fighter": { name: "นักสู้" }, "Monk": { name: "นักบวชยุทธ์" },
    "Paladin": { name: "อัศวินศักดิ์สิทธิ์" }, "Ranger": { name: "พรานพิทักษ์" }, "Rogue": { name: "จอมโจร" },
    "Sorcerer": { name: "จอมเวทสายเลือด" }, "Warlock": { name: "ผู้ทำพันธสัญญา" }, "Wizard": { name: "พ่อมด" },
  },
  races: {
    "Human": { name: "มนุษย์" }, "Elf": { name: "เอลฟ์" }, "Dwarf": { name: "คนแคระ" },
    "Halfling": { name: "ฮาล์ฟลิง" }, "Gnome": { name: "โนม" }, "Half-Elf": { name: "ครึ่งเอลฟ์" },
    "Half-Orc": { name: "ครึ่งออร์ค" }, "Dragonborn": { name: "ดรากอนบอร์น" }, "Tiefling": { name: "ทีฟลิง" },
  },
  skills: {
    "Acrobatics": { name: "กายกรรม" }, "Animal Handling": { name: "ควบคุมสัตว์" }, "Arcana": { name: "ศาสตร์เวท" },
    "Athletics": { name: "พลกำลัง" }, "Deception": { name: "หลอกลวง" }, "History": { name: "ประวัติศาสตร์" },
    "Insight": { name: "หยั่งเจตนา" }, "Intimidation": { name: "ข่มขู่" }, "Investigation": { name: "สืบค้น" },
    "Medicine": { name: "การแพทย์" }, "Nature": { name: "ธรรมชาติวิทยา" }, "Perception": { name: "การรับรู้" },
    "Performance": { name: "การแสดง" }, "Persuasion": { name: "โน้มน้าว" }, "Religion": { name: "ศาสนา" },
    "Sleight of Hand": { name: "มือไว" }, "Stealth": { name: "ลอบเร้น" }, "Survival": { name: "เอาตัวรอด" },
  },
};
const indexes = new Map(Object.entries(THAI_CONTENT).map(([kind, rows]) => [kind, new Map(Object.entries(rows).map(([name, entry]) => [textKey(name), entry]))]));
const translationKinds = new Set([...indexes.keys(), ...Object.keys(generatedNames).map((key) => key.split("|")[0])]);
export function thaiContent(kind: string, name: string): ThaiContent | undefined {
  if (kind === "archetypes") kind = "subclasses";
  const curated = indexes.get(kind)?.get(textKey(name));
  if (curated) return curated;
  const key = `${kind}|${textKey(name)}`;
  const generated = generatedNames as Record<string, string>;
  return Object.hasOwn(generated, key) ? { name: generated[key] } : undefined;
}
export function contentLabel(kind: string, name: string, language: UiLanguage, displayName = name): string {
  // Callers often pass the canonical name as a label even with no reskin.
  // Only an actual world-specific override takes precedence over translation.
  if (displayName !== name) return displayName;
  const entry = language === "th" ? thaiContent(kind, name) : undefined;
  return entry ? `${entry.name} (${name})` : name;
}
export function contentMatches(kind: string, name: string, query: string): boolean {
  const needle = textKey(query);
  const thai = thaiContent(kind, name)?.name;
  return textKey(name).includes(needle) || Boolean(thai && textKey(thai).includes(needle));
}

// Shared chips sometimes have only a name. Translate only an unambiguous
// glossary entry; e.g. Shield needs an explicit spell/item kind.
export function termTranslation(name: string): ThaiContent | undefined {
  const matches = [...translationKinds].map((kind) => thaiContent(kind, name)).filter((entry): entry is ThaiContent => Boolean(entry));
  return matches.length === 1 ? matches[0] : undefined;
}
export function termLabel(name: string, language: UiLanguage): string {
  const entry = language === "th" ? termTranslation(name) : undefined;
  return entry ? `${entry.name} (${name})` : name;
}
