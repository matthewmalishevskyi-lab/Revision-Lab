// RATE LIMITING FOR LOGIN — stopping someone guessing passwords forever.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE PROBLEM, WITH REAL NUMBERS
//
// Until this file existed, nothing stopped anyone trying passwords as fast as
// the network allowed. Say a modest 20 guesses a second. An 8-character
// lowercase password has 26^8 = 208,827,064,576 combinations, so on average
// you'd find it in half that: about 165 years. Fine.
//
// But almost nobody uses a random 8-character password. People use words. A
// leaked password list of the 10 million most common ones is a free download,
// and at 20 guesses a second you get through the whole list in under 7 days —
// and through the top 10,000, which covers a startling share of real accounts,
// in about 8 minutes.
//
// That is the actual threat. Not brute force against strong passwords: a
// dictionary run against weak ones. Rate limiting is what turns 8 minutes into
// something nobody will sit through.
//
// After this file, the same attacker gets 113 guesses a DAY against one
// account. That number is not an estimate — scripts/check-throttle.mjs
// simulates the attack against this exact code and counts them, and the check
// fails if anyone retunes the tiers and makes it worse.
//
// The top 10,000 list goes from 8 minutes to 88 days, and every one of those
// days is sitting visibly in the logs.
// ─────────────────────────────────────────────────────────────────────────────
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THERE ARE TWO LIMITS, NOT ONE
//
// Limiting per ACCOUNT is the obvious move: too many failures for this email,
// slow it down. It stops someone hammering one person's account.
//
// It does nothing about the attack that actually gets used, which is called
// PASSWORD SPRAYING: take one very likely password, and try it once against
// ten thousand different accounts. Each account sees a single failure, so a
// per-account limit never fires — but the attacker still gets in somewhere,
// because in ten thousand accounts, somebody used "Password123".
//
// So there is a second limit per IP ADDRESS — per machine doing the guessing.
// One account, many passwords is caught by the first. Many accounts, one
// password is caught by the second. You need both; each is blind to the other's
// attack.
// ─────────────────────────────────────────────────────────────────────────────
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE ACCOUNT LOCKOUT IS SHORT, AND THE IP LOCKOUT IS LONG
//
// Matthew's first suggestion was: 10 failures freezes it for a minute, and
// carrying on locks the account for a day. The first half is right. The second
// half would hand an attacker a weapon.
//
// Think about who a day-long ACCOUNT lockout actually hurts. To lock Matthew
// out of his own site for a day, an attacker needs no password and no skill —
// just his email address, and fifteen deliberately wrong guesses. Repeat each
// morning and he is permanently locked out of his own website. Turning "I can't
// get in" into something any stranger can inflict is a denial-of-service hole,
// and it is a classic own goal: the lockout becomes the attack.
//
// So account lockouts here cap at 15 minutes. Long enough that guessing is
// hopeless, short enough that it is an annoyance rather than a weapon.
//
// An IP lockout is the opposite case. Blocking the machine doing the guessing
// doesn't stop the real owner logging in — they can use their phone, their
// home, anywhere else. The person a long IP block inconveniences is, nearly
// always, the person who earned it. So that one goes up to 2 hours.
//
// Same idea, opposite answer, because the question is always "who does this
// punish if I'm wrong?"
// ─────────────────────────────────────────────────────────────────────────────

import { headers } from "next/headers";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const USING_DATABASE = Boolean(SUPABASE_URL && SUPABASE_KEY);
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

// ─── The tiers ──────────────────────────────────────────────────────────────
//
// A "tier" is: once you have this many failures, you're locked out for this
// long. Read them as a staircase — the punishment grows with persistence, so a
// person who mistypes twice notices nothing at all.
//
// The free allowance at the top of each staircase is deliberate. Real people
// mistype passwords, have the wrong one saved, or come back from a holiday
// unsure which they used. A limit that punishes the fifth honest attempt is a
// limit that generates support emails, and Matthew is the support desk.

type Tier = { atFailures: number; lockSeconds: number };

