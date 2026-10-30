# LATEST 2026-10-30: selected priority review scope saved through batch004

This turn completed99 rule subsections (Combat62/62 + Spellcasting33/33 + Adventuring4/30 selectedResting/ShortRest/LongRest/Recuperating) and12 related healing/death/restoration spell pages. Full rulebook reviewed26/933, remaining907 (including partialAdventuring). Latest evidence per-page: original12 semantic-001.json; Spellcasting semantic-002.json; completeCombat and partialAdventuring semantic-003.json; selected12healing/death spells semantic-004.json. All26 full rows current source/hash/generated/numeric/link checks verified; batch00412section/full-row checks plus overlay tests/Thai7regressions pass. No full build/browser claim. SourceEnglish and canonicalengine data unchanged.

Important fixes batch004: SparetheDying requires LIVING at0HP, Heal Construct exclusion is creature type not buildings, consumed diamonds explicit, GentleRepose copperperEACHeye muststay, LesserRestoration condition list exhaustive. Review docs have exactsource/before/after and clause-level checks. OtherUI/system/content remainreviewed0; duplicates not implied.

User priority is combat→spellcasting/concentration→rest/healing/death; keep focusing related remaining spell details (masshealing/protection candidates) before othergroups if continuing. Primary assistant in THIS CHAT ONLY, no agents/CLI model review workers. Save meaningful validated batches to privateGitHub. Hosting remainspaused; services untouched; preserve pre-existing unstaged docs/online-play-th.md. Entire semantic review is NOT finished and no worker runs after the turn.

--- Earlier checkpoints follow ---

# LATEST 2026-10-30: priority core rules complete, batch003 saved

Combat reviewed62/62 sections (whole page reviewedtrue, latest evidence semantic-003.json); Spellcasting33/33 complete (semantic-002.json). Adventuring ONLY Resting/ShortRest/LongRest/Recuperating indices19,20,21,27 reviewed4/30, wholepage reviewedfalse. Full rulebook14/933. Prior Combat partial002 is historical; all47 unchanged section hashes carried into003. Hash/numeric/dice/link/code/placeholder/Markdown/generated equality checks pass plus existing overlay and Thai7 regressions. Evidence-generator leading-empty split error corrected and actual headings confirmed before checkpoint.

Next in authorized user priority: healing/death/restoration spell details (Spare the Dying, Revivify, Raise Dead, Resurrection, True Resurrection, Gentle Repose, Death Ward, Heal, Regenerate, Prayer of Healing, Lesser/Greater Restoration). Primary assistant in THIS CHAT only; no agents/CLI workers. Do not review other UI/system/content categories ahead of these. Save each validated batch to private GitHub. Hosting paused; services untouched; preserve unstaged docs/online-play-th.md. Helpers ../.ogm-validation/read-review-section.mjs and check-priority-review.mjs read current source pairs and verify supplied evidence; older Combat002 full-page snapshot naturally no longer matches current003, so validate latest per-page evidence.

--- Earlier checkpoints follow ---

# LATEST 2026-10-30: priority review batch002 saved

User priority order: combat → spellcasting/concentration → rest/healing/death. Review primary assistant in this chat ONLY, no agents/CLI workers. Batch002 evidence translations/th/review/semantic-002.json: combat47/62 sections reviewed (indices0-42,58-61; full-page reviewedfalse), spellcasting33/33 (full-page reviewedtrue). Full rulebook review13/933; prior12 remain valid. Checks current source/translation/80 section hashes, numeric/dice/negative/link/code/placeholder, generated fields and Markdown pass. Next: read/compare combat43-57 for damage/healing/death; adventuring19-21 (Resting,ShortRest,LongRest),27(Recuperating). Save partial evidence for Adventuring; do not mark unread entire page reviewed. Use ../.ogm-validation/read-review-section.mjs and check-priority-review.mjs for bounded source pairs and check reproduction. Live status has historical first-batch details plus current updates. No services touched; hosting paused, private state protected. docs/online-play-th.md remains pre-existing unstaged hosting notes; preserve.

--- Prior checkpoint follows ---

# CURRENT 2026-10-30: semantic review prioritized by user

