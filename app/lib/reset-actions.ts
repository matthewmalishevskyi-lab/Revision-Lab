"use server";

// Getting back into an account you've been locked out of.
//
// Two Server Actions: one that emails a link, one that accepts the link and
// sets a new password. Needs SESSION_AND_RESET_SETUP.sql run once in Supabase,
// and GMAIL_USER / GMAIL_APP_PASSWORD set — see email.ts for both.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS PAGE TELLS YOU THE SAME THING WHATEVER HAPPENS
//
// requestPasswordReset always answers "if that address has an account, we've
// sent a link" — whether or not it did, and whether or not the mail actually
// went. That looks unhelpful and it is deliberate.
//
// The login page already goes to real lengths to stop anybody finding out which
// email addresses have accounts here: the wrong-password and unknown-email
// messages are word for word identical, failures are counted for unknown
// addresses too so a lockout doesn't give it away, and there is a decoy hash
// computed for missing accounts so the RESPONSE TIME doesn't give it away
// either (that one was measured — 72x, before it was fixed).
//
// A forgot-password form that says "no account with that email" throws all of
// that away in one sentence, on a page that needs no login to reach. Somebody
// could paste in a list of addresses from a school mailing list and learn
// exactly who has an account, which is worth knowing to anyone planning to
// guess at passwords, and worth knowing to anyone who just wants to know
// whether a particular person uses this site.
//
// The cost is real and worth stating: someone who mistypes their own address
// gets a cheerful message and no email, and has to work out why. That is a
// worse experience for one honest person than leaking the whole user list is
// for everybody, so it stands.
// ─────────────────────────────────────────────────────────────────────────────

import { redirect } from "next/navigation";
import { after } from "next/server";
import {
  checkResetRequestAllowed,
  clearLoginFailures,
  recordResetRequest,
  throttleMessage,
} from "./throttle";
import { EMAIL_ENABLED, sendEmail } from "./email";
import { resetEmail } from "./password-reset-email";
import {
  consumeResetToken,
  createResetToken,
  invalidateTokensFor,
} from "./password-reset";
import { findUserByEmail, findUserById, updatePassword } from "./users";
import { createSession } from "./session";
import { ACCOUNTS_ENABLED, SITE_URL } from "./site";

export type ResetRequestState = {
  error?: string;
  sent?: boolean;
} | null;

export async function requestPasswordReset(
  _prev: ResetRequestState,
  formData: FormData,
): Promise<ResetRequestState> {
  if (!ACCOUNTS_ENABLED) return { error: "Accounts aren't switched on here." };

  if (!EMAIL_ENABLED) {
    // An honest failure rather than a silent one. If the site cannot send
    // mail, saying "check your inbox" would leave someone refreshing an inbox
    // forever — the exact silent-failure shape this codebase keeps finding and
    // fixing elsewhere.
    console.error("[reset] requested but email is not configured");
    return {
      error:
        "Password resets aren't working right now. Sorry — please try again later.",
    };
  }

  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    // A missing or obviously malformed address is the one thing that CAN be
    // reported plainly: it says nothing about who has an account.
    return { error: "Enter the email address you signed up with." };
  }

  const verdict = await checkResetRequestAllowed();
  if (!verdict.allowed) return { error: throttleMessage(verdict.retryAfterSeconds) };

  // Counted before anything else, and for every request rather than only the
  // ones that find an account — see the note on recordResetRequest in
  // throttle.ts for why counting only "successes" would leak the user list.
  await recordResetRequest();

  try {
    const user = await findUserByEmail(email);

    if (user && !user.deletedAt) {
      const token = await createResetToken(user.id);
      const link = `${SITE_URL}/reset-password?token=${encodeURIComponent(token)}`;
      const message = resetEmail(user.name, link);

      // ─── THE EMAIL IS SENT AFTER THE ANSWER, NOT BEFORE IT ─────────────
      //
      // This started as a UX nicety and turned into a security fix, because
      // testing it exposed a TIMING LEAK of exactly the kind this file's
      // header comment is about.
      //
      // Measured, with the send awaited inline: an address WITH an account
      // took 10.5 seconds to reach the confirmation screen (the mail server
      // was unreachable, so it sat there until the socket timeout), and an
      // address with NO account took 0.2 seconds. The two pages said the
      // same words, and the stopwatch gave the answer away anyway. Even on
      // a healthy connection the gap is a second or two — which is plenty,
      // and is a bigger difference than the 72x login timing bug this site
      // already had to fix once.
      //
      // `after` from next/server runs the callback once the response has
      // gone out. Both paths now return in the same fraction of a second,
      // because neither of them is waiting for a mail server. That the
      // person also stops staring at a spinner is a bonus rather than the
      // point.
      after(async () => {
        try {
          await sendEmail({ to: user.email, ...message });
        } catch (error) {
          console.error("[reset] sending the email failed:", error);
        }
      });
    }
    // No `else`. An address with no account, and an account already counting
    // down to deletion, both fall through to the same answer below.
  } catch (error) {
    // Logged, not shown. A database or mail failure must not become a
    // different visible outcome from "no account here" — that difference is
    // itself the leak.
    console.error("[reset] request failed:", error);
  }

  // ONE return, for every path above. Not two identical ones — two identical
  // sentences are two sentences somebody eventually edits one of.
  return { sent: true };
}

