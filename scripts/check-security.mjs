// Security + account checker — run it with `npm run check`.
//
// WHY THIS FILE EXISTS
//
// A broken rate limiter looks exactly like a working one. It refuses you when
// you test it by hand a few times, and you conclude it works — while the case
// that matters, someone grinding away for hours, was never tried. The only
// honest way to know is to simulate the attack and count what gets through.
//
// So this runs a simulated attacker against the real code with a fake clock,
// and prints the number of guesses they achieve. If someone later "tidies up"
// the tiers, these numbers move and the check fails.
//
// It also permanently guards the one design decision that is easy to undo by
// accident: an account lockout must never grow into a long one, because a long
// account lockout is a way to attack a user rather than protect them.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// Every file under a directory, recursively. Used by the checks that have to
// look at the whole UI rather than a named list of files — a rule that only
// inspects files someone remembered to list is a rule with holes in it.
function listFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(path));
    else out.push(path);
  }
  return out;
}

// Run the TypeScript compiler through Node directly, rather than through npx.
//
// WHY NOT `npx tsc`
//
// On Windows, npx is a .cmd batch file. Node 20.12 / 22 hardened spawnSync
// against a batch-file argument-injection vulnerability (CVE-2024-27980) by
// REFUSING to spawn .cmd files without `shell: true`. So this script, which
// worked everywhere it had been run, failed on Matthew's Windows machine with
// a bare `spawnSync npx.cmd EINVAL` — a message that names neither TypeScript
// nor the real cause.
//
// Adding `shell: true` would fix it, but running through a shell means every
// path is re-parsed by cmd.exe, and one temp directory with a space in it
// would silently break the build again.
//
// Resolving tsc's own entry point and running it with the SAME Node that is
// already running avoids batch files entirely. It works identically on Windows,
// macOS and Linux, and skips npx's package resolution, so it is faster too.
//
// The general lesson: shelling out to a command-line tool by NAME depends on
// how the operating system finds and executes that name. Calling the code
// directly does not.
const TSC = require.resolve("typescript/bin/tsc");

const out = mkdtempSync(join(tmpdir(), "revision-throttle-"));

let failures = 0;
let checks = 0;

function expect(condition, description) {
  checks += 1;
  if (!condition) {
    failures += 1;
    console.error(`  ✗ ${description}`);
  }
}