User said เริ่มรอบตรวจความหมาย ก่อนละกัน. Review in THIS CHAT only; no agents or CLI model probes/review workers. Batch001 complete: 12/933 full rulebook pages, current source hashes and translations matched; evidence translations/th/review/semantic-001.json. Conditions includes all 15 conditions; 11 spells include Shield, Counterspell, Dispel Magic, Hold Person and Haste. Concrete meaning fixes applied to display overlays, generated JSON updated. Existing overlay checks, 7 Thai regressions, and 12-page evidence/mechanics/heading/generated checks passed. UI/system/content remain reviewed0; duplicates not implicitly approved. Next: continue unreviewed rulebook sections and save each validated batch, then other groups and technical-exclusion audit.

Online hosting paused. Latest 4GiB build exited with node:crypto client import error (dice.ts → srd/odds.ts → reference/compare.ts → app/reference/page.tsx), not a successful build. Game remains last-known stopped; TTS/Tailscale/maintenance were running during hosting; no service-state changes performed for semantic review. Public hostname remains maintenance, not playable game. Do not start full build while reviewing. Prior instructions and private-state protections below remain applicable; prior ACTIVE BUILD labels are historical. Uncommitted docs/online-play-th.md contains prior hosting notes and must be preserved.

--- Historical handoff follows ---

# LATEST ACTIVE: 4GiB optimized build, session 29166

Previous JSON-optimized full build STILL hit 3GiB V8 heap at ~510sec (log online-production-json-memory.log). Failed processes stopped. Unlimited core dumps caused post-failure resource pressure; all new builds disable core dump in CHILD ONLY. Once memory released, available RAM=4.7GiB, fitting 4GiB heap+512MiB budget.

Now running: ulimit -c 0; OGM_LOW_MEMORY_BUILD=1 NODE_OPTIONS=--max-old-space-size=4096 nice -n 10 npm run build -- --webpack. Tool session 29166; log ../.ogm-validation/online-production-4g.log. One heavy task only. next.config low-memory optimizations+JSON exportsDepth0 remain. Online launcher now preflights MemAvailable and uses 4096MB+child core limit. Syntax/diff checks and commit of latest launcher update still needed.

Game stopped, Edge TTS+Tailscale daemon running. Public URL root still maintenance HTTP on port39389/PID449809 (details online-maintenance.json). On BUILD SUCCESS start npm run play:online; wait health, confirm Funnel remaps3000, public root/CSS/JS/origin and mobile. Then stop maintenance PID safely. No semantic translation review started. GitHub build blocked by billing; do not change billing.

--- Older checkpoints below ---

# LATEST ACTIVE BUILD: session 2487 — targeted JSON memory rule

The previous 3GB build was stopped BEFORE OOM after inspector measured heapUsed ~3.14GB. No process from it remains. New evidence: isolated real-translation JSON round-trip build with 64 synthetic entry runtimes used 34.6% less peak RSS with parser.exportsDepth=0; every key/value matched baseline digest. Webpack 5.98.0 supports option. next.config.ts now limits this rule to generated translation JSON (whole-default imports only), in opt-in low-memory mode.

Current full build: OGM_LOW_MEMORY_BUILD=1 NODE_OPTIONS=--max-old-space-size=3072 nice -n 10 npm run build -- --webpack; session 2487; log ../.ogm-validation/online-production-json-memory.log. Single heavy task only. Game stopped, public URL still temporary preparation page. Edge TTS running. Need finish build, start npm run play:online, verify actual public root/assets/auth and user's mobile, stop maintenance process AFTER production works. GitHub build blocked by billing, no billing modifications allowed/needed.

--- Prior details below ---

# LATEST 2026-10-30: low-memory production build active

Local build at 2560MB heap failed and its processes were stopped. GitHub offload job 40990630461 could not START due account billing/spending restriction (do not alter billing). New local attempt uses OGM_LOW_MEMORY_BUILD=1, 3072MB heap, nice=10, Next memory optimizations, no Webpack cache, one CPU, sequential compilation and explicit build worker. Session 41170; log ../.ogm-validation/online-production-low-memory.log. Do NOT start any other heavy task.

Game itself is stopped. Public Tailscale URL serves temporary Thai maintenance page via process/session described below. On build success start npm run play:online; this remaps Funnel to 3000 once app health succeeds. Verify public root and assets with Origin header, then stop maintenance PID from ../.ogm-validation/online-maintenance.json. Need real mobile confirmation after user reported blank/loading page. No semantic translation review or new migration-backup feature authorized. Voice feature preserved; host uses Discord.

--- Previous checkpoints below ---

# CURRENT: online hosting activation in progress

User logged into Tailscale and enabled Funnel. Public hostname: https://ogm-host.tail67e8af.ts.net/. Private Linux userspace daemon, identity/certificates under ignored data/online-host, socket /tmp/ogm-online-1000-38a392cf6273.sock. Never commit private state.

