// Clans: small, self-made groups of students who compete on one shared
// leaderboard. Server-only, like users.ts and progress.ts — it may use the
// Supabase secret key, which must never reach a browser. clan-actions.ts is
// how a form or button reaches it.
//
// Two backends, same choice progress.ts and users.ts already make: a local
// JSON file for a laptop with no Supabase configured, a Supabase table for
// the live site. See users.ts's own long comment for why the file genuinely
// works locally and genuinely breaks once deployed — the same reasoning
// applies here unchanged, so it isn't repeated.

import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { hashPassword, verifyPassword } from "./users";

const DATA_DIR = path.join(process.cwd(), "data");
const CLANS_FILE = path.join(DATA_DIR, "clans.json");

export type Clan = {
  id: string;
  name: string;
  bannerColor: string;
  bannerShape: string;
  bannerIcon: string;
  createdBy: string;
  createdAt: string;
  memberCount: number;
};

type ClanRecord = Omit<Clan, "memberCount">;
type MemberRecord = { clanId: string; userId: string; joinedAt: string };

// The on-disk shape for the local-file backend ONLY. It has one field the
// public `Clan` type deliberately doesn't: the password hash. Kept as its
// own type, never handed back from a function that returns `Clan`, for the
// same reason users.ts's `fromRow` only ever copies out the safe fields —
// see getCurrentUser()'s comment in actions.ts. `withCount` below builds its
// return value field by field rather than spreading a record like this one,
// specifically so an extra property here can never ride along into
// something a page passes to the browser.
type StoredClan = ClanRecord & { passwordHash: string };

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const CLANS_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

type ClanRow = {
  id: string;
  name: string;
  password_hash: string;
  banner_color: string;
  banner_shape: string;
  banner_icon: string;
  created_by: string;
  created_at: string;
};

