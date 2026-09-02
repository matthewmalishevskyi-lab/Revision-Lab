// Reset tokens — the "we've emailed you a link" half of forgetting a password.
//
// Needs SESSION_AND_RESET_SETUP.sql run once in Supabase → SQL Editor, same as
// every other feature here that added a table.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE FOUR PROPERTIES A RESET LINK HAS TO HAVE
//
// A reset link is, for as long as it lives, exactly as powerful as the password
// it replaces. Anybody holding one owns the account. So it has to be:
//
//   1. UNGUESSABLE. 32 bytes from the operating system's own random source —
//      not Math.random(), which is predictable from previous outputs and has
//      no business anywhere near a credential. That is 256 bits; there is no
//      searching that space.
//
//   2. SHORT-LIVED. Thirty minutes. A reset link is a key to somebody's
//      account sitting in an inbox, and an inbox is the thing people leave
//      open on a school computer. Long enough to walk to another room and
//      check your email; not long enough to still work tomorrow.
//
//   3. SINGLE-USE. Spent the moment it is used. Without this, a link that gets
//      forwarded, cached by a mail scanner, or left in a browser history stays
//      a working key for the rest of its life. Every OTHER outstanding token
//      for that account is killed at the same time, because a password change
//      should invalidate every request that came before it.
//
//   4. STORED AS A HASH, NEVER IN THE CLEAR. The database keeps only
//      sha256(token). One leaked backup, one over-broad SELECT, one screenshot
//      of that table, is then worth nothing — the only copy of the real token
//      is in the email. The server recognises a token by hashing what it is
//      handed and looking for the match, exactly the way a password check
//      works.
//
// On the hash choice: sha256 here, scrypt for passwords, and the difference is
// deliberate. Slow hashing exists to make GUESSING expensive, which is needed
// for passwords because people pick short memorable ones. There is nothing to
// guess about 32 random bytes, so a slow hash would only buy a slow page.
// ─────────────────────────────────────────────────────────────────────────────

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { writeJsonAtomic } from "./atomicWrite";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const USING_DATABASE = Boolean(SUPABASE_URL && SUPABASE_KEY);
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

const DATA_DIR = path.join(process.cwd(), "data");
const RESETS_FILE = path.join(DATA_DIR, "password-resets.json");

/** Thirty minutes. See property 2 above. */
export const RESET_TOKEN_MINUTES = 30;

type ResetRow = {
  tokenHash: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
  usedAt: string | null;
};

