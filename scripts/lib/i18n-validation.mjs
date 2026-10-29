// Pure mechanical/shape checks shared by batch work and verification.
function numeric(text) { return [...text.matchAll(/\d+(?:[.,]\d+)*(?:d\d+)?%?/g)].map((match) => match[0]).sort(); }

function sameMechanics(original, translated) {
  const plain = (text) => text.replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, " ");
  const dice = (text) => [...text.matchAll(/\b\d*d\d+(?:\s*[-+]\s*\d+)?(?:s\b|\b)/gi)].map((match) => match[0].replace(/\s+/g, "").toLowerCase().replace(/s$/, "")).sort();
  const negatives = (text) => [...text.replace(/^\s*[-*+]\s+/gm, "").matchAll(/(?:^|[^\w\d])[-−]\s*(\d+(?:\.\d+)?)/g)].map((match) => match[1]).sort();
  if (JSON.stringify(dice(original)) !== JSON.stringify(dice(translated))) return false;
  if (JSON.stringify(negatives(original)) !== JSON.stringify(negatives(translated))) return false;
  const expected = numeric(plain(original));
  const actual = numeric(plain(translated));
  for (const token of expected) {
    const at = actual.indexOf(token);
    if (at < 0) return false;
    actual.splice(at, 1);
  }
  // Thai naturally renders "four weapons" as "อาวุธ 4 ชนิด". This is
  // mechanically equivalent; each extra digit must trace to a source word.
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  const allowance = words.flatMap((word, value) => [...original.toLowerCase().matchAll(new RegExp(`\\b${word}\\b`, "g"))].map(() => String(value)));
  allowance.push(...Array.from(original.matchAll(/\b(?:a|an)\s+(?:minute|hour|round|turn|day|week|month|year|action|reaction|creature|target|object|weapon)\b/gi), () => "1"));
  allowance.push(...Array.from(original.matchAll(/\bonce\b/gi), () => "1"));
  allowance.push(...Array.from(original.matchAll(/\btwice\b/gi), () => "2"));
  for (const token of actual) {
    const at = allowance.indexOf(token);
    if (at < 0) return false;
    allowance.splice(at, 1);
  }
  return true;
}

function validate(source, translated, group) {
  if (!Array.isArray(translated) || translated.length !== source.length) throw new Error("Translation row count differs from input.");
  const byId = new Map(translated.map((row) => [row.id, row]));
  if (byId.size !== source.length) throw new Error("Duplicate translated ids.");
  return source.map((unit) => {
    let row = byId.get(unit.id);
    if (!row) throw new Error(`Missing ${unit.id}`);
    const text = group === "rulebook" ? row.md : row.th;
    const original = group === "rulebook" ? unit.source.md : unit.source;
    if (group !== "rulebook" && !/[A-Za-z]/.test(original.replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, ""))) {
      row = { ...row, th: original, status: "technical", reason: "Punctuation/HTML entity only; no prose to translate." };
    }
    if (group !== "rulebook" && /^[\d\s.,+()/-]+(?:gp|sp|cp|ep|pp|ft|lb|ms|s|[kmgtp]?i?b|hz|mhz|ghz|fps|px|%)$/i.test(original.replace(/\{\d+\}/g, "0"))) {
      row = { ...row, th: original, status: "technical", reason: "Numeric value with canonical unit/currency code." };
    }
    if (typeof text !== "string" || !text.trim()) throw new Error(`Empty ${unit.id}`);
    if (row.status !== "technical" && !/\p{Script=Thai}/u.test(text)) throw new Error(`No Thai: ${unit.id}`);
    if (group === "rulebook" && (!row.title || row.status === "technical")) throw new Error(`Missing full page: ${unit.id}`);
    if (row.status !== "technical") {
      if (!sameMechanics(original, text)) throw new Error(`Numeric token mismatch: ${unit.id}`);
      if (original.length > 400 && text.length < original.length * 0.4) throw new Error(`Possible summary instead of translation: ${unit.id}`);
      for (const link of original.matchAll(/\]\(([^)]+)\)/g)) if (!text.includes(`](${link[1]})`)) throw new Error(`Link changed: ${unit.id}`);
      for (const code of original.matchAll(/`[^`]+`/g)) if (!text.includes(code[0])) throw new Error(`Code span changed: ${unit.id}`);
      for (const token of original.matchAll(/\{\d+\}/g)) if (!text.includes(token[0])) throw new Error(`Interpolation lost: ${unit.id}`);
    }
    return { ...row, id: unit.id, sourceHash: unit.sourceHash, status: row.status === "technical" ? "technical" : "translated", reviewed: false };
  });
}
export { sameMechanics, validate as validateTranslationRows };
