// Where accounts live, and how passwords are stored.
//
// NOTHING IS INSTALLED FOR THIS. Every piece of cryptography here comes from
// Node's built-in `crypto` module, which is part of Node itself. That's
// deliberate: you can read every line and see exactly what's happening rather
// than trusting a black box.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE ONE RULE OF PASSWORDS: never store the password.
//
// We store a *hash* — the result of scrambling the password through a one-way
// function. Given the password you can compute the hash; given the hash you
// cannot work backwards to the password. So if this file ever leaked, the
// attacker still doesn't have anyone's password.
//
// Two details that turn "a hash" into "a safe hash":
//
//  1. SALT. Each password gets a random value mixed in before hashing. Without
//     it, two people with the password "password123" would produce identical
//     hashes, and attackers could crack every account at once using a
//     pre-computed table. The salt makes every hash unique even for identical
//     passwords, so each one must be attacked individually.
//
//  2. A DELIBERATELY SLOW ALGORITHM. We use scrypt, which is designed to be
//     slow and memory-hungry. That sounds like a bug; it's the entire point.
//     A fast hash like MD5 lets an attacker try billions of guesses a second.
//     scrypt drags that down to a crawl. You won't notice ~100ms when logging
//     in. Someone brute-forcing a stolen database very much will.
// ─────────────────────────────────────────────────────────────────────────────

import { randomBytes, randomUUID, scrypt, timingSafeEqual } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import { writeJsonAtomic } from "./atomicWrite";
import path from "node:path";
import { promisify } from "node:util";

// Node's scrypt uses an old-style callback. `promisify` wraps it so we can
// `await` it like anything else.
const scryptAsync = promisify(scrypt);

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;

  // Set when someone asks to delete their account. The row is NOT removed yet
  // — see the long note above scheduleDeletion() for why there is a wait, and
  // why that wait has to be honest.
  deletedAt: string | null;

  // ─── The number that logs your other devices out ──────────────────────────
  //
  // Sessions on this site are SIGNED COOKIES, not rows in a table. That is a
  // deliberate, well-documented choice (see session.ts) and it has exactly one
  // sharp edge: because there is no list of active sessions anywhere, there is
  // nothing to delete when you want to end them. Change your password on your
  // phone because your brother knows it, and the cookie sitting in his browser
  // carries on working for up to thirty days.
  //
  // This is what closes that. Every cookie carries the version it was issued
  // at; every request compares it against the number here. Change the password
  // and this goes up by one, which instantly makes every cookie that came
  // before it — on every device, everywhere — fail that comparison.
  //
  // One integer buys back the one thing a stateless session cannot do, and it
  // does not need the site to remember who is logged in where.
  sessionVersion: number;
};

// ─── Storage: two backends, one set of functions ────────────────────────────
//
// TWO PLACES accounts can live, chosen automatically:
//
//   - On your laptop: a JSON file in /data. You can open it and SEE what got
//     saved, which is a far better way to learn than a database you cannot
//     look inside.
//
//   - On the live site: a Supabase table, reached over its REST API.
//
// The file is genuinely fine locally and genuinely broken once deployed, for
// two separate reasons:
//   - Hosts like Vercel give each request a fresh, read-only filesystem, so
//     writes vanish. Someone registers, sees "welcome", and is gone by lunch.
//   - Two people registering at the same instant would overwrite each other,
//     because reading a whole file and writing it back is not atomic.
//
// The database fixes both, and the second one properly: `email` has a UNIQUE
// constraint, so the database itself refuses the duplicate. Two simultaneous
// registrations cannot both succeed no matter how the requests interleave —
// which is not something application code can promise on its own.
//
// NO NEW PACKAGES. Supabase exposes every table as an HTTP API, so `fetch` is
// the whole client. Same choice as the password hashing: every line here is
// readable rather than hidden inside a dependency.
//
// EVERY FUNCTION BELOW KEEPS ITS SIGNATURE. This is the payoff for isolating
// storage in one file on day one — the login page, the register page, the
// session code and the dashboard are all untouched by this change.

