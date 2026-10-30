# Progress

2026-10-29 — Resumed source checkpoint: full TypeScript (typecheck-4) passed after data-key repairs; language 9, Thai regression 7 and overlay checks passed. Draft JSON content coverage is 4266/4266, with linguistic/semantic review still pending. Two Luna low workers continue UI/system and full rulebook. Structured long-page output pilot succeeded. Independent meaning review of complex rules is mandatory under the user's latest instruction; no phase-complete claim. Game and Edge TTS remain closed. Private checkpoint saves drafts, repaired code, validators and glossary; no secrets/game DBs/audio are included.

2026-10-29 — User reinforced final semantic rules review: compare complex rules against source, including triggers, prerequisites/exceptions, action/reaction economy, timing/concentration, targets/area/range, save success/failure, damage/healing types and upcasting. Numeric/token validation alone is insufficient. Add separate meaning-review evidence and hold ambiguous passages for correction before completion. Luna access was successfully rechecked; contained GPT-6 Luna/low workers resumed. The long-page structured JSON pilot passed using the installed Codex protocol's optional outputSchema; ordinary DM turns omit this option and retain prior behavior. Game/TTS remain stopped.

2026-10-29 — Usage-limit recovery checkpoint: both explicitly authorized Luna translation workers exited on the provider's usage-limit response. No retry/upgrade/purchase was attempted. Latest reconciled counts: UI 4262 translated, 57 technical, 3686 pending / 8005 candidates; system 0 translated, 273 technical, 6454 pending / 6727; JSON content 3638 translated, 628 pending / 4266; rulebook 0 / 933 (worker had not reached the book group). These are saved translations, not linguistic review or verified completion. Phases 1–4 remain incomplete. All successful batches and per-unit caches persist on disk. Game and Edge TTS remain stopped. The desktop usage tool shows a different available aggregate bucket; do not assume the CLI/model limit's reset time or that all account usage is exhausted.

2026-10-29 — Current verification: post-repair AST scan finds zero TSX syntax errors; Thai regression 7 passed and overlay formatter/name/anchor/mechanical identity checks passed. Initial static wiring typecheck passed. The later typecheck caught the now-repaired overlapping-template syntax bug; final typecheck after repair/new game-data boundaries has NOT been run. Full build/browser/source-policy checks and translation quality review still pending. New code covers locale-specific rulebook APIs, stable anchors/cache keys, full-description overlays scoped to the original SRD identity, and server-feedback rendering while leaving saved/tool values intact. Further wiring added dynamic visible labels and 39 explicit builder/sheet data slots. No complete-game translation claim.

2026-10-29 — Thai wiring checkpoint: inventory refined to include content names and book structure (5207 UI, 6694 system candidates, 4266 JSON content units, 933 book pages; classification still in progress). Contained Luna translation workers write atomic batch results and per-unit source-hash caches. Numeric validation now distinguishes equivalent written quantities (four → 4; a minute → 1 minute) from changed mechanics; invalid units remain pending. Completed translations are saved after every batch. Initial UI wiring covers 5632 static presentation literals across 456 files plus nine memo-component labels; initial type check passed and Thai regression 7 passed. New locale-specific rulebook responses preserve canonical titles and deep-link anchors; this newer reader integration still needs final type/browser checks. Generated overlays and coverage distinguish translated/technical/pending/reviewed; no claim of full phase completion. No game/TTS services started.

2026-10-29 — Full Thai phases 1–4 explicitly approved; user requires durable progress after every completed chunk because the machine may freeze. User also explicitly authorized Codex GPT-6 Luna batch assistance. Game and Edge TTS remain stopped. Baseline 123815ff, clean before this task. Measured 7.7 GiB total / 3.4 GiB available RAM, 4 CPUs, 161 GiB free real disk; one heavy local operation at a time, at most two remote translation workers. Added resumable AST/JSON/rulebook inventory, stable source hashes, bounded source batches, shared Thai glossary and translation-state contract. No app behavior changed at this checkpoint. Next: finish inventory generation, save source + records to private origin, then translate and integrate in reviewed batches. See translations/th/STATUS.json.

2026-10-29 — Codex-to-voice end-to-end check passed: reopened the isolated ten-turn campaign, confirmed Luna/low settings and all ten persisted DM messages, then sent the first actual DM passage through enqueueNarrationAudio with the existing Kokoro id fallback and Edge backend. Game narration queue produced a real MP3; copied the sample to ../.ogm-validation/live-thai-tfpNnx/codex-dm-edge.mp3. Actual queue cleanup removes roll markers from speech. Only test settings were changed for this replay; the user's local game remains configured Luna/low plus Edge TTS. No manual pronunciation assessment claimed.

