"use server";

// SERVER ACTIONS.
//
// That "use server" line at the top is doing something clever. These functions
// live on the server, but you can hand one straight to a <form> in the browser
// and React wires up the plumbing: the browser posts the form, Next runs the
// function on the server, and the result comes back. You never write a fetch
// call or an API endpoint.
//
// Why it matters here: password checking happens on the SERVER, where the
// browser can't see it. Nothing in this file is ever sent to the visitor.
// If you tried to validate a password in the browser, anyone could open dev
// tools and skip the check.

import { redirect } from "next/navigation";
import { createSession, destroySession, getSessionUserId } from "./session";
import {
  checkLoginAllowed,
  checkRegistrationAllowed,
  clearLoginFailures,
  recordFailedLogin,
  recordRegistration,
  throttleMessage,
} from "./throttle";
import {
  createUser,
  findUserByEmail,
  findUserById,
  spendPasswordCheckTime,
  verifyPassword,
} from "./users";

// What a form sends back to the page when something goes wrong. `fieldErrors`
// puts a message under the specific input; `formError` is for the whole form.
export type AuthState = {
  fieldErrors?: { name?: string; email?: string; password?: string };
  formError?: string;
} | null;

// A deliberately boring check. Proper email validation is famously impossible
// to do perfectly with a pattern — the only real test is sending an email and
// seeing if it arrives. This catches typos, which is all it's for.
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function register(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const fieldErrors: NonNullable<AuthState>["fieldErrors"] = {};

  // ── Upper limits as well as lower ones ──────────────────────────────────
  // There were only minimums here, so nothing stopped a megabyte-long name
  // being written straight into storage. Worth being precise about what the
  // risk actually was, because the obvious guess is wrong: hashing a huge
  // password is NOT slow. Measured, scrypt takes the same ~33ms for a 12
  // character password and a one-million character one, because the input is
  // condensed before the expensive part begins.
  //
  // The real problem is simply storing whatever arrives. These limits are
  // generous enough that no real person will meet them, which is what a limit
  // should be. (The longest recorded surname is a little over 30 characters.)
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  else if (name.length > 100) fieldErrors.name = "That name is too long.";

  if (!looksLikeEmail(email))
    fieldErrors.email = "That doesn't look like an email address.";
  else if (email.length > 254)
    // 254 is the maximum length of an email address that the internet's own
    // standards allow, so anything longer cannot be deliverable anyway.
    fieldErrors.email = "That email address is too long.";

  if (password.length < 8)
    fieldErrors.password = "Passwords need to be at least 8 characters.";
  else if (password.length > 200)
    fieldErrors.password = "That password is too long.";

  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  // Stops one machine creating accounts in bulk. Checked after validation, so
  // typos in the form don't count against the limit.
  const verdict = await checkRegistrationAllowed();
  if (!verdict.allowed) {
    return { formError: throttleMessage(verdict.retryAfterSeconds) };
  }

  try {
    const user = await createUser({ name, email, password });
    await recordRegistration();
    await createSession(user.id, true);
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_TAKEN") {
      // Counts against the per-IP registration limit exactly like a genuine
      // new account does. Found in the 2026-08-25 deep bug hunt: this branch
      // used to return without ever calling recordRegistration(), which only
      // fires on success below — so probing candidate emails to find out
      // which ones already have an account was completely unthrottled, no
      // matter how many were tried. The rest of this codebase goes out of
      // its way to stop exactly that kind of email-enumeration (see the
      // login timing fix and the identical wrong-password/unknown-email
      // wording in throttle.ts) — a real registration and a "yes, that one's
      // taken" answer should cost the attacker the same.
      await recordRegistration();
      return { fieldErrors: { email: "An account with that email already exists." } };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // LOG THE REAL REASON, SHOW THE VAGUE ONE.
    //
    // "Something went wrong. Please try again." is the right thing to show a
    // visitor: the true error can mention table names, key problems and
    // internal detail that is nobody else's business, and is a gift to an
    // attacker probing for weaknesses.
    //
    // But it was ALSO all we had, which made a real failure impossible to
    // diagnose — the thing that went wrong simply vanished. console.error on a
    // server does not go to anyone's browser; it goes to the host's logs, where
    // only you can read it. Vercel → your project → Logs.
    //
    // Log privately, apologise publicly. That is the pattern.
    // ─────────────────────────────────────────────────────────────────────────
    console.error("[register] failed:", error);
    return { formError: "Something went wrong. Please try again." };
  }

  // `redirect` works by throwing a special signal that Next catches, so nothing
  // after this line runs. It also has to sit OUTSIDE the try/catch above —
  // otherwise the catch block would swallow that signal and the redirect would
  // silently never happen. This catches people out constantly.
  redirect("/");
}

