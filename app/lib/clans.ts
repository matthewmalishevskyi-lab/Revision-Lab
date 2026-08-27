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
  iconScale: number;
  iconOffsetX: number;
  iconOffsetY: number;
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
  banner_icon_scale: number;
  banner_icon_offset_x: number;
  banner_icon_offset_y: number;
  created_by: string;
  created_at: string;
};

const CLAN_SELECT_COLUMNS =
  "id,name,banner_color,banner_shape,banner_icon,banner_icon_scale,banner_icon_offset_x,banner_icon_offset_y,created_by,created_at";

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
    iconScale: clan.iconScale,
    iconOffsetX: clan.iconOffsetX,
    iconOffsetY: clan.iconOffsetY,
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
      `clans?select=${CLAN_SELECT_COLUMNS}${filter}` +
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
      `clans?id=eq.${encodeURIComponent(id)}&select=${CLAN_SELECT_COLUMNS}&limit=1`,
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

// Ordered EARLIEST JOINER FIRST — not just "whatever order storage happens
// to return them in". Both leaveClan's automatic leadership handover below
// and the clan page's own "next in line" label depend on this order
// actually meaning something.
export async function getClanMemberIds(clanId: string): Promise<string[]> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clan_members?clan_id=eq.${encodeURIComponent(clanId)}&select=user_id&order=joined_at.asc`,
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as { user_id: string }[];
    return rows.map((r) => r.user_id);
  }

  const { members } = await readLocal();
  return members
    .filter((m) => m.clanId === clanId)
    .sort((a, b) => a.joinedAt.localeCompare(b.joinedAt))
    .map((m) => m.userId);
}

function fromRow(row: ClanRow): ClanRecord {
  return {
    id: row.id,
    name: row.name,
    bannerColor: row.banner_color,
    bannerShape: row.banner_shape,
    bannerIcon: row.banner_icon,
    // ?? 1 / ?? 0 rather than trusting the column is always present: a row
    // fetched right after CLAN_SETUP.sql's ALTER TABLE ran, before Postgres
    // has backfilled every existing row, could momentarily read as
    // undefined here — same defensive instinct as everywhere else in this
    // file that treats "not there yet" as the documented default rather
    // than as a crash.
    iconScale: row.banner_icon_scale ?? 1,
    iconOffsetX: row.banner_icon_offset_x ?? 0,
    iconOffsetY: row.banner_icon_offset_y ?? 0,
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
  iconScale: number;
  iconOffsetX: number;
  iconOffsetY: number;
  creatorId: string;
}): Promise<Clan> {
  const record: ClanRecord = {
    id: randomUUID(),
    name: input.name.trim(),
    bannerColor: input.bannerColor,
    bannerShape: input.bannerShape,
    bannerIcon: input.bannerIcon,
    iconScale: input.iconScale,
    iconOffsetX: input.iconOffsetX,
    iconOffsetY: input.iconOffsetY,
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
        banner_icon_scale: record.iconScale,
        banner_icon_offset_x: record.iconOffsetX,
        banner_icon_offset_y: record.iconOffsetY,
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

// Changing an existing clan's banner — added alongside resizing/repositioning
// so a clan made before that existed isn't stuck looking the way it always
// did. Restricted to the clan's CREATOR, the same "only one person can touch
// this" boundary account-actions.ts enforces for changing a password or
// deleting an account — a clan's banner is closer to a shared setting than a
// personal preference, so letting every member edit it would mean the last
// person to touch it wins with no warning to anyone else.
export type UpdateBannerResult =
  | { ok: true }
  | { ok: false; error: "NOT_FOUND" | "NOT_CREATOR" };

export async function updateClanBanner(input: {
  clanId: string;
  userId: string;
  bannerColor: string;
  bannerShape: string;
  bannerIcon: string;
  iconScale: number;
  iconOffsetX: number;
  iconOffsetY: number;
}): Promise<UpdateBannerResult> {
  if (CLANS_ENABLED) {
    const res = await supabase(
      `clans?id=eq.${encodeURIComponent(input.clanId)}&select=created_by&limit=1`,
    );
    if (!res.ok) return { ok: false, error: "NOT_FOUND" };
    const rows = (await res.json()) as { created_by: string }[];
    if (!rows[0]) return { ok: false, error: "NOT_FOUND" };
    if (rows[0].created_by !== input.userId) return { ok: false, error: "NOT_CREATOR" };

    const updateRes = await supabase(
      `clans?id=eq.${encodeURIComponent(input.clanId)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          banner_color: input.bannerColor,
          banner_shape: input.bannerShape,
          banner_icon: input.bannerIcon,
          banner_icon_scale: input.iconScale,
          banner_icon_offset_x: input.iconOffsetX,
          banner_icon_offset_y: input.iconOffsetY,
        }),
      },
    );
    if (!updateRes.ok) {
      throw new Error(
        `[clans] could not update banner: HTTP ${updateRes.status} ${(await updateRes.text()).slice(0, 200)}`,
      );
    }
    return { ok: true };
  }

  const data = await readLocal();
  const clan = data.clans.find((c) => c.id === input.clanId);
  if (!clan) return { ok: false, error: "NOT_FOUND" };
  if (clan.createdBy !== input.userId) return { ok: false, error: "NOT_CREATOR" };

  clan.bannerColor = input.bannerColor;
  clan.bannerShape = input.bannerShape;
  clan.bannerIcon = input.bannerIcon;
  clan.iconScale = input.iconScale;
  clan.iconOffsetX = input.iconOffsetX;
  clan.iconOffsetY = input.iconOffsetY;
  await writeLocal(data);
  return { ok: true };
}

