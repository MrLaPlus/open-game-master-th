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