// Per account. Note the cap: 15 minutes, for the denial-of-service reason
// above. Highest matching tier wins, so these must stay in ascending order.
const EMAIL_TIERS: Tier[] = [
  { atFailures: 6, lockSeconds: 60 },       // 1 minute
  { atFailures: 11, lockSeconds: 5 * 60 },  // 5 minutes
  { atFailures: 21, lockSeconds: 15 * 60 }, // 15 minutes — the cap
];

// Per IP address. Bigger allowance, because a whole school can sit behind ONE
// IP address: 300 students sharing a connection look like one machine from
// here. 20 free failures before anything happens is comfortable for that, and
// nowhere near enough for guessing. If this ever does fire on a school, the
// first tier is only 5 minutes — raise these numbers rather than removing the
// limit.
const IP_TIERS: Tier[] = [
  { atFailures: 21, lockSeconds: 5 * 60 },   // 5 minutes
  { atFailures: 51, lockSeconds: 30 * 60 },  // 30 minutes
  { atFailures: 101, lockSeconds: 2 * 60 * 60 }, // 2 hours — the cap
];

// How much QUIET is needed before a run of failures is forgotten.
//
// ⚠️ Read this carefully, because the obvious version is wrong and the
// simulation in scripts/check-throttle.mjs caught it.
//
// The first version measured from the FIRST failure: your count resets one hour
// after the run began. That sounds equivalent. It is not — it hands an attacker
// a brand new allowance every single hour, free tiers and all. Measured, they
// got 437 guesses a day instead of the ~100 the staircase implies, because most
// of their guesses were spent in the cheap tiers over and over.
//
// So it measures from the LAST failure instead. The count is forgotten after an
// hour of QUIET, and an attacker who keeps guessing never gets an hour of
// quiet, so they never reset. Someone who mistyped a few times this morning and
// came back after lunch does.
//
// Same constant, one word different in the code, four times the protection.
const EMAIL_QUIET_SECONDS = 60 * 60; // 1 hour of no failures
const IP_QUIET_SECONDS = 60 * 60;

function lockoutFor(tiers: Tier[], failures: number): number {
  let seconds = 0;
  for (const tier of tiers) {
    if (failures >= tier.atFailures) seconds = tier.lockSeconds;
  }
  return seconds;
}

// ─── Where the counters live ────────────────────────────────────────────────
//
// WHY THIS CANNOT BE A VARIABLE IN MEMORY.
//
// The obvious implementation is a Map at the top of this file: email → count.
// It works perfectly on a laptop and is very nearly useless on Vercel, which is
// where this site actually runs.
//
// Vercel runs the site as serverless functions. There is no single long-running
// server holding that Map. Requests are spread across instances that are
// created and thrown away constantly, so two guesses a second apart may be
// counted by two different machines that have never heard of each other — and
// an attacker who simply keeps guessing will regularly land on a brand new
// instance whose Map is empty. The limiter would look like it worked in testing
// and quietly fail in production, which is the worst kind of broken.
//
// So the counters go in the database, which is the one thing every instance
// shares. On a laptop with no database configured we fall back to a Map, which
// is correct there precisely because a laptop IS one long-running process.

type Counter = { failures: number; lastFailureAt: number; lockedUntil: number };

const memory = new Map<string, Counter>();

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

async function readCounter(key: string): Promise<Counter | null> {
  if (!USING_DATABASE) return memory.get(key) ?? null;

  const response = await supabase(
    `login_throttle?key=eq.${encodeURIComponent(key)}&select=failures,last_failure_at,locked_until`,
  );
  if (!response.ok) throw new Error(`throttle read: HTTP ${response.status}`);

  const rows = (await response.json()) as {
    failures: number;
    last_failure_at: string;
    locked_until: string | null;
  }[];
  const row = rows[0];
  if (!row) return null;

  return {
    failures: row.failures,
    lastFailureAt: new Date(row.last_failure_at).getTime(),
    lockedUntil: row.locked_until ? new Date(row.locked_until).getTime() : 0,
  };
}