// Trailing slashes are stripped because the URL is pasted by hand and the code
// builds paths with `${SUPABASE_URL}/rest/v1/...`. A copied value ending in "/"
// would produce "//rest/v1", which is the kind of typo that costs an hour.
const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Note what is NOT in these names: NEXT_PUBLIC_. Any environment variable
// starting with that prefix is baked into the JavaScript sent to the browser,
// where anyone can read it. The service role key can read and write every row
// in the database, so putting it there would hand the whole table to the
// internet. It stays server-side, which is why only Server Actions touch it.
export const USING_DATABASE = Boolean(SUPABASE_URL && SUPABASE_KEY);

// The shape Postgres uses. Databases conventionally name columns with
// underscores, JavaScript uses capitals — so there is a translation step, kept
// in one place rather than sprinkled through the code.
type UserRow = {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
  deleted_at: string | null;
  session_version: number | null;
};

const fromRow = (row: UserRow): User => ({
  id: row.id,
  deletedAt: row.deleted_at ?? null,
  name: row.name,
  email: row.email,
  passwordHash: row.password_hash,
  createdAt: row.created_at,
  // `?? 1` matters, and it is not defensive padding. Rows created before
  // SESSION_AND_RESET_SETUP.sql was run have no value in this column, and a
  // column that has not been added yet comes back undefined rather than
  // throwing. Reading either as version 1 means the site keeps working
  // normally against a database the migration has not reached yet — everyone
  // stays logged in, and sign-out-everywhere simply starts working once the
  // SQL is run, instead of the whole site logging itself out in the meantime.
  sessionVersion: row.session_version ?? 1,
});

// ─────────────────────────────────────────────────────────────────────────────
// TWO GENERATIONS OF SUPABASE KEY, AND WHY THE HEADERS DIFFER
//
// Supabase is part-way through replacing its API keys, and the two kinds must
// be sent differently:
//
//   OLD: `service_role`, a JWT starting "eyJ". Sent as BOTH an `apikey` header
//        and an `Authorization: Bearer` header, which is what every tutorial
//        written before the change tells you to do. Deprecated end of 2026.
//
//   NEW: a secret key starting "sb_secret_". Their docs are explicit that it
//        "cannot be sent in the Authorization: Bearer header" — it is not a
//        JWT, so it gets rejected when the server tries to read it as one.
//        It goes in the `apikey` header alone.
//
// Sending Bearer regardless — which is what the first version of this did —
// works with a legacy key and fails with a new one. Since a new project made
// today gets the new kind, that would have broken on the very first login.
//
// So: detect which kind we were given, and send the right headers. Both work.
// ─────────────────────────────────────────────────────────────────────────────
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

// Turns a failed request into something worth reading in a log.
//
// The rule being followed: say everything useful, reveal nothing secret. The
// status code, Supabase's own message and WHICH KIND of key was used are all
// safe and all diagnostic. The key itself never appears — Supabase's own
// guidance is to log at most the first few characters of a key, so this logs
// none of them, only its shape.
function describeFailure(what: string, status: number, body: string): string {
  const keyKind = !SUPABASE_KEY
    ? "no key set"
    : KEY_IS_LEGACY_JWT
      ? "legacy service_role JWT"
      : SUPABASE_KEY.startsWith("sb_secret_")
        ? "new sb_secret key"
        : SUPABASE_KEY.startsWith("sb_publishable_")
          ? "PUBLISHABLE key — this is the wrong one, it cannot write"
          : "unrecognised key format";

  const hint =
    status === 401 || status === 403
      ? "The key was rejected. Check it is the SECRET key, and that it belongs to this same project."
      : status === 404
        ? "Not found — the `users` table probably does not exist yet. Run the SQL from DEPLOYING.md step 5b."
        : status === 400
          ? "Bad request — usually a column name that does not match the table."
          : "";

  return [
    `Supabase ${what} failed: HTTP ${status}`,
    `url: ${SUPABASE_URL}`,
    `key: ${keyKind}`,
    `response: ${body.slice(0, 300)}`,
    hint,
  ]
    .filter(Boolean)
    .join("\n  ");
}

