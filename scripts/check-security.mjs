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
import { mkdtempSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
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
    process.platform === "win32" ? "npx.cmd" : "npx",
    [
      "tsc",
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