async function supabase(p: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${p}`, {
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

// ─── Local file storage ─────────────────────────────────────────────────────
// Same "missing file vs. corrupted file" distinction users.ts's readUsers()
// makes, and for the identical reason: a genuinely missing file means
// "nobody's made a clan yet" (return empty), but a present-and-unreadable
// one must be treated as an error, not silently wiped by the next write.
type LocalData = { clans: StoredClan[]; members: MemberRecord[] };

async function readLocal(): Promise<LocalData> {
  let raw: string;
  try {
    raw = await readFile(CLANS_FILE, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { clans: [], members: [] };
    }
    console.error("[clans] could not read data/clans.json:", error);
    throw error;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<LocalData>;
    return { clans: parsed.clans ?? [], members: parsed.members ?? [] };
  } catch (error) {
    console.error(
      "[clans] data/clans.json exists but could not be parsed — refusing to treat it as empty:",
      error,
    );
    throw new Error("CLANS_FILE_CORRUPTED");
  }
}

async function writeLocal(data: LocalData): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(CLANS_FILE, JSON.stringify(data, null, 2), "utf8");
}

// Builds the return value FIELD BY FIELD rather than `{ ...clan, ... }` —
// on purpose. `clan` is sometimes a `StoredClan`, which carries a password
// hash the `Clan` type must never expose. A spread would copy that hash
// along with everything else the moment a caller passed one in; naming each
// field here means an object that happens to carry an extra property simply
// can't leak it, regardless of what future code passes through this
// function.
function withCount(clan: ClanRecord, members: { clanId: string }[]): Clan {
  return {
    id: clan.id,
    name: clan.name,
    bannerColor: clan.bannerColor,
    bannerShape: clan.bannerShape,
    bannerIcon: clan.bannerIcon,
    createdBy: clan.createdBy,
    createdAt: clan.createdAt,
    memberCount: members.filter((m) => m.clanId === clan.id).length,
  };
}

// ─── Reading ────────────────────────────────────────────────────────────────

const MAX_SEARCH_RESULTS = 30;

// Every clan whose name contains the search text, most recent first — empty
// query returns the most recently created clans, so the browse page has
// something to show before anyone's typed anything.
export async function searchClans(query: string): Promise<Clan[]> {
  const q = query.trim();

  if (CLANS_ENABLED) {
    const filter = q
      ? `&name=ilike.*${encodeURIComponent(q)}*`
      : "";
    const res = await supabase(
      `clans?select=id,name,banner_color,banner_shape,banner_icon,created_by,created_at${filter}` +
        `&order=created_at.desc&limit=${MAX_SEARCH_RESULTS}`,
    );
    if (!res.ok) {
      console.error("[clans] search failed:", res.status, (await res.text()).slice(0, 200));
      return [];
    }
    const rows = (await res.json()) as ClanRow[];
    if (rows.length === 0) return [];

    // One extra request for member counts, rather than a count per row — a
    // Postgres `in.()` filter fetches every relevant membership row in one
    // trip, then counting happens in JS. Simpler than composing a grouped
    // count through the REST API, and this table is small enough that it
    // costs nothing to just count in memory.
    const ids = rows.map((r) => r.id);
    const memberRes = await supabase(
      `clan_members?select=clan_id&clan_id=in.(${ids.join(",")})`,
    );
    const memberRows = memberRes.ok
      ? ((await memberRes.json()) as { clan_id: string }[])
      : [];

    return rows.map((r) =>
      withCount(fromRow(r), memberRows.map((m) => ({ clanId: m.clan_id }))),
    );
  }

  const { clans, members } = await readLocal();
  const filtered = q
    ? clans.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()))
    : clans;
  return filtered
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, MAX_SEARCH_RESULTS)
    .map((c) => withCount(c, members));
}

export async function getClanById(id: string): Promise<Clan | null> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clans?id=eq.${encodeURIComponent(id)}&select=id,name,banner_color,banner_shape,banner_icon,created_by,created_at&limit=1`,
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as ClanRow[];
    if (!rows[0]) return null;

    const memberRes = await supabase(
      `clan_members?clan_id=eq.${encodeURIComponent(id)}&select=clan_id`,
    );
    const memberRows = memberRes.ok
      ? ((await memberRes.json()) as { clan_id: string }[])
      : [];
    return withCount(fromRow(rows[0]), memberRows.map((m) => ({ clanId: m.clan_id })));
  }

  const { clans, members } = await readLocal();
  const clan = clans.find((c) => c.id === id);
  return clan ? withCount(clan, members) : null;
}

// The clan a user currently belongs to, or null. A user is in at most one
// clan at a time — see the `unique(user_id)` constraint in CLAN_SETUP.sql —
// so this can only ever find zero or one.
export async function getUserClan(userId: string): Promise<Clan | null> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clan_members?user_id=eq.${encodeURIComponent(userId)}&select=clan_id&limit=1`,
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as { clan_id: string }[];
    if (!rows[0]) return null;
    return getClanById(rows[0].clan_id);
  }

  const { members } = await readLocal();
  const membership = members.find((m) => m.userId === userId);
  return membership ? getClanById(membership.clanId) : null;
}

export async function getClanMemberIds(clanId: string): Promise<string[]> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clan_members?clan_id=eq.${encodeURIComponent(clanId)}&select=user_id`,
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as { user_id: string }[];
    return rows.map((r) => r.user_id);
  }

  const { members } = await readLocal();
  return members.filter((m) => m.clanId === clanId).map((m) => m.userId);
}

function fromRow(row: ClanRow): ClanRecord {
  return {
    id: row.id,
    name: row.name,
    bannerColor: row.banner_color,
    bannerShape: row.banner_shape,
    bannerIcon: row.banner_icon,
    createdBy: row.created_by,
    createdAt: row.created_at,
  };
}

// ─── Writing ────────────────────────────────────────────────────────────────

