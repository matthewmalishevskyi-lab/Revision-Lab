// "Early access for developers": one code, typed at the foot of /progress,
// unlocks /early-access, where the game being designed is shown before it is
// finished.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE CODE IS NOT IN THIS FILE, AND MUST NEVER BE.
// This repository is public. Written here in plain text, anyone reading
// GitHub would have it. What is stored is a salted scrypt hash, the same
// treatment an account password gets (users.ts): slow on purpose, so even
// with the hash in hand, working back to the code by guessing is expensive,
// and the live form is rate limited on top (throttle.ts). A check in
// check-security.mjs fails if the code ever appears anywhere in app/.
//
// To change the code, hash the new one the way hashPassword does and replace
// DEV_CODE_HASH. Everyone who already unlocked keeps access, because what
// their browser holds is a signature over their account, not the code.
//
// ⚠️ ACCESS IS TIED TO THE ACCOUNT, NOT JUST THE BROWSER. The cookie is
// signValue("dev-access:<user id>"), so it cannot be forged, and copying it
// into somebody else's logged-in browser does nothing — it is checked
// against whoever is logged in there.
// ─────────────────────────────────────────────────────────────────────────────

import { cookies } from "next/headers";
import { signValue, verifySignedValue } from "./session";
import { verifyPassword } from "./users";

const DEV_CODE_HASH =
  "fa95171a1080cd1dddd6663a2856e007:ac518e1a4f8247ac0dfcf1a44db6e8cc4005f975b222efd930547dbc6c4ea5e405edbb6544b4a09195799e16fe2678bc6b427181b4f747481ebd10bf56d6014e";

const COOKIE = "rl-dev-access";
const KEEP_DAYS = 365;

/**
 * Forgiving about how it is typed, strict about what it is. Phones capitalise
 * and add spaces on their own, and a code rejected for that is a code the
 * developer thinks is broken.
 */
export function normaliseDevCode(input: string): string {
  return input.replace(/\s+/g, "").toUpperCase().slice(0, 64);
}

export async function isDevCode(input: string): Promise<boolean> {
  const code = normaliseDevCode(input);
  if (!code) return false;
  return verifyPassword(code, DEV_CODE_HASH);
}

const valueFor = (userId: string) => `dev-access:${userId}`;

export async function grantDevAccess(userId: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, await signValue(valueFor(userId)), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(Date.now() + KEEP_DAYS * 24 * 60 * 60 * 1000),
    path: "/",
  });
}

export async function hasDevAccess(userId: string): Promise<boolean> {
  const store = await cookies();
  const signature = store.get(COOKIE)?.value;
  if (!signature) return false;
  return verifySignedValue(valueFor(userId), signature);
}
