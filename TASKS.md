# Tasks

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
- [ ] Validate live AI narration over ten turns if a configured storyteller is available; otherwise record unverified.

Acceptance: Thai preference survives reload; old English behavior and saves stay compatible; canonical spell selection stays English; Thai searches resolve the same entry; translated descriptions preserve mechanics; browser and app-shell checks cover touched UI.
