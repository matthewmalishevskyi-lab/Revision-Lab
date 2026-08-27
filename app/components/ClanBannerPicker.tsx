"use client";

import { useState } from "react";
import { ClanBanner } from "./ClanBanner";
import { ClanBadgeIcon } from "./ClanBadgeIcon";
import {
  CLAN_COLORS,
  CLAN_ICONS,
  CLAN_SHAPES,
  clampIconOffset,
  clampIconScale,
  colorHex,
  DEFAULT_BANNER,
  ICON_OFFSET_MAX,
  ICON_OFFSET_MIN,
  ICON_SCALE_MAX,
  ICON_SCALE_MIN,
  type ClanBannerConfig,
} from "../lib/clanBanners";

// Three swatch rows, three sliders, and a live preview, all held in this
// component's own state and submitted as six hidden inputs — so the parent
// <form> just needs `<ClanBannerPicker />` inside it, the same way
// PasswordField carries its own show/hide state without its parent needing
// to know. The server action re-checks every one of these values before
// trusting them (see clan-actions.ts) — never trust that a hidden input
// still holds what this component put there, since anyone can edit a POST
// body directly.
//
// `initial` is what makes this the SAME component for both "creating a new
// clan" (no prop — starts from DEFAULT_BANNER) and "editing an existing
// one's banner" (pass the clan's current saved values) — one picker, two
// starting points, rather than a second component that could drift out of
// sync with this one's controls.
export function ClanBannerPicker({ initial }: { initial?: ClanBannerConfig } = {}) {
  const start = initial ?? DEFAULT_BANNER;
  const [color, setColor] = useState(start.color);
  const [shape, setShape] = useState(start.shape);
  const [icon, setIcon] = useState(start.icon);
  const [iconScale, setIconScale] = useState(start.iconScale);
  const [iconOffsetX, setIconOffsetX] = useState(start.iconOffsetX);
  const [iconOffsetY, setIconOffsetY] = useState(start.iconOffsetY);

  return (
    <div className="mt-6">
      <input type="hidden" name="bannerColor" value={color} />
      <input type="hidden" name="bannerShape" value={shape} />
      <input type="hidden" name="bannerIcon" value={icon} />
      <input type="hidden" name="iconScale" value={iconScale} />
      <input type="hidden" name="iconOffsetX" value={iconOffsetX} />
      <input type="hidden" name="iconOffsetY" value={iconOffsetY} />

      <div className="flex items-center gap-5">
        <ClanBanner
          banner={{ color, shape, icon, iconScale, iconOffsetX, iconOffsetY }}
          className="h-20 w-20 shrink-0"
        />
        <div>
          <p className="font-semibold">Your clan&apos;s banner</p>
          <p className="text-sm opacity-60">
            Pick a colour, a shape and an icon, then size and position it.
          </p>
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
                banner={{ color, shape: s.value, icon, iconScale, iconOffsetX, iconOffsetY }}
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

      {/* Size and position — three independent sliders on top of the three
          choices above. Each setter runs its value through the matching
          clamp function even though the <input type="range"> itself already
          enforces min/max, for the same reason clan-actions.ts clamps again
          on the server: defence that doesn't rely on nobody ever changing
          how the value got here. */}
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Size &amp; position</legend>
        <div className="mt-2 space-y-3">
          <label className="block text-sm">
            <span className="opacity-70">Size</span>
            <input
              type="range"
              min={ICON_SCALE_MIN}
              max={ICON_SCALE_MAX}
              step={0.05}
              value={iconScale}
              onChange={(e) => setIconScale(clampIconScale(Number(e.target.value)))}
              className="mt-1 block w-full"
            />
          </label>
          <label className="block text-sm">
            <span className="opacity-70">Left / right</span>
            <input
              type="range"
              min={ICON_OFFSET_MIN}
              max={ICON_OFFSET_MAX}
              step={1}
              value={iconOffsetX}
              onChange={(e) => setIconOffsetX(clampIconOffset(Number(e.target.value)))}
              className="mt-1 block w-full"
            />
          </label>
          <label className="block text-sm">
            <span className="opacity-70">Up / down</span>
            <input
              type="range"
              min={ICON_OFFSET_MIN}
              max={ICON_OFFSET_MAX}
              step={1}
              value={iconOffsetY}
              onChange={(e) => setIconOffsetY(clampIconOffset(Number(e.target.value)))}
              className="mt-1 block w-full"
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setIconScale(1);
              setIconOffsetX(0);
              setIconOffsetY(0);
            }}
            className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Reset size &amp; position
          </button>
        </div>
      </fieldset>
    </div>
  );
}