2026-10-29 — Codex Luna DM validation complete: real ten-turn Thai campaign passed with gpt-6-luna/low, 9 server rolls, NPC/lore interaction, start_encounter/pc_attack/end_turn and a coherent final recap. Narration retained Magic Missile, Potion of Healing, Shortsword and Goblin in English. Timing 13–26 seconds/turn (mean 16.8). Two invalid requests were refused by game rules, and skipped enemy turns resolved automatically. Persisted transcript/result are in ../.ogm-validation/live-thai-tfpNnx. The smoke default now explicitly uses Luna instead of inheriting the previously rejected model. Script syntax and targeted ESLint pass. Semantic embeddings were disabled for this baseline; no claim of long-term Thai vector retrieval quality. Local production settings were saved and verified by reopening; no credentials or data files are committed.

2026-10-29 — User requested Codex as DM using GPT-6 Luna Light. Installed Codex catalog confirms gpt-6-luna with low effort. Real harness admin test now passes handshake, tool use, streaming and containment on Codex 0.156.1. Local game text provider and story/utility models saved as harness/codex/gpt-6-luna/low, maxConcurrent 1. Created a local DB encryption key only because none existed, preserving speech settings and existing server environment. A fresh process reopens the encrypted settings and confirms Edge TTS remains configured. Ten-turn isolated Thai campaign is in progress; first turns narrate Thai and use real server dice. Old model rejection remains historical, not a current Luna failure.

2026-10-29 — Edge TTS milestone validated: all eight selected Vitest files passed (33 backend, 9 voice, 8 segment, 5 render, 4 cast, 7 Thai, 4 name-policy checks plus five admin-route tests). Both targeted lint runs exited 0; Python/Node syntax and git diff whitespace checks passed. Bridge was stopped/restarted and /health returned success afterward. Self-review round 2 found no additional issue requiring a fix. Local setup and real MP3 samples remain ignored/outside Git; source/docs are checkpointed to the existing private PR. No full build, native shell or live AI ten-turn result is claimed for this milestone.

2026-10-29: user changed priority to Microsoft Edge TTS for the AI DM; full-game translation is paused. Added optional edge-tts 7.3.1 loopback bridge, installer/start commands, Thai voices and setup documentation using the existing compatible-server speech backend. Installed in .venv-edge-tts, separate from system Python. Created an ignored local .env.server containing only the four speech settings (no existing file was overwritten); real server-env parser confirms them. Six offline bridge checks pass. Live smoke through saved test settings and the game's renderSpeech passes: model/voice discovery, Kokoro voice fallback and two real Thai MP3 clips with English fantasy names. ffprobe confirms MP3/24 kHz/mono, 9.576 s and 7.944 s. Samples are outside Git in ../.ogm-validation/edge-audio-uPU2CS. Pronunciation has not been manually judged. Existing speech regressions and final checkpoint are in progress.

2026-10-29: the separate Thai ten-turn narrator test stopped at provider handshake before any gameplay: Codex rejected the inherited gpt-6.1-sol model for this ChatGPT sign-in. No live AI campaign turns passed; this is separate from the now successful real Edge speech test. Defer narrator-model selection while Edge TTS has priority.

2026-10-29: implementation authorized. Clean upstream clone confirmed. Installing locked dependencies. No production database or AI credentials created. Working on codex/thai-localization.

2026-10-29: npm ci completed (625 packages, audit 0 vulnerabilities). Added Thai story directive, ICU Thai segmentation, opt-in reader locale, core navigation/creation labels, bilingual content overlay, scoped catalog search and bundled Thai font. 7 new pure Thai checks and 9 existing language checks passed. Stopped an early type-check while installation was still running to reduce memory pressure; rerunning after installation. Heavy concurrency cap: one build/type-check at a time, heap 2560 MB, real-disk workspace for artifacts. /tmp is tmpfs; only small diagnostic logs go there.

2026-10-29: updated route tests pass 7 checks (Thai persistence and Thai spell/item/class search through authenticated routes). Table-language call coverage: 7 enforced, 0 known gaps. Fusion regression: 17 passed. Type check passed after fixing the ARIA initializer. Full lint exited 0 with warnings (mostly upstream); corrected new unused imports by completing the builder-label integration and named the new browser scenario export. Production build running with CIRCLE_NODE_TOTAL=2 (one Next page worker), NODE_OPTIONS=--max-old-space-size=2560.

2026-10-29: command session/host restarted during build investigation; previous process sessions and /tmp logs are gone. Source checkpoint 9fc3946a was pushed to origin/codex/thai-localization and draft PR #1 exists. An own-property dictionary fix and its passing regression cases remain in the working tree. Earlier validation results above were observed before restart; production build was NOT confirmed. Logs now go to ../.ogm-validation on disk. Retrying supported Webpack production build with one Next worker. Live AI preference question remains unanswered.