// Handing leadership to a specific member, BY THE LEADER'S OWN CHOICE, at
// any time — not only when they're about to leave. See leaveClan's own
// comment just below for the other half of this: what happens
// AUTOMATICALLY if a leader leaves without ever making this choice. The
// two exist for different moments — this one is deliberate, that one is
// the fallback for nobody having decided anything.
export type TransferLeadershipResult =
  | { ok: true }
  | { ok: false; error: "NOT_FOUND" | "NOT_CREATOR" | "NOT_A_MEMBER" | "ALREADY_LEADER" };

export async function transferClanLeadership(input: {
  clanId: string;
  currentUserId: string;
  newLeaderUserId: string;
}): Promise<TransferLeadershipResult> {
  if (input.currentUserId === input.newLeaderUserId) {
    return { ok: false, error: "ALREADY_LEADER" };
  }

  if (CLANS_ENABLED) {
    const res = await supabase(
      `clans?id=eq.${encodeURIComponent(input.clanId)}&select=created_by&limit=1`,
    );
    if (!res.ok) return { ok: false, error: "NOT_FOUND" };
    const rows = (await res.json()) as { created_by: string }[];
    if (!rows[0]) return { ok: false, error: "NOT_FOUND" };
    if (rows[0].created_by !== input.currentUserId) return { ok: false, error: "NOT_CREATOR" };

    const memberRes = await supabase(
      `clan_members?clan_id=eq.${encodeURIComponent(input.clanId)}&user_id=eq.${encodeURIComponent(input.newLeaderUserId)}&select=user_id&limit=1`,
    );
    const memberRows = memberRes.ok ? ((await memberRes.json()) as { user_id: string }[]) : [];
    if (!memberRows[0]) return { ok: false, error: "NOT_A_MEMBER" };

    const updateRes = await supabase(
      `clans?id=eq.${encodeURIComponent(input.clanId)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({ created_by: input.newLeaderUserId }),
      },
    );
    if (!updateRes.ok) {
      throw new Error(
        `[clans] could not transfer leadership: HTTP ${updateRes.status} ${(await updateRes.text()).slice(0, 200)}`,
      );
    }
    return { ok: true };
  }

  const data = await readLocal();
  const clan = data.clans.find((c) => c.id === input.clanId);
  if (!clan) return { ok: false, error: "NOT_FOUND" };
  if (clan.createdBy !== input.currentUserId) return { ok: false, error: "NOT_CREATOR" };
  const targetIsMember = data.members.some(
    (m) => m.clanId === input.clanId && m.userId === input.newLeaderUserId,
  );
  if (!targetIsMember) return { ok: false, error: "NOT_A_MEMBER" };

  clan.createdBy = input.newLeaderUserId;
  await writeLocal(data);
  return { ok: true };
}

// If the person leaving is their clan's LEADER, hand leadership to whoever
// joined earliest among everyone else — "the second person to join the
// clan", in the ordinary case of nobody having transferred it already —
// rather than leaving `created_by` pointing at someone no longer even a
// member (which would mean nobody could ever edit the banner again, or
// show up with the Leader badge, for the rest of that clan's life). A
// clan where the leader was the only member simply has nobody to hand it
// to; `created_by` is left exactly as it was, same as this always
// behaved before this existed.
//
// A soft failure here (logged, not thrown) still lets the person actually
// leave — the same "don't block the main action over a secondary one"
// reasoning createClan's own creator-auto-join already follows.
export async function leaveClan(userId: string): Promise<void> {
  if (CLANS_ENABLED) {
    const membershipRes = await supabase(
      `clan_members?user_id=eq.${encodeURIComponent(userId)}&select=clan_id&limit=1`,
    );
    const membershipRows = membershipRes.ok
      ? ((await membershipRes.json()) as { clan_id: string }[])
      : [];
    const clanId = membershipRows[0]?.clan_id;

    if (clanId) {
      const creatorRes = await supabase(
        `clans?id=eq.${encodeURIComponent(clanId)}&select=created_by&limit=1`,
      );
      const creatorRows = creatorRes.ok
        ? ((await creatorRes.json()) as { created_by: string }[])
        : [];

      if (creatorRows[0]?.created_by === userId) {
        const memberIds = await getClanMemberIds(clanId);
        const successorId = memberIds.find((id) => id !== userId);
        if (successorId) {
          const handoverRes = await supabase(
            `clans?id=eq.${encodeURIComponent(clanId)}`,
            {
              method: "PATCH",
              headers: { Prefer: "return=minimal" },
              body: JSON.stringify({ created_by: successorId }),
            },
          );
          if (!handoverRes.ok) {
            console.error(
              "[clans] could not hand over leadership on leave:",
              handoverRes.status,
              (await handoverRes.text()).slice(0, 200),
            );
          }
        }
      }
    }

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
  const membership = data.members.find((m) => m.userId === userId);
  if (membership) {
    const clan = data.clans.find((c) => c.id === membership.clanId);
    if (clan && clan.createdBy === userId) {
      const successor = data.members
        .filter((m) => m.clanId === membership.clanId && m.userId !== userId)
        .sort((a, b) => a.joinedAt.localeCompare(b.joinedAt))[0];
      if (successor) {
        clan.createdBy = successor.userId;
      }
    }
  }

  data.members = data.members.filter((m) => m.userId !== userId);
  await writeLocal(data);
}