async function writeCounter(key: string, counter: Counter): Promise<void> {
  if (!USING_DATABASE) {
    memory.set(key, counter);
    return;
  }

  // `resolution=merge-duplicates` is PostgREST's way of saying "insert, or
  // update if this key already exists" — one round trip instead of a read, a
  // decision and a write. It also removes a race: two failures arriving at the
  // same instant can't both insert a first row and have one of them fail.
  const response = await supabase("login_throttle", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({
      key,
      failures: counter.failures,
      last_failure_at: new Date(counter.lastFailureAt).toISOString(),
      locked_until: counter.lockedUntil
        ? new Date(counter.lockedUntil).toISOString()
        : null,
    }),
  });
  if (!response.ok) throw new Error(`throttle write: HTTP ${response.status}`);
}

async function clearCounter(key: string): Promise<void> {
  if (!USING_DATABASE) {
    memory.delete(key);
    return;
  }
  await supabase(`login_throttle?key=eq.${encodeURIComponent(key)}`, {
    method: "DELETE",
  });
}

// ─── Which machine is asking ────────────────────────────────────────────────
//
// A REAL TRAP HERE. The usual answer is "read the x-forwarded-for header", and
// that header is, in general, WRITTEN BY THE CLIENT. Anyone can send
// `X-Forwarded-For: 1.2.3.4` and claim to be whoever they like — so on most
// hosts, an IP limit built on it is worthless: the attacker changes the header
// every guess and each one looks like a brand new machine.
//
// It is safe here for one specific reason: Vercel OVERWRITES this header at its
// edge rather than passing on what the visitor sent, exactly so it can't be
// spoofed. `x-real-ip` is set by the platform for the same reason, so we prefer
// it and treat x-forwarded-for as the fallback.
//
// ⚠️ This trust is in the HOST, not the header. If this site ever moves off
// Vercel to somewhere that forwards the client's own value, the IP limit
// silently becomes decorative. The per-account limit would still work.
async function clientIp(): Promise<string> {
  const headerList = await headers();

  const realIp = headerList.get("x-real-ip");
  if (realIp) return realIp.trim();

  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();

  return "unknown";
}

export type ThrottleVerdict =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

// Exported so other throttled actions (clan joins) can build their own
// message with the right subject — "sign-in attempts" would be a confusing
// thing to tell someone mistyping a clan password.
export function humanDelay(seconds: number): string {
  if (seconds < 60) return `${seconds} seconds`;
  const minutes = Math.ceil(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  const hours = Math.ceil(minutes / 60);
  return `${hours} hour${hours === 1 ? "" : "s"}`;
}

export function throttleMessage(seconds: number): string {
  return `Too many sign-in attempts. Please wait ${humanDelay(seconds)} and try again.`;
}

async function checkKey(key: string, now: number): Promise<ThrottleVerdict> {
  const counter = await readCounter(key);
  if (!counter) return { allowed: true };

  if (counter.lockedUntil > now) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((counter.lockedUntil - now) / 1000),
    };
  }
  return { allowed: true };
}

// Called BEFORE the password is checked. Returns whether this attempt is
// allowed to proceed at all.
//
// The IP is checked FIRST, deliberately. It isn't only about which limit
// matters more — checking the IP first means a machine already blocked never
// reaches the code that writes a row for the email it just made up. Otherwise
// an attacker guessing at random addresses would create one database row per
// invented email and fill up the free tier as a side effect. The cheap, broad
// check guards the expensive, unbounded one.
export async function checkLoginAllowed(email: string): Promise<ThrottleVerdict> {
  const now = Date.now();

  try {
    const byIp = await checkKey(`ip:${await clientIp()}`, now);
    if (!byIp.allowed) return byIp;

    return await checkKey(`email:${email.trim().toLowerCase()}`, now);
  } catch (error) {
    // ── FAIL OPEN, ON PURPOSE ────────────────────────────────────────────────
    // If the database is unreachable we let the attempt through rather than
    // blocking it. That is a real trade-off and worth being explicit about.
    //
    // Fail CLOSED (refuse everything) makes a database blip lock every single
    // user out of the site, and turns "Supabase is having a bad afternoon" into
    // "the site is down". Fail OPEN means an attacker who can knock the
    // database over also removes the limit.
    //
    // For a revision site the first is a certainty and the second is a stretch,
    // so: fail open, and log loudly enough to notice.
    console.error("[throttle] check failed, allowing attempt:", error);
    return { allowed: true };
  }
}