2026-10-29: CI for 9fc3946a confirms Linux/Windows production builds and Thai UI desktop/phone checks passed. Fixed three unit guardrail failures without disabling tests. Added exact classification reasons, Unicode Latin script handling, and centralized Narration label translation. Name-lookup policy now passes 4 checks. Expanded Thai scenario reads Detect Magic's bilingual tile and summary; private CI artifacts will keep its PNGs for seven days. Confirmed the identical voice-mic-desktop failure on the unmodified private baseline; other browser failures are not yet attributed.

2026-10-29: second checkpoint 379ac3f4 pushed. Name lookup policy 4 and text comparison policy 6 checks pass; narration-default and Thai-unit regression pass. CI rerun 40805279201 (Linux) / 40805279245 (Windows) now targets these fixes and richer Thai spell UI screenshots. Local Webpack build hit the explicit 2560 MB JS heap limit; it is not a passed build. Continue production/UI validation on CI rather than raise local memory pressure after the user's reboot. Codex login status was verified as signed in via ChatGPT, but no narrator provider has been selected/configured.

2026-10-29 — Translation batch ui-0000.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0000.json: 56 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0001.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0002.json: 52 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0003.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0001.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0004.json: 32 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0002.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0003.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0000.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0004.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0001.json: 52 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0002.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0003.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0004.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0005.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0005.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0006.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0006.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0007.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0007.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0008.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0008.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0009.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0009.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0010.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0011.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0012.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0013.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0014.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0010.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0011.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0015.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0012.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0016.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0017.json: 33 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0018.json: 33 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0013.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0019.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0020.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0021.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0022.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0023.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0024.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0025.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0026.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0027.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0028.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0029.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0030.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0031.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0014.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0032.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0015.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0033.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0034.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0016.json: 35 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0035.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0036.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0017.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0018.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0037.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0019.json: 58 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0038.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0020.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0039.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0021.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0040.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0022.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0041.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0023.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0042.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0043.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0024.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0025.json: 63 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0044.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0026.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0045.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0046.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0027.json: 63 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0047.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0048.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0028.json: 63 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0049.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0029.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0050.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0030.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0051.json: 52 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0031.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0052.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0032.json: 63 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0053.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0054.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0033.json: 62 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0055.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0034.json: 60 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0056.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0057.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0035.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0058.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0036.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0059.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0037.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0060.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0038.json: 53 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0061.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0062.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0039.json: 57 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0063.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0040.json: 64 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0064.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0041.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0065.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0042.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0066.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0043.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0044.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0067.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0068.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0045.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0046.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0069.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0047.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0048.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0070.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0049.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0071.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0050.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0072.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0051.json: 61 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0073.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0052.json: 60 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0074.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0053.json: 59 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0075.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0054.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0076.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0077.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0055.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0078.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0079.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0056.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0080.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0057.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0081.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0058.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0082.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0059.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0083.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0060.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0084.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0061.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0085.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0086.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0087.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0088.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0063.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0089.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0090.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0064.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0065.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0091.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0066.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0092.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0067.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0093.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0068.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0094.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0095.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0069.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0096.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0000.json: 6 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0070.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0001.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0002.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0071.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0003.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0004.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0072.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0005.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0073.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0006.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0074.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0075.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0009.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0010.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0011.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0078.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0013.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0080.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0081.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0015.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0016.json: 20 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0082.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0017.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0018.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0083.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0019.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0084.json: 15 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0020.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0021.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0022.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0001.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0023.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0024.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0025.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0026.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0002.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0027.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0028.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0029.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0030.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0031.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0032.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0033.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0034.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0003.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0004.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0000.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0062.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0007.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0076.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0008.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0077.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0012.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch content-0079.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0014.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0035.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0036.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0037.json: 33 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0038.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0005.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0039.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0040.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0041.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0006.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0042.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0043.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0044.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0045.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0046.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0047.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0048.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0049.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0050.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0051.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0052.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0053.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0054.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0055.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0056.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0057.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0008.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0058.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0059.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0009.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0060.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0061.json: 51 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0062.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0063.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0010.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0064.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0065.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0066.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0011.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0067.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0068.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0069.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0070.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0071.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0072.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0012.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0073.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0074.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0075.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0076.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0013.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0077.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0078.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0079.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0080.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0081.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0014.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0082.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0015.json: 3 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0083.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## 2026-10-29 — resumed checkpoint and semantic review preparation
- Confirmed private origin checkpoint e1d64ae5. Both authorized Luna low workers remain active; game/TTS remain stopped.
- Overlay validation passed, including written quantities, plural dice and Markdown bullet fixtures.
- Prepared 510 source-paired semantic review packets using scripts/i18n-review-packets.mjs; hashes cover both source and Thai draft. No draft marked reviewed. Checklist explicitly covers SRD 5.1 timing, prerequisites, targets, exceptions, action economy, saves, scaling and completeness.
- Latest compiled coverage: UI 5658 translated/202 technical/2145 pending; content 4266 translated; rulebook 24/933; system 273 technical/6454 pending. Translation continues; regenerate coverage before reporting newer counts.
- Actual name/text policy scripts running sequentially in validation session 85910; inspect final exits before claiming pass.