try {
  execFileSync(
    process.execPath,
    [
      TSC,
      "app/lib/throttle.ts",
      "--outDir", out,
      "--module", "commonjs",
      "--target", "es2022",
      "--skipLibCheck",
    ],
    { stdio: "pipe" },
  );

  // throttle.ts imports `headers()` from next/headers to find the caller's IP.
  // That only works inside a real request, so for this test we swap that one
  // import for a stub. Everything else — the tiers, the counters, the window,
  // the decisions — is the genuine compiled code, which is the part under test.
  const compiled = join(out, "throttle.js");
  writeFileSync(
    compiled,
    readFileSync(compiled, "utf8").replace(
      /require\("next\/headers"\)/g,
      `{ headers: async () => ({ get: () => "203.0.113.7" }) }`,
    ),
  );

  const throttle = require(compiled);
  const { lockoutFor, EMAIL_TIERS, IP_TIERS, EMAIL_QUIET_SECONDS } = throttle.__testing;

  // ── 1. The staircase is the staircase ────────────────────────────────────
  console.log("Checking the lockout tiers...");

  expect(lockoutFor(EMAIL_TIERS, 1) === 0, "1 failure is free");
  expect(lockoutFor(EMAIL_TIERS, 5) === 0, "5 failures are free (people mistype)");
  expect(lockoutFor(EMAIL_TIERS, 6) === 60, "6th failure locks for 1 minute");
  expect(lockoutFor(EMAIL_TIERS, 10) === 60, "10 failures still 1 minute");
  expect(lockoutFor(EMAIL_TIERS, 11) === 300, "11th failure locks for 5 minutes");
  expect(lockoutFor(EMAIL_TIERS, 21) === 900, "21st failure locks for 15 minutes");

  // ── 2. THE IMPORTANT ONE: the account cap ────────────────────────────────
  //
  // If this check ever fails, someone has made account lockouts longer. That
  // turns the limiter into a weapon: anyone who knows your email can lock you
  // out of your own site by failing to log in on purpose. Fifteen minutes is
  // the deliberate ceiling. Do not raise it without reading the note at the top
  // of throttle.ts.
  const worstEmailLock = lockoutFor(EMAIL_TIERS, 1_000_000);
  expect(
    worstEmailLock <= 15 * 60,
    `an account can never be locked for more than 15 minutes (got ${worstEmailLock}s) ` +
      `— a long account lockout is a denial-of-service weapon, see throttle.ts`,
  );

  // An IP block, by contrast, is allowed to be long: it punishes the machine
  // doing the guessing, not the account being guessed at.
  expect(
    lockoutFor(IP_TIERS, 1_000_000) >= 60 * 60,
    "a persistent IP is blocked for at least an hour",
  );

  // ── 2b. THE COUNTER CANNOT BE OUTRUN BY GOING IN PARALLEL ────────────────
  //
  // ⚠️ THE BUG THIS SECTION EXISTS FOR, found in the 2026-09-08 bug hunt.
  //
  // Everything above models a PATIENT attacker: one guess, wait for the
  // answer, next guess. That is the politest attacker there is, and it was the
  // only one ever simulated — so a limiter that counted perfectly in sequence
  // and lost count under load reported a healthy 21 guesses an hour for weeks.
  //
  // recordFailedLogin used to read the counter, add one and write it back, as
  // three separate trips to the database. Fire fifty guesses at once and all
  // fifty read "failures: 0" before any of them has written "1", so a counter
  // that should say fifty says one and the tiers never fire. Nothing about
  // that attack is clever. It just has to not wait.
  //
  // Both shapes are modelled below. The point of keeping the broken one is
  // that the number it produces is the argument: if it ever counts all fifty,
  // this model has stopped reproducing the bug and the check below it is
  // guarding nothing.
  const ATTACKERS = 50;

  async function raceReadModifyWrite() {
    let stored = 0;
    await Promise.all(
      Array.from({ length: ATTACKERS }, async () => {
        const seen = stored;                        // trip 1: read
        await new Promise((r) => setImmediate(r));  // the gap, where they pile in
        stored = seen + 1;                          // trip 2: write back
      }),
    );
    return stored;
  }

  async function raceSingleStatement() {
    // What `insert ... on conflict do update` buys: the read and the write are
    // one indivisible step, so nothing can interleave between them.
    let stored = 0;
    await Promise.all(
      Array.from({ length: ATTACKERS }, async () => {
        await new Promise((r) => setImmediate(r));
        stored = stored + 1;                        // no await inside — one step
      }),
    );
    return stored;
  }

  const naive = await raceReadModifyWrite();
  const atomic = await raceSingleStatement();
  console.log(
    `  \u2192 ${ATTACKERS} simultaneous guesses: read-then-write counted ${naive}, one statement counted ${atomic}`,
  );

  expect(
    atomic === ATTACKERS,
    `one statement counts every one of ${ATTACKERS} simultaneous guesses`,
  );
  expect(
    naive < ATTACKERS,
    `read-then-write really does lose count (counted ${naive}) — if this ever passes, the model has stopped reproducing the bug`,
  );

  // The fix cannot live in application code. Whatever you wrap a read and a
  // write in, the gap between them is still there — so the live path has to
  // hand the whole operation to Postgres as one statement.
  const throttleSource = readFileSync("app/lib/throttle.ts", "utf8");
  const bumpFn = throttleSource.slice(throttleSource.indexOf("async function bump("));
  expect(
    bumpFn.includes("rpc/bump_login_throttle"),
    "recording a failure goes through the atomic bump_login_throttle function",
  );
  const dbBranch = bumpFn.slice(
    bumpFn.indexOf("if (USING_DATABASE)"),
    bumpFn.indexOf("const existing = await readCounter"),
  );
  expect(
    dbBranch.length > 0 && !dbBranch.includes("readCounter") && !dbBranch.includes("writeCounter"),
    "the database path never reads the counter and writes it back itself",
  );

  // And the function it calls has to exist, count in one statement, and be
  // reachable only by the site. Postgres grants EXECUTE to PUBLIC by default
  // and Supabase publishes every public function at /rest/v1/rpc/<name>: left
  // alone, anyone holding the publishable key — which is in every visitor's
  // browser — could drive any email's counter up until that account locked
  // out. A rate limiter strangers can fire at you is a weapon pointing the
  // wrong way.
  const setupSql = readFileSync("RUN_THIS_IN_SUPABASE.sql", "utf8");
  expect(
    setupSql.includes("create or replace function public.bump_login_throttle"),
    "the setup SQL defines bump_login_throttle",
  );
  expect(
    /on conflict \(key\) do update/.test(setupSql),
    "bump_login_throttle counts with a single insert ... on conflict do update",
  );
  expect(
    /revoke execute on function public\.bump_login_throttle[^;]*from public;/.test(setupSql) &&
      /revoke execute on function public\.bump_login_throttle[^;]*from anon, authenticated;/.test(setupSql),
    "execute on bump_login_throttle is revoked from public, anon and authenticated",
  );
  expect(
    /grant\s+execute on function public\.bump_login_throttle[^;]*to service_role;/.test(setupSql),
    "execute on bump_login_throttle is granted to service_role",
  );
  expect(
    lockoutFor(IP_TIERS, 20) === 0,
    "20 failures from one IP is still free (a whole school shares one IP)",
  );

  // ── 3. Simulate a real attack, with a fake clock ─────────────────────────
  //
  // The attacker guesses as fast as they are allowed: try, and if refused, wait
  // exactly as long as they were told to, then try again. This is the best case
  // for them, so the number it produces is an upper bound on what a real
  // attacker gets.
  console.log("Simulating a brute-force attack...");

  async function simulate(hours) {
    // A fresh store for each run. The module keeps counters in a Map when no
    // database is configured, which is exactly the situation here.
    const store = new Map();
    const KEY = "email:victim@example.com";
    const start = 1_700_000_000_000;
    const end = start + hours * 3600 * 1000;

    let now = start;
    let guesses = 0;

    while (now < end) {
      const counter = store.get(KEY);

      if (counter && counter.lockedUntil > now) {
        now = counter.lockedUntil; // wait exactly as long as required
        continue;
      }

      // Allowed through: this is one real password guess.
      guesses += 1;

      // It was wrong, so it counts as a failure. Note this mirrors bump():
      // the count is forgotten only after a stretch of QUIET, which an attacker
      // grinding away never gets.
      const forgotten =
        !counter || now - counter.lastFailureAt > EMAIL_QUIET_SECONDS * 1000;
      const failureCount = forgotten ? 1 : counter.failures + 1;
      const lock = lockoutFor(EMAIL_TIERS, failureCount);

      store.set(KEY, {
        failures: failureCount,
        lastFailureAt: now,
        lockedUntil: Math.max(counter?.lockedUntil ?? 0, lock ? now + lock * 1000 : 0),
      });

      now += 200; // the request itself takes a moment
    }

    return guesses;
  }

  const perHour = await simulate(1);
  const perDay = await simulate(24);
  const perYear = Math.round(perDay * 365);

  console.log(`  → ${perHour} guesses in the first hour`);
  console.log(`  → ${perDay} guesses in 24 hours`);
  console.log(`  → about ${perYear.toLocaleString("en-GB")} guesses a year`);

  // Without any limit, at a modest 20 requests a second, an attacker gets
  // 1,728,000 guesses a day. State the improvement as a ratio so it stays
  // meaningful if the tiers are ever retuned.
  const unlimitedPerDay = 20 * 60 * 60 * 24;
  console.log(
    `  → unlimited would be ${unlimitedPerDay.toLocaleString("en-GB")} a day, ` +
      `so this is ${Math.round(unlimitedPerDay / perDay).toLocaleString("en-GB")}x slower`,
  );

  // The 10,000 most common passwords are a free download and cover a
  // depressing share of real accounts. How long does that list now take?
  const daysForTopTenThousand = 10_000 / perDay;
  console.log(
    `  → the 10,000 commonest passwords would now take ${Math.round(daysForTopTenThousand)} days ` +
      `(unlimited: ${((10_000 / unlimitedPerDay) * 24 * 60).toFixed(1)} minutes)`,
  );

  expect(perDay < 200, `fewer than 200 guesses a day get through (got ${perDay})`);
  expect(
    daysForTopTenThousand > 30,
    `a common-password list takes over a month (got ${daysForTopTenThousand.toFixed(0)} days)`,
  );

  // ── 4. An honest person is not punished ──────────────────────────────────
  //
  // A limiter that blocks the fifth honest attempt is a limiter that generates
  // support emails. Five failures in a row must cost nothing at all.
  expect(
    [1, 2, 3, 4, 5].every((n) => lockoutFor(EMAIL_TIERS, n) === 0),
    "someone who mistypes five times in a row is never delayed",
  );

  // ── 5. The wiring in actions.ts ──────────────────────────────────────────
  //
  // The limiter can be perfect and still do nothing if it isn't called in the
  // right places. These read the actual source, because a rate limiter that is
  // never invoked is the most likely way for this to be silently broken.
  console.log("Checking the login flow calls it correctly...");

  const actions = readFileSync("app/lib/actions.ts", "utf8");

  const checkAt = actions.indexOf("checkLoginAllowed");
  const lookupAt = actions.indexOf("findUserByEmail(email)");
  expect(checkAt > 0, "login calls checkLoginAllowed");
  expect(
    checkAt < lookupAt,
    "the rate limit is checked BEFORE the database lookup, so a blocked attacker costs us nothing",
  );

  // Both failure paths must record. If only the "wrong password" path counted,
  // then guessing at addresses that don't exist would be unlimited — and worse,
  // getting throttled would prove an account exists, which is the exact thing
  // the identical error message is there to hide.
  const loginBody = actions.slice(actions.indexOf("export async function login"));
  const recordCount = (loginBody.match(/recordFailedLogin\(/g) ?? []).length;
  expect(
    recordCount >= 2,
    `both failure branches record the attempt — unknown email AND wrong password (found ${recordCount})`,
  );

  expect(
    loginBody.includes("clearLoginFailures"),
    "a successful login clears that account's failures",
  );

  // Clearing the IP counter on success would be a free reset button: anyone can
  // register an account, so an attacker would spray other people's accounts and
  // then log into their own to wipe the count.
  const throttleSrc = readFileSync("app/lib/throttle.ts", "utf8");
  const clearFn = throttleSrc.slice(throttleSrc.indexOf("export async function clearLoginFailures"));
  expect(
    !clearFn.slice(0, 400).includes("`ip:"),
    "a successful login does NOT clear the IP counter (that would be a free reset button)",
  );

  expect(
    throttleSrc.includes("checkRegistrationAllowed"),
    "registration is rate limited too",
  );

  // ── 6. The IP is read from a header the visitor cannot forge ─────────────
  expect(
    throttleSrc.includes('headerList.get("x-real-ip")'),
    "the client IP prefers x-real-ip, which the platform sets",
  );

  // ── 6b. THE LIMITER END TO END ───────────────────────────────────────────
  //
  // Everything above tests the tier TABLE. That is not the same as testing the
  // limiter: the table could be perfect while recordFailedLogin writes to a
  // different key than checkLoginAllowed reads, and every one of those checks
  // would still pass. So this drives the real exported functions in sequence
  // and asserts on what a user would actually experience.
  console.log("Driving the limiter end to end...");

  const { checkLoginAllowed, recordFailedLogin, clearLoginFailures } = throttle;
  const victim = "victim@example.com";

  // Five wrong passwords must cost an honest person nothing at all.
  for (let i = 0; i < 5; i++) await recordFailedLogin(victim);
  expect(
    (await checkLoginAllowed(victim)).allowed === true,
    "five failures in a row leave the account still usable",
  );

  // The sixth trips the first tier.
  await recordFailedLogin(victim);
  const blocked = await checkLoginAllowed(victim);
  expect(blocked.allowed === false, "the sixth failure locks the account");
  expect(
    blocked.allowed === false && blocked.retryAfterSeconds <= 60,
    `the first lockout is a minute or less (got ${blocked.allowed === false ? blocked.retryAfterSeconds : "n/a"}s)`,
  );

  // Case must not matter — otherwise an attacker types VICTIM@example.com and
  // gets a fresh allowance, which would make the whole per-account limit
  // decorative. Worth an explicit test because it is invisible in review.
  const shouted = await checkLoginAllowed("  VICTIM@Example.COM  ");
  expect(
    shouted.allowed === false,
    "the limit follows the account regardless of capitals or stray spaces",
  );

  // Getting the password right clears the slate.
  await clearLoginFailures(victim);
  expect(
    (await checkLoginAllowed(victim)).allowed === true,
    "a successful login clears that account's failures",
  );

  // An unknown address is counted exactly like a real one. If it were not,
  // being throttled would prove an account exists.
  const ghost = "nobody-has-this-address@example.com";
  for (let i = 0; i < 6; i++) await recordFailedLogin(ghost);
  expect(
    (await checkLoginAllowed(ghost)).allowed === false,
    "an email with NO account is throttled identically — otherwise the lockout leaks which accounts exist",
  );

  // ── 7. The account and privacy pages ─────────────────────────────────────
  //
  // THE BUG THIS EXISTS TO CATCH: the grace period is written down in five
  // places — the constant, the privacy page, the account page, the
  // confirmation box, and the SQL that does the erasing. Change the constant to
  // 14 and four of them keep saying 30, and the site is now making a promise
  // about people's data that the database does not keep. Nothing about that
  // would fail to compile, and nobody would notice until it mattered.
  console.log("Checking the account and privacy pages...");

  const usersSrc = readFileSync("app/lib/users.ts", "utf8");
  const graceMatch = usersSrc.match(/DELETION_GRACE_DAYS = (\d+)/);
  expect(graceMatch !== null, "DELETION_GRACE_DAYS is defined");

  const graceDays = Number(graceMatch?.[1]);
  const mustSayGrace = [
    "app/privacy/page.tsx",
    "app/account/page.tsx",
    "app/account/AccountForms.tsx",
    "app/page.tsx",
  ];

  for (const file of mustSayGrace) {
    const text = readFileSync(file, "utf8");
    // Any "<number> days" claim in the page must be the real number.
    const claims = [...text.matchAll(/(\d+)\s*\n?\s*days/g)].map((m) => Number(m[1]));
    expect(
      claims.length > 0,
      `${file} tells the reader how long deletion takes`,
    );
    expect(
      claims.every((n) => n === graceDays),
      `${file} says "${graceDays} days" everywhere (found ${[...new Set(claims)].join(", ")})`,
    );
  }

  const sql = readFileSync("ACCOUNT_SETUP.sql", "utf8");
  const intervals = [...sql.matchAll(/interval '(\d+) days'\s*;?\s*$/gm)].map((m) => Number(m[1]));
  const purgeIntervals = [...sql.matchAll(/deleted_at < now\(\) - interval '(\d+) days'/g)]
    .map((m) => Number(m[1]));
  expect(purgeIntervals.length >= 2, "the SQL purges both users and their activity");
  expect(
    purgeIntervals.every((n) => n === graceDays),
    `the scheduled purge waits exactly ${graceDays} days, like the pages promise ` +
      `(found ${[...new Set(purgeIntervals)].join(", ")})`,
  );
  void intervals;

  // A soft delete with no purge is not a delete. If this job is missing, the
  // privacy page is simply untrue.
  expect(
    sql.includes("cron.schedule"),
    "something is scheduled to actually erase the rows — a soft delete with no purge is a lie",
  );
  expect(
    sql.indexOf("delete from public.activity") < sql.indexOf("delete from public.users"),
    "activity is deleted BEFORE the user row, or the rows are orphaned with nothing to identify them for deletion",
  );

  // The privacy page has to give a real route to a human.
  const site = readFileSync("app/lib/site.ts", "utf8");
  const contact = site.match(/CONTACT_EMAIL = "([^"]+)"/)?.[1];
  expect(Boolean(contact), "a contact address is defined");
  const privacy = readFileSync("app/privacy/page.tsx", "utf8");
  expect(
    privacy.includes("CONTACT_EMAIL"),
    "the privacy page shows the contact address from the constant, not a typed copy",
  );
  expect(privacy.includes("ico.org.uk"), "the privacy page names the regulator");

  // Findable, or it may as well not exist.
  const footer = readFileSync("app/components/SiteFooter.tsx", "utf8");
  expect(footer.includes('href="/privacy"'), "the footer links to the privacy page");
  const layout = readFileSync("app/layout.tsx", "utf8");
  expect(layout.includes("<SiteFooter"), "the footer is in the root layout, so it is on every page");
  expect(
    readFileSync("app/register/RegisterForm.tsx", "utf8").includes("/privacy"),
    "the sign-up form links to the privacy page, where it is actually relevant",
  );

  // Identity must come from the session, never from the form.
  const accountActions = readFileSync("app/lib/account-actions.ts", "utf8");
  expect(
    !/formData\.get\(\s*["']email["']\s*\)/.test(accountActions),
    "account actions never read an email from the form — identity comes from the signed session cookie only",
  );
  expect(
    (accountActions.match(/getSessionUserId\(\)/g) ?? []).length >= 3,
    "every account action reads the user from the session",
  );
  expect(
    accountActions.includes("verifyPassword"),
    "deleting an account and changing a password both re-check the password",
  );

  // ── 8. Traps in the newest code ──────────────────────────────────────────
  //
  // Two mistakes that compile perfectly and fail at runtime.
  console.log("Checking for framework traps...");

  // redirect() works by THROWING a signal that Next catches. Put one inside a
  // try/catch and the catch swallows it, so the redirect silently never
  // happens and the user sits on a page that should have navigated away. This
  // has bitten this project before, which is why it is now a check.
  for (const file of ["app/lib/actions.ts", "app/lib/account-actions.ts"]) {
    const text = readFileSync(file, "utf8");
    let depth = 0;
    let inTry = false;
    let offence = null;
    for (const line of text.split("\n")) {
      if (/^\s*try\s*\{/.test(line)) { inTry = true; depth = 0; }
      if (inTry) {
        depth += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;
        if (/\bredirect\(/.test(line) && !line.trim().startsWith("//")) offence = line.trim();
        if (depth <= 0 && !/^\s*try\s*\{/.test(line)) inTry = false;
      }
    }
    expect(!offence, `${file}: redirect() sits inside a try block — the catch will swallow it (${offence})`);
  }

  // Tailwind reads source files as plain text, so a class assembled at runtime
  // generates no CSS and silently does nothing. Every column count a subject
  // could have must exist as a complete literal string.
  const subjectPage = readFileSync("app/subjects/[subject]/page.tsx", "utf8");
  const subjectsSrc = readFileSync("app/lib/subjects.ts", "utf8");
  const yearCounts = [...subjectsSrc.matchAll(/year: "Year \d+"/g)];
  expect(yearCounts.length > 0, "subjects declare year groups");
  // Strip comments before testing. The first version of this check fired on
  // the comment EXPLAINING the trap, which is the classic way a useful check
  // gets weakened or deleted — so it ignores comments instead of being relaxed.
  const withoutComments = subjectPage
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  expect(
    !/lg:grid-cols-\$\{/.test(withoutComments),
    "no Tailwind class is built by string interpolation — Tailwind cannot see those",
  );
  for (const n of [1, 2, 3]) {
    expect(
      subjectPage.includes(`${n}: "lg:grid-cols-`),
      `the column lookup covers a subject with ${n} year group(s) as a literal class`,
    );
  }

  // Year 11 artwork must be chosen by NAME. Picking it by position handed
  // Business's Year 11 the book instead of the exam art.
  expect(
    subjectPage.includes('group.year === "Year 11"'),
    "exam artwork is chosen by year name, not by position in the array",
  );

  // The description Google prints under the link named three subjects out of
  // six for months. It is generated now, so it cannot drift — this check exists
  // to stop someone helpfully "simplifying" it back into a typed-out string.
  const siteSrc = readFileSync("app/lib/site.ts", "utf8");
  expect(
    siteSrc.includes("buildDescription()"),
    "SITE_DESCRIPTION is derived from SUBJECTS, not typed out — a typed one goes stale the next time a subject is added",
  );
  expect(
    !/SITE_DESCRIPTION\s*=\s*"/.test(siteSrc),
    "SITE_DESCRIPTION is not a hard-coded string",
  );

  // ── 10. Claims on the homepage stay true ─────────────────────────────────
  //
  // The homepage now makes a SPECIFIC claim — a count of topics, mistakes and
  // questions. Specific claims are the only kind worth making, and the only
  // kind that can go wrong. These two checks keep the numbers honest.
  const homeSrc = readFileSync("app/page.tsx", "utf8");
  expect(
    homeSrc.includes("siteStats()"),
    "homepage counts its figures from the content rather than hard-coding them",
  );
  expect(
    !/\b\d{3,}\+?\s*(GCSE topics|common mistakes|flashcards)/.test(homeSrc),
    "homepage has no hard-coded content totals — a typed number is true the day it is typed and a lie afterwards",
  );
  // Rounding must be DOWN. Rounding up is the natural marketing instinct and
  // makes every figure a small false claim.
  const statsSrc = readFileSync("app/lib/site-stats.ts", "utf8");
  expect(
    statsSrc.includes("Math.floor("),
    "site stats round down, never up",
  );
  expect(
    !statsSrc.includes("Math.ceil(") && !statsSrc.includes("Math.round("),
    "site stats never round up or to nearest",
  );

  // ── 10b. Header buttons are all the same height ──────────────────────────
  //
  // Measured on the live site: text chips were 46px and icon-only chips 42px,
  // so the header row did not line up. Four pixels, and it was the first thing
  // someone said looked wrong.
  //
  // The two paddings have to move together. This check does not re-derive the
  // arithmetic — it just refuses to let one change without the other being
  // reconsidered, by pinning the pair that is currently known to match.
  const chipSrc = readFileSync("app/components/chipStyles.ts", "utf8");
  expect(
    /chipClasses =\s*\n?\s*"[^"]*\bpy-2\b[^"]*\btext-lg\b/.test(chipSrc) ||
      /chipClasses =\s*\n?\s*"[^"]*\btext-lg\b[^"]*\bpy-2\b/.test(chipSrc),
    "text chips are still py-2 + text-lg (46px) — if this changed, iconChipClasses' padding must change too",
  );
  expect(
    /iconChipClasses =\s*\n?\s*"[^"]*\bp-3\b/.test(chipSrc),
    "icon-only chips are p-3, which is what makes them the same 46px height as text chips",
  );
  expect(
    chipSrc.includes("quizChipClasses") && /quizChipClasses =\s*\n?\s*"[^"]*\bpy-2\b/.test(chipSrc),
    "the quiz chip shares the text chip's vertical padding, so standing out by colour does not also change the row's height",
  );

  // ── 10c. The header row stays on one line ────────────────────────────────
  //
  // MEASURED, not estimated, in the browser against the real chip font
  // (500 18px Geist):
  //
  //     logo 187 + Home 107 + Join quiz 135 + Progress 133 + Revise 114
  //     + search 46 + theme 46 + menu 46 + Pixel 45 + gaps 64  =  923px
  //
  //     ...against a content column of 1104px at 1440px wide, and 976px at
  //     1024px wide. It fits at both.
  //
  // Adding Dashboard, Account and Log out back to the visible row takes it to
  // 1346px, which is what made it wrap onto three ragged lines and prompted
  // this fix. Those three belong inside the menu. This check makes putting
  // them back a test failure rather than something noticed in a screenshot
  // three weeks later.
  const headerSrc = readFileSync("app/components/SiteHeader.tsx", "utf8");
  const menuStart = headerSrc.indexOf("<MobileMenu>");
  expect(menuStart > -1, "SiteHeader still renders the menu");
  for (const [label, needle] of [
    ["Dashboard", '"/dashboard"'],
    ["Account", '"/account"'],
    ["Log out", "action={logout}"],
  ]) {
    const first = headerSrc.indexOf(needle);
    expect(
      first > menuStart,
      `${label} lives inside the menu, not the visible header row — the row measured 923px without it and 1346px with it, against a 1104px column`,
    );
    expect(
      headerSrc.indexOf(needle, first + 1) === -1,
      `${label} appears exactly once in the header, so there is no duplicate copy at any screen width`,
    );
  }
  // ── 10d. The header sizes itself by its own width, not the window's ──────
  //
  // This header renders inside page columns from max-w-md (448px) to max-w-7xl
  // (1280px). A viewport breakpoint like `sm:` is true on a 1440px screen no
  // matter how narrow the column actually is, which is how the quiz join page
  // ended up rendering the full wide header inside 448px and wrapping it onto
  // five rows.
  //
  // So every breakpoint in this file must be a CONTAINER query. A viewport one
  // sneaking back in would reintroduce the bug on whichever narrow page nobody
  // happened to open that week.
  expect(headerSrc.includes("@container"), "the header is its own query container");
  {
    const classNames = [...headerSrc.matchAll(/className=(?:"([^"]*)"|\{`([^`]*)`\})/g)]
      .map((m) => m[1] ?? m[2])
      .join(" ");
    const viewportVariant = classNames.match(/(?:^|\s)(sm|md|lg|xl|2xl):/);
    expect(
      viewportVariant === null,
      `header uses only container queries — found viewport variant "${viewportVariant?.[1]}:", which ignores how much room the header actually has`,
    );
  }

  // The wordmark must not be allowed to break in half again.
  expect(
    /whitespace-nowrap[^"]*text-2xl|text-2xl[^"]*whitespace-nowrap/.test(headerSrc),
    "the Revision Lab wordmark cannot wrap onto two lines",
  );

  // ── 10e. No promises about the future of pricing ─────────────────────────
  //
  // The footer used to say "Free, and always will be", and the account page —
  // directly above two Upgrade buttons — said "stays free, always". There are
  // plans to charge for something eventually, which made both of them
  // commitments the site could not keep.
  //
  // Saying the site IS free is fine, and true. Saying it always WILL be is a
  // promise about a decision nobody has made. This check only objects to the
  // second kind. Comments are stripped first, so the explanations of why this
  // exists do not trip the rule that they explain.
  {
    const uiFiles = listFiles("app").filter((f) => f.endsWith(".tsx"));
    const promise =
      /\balways\s+(?:will\s+be\s+)?free\b|\bfree\s*,?\s*(?:and\s+)?always\b|\bfree\s+forever\b|\bforever\s+free\b|\balways\s+will\s+be\b/i;
    for (const file of uiFiles) {
      const visible = readFileSync(file, "utf8")
        .replace(/\/\*[\s\S]*?\*\//g, " ")
        .replace(/^\s*\/\/.*$/gm, " ");
      const hit = visible.match(promise);
      expect(
        hit === null,
        `${file} promises "${hit?.[0]}" — the site may be free today, but it cannot promise to stay free when there are plans to charge`,
      );
    }
  }

  // ── 10b. Things a SETTING can switch off ─────────────────────────────────
  //
  // Two bugs found on 2026-09-08 had the same shape: a feature that worked
  // perfectly on the machine it was written on, and did not exist at all on
  // someone else's — not because of their browser, but because of a setting
  // their browser reports.
  //
  //   - The ladder mascot "did not climb in Edge". Edge was innocent: that
  //     laptop had Windows' animation effects turned off, so every browser on
  //     it reports `prefers-reduced-motion: reduce`, and the component's
  //     reduced-motion branch parked the mascot and returned.
  //   - "Choose a topic →" on the homepage cards sat at `opacity-0` until
  //     `group-hover`. A touchscreen cannot hover, so no phone visitor was
  //     ever shown that line.
  //
  // Both are invisible from a developer's own machine, which is exactly why
  // they are worth a check rather than a memory.
  console.log("Checking what a phone or an accessibility setting still gets...");

  // Reduced motion must remove the ANIMATION, not the feature. The ladder's
  // branch has to keep following the reader, which means it listens for scroll.
  const ladderSrc = readFileSync("app/components/LadderCompanion.tsx", "utf8");
  const reducedBranch = ladderSrc.slice(ladderSrc.indexOf("if (reduceMotion)"));
  const branchEnd = reducedBranch.indexOf("\n    }\n");
  const reducedBody = reducedBranch.slice(0, branchEnd > 0 ? branchEnd : 800);
  expect(
    reducedBody.includes('addEventListener("scroll"'),
    "under reduced motion the ladder still follows the page — it drops the " +
      "animation, not the feature (see the note in LadderCompanion.tsx)",
  );

  // Content revealed only on hover is content a touchscreen never sees.
  // `.hover-reveal` is the sanctioned way to do it: visible by default, hidden
  // only inside `@media (hover: hover)`.
  for (const file of listFiles("app").filter((f) => f.endsWith(".tsx"))) {
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(/className="([^"]*group-hover:opacity-[^"]*)"/g)) {
      const cls = match[1];
      if (!/\bopacity-0\b/.test(cls)) continue; // fading between two visible states is fine
      expect(
        false,
        `${file} hides text at opacity-0 until group-hover — a touchscreen ` +
          `cannot hover, so nobody on a phone ever sees it. Use .hover-reveal ` +
          `(app/globals.css) instead: "${cls.slice(0, 60)}"`,
      );
    }
  }

  const css = readFileSync("app/globals.css", "utf8");
  expect(
    css.includes(".hover-reveal") && css.includes("(hover: hover)"),
    ".hover-reveal is defined and gated on `hover: hover`, not on screen width",
  );

  // ── 10c. Teacher Tools says what it is ───────────────────────────────────
  //
  // Every page under /teacher-tools ends with "More coming soon." — Matthew
  // asked for it on all of them, and it is load-bearing: the section opens with
  // one tool in it, and a page showing one feature and saying nothing else
  // reads as finished rather than as a beginning.
  //
  // The reason this is a check and not a note: the promise is only kept while
  // somebody remembers it on every page they add next. That is exactly the kind
  // of thing that quietly stops being true.
  for (const file of listFiles("app/teacher-tools").filter((f) => f.endsWith("page.tsx"))) {
    const text = readFileSync(file, "utf8");
    expect(
      text.includes("<MoreComingSoon />"),
      `${file} ends with <MoreComingSoon /> — every Teacher Tools page says ` +
        `"More coming soon."`,
    );
  }

  // ── 11. Articles are chosen, not typed ───────────────────────────────────
  //
  // "Try a English test" shipped and was found by an outside reviewer rather
  // than by us. It is one character, in the exact place a new visitor decides
  // whether this site is serious.
  const textSrc = readFileSync("app/lib/text.ts", "utf8");
  expect(
    /return \/\^\[aeiou\]\/\.test\(first\) \? "an" : "a";/.test(textSrc),
    "indefiniteArticle picks the article from the word",
  );
  for (const file of ["app/subjects/[subject]/page.tsx"]) {
    const text = readFileSync(file, "utf8");
    expect(
      !/\b(a|A)\s+\{(subject|topic)\./.test(text),
      `${file} does not hard-code "a" before an interpolated name — use indefiniteArticle()`,
    );
  }

  // ── 12. Interactive diagrams stay off paper, and stay legible ────────────
  //
  // Three invariants that are invisible from the machine the code is written
  // on, which is what a check is for.
  {
    const printPage = readFileSync("app/subjects/[subject]/[topic]/print/page.tsx", "utf8");
    // ⚠️ Tests the PROP, not the word. The first version searched the whole
    // file for "interactive" and fired on a comment two hundred lines away
    // about practice questions — the same trap the Tailwind-interpolation
    // check fell into once. The fix is a more precise check, never a weaker
    // one: this looks inside the <DiagramRow ...> tag itself.
    const diagramRowTags = [...printPage.matchAll(/<DiagramRow\b[^>]*>/g)].map((m) => m[0]);
    expect(diagramRowTags.length > 0, "the print page still renders diagrams at all");
    expect(
      diagramRowTags.every((tag) => !/\binteractive\b/.test(tag)),
      "the print page renders STATIC diagrams — a handle you cannot drag is a " +
        "blue dot on paper, and the live readout would print whatever number " +
        "the diagram happened to start at, which a student might copy down",
    );

    // Every interactive name must be a real diagram. TypeScript already says
    // so; this catches the registry being edited without a typecheck, and says
    // plainly what went wrong when it does.
    const registry = readFileSync("app/components/diagrams/index.tsx", "utf8");
    const known = new Set(
      [...(registry.split("export const DIAGRAMS = {")[1] ?? "")
        .split("} as const;")[0]
        .matchAll(/^\s*"([a-z0-9-]+)":/gm)].map((m) => m[1]),
    );
    const interactive = readFileSync("app/components/diagrams/interactive/index.tsx", "utf8");
    const names = [...(interactive.split("export const INTERACTIVE")[1] ?? "")
      .matchAll(/^\s*"([a-z0-9-]+)":/gm)].map((m) => m[1]);
    expect(names.length > 0, "there is at least one interactive diagram");
    for (const name of names) {
      expect(known.has(name), `interactive diagram "${name}" is a real diagram name`);
    }

    // The teacher-tools library forces a WHITE panel in both themes. For a
    // year it forced only the background, so in dark mode all 142 diagrams
    // drew near-white ink on it and could not be seen — see "Diagram ink" in
    // globals.css. `diagram-light` is what actually makes the panel light.
    const libraryPage = readFileSync(
      "app/teacher-tools/diagrams/[subject]/[topic]/page.tsx",
      "utf8",
    );
    expect(
      /diagram-light bg-white/.test(libraryPage),
      "the teacher-tools diagram panel carries `diagram-light` beside `bg-white`, " +
        "so the INK is light-theme too and the diagrams are visible in dark mode",
    );
    const css = readFileSync("app/globals.css", "utf8");
    expect(
      /\.dark \.diagram-light/.test(css),
      "`.diagram-light` re-asserts the light palette even inside `.dark`",
    );
    // Every diagram file, not just shared.tsx: nine more `dark:fill-blue-400`
    // dots were sitting in maths, physics and biology, each one invisible on
    // the library's white panel in dark mode for exactly the same reason.
    for (const file of listFiles("app/components/diagrams").filter((f) => f.endsWith(".tsx"))) {
      const text = readFileSync(file, "utf8")
        .split("\n")
        .filter((l) => !l.trim().startsWith("//") && !l.trim().startsWith("*"))
        .join("\n");
      expect(
        !/dark:(stroke|fill|text)-/.test(text),
        `${file} takes its colours from CSS variables, not \`dark:\` variants — ` +
          "a `dark:` variant asks the PAGE what colour to be, and the teacher- " +
          "tools panel is white whatever the page is doing",
      );
    }
  }

  // ── 13. A graph with an unnamed axis ────────────────────────────────────
  //
  // Matthew: "on the scientific diagrams where there are y and x axis name
  // them". Every board gives a mark for labelling an axis with the quantity
  // AND its unit, and a revision diagram that shows "v" against "t" models the
  // version that scores nothing.
  //
  // The rule is DERIVED rather than a list of graph diagrams to keep in step:
  // an axis pair is an L — a vertical line and a horizontal one meeting at a
  // corner — and that is a shape a regex can find in the path data. Any
  // function that draws one, or calls <Axes>, must also name both axes. A new
  // graph diagram is therefore covered the day it is written, which a
  // hand-maintained list never is.
  {
    const AXIS_L = /d=(?:"|\{`)M (\d+) (\d+) L \1 (\d+) L (\d+) \3/;
    // ⚠️ FAIL-CLOSED, AND THE EXEMPTIONS ARE THE POINT.
    //
    // An L of two strokes is an axis pair on a graph and the left-and-bottom
    // of a box everywhere else, and no regex can tell those apart. Guessing
    // in the direction of "probably not a graph" would let a new graph ship
    // with bare axes, which is the failure this exists to stop — so anything
    // that draws an L must either name two axes or be named here, with a
    // reason. A new GRAPH is caught automatically; only a new non-graph
    // L-shape costs a line, and the failure message says exactly which
    // function to look at.
    const NOT_A_GRAPH = new Set([
      "Chromatography",     // the solvent front and baseline of a TLC plate
      "ElectrolysisCell",   // the wall and floor of the beaker
      "FlowchartSelection", // the routing lines between decision boxes
      "PressureInLiquids",  // the side and base of the container
      "ThreePinPlug",       // the plug casing
    ]);
    for (const file of listFiles("app/components/diagrams").filter((f) => f.endsWith(".tsx"))) {
      const source = readFileSync(file, "utf8");
      const parts = source.split(/\nexport function (\w+)/);
      for (let i = 1; i < parts.length; i += 2) {
        const [name, body] = [parts[i], parts[i + 1]];
        const code = body
          .split("\n")
          .filter((l) => !l.trim().startsWith("//") && !l.trim().startsWith("*") && !l.trim().startsWith("{/*"))
          .join("\n");
        const drawsAxes = AXIS_L.test(code) || /<Axes\b/.test(code);
        if (!drawsAxes || NOT_A_GRAPH.has(name)) continue;
        expect(
          /<AxisNames\b/.test(code) || /<Axes[^/>]*\bx=[^/>]*\by=/.test(code),
          `${name} draws a pair of axes and must name both of them — an axis ` +
            "with a letter on it, or nothing, is an axis a student loses the " +
            "labelling mark for",
        );
      }
    }
  }

  // ── 14. Every diagram is named, and explained ───────────────────────────
  //
  // Matthew: "every diagram has its name at the top of it and has an
  // explanation at the bottom why it works this way."
  //
  // COMPLETENESS IS NOT CHECKED HERE, on purpose — `DIAGRAM_NOTES` is typed
  // `Record<DiagramName, DiagramNote>`, so a missing entry or an entry for a
  // name that is not a diagram is a compile error before this script runs. A
  // type is a better guard than a check: it cannot be forgotten and it fires
  // in the editor. What a type cannot see is whether the words are any good,
  // which is everything below.
  {
    const notes = readFileSync("app/components/diagrams/notes.ts", "utf8");
    const entries = [
      ...notes.matchAll(/^ {2}"([a-z0-9-]+)": \{\n\s+title: "((?:[^"\\]|\\.)*)",\n\s+why: "((?:[^"\\]|\\.)*)",/gm),
    ].map(([, slug, title, why]) => ({ slug, title, why: why.replace(/\\"/g, '"') }));

    expect(entries.length > 100, `notes.ts parsed ${entries.length} entries`);

    // The captions, pulled out of the subject files the same way the registry
    // maps a name to a component — so "does the explanation just repeat the
    // caption" can actually be asked.
    const components = {};
    for (const file of listFiles("app/components/diagrams").filter((f) => /\/(maths|physics|chemistry|biology|computer-science)\.tsx$/.test(f))) {
      const parts = readFileSync(file, "utf8").split(/\nexport function (\w+)/);
      for (let i = 1; i < parts.length; i += 2) {
        const caption = parts[i + 1].match(/caption=(?:"([^"]*)"|\{"([^"]*)"\})/);
        if (caption) components[parts[i]] = caption[1] ?? caption[2];
      }
    }
    const registry = readFileSync("app/components/diagrams/index.tsx", "utf8");
    const captionOf = {};
    for (const [, slug, , comp] of registry.matchAll(/"([a-z0-9-]+)":\s*(\w+)\.(\w+),/g)) {
      captionOf[slug] = components[comp];
    }

    const seenTitles = new Map();
    for (const { slug, title, why } of entries) {
      const key = title.toLowerCase();
      expect(
        !seenTitles.has(key),
        `"${title}" is used by ${slug} alone — two pictures sharing one name is not a name ` +
          `(also on ${seenTitles.get(key)})`,
      );
      seenTitles.set(key, slug);

      const words = title.trim().split(/\s+/).length;
      expect(words >= 2 && words <= 5, `${slug}: the title is 2-5 words, not ${words} ("${title}")`);
      expect(!/[.!?,;:]$/.test(title), `${slug}: the title has no trailing punctuation ("${title}")`);
      // ⚠️ THERE IS DELIBERATELY NO "the title must differ from the slug" CHECK.
      // The first version had one, on the reasoning that a de-kebabed key is a
      // key rather than a name. It immediately fired on "Series circuit" and
      // "Parallel circuit", which are exactly what an exam paper calls them —
      // and of course they match, because the slug was NAMED AFTER the diagram.
      // A check that fires on the correct answer is worse than no check: it
      // teaches you to write a worse title to keep the build green.

      expect(why.length >= 150 && why.length <= 400, `${slug}: the explanation is 150-400 characters, not ${why.length}`);
      // It is about the maths, not about the drawing — the reader can already
      // see the drawing.
      // ⚠️ "image" is NOT in this list, and was to begin with. It caught
      // "the image is the same size and shape, only flipped" and "a smooth
      // mirror sends parallel rays away still parallel and you see a clear
      // image" — in reflection, rotation, enlargement and optics an image is
      // the technical term for the thing being described, not a way of talking
      // about the drawing. Same lesson as above: narrow the check, do not
      // reword correct physics to satisfy it.
      expect(!/\b(diagram|picture)\b/i.test(why), `${slug}: the explanation talks about the subject, not about the drawing`);
      expect(!/\^|\*/.test(why), `${slug}: powers are written as superscripts, never with ^ or *`);
      expect(
        !why.toLowerCase().startsWith(title.toLowerCase()),
        `${slug}: the explanation does not open by repeating the title, which is directly above it`,
      );
      expect(
        !/^(this |here |as you can see|the diagram)/i.test(why),
        `${slug}: the explanation starts with the reason, not with "this shows"`,
      );

      // ⚠️ THE RULE IS ALREADY ON SCREEN. The caption sits between the picture
      // and this text and states what to remember; the explanation exists to
      // say WHY, and one that paraphrases the caption has added nothing while
      // looking like it has. Six consecutive shared words is well past
      // coincidence for sentences this short.
      const caption = captionOf[slug];
      if (caption) {
        const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(Boolean);
        const cap = norm(caption);
        const text = norm(why).join(" ");
        let echoed = "";
        for (let i = 0; i + 6 <= cap.length; i += 1) {
          const run = cap.slice(i, i + 6).join(" ");
          if (text.includes(run)) echoed = run;
        }
        expect(!echoed, `${slug}: the explanation gives a reason rather than repeating the caption ("${echoed}")`);
      }
    }

    // And both actually reach a page.
    const row = readFileSync("app/components/diagrams/index.tsx", "utf8");
    expect(/DIAGRAM_NOTES\[name\]/.test(row) && /note\.title/.test(row) && /note\.why/.test(row),
      "DiagramRow draws the diagram's name above it and the reason below it");
    const library = readFileSync("app/teacher-tools/diagrams/[subject]/[topic]/page.tsx", "utf8");
    expect(/note\.title/.test(library) && /note\.why/.test(library),
      "the diagram library shows each diagram's own name and reason, not just the heading it is filed under");
  }

  // ── 15. The bugs from the 2026-09-11 hunt, so they cannot come back ─────
  {
    // ⚠️ `.tap-pad` ON A ROW THAT WRAPS. THIS HAS NOW SHIPPED TWICE.
    //
    // `.tap-pad` grows a link's hit box to 42px using padding plus an equal
    // negative margin, so the layout row stays ~20px tall. Two wrapped lines
    // 20px apart with 42px boxes overlap by 22, and the later link wins the
    // hit test — a real tap on the visible words "Teacher tools" navigated to
    // the subject page instead, at 320, 360 and 390px.
    //
    // The 2026-09-08 phone pass hit exactly this in the footer, fixed it, and
    // wrote the rule into globals.css: only safe on a link standing alone on
    // its line. A new file reintroduced it three days later, because a comment
    // in another file is not a check. This is the check.
    for (const file of listFiles("app").filter((f) => f.endsWith(".tsx"))) {
      const source = readFileSync(file, "utf8");
      // Only class strings that actually wrap AND actually contain a tap-pad
      // child are at risk; a nowrap row cannot produce a second line.
      for (const [, classes] of source.matchAll(/className=(?:"([^"]*)"|\{`([^`]*)`\})/g)) {
        const value = classes ?? "";
        if (!/\bflex-wrap\b/.test(value)) continue;
        // Does the element this class sits on contain a .tap-pad link? Look at
        // the 900 characters after it, which comfortably covers a nav row.
        const at = source.indexOf(value);
        const region = source.slice(at, at + 900);
        if (!/\btap-pad\b/.test(region)) continue;
        expect(
          /\bgap-y-\d/.test(value) || /\bgap-\d/.test(value),
          `${file}: a wrapping row containing .tap-pad links needs a ROW gap — ` +
            "the padded hit boxes are 42px tall and reach into the line below, " +
            "so a tap on one link follows another (class: " + value.slice(0, 80) + ")",
        );
      }
    }

    // ⚠️ `touch-action` ON AN SVG CHILD DOES NOTHING.
    //
    // It lived on the handle's <g> for the whole life of the feature. A
    // non-root SVG element generates no CSS box, so every browser ignored the
    // declaration — and a finger drag moved the point AND scrolled the page
    // under it, on exactly the phones and classroom touchscreens the feature
    // exists for. Verified against a control page: honoured on a div and on a
    // root <svg>, ignored on a <g>.
    for (const file of listFiles("app/components/diagrams").filter((f) => f.endsWith(".tsx"))) {
      // ⚠️ COMMENTS ARE STRIPPED FIRST, and the first version of this check
      // did not do that — so it PASSED while the bug was reinstated. The
      // comment explaining the fix says "on the root `<svg>` in
      // InteractiveFigure now", and that `<svg>` split the source such that
      // the offending className landed in a block beginning "svg". The check
      // read its own explanation and was satisfied by it.
      //
      // Same failure and same fix as the Tailwind-interpolation rule, which
      // once fired on the comment describing the trap: strip the prose, keep
      // the rule strict.
      const source = readFileSync(file, "utf8")
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/^\s*\/\/.*$/gm, "");

      // The only element allowed to carry it is a root <svg>: everything else
      // in an SVG tree has no CSS box, so the declaration is inert.
      for (const block of source.split(/<(?=[a-zA-Z])/)) {
        if (!/touch-none|touchAction/.test(block)) continue;
        const tag = block.slice(0, 16).split(/[\s>/]/)[0];
        expect(
          tag === "svg",
          `${file}: touch-action belongs on the root <svg>, not on <${tag}> — ` +
            "an SVG child has no CSS box, so the browser ignores it and the page " +
            "scrolls under the finger while the point follows it",
        );
      }
    }

    // A draggable diagram must not print its controls: Ctrl+P on an ordinary
    // topic page is the discoverable way to print, and that page DOES ask for
    // the interactive version.
    {
      const parts = readFileSync("app/components/diagrams/interactive/parts.tsx", "utf8");
      const css = readFileSync("app/globals.css", "utf8");
      expect(/diagram-controls/.test(parts), "the drag hint and Reset button carry `diagram-controls`");
      expect(
        /@media print[\s\S]*?\.diagram-controls\s*\{[\s\S]*?display:\s*none/.test(css),
        "`.diagram-controls` is hidden in print — a Reset button cannot be pressed on paper",
      );
    }

    // The library search must index the name the page actually prints, or a
    // teacher who has seen a diagram cannot find it by what they saw.
    {
      const index = readFileSync("app/lib/teacher-tools.ts", "utf8");
      const ui = readFileSync("app/teacher-tools/DiagramSearch.tsx", "utf8");
      expect(
        /DIAGRAM_NOTES\[entry\.name\]\.title/.test(index),
        "the search index carries each diagram's real title, not just its de-kebabed slug",
      );
      expect(/d\.title\.toLowerCase\(\)\.includes\(q\)/.test(ui), "a search matches the diagram's real title");
      expect(/\{d\.title\}/.test(ui), "a search result is headed by the same name the card shows");
    }

    // The site's own reduce-motion switch has to reach the JavaScript-driven
    // motion too, not only the CSS animations.
    {
      const ladder = readFileSync("app/components/LadderCompanion.tsx", "utf8");
      expect(
        /a11y-reduce-motion/.test(ladder),
        "the ladder honours the site's own Reduce motion switch, not only the OS setting — " +
          "the switch's own wording offers it as a stand-in for that setting",
      );
      const css = readFileSync("app/globals.css", "utf8");
      expect(
        /\.a11y-reduce-motion\s*\{[^}]*scroll-behavior:\s*auto/.test(css),
        "the site's own Reduce motion switch also turns off smooth scrolling",
      );
    }
  }

  console.log("");
  if (failures === 0) {
    console.log(`All ${checks} security and account checks passed.`);
  } else {
    console.error(`${failures} of ${checks} security and account checks FAILED.`);
    process.exitCode = 1;
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}