// Called after a failed password check.
//
// NOTE: this records the failure whether or not the email belongs to a real
// account. It has to. If failures were only counted for accounts that exist,
// then getting locked out would itself prove an account exists — and the whole
// login flow is already carefully built so that a stranger can't tell a wrong
// password from an unknown email. A rate limit that leaks the thing the rest of
// the code hides would undo that work.
export async function recordFailedLogin(email: string): Promise<void> {
  const now = Date.now();

  try {
    await Promise.all([
      bump(`email:${email.trim().toLowerCase()}`, now, EMAIL_TIERS, EMAIL_QUIET_SECONDS),
      bump(`ip:${await clientIp()}`, now, IP_TIERS, IP_QUIET_SECONDS),
    ]);
  } catch (error) {
    console.error("[throttle] could not record failure:", error);
  }
}

async function bump(
  key: string,
  now: number,
  tiers: Tier[],
  quietSeconds: number,
): Promise<void> {
  const existing = await readCounter(key);

  // Forgotten only after a stretch of QUIET — see the note on the constants.
  const forgotten =
    !existing || now - existing.lastFailureAt > quietSeconds * 1000;

  const failures = forgotten ? 1 : existing.failures + 1;
  const lockSeconds = lockoutFor(tiers, failures);

  await writeCounter(key, {
    failures,
    lastFailureAt: now,
    // Never shorten a lockout that is already running.
    lockedUntil: Math.max(
      existing?.lockedUntil ?? 0,
      lockSeconds ? now + lockSeconds * 1000 : 0,
    ),
  });
}

// Called after a SUCCESSFUL login.
//
// Only the email counter is cleared, never the IP one. Clearing the IP would
// give an attacker a free reset button: fail 20 times against other people's
// accounts, log into your own account to wipe the count, repeat forever. Since
// anyone can register, that reset is available to anyone who wants it.
//
// Proving you own ONE account is not evidence that the other twenty attempts
// were innocent.
export async function clearLoginFailures(email: string): Promise<void> {
  try {
    await clearCounter(`email:${email.trim().toLowerCase()}`);
  } catch (error) {
    console.error("[throttle] could not clear failures:", error);
  }
}

// Registration gets an IP limit too, or one machine can create ten thousand
// accounts overnight and fill the database. Nothing per-email here: each
// registration uses a different email by definition, so there is nothing to
// count.
export async function checkRegistrationAllowed(): Promise<ThrottleVerdict> {
  try {
    return await checkKey(`register:${await clientIp()}`, Date.now());
  } catch (error) {
    console.error("[throttle] registration check failed, allowing:", error);
    return { allowed: true };
  }
}

const REGISTER_TIERS: Tier[] = [
  { atFailures: 6, lockSeconds: 10 * 60 }, // 6 accounts an hour, then 10 mins
  { atFailures: 15, lockSeconds: 2 * 60 * 60 },
];

export async function recordRegistration(): Promise<void> {
  try {
    await bump(`register:${await clientIp()}`, Date.now(), REGISTER_TIERS, 60 * 60);
  } catch (error) {
    console.error("[throttle] could not record registration:", error);
  }
}

// ─── Clan join passwords ────────────────────────────────────────────────────
//
// Found while BUILDING the clan feature, not by a later audit: joinClan()
// checks a password the same way login does, and a clan password can be as
// short as 4 characters — a much smaller space than an account password's
// 8-character minimum — yet nothing here originally slowed down guessing it
// at all. Reusing the exact same shape as login's own limiter (per-target
// AND per-IP, same reasoning as the big comment at the top of this file for
// why both are needed) rather than inventing a new one.
//
// Separate key prefixes from login's `email:`/`ip:` — a clan password
// mistyped a dozen times shouldn't push someone toward being locked out of
// their own account, and the two are different secrets protecting different
// things.
const CLAN_JOIN_TIERS: Tier[] = [
  { atFailures: 6, lockSeconds: 60 },
  { atFailures: 11, lockSeconds: 5 * 60 },
  { atFailures: 21, lockSeconds: 15 * 60 },
];
const CLAN_JOIN_QUIET_SECONDS = 60 * 60;