2026-10-29 — Translation batch ui-0084.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0085.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0086.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0016.json: 3 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0087.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0088.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0017.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0089.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0090.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0091.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0018.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0092.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0093.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0094.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0095.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0096.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0019.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0097.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0098.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0099.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0020.json: 3 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0100.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0101.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0102.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0103.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0104.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0105.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0106.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0021.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0107.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0108.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0109.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0110.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0111.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0112.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0113.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0114.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0022.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0007.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0115.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## 2026-10-29 — user requested Terra for rules translation
- Rulebook/spell page translation now uses gpt-6.1-terra / low through translations/th/models.json. Restarted only rulebook worker; UI/system Luna worker continues. Concurrency cap remains two.
- Saved Luna drafts retained for review, not marked semantically approved. In-flight unfinished batch restarts from saved cache. New log: ../.ogm-validation/i18n-rulebook-terra.log.
- Runner records selected model in each model-call log and reloads per-group model config for every call.

2026-10-29 — Translation batch ui-0116.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0117.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0118.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0119.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0120.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0121.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0122.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## Terra availability correction
Actual request rejected: gpt-6.1-terra is not supported for this ChatGPT account (model_not_found). Stopped rulebook worker to prevent repeated calls; no fallback model selected. UI Luna continues. Added fail-fast handling for unsupported models. Earlier MODEL log indicated selection, not successful inference.

2026-10-29 — Translation batch ui-0123.json: 50 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0124.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0125.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0126.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0127.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0128.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0129.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0130.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0131.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0132.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0133.json: 49 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0134.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0135.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0136.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0137.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0138.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0139.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0140.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0141.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0142.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0143.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0144.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0145.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0147.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0148.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## Account model availability probe
Fresh codex debug models catalog plus sequential contained reply-only probes at low: gpt-6-astra=success, gpt-6-sol=success, gpt-6-luna=success, gpt-5.6-sol=success, gpt-5.6-terra=success, gpt-5.6-luna=success. Raw results in ../.ogm-validation/model-probe-results.json. No model substituted for requested GPT-6.1 Terra.

2026-10-29 — Translation batch ui-0149.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0150.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0151.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0152.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0153.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0154.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0155.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0156.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0157.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0158.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0159.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0160.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0161.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0162.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0163.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0164.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0165.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0166.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0167.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0168.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0169.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0170.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0171.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0172.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0173.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0174.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0175.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0176.json: 48 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch ui-0177.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0000.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## User approved GPT-5.6 Sol / low for rules
Rulebook translation resumed with gpt-5.6-sol / low, preserving saved drafts/cache and semantic-review requirements. Log: ../.ogm-validation/i18n-rulebook-sol.log. UI/system remains Luna; max two workers.

2026-10-29 — Translation batch system-0001.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0002.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0003.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0023.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0004.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0005.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0006.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## User specified final review model
After translation is complete, review section by section using GPT-6.1 Sol / medium. Verify actual account support before starting; do not silently substitute GPT-6 Sol or another model. Separate linguistic/semantic review evidence from translation drafts, preserve source and translation hashes, and inspect rule conditions/exceptions carefully. No additional review worker now.

2026-10-29 — Translation batch system-0007.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0008.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0024.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0009.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## Final review execution correction from user
Final review is performed by the primary assistant in this existing chat, not by agents, CLI calls or background review workers. User intends to select GPT-6.1 Sol / medium in the chat UI. This supersedes the prior plan to verify/invoke the review model through the CLI. Existing authorized translation workers continue unchanged.

