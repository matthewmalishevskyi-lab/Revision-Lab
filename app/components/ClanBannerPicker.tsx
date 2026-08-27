"use client";

import { useState } from "react";
import { ClanBanner } from "./ClanBanner";
import { ClanBadgeIcon } from "./ClanBadgeIcon";
import {
  CLAN_COLORS,
  CLAN_ICONS,
  CLAN_SHAPES,
  colorHex,
  DEFAULT_BANNER,
} from "../lib/clanBanners";

// Three swatch rows plus a live preview, all held in this component's own
// state and submitted as three hidden inputs — so the parent <form> just
// needs `<ClanBannerPicker />` inside it, the same way PasswordField carries
// its own show/hide state without its parent needing to know. The server
// action re-checks these three values are real options before trusting them
// (see clan-actions.ts) — never trust that a hidden input still holds what
// this component put there, since anyone can edit a POST body directly.
export function ClanBannerPicker() {
  const [color, setColor] = useState(DEFAULT_BANNER.color);
  const [shape, setShape] = useState(DEFAULT_BANNER.shape);
  const [icon, setIcon] = useState(DEFAULT_BANNER.icon);

  return (
    <div className="mt-6">
      <input type="hidden" name="bannerColor" value={color} />
      <input type="hidden" name="bannerShape" value={shape} />
      <input type="hidden" name="bannerIcon" value={icon} />

      <div className="flex items-center gap-5">
        <ClanBanner banner={{ color, shape, icon }} className="h-20 w-20 shrink-0" />
        <div>
          <p className="font-semibold">Your clan&apos;s banner</p>
          <p className="text-sm opacity-60">Pick a colour, a shape and an icon.</p>
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Colour</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CLAN_COLORS.map((c) => (
            <button
              key={c.value}
              type="button"
              aria-label={c.label}
              aria-pressed={color === c.value}
              onClick={() => setColor(c.value)}
              className={`h-9 w-9 rounded-full ring-offset-2 transition ring-offset-white dark:ring-offset-[#0b0b12] ${
                color === c.value ? "ring-2 ring-black/70 dark:ring-white/80" : ""
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Shape</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CLAN_SHAPES.map((s) => (
            <button
              key={s.value}
              type="button"
              aria-label={s.label}
              aria-pressed={shape === s.value}
              onClick={() => setShape(s.value)}
              className={`rounded-xl border p-1.5 transition ${
                shape === s.value
                  ? "border-blue-400 bg-blue-50 dark:border-blue-400/60 dark:bg-blue-500/10"
                  : "border-black/10 bg-white/70 hover:bg-white dark:border-white/10 dark:bg-white/5"
              }`}
            >
              <ClanBanner
                banner={{ color, shape: s.value, icon }}
                className="h-9 w-9"
              />
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Icon</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CLAN_ICONS.map((i) => (
            <button
              key={i.value}
              type="button"
              aria-label={i.label}
              aria-pressed={icon === i.value}
              onClick={() => setIcon(i.value)}
              className={`rounded-xl border p-2 transition ${
                icon === i.value
                  ? "border-blue-400 bg-blue-50 dark:border-blue-400/60 dark:bg-blue-500/10"
                  : "border-black/10 bg-white/70 hover:bg-white dark:border-white/10 dark:bg-white/5"
              }`}
              style={{ color: colorHex(color) }}
            >
              <ClanBadgeIcon name={i.value} className="h-5 w-5" />
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
