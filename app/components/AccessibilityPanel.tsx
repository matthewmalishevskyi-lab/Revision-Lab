"use client";

import { useMemo } from "react";
import { useStoredRaw, writeStorageRaw } from "../lib/browserStore";

// Three independent toggles — bigger text, a plainer font, and no moving
// animation — each stored as its own PREFERENCE in localStorage rather than
// anywhere in the database. See the big comment in globals.css above the
// `.a11y-*` rules for what each class actually changes, and layout.tsx's
// THEME_BOOTSTRAP_SCRIPT comment for why a class like this has to be applied
// by a raw <script> in <head>, not by this component alone — the same "no
// flash on reload" reasoning applies here, and this file mirrors that
// bootstrap script further down.
//
// The key holds all three together as one object rather than three separate
// localStorage keys, purely because it's one read and one write instead of
// three of each — there's no meaning to keeping them apart.

export const A11Y_KEY = "revision-lab:accessibility";

export type A11ySettings = {
  largeText: boolean;
  dyslexiaFont: boolean;
  reduceMotion: boolean;
};

const DEFAULT_SETTINGS: A11ySettings = {
  largeText: false,
  dyslexiaFont: false,
  reduceMotion: false,
};

// Parses whatever's stored, falling back to "everything off" for a
// first-time visitor or if the stored value doesn't parse — same
// defensive shape as PixelOutfits.tsx reading the equipped outfit: a
// corrupted or unexpected value should never crash the page, just behave
// like nothing was chosen.
function parseSettings(raw: string | null): A11ySettings {
  if (!raw) return DEFAULT_SETTINGS;
  try {
    const parsed = JSON.parse(raw);
    return {
      largeText: Boolean(parsed.largeText),
      dyslexiaFont: Boolean(parsed.dyslexiaFont),
      reduceMotion: Boolean(parsed.reduceMotion),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

// The one place that turns settings into classes on <html> — used both when
// this panel changes something and, via the bootstrap script's own copy of
// this logic, on every page load before React even runs.
function applyClasses(settings: A11ySettings) {
  const root = document.documentElement;
  root.classList.toggle("a11y-large-text", settings.largeText);
  root.classList.toggle("a11y-dyslexia", settings.dyslexiaFont);
  root.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
}

export function AccessibilityPanel() {
  // Reactive to localStorage via lib/browserStore.ts. `raw` is a stable
  // string (or null), so memoizing the PARSED object on it means `settings`
  // only gets a new object reference when the underlying JSON actually
  // changes, not on every render — same reasoning as the planner's notes
  // array. Renders the "everything off" default on the server and the
  // client's first paint (nothing here can disagree with the bootstrap
  // script, which has already applied the real classes to <html> before
  // React even runs), then corrects the toggle switches themselves the
  // moment React can see the real stored value — no effect involved.
  const raw = useStoredRaw(A11Y_KEY, null);
  const settings = useMemo(() => parseSettings(raw), [raw]);

  function update(changes: Partial<A11ySettings>) {
    const next = { ...settings, ...changes };
    applyClasses(next);
    writeStorageRaw(A11Y_KEY, JSON.stringify(next));
  }

  return (
    <div className="space-y-4">
      <Toggle
        label="Larger text"
        description="Scales up the text and spacing across the whole site."
        checked={settings.largeText}
        onChange={(checked) => update({ largeText: checked })}
      />
      <Toggle
        label="Dyslexia-friendly font"
        description="Switches to a plainer, more open font with extra letter and line spacing."
        checked={settings.dyslexiaFont}
        onChange={(checked) => update({ dyslexiaFont: checked })}
      />
      <Toggle
        label="Reduce motion"
        description="Turns off the walking mascots and falling confetti. Your device's own reduced-motion setting is already respected without this — use it if that setting isn't reaching this site for some reason."
        checked={settings.reduceMotion}
        onChange={(checked) => update({ reduceMotion: checked })}
      />
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
      <div className="min-w-0">
        <p className="font-semibold">{label}</p>
        <p className="mt-1 text-sm opacity-60">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-8 w-14 shrink-0 rounded-full transition ${
          checked ? "bg-blue-600" : "bg-black/15 dark:bg-white/15"
        }`}
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition ${
            checked ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