2026-10-29 — Translation batch system-0010.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0011.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0025.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0012.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0013.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0014.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0026.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0015.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0016.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0027.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0017.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0018.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0028.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0019.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0020.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0029.json: 15 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0021.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0022.json: 35 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0030.json: 18 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0023.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0031.json: 13 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0024.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0025.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0032.json: 13 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0026.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0027.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0033.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0028.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0029.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0034.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0030.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0035.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0032.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0033.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0036.json: 12 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0034.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0035.json: 35 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0037.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0036.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0037.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0038.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0038.json: 13 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0039.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0039.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0040.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0041.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0040.json: 12 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0042.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0043.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0041.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0044.json: 18 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0045.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0042.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0046.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0043.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0047.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0048.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0049.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0044.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0050.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0051.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0045.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0052.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0053.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0054.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0046.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0055.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0056.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0047.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0057.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0058.json: 28 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0059.json: 34 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0048.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0060.json: 35 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0061.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0062.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0049.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0063.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0064.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0050.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0065.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0066.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0067.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0051.json: 5 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0068.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0069.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0070.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0052.json: 12 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0071.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0072.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0073.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0053.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0074.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0075.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0054.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0076.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0077.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0078.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0079.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0055.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0080.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0056.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0081.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0082.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0057.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0083.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0084.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0085.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0058.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0086.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0087.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0059.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0088.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0089.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0090.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0091.json: 33 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0060.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0092.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0061.json: 18 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0093.json: 37 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0094.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0095.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0062.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0096.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0097.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0063.json: 5 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0098.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0099.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0064.json: 15 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0100.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0101.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0102.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0065.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0104.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0105.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0066.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0106.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0107.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0108.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0067.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0109.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0110.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0068.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0111.json: 36 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0112.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0069.json: 19 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0113.json: 21 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0070.json: 18 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0114.json: 26 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0115.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0116.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0071.json: 18 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0117.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0118.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0072.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0119.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0120.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0121.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0073.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0122.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0123.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0124.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0125.json: 31 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0074.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0126.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0127.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0075.json: 16 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0128.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0129.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0076.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0130.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0077.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0131.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0078.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0132.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0133.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0134.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0135.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0137.json: 34 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0079.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0138.json: 31 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0139.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0080.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0140.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0141.json: 39 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0142.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0081.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0143.json: 41 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0144.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0145.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0082.json: 5 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0146.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0147.json: 43 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0148.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0083.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0149.json: 40 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0150.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0084.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0151.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0152.json: 42 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0153.json: 47 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0085.json: 6 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0154.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0155.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0156.json: 46 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0086.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0157.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0158.json: 33 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0159.json: 30 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0087.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0160.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0161.json: 44 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0162.json: 45 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0088.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0163.json: 38 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch system-0164.json: 24 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0089.json: 6 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0090.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0091.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0092.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0093.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0095.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0096.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0097.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0098.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## Quota stop checkpoint
Luna finished queue; UI 2 and system 3 units require repair. Sol stopped at rulebook-0099 on usage limit: 733 translated, 200 pending. No translation workers active. All drafts retained. Resume rulebook worker when quota permits; final semantic review remains in this chat after translation completion.

## Resume remaining drafts; final review explicitly deferred
User requested remaining translation only, then wait for explicit review instruction. Resumed Sol Low rulebook worker in ../.ogm-validation/i18n-rulebook-sol-resume.log. Repaired 2 UI and 3 system drafts, all pending zero in those groups; retained all reviewed=false. Thai article omission templates preserve captures without inventing title wording. Recovered half-dragon page by removing table-caption hyphens that numeric validator interpreted as negative numbers. No final linguistic/semantic review started.

2026-10-29 — Translation batch rulebook-0099.json: 10 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0100.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0101.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0102.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0103.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0104.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0105.json: 5 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0106.json: 7 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0107.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0108.json: 8 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0109.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0110.json: 14 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0111.json: 12 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0112.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0113.json: 12 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0114.json: 13 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0115.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0116.json: 11 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0117.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0118.json: 9 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0119.json: 4 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0120.json: 1 units saved atomically with source hashes; translated, not yet reviewed/integrated.

2026-10-29 — Translation batch rulebook-0121.json: 2 units saved atomically with source hashes; translated, not yet reviewed/integrated.

## Translation drafts complete — wait for review instruction
All inventory counts reconcile: 18,976 translated drafts + 955 technical exclusions = 19,931 source units; pending 0 in all four groups. UI 7,624; system 6,153; content 4,266; rulebook 933. Reconciled recovered rows into batch outputs, including caption-hyphen repair for half-dragon-template. Historical rejection files retained for audit, not active blockers. Final semantic/linguistic review NOT started; all reviewed=false. User explicitly requested waiting for permission to begin that review in THIS CHAT, no review agents/workers. Technical exclusions, integration gaps, source policy failure and final browser/build verification remain for later review; do not claim release-ready. Game/TTS remain stopped.

Final structural reconciliation reclassified four punctuation/unit-only UI rows as technical under the existing validator: final translated 18,976 + technical 955, total 19,931. No pending units.

## Thai project README and explicit attribution
Replaced README.md with Thai project documentation; preserved original English README byte-for-byte as README.en.md. Added prominent direct-upstream credit (Lebbitheplow), deeper Open Dungeon/Jacob Ferrari credit, original MIT copyright holders, SRD/CC-BY attribution and translation notice. Clarified draft localization status, Thai branch source install, Edge online processing, and distinction from upstream app/Docker releases. Translation review remains deferred.
Validation passed: all README local paths/assets resolve; English copy equals origin/main README byte-for-byte; code fences balanced; npm scripts exist; source-credit assertions and git diff --check pass. No app tests required for this documentation-only change. Saved on codex/thai-localization; main remains unchanged pending the existing PR workflow.

