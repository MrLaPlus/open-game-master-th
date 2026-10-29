# Progress

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
