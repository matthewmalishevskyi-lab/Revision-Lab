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

  // ⚠️ THE RULE IS NOW CHECKED ACROSS EVERY ACTION FILE, NOT JUST ONE.
  //
  // `content-report-actions.ts` says in its own comment that "there is a
  // permanent check that fails the build if one of them ever reads an email
  // out of a form" — and there was not. The check below only ever read
  // account-actions.ts, so the rule it claims to enforce site-wide was
  // enforced on one file out of nine. An audit found the rule was actually
  // being kept everywhere; that is luck, not assurance, and the next action
  // file is the one that would break it.
  //
  // Identity in this codebase comes from the signed session cookie and from
  // nowhere else. An action that takes a user id or an email as an argument is
  // an action anyone can call as anyone.
  for (const file of [...new Set(listFiles("app").filter(
    (f) => /(-actions|actions)\.ts$/.test(f),
  ))]) {
    const src = readFileSync(file, "utf8");
    const stripped = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");

    // ⚠️ AN AUTHENTICATION ENTRY POINT IS EXEMPT, AND MUST PROVE IT IS ONE.
    //
    // The first version of this rule failed on actions.ts and
    // reset-actions.ts, and it was the rule that was wrong: logging in,
    // registering and asking for a reset link all take an email from a form
    // BECAUSE THERE IS NO SESSION YET. That is the whole point of them. A
    // check that fires on the correct answer is worse than no check, which
    // this project has now recorded five separate times.
    //
    // So the exemption is fail-closed rather than a list of filenames: a file
    // may read an email from a form only if it actually does the thing that
    // establishes identity — checks a password, creates the account, or spends
    // a reset token. Any other action file that starts reading emails from
    // forms still fails, which is the case worth catching.
    const isAuthEntryPoint =
      /verifyPassword|createUser|consumeResetToken|spendPasswordCheckTime/.test(stripped);

    expect(
      isAuthEntryPoint ||
        !/formData\.get\(\s*["'](email|userId|user_id)["']\s*\)/.test(stripped),
      `${file} reads an identity out of a form — it must come from the session cookie`,
    );
    // An exported action whose first parameter is named like an identity.
    const idArg = stripped.match(
      /export async function \w+\(\s*(userId|user_id|email|accountId)\b/,
    );
    expect(
      idArg === null,
      `${file} exports an action taking ${idArg?.[1]} as an argument — anyone could call it as anyone`,
    );
  }

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

  // ── Tap targets whose height depends on text that a phone hides ──────────
  //
  // ⚠️ chipStyles.ts works its heights out in a comment — "text-lg line-height
  // 28 + py-2 (8+8) + border (1+1) = 46" — and that arithmetic is correct and
  // was measured. It is also only true WHILE THE TEXT IS THERE. Several of
  // these chips hide their words below @xl and show just an icon, and with no
  // 28px line box the chip collapses to 38px: under Apple's 44 minimum, on a
  // phone, on the header every page carries. A height derived from content is
  // a height that changes when the content is hidden, which is exactly the
  // case a comment full of arithmetic cannot see.
  //
  // min-h-11 costs nothing where the text is visible (46 > 44) and is the
  // floor for everywhere else. Measured after adding it: the header is still
  // exactly 46px at 320, 390, 768, 1400 and 1536px, with no overflow.
  {
    const chips = readFileSync("app/components/chipStyles.ts", "utf8");
    for (const name of ["chipClasses", "quizChipClasses"]) {
      const decl = chips.slice(chips.indexOf(`export const ${name} =`));
      const value = decl.slice(0, decl.indexOf(";"));
      expect(/\bmin-h-11\b/.test(value),
        `${name} has no min-h-11, so it drops under 44px on a phone the moment its text is hidden`);
    }
  }

  // The multiple-choice answer buttons: measured at 43px on an iPhone SE, one
  // pixel under, on the control a phone user taps more than any other on the
  // site. Both components, because a test is tapped faster than practice.
  for (const file of ["app/components/Practice.tsx", "app/components/MockExam.tsx"]) {
    const src = readFileSync(file, "utf8");
    const button = src.slice(src.indexOf("rounded-xl border px-3.5 py-2.5") - 240);
    expect(/min-h-11[^`]*rounded-xl border px-3\.5 py-2\.5/.test(button.slice(0, 400)),
      `${file}: the multiple-choice answer buttons have no min-h-11 and come out at 43px on a phone`);
  }

  // ── "Explain further" stays on the server ────────────────────────────────
  //
  // lib/explainFurther.ts matches a key-fact block against a whole topic's
  // definitions, mistakes and worked examples, so it touches entire topics. A
  // Client Component importing it would pull the content registry into the
  // browser bundle — the same trap calculator-topics.ts documents, and the
  // same shape as the dark-mode bug where importing one constant from
  // SiteHeader dragged the session code into the client. The page does the
  // matching and passes plain strings down; a TYPE import is fine.
  {
    const clientImportsExplain = listFiles("app").filter((f) => /\.tsx?$/.test(f)).filter((f) => {
      const src = readFileSync(f, "utf8");
      return /^["']use client["']/m.test(src) && /^import (?!type )[^\n]*explainFurther["']/m.test(src);
    });
    expect(clientImportsExplain.length === 0,
      `explainFurther reads whole topics and is imported by a client file: ${clientImportsExplain.join(", ")}`);

    // ⚠️ And it must stay a <details>, not a React disclosure. There can be
    // ten of these on a page and 1,278 across the site; as a Client Component
    // every one of them ships JavaScript to do what the browser already does,
    // and loses working-before-hydration, Ctrl+F finding closed text, and a
    // correct button role with aria-expanded for free.
    const efRaw = readFileSync("app/components/ExplainFurther.tsx", "utf8");
    // ⚠️ COMMENTS STRIPPED FIRST, AND BOTH RULES BELOW FAILED TO FAIL WITHOUT
    // IT. The file explains at length why it is a <details> and why the button
    // carries min-h-11 — so a regex over the raw source matched the PROSE and
    // passed happily on code where both had been removed. Found by sabotage,
    // not by reading. This is the third time in this project: the Tailwind
    // interpolation rule fired on the comment warning about interpolation, and
    // the touch-action rule read the sentence describing its own fix. Strip
    // the comments, keep the rule strict.
    const ef = efRaw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    expect(!/^["']use client["']/m.test(ef),
      "ExplainFurther has become a Client Component — it is a <details> precisely so it ships no JavaScript");
    expect(/<details/.test(ef) && /<summary/.test(ef),
      "ExplainFurther no longer uses <details>/<summary>, so the browser is no longer doing the accessibility for it");
    expect(/min-h-11/.test(ef), "the Explain further button is a tap target and needs min-h-11");
  }

  // ⚠️ A flex child will not shrink below its own content unless told it may,
  // and the topic hero sits inside overflow-hidden — so a long title was not
  // merely cramped on a 320px screen, it was CUT OFF AND GONE. Same rule, same
  // fix and the second time: AuthShell's top bar printed "Back to home" across
  // the wordmark for exactly this reason.
  {
    const hero = readFileSync("app/subjects/[subject]/[topic]/page.tsx", "utf8");
    const row = hero.slice(hero.indexOf("flex items-center gap-4 px-5 py-6"));
    expect(row.length > 0 && /<div className="min-w-0">/.test(row.slice(0, 900)),
      "the topic title's text block has no min-w-0, so a long title is clipped away on a narrow screen");
    expect(/text-2xl font-bold tracking-tight sm:text-4xl/.test(row.slice(0, 1400)),
      "the topic title does not step its type down on a phone, so a long one cannot fit");
  }

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

    // ⚠️ A PRINT ROUTE IS A DOCUMENT, NOT A PAGE, AND IS EXEMPT.
    //
    // This rule fired on the printable worksheet the moment it was written, and
    // the check was right to fire and wrong to be obeyed: "More coming soon."
    // photocopied onto a sheet handed to thirty students is nonsense. The
    // promise is aimed at a teacher browsing a section that has two tools in
    // it, and nobody browses a worksheet.
    //
    // Written as an exemption rather than by narrowing the file list, so it
    // stays FAIL-CLOSED: a print route must still be a real print route to
    // skip the rule, and every other page added under Teacher Tools is caught
    // exactly as before. That is the same shape as the axis-naming rule, and
    // the fourth time this project has narrowed a check rather than worsen the
    // thing the check fired on.
    const isPrintRoute = file.includes("/print/");
    if (isPrintRoute) {
      expect(
        text.includes("window.print") || text.includes("PrintButton"),
        `${file} is exempt from "More coming soon." as a print route, so it ` +
          `must actually be one — no print control found`,
      );
      continue;
    }

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

  // ── The accessibility switches' knob sits inside its track ────────────────
  // The switch's tap area is grown with invisible vertical padding (py-N), and
  // the knob is positioned against the WHOLE button — so its `top` has to be
  // the padding plus its gap inside the track. When the padding went in and
  // the knob did not move, it rode 6px high and poked out of the track.
  {
    const src = readFileSync("app/components/AccessibilityPanel.tsx", "utf8");
    const step = (cls) => Number((cls ?? "0").replace("-", "."));
    const pad = step(src.match(/className=\{`relative[^`]*?\bpy-([\d.-]+)/)?.[1]);
    const top = step(src.match(/absolute top-([\d.-]+) h-6 w-6/)?.[1]);
    const left = step(src.match(/checked \? "left-[\d.]+" : "left-([\d.]+)"/)?.[1]);
    expect(pad > 0 && top === pad + left,
      `the accessibility switch knob is off-centre: top-${top} but the track starts at py-${pad} and the knob sits left-${left} in from its edge`);
  }

  // ── Developer early access ────────────────────────────────────────────────
  // The code must never be written in plain text anywhere in app/ — this repo
  // is public. The check cannot hold the code either, so it tests every
  // code-shaped token against the stored scrypt hash, after a 1-in-256
  // prefilter (two hex characters of a sha256, which says nothing useful about
  // the code) so that only a handful of tokens pay for a slow scrypt.
  {
    const { createHash, scryptSync, timingSafeEqual } = await import("node:crypto");
    const devSrc = readFileSync("app/lib/dev-access.ts", "utf8");
    const stored = devSrc.match(/DEV_CODE_HASH =\s*"([0-9a-f]+):([0-9a-f]+)"/);
    expect(stored, "dev-access.ts stores the developer code as a salted scrypt hash");
    const PREFIX = "a2";
    const tokens = new Set();
    for (const file of listFiles("app").filter((f) => /\.(ts|tsx|css)$/.test(f))) {
      for (const t of readFileSync(file, "utf8").match(/\b[A-Za-z0-9]{6,12}\b/g) ?? []) {
        if (/[A-Za-z]/.test(t) && /\d/.test(t)) tokens.add(t.toUpperCase());
      }
    }
    const leaked = stored ? [...tokens].filter((t) =>
      createHash("sha256").update(t).digest("hex").startsWith(PREFIX) &&
      timingSafeEqual(scryptSync(t, stored[1], 64), Buffer.from(stored[2], "hex"))) : [];
    expect(leaked.length === 0, "the developer code appears in plain text somewhere in app/");

    const page = readFileSync("app/early-access/page.tsx", "utf8");
    const guard = page.indexOf("hasDevAccess(user.id)");
    expect(guard > 0 && guard < page.indexOf("return ("),
      "/early-access checks hasDevAccess before it renders anything");
    expect(!readFileSync("app/robots.ts", "utf8").includes("early-access"),
      "/early-access is not advertised in the public robots.txt");
    const action = readFileSync("app/lib/dev-access-actions.ts", "utf8");
    expect(action.includes("getSessionUserId()") && action.includes("recordFailedDevAccess"),
      "the unlock action takes the user from the session and counts wrong codes");
    const clientImportsArt = listFiles("app").filter((f) => /\.tsx?$/.test(f)).filter((f) => {
      const src = readFileSync(f, "utf8");
      return /^["']use client["']/m.test(src) && /from ["'][^"']*early-access\/art["']|from ["']\.\/art["']/.test(src);
    });
    expect(clientImportsArt.length === 0, `the game art is imported by a client file: ${clientImportsArt.join(", ")}`);

    // The playable game. Its page must check access before it builds any
    // questions or renders the game, and the question builder reads the whole
    // content registry, so a client file may only import its TYPE.
    const play = readFileSync("app/early-access/play/page.tsx", "utf8");
    const playGuard = play.indexOf("hasDevAccess(user.id)");
    expect(playGuard > 0 && playGuard < play.indexOf("buildGameQuestions(") && playGuard < play.indexOf("return ("),
      "/early-access/play checks hasDevAccess before it builds questions or renders the game");
    const clientImportsQuestions = listFiles("app").filter((f) => /\.tsx?$/.test(f)).filter((f) => {
      const src = readFileSync(f, "utf8");
      return /^["']use client["']/m.test(src) && /^import (?!type )[^\n]*game-questions["']/m.test(src);
    });
    expect(clientImportsQuestions.length === 0, `the game question builder is imported by a client file: ${clientImportsQuestions.join(", ")}`);
  }

  // ── The search index does not go stale ────────────────────────────────────
  //
  // lib/siteSearch.ts is a HAND-WRITTEN list of the site's pages, which is the
  // one kind of list this codebase normally refuses to keep (see the file's own
  // header for why it has to be one here). A hand-written list of routes rots
  // in two directions: an entry can point at a page that no longer exists, and
  // a page can be added that nobody ever adds to the list. Both are silent —
  // the search box simply never mentions the new feature, which is exactly the
  // problem it was widened to fix.
  console.log("Checking the search index against the real routes...");
  {
    execFileSync(process.execPath, [
      TSC, "app/lib/siteSearch.ts",
      "--outDir", out, "--module", "commonjs", "--target", "es2022",
      "--moduleResolution", "node", "--skipLibCheck",
    ], { stdio: "pipe" });
    const siteSearch = require(join(out, "siteSearch.js"));
    const { SEARCHABLE_PAGE_HREFS, searchSite, suggestions, SEARCH_INDEX } = siteSearch;

    // Every route the app has, dynamic segments included.
    //
    // ⚠️ THE FIRST VERSION OF THIS CHECK THREW THE DYNAMIC ROUTES AWAY and then
    // reported all sixty per-subject entries as pointing at pages that do not
    // exist. /subjects/maths/exam is served by app/subjects/[subject]/exam —
    // a real page, reached through a variable segment. A checker that cannot
    // read the router's own convention will confidently fail correct code.
    const allRoutes = listFiles("app")
      .filter((f) => f.endsWith("page.tsx"))
      .map((f) => "/" + f.replace(/^app[/\\]?/, "").replace(/[/\\]?page\.tsx$/, "").replace(/\\/g, "/"))
      .map((r) => (r === "/" ? "/" : r.replace(/\/$/, "")))
      .map((r) => (r === "" ? "/" : r));
    const staticRoutes = allRoutes.filter((r) => !r.includes("["));
    const routeMatchers = allRoutes.map(
      (r) => new RegExp("^" + r.replace(/\[[^\]]+\]/g, "[^/]+") + "$"),
    );
    const isRealRoute = (href) => routeMatchers.some((re) => re.test(href));

    // Pages left out on purpose. Each needs a reason, because "we forgot" and
    // "we decided" look identical in a list of omissions.
    const EXEMPT = {
      "/early-access": "the gated developer preview — listing a hidden page advertises it, the same reason it is not in robots.ts",
      "/early-access/play": "same gate as above",
      "/admin/reports": "404s for everyone but the site owner; searchable would confirm it exists",
      "/forgot-password": "reached from the login page at the moment it is needed, and not somewhere to browse to",
      "/reset-password": "its URL carries a live token; there is nothing to search for",
      "/pro-preview/custom-test": "an unfinished preview, not a feature yet",
      "/pro-preview/planner": "an unfinished preview, not a feature yet",
      "/pro-preview/wardrobe": "an unfinished preview, not a feature yet",
      "/quiz/host": "not a page of its own",
    };

    for (const href of SEARCHABLE_PAGE_HREFS) {
      expect(isRealRoute(href), `search offers ${href}, which is not a real route`);
    }
    for (const route of staticRoutes) {
      expect(
        SEARCHABLE_PAGE_HREFS.includes(route) || route in EXEMPT,
        `the page ${route} is not searchable and is not on the deliberately-left-out list in check-security.mjs`,
      );
    }
    expect(!SEARCHABLE_PAGE_HREFS.includes("/early-access"), "the developer preview is not searchable");

    // ⚠️ THE FOUNDING CASE, ASSERTED DIRECTLY. Matthew asked for exactly this
    // sentence: "if you write teacher tools, it gives you the teacher tools".
    // A scoring change that quietly buries it under fifteen subject pages
    // would pass every structural check above.
    const tt = searchSite("teacher tools", false);
    expect(tt.pages[0]?.href === "/teacher-tools",
      `searching "teacher tools" gives ${tt.pages[0]?.href ?? "nothing"} first`);
    for (const [query, href] of [
      ["wardrobe", "/wardrobe"], ["clans", "/clans"], ["live quiz", "/quiz"],
      ["accessibility", "/accessibility"], ["exam board", "/exam-board"],
      ["progress", "/progress"], ["maths test", "/subjects/maths/exam"],
      ["physics past paper", "/subjects/physics/past-paper"],
      ["today", "/today"], ["diagrams", "/teacher-tools/diagrams"],
      ["wardrobe", "/wardrobe"], ["xp", "/progress"], ["kahoot", "/quiz"],
      ["dyslexia", "/accessibility"], ["aqa", "/exam-board"],
      ["lesson plan", "/teacher-tools/questions"], ["outfits", "/wardrobe"],
    ]) {
      expect(searchSite(query, true).pages[0]?.href === href,
        `searching "${query}" gives ${searchSite(query, true).pages[0]?.href ?? "nothing"} first, not ${href}`);
    }

    // ⚠️ A REAL BUG THE BROWSER RUN FOUND: searching "wardrobe" returned THE
    // FIRST WORLD WAR, because the plural-tolerant word match let a typed word
    // match any word it merely STARTED WITH, and "wardrobe" starts with "war".
    for (const [query, mustNotBe] of [["wardrobe", "war"], ["classroom", "class"], ["password", "pass"]]) {
      const hit = searchSite(query, true);
      const all = [...hit.pages, ...hit.topics];
      expect(!all.some((r) => r.title.toLowerCase().split(/[^a-z]+/).includes(mustNotBe)),
        `searching "${query}" matches something only because it contains "${mustNotBe}"`);
    }

    // Topics still win when a topic is what was typed.
    const ct = searchSite("circle theorems", true);
    expect(ct.topics[0]?.href === "/subjects/maths/circle-theorems",
      "searching a topic name no longer finds the topic first");

    // A result nobody can open is worse than no result.
    for (const query of ["wardrobe", "progress", "today", "account", "statistics", "host"]) {
      const offered = searchSite(query, false);
      const locked = [...offered.pages, ...offered.topics].filter((r) => r.needsAccount);
      expect(locked.length === 0,
        `a logged-out visitor searching "${query}" is offered ${locked.map((l) => l.href).join(", ")}`);
    }
    expect(suggestions(false).every((s) => !s.needsAccount),
      "the empty-box suggestions include a page a logged-out visitor cannot open");
    expect(suggestions(false).length > 0 && suggestions(true).length > 0,
      "the search box offers nothing before anything is typed");

    // Logging in should not still be offered to somebody already logged in.
    expect(searchSite("log in", true).pages.every((p) => p.href !== "/login"),
      "a logged-in visitor is still offered the login page");
    expect(searchSite("log in", false).pages.some((p) => p.href === "/login"),
      "a logged-out visitor cannot find the login page");

    // Nothing in the index is unreachable or unlabelled.
    for (const entry of SEARCH_INDEX) {
      expect(entry.title.trim().length > 0 && entry.detail.trim().length > 0,
        `a search entry for ${entry.href} has no title or no detail line`);
      expect(entry.href.startsWith("/"), `a search entry points at ${entry.href}`);
    }
    const hrefs = SEARCH_INDEX.map((e) => e.href);
    expect(new Set(hrefs).size === hrefs.length, "two search entries point at the same page");
  }

  // ── The game's comms messages fit on the comms panel ──────────────────────
  //
  // ⚠️ A message longer than the panel is not clipped visibly — it is simply
  // never finished. hud.ts wraps the mascot's line at 360px and then takes the
  // FIRST FOUR lines (drawComms), so the end of a long hint silently does not
  // exist, and the one place that would tell you is a screenshot nobody takes.
  // Caught exactly that way: level 4's intro ended mid-word at "until yo".
  //
  // The width is worked out the way a canvas would, without a canvas: per
  // character at bold 18px system-ui. ⚠️ The first version's advances were 20%
  // too NARROW, which is the useless direction — it would have waved through a
  // message that really needed five lines. Checked against a real canvas over
  // every message in the game (37 of them): these advances are never under the
  // real width and at worst count one line too many, so the check can nag but
  // cannot miss.
  console.log("Checking the alien game's comms messages fit...");
  {
    execFileSync(process.execPath, [
      TSC, "app/early-access/game/levels.ts", "app/early-access/game/world.ts",
      "--outDir", out, "--module", "commonjs", "--target", "es2022",
      "--moduleResolution", "node", "--skipLibCheck",
    ], { stdio: "pipe" });
    const { LEVELS } = require(join(out, "levels.js"));
    // rough advance widths at bold 18px system-ui, as a fraction of the size
    const WIDE = "MWQ@%", NARROW = "iljt.,'’!|: ";
    const textWidth = (s) => [...s].reduce((w, c) => w + 18 * (WIDE.includes(c) ? 1.13 : NARROW.includes(c) ? 0.39 : c === c.toUpperCase() && c !== c.toLowerCase() ? 0.84 : 0.69), 0);
    const linesNeeded = (text) => {
      let lines = 1, line = "";
      for (const word of text.split(" ")) {
        const next = line ? `${line} ${word}` : word;
        if (textWidth(next) > 360 && line) { lines++; line = word; } else line = next;
      }
      return lines;
    };
    let messages = 0;
    for (const level of LEVELS) {
      const all = [["INTRO", level.INTRO], ["LOCKED_HINT", level.LOCKED_HINT], ...Object.entries(level.HINTS ?? {})];
      for (const [where, text] of all) {
        if (!text) continue;
        messages++;
        expect(linesNeeded(text) <= 4,
          `${level.TITLE}: the "${where}" comms message needs ${linesNeeded(text)} lines and only four are ever drawn — "${text.slice(0, 48)}…"`);
      }
    }
    expect(messages > 20, `only ${messages} comms messages were checked, so the check is looking in the wrong place`);

    // ⚠️ Every `t` a level places must be something game.ts actually does
    // something with. A typo'd pickup is the worst kind of content bug here:
    // it draws nothing, picks up as nothing and throws no error, so the level
    // looks finished and one item in it silently does not exist.
    const game = readFileSync("app/early-access/game/game.ts", "utf8");
    const DECOR_TYPES = new Set((/const DECOR = new Set\(\[([^\]]*)\]\)/.exec(game)?.[1] ?? "").match(/"([a-z]+)"/g)?.map((s) => s.slice(1, -1)) ?? []);
    // pickups are matched as `k.t === "…"`; the boss and the terminals are not
    // pickups, and loadLevel claims them as `s.t === "…"` before anything else
    const handled = new Set(["alien", "alienBack", ...[...game.matchAll(/[ks]\.t === "([a-z]+)"/g)].map((m) => m[1]), ...DECOR_TYPES]);
    expect(handled.has("grenade") && handled.has("lamp") && handled.size > 8,
      `the sprite-type list read out of game.ts looks wrong (${[...handled].join(", ")})`);
    for (const level of LEVELS) {
      for (const s of new Set(level.SPRITES.map((t) => t.t))) {
        expect(handled.has(s), `${level.TITLE} places a "${s}", which game.ts does nothing with`);
      }
    }

    // ⚠️ AND IT MUST BE STANDING SOMEWHERE A PLAYER CAN REACH IT. A pickup is
    // collected within 0.55 squares of its middle, and a standing player
    // (radius 0.22) cannot get closer than about 0.62 to the middle of a
    // waist-high crate — so a pickup sitting ON one can only be had by jumping
    // on top of the crate, and it renders half buried inside it. Level 4's
    // third ordnance grenade did exactly that and nothing caught it: the flood
    // fill said the square was reachable, because it is, and the sprite-type
    // rule above only looks at the letter of the name.
    for (const level of LEVELS) {
      const occupied = new Map();
      for (const [x, y] of level.COVER ?? []) occupied.set(`${x},${y}`, "waist-high cover");
      for (const b of level.BLOCKS ?? []) for (const [x, y] of b.cells) occupied.set(`${x},${y}`, "a full-height block");
      for (const d of level.DOORS) for (const [x, y] of d.cells) occupied.set(`${x},${y}`, "a door");
      for (const s of level.SPRITES) {
        if (s.t === "alien" || s.t === "alienBack" || DECOR_TYPES.has(s.t)) continue;
        const on = occupied.get(`${Math.floor(s.x)},${Math.floor(s.y)}`);
        expect(!on, `${level.TITLE}: the ${s.t} at ${s.x},${s.y} is standing on ${on} — it cannot be picked up on foot`);
      }
    }

    // Grenades belong to the deck that has them. Matthew: "add granates in the
    // storage level that is new, not everywhere." Both halves matter — a deck
    // with no grenades must not offer the key, and a deck with grenades must.
    // ⚠️ Shape-independent on purpose. The first version of this pulled the
    // controls card out with a regex that assumed one array literal, and the
    // moment a second one was added for touch it matched nothing and reported
    // the correct code as broken. What actually matters is simpler: every
    // place the card offers G must be inside a `this.hasNades ?` ternary.
    // ⚠️ The regex has to match EVERY wording the card uses, or it quietly
    // stops covering one of them. It was `G: (?:throw a )?grenade`, exactly
    // the two strings that existed the day it was written; the moment the
    // desktop line became "G: pull a grenade pin" it matched one card out of
    // two and still reported success. Match on the shape (G:, then the word
    // grenade) and require BOTH cards, so a third wording cannot slip past.
    const gMentions = [...game.matchAll(/G: [a-z ]*grenade[a-z ]*/g)];
    expect(gMentions.length >= 2, `the controls card mentions the grenade key ${gMentions.length} time(s); both the touch and the desktop card should`);
    for (const m of gMentions) {
      const before = game.slice(Math.max(0, m.index - 60), m.index);
      expect(/this\.hasNades \?\s*"[^"]*$/.test(before),
        `the controls card offers "${m[0]}" without checking whether this deck has grenades`);
    }
    expect(/hasGrenades\(LEVELS\[start\]\)/.test(game),
      "jumping ahead hands out a grenade by level number rather than by whether that level has any");
    const nadeLevels = LEVELS.filter((l) => l.SPRITES.some((s) => s.t === "grenade"));
    expect(nadeLevels.length >= 1, "no level has any grenades on it at all");
    for (const level of nadeLevels) {
      const loose = level.SPRITES.filter((s) => s.t === "grenade").length;
      expect(loose >= 2, `${level.TITLE} has grenades but only ${loose} of them, so most players will never find one`);
    }
    // ── hit zones, the rifle, and the grenade quiz ───────────────────────
    //
    // ⚠️ EVERY NUMBER BELOW IS READ OUT OF game.ts, never re-typed here. A
    // check holding its own copy of the balance is a second place the design
    // lives, and the two drift — which is how a check ends up asserting the
    // thing the game used to do.
    const gnum = (name) => {
      const m = new RegExp(`\\b${name}\\s*=\\s*(-?[0-9.]+)`).exec(game);
      return m ? Number(m[1]) : NaN;
    };
    const G = {};
    for (const k of ["ALIEN_HP", "PISTOL_DMG", "KNIFE_DMG", "RIFLE_DMG", "RIFLE_MAG", "RIFLE_PER_ANSWER",
      "RIFLE_WAIT", "PISTOL_MAG", "PISTOL_PER_ANSWER", "PISTOL_WAIT", "NADE_DMG", "NADE_SELF",
      "NADE_KILL_R", "NADE_HURT_R", "NADE_FAIL_WAIT", "HEAD_BELOW", "LEGS_BELOW"]) {
      G[k] = gnum(k);
      expect(Number.isFinite(G[k]) && G[k] > 0, `could not read ${k} out of game.ts, so every weapon check below is guarding nothing`);
    }
    const zoneSrc = /const ZONE_MULT[^=]*=\s*\{([^}]*)\}/.exec(game)?.[1] ?? "";
    const Z = {};
    for (const m of zoneSrc.matchAll(/(head|torso|legs):\s*([0-9.]+)/g)) Z[m[1]] = Number(m[2]);
    expect(Z.head > 0 && Z.torso > 0 && Z.legs > 0, "could not read ZONE_MULT out of game.ts");

    const shots = (dmg, mult) => Math.ceil(G.ALIEN_HP / (dmg * mult));
    for (const [gun, dmg] of [["blaster", G.PISTOL_DMG], ["rifle", G.RIFLE_DMG]]) {
      const h = shots(dmg, Z.head), t = shots(dmg, Z.torso), l = shots(dmg, Z.legs);
      // ⚠️ THE REASON ALIEN HEALTH WENT 30 → 40. At 30 a blaster head shot and
      // a blaster body shot both killed in two, so the head zone existed and
      // changed nothing — a feature nobody could feel. Three zones have to be
      // three different answers or they are decoration.
      expect(h < t && t < l, `the ${gun}'s three zones come out as ${h}/${t}/${l} shots — they must all differ, or hitting the head is worth nothing`);
      // Matthew's rule, in as many words: "headshot shouldn't be like one shot."
      expect(h >= 2, `one ${gun} head shot kills outright (${h} shot), which is the one thing Matthew ruled out`);
    }
    // ⚠️ THE CHECK THAT CAUGHT THE REAL BUG IN THIS FEATURE, and it is not
    // visible in any single constant. The crosshair at rest — pitch zero, no
    // recoil — crosses an alien at (ALIEN_H - eye) / ALIEN_H down from its
    // crown, the same fraction at every distance. With the head band first
    // set at 0.25 that resting shot was ALWAYS a head shot, so every player
    // who stood still two-shot everything and the torso and leg zones were
    // unreachable except by accident. Three zones that collapse to one are
    // decoration, which is what alien health went up to avoid.
    const alienH = gnum("ALIEN_H"), eye = 0.5;
    expect(Number.isFinite(alienH) && alienH > eye, "could not read ALIEN_H, so the resting-aim check is guarding nothing");
    const restF = (alienH - eye) / alienH;
    expect(restF > G.HEAD_BELOW && restF < G.LEGS_BELOW,
      `a crosshair at rest sits ${restF.toFixed(3)} down the alien, which is the ${restF <= G.HEAD_BELOW ? "HEAD" : "LEGS"} band — standing still must be a TORSO shot, or the zone you get is the one you never chose`);
    expect(restF - G.HEAD_BELOW > 0.03,
      `the resting crosshair is only ${(restF - G.HEAD_BELOW).toFixed(3)} clear of the head band; recoil alone would flip it, so the zone would read as random`);

    // The follow-up rule: a head shot OPENS the door, the second hit has to
    // walk through it. Head then body kills in two; head then legs does not,
    // so aiming high and then low is worse than simply aiming at the chest.
    expect(G.PISTOL_DMG * (Z.head + Z.torso) >= G.ALIEN_HP,
      "a blaster head shot followed by a body shot does not kill, so there is no reward for aiming high at all");
    expect(G.PISTOL_DMG * (Z.head + Z.legs) < G.ALIEN_HP,
      "a blaster head shot followed by a LEG shot kills, so the follow-up does not have to be a good one");
    // The two guns have to be a real trade, not an upgrade: the blaster pays
    // more per QUESTION, the rifle far more per SECOND. If either stops being
    // true there is no decision left and one gun is simply dead weight.
    const perQPistol = G.PISTOL_PER_ANSWER * G.PISTOL_DMG, perQRifle = G.RIFLE_PER_ANSWER * G.RIFLE_DMG;
    expect(perQPistol > perQRifle, `a right answer buys ${perQRifle} rifle damage against ${perQPistol} blaster damage — the blaster must win per question or answering for the rifle is strictly better`);
    expect(G.RIFLE_DMG / G.RIFLE_WAIT > G.PISTOL_DMG / G.PISTOL_WAIT,
      "the rifle does not out-damage the blaster per second, so it has no reason to exist");
    // and the number that makes the economy legible: one question, one alien.
    expect(perQRifle === G.ALIEN_HP, `${G.RIFLE_PER_ANSWER} rifle rounds do ${perQRifle} against ${G.ALIEN_HP} health — "one right answer is one alien" is the whole feel of the weapon`);
    expect(G.RIFLE_MAG === G.RIFLE_PER_ANSWER * 3, "the rifle's magazine is not a whole number of right answers, so a full reload wastes rounds");

    // ⚠️ THE GRENADE MUST BEHAVE EXACTLY AS IT DID BEFORE. Raising alien
    // health without raising NADE_DMG would have quietly shrunk the blast
    // Matthew approved last week. The outright-kill radius is the number to
    // pin, because that is the one a player can feel.
    const killR = G.NADE_KILL_R + (G.NADE_HURT_R - G.NADE_KILL_R) * (1 - G.ALIEN_HP / G.NADE_DMG);
    expect(Math.abs(killR - 1.65) < 0.005, `a grenade now kills outright to ${killR.toFixed(3)} squares, not the 1.650 that shipped`);
    expect(G.NADE_SELF < 100, "a grenade at your own feet kills you outright; it is meant to be a mistake, not a suicide button");

    // ── the grenade quiz ─────────────────────────────────────────────────
    // Matthew: "you just get the grenade back in your inventory if you fail."
    // So the grenade is spent in ONE place, and that place is the one reached
    // only by three right answers.
    const body = (name) => {
      const i = game.indexOf(`private ${name}(`);
      if (i < 0) return "";
      const j = game.indexOf("\n  private ", i + 10);
      return game.slice(i, j < 0 ? game.length : j);
    };
    expect(body("throwGrenade").length > 0 && body("releaseNade").length > 0 && body("failNadeQuiz").length > 0,
      "throwGrenade / releaseNade / failNadeQuiz are not all there, so the checks below are guarding nothing");
    expect((game.match(/p\.grenades--/g) ?? []).length === 1,
      "the grenade is spent in more than one place, so one of them can spend it on a failed quiz");
    expect(!/grenades--/.test(body("throwGrenade")),
      "pulling the pin spends the grenade, so a wrong answer costs it as well as the throw");
    expect(/grenades--/.test(body("releaseNade")),
      "the grenade is never actually spent when it is thrown");
    expect(!/grenades/.test(body("failNadeQuiz")) || /grenades\s*\+/.test(body("failNadeQuiz")),
      "a failed grenade quiz touches your grenade count — failing is supposed to give it back, not take it");
    expect(/nadeWait = NADE_FAIL_WAIT/.test(body("failNadeQuiz")) && G.NADE_FAIL_WAIT >= 3,
      "a failed grenade quiz costs no cooldown, so G is a freeze button you can hold down whenever you are losing");
    // ⚠️ And the freeze must not be free. The world stops in "nade" mode
    // because frame() never runs update() there — which also stops the run
    // clock, and pace is 30 of the 100 marks on a deck. Without that the
    // correct way to play is "press G to stop the world".
    expect(/this\.mode === "nade"\) this\.stats\.time \+= dt/.test(game),
      "the run clock stops while a grenade quiz is up, so freezing the deck costs the player nothing");
    // ⚠️ Asserted on the SHAPE, not on a literal line. This used to match
    // `if (mode === "play" || mode === "reload") this.update(dt);` exactly,
    // and broke the moment a reload started running at a third speed — the
    // rule was still true, the string had just moved, which is a check
    // failing on correct code. What matters is that every call to update() is
    // guarded by play or reload, and that none is reachable in "nade".
    {
      const i = game.indexOf("private frame = (now: number)");
      const frameBody = i < 0 ? "" : game.slice(i, game.indexOf("\n  private ", i + 10));
      expect(frameBody.length > 0, "could not find frame(), so the freeze checks are guarding nothing");
      const updateCalls = frameBody.split("\n").filter((l) => /this\.update\(/.test(l));
      expect(updateCalls.length > 0, "frame() never calls update()");
      for (const line of updateCalls) {
        expect(/=== "play"|=== "reload"/.test(line), `frame() calls update() with no play/reload guard: ${line.trim()}`);
        expect(!/"nade"/.test(line), `frame() can call update() in "nade" mode, so the grenade freeze is not a freeze: ${line.trim()}`);
      }
      // ── the world slows while you answer, the clocks do not ───────────
      const slow = gnum("RELOAD_SLOW");
      expect(Number.isFinite(slow) && slow > 1, `RELOAD_SLOW is ${slow}; the deck is supposed to slow while a reload question is up`);
      expect(/=== "reload"\) this\.update\(dt \/ RELOAD_SLOW\)/.test(frameBody), "a reload does not actually slow the deck down");
      // ⚠️ AND THE CLOCKS MUST NOT SLOW WITH IT — three ways this could
      // quietly become an exploit, so three rules. The run clock, or pressing
      // R beats par, which is 30 of the 100 marks. The question's own timer,
      // or a slowed world hands you thirty seconds to think. And the hold on
      // the model answer, for the same reason.
      expect(/if \(this\.mode === "play" \|\| this\.mode === "reload" \|\| this\.mode === "nade"\) this\.stats\.time \+= dt;/.test(frameBody),
        "the run clock does not keep real time in every live mode, so slowing the world buys pace marks");
      const upd = game.indexOf("private update(dt: number)");
      expect(!/this\.stats\.time \+= dt/.test(game.slice(upd, upd + 400)),
        "the run clock is still ticked inside update(), which is handed a third of a second during a reload");
      expect(/this\.updateQuiz\(dt\);/.test(frameBody),
        "the quiz clock is not given real time, so a slowed world would slow the question timer too");
    }

    // ── A wrong answer comes back before the lift (2026-10-10) ─────────────
    // A miss used to be shown once and gone. Now it is OWED: it jumps the
    // queue at the next reload, and anything still owed at the lift gets one
    // more go in a "before you go" round. Each rule below is one way that
    // could quietly stop being true.
    {
      const answerBody = body("answer");
      expect(/if \(!right\) this\.owe\(/.test(answerBody), "a wrong answer is no longer recorded as owed");
      const quizBody = body("updateQuiz");
      expect(/q\.time <= 0\)[^\n]*this\.owe\(/.test(quizBody),
        "a question that TIMES OUT is not owed — running out of time is the commonest way to miss one");
      expect(/kind === "debrief"\) return;/.test(body("owe")),
        "the debrief re-queues its own misses, so a player who keeps missing one can never leave the deck");
      expect(/this\.owed = \[\];/.test(body("loadLevel")),
        "owed questions carry from one deck to the next, so deck 3's misses are asked on deck 4");
      expect(/if \(this\.owed\.length\) \{ this\.startDebrief\(\); return; \}/.test(body("use")),
        "the lift no longer gives owed questions a second go before the deck ends");
      // served at the reload, and ONLY the reload: a grenade quiz ends on one
      // wrong answer, so feeding it your weak spots makes grenades harder the
      // worse you are doing
      expect(/this\.draw1\("reload", qs, true\)/.test(body("startReload")), "owed questions are not served first at a reload");
      expect(!/this\.draw1\("reload", qs, true\)/.test(body("throwGrenade")),
        "the grenade quiz serves owed questions, so the worse you are doing the harder grenades get");
      // ⚠️ the run clock STOPS in the debrief — the opposite of the grenade
      // rule, on purpose: that freeze can be summoned mid-fight, this one
      // happens at the exit, and charging pace for owing a question would make
      // "you owe this" into "you are punished for this"
      const frameBody2 = game.slice(game.indexOf("private frame = (now: number)"), game.indexOf("\n  private ", game.indexOf("private frame = (now: number)") + 10));
      const clockLine = frameBody2.split("\n").find((l) => /this\.stats\.time \+= dt/.test(l)) ?? "";
      expect(!/"debrief"/.test(clockLine), "the run clock runs during the debrief, so missing questions costs pace marks");
      expect(/"debrief"\) this\.updateQuiz\(dt\)/.test(frameBody2), "the debrief's questions never advance");
    }

    // ── Questions from your weakest topics (2026-10-10) ────────────────────
    {
      // ⚠️ THE ONE BUG NO TEST OF THE WEIGHTS CAN SEE. The deck is dealt with
      // pop(), from the END, and the weighted shuffle puts the weakest topics
      // FIRST — so without the reverse the weakest topics would be served
      // LAST, and every check on the weights would still pass.
      const draw = body("draw1");
      // (the weight function contains brackets of its own, so match to the end
      // of the line rather than to the first ")")
      expect(/weightedShuffle\(pool,[^\n]*\)\.reverse\(\)/.test(draw),
        "the question deck is no longer a REVERSED weighted shuffle — dealt by pop(), the weakest topics would come up last");
      expect(/d\.pop\(\)/.test(draw), "the deck is no longer dealt from the end, so the reverse in draw1 is now wrong");
      // the shuffle runs in the browser, so it must not reach the content
      const ws = readFileSync("app/lib/weightedShuffle.ts", "utf8");
      expect(!/^import /m.test(ws), "weightedShuffle.ts imports something — it runs in the browser and must stay dependency-free");
      // the play page works the weights out, and a failure there must not stop
      // the game starting
      const playPage = readFileSync("app/early-access/play/page.tsx", "utf8");
      expect(/getTopicAccuracies\(user\.id\)\.catch\(/.test(playPage),
        "a failure reading the student's accuracy would stop the game starting — it must fall back to an even deal");
      expect(/topicWeights=\{topicWeights\}/.test(playPage), "the play page no longer hands the game its topic weights");
      // and /today's own smoothing, not a copy of it
      const gq = readFileSync("app/lib/game-questions.ts", "utf8");
      expect(/import \{ smoothedAccuracy \} from "\.\/daily-practice"/.test(gq) && !/PRIOR_ACCURACY|PRIOR_WEIGHT/.test(gq),
        "the game keeps its own copy of /today's smoothing prior, so the two will quietly disagree about your weakest topic");
    }
    // the aim is taken when the pin comes out, so a frozen world cannot be
    // used to line a throw up that you had not lined up already
    expect(/nade: this\.aimNade\(\)/.test(game),
      "the throw is not aimed at the moment the pin comes out, so the freeze can be used to re-aim");

    // ── the rifle belongs to the deck that has it ────────────────────────
    // ⚠️ The decks BEFORE this one, not this one. On the deck that places the
    // rifle those are opposite answers, and the wrong one hands it over at
    // the spawn — which skips the arms locker and makes the hangar door's
    // whole reason for being gated disappear.
    expect(/LEVELS\.slice\(0, start\)\.some\(hasRifle\)/.test(game),
      "jumping ahead decides the rifle from the deck you land on rather than from the decks you would have walked through");
    expect(!/hasRifle\(LEVELS\[start\]\)/.test(game),
      "jumping ahead still hands out the rifle on the very deck you are meant to find it on");
    const rifleMentions = [...game.matchAll(/3 rifle|3: rifle/g)];
    expect(rifleMentions.length > 0, "the controls card never mentions the rifle key");
    for (const m of rifleMentions) {
      const before = game.slice(Math.max(0, m.index - 70), m.index);
      expect(/this\.hasGun \?\s*["`][^"`]*$/.test(before),
        `the controls card offers "${m[0]}" without checking whether this deck has a rifle`);
    }
    const rifleLevels = LEVELS.filter((l) => l.SPRITES.some((s) => s.t === "rifle"));
    expect(rifleLevels.length >= 1, "no level places the rifle at all, so it can never be picked up");
    for (const level of rifleLevels) {
      expect(level.SPRITES.filter((s) => s.t === "rifle").length === 1,
        `${level.TITLE} places more than one rifle; the second can never be worth anything`);
    }

    // ⚠️ AND THE RIFLE MUST NOT BE BEHIND THE DOOR THAT NEEDS THE RIFLE.
    // This is the keycard rule again — the level would simply be unfinishable
    // — and it is a genuinely easy mistake to make, because the arms locker
    // and the hangar are next to each other. Checked by walking the level's
    // own AREA graph with the gated door removed.
    for (const level of LEVELS) {
      const gated = (level.DOORS ?? []).filter((d) => d.needs);
      if (!gated.length) continue;
      const areas = Object.entries(level.AREAS ?? {});
      expect(areas.length > 1, `${level.TITLE} has a door with a "needs" but no areas to check it against`);
      const areaAt = (x, y) => areas.find(([, a]) => x >= a.r[0] && x <= a.r[2] && y >= a.r[1] && y <= a.r[3])?.[0] ?? null;
      for (const d of gated) {
        // every door joins the areas its own cells' neighbours sit in
        const edges = new Map(areas.map(([k]) => [k, new Set()]));
        // ⚠️ AND SO DOES A SHARED EDGE. Two area rectangles that touch are
        // one open space with no door between them — level 5's entrance
        // corridor is three rectangles in an L. Reading only the doors
        // reported the arms locker as unreachable and the level as
        // unfinishable, which is the check failing, not the level.
        const touches = (a, b) =>
          (a.r[0] <= b.r[2] && b.r[0] <= a.r[2] && (a.r[3] + 1 === b.r[1] || b.r[3] + 1 === a.r[1])) ||
          (a.r[1] <= b.r[3] && b.r[1] <= a.r[3] && (a.r[2] + 1 === b.r[0] || b.r[2] + 1 === a.r[0]));
        for (const [ka, a] of areas) for (const [kb, b] of areas) {
          if (ka !== kb && touches(a, b)) { edges.get(ka).add(kb); edges.get(kb).add(ka); }
        }
        for (const door of level.DOORS) {
          if (door === d || door.secret) continue;
          const touch = new Set();
          for (const [cx, cy] of door.cells) {
            for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
              const a = areaAt(cx + dx, cy + dy); if (a) touch.add(a);
            }
          }
          for (const a of touch) for (const b of touch) if (a !== b) edges.get(a).add(b);
        }
        const start = areaAt(Math.floor(level.START.x), Math.floor(level.START.y));
        expect(start, `${level.TITLE}: the start position is not inside any area`);
        const seen = new Set([start]), queue = [start];
        while (queue.length) for (const n of edges.get(queue.pop()) ?? []) if (!seen.has(n)) { seen.add(n); queue.push(n); }
        const needed = level.SPRITES.find((s) => s.t === d.needs);
        expect(needed, `${level.TITLE} has a door needing a "${d.needs}" that the level never places`);
        if (!needed) continue;
        const where = areaAt(Math.floor(needed.x), Math.floor(needed.y));
        expect(where && seen.has(where),
          `${level.TITLE}: the ${d.needs} is in "${where}", which can only be reached through the door that needs it — the level cannot be finished`);
      }
    }

    // ── floors a level paints must be floors that exist ─────────────────
    // ⚠️ The same hole the sprite-type rule closed, one layer down, and it
    // bit immediately: level 6's irrigation channels were written as
    // "fWater" and there was no fWater. An unknown floor texture does not
    // throw — it falls back — so the channels would have been invisible, and
    // the deck's whole new mechanic would have shipped as a paragraph in a
    // hint about water nobody could see.
    const texSrc = readFileSync("app/early-access/game/textures.ts", "utf8");
    const floorTex = new Set([...texSrc.matchAll(/^\s{2}(f[A-Z][A-Za-z]*)\(/gm)].map((m) => m[1]));
    expect(floorTex.size > 5, `only found ${floorTex.size} floor textures in textures.ts, so this check is looking in the wrong place`);
    for (const level of LEVELS) {
      for (const f of level.FLOORS ?? []) {
        const name = f[4];
        expect(floorTex.has(name), `${level.TITLE} paints a "${name}" floor, which textures.ts does not draw`);
      }
      for (const a of Object.values(level.AREAS ?? {})) {
        expect(floorTex.has(a.floor), `${level.TITLE}'s "${a.name || "unnamed"}" area asks for a "${a.floor}" floor, which textures.ts does not draw`);
      }
    }
    // ⚠️ AND THE SAME HOLE EXISTS FOR EVERY OTHER KIND OF TEXTURE, which I
    // found by walking straight into it: the cryo deck's pod blocks asked for
    // a "cryo" wall that did not exist yet, one file over from the rule I had
    // just written about floors. A block, a crate or an overridden wall face
    // whose texture is missing does not throw either — the whole point of
    // these rows of pods is that they look like pods.
    const wallTex = new Set([...texSrc.matchAll(/^\s{2}([a-z][A-Za-z0-9]*)\(ctx/gm)].map((m) => m[1]));
    // the decal table is its own object in textures.ts; read its keys from there
    const decalSrc = texSrc.slice(texSrc.indexOf("const DECALS: Record<string, Draw> = {"), texSrc.indexOf("\n};", texSrc.indexOf("const DECALS: Record<string, Draw> = {")));
    const decalNames = new Set([...decalSrc.matchAll(/^\s{2}([a-z][A-Za-z0-9]*)\(ctx/gm)].map((m) => m[1]));
    expect(decalNames.has("arrowR") && decalNames.has("camera") && decalNames.size >= 5,
      `only found ${decalNames.size} decals in textures.ts, so the decal checks are looking in the wrong place`);
    expect(wallTex.has("crate") && wallTex.has("pillar") && wallTex.size > 20,
      `only found ${wallTex.size} textures in textures.ts, so this check is looking in the wrong place`);
    for (const level of LEVELS) {
      for (const b of level.BLOCKS ?? []) {
        expect(wallTex.has(b.tex), `${level.TITLE} builds a block out of "${b.tex}", which textures.ts does not draw`);
      }
      for (const c of level.COVER ?? []) {
        expect(wallTex.has(c[2]), `${level.TITLE} places "${c[2]}" cover, which textures.ts does not draw`);
      }
      for (const d of level.DOORS ?? []) {
        expect(wallTex.has(d.tex), `${level.TITLE} has a door textured "${d.tex}", which textures.ts does not draw`);
      }
      // ⚠️ WALL_OVERRIDE is a FUNCTION, so the only honest way to check what
      // it returns is to call it — over every cell and every face, which is
      // cheap and total. A name that is wrong for one wall of one room in one
      // corner of the deck is exactly the one nobody would ever see.
      if (level.WALL_OVERRIDE) {
        const seen = new Set();
        for (const name of Object.keys(level.AREAS ?? {}))
          for (let y = 0; y < level.H; y++) for (let x = 0; x < level.W; x++)
            for (let f = 0; f < 4; f++) { const t = level.WALL_OVERRIDE(name, f, x, y); if (t) seen.add(t); }
        for (const t of seen) expect(wallTex.has(t), `${level.TITLE}'s WALL_OVERRIDE returns "${t}", which textures.ts does not draw`);
        expect(seen.size > 0, `${level.TITLE} has a WALL_OVERRIDE that never returns anything`);
      }
      // the ceiling and wall names on an AREA are PATTERNS, not textures, and
      // they fall back silently too — an unknown one is a room that quietly
      // gets the default ceiling nobody asked for
      const CEIL = new Set(["light", "corridor", "grid", "dark", "stars", "reactor", "hall", "duct"]);
      for (const [key, a] of Object.entries(level.AREAS ?? {})) {
        expect(CEIL.has(a.ceil), `${level.TITLE}'s "${a.name || key}" asks for a "${a.ceil}" ceiling, which world.ts has no pattern for`);
      }
    }

    // and a floor that is supposed to DO something must be read by the game,
    // or it is paint pretending to be a rule
    for (const level of LEVELS) {
      for (const f of level.FLOORS ?? []) {
        if (f[4] !== "fWater") continue;
        expect(game.includes('"fWater"'), `${level.TITLE} paints irrigation water, but game.ts never reads fWater — walking through it does nothing`);
      }
    }
    // ⚠️ AND THE WATER MUST NOT WALL THE DECK OFF. The channels are meant to
    // be a decision — splash across, or walk to the dry strip — which only
    // works if a dry strip exists. Water running the full height of the hall
    // is not a decision, it is a wall you cannot see.
    for (const level of LEVELS) {
      const water = (level.FLOORS ?? []).filter((f) => f[4] === "fWater");
      if (!water.length) continue;
      const wet = new Set();
      let y0 = Infinity, y1 = -Infinity;
      for (const [ax, ay, bx, by] of water) {
        for (let x = ax; x <= bx; x++) for (let y = ay; y <= by; y++) wet.add(`${x},${y}`);
        y0 = Math.min(y0, ay); y1 = Math.max(y1, by);
      }
      const cols = new Set([...wet].map((k) => Number(k.split(",")[0])));
      for (const x of cols) {
        let dry = 0;
        for (let y = y0; y <= y1; y++) if (!wet.has(`${x},${y}`)) dry++;
        expect(dry >= 2, `${level.TITLE}: the water at x=${x} runs the whole length of the hall with ${dry} dry square(s) — there is no way across without splashing`);
      }
    }

    // ── what does a deck COST in questions? ──────────────────────────────
    //
    // Matthew: "get rid of nearly all of the ammo dropped on the floor and
    // make a knife usable only 5 times." The reason is a measurement that
    // should never have been true: an alien is two knife swings, a swing cost
    // nothing, so A FULL CLEAR OF ALL NINE DECKS COULD COST ZERO QUESTIONS.
    // On a revision site the game's cheapest route has to go through the
    // questions, and this is the rule that keeps it there.
    //
    // ⚠️ Worked from the real constants, never a copy of them, because this
    // is the balance and a check holding its own copy of the balance drifts.
    {
      const alienHp = gnum("ALIEN_HP"), pistolDmg = gnum("PISTOL_DMG");
      const perAnswer = gnum("PISTOL_PER_ANSWER"), drop = gnum("DROP_CHANCE");
      const knifeUses = gnum("KNIFE_USES"), knifeBlunt = gnum("KNIFE_BLUNT"), knifeDmg = gnum("KNIFE_DMG");
      for (const [k, v] of Object.entries({ alienHp, pistolDmg, perAnswer, drop, knifeUses, knifeBlunt, knifeDmg }))
        expect(Number.isFinite(v) && v > 0, `could not read ${k} out of game.ts, so the economy check is guarding nothing`);

      // ⚠️ THE KNIFE BLUNTS, IT DOES NOT BREAK. Out of cells with no knife at
      // all, a player presses R, the world keeps running while they answer,
      // they get it wrong — and they are being shot with no way to fight
      // back. Three wrong answers is a death spiral, and it lands on exactly
      // the student this site exists for. A bad weapon is fine; none is not.
      // ⚠️ "> 0" IS NOT ENOUGH. A sabotage setting the blunt damage to 0.0001
      // sailed through it — four hundred thousand swings a kill is a broken
      // knife wearing a number. The rule has to be that it still KILLS in a
      // number of swings a cornered player could actually land.
      const bluntSwings = Math.ceil(alienHp / knifeBlunt);
      expect(knifeBlunt > 0 && knifeBlunt < knifeDmg && bluntSwings <= 6,
        `a spent knife takes ${bluntSwings} swings a kill — it has to still work, badly, or a player who keeps getting questions wrong has no attack at all`);
      expect(Math.ceil(alienHp / knifeBlunt) >= 2 * Math.ceil(alienHp / knifeDmg),
        "a spent knife is barely worse than a sharp one, so the limit buys nothing");
      // and it is LOUD, which is the other half of why knifing was free
      expect(/if \(!shot && !this\.inVacuum\(\)\) \{[\s\S]{0,220}KNIFE_NOISE/.test(game),
        "a knife kill still wakes nobody — silent AND free is what made it the way to play without revising");

      const cellsPerAlien = Math.ceil(alienHp / pistolDmg);
      const cost = (level) => {
        const aliens = level.SPRITES.filter((s) => s.t === "alien" || s.t === "alienBack").length;
        const placed = level.SPRITES.filter((s) => s.t === "ammo").length * perAnswer
          + level.SPRITES.filter((s) => s.t === "cell").length;
        // the cheapest full clear: every free knife kill taken, every drop
        // collected, everything else shot
        const shot = Math.max(0, aliens - knifeUses);
        return { aliens, q: Math.max(0, (shot * cellsPerAlien - placed - aliens * drop) / perAnswer) };
      };
      let total = 0;
      for (const level of LEVELS) {
        const c = cost(level);
        total += c.q;
        // a deck you can clear for nothing is a deck with no revision in it
        expect(c.q >= Math.max(3, c.aliens * 0.4),
          `${level.TITLE} can be cleared for ${c.q.toFixed(1)} questions against ${c.aliens} aliens — the cheapest way through a deck has to go through the questions`);
      }
      expect(total >= 100, `the whole game can be cleared for ${total.toFixed(0)} questions; it used to be 0, and it must not drift back`);
      // ⚠️ and the pool has to be able to SERVE them without repeating. This
      // is the complaint from September coming back the moment demand rose.
      const pool = Number(/const MAX_POOL = (\d+)/.exec(readFileSync("app/lib/game-questions.ts", "utf8"))?.[1]);
      expect(pool >= total, `a full run now needs ${total.toFixed(0)} questions and the pool is capped at ${pool} — every deck after the cap repeats`);

      // the floor pickups: a teaching deck may keep one, the rest keep none
      LEVELS.forEach((level, i) => {
        const n = level.SPRITES.filter((s) => s.t === "ammo").length;
        expect(n <= (i < 4 ? 1 : 0),
          `${level.TITLE} leaves ${n} ammunition pickups on the floor; the first four decks may keep one each and the rest none`);
      });
    }

    // ── the run-up to the boss has to actually climb ─────────────────────
    // Matthew's ask, in his words: "increasingly harder and bigger than the
    // other ones because they will be leading to the boss level". That is a
    // measurable claim, so it is measured. ⚠️ The first version of deck 7 had
    // LESS open floor than deck 5 despite a bigger grid — the spine was long
    // and almost everything either side of it was wall — and nothing but this
    // would have noticed, because it looks enormous from inside.
    // ⚠️ If a boss arena is added and it is deliberately small and tight,
    // change this rule on purpose rather than deleting it.
    // ⚠️ AND IT WAS (2026-10-10): the hangar deck is one room you can see
    // across, because a fight you have to go looking for is not a boss fight.
    // So "late" is the RUN-UP — decks 7 onwards that do not have the boss on
    // them — and the boss deck is measured by its own rules further down.
    // Identified by what is on it, never by its number.
    const isBossDeck = (l) => l.SPRITES.some((s) => s.t === "boss");
    {
      const area = (l) => {
        let open = 0;
        const solidAt = new Set();
        for (const b of l.BLOCKS ?? []) for (const [x, y] of b.cells) solidAt.add(`${x},${y}`);
        for (const a of Object.values(l.AREAS ?? {}))
          for (let y = a.r[1]; y <= a.r[3]; y++) for (let x = a.r[0]; x <= a.r[2]; x++)
            if (!solidAt.has(`${x},${y}`)) open++;
        return open;
      };
      const aliens = (l) => l.SPRITES.filter((s) => s.t === "alien" || s.t === "alienBack").length;
      const early = LEVELS.slice(0, 6), late = LEVELS.slice(6).filter((l) => !isBossDeck(l));
      expect(late.length >= 3, `only ${late.length} decks count as the run-up to the boss, so this rule has quietly stopped measuring anything`);
      if (late.length) {
        const maxOpen = Math.max(...early.map(area)), maxAliens = Math.max(...early.map(aliens));
        for (const l of late) {
          expect(area(l) > maxOpen, `${l.TITLE} has ${area(l)} squares of floor against ${maxOpen} on the biggest earlier deck — it is meant to be bigger than all of them`);
          expect(aliens(l) > maxAliens, `${l.TITLE} has ${aliens(l)} aliens against ${maxAliens} on the busiest earlier deck — it is meant to be harder than all of them`);
        }
        for (let i = 1; i < late.length; i++) {
          expect(area(late[i]) >= area(late[i - 1]), `${late[i].TITLE} is smaller than ${late[i - 1].TITLE}; the run-up to the boss is supposed to climb`);
          expect(aliens(late[i]) >= aliens(late[i - 1]), `${late[i].TITLE} has fewer aliens than ${late[i - 1].TITLE}; the run-up to the boss is supposed to climb`);
        }
      }
    }

    // ── the boss: the Director, on the hangar deck (2026-10-10) ────────────
    // The design in one line: he is SHIELDED, and only the questions take it
    // down. Every rule below is one way that could quietly stop being true —
    // and the first one, a boss you can simply shoot, is the one that turns
    // the last fight on a revision site into a test of aim.
    {
      const bossDecks = LEVELS.filter(isBossDeck);
      expect(bossDecks.length === 1, `${bossDecks.length} decks have a boss on them; there should be exactly one`);
      for (const l of bossDecks) {
        expect(l === LEVELS[LEVELS.length - 1], `${l.TITLE} has the boss on it but is not the last deck`);
        expect(l.SPRITES.filter((s) => s.t === "boss").length === 1, `${l.TITLE} places more than one boss`);
        // ⚠️ AT LEAST TWO TERMINALS. One that worked has to recharge, so with
        // a single terminal the fight is standing at one console waiting.
        const terms = l.SPRITES.filter((s) => s.t === "terminal").length;
        expect(terms >= 2, `${l.TITLE} has ${terms} shield terminal(s); the recharge means one terminal is a fight spent waiting`);
        expect((l.OBJECTIVES ?? []).some((o) => o.until === "boss"), `${l.TITLE} has no compass objective pointing at the boss`);
      }
      const hurt = body("hurtBoss");
      expect(hurt.length > 0, "hurtBoss is gone, so every boss check below is guarding nothing");
      // the shield check comes BEFORE any damage, and every source of damage
      // goes through this one function — bullets, the knife and grenades
      const guard = hurt.search(/if \(b\.shield <= 0\) \{/), dmg = hurt.indexOf("b.hp -=");
      expect(guard >= 0 && dmg > guard && /return;\s*\}/.test(hurt.slice(guard, dmg)),
        "hurtBoss takes health off before checking the shield, so shooting him through it works");
      expect((game.match(/\bb\.hp -=|boss\.hp -=/g) ?? []).length === 1,
        "the boss loses health somewhere other than hurtBoss, which is the only place that checks his shield");
      expect(/this\.hurtBoss\(/.test(body("fire")) && /this\.hurtBoss\(/.test(body("explode")),
        "a shot or a grenade no longer reaches the boss through hurtBoss");
      // the override IS a reload, so it inherits every rule a reload has —
      // the deck at a third, the clocks on real time — and every check above
      const use = body("useTerminal");
      expect(/this\.mode = "reload";/.test(use), "a terminal override no longer runs in reload mode, so the world does not slow and the reload's clock rules do not apply");
      expect(!/draw1\("reload", qs, true\)/.test(use),
        "a terminal serves owed questions — one wrong answer ends an override, so the worse you are doing the harder the boss gets");
      expect(/q\.kind === "reload" \|\| q\.kind === "terminal" \? RELOAD_SLOW/.test(game),
        "the override panel does not say the world is slowed, so a crawling deck reads as a frozen game");
      const lock = gnum("TERMINAL_LOCK"), cool = gnum("TERMINAL_COOL"), down = gnum("SHIELD_DOWN");
      expect(lock >= 3 && /t\.lock = TERMINAL_LOCK/.test(body("failTerminal")),
        "a wrong answer at a terminal costs nothing, so guessing until the shield drops is the way to beat him");
      expect(cool > down && /t\.cool = TERMINAL_COOL/.test(body("overrideShield")),
        "a terminal that worked is ready again before the window it opened has closed, so the fight is one console and no movement");
      expect(/shield = SHIELD_DOWN/.test(body("overrideShield")), "an override does not actually drop the shield");
      // ⚠️ THE LIFT WAITS FOR HIM. Otherwise the boss deck can be walked
      // past, and "the last fight" is a corridor with a man in it.
      expect(/if \(this\.boss && !this\.boss\.dead\) \{[^\n]*return; \}/.test(body("use")),
        "the lift out of the boss deck works with the boss still alive");
      // and he dies without taking you with him
      expect(!/this\.damage\(|this\.explode\(/.test(body("killBoss")),
        "killing the boss can hurt the player — standing next to him when he falls should never be how you die");
      // he counts on the scoreboard, and the end screen no longer apologises
      expect(/aliens: this\.aliens\.length \+ \(this\.boss \? 1 : 0\)/.test(game),
        "the boss is not counted among the deck's aliens, so beating him is invisible in the grade");
      expect(!/still being built/.test(game), "the end screen still says the boss is being built");
      // ⚠️ THE SIZING, from the real weapons. One window with both guns full
      // must not be enough, or the terminals are a formality; and it must not
      // take so many that the fight is a slog.
      const hp = gnum("BOSS_HP"), q = gnum("TERMINAL_Q");
      const windowMax = gnum("RIFLE_MAG") * gnum("RIFLE_DMG") + gnum("PISTOL_MAG") * gnum("PISTOL_DMG");
      expect(Number.isFinite(hp) && Number.isFinite(q) && Number.isFinite(windowMax), "could not read the boss's numbers out of game.ts");
      expect(hp > 2 * windowMax, `${hp} health is gone in ${Math.ceil(hp / windowMax)} window(s) with both guns full — he is meant to need at least three overrides`);
      expect(hp <= 6 * windowMax, `${hp} health needs ${Math.ceil(hp / windowMax)} full windows; past six the fight is a slog, not a climax`);
      expect(q === 3, `an override is ${q} questions; three is what a grenade costs and what the whole game has taught as "a big thing"`);
    }

    // ── two keycards, and the vacuum rule ────────────────────────────────
    for (const level of LEVELS) {
      const locks = (level.DOORS ?? []).filter((d) => d.key);
      const cards = level.SPRITES.filter((sp) => sp.t === "keycard");
      // every lock has a card of its colour, and every card has a lock
      for (const d of locks) {
        expect(cards.some((c) => (c.key ?? "blue") === d.key),
          `${level.TITLE} locks a door with the ${d.key} card and never places one`);
      }
      for (const c of cards) {
        expect(locks.some((d) => d.key === (c.key ?? "blue")),
          `${level.TITLE} places a ${c.key ?? "blue"} keycard that opens nothing`);
      }
      // ⚠️ A DECK WITH TWO LOCKS NEEDS TWO SENTENCES. One hint saying "find
      // the keycard" at both of them sends you to the wrong end of the ship,
      // which on deck 7 is a thirty-five-square corridor each way.
      const colours = new Set(locks.map((d) => d.key));
      if (colours.size > 1) {
        for (const col of colours) {
          expect(level.LOCKED_HINTS?.[col], `${level.TITLE} has ${colours.size} different locks but no LOCKED_HINTS entry for the ${col} one`);
        }
        // and the compass has to name which card it is sending you for
        for (const o of (level.OBJECTIVES ?? []).filter((o) => o.until === "keycard")) {
          expect(o.key, `${level.TITLE} has two locks and an objective that does not say which keycard it means`);
        }
      }
    }
    // ⚠️ The vacuum rule is an INVERSION, and it is only worth having if both
    // halves are true: nothing hears you, and everything sees you. Half of it
    // is a cheat and the other half is a punishment.
    const vacLevels = LEVELS.filter((l) => Object.values(l.AREAS ?? {}).some((a) => a.vacuum));
    if (vacLevels.length) {
      expect(/inVacuum\(\)\) for \(const a of this\.aliens/.test(game) || /shot && !this\.inVacuum\(\)/.test(game),
        "a deck is open to space but a shot fired there still brings everything running");
      expect(/if \(bare\) want = Math\.max\(want, VACUUM_SEEN\)/.test(game),
        "a deck is open to space but standing in it does not raise how far you can be seen");
      // ⚠️ a FLOOR, not a bonus: as a bonus it came out six hundredths above
      // the lit room next door, which is a mechanic nobody can feel
      const vacSeen = gnum("VACUUM_SEEN");
      expect(vacSeen >= 0.6, `a breached span floors your exposure at ${vacSeen}, which is not enough to be the most visible place in the game`);
      expect(/if \(!this\.inVacuum\(x, y\)\)/.test(game),
        "a grenade going off in vacuum still makes a noise");
      for (const level of vacLevels) {
        const vac = Object.entries(level.AREAS).filter(([, a]) => a.vacuum);
        for (const [key, a] of vac) {
          expect(a.ceil === "stars", `${level.TITLE}'s "${a.name || key}" is open to space and does not have the stars overhead`);
        }
        // and there has to be somewhere that ISN'T, or the rule is just the
        // level, and the inversion has nothing to be an inversion of
        expect(vac.length < Object.keys(level.AREAS).length,
          `${level.TITLE} is vacuum end to end, so there is nowhere the ordinary rules apply to compare it with`);
        // ⚠️ measured, not asserted: the breached spans must genuinely be the
        // emptiest ground on the deck, or "nowhere to hide" is marketing
        // ⚠️ BLOCKS COUNT, NOT JUST COVER. The first version of this counted
        // waist-high cover only, so it waved through two breached spans with
        // twelve pieces of full-height wreckage in them — which hide you
        // completely, and made the "nowhere to hide" deck the best-covered
        // room on it. Seen on the rendered map, not in the data. Anything
        // you can put between yourself and them counts.
        const dens = (pred) => {
          let cells = 0, hide = 0;
          const inPred = (x, y) => Object.values(level.AREAS).some((a) => pred(a) && x >= a.r[0] && x <= a.r[2] && y >= a.r[1] && y <= a.r[3]);
          for (const a of Object.values(level.AREAS)) {
            if (!pred(a)) continue;
            cells += (a.r[2] - a.r[0] + 1) * (a.r[3] - a.r[1] + 1);
          }
          for (const c of level.COVER ?? []) if (inPred(c[0], c[1])) hide++;
          for (const bl of level.BLOCKS ?? []) for (const [x, y] of bl.cells) if (inPred(x, y)) hide++;
          return cells ? hide / cells : 0;
        };
        const outside = dens((a) => a.vacuum), inside = dens((a) => !a.vacuum);
        expect(outside < inside, `${level.TITLE}: the breached spans have ${(outside * 100).toFixed(1)}% of their floor behind something against ${(inside * 100).toFixed(1)}% inside — "nowhere to hide" has to be true to be worth saying`);
      }
    }

    // ── can you actually WALK the deck? ─────────────────────────────────
    // ⚠️ This used to live in a scratchpad script run by hand against a
    // compiled copy of the levels that was months old by the end. A level
    // that cannot be finished is the worst bug this game can ship, and it is
    // caught by a flood fill that takes under a second, so it belongs in the
    // run that happens every time. `buildWorld` is the real one the game
    // uses — a second idea of what a wall is would be a second thing to get
    // wrong.
    {
      const { buildWorld } = require(join(out, "world.js"));
      const tex = { out: {}, add() {} };   // buildWorld only records names
      for (const level of LEVELS) {
        const w = buildWorld(level, tex);
        // ⚠️ A DOOR IS SOLID. buildWorld sets solid = 1 on every door cell and
        // hangs the door object off w.door, exactly as lineOfSight has to
        // allow for (world.ts line 233). Reading solid alone, the first
        // version of this flood fill reached only the room you spawn in and
        // reported every deck in the game — including the four that bots have
        // walked end to end for weeks — as unfinishable. The harness, not the
        // levels, for the ninth time in this file.
        const open = (x, y) => {
          if (x < 0 || y < 0 || x >= w.W || y >= w.H) return false;
          const i = y * w.W + x;
          return w.solid[i] !== 1 || !!w.door[i];
        };
        const seen = new Uint8Array(w.W * w.H);
        const sx = Math.floor(level.START.x), sy = Math.floor(level.START.y);
        expect(open(sx, sy), `${level.TITLE}: you start inside a wall at ${sx},${sy}`);
        const queue = [[sx, sy]]; seen[sy * w.W + sx] = 1;
        while (queue.length) {
          const [x, y] = queue.pop();
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nx = x + dx, ny = y + dy;
            if (!open(nx, ny) || seen[ny * w.W + nx]) continue;
            seen[ny * w.W + nx] = 1; queue.push([nx, ny]);
          }
        }
        const reached = (x, y) => seen[Math.floor(y) * w.W + Math.floor(x)] === 1;
        for (const sp of level.SPRITES) {
          expect(reached(sp.x, sp.y), `${level.TITLE}: the ${sp.t} at ${sp.x},${sp.y} is walled off — nothing can get to it`);
          expect(open(Math.floor(sp.x), Math.floor(sp.y)), `${level.TITLE}: the ${sp.t} at ${sp.x},${sp.y} is standing inside a wall`);
        }
        // ⚠️ NOT "is the middle of the room reachable". Three of the biggest
        // rooms in the game have something parked in the middle of them — the
        // reactor core on decks 1 and 2, the shuttle on the flight deck — so
        // the centre probe reported the three best rooms in the game as
        // sealed off. What matters is that the room is reachable AND that
        // nearly all of it is: a corner cut off by a block is a real bug, one
        // solid square in the middle is the level design.
        for (const [name, a] of Object.entries(level.AREAS ?? {})) {
          let cells = 0, got = 0;
          for (let y = a.r[1]; y <= a.r[3]; y++) for (let x = a.r[0]; x <= a.r[2]; x++) {
            if (w.solid[y * w.W + x] === 1) continue;
            cells++; if (seen[y * w.W + x]) got++;
          }
          const label = `${level.TITLE}: the "${a.name || name}" area`;
          expect(cells > 0, `${label} has no open floor in it at all`);
          expect(got > 0, `${label} cannot be walked to`);
          expect(cells === 0 || got / cells > 0.9, `${label} is ${Math.round((1 - got / cells) * 100)}% walled off from the rest of the deck`);
        }
        const exit = (level.DOORS ?? []).find((d) => d.exit);
        expect(exit, `${level.TITLE} has no exit at all`);
        if (exit) expect(exit.cells.some(([x, y]) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => reached(x + dx, y + dy))),
          `${level.TITLE}: the lift out cannot be reached, so the deck cannot be finished`);
        // ⚠️ and the keycard is never behind the door it opens. Same shape as
        // the rifle rule above; this one has bitten real level design before.
        for (const d of (level.DOORS ?? []).filter((d) => d.key)) {
          const card = level.SPRITES.find((sp) => sp.t === "keycard");
          expect(card, `${level.TITLE} locks a door with a keycard it never places`);
          if (!card) continue;
          const blocked = new Uint8Array(w.W * w.H);
          const shut = new Set(d.cells.map(([x, y]) => y * w.W + x));
          const q2 = [[sx, sy]]; blocked[sy * w.W + sx] = 1;
          while (q2.length) {
            const [x, y] = q2.pop();
            for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
              const nx = x + dx, ny = y + dy, i = ny * w.W + nx;
              if (!open(nx, ny) || blocked[i] || shut.has(i)) continue;
              blocked[i] = 1; q2.push([nx, ny]);
            }
          }
          expect(blocked[Math.floor(card.y) * w.W + Math.floor(card.x)] === 1,
            `${level.TITLE}: the keycard is behind the door it unlocks`);
        }
        // ⚠️ NO ROUTE LEG MAY RUN THROUGH WAIST-HIGH COVER. The ROUTE is not
        // decoration: the wall arrows point along it, `par` (30 of the 100
        // marks on a deck) is derived from its length, and the play-test bots
        // follow it. A leg drawn straight through a crate means the signposted
        // way through needs a jump, and the par time is measured along a path
        // nobody walks. Eleven legs across four decks were doing this —
        // including two on level 1, which has shipped for weeks — and nothing
        // caught them, because the flood fill above walks round cover quite
        // happily and the old route bot pushed W and reported "stuck".
        // ⚠️ A RUN of blocked samples, not a single one. Sampling a straight
        // line eight times a square clips the corner cell of a doorway
        // whenever a leg passes diagonally through one, and the first version
        // of this rule reported nine of those as routes running through
        // walls. Three consecutive samples is 0.37 of a square actually
        // inside something, which a corner clip never reaches and a leg drawn
        // through the middle of a crate always does.
        const cross = (r, which) => {
          for (let i = 1; i < (r ?? []).length; i++) {
            const [ax, ay] = r[i - 1], [bx, by] = r[i];
            const n = Math.ceil(Math.hypot(bx - ax, by - ay) * 8);
            let run = 0, what = 0, where = "";
            for (let k = 0; k <= n; k++) {
              const x = Math.floor(ax + ((bx - ax) * k) / n), y = Math.floor(ay + ((by - ay) * k) / n);
              // ⚠️ COVER ONLY, deliberately. The same sampler flagged four
              // legs of level 4's alternative route as running through a
              // wall; that route drops into the floor duct and runs UNDER
              // the shelving, so a flat 2D sample of it is wrong and I could
              // not tell a real crossing from that without modelling height.
              // Walls are already covered properly, twice: the flood fill
              // above walks the deck, and walk56.mjs drives the real
              // collision code along every leg. Cover is the gap — the flood
              // fill walks round it quite happily — and cover is where the
              // eleven real bugs were.
              const j = y * w.W + x, blocked = w.door[j] || w.solid[j] !== 2 ? 0 : 2;
              if (blocked && blocked === what) { run++; } else { run = blocked ? 1 : 0; what = blocked; where = `${x},${y}`; }
              if (run >= 3) {
                expect(false, `${level.TITLE}: leg ${i} of its ${which} runs straight through ${what === 2 ? "the cover" : "a wall"} at ${where}`);
                run = 0; what = 0;
              }
            }
            checks++;   // the leg that passed, so a clean route still counts
          }
        };
        cross(level.ROUTE, "main route");
        cross(level.ALT_ROUTE, "alternative route");

        // ── decals: names that exist, on faces that exist, pointing the right way
        // ⚠️ FOUND BY THE BOSS DECK CRASHING ON LOAD (2026-10-10). Its two guide
        // arrows were written "arrowE", copied from deck 9 — and there is no
        // "arrowE". textures.ts throws when it is asked to draw an unknown
        // decal, so the deck never started: a white canvas and a console error.
        // Deck 9 had never crashed only because all five of ITS arrows sat on
        // door squares, which have no wall face, so buildWorld skipped them
        // silently. Decks 7, 8 and 9 had shipped with NOT ONE guide arrow
        // between them, and twenty-two more decals on decks 1 to 6 were landing
        // nowhere. Nothing could see either, because a decal that is dropped
        // throws nothing and draws nothing.
        {
          const bare = buildWorld({ ...level, DECALS: [] }, tex);
          const onFace = new Set();
          const N4 = [[0, -1], [1, 0], [0, 1], [-1, 0]];
          for (const [x, y, f, decal, flip] of level.DECALS ?? []) {
            const at = `${level.TITLE}: the "${decal}" decal at ${x},${y}`;
            expect(decalNames.has(decal), `${at} is not a decal textures.ts can draw — the deck will crash on load the moment one lands on a real wall`);
            expect(!!bare.faces[y * bare.W + x]?.[f], `${at} is on a face that does not exist (a door, open floor or the back of a wall), so it is silently never drawn`);
            const k = `${x},${y},${f}`;
            expect(!onFace.has(k), `${at} is the second decal on the same wall face — the second one has no base texture to draw on`);
            onFace.add(k);
            // a guide arrow must not point BACK along the route it is guiding
            // — September's bug check found four that did, by eye. Sideways
            // is allowed: an arrow beside a door points along the wall at it.
            if (decal === "arrowR" && (level.ROUTE ?? []).length > 1) {
              const n = N4[f], ox = x + n[0] + 0.5, oy = y + n[1] + 0.5;
              let ax = n[1], ay = -n[0]; if (flip) { ax = -ax; ay = -ay; }
              let leg = null, bd = 1e9;
              for (let i = 1; i < level.ROUTE.length; i++) {
                const [x0, y0] = level.ROUTE[i - 1], [x1, y1] = level.ROUTE[i], vx = x1 - x0, vy = y1 - y0, L = vx * vx + vy * vy || 1;
                const t = Math.max(0, Math.min(1, ((ox - x0) * vx + (oy - y0) * vy) / L));
                const d = Math.hypot(x0 + vx * t - ox, y0 + vy * t - oy);
                if (d < bd) { bd = d; leg = [vx, vy]; }
              }
              const dot = (leg[0] * ax + leg[1] * ay) / (Math.hypot(leg[0], leg[1]) || 1);
              expect(dot > -0.3, `${at} points BACK along the route it is meant to be guiding`);
            }
          }
        }

        // nothing may be standing on top of something else
        const spots = new Map();
        for (const sp of level.SPRITES) {
          const k = `${sp.x},${sp.y}`;
          expect(!spots.has(k), `${level.TITLE}: a ${sp.t} and a ${spots.get(k)} are both at ${k}`);
          spots.set(k, sp.t);
        }
      }
    }

    // and every level still has an intro and an objective, which is how the
    // compass and the mascot know what to say at all
    for (const level of LEVELS) {
      expect(typeof level.INTRO === "string" && level.INTRO.length > 0, `${level.TITLE} has no intro line`);
      expect((level.OBJECTIVES ?? []).length > 0, `${level.TITLE} has no objective for the compass`);
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
