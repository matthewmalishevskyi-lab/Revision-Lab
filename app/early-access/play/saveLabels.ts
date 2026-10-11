// How a save is described, in one place for the server's "carry on" list and
// the in-game menu. ⚠️ A plain module, not part of SavesPanel: that file is a
// Client Component, and a server page calling a function exported from a
// "use client" file gets a client reference, not the function.

import { LEVELS } from "../game/levels";

export function deckName(level: number) {
  const l = LEVELS[level];
  return l ? `Deck ${level + 1} · ${l.TITLE.replace(/^Level \d+ — /, "")}` : `Deck ${level + 1}`;
}

/** London time, written out, so the server's list and the menu agree. */
export function savedAt(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleString("en-GB", { timeZone: "Europe/London", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
