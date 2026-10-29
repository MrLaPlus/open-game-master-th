import { message, type UiLanguage } from "./messages";

// Translate complete descriptions before their original paragraph boundaries.
// Missing text stays unchanged; never substitute a different rule on a miss.
export function translatedRulesText(text: string, language: UiLanguage): string {
  if (language === "en") return text;
  const full = message(text, language);
  if (full !== text) return full;
  return text.split(/(\n\s*\n)/).map((paragraph) => {
    if (!paragraph.trim()) return paragraph;
    const translated = message(paragraph, language);
    if (translated !== paragraph) return translated;
    return paragraph.split("\n").map((line) => message(line, language)).join("\n");
  }).join("");
}
