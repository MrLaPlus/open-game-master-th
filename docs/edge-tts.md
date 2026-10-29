# เสียง AI DM ด้วย Microsoft Edge TTS

บริการเสริมนี้ใช้ [edge-tts](https://github.com/rany2/edge-tts) เรียกเสียงออนไลน์ของ Microsoft ไม่ต้องลง Edge หรือ Windows และไม่ใช้ API key แต่ต้องมีอินเทอร์เน็ต ข้อความที่อ่านจะถูกส่งให้ Microsoft จึงไม่ใช่การประมวลผลเสียงในเครื่องทั้งหมด บริการนี้แยกจาก Azure Speech และขึ้นกับการให้บริการของ Edge

## เริ่มใช้งาน

จากโฟลเดอร์โปรเจกต์ ติดตั้งครั้งแรก:

```sh
npm run speech:edge:install
```

ตัวติดตั้งใช้ uv หากมี (สร้าง Python 3.12 environment แยก) หรือ Python 3.11 ขึ้นไปที่ติดตั้งไว้พร้อม venv/pip ไม่แก้แพ็กเกจ Python ของระบบ จากนั้นเปิดบริการเสียงในเทอร์มินัลหนึ่ง:

```sh
npm run speech:edge
```

เปิดเกมด้วย `npm run dev` อีกเทอร์มินัล แล้วตั้ง **Admin → Speech** ผ่านช่องเดิม:

| ช่อง | ค่า |
| --- | --- |
| Narration server | OpenAI-compatible server |
| Server URL | `http://127.0.0.1:8881/v1` |
| Narration model | `edge-tts` |
| Default voice | `th-TH-PremwadeeNeural` |
| API key | เว้นว่าง |

กดทดสอบเสียงและบันทึก จากนั้นเปิด **Narration** ในแคมเปญ หากเคยบันทึก provider อื่นใน Admin ต้องเปลี่ยนที่นี่ เพราะค่าที่บันทึกไว้มีลำดับก่อน environment

สำหรับเซิร์ฟเวอร์ใหม่ สามารถใช้ `.env.server` แทนการกรอก Admin:

```dotenv
TTS_PROVIDER=openai
TTS_BASE_URL=http://127.0.0.1:8881/v1
TTS_MODEL=edge-tts
TTS_VOICE=th-TH-PremwadeeNeural
```

รีสตาร์ตเกมหลังแก้ไฟล์ environment บริการเสียงต้องเปิดอยู่ทุกครั้งที่เล่น; ยังไม่ได้ติดตั้งให้ทำงานอัตโนมัติหลังรีเครื่อง หากใช้ Docker ต้องให้ bridge กับเกมอยู่ network namespace เดียวกัน; `127.0.0.1` ของคนละ container ใช้ร่วมกันไม่ได้

## เสียงและพฤติกรรม

- `th-TH-PremwadeeNeural` — เสียงหญิงไทย ค่าเริ่มต้น
- `th-TH-NiwatNeural` — เสียงชายไทย
- `en-US-AriaNeural`, `en-US-GuyNeural` — เสียงอังกฤษสำหรับแคมเปญภาษาอังกฤษ

เลือกเสียงจากรายการเดิมในแคมเปญ เสียง Kokoro เก่าจะใช้ default voice ตามกลไก compatible-server ที่มีอยู่แล้ว ตัวละครที่ตั้งชื่อเสียง custom เองต้องเปลี่ยนเป็นหนึ่งในเสียงที่รองรับ

ชื่อเวทอังกฤษในประโยคไทยส่งไปอ่านตามต้นฉบับ ไม่แก้ข้อความหรือค่าระบบ ความถูกต้องของการออกเสียงคำแฟนตาซีต้องฟังตรวจจริง สามารถปรับความเร็วผ่านการตั้งค่าเดิม ไม่รองรับ custom SSML หรือการกำกับอารมณ์แบบอิสระ

bridge เปิดเฉพาะ `127.0.0.1` พอร์ต 8881 (เปลี่ยนด้วย `EDGE_TTS_PORT`) รับงานพร้อมกันไม่เกินสองงาน จำกัดข้อความ 8,000 ตัวอักษรและเวลารอ Microsoft 25 วินาที ไม่บันทึกข้อความลง access log `/health` ตรวจว่า bridge ทำงาน ไม่ได้ยืนยันว่า Microsoft ติดต่อได้

## ตรวจสอบ

```sh
.venv-edge-tts/bin/python scripts/edge-tts-test.py
```

บน Windows ใช้ `.venv-edge-tts/Scripts/python.exe` แทน การทดสอบนี้จำลอง upstream เพื่อทดสอบ HTTP, validation, timeout และข้อผิดพลาด ไม่กินบริการเสียงจริง

ขณะเปิด bridge สามารถทดสอบเสียงจริงผ่านระบบ render ของเกมได้ด้วย `node scripts/smoke-edge-tts.mjs` สคริปต์ส่งเฉพาะประโยคตัวอย่างที่เขียนไว้ไป Microsoft สร้างฐานทดสอบแยกและ MP3 สองเสียงใน `../.ogm-validation/edge-audio-*` ไม่เปลี่ยนฐานเกมจริง

ข้อจำกัด: แอป desktop/Android ไม่ได้บรรจุ Python bridge นี้ในตัว ต้องเชื่อมมายังเซิร์ฟเวอร์เกมที่เปิด bridge อยู่ การแปลครบทั้งเกมถูกพักไว้ตามลำดับงานใหม่

## ย้อนกลับ

เปลี่ยน Narration server กลับเป็น Kokoro, provider เดิม หรือ Off ใน Admin แล้วหยุดเทอร์มินัล `speech:edge` หากใช้ `.env.server` ให้คืนเฉพาะสี่ค่า `TTS_*` ข้างต้นแล้วรีสตาร์ตเกม ไม่มีการย้ายฐานข้อมูลหรือเปลี่ยนชื่อเวท/ไอเทม สามารถลบ `.venv-edge-tts` เพื่อถอน environment เสริมได้
