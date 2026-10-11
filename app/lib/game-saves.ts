// Where the alien game's saves live: five slots per account, in Supabase.
// The shape of a save, and every check on it, is in gameSave.ts.
//
// ⚠️ SERVER ONLY. It holds the service role key's power to read every row;
// it is only ever called with a user id taken from the session cookie (see
// game-save-actions.ts and the play page), never with one from a request.
//
// A table of its own, like question_reviews, so that until GAME_SAVES_SETUP.sql
// is run the only thing that fails is saving — the game, progress and every
// other page carry on exactly as before.

import { parseGameSave, parseSaveSetup, SAVE_SLOTS, type GameSave, type SaveSetup, type SaveSummary } from "./gameSave";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const GAME_SAVES_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

async function supabase(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY as string,
      ...(KEY_IS_LEGACY_JWT ? { Authorization: `Bearer ${SUPABASE_KEY}` } : {}),
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

const validSlot = (slot: number) => Number.isInteger(slot) && slot >= 1 && slot <= SAVE_SLOTS;

type Row = { slot: number; name: string; level: number; health: number; setup: unknown; state?: unknown; updated_at: string };

function summary(r: Row): SaveSummary | null {
  const setup = parseSaveSetup(r.setup);
  if (!setup || !validSlot(r.slot)) return null;
  return { slot: r.slot, name: String(r.name ?? ""), level: Number(r.level) || 0, health: Number(r.health) || 0, setup, updatedAt: r.updated_at };
}

/** The menu's list: every filled slot, without the (much bigger) game state. */
export async function listSaves(userId: string): Promise<SaveSummary[]> {
  if (!GAME_SAVES_ENABLED) return [];
  try {
    const res = await supabase(`game_saves?user_id=eq.${encodeURIComponent(userId)}&select=slot,name,level,health,setup,updated_at&order=slot.asc`);
    if (!res.ok) { console.error("[game-saves] list failed:", res.status, await res.text()); return []; }
    return ((await res.json()) as Row[]).map(summary).filter((s): s is SaveSummary => s !== null);
  } catch (error) {
    console.error("[game-saves] list failed:", error);
    return [];
  }
}

/** One slot, state and all — re-checked on the way OUT as well as in, so a
 *  row written by an older version of the game, or edited by hand in the
 *  dashboard, can never reach the game unchecked. */
export async function readSave(userId: string, slot: number): Promise<{ summary: SaveSummary; state: GameSave } | null> {
  if (!GAME_SAVES_ENABLED || !validSlot(slot)) return null;
  try {
    const res = await supabase(`game_saves?user_id=eq.${encodeURIComponent(userId)}&slot=eq.${slot}&select=slot,name,level,health,setup,state,updated_at&limit=1`);
    if (!res.ok) { console.error("[game-saves] read failed:", res.status, await res.text()); return null; }
    const row = ((await res.json()) as Row[])[0];
    if (!row) return null;
    const s = summary(row), state = parseGameSave(row.state);
    return s && state ? { summary: s, state } : null;
  } catch (error) {
    console.error("[game-saves] read failed:", error);
    return null;
  }
}

/**
 * Write a slot, replacing whatever was in it. One request, an upsert on the
 * (user_id, slot) primary key — not "delete, then insert", which leaves a
 * moment where the slot is empty, and a failure in that moment loses the old
 * save as well as the new one.
 */
export async function writeSave(userId: string, slot: number, name: string, setup: SaveSetup, state: GameSave): Promise<boolean> {
  if (!GAME_SAVES_ENABLED || !validSlot(slot)) return false;
  try {
    const res = await supabase("game_saves?on_conflict=user_id,slot", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({
        user_id: userId, slot, name, setup, state,
        level: state.level, health: Math.round(state.player.health),
        updated_at: new Date().toISOString(),
      }),
    });
    if (!res.ok) { console.error("[game-saves] write failed:", res.status, await res.text()); return false; }
    return true;
  } catch (error) {
    console.error("[game-saves] write failed:", error);
    return false;
  }
}

export async function deleteSave(userId: string, slot: number): Promise<boolean> {
  if (!GAME_SAVES_ENABLED || !validSlot(slot)) return false;
  try {
    const res = await supabase(`game_saves?user_id=eq.${encodeURIComponent(userId)}&slot=eq.${slot}`, { method: "DELETE" });
    if (!res.ok) { console.error("[game-saves] delete failed:", res.status, await res.text()); return false; }
    return true;
  } catch (error) {
    console.error("[game-saves] delete failed:", error);
    return false;
  }
}
