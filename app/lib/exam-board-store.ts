// Where each student's exam board per subject is kept. What a choice MEANS is
// examBoards.ts; this file only reads and writes it.
//
// ⚠️ SERVER ONLY, and only ever called with a user id taken from the session
// cookie (pages via getViewer, the action via getCurrentUser) — never with one
// from a form or a URL.
//
// Two backends behind the same functions, chosen the same way users.ts
// chooses: Supabase on the live site, a JSON file in /data on a laptop with no
// Supabase configured — so the chooser works in local development with a local
// account, rather than being invisible there.
//
// ⚠️ FAILS OPEN, EVERYWHERE. Any failure to read — the table not created yet,
// Supabase down, a corrupt file — returns null, which every caller treats as
// "no boards known": nothing is hidden and the chooser does not appear. The
// worst a broken store can do is show a student a topic they don't need,
// which is the cheap mistake. It can never hide one they do.

import { cache } from "react";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { writeJsonAtomic } from "./atomicWrite";
import { asksForBoard, hiddenTopicKeys, isBoardChoice, type BoardChoice } from "./examBoards";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");
const USE_SUPABASE = Boolean(SUPABASE_URL && SUPABASE_KEY);

const DATA_DIR = path.join(process.cwd(), "data");
const BOARDS_FILE = path.join(DATA_DIR, "exam-boards.json");

async function supabase(pathAndQuery: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${pathAndQuery}`, {
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

type FileShape = Record<string, Record<string, string>>;

async function readFileStore(): Promise<FileShape> {
  try {
    const parsed: unknown = JSON.parse(await readFile(BOARDS_FILE, "utf8"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as FileShape) : {};
  } catch (error) {
    // A missing file is simply nobody having chosen yet. Anything else is
    // thrown, so readBoards below turns it into "unknown" rather than this
    // quietly returning {} — which the next write would then save over every
    // other student's choices (the users.json lesson from 2026-08-25).
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw error;
  }
}

/** Only real subjects that ask, and only real choices, ever come back out. */
function clean(pairs: Iterable<[unknown, unknown]>): Map<string, BoardChoice> {
  const out = new Map<string, BoardChoice>();
  for (const [subject, board] of pairs) {
    if (typeof subject === "string" && asksForBoard(subject) && isBoardChoice(board)) out.set(subject, board);
  }
  return out;
}

/**
 * Every board this student has chosen, by subject. null when it cannot be
 * known — see FAILS OPEN above. Cached for one request, because the subject
 * page, the header and a test page can all ask.
 */
export const getBoardChoices = cache(async function getBoardChoices(userId: string): Promise<Map<string, BoardChoice> | null> {
  try {
    if (!USE_SUPABASE) {
      const all = await readFileStore();
      return clean(Object.entries(all[userId] ?? {}));
    }
    const res = await supabase(`exam_boards?user_id=eq.${encodeURIComponent(userId)}&select=subject,board`);
    if (!res.ok) {
      // A 404 PGRST205 here means EXAM_BOARDS_SETUP.sql has not been run yet.
      console.error("[exam-boards] read failed:", res.status, await res.text());
      return null;
    }
    const rows = (await res.json()) as { subject: unknown; board: unknown }[];
    return clean(rows.map((r) => [r.subject, r.board]));
  } catch (error) {
    console.error("[exam-boards] read failed:", error);
    return null;
  }
});

/**
 * Save one subject's choice, replacing any earlier one: one upsert on the
 * (user_id, subject) primary key, never delete-then-insert.
 */
export async function setBoardChoice(userId: string, subject: string, board: BoardChoice): Promise<boolean> {
  if (!asksForBoard(subject) || !isBoardChoice(board)) return false;
  try {
    if (!USE_SUPABASE) {
      const all = await readFileStore();
      all[userId] = { ...(all[userId] ?? {}), [subject]: board };
      await mkdir(DATA_DIR, { recursive: true });
      await writeJsonAtomic(BOARDS_FILE, all);
      return true;
    }
    const res = await supabase("exam_boards?on_conflict=user_id,subject", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ user_id: userId, subject, board, updated_at: new Date().toISOString() }),
    });
    if (!res.ok) {
      console.error("[exam-boards] write failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[exam-boards] write failed:", error);
    return false;
  }
}

/** The "subject/topic" keys this student's boards rule out; empty if unknown. */
export async function getHiddenTopics(userId: string): Promise<Set<string>> {
  const choices = await getBoardChoices(userId);
  return choices ? hiddenTopicKeys(choices) : new Set();
}
