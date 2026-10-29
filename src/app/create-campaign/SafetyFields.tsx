"use client";
import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { SafetyToneFields } from "@/components/SafetyToneFields";
import type { StepProps } from "@/app/create-campaign/draft";
import { normalizeGm, normalizeSafety } from "@/lib/dm/safety-logic";

// The safety and tone block (docs/vtt-parity-implementation-plan.md section
// 9): the same fields the lobby edits later. A DM personality sets strictness,
// tone and the narrator's voice at once, which the line under it says, since
// the voice it changes is the one chosen beside the narration above.
export function SafetyFields({ draft, patch, gates }: StepProps) {
  const _uiT = _useUiText();
  return (
    <div className="space-y-2">
      <SafetyToneFields
        safety={normalizeSafety(draft.safety)}
        gm={normalizeGm(draft.gm)}
        ttsVoice={draft.ttsVoice}
        onSafety={(safety) => patch({ safety })}
        onGm={(gm) => patch({ gm })}
        onVoice={(ttsVoice) => patch({ ttsVoice })}
      />
      <p className="text-xs text-stone-500">{_uiT("A GM personality also sets the narrator's voice")}{gates.ttsAvailable && draft.ttsEnabled ? "" : _uiT(", kept for when narration is on")}{_uiT(". Lines and veils are separated by commas.")}</p>
    </div>
  );
}