## Repository homepage README — user requested main
Published Thai README.md and preserved README.en.md on main in documentation-only commit cb912ff19ee4fa8d7d03354bb82ef8d8124ad7b5. No game code merged. Links to Thai-only files point explicitly to codex/thai-localization because main does not contain those features yet. GitHub README endpoint confirmed main README.

## Missing cantrip catalog while creating character — fixed 2026-10-29
- Repro: racial bonus wizard-cantrip picker and search report content pack absent; server logs show successful empty catalog requests and class-detail 404s. Effective content path data/content/open5e.sqlite did not exist (CONTENT_DB_PATH not overridden).
- Trace: getContentDb() caches null when the pack is missing; ordinary builder spell requests do not use workshop mechanics=1 bundled-book fallback. This explains empty lists despite bundled rules. No debugger attached; filesystem existence and a fresh-process call to the actual content accessor supplied the differential.
- Fix: ran existing fetch-content-pack.mjs, downloading matching v0.31.0 upstream release asset (19.8 MB); restarted only game server to clear cached null. Edge TTS kept running. No game DB or character save edited.
- Related display bug: CatalogBrowser rendered buttonLabel and section.label verbatim, bypassing existing Thai dictionary even though message("Every wizard cantrip", "th") already returns Thai. Applied existing _uiT to those two display-only slots.
- Verification: fresh actual contentPackInstalled() true; searchSpells({classSlug:"wizard",level:0,limit:200}) returned 80 results, all matching class/level; Mage Hand present. Browser inspection tool timed out, so do not claim visual browser verification. Existing user must refresh to clear client empty-state cache. Final full translation review remains deferred.
Validation complete for narrow label change: targeted ESLint exited 0; TSX parse diagnostics 0; git diff --check passed. Server startup confirmed on port 3000, but first HTTP request timed out while instrumentation compiled on slow filesystem; do not claim authenticated browser/API validation. Catalog accessor verification above is from fresh actual application code.

## Remote hosting scope and current prerequisites
User requested internet play and easy host startup; no Tailscale account yet. They use Discord and explicitly cancelled NEW migration-backup work. Preserve all existing in-game voice and backup features; only omit configuring voice networking for this host and adding migration tooling. Tailscale Funnel selected for investigation; Quick Tunnel rejected because official docs exclude SSE. Neither tailscale nor cloudflared installed. Docker available, but official tailscale image pull failed DNS lookup for Docker CDN. Preparing official static Tailscale 1.104.4 binaries in ignored data/online-tools with SHA-256 check, no global install. No public game exposure or auth success verified yet. Final translation review remains deferred. See docs/online-play-th.md.

## Optional online-host helper prepared; human login pending
Added Linux userspace Tailscale helper and one-command test-mode launcher. Static 1.104.4 binaries downloaded from official pkgs.tailscale.com with SHA-256 verification, ignored under data/. Docker path abandoned after CDN DNS failure. No system VPN install or DNS change. Private daemon uses isolated Unix socket and data/online-host identity; app voice/backup features unchanged. Actual daemon status NeedsLogin with an auth URL presented only to user (not committed). Added online login/status/stop/install commands and เปิดเกมออนไลน์.sh; start reuses existing listener, waits for app health before Funnel, closes only spawned process groups on Ctrl+C. Public reachability/SSE/auth/voice and full launcher start-stop remain unverified pending human login. Game translation review still deferred.

## Online activation verification — 2026-10-29
- Human completed Tailscale sign-in and Funnel enabling. Private daemon Running and root proxy enabled; no account credentials committed.
- Initial HTTPS failed because daemon --state alone did not establish TailscaleVarRoot for cert storage. Added explicit --statedir under ignored data/online-host and restarted only isolated network daemon; ACME certificate obtained and pending-cert health cleared. Same identity and Funnel config retained.
- Initial helper buffered Funnel's first-use authorization URL until timeout. Changed to stream CLI output so required human authorization is visible.
- Public ingress health returned HTTP 200 on both published IPv4 addresses. Repeated standard HTTPS checks 4/4 passed, 0.5–2.2s each. Temporary network-only SSE endpoint delivered three separately timed events and Last-Event-ID reconnect delivered remaining events; probe removed successfully. This verifies transport, not authenticated campaign semantics.
- Public root HTML returned 200 and title Open Game Master. In-app browser still timed out, so inspected resource requests: dev CSS and JS with public Origin returned 403. Server log explicitly requested allowedDevOrigins hostname. Added exact host to ignored .env.local and helper now prepares that value automatically; running old dev server must restart to load it. Restarted this repo's dev server via npm run play:online; health/frontend retest pending warmup. No original voice/backup feature removed.

