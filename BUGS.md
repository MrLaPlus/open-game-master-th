# Bugs and limitations

2026-10-29 — Baseline investigation: Unicode regex tokenization treats Thai sentences and attached Thai/English spell names as single words. `containsPhrase("ร่ายFireballใส่ศัตรู", "Fireball")` is false. Thai is absent from the language enum and Snowball maps. Status: addressing with language-specific segmentation; do not globally change canonical identity comparison.

Default embedding model is English-oriented; semantic Thai recall is unverified. A change of model reindexes existing vectors.

2026-10-29 — TypeScript regression caught before build: localization wrapper was mistakenly placed directly in `aria-label` in create-campaign/fields.tsx. Repro: tsc reports TS2322, element is not string. Source/AST confirms a JSX element initializer rather than a string expression; the original title is a string and other props are valid. Fixed by using the translation function for the ARIA string. Awaiting repeat type check.

2026-10-29 — Self-review round 1: preserved a world pack's explicit reskinned title in InfoDialog; canonical bilingual labels now apply only when the caller has not supplied a different title. Avoids an unintended English-mode display change. Also limited the English-rules caption to game content instead of generic help dialogs.

2026-10-29 — Self-review round 2: dictionary lookup must ignore Object.prototype. A custom label such as `constructor` must remain a string rather than returning an inherited function. Added an own-property check and regression cases for constructor, __proto__ and toString.

2026-10-29 — CI guardrails: registered every new display-only name lookup/search and shared language normalization site with reasons in the repository's classification manifests. Removed ASCII Latin ranges in favor of Unicode Script=Latin. Restored the Narration call site's existing label contract and centralized its displayed/accessibility translation in SettingToggle. The narration regression test passes.

Baseline evidence: private-repo upstream commit cc0425c2 has the identical voice-mic-desktop failure (nothing joined after leaving the page) in run 40731182005/job/122967616280. This predates the Thai change. Other observed browser timing/forced-colors failures remain under comparison; do not call them pre-existing without matching evidence. Thai UI desktop and phone passed in run 40739895808/job/122998343642.