HTTPS ingress + 4 health probes + separate SSE transport/reconnect test passed. Probe path cleaned. Mobile user reported blank/loading page. Reproduced 403 for dev CSS/JS Origin, set exact hostname in ignored .env.local, then changed online launcher to production to avoid multi-minute runtime compilation. Game/online launcher stopped via SIGINT, confirmed Funnel reset and game stopped while Tailscale login persisted. Edge TTS remains running.

Active production build: NODE_OPTIONS=--max-old-space-size=2560 npm run build -- --webpack; tool session 24947; log ../.ogm-validation/online-production-build.log. One heavy task at a time. Current stage optimized compilation. Do not start another build or dev server.

Temporary maintenance HTTP server is active (tool session 86172), details ../.ogm-validation/online-maintenance.json. Funnel root currently points to this maintenance server. It returns Thai preparation text publicly (verified curl). Once build succeeds, start npm run play:online and wait health; launcher will remap Funnel root to port 3000. Then stop ONLY the maintenance PID after app public URL is verified. Never leave maintenance pretending to be the game.

Next: finish build, fix build errors if any, start production via one-command launcher, verify public root/CSS/JS (Origin header) and unauthenticated API protection, browser/mobile gameplay access. In-app browser attempts timed out then became error data URLs blocked by its URL policy; do not bypass browser protections or repeat these bound tabs. User's mobile feedback is the authoritative real-device check; do not claim full browser success yet.

Existing voice and backup features MUST remain. User uses Discord, cancelled NEW migration/backup tooling only. Final translation semantic review still waits for explicit user instruction in this chat, no review workers.

--- Earlier handoff follows ---

# CURRENT CHECKPOINT: translation drafts complete, waiting for user to start review

## Translation drafts complete — wait for review instruction
All inventory counts reconcile: 18,976 translated drafts + 955 technical exclusions = 19,931 source units; pending 0 in all four groups. UI 7,624; system 6,153; content 4,266; rulebook 933. Reconciled recovered rows into batch outputs, including caption-hyphen repair for half-dragon-template. Historical rejection files retained for audit, not active blockers. Final semantic/linguistic review NOT started; all reviewed=false. User explicitly requested waiting for permission to begin that review in THIS CHAT, no review agents/workers. Technical exclusions, integration gaps, source policy failure and final browser/build verification remain for later review; do not claim release-ready. Game/TTS remain stopped.

--- Older handoff history below ---
# Handoff

## Latest: resumed with structured Luna outputs — 2026-10-29

User confirmed access returned and explicitly asked to continue. Two contained gpt-6-luna/low workers are active (UI/system; content/rulebook). Do not launch a third translator. Successful six-page recheck and long-page structured JSON pilot passed. All 4266 JSON content units now have draft translations; UI and rulebook continue. Original game and Edge TTS ports stay closed. Read current coverage.json for reconciled counts and worker logs ../.ogm-validation/i18n-ui.log, i18n-content.log for live state.

Current source passed full TypeScript (i18n-typecheck-4.log), language 9 and Thai regression 7 plus overlay checks. Corrected six translated lookup keys; codemod now excludes element-access keys. Output-schema option is optional and omitted from normal DM turns. Format/dice validator handles d6s and Markdown numeric bullets; parked valid proposals can be recovered with scripts/i18n-recover.mjs without spending another call. Source-hash guard prevents recovery against changed original data. Some parked units still require repair; caches and recovered files are distinct to avoid races.

User specifically requires careful final meaning review of complicated rules. Numeric checks are insufficient. Compare against the pinned SRD source, including prerequisites, exceptions, action/reaction, timing/concentration, targets/range/area, saves, costs, damage/healing and scaling. Keep reviewed flags separate; all current drafts still need this review. Final source-policy tests, build/browser QA, and semantic resolution remain before phases 1–4 can be called complete. Earlier usage-limit state below is historical and superseded.

## Latest recovery point: full Thai WIP, Luna usage limit — 2026-10-29

Read translations/th/STATUS.json and coverage.json first. User asked status before hitting limits; actual Luna workers have now exited with usage-limit responses. No workers/game/TTS are running. Do not automatically purchase credits, switch translation models, retry repeatedly or schedule monitoring. Aggregate desktop usage remains available but differs from the CLI/model response; reset time is unverified. Work phases 1–4 remain authorized but incomplete. Preserve all caches and successful output.