export async function createClan(input: {
  name: string;
  password: string;
  bannerColor: string;
  bannerShape: string;
  bannerIcon: string;
  creatorId: string;
}): Promise<Clan> {
  const record: ClanRecord = {
    id: randomUUID(),
    name: input.name.trim(),
    bannerColor: input.bannerColor,
    bannerShape: input.bannerShape,
    bannerIcon: input.bannerIcon,
    createdBy: input.creatorId,
    createdAt: new Date().toISOString(),
  };
  const passwordHash = await hashPassword(input.password);

  if (CLANS_ENABLED) {
    const res = await supabase("clans", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        id: record.id,
        name: record.name,
        password_hash: passwordHash,
        banner_color: record.bannerColor,
        banner_shape: record.bannerShape,
        banner_icon: record.bannerIcon,
        created_by: record.createdBy,
        created_at: record.createdAt,
      }),
    });
    if (!res.ok) {
      throw new Error(
        `[clans] could not create clan: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }

    // The creator joins their own clan immediately — a clan with nobody in
    // it, even for a second, is a confusing thing to land on.
    const joinRes = await supabase("clan_members", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ clan_id: record.id, user_id: record.createdBy }),
    });
    if (!joinRes.ok) {
      console.error(
        "[clans] clan created but creator could not auto-join:",
        joinRes.status,
        (await joinRes.text()).slice(0, 200),
      );
    }

    return { ...record, memberCount: 1 };
  }

  const data = await readLocal();
  data.clans.push({ ...record, passwordHash });
  data.members.push({
    clanId: record.id,
    userId: record.createdBy,
    joinedAt: record.createdAt,
  });
  await writeLocal(data);
  return { ...record, memberCount: 1 };
}

export type JoinResult =
  | { ok: true }
  | { ok: false; error: "NOT_FOUND" | "WRONG_PASSWORD" | "ALREADY_IN_A_CLAN" };

export async function joinClan(input: {
  clanId: string;
  userId: string;
  password: string;
}): Promise<JoinResult> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clans?id=eq.${encodeURIComponent(input.clanId)}&select=password_hash&limit=1`,
    );
    if (!res.ok) return { ok: false, error: "NOT_FOUND" };
    const rows = (await res.json()) as { password_hash: string }[];
    if (!rows[0]) return { ok: false, error: "NOT_FOUND" };

    const correct = await verifyPassword(input.password, rows[0].password_hash);
    if (!correct) return { ok: false, error: "WRONG_PASSWORD" };

    const joinRes = await supabase("clan_members", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ clan_id: input.clanId, user_id: input.userId }),
    });
    if (joinRes.ok) return { ok: true };

    // Same reasoning as createUser's EMAIL_TAKEN: the `unique(user_id)`
    // constraint is what actually stops someone joining two clans at once,
    // not a lookup beforehand — a lookup has a race-condition gap a
    // database constraint doesn't.
    const body = await joinRes.text();
    if (joinRes.status === 409 || body.includes("23505")) {
      return { ok: false, error: "ALREADY_IN_A_CLAN" };
    }
    throw new Error(`[clans] could not join clan: HTTP ${joinRes.status} ${body.slice(0, 200)}`);
  }

  const data = await readLocal();
  const clan = data.clans.find((c) => c.id === input.clanId);
  if (!clan) return { ok: false, error: "NOT_FOUND" };

  // Local records store the hash inline rather than in a separate table —
  // there's no REST API boundary to keep it on the far side of here, and it
  // never leaves this server-only file either way (see StoredClan's comment
  // above, and withCount, for how it's kept out of everything this file
  // returns).
  const correct = await verifyPassword(input.password, clan.passwordHash);
  if (!correct) return { ok: false, error: "WRONG_PASSWORD" };

  if (data.members.some((m) => m.userId === input.userId)) {
    return { ok: false, error: "ALREADY_IN_A_CLAN" };
  }

  data.members.push({
    clanId: input.clanId,
    userId: input.userId,
    joinedAt: new Date().toISOString(),
  });
  await writeLocal(data);
  return { ok: true };
}

export async function leaveClan(userId: string): Promise<void> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clan_members?user_id=eq.${encodeURIComponent(userId)}`,
      { method: "DELETE" },
    );
    if (!res.ok) {
      throw new Error(
        `[clans] could not leave clan: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`,
      );
    }
    return;
  }

  const data = await readLocal();
  data.members = data.members.filter((m) => m.userId !== userId);
  await writeLocal(data);
}
