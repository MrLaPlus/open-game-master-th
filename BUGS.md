# Bugs and limitations

2026-10-29 — Baseline investigation: Unicode regex tokenization treats Thai sentences and attached Thai/English spell names as single words. `containsPhrase("ร่ายFireballใส่ศัตรู", "Fireball")` is false. Thai is absent from the language enum and Snowball maps. Status: addressing with language-specific segmentation; do not globally change canonical identity comparison.

Default embedding model is English-oriented; semantic Thai recall is unverified. A change of model reindexes existing vectors.

2026-10-29 — TypeScript regression caught before build: localization wrapper was mistakenly placed directly in `aria-label` in create-campaign/fields.tsx. Repro: tsc reports TS2322, element is not string. Source/AST confirms a JSX element initializer rather than a string expression; the original title is a string and other props are valid. Fixed by using the translation function for the ARIA string. Awaiting repeat type check.

2026-10-29 — Self-review round 1: preserved a world pack's explicit reskinned title in InfoDialog; canonical bilingual labels now apply only when the caller has not supplied a different title. Avoids an unintended English-mode display change. Also limited the English-rules caption to game content instead of generic help dialogs.
