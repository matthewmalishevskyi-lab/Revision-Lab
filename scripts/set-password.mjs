// Set a new password for someone who is locked out.
//
//   node scripts/set-password.mjs "TheirNewTempPassword123"
//
// It prints a hash and the SQL to paste into Supabase. Run it, send the person
// the temporary password by some other route (in person, text message), and
// tell them to change it — though note there is no change-password page yet,
// so for now that means asking you again. That is a gap worth closing.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY A LOCKED-OUT USER NEEDS THIS RATHER THAN "LOOK UP MY PASSWORD"
//
// Nobody can look up a password on this site. Not you, not me, not somebody who
// steals the whole database. What is stored is a scrypt HASH: the password put
// through a deliberately slow one-way function. Given the password you can
// compute the hash; given the hash you cannot work backwards.
//
// That is why every real service — your bank, your school, Google — sends you a
// RESET LINK instead of your old password. Any site that emails you your
// existing password is telling you it stored it readably, which is a serious
// mistake. If you ever see one, that is what it means.
//
// So the only way to help someone locked out is to give them a NEW password.
// This script makes one properly, using the identical scrypt-and-salt scheme
// as registration, so the site verifies it exactly like any other.
//
// The proper long-term answer is the reset flow on the forgot-password page:
// email a single-use link that expires. That needs an email service, which is
// a project of its own. Until then, this is the honest manual version.
// ─────────────────────────────────────────────────────────────────────────────

import { randomBytes, scrypt } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

const password = process.argv[2];

if (!password) {
  console.error("Usage: node scripts/set-password.mjs \"TheNewPassword\"");
  process.exit(1);
}

if (password.length < 8) {
  console.error("Passwords must be at least 8 characters — the site enforces this too.");
  process.exit(1);
}

// Identical to hashPassword() in app/lib/users.ts. If that ever changes, this
// must change with it, or the hash it produces will not verify.
const salt = randomBytes(16).toString("hex");
const derived = await scryptAsync(password, salt, 64);
const hash = `${salt}:${derived.toString("hex")}`;

console.log("\nRun this in Supabase → SQL Editor, with the right email:\n");
console.log(`update public.users`);
console.log(`   set password_hash = '${hash}'`);
console.log(` where email = 'THEIR-EMAIL-HERE';`);
console.log("\nThen tell them their temporary password — in person or by text,");
console.log("not by email, since email is how someone would break into the account.\n");
