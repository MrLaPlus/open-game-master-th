"use client";
import { TranslatedText as _I18nValue } from "@/lib/i18n/ui-language";

import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { LoadFailed } from "@/app/campaigns/[campaignId]/PanelKit";
import { readLoad, useLoadStatus } from "@/lib/load-state";
import { Check, Undo2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/ui";
import { EmptyState } from "@/components/EmptyState";
import { PageSkeleton } from "@/components/PageSkeleton";
import { GameIcon } from "@/components/ui/GameIcon";
import { SectionHead } from "@/components/ui/SectionHead";
import { Switch } from "@/components/ui/Switch";

type Report = {
  id: string;
  campaignId: string;
  campaignName: string;
  reporterUsername: string;
  messageId: string | null;
  reportedUserId: string | null;
  reportedUsername: string | null;
  authorType: "player" | "dm" | "system";
  reason: string;
  details: string;
  excerpt: string;
  status: "open" | "resolved";
  createdAt: string;
  resolvedAt: string | null;
};

const REASON_LABEL: Record<string, string> = {
  harassment: "Harassment",
  sexual: "Sexual content",
  hate: "Hate",
  violence: "Violence or threats",
  spam: "Spam",
  other: "Other",
};

// The moderation queue: what players flagged, with the text as it read
// when they flagged it. Acting on a report happens elsewhere (the Users
// tab deletes accounts, the party lead mutes); this is where it is read
// and closed.
export function AdminReportsPanel() {
  const _uiT = _useUiText();
  const [reports, setReports] = useState<Report[] | null>(null);
  // A refused or failed read is shown in the server's words with a way to
  // ask again, never as "nothing here yet" (issue 140).
  const { loaded, loadError, settle } = useLoadStatus();

  const [showAll, setShowAll] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const refresh = useCallback(() => {
    readLoad<{ reports?: Report[] }>(fetch(`/api/admin/reports${showAll ? "?status=all" : ""}`), "The reports").then((outcome) => {
      settle(outcome);
      if (outcome.payload) {
        setReports(outcome.payload.reports ?? []);
      }
    });
  }, [showAll, settle]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function setStatus(report: Report, status: "open" | "resolved") {
    setBusyId(report.id);
    setError("");
    try {
      const response = await fetch(`/api/admin/reports/${report.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error || "That didn't work.");
        return;
      }
      refresh();
    } finally {
      setBusyId(null);
    }
  }

  if (!reports) {
    return <PageSkeleton kind="flat" className="px-0 py-2" />;
  }

  return (
    <section className={cn(ui.card, "texture-noise p-5")}>
      <SectionHead
        level="h2"
        title={_uiT("Moderation queue")}
        glyph="attitude-wary"
        aside={
          <span className="flex items-center gap-2 whitespace-nowrap">{_uiT("Show resolved")}<Switch on={showAll} onChange={setShowAll} label={_uiT("Show resolved")} />
          </span>
        }
      />
      <p className="mb-3 text-sm leading-6 text-stone-400">{_uiT("Players flag Game Master passages, messages and other players from the table. Reports come to this server only; there is no central moderation behind the app.")}</p>

      {error ? <p role="alert" className="motion-shake mb-3 text-sm text-red-400"><_I18nValue>{error}</_I18nValue></p> : null}

      {reports.length === 0 ? (
        (loadError ? (
          <LoadFailed
            error={loadError}
            onRetry={refresh}
          />
        ) : loaded ? (
          <EmptyState
            art="board"
            title={showAll ? _uiT("No reports yet.") : _uiT("Nothing waiting. Open reports show up here.")}
          />
        ) : null)
      ) : (
        <ul className="stagger space-y-2">
          {reports.map((report) => (
            <li key={report.id} className="plate-row" data-layout="stack" data-tone={report.status === "open" ? undefined : "muted"}>
              <div className="flex flex-wrap items-center gap-2 text-sm text-stone-100">
                <GameIcon icon={{ kind: "glyph", key: report.status === "open" ? "quest-active" : "quest-done" }} size="size-6" />
                <span className="plate-chip">{REASON_LABEL[report.reason] ?? report.reason}</span>
                <span>
                  {report.authorType === "dm"
                    ? _uiT("Game Master passage")
                    : report.reportedUsername
                      ? `Player ${report.reportedUsername}`
                      : _uiT("Player (account deleted)")}
                </span>
                <span className="text-xs text-stone-500">{_uiT("in")}{" "}
                  <Link href={`/campaigns/${report.campaignId}`} className="text-amber-200 hover:text-amber-100">
                    {report.campaignName}
                  </Link>{_uiT(", reported by")}{" "}{report.reporterUsername}{" "}{_uiT("on")}{" "}{new Date(report.createdAt).toLocaleString()}
                </span>
              </div>
              {report.excerpt ? (
                <blockquote className="reveal whitespace-pre-wrap rounded-md border border-amber-500/15 bg-stone-950/60 px-3 py-2 font-serif text-sm text-stone-300">
                  {report.excerpt}
                </blockquote>
              ) : null}
              {report.details ? (
                <p className="reveal text-sm text-stone-400">
                  <span className="text-stone-500">{_uiT("Reporter says:")}</span> {report.details}
                </p>
              ) : null}
              <div className="flex flex-wrap items-center justify-end gap-1.5">
                {report.status === "open" ? (
                  <button type="button" disabled={busyId === report.id} onClick={() => setStatus(report, "resolved")} className={ui.btnSmall}>
                    <Check className="size-3.5" />{" "}{_uiT("Mark resolved")}</button>
                ) : (
                  <button type="button" disabled={busyId === report.id} onClick={() => setStatus(report, "open")} className={ui.btnSmall}>
                    <Undo2 className="size-3.5" />{" "}{_uiT("Reopen")}</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
