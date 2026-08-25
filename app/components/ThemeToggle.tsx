"use client";

import { useSyncExternalStore } from "react";
import { chipClasses } from "./chipStyles";

// The button that switches the whole site between light and dark mode.
//
// HOW THE SWITCH ACTUALLY WORKS, IN THREE PIECES
//
//   1. globals.css redefines Tailwind's `dark:` variant to fire whenever the
//      `dark` CLASS is present on <html>, instead of following the OS. Every
//      `dark:` utility already written across the site now obeys that class.
//   2. layout.tsx runs a tiny blocking script in <head>, before React ever
//      loads, that adds the class back on page load if the last choice made
//      here was "dark". That's what stops a flash of light mode on refresh.
//   3. THIS component is the only thing that ever adds or removes the class
//      after that — a click here is the entire feature.
//
// Light mode is the default: nothing in this file, or in the boot script,
// turns dark mode on by itself. It only happens because a visitor asked for
// it, and it's only remembered because they did.

// This component is the ONLY thing that ever changes the class after the
// boot script's first pass, so nothing outside it can announce a change —
// this tiny listener list exists purely so `toggleTheme` can tell its own
// `useSyncExternalStore` call "go re-read the DOM", the same job the
// browser's own "storage" event does for lib/browserStore.ts.
type Listener = () => void;
let listeners: Listener[] = [];

function subscribeToTheme(callback: Listener): () => void {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((listener) => listener !== callback);
  };
}

function notifyThemeChanged(): void {
  for (const listener of listeners) listener();
}

function getThemeSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

// The server, and the client's very first paint before hydration, can't
// read the DOM class (there's no `document` on the server, and reading it
// on the client before React has settled would disagree with what the
// server sent) — `false` here is the same safe default this component used
// to hand-render before a `useEffect` corrected it. `useSyncExternalStore`
// is what now handles that correction, with no effect and no extra
// `setState` call.
function getServerThemeSnapshot(): boolean {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      // The only place a choice is written down. If storage is unavailable
      // (private browsing, a locked-down browser), the toggle still works for
      // the rest of this visit — it just won't be remembered next time.
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Silently fine — see above.
    }
    notifyThemeChanged();
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={chipClasses}
      // `aria-pressed` is the correct ARIA role for a two-state toggle button
      // — it tells a screen reader this isn't a normal button that DOES
      // something, it's a switch that currently IS in one of two states.
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

// Drawn in the same weight as every other header icon — 24 viewBox, 1.7
// stroke, rounded caps — so this button doesn't look like it wandered in from
// a different site.
function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.2 5.8l-1.7 1.7M7.5 16.5l-1.7 1.7M18.2 18.2l-1.7-1.7M7.5 7.5L5.8 5.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.2A8.5 8.5 0 0110 3.5a1 1 0 00-1.2-1.2A9.5 9.5 0 1021.7 15.4a1 1 0 00-1.2-1.2z" />
    </svg>
  );
}
