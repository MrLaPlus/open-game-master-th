"use client";
import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { PageSection } from "@/components/PageShell";
import { DictationShortcutField } from "@/components/DictationShortcutField";

// The hold-to-dictate key (issue 291), on this device like Appearance: the
// apps also offer it under Audio and dice in their own Settings.
export function DictationShortcutSection() {
  const _uiT = _useUiText();
  return (
    <PageSection
      heading={_uiT("Dictation key")}
      glyph="ui-voice"
      intro="Kept on this device. A key you hold to speak into the table's message box instead of holding the mic. Nothing is sent until you press Send."
    >
      <DictationShortcutField />
    </PageSection>
  );
}
