# Tasks

## Full Thai phases 1–4 — approved 2026-10-29, active

Additional user requirement: final rules review must preserve meaning, not just numbers. Review triggers, prerequisites/exceptions, action economy, timing/concentration, target/range/area, save outcomes, damage/healing types and upcasting against original source. Keep translated / mechanically checked / meaning-reviewed separate. Ambiguous or rule-changing text is not complete until corrected or explicitly recorded for resolution.

User approved Codex GPT-6 Luna batch assistance and requires saving progress after every completed chunk. Keep the game and Edge TTS stopped. Source baseline 123815ff; progress ledger translations/th/STATUS.json.

- [ ] Phase 1: complete source inventory/classification, stable translation keys/hashes, shared glossary, explicit coverage/exceptions.
- [ ] Phase 2: translate all shipped web UI paths, labels/accessibility, hints, empty/loading/error states and administrative flows.
- [ ] Phase 3: full shipped content/rulebook descriptions and bilingual names; compare mechanical values with source and retain attribution.
- [ ] Phase 4: Thai dynamic game feedback, combat/roll/status/quest/journal/error messages with canonical data intact.
- [ ] Verify source counts reconcile, all approved units translated/reviewed/integrated, English switching and old-save compatibility, appropriate checks/build/browser evidence.
- [ ] Record and privately checkpoint every validated batch; update handoff for reboot recovery.

Phases 5–6 are deferred. Do not claim native client shells or newly installed external packs translated automatically.

## Codex DM / GPT-6 Luna Light — approved 2026-10-29

- [x] Resolve requested model against installed Codex catalog: gpt-6-luna, low.
- [x] Pass the real game adapter's handshake, tool-call, streaming and containment test.
- [x] Persist local story/utility model and effort; read back in a fresh process; preserve Edge TTS settings.
- [x] Finish the isolated ten-turn Thai campaign and inspect narration, actual dice/tools and recall.
- [x] Record validation and save source/documentation checkpoint to the private repository.

Evidence: real Codex 0.156.1 / gpt-6-luna / low completed 10 Thai turns, 9 server rolls, NPC interactions and actual combat calls. Turns took 13–26 s (mean 16.8 s). Final summary recalled the named bridge guard, bell warning and tracks without claiming certainty about ambiguous evidence. Two invalid action requests were refused by the rules engine. Semantic embeddings were disabled; long-term semantic recall remains unverified.

Full-game translation remains paused. The local DB key and database stay out of Git; no global Codex model settings changed.

## Edge TTS for the AI DM — priority approved 2026-10-29

The user requested Microsoft Edge TTS first and deferred translating the rest of the game. Existing Thai work is preserved.

- [x] Install the optional pinned edge-tts library in an isolated Python environment.
- [x] Provide a loopback speech bridge using the existing compatible-server settings, Thai default voice, voice/model discovery and MP3 output.
- [x] Validate Thai + English fantasy names with both real Thai voices through the game's renderer; validate timeout, invalid inputs and failure handling offline.
- [x] Document startup, Microsoft processing, limitations and rollback; checkpoint to the existing private repository.

Evidence: six Python HTTP checks; eight existing Vitest files passed, including speech/backend/render/cast/voices/segments, admin preview route and Thai/name policy checks. Targeted lint and syntax checks passed. Two real MP3 samples decoded by ffprobe. Bridge restart and local configuration parsing verified. No full production build or native-shell validation was repeated for this optional service.

Acceptance: no new campaign control or canonical data change; existing Kokoro ids use the configured Thai default; two playable real MP3 clips; existing speech checks pass. Full-game translation is paused. A live ten-turn AI campaign is separate and remains unverified because the configured Codex model was rejected by its provider.

## Thai localization — approved 2026-10-29

- [ ] Add Thai to table language and all prose prompts; fantasy tone, canonical English tool arguments.
- [ ] Support Thai text processing without relying on a nonexistent Snowball Thai stemmer.
- [ ] Add reader-language preference and translate core navigation / creation / spell UI.
- [ ] Add bilingual content labels and Thai explanations with English fallback; preserve source data.
- [ ] Add Thai/English search over translated content; validate Thai recall with deterministic fixtures.
- [ ] Run relevant language, settings, content and UI checks, lint and build.
- [x] Validate live AI narration over ten turns if a configured storyteller is available; otherwise record unverified.

Acceptance: Thai preference survives reload; old English behavior and saves stay compatible; canonical spell selection stays English; Thai searches resolve the same entry; translated descriptions preserve mechanics; browser and app-shell checks cover touched UI.

## Final review instruction
- [ ] After translation completion, review in THIS CHAT only, section by section. User selects GPT-6.1 Sol / medium for this chat. Do not invoke a review agent, CLI model probe or review worker. Check UI wording/context, dynamic substitutions/canonical data, and full rules semantics including timing, exceptions, saves, resource costs and scaling. Record fixes and evidence before marking reviewed.

## Thai README — 2026-10-29
- [x] Thai README describes original product, Thai fork status, install/run/Edge TTS and documentation.
- [x] Prominent direct upstream and original copyright/SRD attribution, with source links.
- [x] Original English README preserved exactly as README.en.md; local links/assets, script names, Markdown fences and diff whitespace checked.
- [x] Documentation-only; no game translation review, service startup or release/merge performed.

## Missing racial cantrip list — 2026-10-29
- [x] Install matching Open5e pack without touching game DB or saves; restart game to clear missing-pack cache.
- [x] Actual catalog accessor returns 80 wizard cantrips, correctly filtered; Mage Hand present.
- [x] Route catalog display labels through existing UI translator; targeted lint and TSX parse pass.
- [ ] User/browser refresh confirmation after slow first compilation. Final full Thai review remains deferred.

## Internet play — optional host helper
- [x] Prepare Linux one-command launcher, isolated optional networking and official binary installer.
- [x] Preserve existing voice/backup features; no new migration-backup work.
- [x] Official binary SHA-256 and script syntax checks.
- [x] Human Tailscale login and Funnel authorization.
- [ ] Full production game/browser/account/invite/narration verification. HTTPS ingress and temporary SSE transport/reconnect checks passed; dev origin 403 reproduced; launcher cleanup tested. User mobile still reported blank; production build preparation remains active.

## Semantic review started — approved 2026-10-30
- [x] Batch001: 12 full source-paired rulebook pages; fixes, source/translation hashes and focused checks saved.
- [ ] Remaining 921 rulebook pages, UI/system/content and technical exclusions; no automatic duplicate approval.
- [ ] Browser/integration and production build verification remain separate. Online work paused by user priority.

## Priority meaning review — user order 2026-10-30
- [x] Spellcasting/concentration: entire33-section page compared with SRD5.1; numeric/hash/Markdown/generated checks pass.
- [ ] Combat:47/62 sections saved, damage/healing/death43-57 next.
- [ ] Rest/recovery: adventuring19-21 and27 next; never mark entire Adventuring reviewed based on those sections alone.
