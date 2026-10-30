# Semantic review evidence

Final review is performed by the primary assistant in this chat, not agents or CLI workers. `semantic-*.json` records the reviewed current source hash, effective translation file, before/after translation hashes, findings and clause-level checks. A pass becomes stale if the source or translated text changes.

`manifest.json` and the individual source-paired packet files were prepared earlier during translation and are **not** the final review ledger; their pending status or presence is not evidence of review. `coverage.json` is compiled from effective translated rows and counts a reviewed full page only when its row is explicitly marked reviewed. Duplicate UI/system/content records require their own review.

Batch 001: 12 complete rulebook pages, including the full Conditions page (15 conditions) and 11 spells. See `semantic-001.json`. Browser/integration/build validation and language/meaning review are separate.

Batch002: full Spellcasting33sections and partial Combat47sections. Batch003: completed Combat62sections (supersedes its partial002 snapshot), plus ONLY4 Adventuring rest/recovery sections. Whole-page and per-section evidence hashes reflect the saved snapshot; validate latest evidence for a page after subsequent edits, retaining prior snapshots as history.

Batch004:12 complete healing/death/restoration spell pages; total26 full rulebook pages reviewed plus4 Adventuring subsections. All26 latest row evidence hashes audited against current source/generated text after this batch. No entire-rulebook or UI/system/content review implied.
