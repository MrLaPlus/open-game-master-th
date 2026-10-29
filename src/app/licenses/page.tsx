
import { Tr as _I18nText } from "@/lib/i18n/ui-language";
import Link from "next/link";
import { PIXEL_ICONS } from "@/lib/ui";
import { PageSection, PageShell } from "@/components/PageShell";
import { listDocuments } from "@/lib/content";
import { contentPackInstalled, contentPackStale } from "@/lib/content/db";
import { listWorldPackSummaries } from "@/lib/worlds";
import { installedTracks } from "@/lib/ambience/library";
import { cueById } from "@/lib/ambience/catalog";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Licenses | Open Game Master",
};

// Attribution for the imported Open5e dataset (a mix of CC-BY and OGL
// documents) plus the bundled SRD data. Required by the content licenses.
export default function LicensesPage() {
  const documents = listDocuments();
  const installed = contentPackInstalled();
  const stale = contentPackStale();
  const worldPacks = listWorldPackSummaries();
  const ambience = installedTracks();

  return (
    <PageShell
      icon={PIXEL_ICONS.support}
      glyph="ui-licenses"
      title="Licenses and attribution"
      blurb="Where the bundled rules, imported content and sounds come from."
      actions={
        <Link href="/" className="text-sm text-amber-200 hover:text-amber-100"><_I18nText>{"Back to Open Game Master"}</_I18nText></Link>
      }
    >
      <PageSection bodyClassName="space-y-3 text-sm leading-6 text-stone-300">
        <p><_I18nText>{"Open Game Master bundles game content from the System Reference Document 5.1 (SRD 5.1) by Wizards of the Coast LLC, available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0)."}</_I18nText></p>
        <p><_I18nText>{"The"}</_I18nText>{" "}<Link href="/rulebook" className="text-amber-200 hover:text-amber-100"><_I18nText>{"rulebook"}</_I18nText></Link>{" "}<_I18nText>{"is the full text of the SRD 5.1, set from Old Man Umby’s reForged markdown conversion of it (github.com/oldmanumby/dnd.srd.5.1). This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode."}</_I18nText></p>
        <p><_I18nText>{"Expanded character options, spells, items, and monsters are imported from the"}</_I18nText>{" "}
          <span className="text-stone-100"><_I18nText>{"Open5e"}</_I18nText></span>{" "}<_I18nText>{"dataset (open5e.com), which aggregates open-licensed tabletop content. Each source document and its license is listed below."}</_I18nText></p>
        {!installed ? (
          <p className="reveal rounded border border-stone-700 bg-stone-900 p-3 text-stone-400"><_I18nText>{"The Open5e content pack is not installed on this server. Run"}</_I18nText><span className="font-mono">{" "}<_I18nText>{"node scripts/import-open5e.mjs"}</_I18nText></span>{" "}<_I18nText>{"to download it; until then the app uses only the bundled SRD 5.1 data."}</_I18nText></p>
        ) : null}
        {stale ? (
          <p className="reveal rounded border border-stone-700 bg-stone-900 p-3 text-stone-400"><_I18nText>{"This server’s content pack was built by an older release. Run"}</_I18nText><span className="font-mono">{" "}<_I18nText>{"npm run setup"}</_I18nText></span>{" "}<_I18nText>{"to replace it with the one this release plays."}</_I18nText></p>
        ) : null}
      </PageSection>

      {documents.length ? (
        <PageSection heading="Imported source documents">
          <ul className="mt-4 space-y-3">
            {documents.map((document) => (
              <li
                key={document.slug}
                className="rounded-lg border border-stone-800 bg-stone-900/60 p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-stone-100">{document.title}</span>
                  <span className="text-xs text-amber-200">{document.license}</span>
                </div>
                {document.author ? (
                  <p className="reveal mt-1 text-xs text-stone-400"><_I18nText>{"by"}</_I18nText>{" "}{document.author}</p>
                ) : null}
                {document.url ? (
                  <a
                    href={document.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block break-all text-xs text-stone-500 hover:text-stone-300"
                  >
                    {document.url}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      {worldPacks.length ? (
        <PageSection heading="Campaign plugins">
          <p className="text-sm leading-6 text-stone-400"><_I18nText>{"World packs rename existing SRD races, classes, spells, items and monsters to fit a setting. No rule and no stat block is changed."}</_I18nText></p>
          <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Community campaign packs were installed on this server by its operator. They are"}</_I18nText>{" "}
            <span className="text-stone-200"><_I18nText>{"not distributed with Open Game Master"}</_I18nText></span><_I18nText>{", are not covered by its MIT license, and are the work of their own authors. Where a pack references an existing setting it is an unofficial fan work with no affiliation with or endorsement from that setting's rights holders. Each pack names its own attribution wherever it appears in the app."}</_I18nText></p>
        </PageSection>
      ) : null}

      {ambience.length ? (
        <PageSection heading="Sound library">
          <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Each ambience and music file on this server is credited below as it arrived: made here with a music model, carried in the release's sound pack, supplied by the operator, or fetched from a public archive. Archive files are"}</_I18nText>{" "}
            <span className="text-stone-200"><_I18nText>{"not distributed with Open Game Master"}</_I18nText></span>{" "}<_I18nText>{"and are credited as their archive recorded them."}</_I18nText></p>
          <ul className="mt-4 space-y-2">
            {ambience.map((track) => (
              <li
                key={track.file}
                className="rounded-lg border border-stone-800 bg-stone-900/60 p-3 text-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-stone-100">
                    {cueById(track.cueId)?.label ?? track.cueId}
                    <span className="ml-2 text-xs text-stone-500">{track.title}</span>
                  </span>
                  <span className="text-xs text-amber-200">{track.license}</span>
                </div>
                <p className="mt-1 text-xs text-stone-400"><_I18nText>{"by"}</_I18nText>{" "}{track.author}</p>
                {track.source ? (
                  <a
                    href={track.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block break-all text-xs text-stone-500 hover:text-stone-300"
                  >
                    {track.source}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      <p className="px-1 text-xs text-stone-500"><_I18nText>{"Open Game Master itself is MIT licensed. Homebrew content belongs to the user who created it, and installed campaign plugins belong to their authors."}</_I18nText></p>
    </PageShell>
  );
}