Counts: UI 4262 translated / 8005 candidates (+57 technical); system 0 translated / 6727 (+273 internal AI contracts technical); JSON content 3638 / 4266; full rulebook 0 / 933. None is marked linguistically reviewed. Batches are re-sliced as the inventory gains real presentation sites; stable ids/source hashes and cache/<group>.json prevent redoing valid work. Resume the manual groups when access is available: node scripts/i18n-translate.mjs --groups=ui,system and node scripts/i18n-translate.mjs --groups=content,rulebook (at most two). Run node scripts/i18n-build.mjs to reconcile/build overlays. Numeric/code/link/template validation and incomplete-unit repair must finish before claiming completion.

Source state: UI static/dynamic wiring, name/description boundaries, generated overlays, locale-specific rulebook APIs/reader caches and canonical deep-link restoration are implemented but not fully verified. A dynamic codemod overlapped nested template edits in 19 files; only broken files were restored from the previous valid checkpoint and rewired correctly. Current all-TSX AST parse scan passes, as do Thai regression 7 and overlay mechanics/formatter/anchors checks. Initial static typecheck passed; final typecheck, source-policy manifests, full build and browser QA remain. New dynamic wiring is guarded against crossing callbacks/data boundaries and parses before writing. See BUGS.md for exact evidence. Do not reopen ports 3000/8881 without user direction; later browser QA must use an isolated test server.

## Active task: full Thai phases 1–4 — approved 2026-10-29

User authorized phases 1–4 to completion and explicitly approved Codex GPT-6 Luna batch translation assistance. Save durable progress after each completed chunk; commit/push at meaningful validated boundaries to the existing PRIVATE origin and PR #1. No new approval needed within phases 1–4. Phases 5–6 (extra live DM/TTS evaluation and semantic memory work) are deferred. Game and Edge TTS must remain stopped unless the user asks otherwise; ports 3000/8881 were verified closed.

Current baseline 123815ff. New translations/th/ holds glossary, inventory, bounded batches and STATUS.json. Generate with node scripts/i18n-inventory.mjs; source hashes identify stale work. Translation output contract is in translations/th/README.md. Canonical English names/IDs/enums/mechanics remain unchanged in saves/tools. Thai display overlays only. Original source licenses and game/user data stay intact. User-authored/external future content is outside the shipped-content denominator. Record translated, reviewed, integrated and verified separately; never declare full completion from candidate counts alone.

RAM 7.7 GiB total, about 3.4 GiB available at start; 4 CPUs, 161 GiB real disk free. One heavy local operation, at most two translation workers. Persistent logs in ../.ogm-validation; no large writes to /tmp. Continue from PROGRESS.md and translations/th/STATUS.json after reboot. Local .env.server contains credentials/configuration and must never be committed or printed. Historical handoffs below are superseded by this task state.

## Latest: Codex DM ready on the requested model — 2026-10-29

Also verified the actual DM message through the game's enqueueNarrationAudio → Edge TTS queue, with a real MP3 at ../.ogm-validation/live-thai-tfpNnx/codex-dm-edge.mp3. This used the persisted isolated test campaign, not a synthetic narration string.

User explicitly selected GPT-6 Luna Light after the Edge milestone. Configured the actual local game with Codex/gpt-6-luna/low for story and bookkeeping, maxConcurrent 1; text provider harness. Created the previously missing initial DB encryption key in ignored .env.server; encrypted DB and settings reopen successfully. Existing Edge speech configuration preserved. No global Codex config changed. See docs/codex-dm.md.

Real isolated campaign passed 10 Thai turns, 9 server rolls, NPC/lore tools, encounter/attack and final recap, 13–26 s/turn (mean 16.8). The old model rejection is resolved by the explicitly requested Luna model, without adapter edits. Two invalid action requests were refused by the engine. Embeddings disabled for this baseline; semantic/long-term recall unverified. Transcript and result live at ../.ogm-validation/live-thai-tfpNnx, outside Git. The smoke script now defaults explicitly to gpt-6-luna/low. Syntax/lint passed. Full translation remains paused; no merge/release authorized. Earlier instructions below about not retrying the narrator test are superseded by this explicit user request and successful result.

## Current priority and verified state — 2026-10-29

