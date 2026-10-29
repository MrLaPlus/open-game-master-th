"use client";
import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/ui";
import { SessionBanner, bannerButtonClass } from "@/app/campaigns/[campaignId]/SessionBanner";

// Lead-only banner after a mid-game joiner creates their character: write
// the introduction as a Direct, or let the DM improvise one now.
export function NewAdventurerBanner({
  campaignId,
  text,
  onWriteIntro,
  onDismiss,
}: {
  campaignId: string;
  text: string;
  onWriteIntro: () => void;
  onDismiss: () => void;
}) {
  const _uiT = _useUiText();
  const [sending, setSending] = useState(false);

  async function letDmIntroduce() {
    if (sending) {
      return;
    }
    setSending(true);
    try {
      await fetch(`/api/campaigns/${campaignId}/lead-note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "Introduce the newly joined character into the scene now.",
        }),
      });
      onDismiss();
    } finally {
      setSending(false);
    }
  }

  return (
    <SessionBanner
      glyph="system-party"
      title={_uiT("A new adventurer")}
      actions={
        <>
          <button type="button" onClick={onWriteIntro} className={bannerButtonClass(true)}>{_uiT("Write intro")}</button>
          <button
            type="button"
            onClick={letDmIntroduce}
            disabled={sending}
            className={bannerButtonClass()}
          >{_uiT("Let the GM do it")}</button>
          <button
            type="button"
            onClick={onDismiss}
            title={_uiT("Dismiss")}
            aria-label={_uiT("Dismiss")}
            className={cn(ui.iconAction, "opacity-100")}
          >
            <X className="size-4" />
          </button>
        </>
      }
    >
      <span className="block sm:truncate">{text}</span>
    </SessionBanner>
  );
}