## Online browser blank-page follow-up
User tested externally and reported blank/loading page (not login failure). Dev assets with public Origin reproduced 403. Origin configured locally, but dev cold startup continued multi-minute compilation. Changed online launcher to production start and first-use webpack build, preserving ordinary npm run dev for development. Stopped online launcher via SIGINT: spawned game group stopped and Funnel config reset; Tailscale login remained Running, proving this cleanup path. Running one bounded-memory production build, NODE_OPTIONS=--max-old-space-size=2560, log ../.ogm-validation/online-production-build.log. Public link intentionally offline until build/start and browser retest. No voice or backup features removed; no semantic translation review started.

## 2026-10-30 — production build resource recovery
Verified local webpack build failed at capped 2560 MB V8 heap; failed processes stopped, no build/game server currently running. Public URL serves temporary Thai preparation page. Avoid repeating same capped build. Added opt-in Next webpackMemoryOptimizations and single-CPU/sequential compilation mode, verified supported by installed Next schema/docs. Preparing one explicit [online-build] GitHub Actions job (Node 24, 4GB heap) to upload only .next application tar plus source SHA/checksum; no live data, credentials, env files or saves sent. Existing tests/CI not weakened; final translation review remains deferred. Use explicit -R MrLaPlus/open-game-master-th for gh commands because CLI otherwise selects upstream.

## 2026-10-30 — bounded-memory production retry
Cloud job 40990630461 did NOT start: GitHub annotation says recent account payments failed or spending limit needs increase. No billing changes or purchase made. Local retry uses new evidence-based configuration: installed Next docs recommend webpackMemoryOptimizations and disabling Webpack cache; schema supports cpus=1, sequential server compiles/traces, explicit webpack build worker. Previous 2560-MB failure not repeated unchanged. Running OGM_LOW_MEMORY_BUILD=1 NODE_OPTIONS=--max-old-space-size=3072 nice -n 10 npm run build -- --webpack, session 41170, log ../.ogm-validation/online-production-low-memory.log. Available RAM 3.8GiB at start, single heavy process. All checks remain enabled. Public URL still temporary preparation page.

