// Reader-only overlays: the rules engine and canonical rulebook stay English.
import translations from "./generated/rulebook-th.json";
import { parseBook, type BookBlock } from "@/lib/rulebook/markdown";
import type { RulebookContents, RulebookPageResponse } from "@/lib/rulebook/types";
import { message, type UiLanguage } from "./messages";
import bookData from "@/lib/rulebook/srd-5.1.json";
import { buildIndexInSlices, searchRulebook, type RulebookIndex } from "@/lib/rulebook/search";
import type { RulebookData, SearchResponse } from "@/lib/rulebook/types";

type PageTranslation = { title: string; md: string; meta?: string; family?: string };
const pages = translations as Record<string, PageTranslation>;
let thaiIndex: Promise<RulebookIndex> | undefined;

export async function localizedRulebookSearch(query: string): Promise<SearchResponse> {
  const book = bookData as RulebookData;
  thaiIndex ??= buildIndexInSlices(book.pages.map((page) => {
    const translated = pages[page.id];
    if (!translated) return page;
    const shown = localizedRulebookPage({ page: { ...page, folio: 0 }, chapter: { id: page.chapter, title: "", numeral: "" }, prev: null, next: null }, "th").page;
    return { ...page, ...shown };
  }), book.chapters.map((chapter) => ({ ...chapter, title: message(chapter.title, "th") })));
  return { hits: searchRulebook(await thaiIndex, query) };
}

export function readerLanguage(request?: Request): UiLanguage {
  return request && new URL(request.url).searchParams.get("lang") === "th" ? "th" : "en";
}

function anchors(blocks: BookBlock[]): string[] {
  return blocks.flatMap((block) => block.kind === "heading" ? [block.anchor] : block.kind === "sidebar" ? [...(block.anchor ? [block.anchor] : []), ...anchors(block.blocks)] : []);
}

export function localizedRulebookContents(contents: RulebookContents, language: UiLanguage): RulebookContents {
  if (language === "en") return contents;
  return {
    ...contents,
    parts: contents.parts.map((part) => ({ ...part, title: message(part.title, language), blurb: message(part.blurb, language) })),
    chapters: contents.chapters.map((chapter) => ({ ...chapter, title: message(chapter.title, language), blurb: message(chapter.blurb, language), entries: chapter.entries.map((entry) => {
      const translated = pages[entry.id];
      return translated ? { ...entry, canonicalTitle: entry.title, title: translated.title, meta: translated.meta ?? entry.meta, family: translated.family ?? entry.family } : entry;
    }) })),
    quick: contents.quick.map((link) => ({ ...link, label: message(link.label, language) })),
  };
}

export function localizedRulebookPage(data: RulebookPageResponse, language: UiLanguage): RulebookPageResponse {
  if (language === "en") return data;
  const translated = pages[data.page.id];
  if (!translated) return data;
  const canonical = anchors(parseBook(data.page.md)), localized = anchors(parseBook(translated.md));
  // A missing heading must never make saved deep links land elsewhere.
  if (canonical.length !== localized.length) return data;
  return {
    ...data,
    page: { ...data.page, canonicalTitle: data.page.title, title: translated.title, md: translated.md,
      meta: translated.meta ?? data.page.meta, family: translated.family ?? data.page.family,
      anchors: Object.fromEntries(localized.map((anchor, index) => [anchor, canonical[index]])),
    },
    chapter: { ...data.chapter, title: message(data.chapter.title, language) },
    prev: data.prev ? { ...data.prev, title: pages[data.prev.id]?.title ?? data.prev.title } : null,
    next: data.next ? { ...data.next, title: pages[data.next.id]?.title ?? data.next.title } : null,
  };
}