export async function checkClanJoinAllowed(clanId: string): Promise<ThrottleVerdict> {
  const now = Date.now();
  try {
    const byIp = await checkKey(`clanjoin-ip:${await clientIp()}`, now);
    if (!byIp.allowed) return byIp;
    return await checkKey(`clanjoin-clan:${clanId}`, now);
  } catch (error) {
    // Fail open, for the identical reason checkLoginAllowed does — see its
    // comment. A clan leaderboard is lower-stakes than an account, so this
    // trade-off is at least as easy to justify here.
    console.error("[throttle] clan-join check failed, allowing attempt:", error);
    return { allowed: true };
  }
}

export async function recordFailedClanJoin(clanId: string): Promise<void> {
  try {
    await Promise.all([
      bump(`clanjoin-clan:${clanId}`, Date.now(), CLAN_JOIN_TIERS, CLAN_JOIN_QUIET_SECONDS),
      bump(`clanjoin-ip:${await clientIp()}`, Date.now(), CLAN_JOIN_TIERS, CLAN_JOIN_QUIET_SECONDS),
    ]);
  } catch (error) {
    console.error("[throttle] could not record failed clan join:", error);
  }
}

// ─── Quiz room codes ────────────────────────────────────────────────────────
//
// Found the same way the clan-join gap above was: while BUILDING the feature,
// not by a later audit. A quiz room code is only 6 digits — 900,000
// possibilities — and unlike a clan, IT IS the whole secret. There's no
// separate password to also get right; anyone who lands on a valid, still-
// open code is in the room. Nothing originally stopped a script from just
// trying every 6-digit number until one hit.
//
// Only ONE key here, not two like login/clan-join. Those have a stable
// TARGET being guessed against (one email, one clan) as well as a stable
// ATTACKER (one IP) — this doesn't. Every failed guess is a different
// "target" (a different code), so there's nothing sensible to key a
// per-target counter by; the IP making the guesses is the only stable thing
// to count against. Same tiers as clan-join: generous enough that mistyping
// a code a few times is invisible, tight enough that scanning the whole
// 900,000-code space would take upwards of twenty years instead of however
// long a script takes to fire off unlimited requests.
const QUIZ_JOIN_TIERS: Tier[] = [
  { atFailures: 6, lockSeconds: 60 },
  { atFailures: 11, lockSeconds: 5 * 60 },
  { atFailures: 21, lockSeconds: 15 * 60 },
];
const QUIZ_JOIN_QUIET_SECONDS = 60 * 60;

export async function checkQuizJoinAllowed(): Promise<ThrottleVerdict> {
  try {
    return await checkKey(`quizjoin-ip:${await clientIp()}`, Date.now());
  } catch (error) {
    // Fail open, the same reasoning as every other check in this file — a
    // casual multiplayer game is lower-stakes than an account, so this
    // trade-off is at least as easy to justify here.
    console.error("[throttle] quiz-join check failed, allowing attempt:", error);
    return { allowed: true };
  }
}

// Only called for a guess that DIDN'T resolve to a real, joinable room — a
// correct code someone was actually handed isn't an attack and shouldn't
// cost them anything, the same "only failures count" reasoning login
// already follows.
export async function recordFailedQuizJoin(): Promise<void> {
  try {
    await bump(`quizjoin-ip:${await clientIp()}`, Date.now(), QUIZ_JOIN_TIERS, QUIZ_JOIN_QUIET_SECONDS);
  } catch (error) {
    console.error("[throttle] could not record failed quiz join:", error);
  }
}

// Exported only so the test script can check the staircase without a database.
export const __testing = {
  lockoutFor,
  EMAIL_TIERS,
  IP_TIERS,
  EMAIL_QUIET_SECONDS,
  humanDelay,
};
