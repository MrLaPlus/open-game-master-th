"use client";
import { TranslatedText as _I18nValue } from "@/lib/i18n/ui-language";

import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { Check, Loader2, RefreshCw, X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { registerOutput, releaseOutput } from "@/lib/audio-devices";
import { CHECKPOINT_PRESET, comfyModel } from "@/lib/image-models/catalog";
import { honoursNegative } from "@/lib/image-models/workflow";
import { ui } from "@/lib/ui";
import { Select } from "@/components/ui/Select";
import { comfyModelOptions, comfyModelPatch, fetchComfyModels } from "@/app/admin/AdminImagesSection";
import { BuiltinSpeechCard } from "@/app/admin/BuiltinSpeechCard";
import { ModelChoiceField } from "@/app/admin/ModelChoice";
import type { ModelChoices } from "@/lib/model-registry/registry";
import { BLANK, SPEECH_MODELS, fromEnv } from "@/app/admin/model-blanks";
import type { EnvDefaults } from "@/app/admin/AdminSettingsFields";
import { HarnessPictureTest } from "@/app/admin/HarnessPictureTest";
import { comfyFromScan, type Draft, type ModelField } from "@/app/setup/draft";
import { ChoiceCard, ChoiceCards, Lamp, SuggestionNote, host, type ScanResult } from "@/app/setup/SetupParts";
import { CopyLine } from "@/components/CopyLine";
import { cn } from "@/lib/cn";
import { fillsStep, type NarrationSuggestion, type PicturesSuggestion } from "@/lib/setup/suggest";

const OPENAI_V1 = "https://api.openai.com/v1";

// A model field's answer, remembered so that coming back to the step never
// fills a None the admin chose (Draft.answered).
const answer = (current: Draft, field: ModelField): Draft["answered"] =>
  current.answered.includes(field) ? current.answered : [...current.answered, field];
// A Whisper service's only model already runs a blank field, which then
// follows the service; the recommended model is filled only among several.
const severalListed = (choices: ModelChoices) => choices.models.filter((model) => model.listed).length > 1;

// Pictures and Voice: optional, so each offers "none" as a real answer, and
// each prefers what the scan found on this computer (free) over anything
// billed to a key.

type Update = (change: (draft: Draft) => Draft) => void;

const MEDIA_GUIDE = "https://github.com/Lebbitheplow/open-game-master/blob/main/docs/media-setup.md";
type SetupComfyModels = NonNullable<ScanResult["comfyui"]> & { error: string | null };

const sameComfyAddress = (left: string, right: string) => left.replace(/\/+$/, "") === right.replace(/\/+$/, "");

export async function loadSetupComfyModels(
  url: string,
  scanned: ScanResult["comfyui"],
  signal: AbortSignal,
): Promise<SetupComfyModels | null> {
  const address = url.trim();
  if (!address) return null;
  if (scanned && sameComfyAddress(address, scanned.url)) return { ...scanned, url: address, error: null };
  const found = await fetchComfyModels(address, signal);
  return { url: address, checkpoints: found.checkpoints, models: found.models, hardware: found.hardware, error: found.error };
}

// The best model measured on this hardware, when this ComfyUI lacks it and
// has none as good: worth a line in the wizard.
export function betterModelHint(comfy: SetupComfyModels | null): string {
  if (!comfy?.hardware || comfy.error) return "";
  const recommended = comfy.models.filter((model) => model.verified?.verdict === "recommended");
  if (!recommended.length || recommended.some((model) => !model.missing.length)) return "";
  const best = recommended[0];
  return `Measured best on ${comfy.hardware.label}: ${comfyModel(best.id)?.label ?? best.id}, about ${Math.round(best.verified!.seconds.square)} s a picture. This ComfyUI lacks its files (${best.downloadGb} GB); Admin > Images lists them.`;
}

function KeyField({ label, value, onChange, saved, hint }: { label: string; value: string; onChange: (value: string) => void; saved: boolean; hint: string }) {
  const _uiT = _useUiText();
  return (
    <label className="reveal block">
      <span className="mb-1 block text-xs font-medium text-stone-400">{label}</span>
      <input
        type="password"
        className={ui.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={saved ? _uiT("•••••••• (saved, leave blank to keep it)") : _uiT("sk-...")}
        autoComplete="off"
      />
      <span className="mt-1 block text-[11px] text-stone-500">{hint}</span>
    </label>
  );
}

// A picture answer with what the scan found filled in: a ComfyUI picked
// with no address yet takes the one found here. Shared by the cards and by
// the wizard, which fills an unanswered step with its suggestion.
export function withPictures(current: Draft, pictures: Draft["pictures"], scanned: ScanResult["comfyui"]): Draft {
  return {
    ...current,
    pictures,
    comfy: pictures === "comfyui" && !current.comfy.url && scanned ? comfyFromScan(current.comfy, scanned) : current.comfy,
  };
}

export function withNarration(current: Draft, narration: Draft["narration"], kokoro: ScanResult["kokoro"]): Draft {
  return {
    ...current,
    narration,
    kokoro:
      narration === "kokoro" && !current.kokoro.url && kokoro
        ? { url: kokoro.url, voice: current.kokoro.voice || (kokoro.voices.includes("af_heart") ? "af_heart" : kokoro.voices[0] ?? "") }
        : current.kokoro,
  };
}

// "Look again" for a step whose services the scan looks for: start one, then
// press it, and the card lights up without leaving the wizard.
function ScanAgain({ scanning, onRescan, what }: { scanning: boolean; onRescan?: () => void; what: string }) {
  const _uiT = _useUiText();
  if (!onRescan) return null;
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-xs text-stone-500">{scanning ? `Looking for ${what} on this computer…` : `Started ${what} just now?`}</span>
      <button type="button" className={ui.btnSmall} onClick={onRescan} disabled={scanning} aria-busy={scanning}>
        <RefreshCw className={cn("size-3.5", scanning && "animate-spin")} />{" "}{_uiT("Look again")}</button>
    </div>
  );
}

// The commands that start each local service, for an admin who has none
// running yet. They match docs/media-setup.md.
function ComfyStartHints() {
  const _uiT = _useUiText();
  return (
    <details className="reveal rounded-lg border border-stone-800 bg-stone-950/40 px-3 py-2">
      <summary className="cursor-pointer text-sm text-stone-300">{_uiT("How do I start ComfyUI?")}</summary>
      <div className="mt-3 space-y-3 text-xs text-stone-400">
        <div>
          <span className="mb-1 block">{_uiT("On Linux or a Mac, with Python 3 and Git installed (install the PyTorch build for your GPU first if the ComfyUI README says to):")}</span>
          <CopyLine
            text="git clone https://github.com/comfyanonymous/ComfyUI && cd ComfyUI && python -m venv venv && . venv/bin/activate && pip install -r requirements.txt && python main.py --listen 127.0.0.1 --port 8188"
            label={_uiT("ComfyUI install command")}
          />
        </div>
        <p>{_uiT("On Windows, the ComfyUI desktop installer or the portable build both work.")}</p>
        <p>{_uiT("Then give it a model: a checkpoint in ComfyUI/models/checkpoints, or one of the measured models Admin > Image generation lists with its download links. Press Look again once it is running.")}{" "}
          <a href={MEDIA_GUIDE} target="_blank" rel="noreferrer" className="text-amber-200 underline">{_uiT("The media guide, step by step")}</a>
          .
        </p>
      </div>
    </details>
  );
}

function KokoroStartHints() {
  const _uiT = _useUiText();
  return (
    <details className="reveal rounded-lg border border-stone-800 bg-stone-950/40 px-3 py-2">
      <summary className="cursor-pointer text-sm text-stone-300">{_uiT("How do I start Kokoro?")}</summary>
      <div className="mt-3 space-y-3 text-xs text-stone-400">
        <div>
          <span className="mb-1 block">{_uiT("On the processor, with Docker:")}</span>
          <CopyLine text="docker run -d --name kokoro --restart unless-stopped -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-cpu:latest" label={_uiT("Kokoro CPU command")} />
        </div>
        <div>
          <span className="mb-1 block">{_uiT("On an NVIDIA graphics card, faster:")}</span>
          <CopyLine text="docker run -d --name kokoro --restart unless-stopped --gpus all -p 8880:8880 ghcr.io/remsky/kokoro-fastapi-gpu:latest" label={_uiT("Kokoro GPU command")} />
        </div>
        <p>{_uiT("It answers on port 8880 within a minute of starting. Press Look again and its voices appear.")}{" "}
          <a href={MEDIA_GUIDE} target="_blank" rel="noreferrer" className="text-amber-200 underline">{_uiT("More in the media guide")}</a>
          .
        </p>
      </div>
    </details>
  );
}

export function PicturesStep({
  draft,
  update,
  scan,
  scanning,
  storyIsOpenAi,
  agentPaints,
  agentVerified,
  agentLabel,
  onAgentVerified,
  openaiKeySaved,
  env,
  onComfyOffers,
  suggestion,
  onRescan,
}: {
  draft: Draft;
  update: Update;
  scan: ScanResult | null;
  scanning: boolean;
  // What the setup suggests here, from the storyteller and the scan.
  suggestion?: PicturesSuggestion;
  onRescan?: () => void;
  storyIsOpenAi: boolean;
  // The storyteller chosen on the last step has an image tool of its own.
  agentPaints: boolean;
  // A test picture has come back from it on this server.
  agentVerified: boolean;
  agentLabel: string;
  onAgentVerified: () => void;
  openaiKeySaved: boolean;
  env: EnvDefaults;
  // Told whether the ComfyUI at the draft's address offers a model or a
  // checkpoint to pick, which holds Continue until one is picked.
  onComfyOffers?: (offers: boolean) => void;
}) {
  const _uiT = _useUiText();
  const scannedComfy = scan?.comfyui ?? null;
  const address = draft.comfy.url.trim();
  const scanMatches = Boolean(scannedComfy && sameComfyAddress(address, scannedComfy.url));
  const [checkedComfy, setCheckedComfy] = useState<SetupComfyModels | null>(null);

  useEffect(() => {
    if (draft.pictures !== "comfyui" || !address || scanMatches) return;
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      void loadSetupComfyModels(address, scannedComfy, controller.signal)
        .then((found) => {
          if (!controller.signal.aborted) setCheckedComfy(found);
        })
        .catch(() => {
          if (!controller.signal.aborted) {
            setCheckedComfy({ url: address, checkpoints: [], models: [], hardware: null, error: "Could not check ComfyUI. Check its address." });
          }
        });
    }, 250);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [address, draft.pictures, scannedComfy, scanMatches]);

  const comfy = scanMatches && scannedComfy
    ? { ...scannedComfy, url: address, error: null }
    : checkedComfy?.url === address ? checkedComfy : null;
  const checkingComfy = Boolean(address && draft.pictures === "comfyui" && !comfy);
  // The same choices as Admin > Images: catalog models this ComfyUI has every
  // file for, measured ones first, then its checkpoints.
  const options = comfyModelOptions(draft.comfy, comfy && { ...comfy, device: null });
  const chosenModel = draft.comfy.preset !== CHECKPOINT_PRESET ? comfyModel(draft.comfy.preset) : undefined;
  // The same test that shows the picker below.
  const comfyOffers = Boolean(comfy && !comfy.error && (comfy.checkpoints.length || options.length > 1));
  useEffect(() => {
    onComfyOffers?.(comfyOffers);
  }, [comfyOffers, onComfyOffers]);
  const pick = (pictures: Draft["pictures"]) => update((current) => withPictures(current, pictures, scannedComfy));
  const setComfy = (patch: Partial<Draft["comfy"]>) => update((current) => ({ ...current, comfy: { ...current.comfy, ...patch } }));

  const picksName: Record<PicturesSuggestion["pick"], string> = { agent: agentLabel, openai: "OpenAI", comfyui: "ComfyUI", none: "" };
  return (
    <div className="space-y-4">
      {suggestion ? (
        <SuggestionNote
          reason={suggestion.reason}
          title={fillsStep(suggestion.pick) ? picksName[suggestion.pick] : undefined}
          taken={draft.pictures === suggestion.pick}
          onTake={() => pick(suggestion.pick)}
        />
      ) : null}
      <ChoiceCards label={_uiT("Pictures")}>
        <ChoiceCard
          picked={draft.pictures === "comfyui"}
          onPick={() => pick("comfyui")}
          suggested={suggestion?.pick === "comfyui"}
          glyph="ui-paint"
          title={_uiT("ComfyUI on this computer")}
          sub="Portraits, scene art and battle maps, painted on your own GPU. Free to run."
          badge={scanning || checkingComfy ? { text: "Looking…", tone: "off" } : comfy && !comfy.error ? { text: "Found", tone: "ready" } : { text: "Not found", tone: "off" }}
        />
        <ChoiceCard
          picked={draft.pictures === "openai"}
          onPick={() => pick("openai")}
          suggested={suggestion?.pick === "openai"}
          glyph="tab-admin"
          title={_uiT("OpenAI's image model")}
          sub={storyIsOpenAi ? "On the key from the last step. Each picture is billed to it." : "Billed to an OpenAI key, per picture. No GPU needed."}
        />
        {agentPaints ? (
          <ChoiceCard
            picked={draft.pictures === "agent"}
            onPick={() => pick("agent")}
            suggested={suggestion?.pick === "agent"}
            glyph="system-share"
            title={_uiT(`${agentLabel} paints`)}
            sub={
              agentVerified
                ? `${agentLabel}'s own image tool, on its own plan. It painted a test map here already.`
                : `${agentLabel}'s own image tool, on its own plan. One test map first, painted the way a table asks for one.`
            }
            badge={agentVerified ? { text: "Tested", tone: "ready" } : null}
          />
        ) : null}
        <ChoiceCard
          picked={draft.pictures === "none"}
          onPick={() => pick("none")}
          suggested={suggestion?.pick === "none"}
          glyph="tab-handout"
          title={_uiT("No pictures for now")}
          sub="Painted placeholders stand in. A ComfyUI started later on this computer is picked up on its own."
        />
      </ChoiceCards>

      <ScanAgain scanning={scanning || checkingComfy} onRescan={onRescan} what="ComfyUI" />
      {!scanning && !(comfy && !comfy.error) && (draft.pictures === "comfyui" || draft.pictures === "" || draft.pictures === "none") ? <ComfyStartHints /> : null}

      {draft.pictures === "comfyui" ? (
        <div key="comfy" className="reveal-height space-y-3">
          {!address && !scanning ? (
            <p className="su-note">{_uiT("Nothing answered at ComfyUI's usual address. Start ComfyUI (its default port is 8188), or type where it runs.")}{" "}
              <a href={MEDIA_GUIDE} target="_blank" rel="noreferrer" className="text-amber-200 underline">{_uiT("Installing ComfyUI, step by step")}</a>
              .
            </p>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("ComfyUI address")}</span>
              <input className={ui.input} value={draft.comfy.url} onChange={(event) => { setCheckedComfy(null); setComfy({ url: event.target.value }); }} placeholder={_uiT("http://127.0.0.1:8188")} />
            </label>
            {checkingComfy ? (
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Model file (checkpoint)")}</span>
                <input className={ui.input} disabled placeholder={_uiT("Checking installed models…")} />
              </label>
            ) : comfy && (comfy.checkpoints.length || options.length > 1) ? (
              <div role="group" aria-label={_uiT("Image model")} className="block">
                <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Image model")}</span>
                <Select
                  value={draft.comfy.preset !== CHECKPOINT_PRESET ? `preset:${draft.comfy.preset}` : `checkpoint:${draft.comfy.checkpoint}`}
                  onChange={(value) => {
                    const patch = comfyModelPatch(value, options);
                    if (!patch) return;
                    setComfy({
                      preset: patch.comfyWorkflowPreset ?? CHECKPOINT_PRESET,
                      ...(patch.comfyCheckpoint !== undefined ? { checkpoint: patch.comfyCheckpoint } : {}),
                    });
                  }}
                  options={options}
                  label={_uiT("Image model")}
                  className="w-full"
                />
              </div>
            ) : (
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Model file (checkpoint)")}</span>
                <input className={ui.input} value={draft.comfy.checkpoint} onChange={(event) => setComfy({ checkpoint: event.target.value, preset: "checkpoint" })} placeholder={_uiT("Any SDXL checkpoint in ComfyUI/models/checkpoints")} />
              </label>
            )}
          </div>
          {comfy?.error ? <p role="alert" className="text-xs text-red-300"><_I18nValue>{comfy.error}</_I18nValue></p> : checkingComfy ? <p role="status" className="text-xs text-stone-500">{_uiT("Checking models at this address…")}</p> : null}
          <p className="text-[11px] text-stone-500">
            {chosenModel && !honoursNegative(chosenModel)
              ? `${chosenModel.label} runs without a negative prompt, so a table's boundary cannot keep anything out of its pictures.`
              : _uiT("Any checkpoint works; the campaign's genre supplies the art style.")}
          </p>
          {betterModelHint(comfy) ? <p className="text-[11px] text-stone-500">{betterModelHint(comfy)}</p> : null}
        </div>
      ) : draft.pictures === "agent" ? (
        <div key="agent" className="reveal-height">
          <HarnessPictureTest
            saved
            picturesVerified={agentVerified}
            picturesForTables={false}
            offerAdopt={false}
            onVerified={onAgentVerified}
          />
        </div>
      ) : draft.pictures === "openai" ? (
        <div key="openai" className="reveal-height space-y-3">
          {storyIsOpenAi ? (
            <p className="su-note">{_uiT("Pictures go to OpenAI on the storyteller's key. Nothing more to paste.")}</p>
          ) : (
            <KeyField
              label={_uiT("OpenAI API key")}
              value={draft.picturesKey}
              onChange={(picturesKey) => update((current) => ({ ...current, picturesKey }))}
              saved={openaiKeySaved}
              hint={_uiT("Used only for pictures. Each portrait, scene and map is billed to it.")}
            />
          )}
          <ModelChoiceField
            label={_uiT("Picture model")}
            hint={_uiT("The picture models the key lists.")}
            role="image"
            provider="images"
            apiKey={draft.picturesKey}
            value={draft.picturesModel}
            onChange={(picturesModel) => update((current) => ({ ...current, picturesModel, answered: answer(current, "pictures") }))}
            blankLabel={env.openaiImageModel ? fromEnv(env.openaiImageModel, "OPENAI_IMAGE_MODEL") : BLANK.picture}
            preselect={!env.openaiImageModel && !draft.answered.includes("pictures")}
          />
        </div>
      ) : null}
    </div>
  );
}

type TestResult = { ok: boolean; model?: string; voice?: string; audio?: string; error?: string };

function NarrationTest({ body }: { body: Record<string, string> }) {
  const _uiT = _useUiText();
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  async function test() {
    setTesting(true);
    setResult(null);
    audioRef.current?.pause();
    try {
      const response = await fetch("/api/admin/tts-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await response.json().catch(() => null)) as TestResult | null;
      setResult(data ?? { ok: false, error: "The test request failed without an answer." });
      if (data?.ok && data.audio) {
        if (audioRef.current) releaseOutput(audioRef.current);
        const audio = registerOutput(new Audio(data.audio));
        audioRef.current = audio;
        audio.onended = () => releaseOutput(audio);
        void audio.play().catch(() => {});
      }
    } catch {
      setResult({ ok: false, error: "Could not reach this server." });
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="space-y-2">
      <button type="button" onClick={test} disabled={testing} aria-busy={testing} className={ui.btnSmall}>
        {testing ? <Loader2 className="size-4 animate-spin" /> : <Zap className="size-4" />}{" "}{_uiT("Hear a line")}</button>
      {result?.ok ? (
        <p role="status" className="live-in flex items-center gap-1 text-sm text-emerald-400">
          <Check className="tick-in size-4" />{" "}{_uiT("Spoken by")}{" "}{result.model}{" "}{_uiT("in the voice")}{" "}{result.voice}.
        </p>
      ) : result ? (
        <p role="alert" className="motion-shake flex items-start gap-1 text-sm text-red-400">
          <X className="mt-0.5 size-4 shrink-0" /> <_I18nValue>{result.error || "The speech server did not answer."}</_I18nValue>
        </p>
      ) : null}
    </div>
  );
}

export function VoiceStep({
  draft,
  update,
  scan,
  scanning,
  storyIsOpenAi,
  ttsKeySaved,
  env,
  suggestion,
  onRescan,
}: {
  draft: Draft;
  update: Update;
  scan: ScanResult | null;
  scanning: boolean;
  storyIsOpenAi: boolean;
  ttsKeySaved: boolean;
  env: EnvDefaults;
  suggestion?: NarrationSuggestion;
  onRescan?: () => void;
}) {
  const _uiT = _useUiText();
  const kokoro = scan?.kokoro ?? null;
  const whisper = scan?.whisper ?? null;
  const pick = (narration: Draft["narration"]) => update((current) => withNarration(current, narration, kokoro));
  const setKokoro = (patch: Partial<Draft["kokoro"]>) => update((current) => ({ ...current, kokoro: { ...current.kokoro, ...patch } }));

  const picksName: Record<NarrationSuggestion["pick"], string> = { kokoro: "Kokoro", openai: "OpenAI", off: "" };
  return (
    <div className="space-y-4">
      {suggestion ? (
        <SuggestionNote
          reason={suggestion.reason}
          title={fillsStep(suggestion.pick) ? picksName[suggestion.pick] : undefined}
          taken={draft.narration === suggestion.pick}
          onTake={() => pick(suggestion.pick)}
        />
      ) : null}
      <ChoiceCards label="Narration">
        <ChoiceCard
          picked={draft.narration === "kokoro"}
          onPick={() => pick("kokoro")}
          suggested={suggestion?.pick === "kokoro"}
          glyph="ui-speech"
          title={_uiT("Kokoro on this computer")}
          sub="Reads each passage aloud in the campaign's chosen voice. Free, and the text stays here."
          badge={scanning ? { text: "Looking…", tone: "off" } : kokoro ? { text: "Found", tone: "ready" } : { text: "Not found", tone: "off" }}
        />
        <ChoiceCard
          picked={draft.narration === "openai"}
          onPick={() => pick("openai")}
          suggested={suggestion?.pick === "openai"}
          glyph="tab-admin"
          title={_uiT("OpenAI's voices")}
          sub={storyIsOpenAi ? "On the storyteller's key. Every passage read aloud is billed to it." : "Billed to an OpenAI key for every passage read aloud."}
        />
        <ChoiceCard
          picked={draft.narration === "off"}
          onPick={() => pick("off")}
          suggested={suggestion?.pick === "off"}
          glyph="tab-handout"
          title={_uiT("Text only")}
          sub="No narration. Nothing is sent anywhere to be spoken."
        />
      </ChoiceCards>

      <ScanAgain scanning={scanning} onRescan={onRescan} what="Kokoro" />
      {!kokoro && !scanning && draft.narration !== "openai" ? <KokoroStartHints /> : null}

      {draft.narration === "kokoro" ? (
        <div key="kokoro" className="reveal-height space-y-3">
          {!kokoro && !scanning ? (
            <p className="su-note">{_uiT("Nothing answered at Kokoro's usual address (port 8880). Start it with a command above, or type where it runs.")}</p>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Kokoro address")}</span>
              <input className={ui.input} value={draft.kokoro.url} onChange={(event) => setKokoro({ url: event.target.value })} placeholder={_uiT("http://127.0.0.1:8880")} />
            </label>
            {kokoro?.voices.length ? (
              <div role="group" aria-label={_uiT("Default voice")} className="block">
                <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Default voice")}</span>
                <Select
                  value={draft.kokoro.voice}
                  onChange={(voice) => setKokoro({ voice })}
                  options={kokoro.voices.map((voice) => ({ value: voice, label: voice }))}
                  label={_uiT("Default voice")}
                  className="w-full"
                />
              </div>
            ) : (
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-stone-400">{_uiT("Default voice")}</span>
                <input className={ui.input} value={draft.kokoro.voice} onChange={(event) => setKokoro({ voice: event.target.value })} placeholder={_uiT("af_heart")} />
              </label>
            )}
          </div>
          <NarrationTest body={{ provider: "kokoro", kokoroUrl: draft.kokoro.url, voice: draft.kokoro.voice }} />
        </div>
      ) : draft.narration === "openai" ? (
        <div key="openai" className="reveal-height space-y-3">
          {storyIsOpenAi ? null : (
            <KeyField
              label={_uiT("OpenAI API key")}
              value={draft.narrationKey}
              onChange={(narrationKey) => update((current) => ({ ...current, narrationKey }))}
              saved={ttsKeySaved}
              hint={_uiT("Used only for narration. Blank uses the key saved for pictures, if there is one.")}
            />
          )}
          <ModelChoiceField
            label={_uiT("Narration model")}
            role="narration"
            provider="speech"
            baseUrl={OPENAI_V1}
            apiKey={draft.narrationKey}
            value={draft.narrationModel}
            onChange={(narrationModel) => update((current) => ({ ...current, narrationModel, answered: answer(current, "narration") }))}
            narrow={SPEECH_MODELS.narration}
            blankLabel={env.ttsModel ? fromEnv(env.ttsModel, "TTS_MODEL") : BLANK.narration}
            preselect={!env.ttsModel && !draft.answered.includes("narration")}
          />
          <NarrationTest body={{ provider: "openai", baseUrl: "", apiKey: draft.narrationKey, model: draft.narrationModel }} />
        </div>
      ) : null}

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-stone-200">{_uiT("Push-to-talk dictation")}</h4>
        {whisper ? (
          <>
            <p className="su-row text-sm text-stone-300">
              <Lamp tone="ok" />{" "}{_uiT("A Whisper server at")}{" "}{host(whisper.url)}{" "}{_uiT("turns speech into text, with the model picked here.")}</p>
            <ModelChoiceField
              label={_uiT("Whisper model")}
              role="dictation"
              provider="speech"
              baseUrl={whisper.url}
              value={draft.dictation.whisperModel}
              onChange={(whisperModel) =>
                update((current) => ({ ...current, dictation: { ...current.dictation, whisperModel }, answered: answer(current, "whisper") }))
              }
              narrow={SPEECH_MODELS.dictation}
              blankLabel={env.sttModel ? fromEnv(env.sttModel, "STT_MODEL") : BLANK.whisper}
              preselect={!env.sttModel && !draft.answered.includes("whisper") && severalListed}
            />
          </>
        ) : storyIsOpenAi ? (
          <>
            <p className="su-row text-sm text-stone-300">
              <Lamp tone="ok" />{" "}{_uiT("The OpenAI key takes dictation too, with the model picked here.")}</p>
            <ModelChoiceField
              label={_uiT("Transcription model")}
              role="dictation"
              provider="speech"
              baseUrl={env.openaiImageBaseUrl || OPENAI_V1}
              value={draft.dictation.openaiModel}
              onChange={(openaiModel) =>
                update((current) => ({ ...current, dictation: { ...current.dictation, openaiModel }, answered: answer(current, "transcription") }))
              }
              narrow={SPEECH_MODELS.dictation}
              blankLabel={env.sttOpenaiModel ? fromEnv(env.sttOpenaiModel, "STT_OPENAI_MODEL") : BLANK.transcription}
              preselect={!env.sttOpenaiModel && !draft.answered.includes("transcription")}
            />
          </>
        ) : (
          <>
            <p className="text-xs text-stone-500">{_uiT("No Whisper server answered. The built-in engine runs right here, on the CPU, after a one-time download:")}</p>
            <BuiltinSpeechCard />
          </>
        )}
      </div>
    </div>
  );
}