async function supabase(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY as string,
      ...(KEY_IS_LEGACY_JWT
        ? { Authorization: `Bearer ${SUPABASE_KEY}` }
        : {}),
      "Content-Type": "application/json",
      ...init.headers,
    },
    // Accounts must never be served from a cache. Reading a stale copy of the
    // users table would mean logging in against yesterday's password.
    cache: "no-store",
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY "FILE MISSING" AND "FILE CORRUPTED" ARE NOT THE SAME OUTCOME, FOUND IN
// THE 2026-08-25 DEEP BUG HUNT
//
// The original version caught every failure here — a missing file AND a
// corrupted one — and returned [] either way, on the reasoning that "no file
// yet" just means nobody has registered. That reasoning is right for a missing
// file and dangerous for a corrupted one: createUser's local-file path reads
// this list, pushes ONE new user onto it, and writes the whole thing back.
// If a real users.json existed but failed to parse (a half-written file, disk
// corruption) and this silently returned [], the very next registration would
// overwrite it with a file containing only that one new account — every
// existing user on the laptop permanently gone, with nothing in the logs to
// explain why.
//
// So only a genuinely missing file (ENOENT) is treated as "nobody's
// registered yet". Anything else — a parse failure, a permissions problem —
// is logged loudly and re-thrown, so the caller shows an ordinary error
// instead of quietly proceeding to destroy data. This only matters on the
// local JSON-file path (a laptop with no Supabase configured); the live site
// uses the database and never reaches this function at all.
// ─────────────────────────────────────────────────────────────────────────────
async function readUsers(): Promise<User[]> {
  let raw: string;
  try {
    raw = await readFile(USERS_FILE, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    console.error("[users] could not read data/users.json:", error);
    throw error;
  }

  try {
    // Accounts saved before deletion existed have no deletedAt field at all.
    // Defaulting it here means the rest of the code can rely on the property
    // being present, rather than every caller remembering that old rows differ.
    return (JSON.parse(raw) as User[]).map((u) => ({
      ...u,
      deletedAt: u.deletedAt ?? null,
      // Same defaulting as `deletedAt`, and it is not theoretical: a laptop
      // that has been running this site since before sessions had versions has
      // a users.json full of records with no sessionVersion in them. Left
      // undefined, the check in session.ts compares 1 against undefined, finds
      // them different, and silently logs out every one of those accounts on
      // the next page load. Caught by looking at a real file, not by reasoning
      // about one.
      sessionVersion: u.sessionVersion ?? 1,
    }));
  } catch (error) {
    console.error(
      "[users] data/users.json exists but could not be parsed — refusing to treat it as empty:",
      error,
    );
    throw new Error("USERS_FILE_CORRUPTED");
  }
}

async function writeUsers(users: User[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeJsonAtomic(USERS_FILE, users);
}

// Emails are case-insensitive in practice, so we store and compare them
// lowercased. Otherwise "Matt@x.com" and "matt@x.com" become two accounts.
export function normaliseEmail(email: string): string {
  return email.trim().toLowerCase();
}

// ─── Passwords ──────────────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scryptAsync(password, salt, 64)) as Buffer;
  // Store the salt alongside the hash — we'll need it again to check a login,
  // and it isn't secret. Its job is uniqueness, not secrecy.
  return `${salt}:${derived.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;

  const derived = (await scryptAsync(password, salt, 64)) as Buffer;
  const expected = Buffer.from(hash, "hex");

  if (expected.length !== derived.length) return false;

  // `timingSafeEqual` instead of `===` on purpose. A normal comparison stops at
  // the first character that differs, so a wrong guess starting with the right
  // letter takes microscopically longer to reject. Measured over thousands of
  // attempts, that leak lets an attacker work out the value one character at a
  // time. This version always takes the same time regardless. It's called a
  // timing attack, and it's a lovely example of a bug that isn't in the logic
  // at all — it's in how long the logic takes.
  return timingSafeEqual(expected, derived);
}

// ─────────────────────────────────────────────────────────────────────────────
// THE SAME IDEA AGAIN, ONE LEVEL UP — and a real bug that was measured, not
// guessed.
//
// The login code used to return immediately when no account matched the email,
// and only run scrypt when one did. The error message was identical either way,
// which is what stops the page TELLING you an account exists.
//
// But scrypt is deliberately slow. Timing the two cases gave:
//
//     existing email + wrong password : 29.4 ms
//     email that isn't registered     :  0.4 ms
//
// — a 72x difference. Anyone could feed in a list of email addresses, time the
// replies, and learn exactly which ones have accounts here, without ever
// guessing a password. That is the leak the careful wording was supposed to
// close, reopened by the clock.
//
// The fix is to do the same work either way. When no account is found, hash the
// submitted password against a throwaway hash and discard the result, so both
// paths cost the same. The wasted milliseconds are the point.
// ─────────────────────────────────────────────────────────────────────────────

// A salt and a "hash" of nothing in particular, generated once at startup.
// Nobody's password can match it, and nobody needs it to.
const DECOY_HASH = `${randomBytes(16).toString("hex")}:${randomBytes(64).toString("hex")}`;

export async function spendPasswordCheckTime(password: string): Promise<void> {
  // Deliberately ignoring the answer. We are buying time, not information.
  await verifyPassword(password, DECOY_HASH);
}

// ─── Queries ────────────────────────────────────────────────────────────────

export async function findUserByEmail(email: string): Promise<User | null> {
  const target = normaliseEmail(email);

  if (USING_DATABASE) {
    // `eq.` is how this API spells "equals". encodeURIComponent matters: an
    // email is user input going into a URL, and a stray & or # would otherwise
    // change what the query means.
    const res = await supabase(
      `users?email=eq.${encodeURIComponent(target)}&select=*&limit=1`,
    );
    if (!res.ok) throw new Error(describeFailure("lookup", res.status, await res.text()));
    const rows = (await res.json()) as UserRow[];
    return rows[0] ? fromRow(rows[0]) : null;
  }

  const users = await readUsers();
  return users.find((u) => u.email === target) ?? null;
}

export async function findUserById(id: string): Promise<User | null> {
  if (USING_DATABASE) {
    const res = await supabase(
      `users?id=eq.${encodeURIComponent(id)}&select=*&limit=1`,
    );
    if (!res.ok) throw new Error(describeFailure("lookup", res.status, await res.text()));
    const rows = (await res.json()) as UserRow[];
    return rows[0] ? fromRow(rows[0]) : null;
  }

  const users = await readUsers();
  return users.find((u) => u.id === id) ?? null;
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
}): Promise<User> {
  const email = normaliseEmail(input.email);

  const user: User = {
    id: randomUUID(),
    name: input.name.trim(),
    email,
    passwordHash: await hashPassword(input.password),
    createdAt: new Date().toISOString(),
    deletedAt: null,
    sessionVersion: 1,
  };

  if (USING_DATABASE) {
    const res = await supabase("users", {
      method: "POST",
      // Ask for the inserted row back, so we return what was actually stored
      // rather than what we hoped would be.
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        password_hash: user.passwordHash,
        created_at: user.createdAt,
      }),
    });

    if (res.ok) {
      const rows = (await res.json()) as UserRow[];
      return rows[0] ? fromRow(rows[0]) : user;
    }

    // ── Letting the DATABASE decide whether the email is taken ──────────────
    // The tempting version is "look it up first, and insert if nothing came
    // back". That has a gap: two people registering the same email in the same
    // moment can both look, both find nothing, and both insert. The window is
    // milliseconds wide, which is exactly the kind of bug that never appears
    // in testing and appears immediately once a site is popular.
    //
    // So the UNIQUE constraint on the email column decides instead. Postgres
    // refuses the second insert whatever the timing, and returns error 23505.
    // The database is the only place that can make that promise.
    const body = await res.text();
    if (res.status === 409 || body.includes("23505")) {
      throw new Error("EMAIL_TAKEN");
    }
    throw new Error(describeFailure("insert", res.status, body));
  }

  // Local file: no unique constraint exists, so the check has to happen here.
  const users = await readUsers();
  if (users.some((u) => u.email === email)) throw new Error("EMAIL_TAKEN");
  users.push(user);
  await writeUsers(users);
  return user;
}


// ─── Changing a password ────────────────────────────────────────────────────
//
// Note what this does NOT take: a user's email. It takes an id, which the
// caller can only have got from a signed session cookie. If this accepted an
// email address, then anyone who could call it could change anyone's password,
// and the only thing standing between a stranger and every account on the site
// would be that nobody thought to try.
//
// IT ALSO ENDS EVERY OTHER SESSION, which is the whole point of bumping
// `session_version` alongside the hash rather than in a separate function
// somebody could forget to call. The two belong together: the reason people
// change a password is that somebody else might have the old one, and a
// password change that leaves that person still logged in on their own laptop
// has not actually done the thing it was asked to do.
//
// The increment is read-then-write rather than `session_version + 1` computed
// by Postgres, because this API has no way to express arithmetic in a PATCH.
// Two password changes landing in the same millisecond could therefore both
// read 3 and both write 4 — and that is harmless here, because what matters is
// only that the number MOVED. Every cookie issued at 3 is dead either way.
export async function updatePassword(
  userId: string,
  newPassword: string,
): Promise<void> {
  const passwordHash = await hashPassword(newPassword);

  if (USING_DATABASE) {
    const current = await findUserById(userId);
    if (!current) throw new Error("NO_SUCH_USER");

    const res = await supabase(`users?id=eq.${encodeURIComponent(userId)}`, {
      method: "PATCH",
      body: JSON.stringify({
        password_hash: passwordHash,
        session_version: current.sessionVersion + 1,
      }),
    });
    if (!res.ok) {
      throw new Error(describeFailure("password update", res.status, await res.text()));
    }
    return;
  }

  const users = await readUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) throw new Error("NO_SUCH_USER");
  user.passwordHash = passwordHash;
  user.sessionVersion = (user.sessionVersion ?? 1) + 1;
  await writeUsers(users);
}

// ─── Deleting an account ────────────────────────────────────────────────────
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE ROW IS NOT DELETED IMMEDIATELY, AND WHY THAT NEEDS SAYING OUT LOUD
//
// Matthew chose a 30 day grace period over an instant wipe, so that someone who
// clicks the button by accident can get months of revision back. That is a kind
// decision and it is defensible. It also comes with an obligation.
//
// "Delete my account" that quietly means "hide it for a month" is the sort of
// thing that gets companies fined, because the user asked you to stop holding
// their data and you carried on holding it. What makes it legitimate is
// TELLING THEM: the confirmation screen and the privacy page both say plainly
// that the data is erased after 30 days and can be restored before then.
//
// The wait is a feature offered to the user, not a convenience taken by us. If
// they want it gone now, the privacy page gives them an email address, and
// "delete this row" is a one-line SQL query.
//
// THE PART THAT IS EASY TO GET WRONG: a soft delete is only a delete if
// something actually comes back and finishes the job. If the purge never runs,
// the row sits there forever and the privacy policy is simply untrue. That is
// why the scheduled job in ACCOUNT_SETUP.sql is not optional housekeeping —
// it is the half of this feature that makes the other half honest.
// ─────────────────────────────────────────────────────────────────────────────

export const DELETION_GRACE_DAYS = 30;

export function purgeDateFor(deletedAt: string): Date {
  return new Date(
    new Date(deletedAt).getTime() + DELETION_GRACE_DAYS * 24 * 60 * 60 * 1000,
  );
}

async function setDeletedAt(userId: string, value: string | null): Promise<void> {
  if (USING_DATABASE) {
    const res = await supabase(`users?id=eq.${encodeURIComponent(userId)}`, {
      method: "PATCH",
      body: JSON.stringify({ deleted_at: value }),
    });
    if (!res.ok) {
      throw new Error(describeFailure("deletion flag", res.status, await res.text()));
    }
    return;
  }

  const users = await readUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) throw new Error("NO_SUCH_USER");
  user.deletedAt = value;
  await writeUsers(users);
}

export async function scheduleDeletion(userId: string): Promise<void> {
  await setDeletedAt(userId, new Date().toISOString());
}

// Called when someone logs back in during the grace period and changes their
// mind. This is the entire reason the grace period exists, so it must be easy
// to reach — one button, no re-typing your password, no confirmation.
export async function cancelDeletion(userId: string): Promise<void> {
  await setDeletedAt(userId, null);
}
