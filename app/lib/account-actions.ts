"use server";

// Server Actions for managing your own account: changing your password, asking
// for the account to be deleted, and changing your mind about that.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE RULE EVERY FUNCTION IN THIS FILE FOLLOWS
//
// Never take the user's identity from the form. Always read it from the session
// cookie.
//
// It would be easy to write `changePassword(email, newPassword)` and have the
// page send the logged-in user's email in a hidden field. It would work
// perfectly in testing. It would also mean anyone could change anyone's
// password by editing that hidden field before pressing the button, because a
// form is just text that the browser sends and the browser belongs to the
// visitor, not to us.
//
// The session cookie is different: it is signed with a secret only the server
// knows, so a visitor can hold it but cannot forge a different one. That is the
// only thing on the page that proves who is asking.
// ─────────────────────────────────────────────────────────────────────────────

import { redirect } from "next/navigation";
import { createSession, destroySession, getSessionUserId } from "./session";
import {
  checkLoginAllowed,
  clearLoginFailures,
  recordFailedLogin,
  throttleMessage,
} from "./throttle";
import {
  cancelDeletion,
  findUserById,
  scheduleDeletion,
  updatePassword,
  verifyPassword,
} from "./users";

export type AccountState = {
  error?: string;
  success?: string;
} | null;

export async function changePassword(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  const userId = await getSessionUserId();
  if (!userId) return { error: "You need to be signed in." };

  const current = String(formData.get("currentPassword") ?? "");
  const next = String(formData.get("newPassword") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  if (next.length < 8) return { error: "New passwords need to be at least 8 characters." };
  if (next.length > 200) return { error: "That password is too long." };
  if (next !== confirm) return { error: "The two new passwords don't match." };

  const user = await findUserById(userId);
  if (!user) return { error: "We couldn't find your account." };

  if (current === next) {
    return { error: "That's the same password you already have." };
  }

  // The same rate limit that guards the login form guards this one.
  //
  // Without it, this page would be a way around all that work: someone who sits
  // down at an unlocked laptop could guess the current password here as fast as
  // they liked, while the front door next to it counted every attempt. A limit
  // with a second door beside it that has no limit is not a limit.
  const verdict = await checkLoginAllowed(user.email);
  if (!verdict.allowed) return { error: throttleMessage(verdict.retryAfterSeconds) };

  if (!(await verifyPassword(current, user.passwordHash))) {
    await recordFailedLogin(user.email);
    return { error: "That isn't your current password." };
  }

  try {
    await updatePassword(userId, next);
  } catch (error) {
    console.error("[account] password change failed:", error);
    return { error: "Something went wrong. Please try again." };
  }

  await clearLoginFailures(user.email);

  // Issue a fresh session cookie. This does NOT sign out other devices — the
  // session is a signed cookie rather than a row in a table, so there is no
  // list of active sessions to revoke, and an old cookie stays valid until it
  // expires. Worth being straight about rather than implying otherwise: the
  // account page says so, and fixing it properly needs a version number stored
  // on the user and checked on every request.
  await createSession(userId, true);

  return { success: "Password changed." };
}

export async function requestDeletion(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  const userId = await getSessionUserId();
  if (!userId) return { error: "You need to be signed in." };

  const password = String(formData.get("password") ?? "");

  const user = await findUserById(userId);
  if (!user) return { error: "We couldn't find your account." };

  // Asking for the password again is not paranoia about the logged-in user —
  // it is about the laptop they left open in the library. Deleting an account
  // is the one action here that cannot be undone by the person it happens to
  // after the grace period, so it gets the one extra step.
  const verdict = await checkLoginAllowed(user.email);
  if (!verdict.allowed) return { error: throttleMessage(verdict.retryAfterSeconds) };

  if (!(await verifyPassword(password, user.passwordHash))) {
    await recordFailedLogin(user.email);
    return { error: "That password isn't right." };
  }

  try {
    await scheduleDeletion(userId);
  } catch (error) {
    console.error("[account] deletion request failed:", error);
    return { error: "Something went wrong. Please try again." };
  }

  await destroySession();
  redirect("/?deleted=1");
}

export async function undoDeletion(): Promise<void> {
  const userId = await getSessionUserId();
  if (!userId) return;

  try {
    await cancelDeletion(userId);
  } catch (error) {
    console.error("[account] could not cancel deletion:", error);
  }

  redirect("/account");
}
