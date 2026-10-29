"use client";
import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { SectionHead } from "@/components/ui/SectionHead";
import { ui } from "@/lib/ui";
import { ChipList, LineList, PairList } from "@/app/workshop/plugin/fields";
import type { SectionProps } from "@/app/workshop/plugin/types";

// The setting half of a pack: what the narrator is handed about the world
// beyond its names. Factions, places, hooks and a glossary go into the
// game-state block; name seeds are offered as clickable suggestions in the
// character builder. Pull from this workshop (in the panel header) fills
// these from the factions, lore, places, hook cards and cast already built
// here.

export function SettingSection({ draft, onDraft }: SectionProps) {
  const _uiT = _useUiText();
  return (
    <div className="space-y-4">
      <section className={ui.card + " p-4"}>
        <SectionHead title={_uiT("Factions")} glyph="system-factions" className="mb-0" />
        <p className="mb-3 text-[11px] text-stone-500">{_uiT("Who holds power and what they want. The workshop's factions land here when you pull from it, with where each is based and who belongs, as far as the line goes.")}</p>
        <PairList
          items={draft.factions}
          onChange={(factions) => onDraft({ ...draft, factions })}
          first={{ key: "name", label: "Faction", max: 60 }}
          second={{ key: "blurb", label: "What they are about", max: 200 }}
          addLabel="Add a faction"
          empty="No factions yet."
        />
      </section>
      <section className={ui.card + " p-4"}>
        <SectionHead title={_uiT("Places")} glyph="system-region" className="mb-0" />
        <p className="mb-3 text-[11px] text-stone-500">{_uiT("The places a campaign can start in or travel to.")}</p>
        <PairList
          items={draft.locations}
          onChange={(locations) => onDraft({ ...draft, locations })}
          first={{ key: "name", label: "Place", max: 60 }}
          second={{ key: "blurb", label: "What it is like", max: 200 }}
          addLabel="Add a place"
          empty="No places yet."
        />
      </section>
      <section className={ui.card + " p-4"}>
        <SectionHead title={_uiT("Hooks")} glyph="quest-active" className="mb-0" />
        <p className="mb-3 text-[11px] text-stone-500">{_uiT("Adventure hooks, one line each. Storyboard hook cards land here when you pull.")}</p>
        <LineList
          items={draft.hooks}
          onChange={(hooks) => onDraft({ ...draft, hooks })}
          maxLength={240}
          addLabel="Add a hook"
          placeholder={_uiT("A tide-priest offers to pay for a relic nobody else will touch.")}
          empty="No hooks yet."
        />
      </section>
      <section className={ui.card + " p-4"}>
        <SectionHead title={_uiT("Glossary")} glyph="tab-reference" className="mb-0" />
        <p className="mb-3 text-[11px] text-stone-500">{_uiT("Words the world uses and what they mean, so the narrator uses them the same way you do.")}</p>
        <PairList
          items={draft.glossary}
          onChange={(glossary) => onDraft({ ...draft, glossary })}
          first={{ key: "term", label: "Term", max: 40 }}
          second={{ key: "meaning", label: "Meaning", max: 160 }}
          addLabel="Add a term"
          empty="No glossary yet."
        />
      </section>
      <section className={ui.card + " p-4"}>
        <SectionHead title={_uiT("Name seeds")} glyph="tab-characters" className="mb-0" />
        <p className="mb-3 text-[11px] text-stone-500">{_uiT("Names offered as one-tap suggestions in the character builder. Six or more of each reads as a world with a sound of its own.")}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <span className="mb-1 block font-display text-[11px] tracking-[0.1em] text-amber-300/85">{_uiT("People")}</span>
            <ChipList
              items={draft.nameSeeds.people}
              onChange={(people) => onDraft({ ...draft, nameSeeds: { ...draft.nameSeeds, people } })}
              placeholder={_uiT("A person's name")}
            />
          </div>
          <div>
            <span className="mb-1 block font-display text-[11px] tracking-[0.1em] text-amber-300/85">{_uiT("Places")}</span>
            <ChipList
              items={draft.nameSeeds.places}
              onChange={(places) => onDraft({ ...draft, nameSeeds: { ...draft.nameSeeds, places } })}
              placeholder={_uiT("A place name")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