export type ResetState = {
  error?: string;
} | null;

export async function resetPassword(
  _prev: ResetState,
  formData: FormData,
): Promise<ResetState> {
  if (!ACCOUNTS_ENABLED) return { error: "Accounts aren't switched on here." };

  const token = String(formData.get("token") ?? "");
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  // The same three rules the registration form applies, and applied here
  // rather than only there because this is a second door into the same
  // account. A password policy enforced on one form and not the other is not
  // a password policy.
  if (password.length < 8) return { error: "Passwords need to be at least 8 characters." };
  if (password.length > 200) return { error: "That password is too long." };
  if (password !== confirm) return { error: "The two passwords don't match." };

  let result;
  try {
    result = await consumeResetToken(token);
  } catch (error) {
    console.error("[reset] could not check token:", error);
    return { error: "Something went wrong. Please try again." };
  }

  if (!result.ok) {
    // All three failures get one message on purpose. "That link has already
    // been used" tells somebody holding a stolen link that it WAS real, which
    // is more than they need to know; and from where the person is standing
    // the answer is the same in every case — ask for a new one.
    return {
      error:
        "That link doesn't work any more. Reset links last 30 minutes and can only be used once — ask for a new one below.",
    };
  }

  try {
    // updatePassword also bumps the account's session_version, which signs out
    // every device that was still logged in — see users.ts. That matters more
    // here than on the ordinary change-password form: somebody resetting a
    // password they've lost may well be doing it because someone else has it.
    await updatePassword(result.userId, password);

    // And every OTHER reset link that was in flight dies too. Without this, a
    // second link requested ten minutes ago would still work after the
    // password had already been changed.
    await invalidateTokensFor(result.userId);
  } catch (error) {
    console.error("[reset] password update failed:", error);
    return { error: "Something went wrong. Please try again." };
  }

  const user = await findUserById(result.userId);
  if (!user) return { error: "Something went wrong. Please try again." };

  // Wipe the login-failure count for this address. Somebody who has just
  // proved control of the inbox should not then be locked out by the failed
  // guesses that sent them here in the first place — which is exactly the
  // sequence that happens: try the old password five times, give up, reset.
  await clearLoginFailures(user.email);

  // Log them straight in rather than bouncing them to the login page to type
  // the password they set four seconds ago. The new session carries the new
  // version number, so it survives the sign-out-everywhere that just happened.
  await createSession(user.id, true, user.sessionVersion);

  // Straight to the dashboard, not back to the login page — they are logged
  // in as of the line above, and asking somebody to type the password they set
  // four seconds ago is the kind of small insult that makes a site feel like
  // it wasn't finished.
  //
  // ⚠️ OUTSIDE every try/catch, deliberately. redirect() works by THROWING a
  // signal that Next catches upstream; inside a try block, our own catch would
  // swallow it and the redirect would silently never happen. There is a check
  // for this exact mistake in scripts/check-security.mjs.
  redirect("/dashboard");
}
