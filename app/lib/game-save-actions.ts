"use server";

// Save and delete for the alien game. Whose saves these are comes from the
// session cookie, never from the request — the rule every action here follows.
// Loading needs no action: the play page reads the slot on the server.
//
// Nothing arriving here is trusted. The state is re-checked field by field
// (parseGameSave), capped in size, and the setup is checked against subjects,
// topics and mascots that really exist, because this is reachable by anything
// that can make an HTTP request, not only by the game's Save button.

import { getSessionUserId } from "./session";
import { hasDevAccess } from "./dev-access";
import { deleteSave, GAME_SAVES_ENABLED, writeSave } from "./game-saves";
import { cleanSaveName, parseGameSave, parseSaveSetup, SAVE_MAX_BYTES, SAVE_SLOTS, type SaveSummary } from "./gameSave";
import { playableTopics } from "./game-questions";
import { MASCOTS } from "../components/Mascots";
import { LEVELS } from "../early-access/game/levels";

type Result<T = object> = ({ ok: true } & T) | { ok: false; error: string };

const NOT_SET_UP = "Saves aren't switched on yet — GAME_SAVES_SETUP.sql still needs running in Supabase.";

async function who(): Promise<string | { error: string }> {
  const userId = await getSessionUserId();
  if (!userId) return { error: "You need to be logged in to save." };
  // the game is behind the developer code, so its saves are too
  if (!(await hasDevAccess(userId))) return { error: "Saves are part of the early-access game." };
  return userId;
}

export async function saveGameAction(slot: number, name: unknown, setup: unknown, state: unknown): Promise<Result<{ summary: SaveSummary }>> {
  const userId = await who();
  if (typeof userId !== "string") return { ok: false, error: userId.error };
  if (!GAME_SAVES_ENABLED) return { ok: false, error: NOT_SET_UP };
  if (!Number.isInteger(slot) || slot < 1 || slot > SAVE_SLOTS) return { ok: false, error: "That isn't a save slot." };

  // ⚠️ Size BEFORE parsing the details: a megabyte of nested junk should cost
  // one JSON.stringify, not a walk of the whole thing.
  let bytes = Infinity;
  try { bytes = JSON.stringify(state)?.length ?? Infinity; } catch { /* circular or unserialisable */ }
  if (bytes > SAVE_MAX_BYTES) return { ok: false, error: "That save is too big to keep." };
  const save = parseGameSave(state);
  if (!save || save.level >= LEVELS.length) return { ok: false, error: "That save didn't look right, so it wasn't kept." };

  const s = parseSaveSetup(setup);
  const allowed = s ? new Set(playableTopics(s.subject).flatMap((y) => y.topics.map((t) => t.slug))) : new Set<string>();
  if (!s || !allowed.size || !s.topics.every((t) => allowed.has(t)) || !(s.mascot in MASCOTS)) {
    return { ok: false, error: "That save's subject or topics don't exist." };
  }

  const fallback = `Deck ${save.level + 1} · ${LEVELS[save.level].TITLE.replace(/^Level \d+ — /, "")}`;
  const clean = cleanSaveName(name, fallback);
  if (!(await writeSave(userId, slot, clean, s, save))) {
    return { ok: false, error: "Couldn't reach the save store just now. Your game is still here — try again in a moment." };
  }
  return { ok: true, summary: { slot, name: clean, level: save.level, health: Math.round(save.player.health), setup: s, updatedAt: new Date().toISOString() } };
}

export async function deleteGameSaveAction(slot: number): Promise<Result> {
  const userId = await who();
  if (typeof userId !== "string") return { ok: false, error: userId.error };
  if (!GAME_SAVES_ENABLED) return { ok: false, error: NOT_SET_UP };
  if (!Number.isInteger(slot) || slot < 1 || slot > SAVE_SLOTS) return { ok: false, error: "That isn't a save slot." };
  return (await deleteSave(userId, slot)) ? { ok: true } : { ok: false, error: "Couldn't delete that just now. Try again in a moment." };
}
