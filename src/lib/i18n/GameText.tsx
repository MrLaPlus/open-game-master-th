"use client";
import type { ReactNode } from "react";
import { useUiLanguage } from "./ui-language";
import { contentLabel, termLabel } from "./content";
import { message } from "./messages";
import { translatedRulesText } from "./rules-text";

// Only built-in game-data presentation calls this boundary. The record is
// read solely to preserve homebrew/custom labels; no value is written back.
export function GameText({ value, record, kind = "features", mode = "name" }: {
  value: ReactNode; record?: unknown; kind?: string; mode?: "name" | "description" | "label";
}) {
  const language = useUiLanguage();
  if (language === "en" || typeof value !== "string") return value;
  if (record && typeof record === "object") {
    const data = record as Record<string, unknown>;
    if (data.source === "homebrew" || data.homebrew || data.documentSlug === "homebrew" || typeof data.slug === "string" && data.slug.startsWith("homebrew:")) return value;
    if (mode === "name" && typeof data.name === "string" && typeof data.label === "string" && data.label !== data.name && value === data.label) return value;
  }
  if (mode === "description") return translatedRulesText(value, language);
  if (mode === "label") return message(value, language);
  const label = contentLabel(kind, value, language);
  if (label !== value) return label;
  const term = termLabel(value, language);
  if (term !== value) return term;
  const translated = message(value, language);
  return translated !== value ? `${translated} (${value})` : value;
}