## Targeted JSON export-graph optimization
Stopped the 3GB memory-optimized build before another OOM: loopback Node inspector reported pid 620735 heapUsed 3,144,393,896 bytes, external 21MB, confirming JS heap pressure. No heap snapshot or user data dump. Inspector closed when worker stopped. Installed bundled Webpack is 5.98.0; official module parser docs support json.exportsDepth=0. All three generated translation JSON consumers use whole default objects (source traced). Controlled real-dictionary round-trip builds under 768MB: single-entry default 236680KiB vs zero-depth 205044KiB; 64 separate runtime entries default 336788KiB/3129ms vs zero-depth 220152KiB/1699ms. ALL key/value payloads matched digest ef527c975d4cde432d65ede808b4913840987b167d5b00c60af63635786a1e4c. These are synthetic entrypoint probes, not full-game memory measurements or semantic translation review. Added rule ONLY for src/lib/i18n/generated/*.json in low-memory mode; no other JSON/named exports changed. Official reference https://webpack.js.org/configuration/module/#moduleparserjsonexportsdepth .
Full build now running at SAME 3072MB cap, OGM_LOW_MEMORY_BUILD=1, nice=10, session 2487; log ../.ogm-validation/online-production-json-memory.log. Available RAM 4.6GiB at start. Do not run another heavy task.

## 2026-10-30 — confirmed full-project heap requirement above 3GiB
Targeted export optimization preserves all JSON values but full build still hit 3072MB V8 limit at ~510s; stopped failed parent/worker. /proc limits showed unlimited core size and systemd-coredump handler, explaining prolonged post-failure disk/memory pressure. After failed jobs fully released memory, MemAvailable recovered to 4.7GiB. Started SAME optimized single-worker build at explicitly bounded 4096MB heap with core dumps disabled only in child shell (ulimit -c 0), nice=10. Budget 4GiB heap + 512MiB overhead fits measured 4.7GiB available. Session 29166; log ../.ogm-validation/online-production-4g.log. Added equivalent MemAvailable preflight and child-only core limit to online launcher. Do not run concurrent heavy tasks. Public still preparation page, actual game not ready.

2026-10-30 — User explicitly started final semantic review in THIS CHAT and prioritized it over online hosting. Primary assistant compared 12 full rulebook pages (Conditions incl. 15 conditions + 11 spells) against current bundled SRD 5.1 and source hashes. Corrected Shield hit trigger, carried-object scope, Cure Wounds school, force damage and construct/modifier wording; evidence translations/th/review/semantic-001.json. Reviewed 12/933 rulebook; UI/system/content still 0. Generated overlay updated; existing overlay checks and 7 Thai regressions passed, plus 12/12 hash/numeric/link/heading/generated-text checks. No full production build/browser pass claimed. No review agents invoked. Hosting remains paused at node:crypto client import build error.

2026-10-30 — User prioritized combat → spellcasting/concentration → rest/healing/death. Batch002: combat47/62 sections compared (partial page, reviewedfalse), spellcasting33/33 full sections compared (reviewedtrue), bringing full pages13/933. Fixed space-vs-air origin, component necessity, instantaneous dispelling, explicit reaction reset/modifiers and equal/smaller grapple/shove size eligibility. Source/translation/80 section hashes, mechanical/link/code/placeholder checks, generated equality and Markdown checks passed. Evidence semantic-002.json. Next: combat43-57 and adventuring rest/recovery. Hosting stays paused.

2026-10-30 — Batch003: Combat complete62/62 sections, including damage/healing/death; all47 earlier section hashes unchanged. Adventuring only selected rest/recovery sections19,20,21,27 reviewed4/30 (full-page reviewedfalse). Clarified direct death-save failures on damage at0HP, bilingual13damage types, healing grammar, Constitution modifiers. Focused source/translation/66section/mechanical/Markdown/generated checks pass; overlay checks and Thai7 regressions pass. Evidence-generator leading-empty heading split offset caught, corrected and verified before checkpoint. Full rulebook14/933. Next related healing/death/restoration spells; other groups deferred, hosting paused.

2026-10-30 — Batch004:12 complete healing/death/restoration spell pages reviewed. Restored living-only SparetheDying prerequisite; fixed Heal Construct mistranslated as buildings and matching exclusions; clarified consumed diamonds, GentleRepose per-eye persistent copper, LesserRestoration exhaustive condition choices, GreaterRestoration reversal of ability reduction. Read all priced components, timing, soul willingness/freedom, death windows/bodyparts, target/caster penalties, scaling and exclusions against bundledSRD5.1. All12 evidence/mechanical/generated/Markdown checks pass; existing overlay checks and Thai7 regressions pass; ALL26 full reviewed rows latest hashes/source/generated checks pass. Priority scope this turn: Combat62+Spellcasting33+Adventuring4=99rule subsections plus12spells. Full review26/933,907 remain including partialAdventuring; other groups0. Hosting paused, no service changes or full-build/browser claim.

2026-10-30 — User requested opening the current game and then resumed after interruption. Prior development process stopped; started a detached Next dev process (private PID/log record ../.ogm-validation/game-dev-process.json). Slow first compilation traced to high disk IO pressure; actual root20022.3s then warmed339ms, auth/me200, and in-app browser visibly reached Thai sign-in form at http://localhost:3000/. Screenshot ../.ogm-validation/game-login-current.png. Tab9 marked deliverable. No credentials entered or campaign play claimed; public Funnel remains maintenance and production node:crypto error unresolved. Translation review unchanged26/933 plus4Adventuring sections; no source changes for this startup.

2026-10-30 — User chose GitHubActions first, local build fallback. Explicit workflow_dispatch run41025271115 failed BEFORE any steps (job123961792371); annotation says recent payments failed or spending limit needs increase. No billing changes/retries. Fixed known production node:crypto client import: moved unchanged parser/scorer to dice-logic.ts requiring explicit RNG, retained dice.ts server facade and crypto.randomInt defaults; odds, three bestiary pure helpers and PendingRollCard use browser-safe imports. Existing dice24+odds21+reference40+notation7+encounter20+manual9=121 checks passed; actual odds/reference browser bundle guard rejects Nodebuiltins (failed on old code, passes new). Targeted ESLint and diff check pass; exact extracted-source comparison confirms no scoring logic changes. Guard adjusted for existing Vite returning output array. Full production build NOT started: after stopping ONLY own recorded Next group725975, MemAvailable3247MiB below4608MiB budget (4096heap+512overhead). Save checkpoint, wait for memory to be freed; do not repeat failed3GiB build or increase heap blindly. Game currently STOPPED; TTS/Tailscale unchanged. Optimization phases2/3 not started.

2026-10-30 — User closed apps; MemAvailable rose3247→4442→4523MiB. Paused own EdgeTTS408754 (validated cwd/command) during build preparation; restore afterward. Full tsc at2GiB heap completed with ONE Next-generated route error: optionalRequest in rulebookGET. Made Request required and supplied actualRequest in two existing route tests;23rulebook tests and targetedlint pass. Full tsc not yet rerun; production build will perform its checks. To fit availableRAM WITHOUT reducing512MiB headroom, choose manual build heap3840MiB instead of4096: preflight requires4352MiB, measured4523MiB. This is a new bounded attempt, not a retry of known failing3GiB. Keep one heavyjob, childcorelimit0, capture GNUtime resources/log; no success claimed yet.
