"use server";

// The one action behind the early-access form. Who is asking comes from the
// session cookie, never from the form — the rule every action here follows.

import { getSessionUserId } from "./session";
import { grantDevAccess, isDevCode } from "./dev-access";
import { checkDevAccessAllowed, recordFailedDevAccess, throttleMessage } from "./throttle";

export async function unlockDevAccess(
  code: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const userId = await getSessionUserId();
  if (!userId) return { ok: false, error: "You need to be logged in." };
  if (typeof code !== "string") return { ok: false, error: "Type the code first." };

  const verdict = await checkDevAccessAllowed(userId);
  if (!verdict.allowed) return { ok: false, error: throttleMessage(verdict.retryAfterSeconds) };

  if (!(await isDevCode(code))) {
    await recordFailedDevAccess(userId);
    return { ok: false, error: "That code isn't right." };
  }

  await grantDevAccess(userId);
  return { ok: true };
}
