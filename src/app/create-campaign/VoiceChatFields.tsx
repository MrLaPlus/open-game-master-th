"use client";
import { useUiText as _useUiText } from "@/lib/i18n/ui-language";


import { Select } from "@/components/ui/Select";
import type { GameSettings } from "@/lib/schemas/game-settings";
import { FieldLabel, ToggleCard } from "@/app/create-campaign/fields";

type VoiceSettings = GameSettings["voice"];

// Live voice for a multiplayer table: the master switch, then the turn
// floor and the proximity rules that only mean something once it is on.
// A solo table never mounts this block; there is nobody to talk to.
export function VoiceChatFields({
  value,
  onChange,
}: {
  value: VoiceSettings;
  onChange: (next: VoiceSettings) => void;
}) {
  const _uiT = _useUiText();
  const setRule = (rules: Partial<VoiceSettings["rules"]>) =>
    onChange({ ...value, rules: { ...value.rules, ...rules } });
  return (
    <div>
      <FieldLabel className="mb-1.5">{_uiT("Voice chat")}</FieldLabel>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <ToggleCard
          active={value.enabled}
          onClick={() => onChange({ ...value, enabled: !value.enabled })}
          label={_uiT("Voice chat")}
          hint={_uiT("Talk live in the lobby and at the table")}
        />
        {value.enabled ? (
          <>
            <label className="block">
              <span className="mb-1 block text-xs text-stone-500">{_uiT("Turn floor")}</span>
              <Select<VoiceSettings["turnEnforcement"]>
                value={value.turnEnforcement}
                onChange={(turnEnforcement) => onChange({ ...value, turnEnforcement })}
                label={_uiT("Turn floor")}
                className="w-full"
                options={[
                  { value: "off", label: "Turns: ignored" },
                  { value: "soft", label: "Turns: shown" },
                  { value: "strict", label: "Turns: enforced" },
                ]}
              />
            </label>
            <ToggleCard
              active={value.rules.proximity}
              onClick={() => setRule({ proximity: !value.rules.proximity })}
              label={_uiT("Proximity")}
              hint={_uiT("The battle map decides who hears whom")}
            />
            {value.rules.proximity ? (
              <>
                <label className="block">
                  <span className="mb-1 block text-xs text-stone-500">{_uiT("Hearing range")}</span>
                  <Select<string>
                    value={String(value.rules.hearingRangeFeet)}
                    onChange={(feet) => setRule({ hearingRangeFeet: Number(feet) })}
                    label={_uiT("Hearing range")}
                    className="w-full"
                    options={[15, 30, 60, 120].map((feet) => ({ value: String(feet), label: `${feet} ft` }))}
                  />
                </label>
                <ToggleCard
                  active={value.rules.sayRange}
                  onClick={() => setRule({ sayRange: !value.rules.sayRange })}
                  label={_uiT("Whisper and shout")}
                  hint={_uiT("Speakers pick how far their words carry")}
                />
                <ToggleCard
                  active={value.rules.wallsAttenuate}
                  onClick={() => setRule({ wallsAttenuate: !value.rules.wallsAttenuate })}
                  label={_uiT("Walls muffle")}
                  hint={_uiT("A wall muffles a voice instead of cutting it")}
                />
              </>
            ) : null}
            <ToggleCard
              active={value.rules.downedGoDeaf}
              onClick={() => setRule({ downedGoDeaf: !value.rules.downedGoDeaf })}
              label={_uiT("Downed go deaf")}
              hint={_uiT("At 0 hit points a character stops hearing the table")}
            />
          </>
        ) : null}
      </div>
      <p className="mt-1 text-xs text-stone-500">{_uiT("The server has its own switch for live audio too; if the owner keeps it off, these settings wait until it is on. Transcription is turned on from the lobby's Game settings, where everyone at the table is told it is on.")}</p>
    </div>
  );
}
