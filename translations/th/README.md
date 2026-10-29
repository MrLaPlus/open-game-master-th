# งานภาษาไทยช่วง 1–4

ผู้ใช้อนุมัติให้ทำช่วง 1–4 จนครบและ save ทุกชุด (2026-10-29) พร้อมอนุญาต Codex GPT-6 Luna ช่วยแปล งานช่วงเสียง/ความจำเพิ่มเติมไม่อยู่ในรอบนี้ เกมและ Edge TTS ต้องปิดอยู่

ต้นฉบับตรึงที่ 123815ff จนกว่าจะตรวจ source hash ใหม่ ระบบยังใช้ canonical English/ID เดิม คำแปลเป็น display overlay เท่านั้น

- `inventory/`: ข้อความและตำแหน่งต้นฉบับที่สร้างด้วย `node scripts/i18n-inventory.mjs`
- `batches/`: ชุดต้นฉบับขนาดจำกัดเพื่อทำต่อหลังรีเครื่อง
- `translated/`: ผลแปลทีละชุด เขียนไฟล์ `.tmp` แล้ว rename เมื่อ JSON ถูกต้อง
- `glossary.json`: ศัพท์กลาง ต้องใช้ร่วมกันทุกชุด
- `STATUS.json`: สถานะที่อ่านกลับได้หลังเครื่องค้าง

ผลแปล UI/system/content เป็น array ของ `{id, sourceHash, th, status}` โดย status เป็น `translated` หรือ `technical` (เก็บต้นฉบับเมื่อเป็น ID/คำทางเทคนิค) อย่าเพิ่มข้อความย่อแทนเนื้อหาเต็ม Rulebook ใช้ `{id, sourceHash, title, md, meta?, family?, status}` แปลข้อความครบ รักษาเลข ลูกเต๋า URL ลิงก์ และ code span; คงชื่อ canonical ในวงเล็บเพื่อให้เทียบต้นฉบับได้ ผลอัตโนมัติมีสถานะ translated ไม่ใช่ reviewed จนตรวจแยกแล้ว

รายงานจำนวนต้องแยก translated / reviewed / integrated / verified ห้ามใช้เพียงจำนวนไฟล์เป็นหลักฐานว่าครบแล้ว ไม่มี API key, token, เซฟ หรือ `.env.server` ในโฟลเดอร์นี้
