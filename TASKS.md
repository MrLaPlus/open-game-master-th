# Tasks

## Thai localization — approved 2026-10-29

- [ ] Add Thai to table language and all prose prompts; fantasy tone, canonical English tool arguments.
- [ ] Support Thai text processing without relying on a nonexistent Snowball Thai stemmer.
- [ ] Add reader-language preference and translate core navigation / creation / spell UI.
- [ ] Add bilingual content labels and Thai explanations with English fallback; preserve source data.
- [ ] Add Thai/English search over translated content; validate Thai recall with deterministic fixtures.
- [ ] Run relevant language, settings, content and UI checks, lint and build.
- [ ] Validate live AI narration over ten turns if a configured storyteller is available; otherwise record unverified.

Acceptance: Thai preference survives reload; old English behavior and saves stay compatible; canonical spell selection stays English; Thai searches resolve the same entry; translated descriptions preserve mechanics; browser and app-shell checks cover touched UI.
