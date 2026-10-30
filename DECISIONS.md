# Decisions

## 2026-10-29 — Structured batch outputs and semantic review

Installed Codex protocol schema confirms turn/start.outputSchema. Translation jobs request it to avoid malformed long Markdown JSON; ordinary DM options omit it, preserving the prior protocol and containment. Recover valid parked proposals only against their input source hash (or unchanged pinned baseline for legacy evidence). Arithmetic/token checks do not establish rules meaning. The final review must separately compare prerequisites, triggers, exceptions, action economy, timing/concentration, targets/range/area, save outcomes, damage/healing, resource costs and scaling with exact source evidence; uncertainty is not a pass. Original SRD version governs, not a model's knowledge of newer editions.

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

## 2026-10-30 — Build fallback and client-safe dice math
User selected GitHubActions first then local build. Keep server crypto RNG unchanged and move deterministic parsing/scoring into dice-logic.ts, preserving server dice.ts exports/defaults; do not polyfill Nodecrypto or use Math.random in browser. Shared pure consumers import the logic module. GitHub dispatch was rejected before steps by billing; no payment/settings changes authorized. Local production attempt retains4GiB heap+512MiB headroom; current memory insufficient, so wait for freed RAM rather than retry known failing3GiB setting. UI loading/dictionary optimization phases remain deferred.

## 2026-10-30 — Local production build verified
GitHubActions remains blocked by accountbilling, so built locally after user freedRAM. Retry used4096MiB heap only whenMemAvailable4801MiB met4608budget; no headroom reduced. Buildpassed and localgame now uses nextstart production (no devcompilation duringplay). Keep currentbuild for startup; source changes need a freshbuild. No VPS purchase, billing change, publicFunnel activation, UI/dictionary redesign or game-rule change performed.
