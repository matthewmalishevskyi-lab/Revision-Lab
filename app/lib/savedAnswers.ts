// Remembering what a student typed, so a reload does not wipe their work.
//
// Matthew: "if you reload the website or just exit and enter again, you can't
// see what you wrote, and that's very annoying." Saved ON THIS DEVICE (his
// choice): instant, works logged out, nothing to run in Supabase. An answer
// typed on a phone does not follow you to a laptop — that is the trade.
//
// Pure functions only, no React, so scripts/check-saved-answers.mjs can drive
// them. The components read through browserStore's useStoredRaw, which is
// what keeps the server's HTML and the browser's first paint in agreement.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ KEYED BY THE QUESTION'S TEXT, NOT ITS POSITION.
// This site added 1,155 questions in one go. Keyed by position, every saved
// answer below an inserted question would land on the wrong question — a tick
// beside a question the student never answered. Keyed by text, a reworded
// question simply comes back blank, which is the honest outcome.
//
// ⚠️ EVERYTHING READ BACK IS CHECKED. localStorage is text anyone can edit in
// dev tools, and an old version of this format, a half-written save or a
// browser extension can all leave something unexpected there. A bad entry is
// dropped, never trusted, and never allowed to throw — a broken save must
// cost a student their saved answers at worst, never the page.
// ─────────────────────────────────────────────────────────────────────────────

import { readStorageRaw, writeStorageRaw } from "./browserStore";

export type SavedStatus = "unanswered" | "correct" | "incorrect" | "selfMarked" | "wrong" | "shown";
const STATUSES = new Set<SavedStatus>(["unanswered", "correct", "incorrect", "selfMarked", "wrong", "shown"]);

export type SavedAnswer = {
  input: string;
  status: SavedStatus;
  revealed?: boolean;
  /** Already sent to the progress table — so a reload never counts it twice. */
  recorded?: boolean;
};

type Stored = { v: 1; savedAt: number; answers: Record<string, SavedAnswer> };

const PREFIX = "revision-lab:answers:";
/** A topic's answers are forgotten after this long untouched. */
export const KEEP_FOR_MS = 60 * 24 * 60 * 60 * 1000;
const MAX_INPUT = 2000;
const MAX_QUESTIONS = 400;

export const topicAnswersKey = (subject: string, topic: string) => `${PREFIX}topic:${subject}/${topic}`;
export const dailyAnswersKey = (date: string) => `${PREFIX}today:${date}`;

export function parseSaved(raw: string | null, now = Date.now()): Record<string, SavedAnswer> {
  if (!raw) return {};
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!data || typeof data !== "object") return {};
  const d = data as Partial<Stored>;
  if (d.v !== 1 || typeof d.savedAt !== "number" || !d.answers || typeof d.answers !== "object") return {};
  if (now - d.savedAt > KEEP_FOR_MS) return {};

  const out: Record<string, SavedAnswer> = {};
  for (const [question, a] of Object.entries(d.answers).slice(0, MAX_QUESTIONS)) {
    if (!a || typeof a !== "object") continue;
    const { input, status, revealed, recorded } = a as Record<string, unknown>;
    if (typeof input !== "string" || typeof status !== "string" || !STATUSES.has(status as SavedStatus)) continue;
    out[question] = {
      input: input.slice(0, MAX_INPUT),
      status: status as SavedStatus,
      ...(revealed === true ? { revealed: true } : {}),
      ...(recorded === true ? { recorded: true } : {}),
    };
  }
  return out;
}

export function serialiseSaved(answers: Record<string, SavedAnswer>, now = Date.now()): string {
  const kept: Record<string, SavedAnswer> = {};
  for (const [q, a] of Object.entries(answers)) {
    // An untouched question is not worth a byte: nothing to bring back.
    if (a.status === "unanswered" && !a.input && !a.revealed) continue;
    kept[q] = { ...a, input: a.input.slice(0, MAX_INPUT) };
  }
  return JSON.stringify({ v: 1, savedAt: now, answers: kept } satisfies Stored);
}

/** Merge some answers into what is already saved under `key`, and save. */
export function saveAnswers(key: string, changes: Record<string, SavedAnswer>, now = Date.now()): void {
  const merged = { ...parseSaved(readStorageRaw(key), now), ...changes };
  writeStorageRaw(key, serialiseSaved(merged, now));
}

export function clearAnswers(key: string): void {
  writeStorageRaw(key, "");
}

/**
 * Yesterday's daily set is never shown again, so its answers are dead weight.
 * Every other day's key is removed whenever today's is written.
 */
export function forgetOtherDays(currentKey: string): void {
  try {
    const stale: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`${PREFIX}today:`) && k !== currentKey) stale.push(k);
    }
    for (const k of stale) localStorage.removeItem(k);
  } catch {
    // Storage blocked: nothing was saved, so there is nothing to forget.
  }
}
