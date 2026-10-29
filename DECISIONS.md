# Decisions

## 2026-10-29 — Full Thai, stable data and resumable batches

User approved phases 1–4 and Codex GPT-6 Luna batch assistance. Keep the existing i18n runtime and add source-hashed generated display overlays rather than mutate game records. UI AST wiring changes presentation literals only; stored values, enum comparisons, event payloads and user text remain untouched. Rulebook language is an explicit per-request reader query and cache key, with canonical titles and anchors retained for references and workshop routing. Source inspection includes name/description fields and template candidates; technical exclusions require audit before coverage is declared complete. Every batch persists progress atomically; matching per-unit caches survive re-batching and reboot. Invalid mechanics or missing translations are parked for repair, never substituted as complete. Full generation, review, integration and verification are separate states. One local heavy task, two contained translator processes at most; no game services during this task.

## 2026-10-29 — Prioritize Microsoft Edge narration

User explicitly requested Edge TTS before completing game translation. Use the existing OpenAI-compatible speech protocol instead of a new provider enum or settings control. A small loopback Python bridge loads optional unmodified edge-tts 7.3.1 (LGPLv3) in a separate environment. This avoids changing game narration, streaming, caching, saved campaign schemas and browser playback. Existing backend voice fallback handles old Kokoro voices. The bridge sends narration to Microsoft's online service; it is not offline synthesis or Azure Speech. It is an optional server component, not bundled into native shells, and must be started separately. No automatic startup service is installed.

## 2026-10-29 — Preserve canonical data

Thai labels and explanations are display overlays, never replacements for stored names, slugs, enums or numeric mechanics. This avoids breaking exact-name engine lookups and existing saves.

## 2026-10-29 — Language controls

Reuse Table language for the shared story. A reader must also be able to choose Thai menus without changing everyone else's campaign language; therefore one reader-language choice belongs with appearance/account preferences and is available before sign-in. No extra campaign-creator toggle. English remains the default for existing installs.

## 2026-10-29 — Thai text

Use the runtime's Intl.Segmenter for Thai words rather than add a dependency or invent a Thai Snowball stemmer. Preserve existing algorithms for other languages and English canonical identity. Multilingual embedding quality remains a separate measured task.

## 2026-10-29 — Review screenshots

The existing Linux browser job retains only Thai-scenario PNGs for seven days in private Actions artifacts, so the new language control can be reviewed at its English default and Thai setting, on desktop and phone. The glob excludes the seeded database, key and server logs. Uses the verified official upload-artifact v6 tag; no new application dependency.
