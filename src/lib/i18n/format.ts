// Render already-computed user-facing text without changing saved/tool values.
// Template captures are inserted verbatim; names supplied by players stay names.
export function makeMessageFormatter(dictionary: Readonly<Record<string, string>>) {
  const patterns = Object.entries(dictionary)
    .filter(([source]) => /\{\d+\}/.test(source) && source.replace(/\{\d+\}/g, "").trim().length >= 12)
    .sort(([left], [right]) => right.length - left.length)
    .map(([source, translated]) => {
      const keys: string[] = [];
      const parts = source.split(/(\{\d+\})/g).map((part) => {
        if (/^\{\d+\}$/.test(part)) { keys.push(part); return "([\\s\\S]*?)"; }
        return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      });
      return { pattern: new RegExp(`^${parts.join("")}$`), translated, keys };
    });
  return (text: string): string => {
    if (Object.hasOwn(dictionary, text)) return dictionary[text];
    const normalized = text.replace(/\s+/g, " ").trim();
    if (Object.hasOwn(dictionary, normalized)) return dictionary[normalized];
    for (const entry of patterns) {
      const found = entry.pattern.exec(normalized);
      if (!found) continue;
      const values = new Map(entry.keys.map((key, index) => [key, found[index + 1]]));
      return entry.translated.replace(/\{\d+\}/g, (key) => values.get(key) ?? key);
    }
    return text;
  };
}
