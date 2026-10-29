<div align="center">

<img src="docs/banner.png" alt="Open Game Master — เกมผจญภัยที่มี AI เป็นผู้ดำเนินเรื่อง" width="100%">

[ภาษาไทย](README.md) · [English — README ต้นฉบับ](README.en.md)

[![License: MIT](https://img.shields.io/badge/license-MIT-d4ab3a?labelColor=151229&style=flat-square)](LICENSE)
[![Node 22+](https://img.shields.io/badge/node-22%2B-d4ab3a?labelColor=151229&style=flat-square)](package.json)
[![Ruleset: 5e SRD 5.1](https://img.shields.io/badge/ruleset-5e%20SRD%205.1-d4ab3a?labelColor=151229&style=flat-square)](docs/rules-coverage.md)

</div>

# Open Game Master — ฉบับปรับปรุงภาษาไทย

**คลังนี้เป็นงานต่อยอดเพื่อเพิ่มภาษาไทยจาก [Open Game Master ของ Lebbitheplow](https://github.com/Lebbitheplow/open-game-master)** ไม่ใช่คลังต้นฉบับ ผู้พัฒนาต้นฉบับเป็นผู้สร้างระบบเกมหลัก ส่วนคลัง [MrLaPlus/open-game-master-th](https://github.com/MrLaPlus/open-game-master-th) เพิ่มงานแปลไทย การแสดงชื่อและคำอธิบายไทย และบริการเสียง Edge TTS เสริม

| แหล่งที่มา | ลิงก์และเครดิต |
| --- | --- |
| โครงการต้นฉบับที่นำมาต่อยอดโดยตรง | [Lebbitheplow/open-game-master](https://github.com/Lebbitheplow/open-game-master) |
| เว็บไซต์ คู่มือ และชุมชนของต้นฉบับ | [opengamemaster.com](https://opengamemaster.com) · [คู่มือ](https://opengamemaster.com/guide/) · [Discord](https://discord.gg/B2tQFr3TYD) |
| รากฐานก่อน Open Game Master | [Open Dungeon โดย Jacob Ferrari](https://github.com/newideas99/open-dungeon) ตามเครดิตใน [เอกสารลิขสิทธิ์](docs/LICENSES.md) |
| ลิขสิทธิ์ซอฟต์แวร์เดิม | Copyright © 2026 Jacob Ferrari และ Kaleb Lutterman — [MIT License](LICENSE) |
| กติกาและข้อมูล SRD 5.1 | Wizards of the Coast LLC — [CC BY 4.0 และรายละเอียดแหล่งข้อมูล](docs/LICENSES.md#game-rules-data-srd-51) |

ภาพแบนเนอร์ ภาพตัวอย่าง และคำอธิบายความสามารถพื้นฐานใน README นี้สืบมาจากโครงการต้นฉบับ ภาพตัวอย่างยังเป็นหน้าจอภาษาอังกฤษ ส่วน README นี้เรียบเรียงเป็นภาษาไทยและเพิ่มคำแนะนำเฉพาะฉบับไทย เก็บ README ภาษาอังกฤษเดิมไว้ที่ [README.en.md](README.en.md)

> **สถานะภาษาไทย:** มีฉบับแปลร่างครบรายการในบัญชีงานปัจจุบันแล้ว แต่ยังไม่ผ่านรอบตรวจภาษา ความหมายกติกา และหน้าจอจริงครบทุกส่วน จึงยังไม่ใช่รุ่นภาษาไทยที่รับรองเสร็จสมบูรณ์ ดู [สถานะล่าสุด](translations/th/LIVE-STATUS.md) และ [บัญชีความครอบคลุม](translations/th/coverage.json)

## เกมนี้คืออะไร

**Open Game Master** ให้คุณออกผจญภัยแบบ D&D 5e คนเดียวหรือร่วมกับเพื่อน โดยมี AI เป็น Game Master หรือ DM ผู้บรรยายโลก เล่นบท NPC เปิดฉากต่อสู้ และดำเนินเรื่องตามการตัดสินใจของผู้เล่น เซิร์ฟเวอร์และข้อมูลเกมอยู่บนเครื่องที่คุณดูแล

เลือกผู้เล่าเรื่องได้หลายรูปแบบ:

- **โมเดลในเครื่อง:** llama.cpp, Ollama, LM Studio หรือ vLLM
- **บริการผ่าน API:** OpenAI, OpenRouter หรือเซิร์ฟเวอร์ที่เข้ากันได้กับ OpenAI และรองรับ tool calling
- **โปรแกรมเอเจนต์ CLI ที่ล็อกอินไว้:** Codex, Grok Build, Claude Code หรือ opencode โดยใช้บัญชีและข้อจำกัดของผู้ให้บริการนั้น
- **DM ที่เป็นคน:** ให้คนเล่าเรื่อง และใช้แอปช่วยดูแลตัวละคร ลูกเต๋า แผนที่ และบันทึกการเล่น

**AI เล่าเรื่อง ส่วนเซิร์ฟเวอร์เป็นผู้คำนวณกติกา** การทอยลูกเต๋า HP ช่องเวท สถานะ และการทอยหนีความตายผ่านระบบตรวจสอบฝั่งเซิร์ฟเวอร์ AI เปลี่ยนสถานะเกมได้ผ่านเครื่องมือที่เซิร์ฟเวอร์อนุญาตและตรวจสอบเท่านั้น ข้อความที่ผู้เล่นพิมพ์เป็นความตั้งใจที่จะทำ ไม่ใช่ผลสำเร็จที่เกิดขึ้นแล้ว

Open Game Master เดิมชื่อ Open Dungeon Master จนถึงเดือนตุลาคม 2026 ตามประกาศของต้นฉบับ ชื่อเว็บไซต์ปัจจุบันคือ [opengamemaster.com](https://opengamemaster.com)

## ฉบับไทยเพิ่มอะไรบ้าง

- ให้ AI DM บรรยายเป็นภาษาไทย พร้อมแนวทางรักษาชื่ออ้างอิงที่ระบบต้องใช้
- ตัวเลือกภาษาเมนูไทย/อังกฤษ และฟอนต์ Noto Sans Thai ที่เก็บไว้ในโปรเจกต์
- ฉบับแปลร่างของเมนู คำอธิบาย ชื่อเนื้อหา ข้อความระบบ และหนังสือกติกา SRD 5.1 โดยชื่อที่รองรับแสดงแบบไทยร่วมกับชื่ออังกฤษ
- แสดงคำแปลทับชั้นหน้าจอ โดยเก็บ ID ชื่ออ้างอิง ข้อมูลกติกา และค่าที่บันทึกภายในเป็นอังกฤษตามเดิม ชื่อที่ผู้เล่นตั้งเองและ homebrew ไม่ควรถูกแปลทับ
- การตัดคำไทยสำหรับการค้นข้อความบางส่วน งานประเมินความจำระยะยาวและ embeddings ภาษาไทยยังต้องทำต่อ
- บริการเสียงเสริม **Microsoft Edge TTS** สำหรับอ่านคำบรรยายไทย ดู [คู่มือเสียงภาษาไทย](docs/edge-tts.md)

ภาษาเมนูกับภาษาที่ AI เล่าเรื่องเป็นคนละการตั้งค่า เลือก **ไทย** ที่ช่อง **ภาษา / Language** สำหรับหน้าจอ และตั้งภาษาของโต๊ะหรือแคมเปญเป็น **Thai** สำหรับการเล่าเรื่อง

บริการ AI ผ่าน API/CLI และ Edge TTS อาจส่งข้อความไปยังผู้ให้บริการออนไลน์ การติดตั้งเซิร์ฟเวอร์บนเครื่องตัวเองไม่ได้หมายความว่าการประมวลผลทุกอย่างอยู่ในเครื่อง หากต้องการประมวลผลในเครื่องให้เลือก backend และบริการสื่อในเครื่องตาม [คู่มือติดตั้ง](docs/install.md)

## ภาพตัวอย่างจากต้นฉบับ

<img src="docs/screenshot-table.png" alt="โต๊ะเล่นภาษาอังกฤษจากต้นฉบับ: บันทึกเรื่องราว แผนที่ต่อสู้ การ์ดแอ็กชัน และสมาชิกปาร์ตี้" width="960">

*ตัวอย่างแคมเปญ Embers of the Saltglass Coast การ์ดแต่ละใบแสดงการกระทำ การทอย และทรัพยากรที่ใช้ เซิร์ฟเวอร์เป็นผู้ทอยและคำนวณผล*

| แผนที่ต่อสู้ | สร้างตัวละคร |
| --- | --- |
| ![แผนที่พร้อมโทเคน ลำดับเทิร์น และหมอกสงคราม](docs/screenshot-battle-map.png) | ![หน้าจัดค่าสถานะในการสร้างตัวละคร](docs/screenshot-builder.png) |
| **เวิร์กช็อปเตรียมเกม** | **สตูดิโอแผนที่** |
| ![พื้นที่เตรียมโลก NPC เหตุการณ์ และเนื้อหา](docs/screenshot-workshop.png) | ![เครื่องมือวาดแผนที่ วางแสง และจัดเลเยอร์](docs/screenshot-map-studio.png) |

<img src="docs/screenshot-phone.png" alt="ตัวอย่างโต๊ะเล่นบนโทรศัพท์จากต้นฉบับ" width="240">

*ภาพและแอปที่เผยแพร่โดยโครงการต้นฉบับไม่ได้ยืนยันว่ารวมการปรับปรุงภาษาไทยจากคลังนี้แล้ว*

## ความสามารถของระบบหลัก

| ระบบ | สิ่งที่ทำได้ |
| --- | --- |
| โต๊ะเล่นหลายคนและเล่นคนเดียว | สร้างแคมเปญ แชร์รหัสเชิญ เตรียมพร้อมในล็อบบี และรับการเปลี่ยนแปลงสดผ่าน SSE หัวหน้าปาร์ตี้ช่วยดูแลการตั้งค่า การทอย และลำดับเทิร์น |
| กติกา 5e ฝั่งเซิร์ฟเวอร์ | ลำดับการต่อสู้ การใช้แอ็กชัน การโจมตีและคริติคอล ช่องเวท การใช้ช่องเวทระดับสูง สถานะ การพัก AC และการเพิ่มระดับ พร้อมบันทึกการเปลี่ยนแปลง |
| โครงเรื่องและความจำ | โครงเรื่องลับที่ปรับตามความคืบหน้า บันทึกเควสต์ บทสรุปความจำ และแผนที่ต่อสู้พร้อมหมอกสงคราม |
| ตัวละครและเพื่อนร่วมทาง | ชีตตาม SRD 5.1 ตัวเลือกคลาสและภูมิหลัง ขั้นตอนสร้างตัวละคร/เพิ่มระดับ และเพื่อนร่วมทาง AI ที่มีชีตจริง |
| ภาพและแผนที่ | เลือกใช้ ComfyUI, API หรือเอเจนต์ที่รองรับสร้างภาพตัวละคร ฉาก และสถานที่ พร้อมแผนที่ที่คำนวณแนวการมองเห็น |
| ข้อมูลบนเครื่อง | เก็บสถานะใน SQLite ที่เข้ารหัสขณะจัดเก็บ มีบัญชีผู้ใช้ แผงผู้ดูแล และบันทึกตรวจสอบที่ย้อนการเปลี่ยนแปลงได้ |
| เครื่องมือระหว่างเล่น | แชตเสียง ห้องย่อย เสียงบรรยากาศ เพลง ข้อความกระซิบ ลูกเต๋า 3D ลูกเต๋าจริงและ Pixels Bluetooth เสียงอ่าน และ push-to-talk |
| DM ที่เป็นคน | คนเล่าเรื่องผ่านแชตเสียงหรือข้อความ ใช้คอนโซล GM และเลือกให้ AI ช่วยบางหน้าที่ เช่น ควบคุมมอนสเตอร์หรืออ่านข้อความ |
| เวิร์กช็อป | เตรียมแผนที่ บอส NPC encounter คลาส subclass ตารางสุ่ม lore และ storyboard ก่อนนำเข้าแคมเปญ รวมถึงโคลนและแชร์องค์ประกอบ |

รายละเอียดเอนจินดู [docs/engines.md](docs/engines.md) ส่วนกติกาที่บังคับใช้จริง แนวทางประกอบ และขอบเขตที่ยังไม่รองรับดู [docs/rules-coverage.md](docs/rules-coverage.md)

## ติดตั้งฉบับไทยจากซอร์ส

ต้องมี **Node.js 22.18 ขึ้นไปในสาย 22, สาย 24 หรือ 26 ขึ้นไป** ตาม [package.json](package.json) และ backend สำหรับเล่าเรื่องอย่างใดอย่างหนึ่งข้างต้น ภาพและเสียงเป็นตัวเลือกเสริม อ่านข้อกำหนดทั้งหมดใน [คู่มือติดตั้ง](docs/install.md)

งานภาษาไทยปัจจุบันอยู่บนสาขา **`codex/thai-localization`** คลังนี้เป็น private จึงต้องใช้บัญชี GitHub ที่มีสิทธิ์เข้าถึงก่อนโคลน:

```bash
git clone --branch codex/thai-localization --single-branch https://github.com/MrLaPlus/open-game-master-th.git
cd open-game-master-th
npm install
npm run setup
npm run start:lan
```

`npm run setup` เตรียมกุญแจฐานข้อมูล content pack โมเดลความจำ และ production build ส่วน `npm run start:lan` เปิดให้เครื่องในเครือข่ายเข้าถึงที่พอร์ต **3005** เซิร์ฟเวอร์จะแสดงลิงก์พร้อมรหัสตั้งค่าครั้งเดียว เปิดลิงก์นั้นบนเครื่องเซิร์ฟเวอร์เพื่อสร้างบัญชีผู้ดูแลและเลือกผู้เล่าเรื่อง ภาพ เสียง และผู้เล่นผ่านขั้นตอนตั้งค่า

สำหรับพัฒนาบนเครื่องหลังเตรียมระบบแล้ว:

```bash
npm run dev
```

เปิด URL ที่เทอร์มินัลแสดง โดยปกติคือ `http://localhost:3000` ดู [การสำรองและย้ายเครื่อง](docs/backup-restore.md) ก่อนย้ายเซฟ อย่านำไฟล์ environment ที่มีความลับ กุญแจฐานข้อมูล หรือเซฟจริงขึ้น GitHub

### เลือกผู้เล่าเรื่อง

หากใช้ Codex หรือเอเจนต์ CLI อื่น ให้ติดตั้งและล็อกอินบนเครื่องที่รันเซิร์ฟเวอร์ก่อน แล้วเลือก backend และโมเดลที่บัญชีนั้นเรียกใช้ได้จริงในระบบตั้งค่า ชื่อโมเดลและโควตาขึ้นกับผู้ให้บริการ ไม่ต้องกรอก API key เมื่อใช้การล็อกอินของเอเจนต์ตาม [คู่มือเอเจนต์เป็น GM](docs/agent-harness.md)

หากใช้โมเดลในเครื่อง คู่มือต้นฉบับกำหนด VRAM อย่างน้อย **16 GB** สำหรับรูปแบบที่รองรับ เช่น gpt-oss-20b และแนะนำ llama.cpp โดยใช้ context อย่างน้อย **16K tokens** สำหรับเล่าเรื่องและ **24K** สำหรับต่อสู้ แนะนำ **32K ขึ้นไป** รายละเอียดและตัวเลือกฮาร์ดแวร์ดู [text backends](docs/text-backends.md#hardware-for-a-local-model) หากเครื่องไม่ถึงข้อกำหนด ให้ใช้ API เอเจนต์ CLI หรือ DM ที่เป็นคน

### เปิดเสียงอ่านไทยด้วย Edge TTS

ติดตั้งบริการเสริมครั้งแรก แล้วเปิดไว้ในอีกเทอร์มินัลระหว่างเล่น:

```bash
npm run speech:edge:install
npm run speech:edge
```

ใน **Admin → Speech** เลือกเซิร์ฟเวอร์แบบ OpenAI-compatible ตั้ง URL เป็น `http://127.0.0.1:8881/v1` โมเดล `edge-tts` และเสียง `th-TH-PremwadeeNeural` หรือ `th-TH-NiwatNeural` เว้น API key ว่าง จากนั้นทดสอบเสียง บันทึก และเปิด Narration ในแคมเปญ

เสียงส่วนนี้ต้องใช้อินเทอร์เน็ตและส่งข้อความไปยังบริการออนไลน์ของ Microsoft ไม่ใช่ Azure Speech และไม่ได้ประมวลผลเสียงทั้งหมดในเครื่อง อ่านวิธีติดตั้ง Python environment การตั้งค่า และข้อจำกัดใน [docs/edge-tts.md](docs/edge-tts.md)

### แอปและ Docker ของต้นฉบับ

แอปเดสก์ท็อป/Android และ Docker image ที่ต้นฉบับเผยแพร่เป็นทางเลือกสำหรับเล่น **รุ่นต้นฉบับ** ไม่ได้รวมงานไทยในสาขานี้โดยอัตโนมัติ:

- [ดาวน์โหลดแอปต้นฉบับ](https://opengamemaster.com/download/)
- [รุ่นเผยแพร่เซิร์ฟเวอร์ต้นฉบับ](https://github.com/Lebbitheplow/open-game-master/releases)
- [คู่มือ Docker](docs/docker.md) และ [ช่องทางอัปเดต](docs/releases.md)

ตัวอย่าง Docker ของต้นฉบับ:

```bash
curl -O https://raw.githubusercontent.com/Lebbitheplow/open-game-master/stable/docker-compose.yml
docker compose up -d
```

การใช้ฉบับไทยผ่าน Docker ต้อง build จากซอร์สของสาขาไทยและตรวจการตั้งค่าเพิ่มเติม แทนการคาดว่า image ของต้นฉบับมีคำแปลนี้แล้ว

## เอกสารประกอบ

คู่มือเว็บไซต์ต่อไปนี้เป็นของผู้พัฒนาต้นฉบับ และเอกสารส่วนใหญ่ยังเป็นภาษาอังกฤษ:

- [ฐานความรู้](https://opengamemaster.com/guide/), [คำถามที่พบบ่อย](https://opengamemaster.com/guide/reference/faq/) และ [สิ่งที่เปลี่ยนในแต่ละรุ่น](https://opengamemaster.com/guide/reference/whats-new/)
- **ฉบับไทย:** [สถานะล่าสุด](translations/th/LIVE-STATUS.md), [โครงสร้างงานแปล](translations/th/README.md), [แนวทางภาษาไทยรุ่นเริ่มต้น](docs/thai-localization.md) และ [Edge TTS](docs/edge-tts.md) — เอกสารรุ่นเริ่มต้นเป็นประวัติขอบเขตเดิม ใช้สถานะล่าสุดสำหรับยอดงานปัจจุบัน
- **เริ่มต้นและดูแลเซิร์ฟเวอร์:** [ติดตั้ง](docs/install.md), [Docker](docs/docker.md), [สำรองและย้ายเครื่อง](docs/backup-restore.md), [การเผยแพร่รุ่น](docs/releases.md), [ผู้ดูแลและการล็อกอิน](docs/server-admin.md), [ตัวแปรตั้งค่า](docs/configuration.md), [ฐานข้อมูลและการเขียนข้อมูล](docs/storage.md)
- **AI:** [Text backends และความจำ](docs/text-backends.md), [เอเจนต์ CLI เป็น GM](docs/agent-harness.md), [เอเจนต์ผู้เล่นและ webhooks](docs/player-webhooks.md)
- **ภาพ เสียง และลูกเต๋า:** [ตั้งค่าสื่อ](docs/media-setup.md), [สร้างภาพ](docs/image-generation.md), [แชตเสียงและลูกเต๋าจริง](docs/voice-and-dice.md)
- **เนื้อหาและโลก:** [World packs](docs/worlds.md), [ย้ายและแชร์เวิร์กช็อป](docs/workshop-portability.md), [Content pack](docs/content.md), [หลายตัวละครต่อผู้เล่น](docs/multi-character-players.md)
- **Addons:** [ติดตั้งและสิทธิ์](docs/addons.md), [สร้าง addon](docs/addons/authoring.md), [จุดเชื่อมต่อ](docs/addons/extension-points.md), [แนวทางแค็ตตาล็อก](docs/addons/guidelines.md), [โครงสร้าง framework](docs/addons/framework.md)
- **ระบบภายใน:** [เอนจิน](docs/engines.md), [ความครอบคลุมกติกา](docs/rules-coverage.md), [แผนพัฒนาเดิม](docs/ROADMAP.md), [ลิขสิทธิ์และเครดิตทั้งหมด](docs/LICENSES.md)

## เครดิตและสัญญาอนุญาต

**ซอฟต์แวร์ใช้ [MIT License](LICENSE)** โดยคงข้อความลิขสิทธิ์เดิมของ **Jacob Ferrari และ Kaleb Lutterman** ไว้ งานภาษาไทยนี้ต่อยอดจาก **[Open Game Master ของ Lebbitheplow](https://github.com/Lebbitheplow/open-game-master)** ซึ่งมีรากฐานจาก **[Open Dungeon ของ Jacob Ferrari](https://github.com/newideas99/open-dungeon)** ขอบคุณผู้พัฒนาต้นฉบับและผู้ร่วมพัฒนาที่สร้างระบบหลัก

**ข้อมูลกติกาและทรัพยากรภายนอกไม่ได้ใช้ MIT ทั้งหมด** ต้องดูเงื่อนไขของแต่ละรายการใน [docs/LICENSES.md](docs/LICENSES.md):

- **กติกา SRD 5.1:** มาจาก *System Reference Document 5.1* ของ **Wizards of the Coast LLC** ภายใต้ [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/) คำแปลไทยที่ดัดแปลงจาก SRD ยังคงอ้างอิงต้นฉบับนี้ และไม่ใช่คำแปลทางการ ดู [แหล่ง SRD](https://dnd.wizards.com/resources/systems-reference-document) และแหล่งแปลง Markdown **[Old Man Umby's reForged](https://github.com/oldmanumby/dnd.srd.5.1)** ที่ต้นฉบับใช้สร้างหนังสือกติกา
- **WorldForge:** โครงการต้นฉบับนำเครื่องมือสร้างโลกของ **Smoebo** มาปรับใช้โดยได้รับอนุญาต รายละเอียดส่วนที่นำมาใช้อยู่ในเอกสารลิขสิทธิ์
- **เนื้อหาเพิ่มเติมที่โครงการต้นฉบับเขียนเอง:** ตัวเลือกที่ไม่มีในชุดข้อมูลเปิดใช้ถ้อยคำที่ต้นฉบับเรียบเรียงขึ้นเอง ไม่ได้หมายความว่าเนื้อหาทั้งหมดเป็น SRD
- **World packs ของชุมชน:** ติดตั้งภายหลังใน `data/worlds/` ที่ไม่ติดตามด้วย Git เป็นงานของผู้สร้างแต่ละราย ไม่ได้รวมมากับคลังนี้ และไม่ได้อยู่ภายใต้ MIT ของแอปโดยอัตโนมัติ
- **เสียงบรรยากาศและเพลง:** มีเงื่อนไขเฉพาะแยกจากซอฟต์แวร์ ตรวจเครดิตในเอกสารลิขสิทธิ์ก่อนนำไปแจกจ่าย
- **Edge TTS:** ใช้ไลบรารี [edge-tts โดย rany](https://github.com/rany2/edge-tts) เงื่อนไขไลบรารีและบริการเสียงแยกจาก MIT ของแอป ดู [รายละเอียด](docs/LICENSES.md#optional-edge-tts-service)
- **ฟอนต์ภาษาไทย:** Noto Sans Thai โดย Google ภายใต้ SIL Open Font License 1.1 ดู [ไฟล์สัญญาอนุญาต](src/app/fonts/NOTO-THAI-LICENSE.txt)

Dungeons & Dragons และ D&D เป็นเครื่องหมายการค้าของ Wizards of the Coast LLC โครงการนี้ไม่ได้มีความเกี่ยวข้อง ได้รับการรับรอง หรือได้รับการสนับสนุนจาก Wizards of the Coast
