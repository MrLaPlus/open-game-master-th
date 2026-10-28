"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { message, type UiLanguage } from "./messages";

const KEY = "ogm.ui-language";
const EVENT = "ogm:ui-language";
let transient: UiLanguage | undefined;
export function readUiLanguage(): UiLanguage {
  if (typeof window === "undefined") return "en";
  if (transient) return transient;
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "th" || value === "en" ? value : (transient ?? "en");
  } catch { return transient ?? "en"; }
}
function subscribe(listener: () => void) {
  window.addEventListener(EVENT, listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY || event.key === null) { transient = undefined; listener(); }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}
export function writeUiLanguage(language: UiLanguage) {
  try { window.localStorage.setItem(KEY, language); transient = undefined; }
  catch { transient = language; /* Private browsing may refuse storage. */ }
  window.dispatchEvent(new Event(EVENT));
}
export function useUiLanguage(): UiLanguage {
  return useSyncExternalStore(subscribe, readUiLanguage, () => "en");
}
export function useUiText() {
  const language = useUiLanguage();
  return (text: string) => message(text, language);
}
export function Tr({ children }: { children: string }) {
  const t = useUiText();
  return t(children);
}
// This boundary also works when a server component passes a heading through.
export function TranslatedText({ children }: { children: ReactNode }) {
  const t = useUiText();
  return typeof children === "string" ? t(children) : children;
}
export function UiLanguageRuntime() {
  const language = useUiLanguage();
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return null;
}
export function UiLanguagePicker() {
  const language = useUiLanguage();
  return (
    <label className="flex min-h-10 items-center gap-2 text-sm text-stone-400">
      <span>ภาษา / Language</span>
      <select aria-label="ภาษาเมนู / Interface language" value={language}
        onChange={(event) => writeUiLanguage(event.target.value === "th" ? "th" : "en")}
        className="min-h-10 rounded-md border border-stone-700 bg-stone-950 px-2 text-stone-200 focus-visible:outline-amber-300">
        <option value="en">English</option><option value="th">ไทย</option>
      </select>
    </label>
  );
}