User requested Microsoft Edge TTS before full-game translation. Edge milestone is implemented and validated; full-game translation is paused. See docs/edge-tts.md. Optional Python bridge uses existing OpenAI-compatible speech settings, with no new game provider enum/control. It has installer/start commands, two Thai voices and two English voices. Installed locally in ignored .venv-edge-tts; ignored .env.server was newly created with only speech settings. Restarted bridge successfully; currently listening on 127.0.0.1:8881 through the managed npm speech:edge process. It must be started again after reboot; no auto-start service was installed.

Six offline HTTP checks, eight selected Vitest files and targeted lint passed. Real speech through saved isolated settings and renderSpeech yielded two MP3/24kHz/mono files (9.576/7.944 seconds) in ../.ogm-validation/edge-audio-uPU2CS. This verifies synthesis/rendering, not manual pronunciation quality or a full live campaign. No build/native shell validation was repeated for the optional service. Final source checkpoint includes the pending canonical-label fix from the previous localization work, preserving actual world reskins.

The Thai ten-turn Codex test aborted before gameplay because inherited gpt-6.1-sol was rejected for this ChatGPT sign-in. Do not retry it or switch models as part of the now completed Edge task. The manual script remains for later explicit narrator validation. No secrets/database/audio/venv are in Git.

Private origin and draft PR remain https://github.com/MrLaPlus/open-game-master-th/pull/1 . Preserve current changes; no merge or release is authorized. Check PROGRESS.md and TASKS.md for current evidence. The historical handoff below describes earlier checkpoints and is superseded by this section.

## Historical localization checkpoint

2026-10-29: implementation remains authorized by the user's “เริ่ม”; no new approval is required inside the agreed localization scope. User confirmed the machine rebooted.

Private origin: MrLaPlus/open-game-master-th. Draft PR #1: https://github.com/MrLaPlus/open-game-master-th/pull/1 . First source checkpoint 9fc3946a pushed on codex/thai-localization. Do not merge or publish a release.

Implemented: Thai narration directive, ICU segmentation (canonical identities unchanged), opt-in UI locale, offline Thai font, 188 UI dictionary entries, 148 bilingual content names and 20 short reading aids. Translation coverage is partial. Real AI ten-turn test waits for the user's storyteller preference (async question was sent; no answer yet). Do not equate mocked model tests with live play.

Validation before reboot: Thai unit 7, language 9, settings/catalog routes 7, prose-call coverage 7, fusion 17 passed; type check passed; full lint had 0 errors. First-source CI production builds passed Linux and Windows, and Thai UI browser checks passed desktop/phone. Three unit CI failures were source-policy classifications and the source-sensitive Narration label check; fixes are now in the working tree. Name-policy check passes (4); text-policy verification is running/completing.

Other first-source CI browser failures: old builder draft phone, forced-colors step marker, directed-token-menu phone and voice-mic desktop. The identical voice-mic error is confirmed on the untouched private-repo baseline cc0425c2 (run 40731182005/job/122967616280); do not assume the others predate changes until compared or reproduced.

Next: commit/push guardrail fixes and expanded Thai browser scenario. Run the existing CI again; retain only Thai PNGs via the new artifact step. Read the PNGs for actual visual QA. Local builds were interrupted/slow and not confirmed: first Turbopack stopped around 20 minutes; the first Webpack attempt was cut by reboot; the later Webpack attempt was stopped to fix CI. Rebuild locally only if needed after checks, one heavy task at a time. Persistent logs and scanner diagnostics are in ../.ogm-validation; /tmp logs were lost on reboot.

The Codex attach_artifact tool was called twice for PR #1 but did not return; do not claim its UI attachment was verified. GitHub PR creation itself was verified.

## README documentation update
README.md is now Thai with direct upstream attribution; README.en.md preserves original English. Documentation links/assets and commands checked. Final game translation review still waits for explicit user instruction; README change does not authorize beginning it.

Game is now intentionally RUNNING at localhost:3000 with Edge TTS at 127.0.0.1:8881 after user asked to open it. Matching Open5e content pack installed under ignored data/content. Missing-cantrip bug fixed; actual catalog query returns 80 wizard cantrips. Refresh the builder page after server restart. General semantic translation review still waits for user instruction.

## Internet hosting in progress
User requests access from anywhere and easy startup. Uses Discord; do NOT remove in-game voice. User cancelled adding migration backup tooling; do NOT remove original backups. Prepared optional Linux userspace Tailscale helper (scripts/online-play.mjs, installer and เปิดเกมออนไลน์.sh), one-command test-mode npm run play:online. Private state under ignored data/online-host. Human login pending, no public URL verified. Continue actual integration after user adds device, then verify SSE and dev origins before claiming playable remotely.
