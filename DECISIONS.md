# Decisions

## 2026-10-29 — Preserve canonical data

Thai labels and explanations are display overlays, never replacements for stored names, slugs, enums or numeric mechanics. This avoids breaking exact-name engine lookups and existing saves.

## 2026-10-29 — Language controls

Reuse Table language for the shared story. A reader must also be able to choose Thai menus without changing everyone else's campaign language; therefore one reader-language choice belongs with appearance/account preferences and is available before sign-in. No extra campaign-creator toggle. English remains the default for existing installs.

## 2026-10-29 — Thai text

Use the runtime's Intl.Segmenter for Thai words rather than add a dependency or invent a Thai Snowball stemmer. Preserve existing algorithms for other languages and English canonical identity. Multilingual embedding quality remains a separate measured task.