export async function login(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const rememberMe = formData.get("rememberMe") === "on";

  if (!email || !password) {
    return { formError: "Please enter your email and password." };
  }

  // ── RATE LIMIT: before anything expensive, and before any lookup ──────────
  // This sits at the very top on purpose. Checked after the database lookup, a
  // blocked attacker would still be making us do a query per guess — the point
  // of a limit is to stop doing work for them, not just to refuse at the end.
  const verdict = await checkLoginAllowed(email);
  if (!verdict.allowed) {
    return { formError: throttleMessage(verdict.retryAfterSeconds) };
  }

  // Looking a user up now means a network call to the database, and networks
  // fail. Without this, a momentary blip would throw straight out of the Server
  // Action and show a 500 page to someone whose only mistake was logging in at
  // the wrong second. `redirect()` stays OUTSIDE the try — it works by throwing
  // a signal Next catches, so a catch block here would swallow it.
  let user: Awaited<ReturnType<typeof findUserByEmail>>;
  try {
    user = await findUserByEmail(email);
  } catch (error) {
    console.error("[login] lookup failed:", error);
    return {
      formError:
        "We couldn't reach the accounts service. Please try again in a moment.",
    };
  }

  // NOTE THE WORDING. Whether the email is unknown or the password is wrong,
  // the message is identical: "Email or password is incorrect."
  //
  // Saying "no account with that email" would let anyone type addresses in and
  // learn who has an account here — which is a privacy leak, and a gift to
  // someone about to guess passwords. Vague on purpose.
  const genericFailure = { formError: "Email or password is incorrect." };

  if (!user) {
    // Identical wording was not enough: this branch used to return instantly
    // while the branch below spent ~29ms in scrypt, so the two were 72x apart
    // and trivially distinguishable by a stopwatch. Doing the same work here
    // closes that. See the note in users.ts.
    await spendPasswordCheckTime(password);
    await recordFailedLogin(email);
    return genericFailure;
  }

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) {
    await recordFailedLogin(email);
    return genericFailure;
  }

  // Right password: wipe the slate for this account, so someone who forgot
  // their password, tried five times, then remembered it isn't left carrying a
  // count that could bite them tomorrow.
  await clearLoginFailures(email);

  // The session cookie is written here. If SESSION_SECRET is missing in
  // production this throws a deliberately loud error, so catch it and say
  // something a visitor can act on rather than showing them a stack trace.
  try {
    await createSession(user.id, rememberMe);
  } catch (error) {
    console.error("[login] session creation failed:", error);
    return { formError: "We couldn't start your session. Please try again." };
  }

  // Someone whose account is counting down to erasure almost certainly logged
  // back in FOR that reason. Sending them to the homepage would make them hunt
  // for the Undo button while the clock runs; send them straight to it.
  //
  // This is the entire justification for choosing a 30 day grace period over an
  // instant delete. A grace period nobody can find is not a grace period.
  if (user.deletedAt) redirect("/account");

  redirect("/");
}

export async function logout() {
  await destroySession();
  redirect("/");
}

// Used by pages to find out who's logged in. Returns just the safe fields —
// never hand a password hash to a page, even by accident.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS WRAPPED IN A TRY/CATCH, FOUND IN THE 2026-08-25 DEEP BUG HUNT
//
// `getViewer` (app/lib/viewer.ts) wraps this in React's `cache()` and
// `SiteHeader` — which renders on every single page — calls it unconditionally
// whenever ACCOUNTS_ENABLED. `findUserById` throws on a database problem
// (see `describeFailure` in users.ts), and nothing here used to catch that.
// `login()` already treats a database blip as "show a friendly error" rather
// than a crash, for exactly this reason; this function reached every page on
// the site, logged in or not, so the SAME blip here would have taken down
// EVERY page with an uncaught exception, not just the login form. Fail as
// "nobody's logged in" instead — worse than a perfect answer, far better than
// a site-wide outage over a transient Supabase hiccup.
// ─────────────────────────────────────────────────────────────────────────────
export async function getCurrentUser() {
  const userId = await getSessionUserId();
  if (!userId) return null;

  try {
    const user = await findUserById(userId);
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      deletedAt: user.deletedAt,
    };
  } catch (error) {
    console.error("[getCurrentUser] lookup failed:", error);
    return null;
  }
}