async function supabase(pathname: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${pathname}`, {
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

// ─── The local-file backend ─────────────────────────────────────────────────
//
// Same two-backends-one-interface shape as users.ts, chosen automatically by
// whether Supabase is configured, and here for the same reason: so the whole
// flow can be run and watched on a laptop with nothing set up. The file is
// written atomically (see atomicWrite.ts) because the previous naive version
// of exactly this pattern produced torn reads under concurrency during a real
// two-player quiz — a bug worth not repeating in a file that guards accounts.
async function readLocal(): Promise<ResetRow[]> {
  try {
    return JSON.parse(await readFile(RESETS_FILE, "utf8")) as ResetRow[];
  } catch (error) {
    // Only a genuinely MISSING file means "nothing here yet". Anything else —
    // a corrupted file above all — must not be silently treated as empty,
    // because the next write would then overwrite it with a single row. That
    // is the exact bug the 2026-08-25 hunt found in readUsers().
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeLocal(rows: ResetRow[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(RESETS_FILE, rows);
}

/** sha256, hex. The only form of a token that is ever written down. */
function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/**
 * Creates a reset token for this account and returns the RAW token — the only
 * time it exists outside the email. Everything stored is the hash.
 *
 * Any outstanding tokens for the account are marked used first: asking for a
 * second link should retire the first, so that an old email lying around
 * cannot be used after a newer request.
 */
export async function createResetToken(userId: string): Promise<string> {
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashToken(token);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + RESET_TOKEN_MINUTES * 60 * 1000);

  await invalidateTokensFor(userId);

  if (USING_DATABASE) {
    const res = await supabase("password_resets", {
      method: "POST",
      body: JSON.stringify({
        token_hash: tokenHash,
        user_id: userId,
        created_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
      }),
    });
    if (!res.ok) {
      throw new Error(`[password-reset] could not store token: HTTP ${res.status} ${await res.text()}`);
    }
    return token;
  }

  const rows = await readLocal();
  rows.push({
    tokenHash,
    userId,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
    usedAt: null,
  });
  await writeLocal(rows);
  return token;
}

/**
 * Marks every outstanding token for an account as used.
 *
 * Called before issuing a new one, and again after a password actually
 * changes — that second call is the one that matters, because a password
 * change has to retire every link that was in flight when it happened.
 */
export async function invalidateTokensFor(userId: string): Promise<void> {
  const usedAt = new Date().toISOString();

  if (USING_DATABASE) {
    const res = await supabase(
      `password_resets?user_id=eq.${encodeURIComponent(userId)}&used_at=is.null`,
      { method: "PATCH", body: JSON.stringify({ used_at: usedAt }) },
    );
    if (!res.ok) {
      // Logged rather than thrown: failing to tidy up old tokens must not stop
      // somebody getting the new link they just asked for. The old ones still
      // expire on their own within the half hour.
      console.error(
        `[password-reset] could not retire old tokens: HTTP ${res.status}`,
        await res.text(),
      );
    }
    return;
  }

  const rows = await readLocal();
  let changed = false;
  for (const row of rows) {
    if (row.userId === userId && !row.usedAt) {
      row.usedAt = usedAt;
      changed = true;
    }
  }
  if (changed) await writeLocal(rows);
}

export type ConsumeResult =
  | { ok: true; userId: string }
  | { ok: false; reason: "INVALID" | "EXPIRED" | "USED" };

/**
 * Checks a token and, if it is good, spends it. Returns whose account it was.
 *
 * ⚠️ SPENDS IT BEFORE THE CALLER CHANGES THE PASSWORD, not after. If it were
 * the other way round, two requests arriving together could both be told the
 * token was fine. Marking it used first means the second one loses.
 */
export async function consumeResetToken(token: string): Promise<ConsumeResult> {
  const tokenHash = hashToken(token);

  const row = await findByHash(tokenHash);
  if (!row) return { ok: false, reason: "INVALID" };

  // Compared timing-safely for the same reason the session signature is: the
  // lookup above already found this row by an exact match, so this is belt and
  // braces rather than the main defence — but a credential comparison in this
  // codebase is always done this way, and consistency is what stops the one
  // that matters being written carelessly.
  const a = Buffer.from(row.tokenHash);
  const b = Buffer.from(tokenHash);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: "INVALID" };
  }

  if (row.usedAt) return { ok: false, reason: "USED" };
  if (new Date(row.expiresAt).getTime() < Date.now()) {
    return { ok: false, reason: "EXPIRED" };
  }

  await markUsed(tokenHash);
  return { ok: true, userId: row.userId };
}

async function findByHash(tokenHash: string): Promise<ResetRow | null> {
  if (USING_DATABASE) {
    const res = await supabase(
      `password_resets?token_hash=eq.${encodeURIComponent(tokenHash)}&select=*&limit=1`,
    );
    // Throwing rather than returning null on a failed REQUEST, so that a
    // database problem cannot masquerade as "that link isn't valid" — the
    // silent-failure shape that made the clan bug so hard to find.
    if (!res.ok) {
      throw new Error(`[password-reset] lookup failed: HTTP ${res.status} ${await res.text()}`);
    }
    const rows = (await res.json()) as {
      token_hash: string;
      user_id: string;
      created_at: string;
      expires_at: string;
      used_at: string | null;
    }[];
    const found = rows[0];
    if (!found) return null;
    return {
      tokenHash: found.token_hash,
      userId: found.user_id,
      createdAt: found.created_at,
      expiresAt: found.expires_at,
      usedAt: found.used_at,
    };
  }

  const rows = await readLocal();
  return rows.find((r) => r.tokenHash === tokenHash) ?? null;
}

async function markUsed(tokenHash: string): Promise<void> {
  const usedAt = new Date().toISOString();

  if (USING_DATABASE) {
    const res = await supabase(
      `password_resets?token_hash=eq.${encodeURIComponent(tokenHash)}`,
      { method: "PATCH", body: JSON.stringify({ used_at: usedAt }) },
    );
    // This one DOES throw. A token that cannot be marked used is a token that
    // can be used again, which is the single property this whole file exists
    // to guarantee — better to refuse the reset than to quietly hand out a
    // reusable key to somebody's account.
    if (!res.ok) {
      throw new Error(`[password-reset] could not spend token: HTTP ${res.status} ${await res.text()}`);
    }
    return;
  }

  const rows = await readLocal();
  const row = rows.find((r) => r.tokenHash === tokenHash);
  if (row) row.usedAt = usedAt;
  await writeLocal(rows);
}
