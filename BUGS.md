# Bugs and limitations

2026-10-29 — Edge validation complete: six offline HTTP checks, real game-rendered Thai audio, restart check and eight existing regression files passed; final targeted lint exited 0. The forwarding text and Python-version fixes above are validated. Self-review round 2 found no further concrete issue. Online availability and fantasy-name pronunciation remain provider/listening limitations; native shells do not bundle this optional Python service.

2026-10-29 — Live narrator setup limitation: Codex 0.156.1 sign-in was ready but the model handshake returned model_not_found for gpt-6.1-sol. The ten-turn Thai campaign test aborted before gameplay; do not report it as passed. No credentials or real game settings were changed by that isolated test. Edge speech is independent and its real audio test succeeds.

2026-10-29 — Edge integration review round 1: the existing compatible-server help claimed text was sent nowhere else, which is incorrect for an Edge proxy. Updated that paragraph to state forwarding and Microsoft's processing. Installer now rejects an unsupported system Python instead of failing later on asyncio.timeout. No new campaign control or backend schema added. Offline HTTP checks pass; final lint/regressions pending.

2026-10-29 — Baseline investigation: Unicode regex tokenization treats Thai sentences and attached Thai/English spell names as single words. `containsPhrase("ร่ายFireballใส่ศัตรู", "Fireball")` is false. Thai is absent from the language enum and Snowball maps. Status: addressing with language-specific segmentation; do not globally change canonical identity comparison.

Default embedding model is English-oriented; semantic Thai recall is unverified. A change of model reindexes existing vectors.

2026-10-29 — TypeScript regression caught before build: localization wrapper was mistakenly placed directly in `aria-label` in create-campaign/fields.tsx. Repro: tsc reports TS2322, element is not string. Source/AST confirms a JSX element initializer rather than a string expression; the original title is a string and other props are valid. Fixed by using the translation function for the ARIA string. Awaiting repeat type check.

2026-10-29 — Self-review round 1: preserved a world pack's explicit reskinned title in InfoDialog; canonical bilingual labels now apply only when the caller has not supplied a different title. Avoids an unintended English-mode display change. Also limited the English-rules caption to game content instead of generic help dialogs.

2026-10-29 — Self-review round 2: dictionary lookup must ignore Object.prototype. A custom label such as `constructor` must remain a string rather than returning an inherited function. Added an own-property check and regression cases for constructor, __proto__ and toString.

2026-10-29 — CI guardrails: registered every new display-only name lookup/search and shared language normalization site with reasons in the repository's classification manifests. Removed ASCII Latin ranges in favor of Unicode Script=Latin. Restored the Narration call site's existing label contract and centralized its displayed/accessibility translation in SettingToggle. The narration regression test passes.

Baseline evidence: private-repo upstream commit cc0425c2 has the identical voice-mic-desktop failure (nothing joined after leaving the page) in run 40731182005/job/122967616280. This predates the Thai change. Other observed browser timing/forced-colors failures remain under comparison; do not call them pre-existing without matching evidence. Thai UI desktop and phone passed in run 40739895808/job/122998343642.

2026-10-29 — Local build resource limit: Webpack reached the explicitly capped 2560 MB V8 heap (allocation failed). CI production build on the first checkpoint passed Linux/Windows; latest checkpoint CI is running. Do not label the local build successful or infer a source defect from this heap cap. No heavy local build will be retried without new evidence that it can fit comfortably.

2026-10-29 — Builder spell-label path: SpellsGearStep always supplies displayName(pack, spells, name), including an unchanged English name with no reskin. SpellBook previously treated any supplied label as an override, bypassing Thai display names there. Fixed the display helper to prioritize only an actually different world label, with explicit tests for unchanged Detect Magic and a Read the Weave reskin. Canonical spell names and selection callbacks are untouched.
