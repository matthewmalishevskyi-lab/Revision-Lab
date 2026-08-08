// Where accounts live, and how passwords are stored.
//
// NOTHING IS INSTALLED FOR THIS. Every piece of cryptography here comes from
// Node's built-in `crypto` module, which is part of Node itself. That's
// deliberate: you can read every line and see exactly what's happening rather
// than trusting a black box.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE ONE RULE OF PASSWORDS: never store the password.
//
// We store a *hash* — the result of scrambling the password through a one-way
// function. Given the password you can compute the hash; given the hash you
// cannot work backwards to the password. So if this file ever leaked, the
// attacker still doesn't have anyone's password.
//
// Two details that turn "a hash" into "a safe hash":
//
//  1. SALT. Each password gets a random value mixed in before hashing. Without
//     it, two people with the password "password123" would produce identical
//     hashes, and attackers could crack every account at once using a
//     pre-computed table. The salt makes every hash unique even for identical
//     passwords, so each one must be attacked individually.
//
//  2. A DELIBERATELY SLOW ALGORITHM. We use scrypt, which is designed to be
//     slow and memory-hungry. That sounds like a bug; it's the entire point.
//     A fast hash like MD5 lets an attacker try billions of guesses a second.
//     scrypt drags that down to a crawl. You won't notice ~100ms when logging
//     in. Someone brute-forcing a stolen database very much will.
// ─────────────────────────────────────────────────────────────────────────────

import { randomBytes, randomUUID, scrypt, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

// Node's scrypt uses an old-style callback. `promisify` wraps it so we can
// `await` it like anything else.
const scryptAsync = promisify(scrypt);

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

// ─── Storage ────────────────────────────────────────────────────────────────
// A JSON file. This is genuinely fine while the site runs on your laptop, and
// it means you can open `data/users.json` and SEE what got saved, which is a
// much better way to learn than a database you can't inspect.
//
// It will NOT survive being deployed, for two real reasons:
//   - Hosts like Vercel give each request a fresh, read-only filesystem, so
//     writes vanish.
//   - Two people registering at the same moment would overwrite each other,
//     because reading and writing a whole file isn't atomic.
// Swapping this file for a database is the upgrade. Nothing else has to change,
// which is exactly why the storage code is isolated in here.

async function readUsers(): Promise<User[]> {
  try {
    const raw = await readFile(USERS_FILE, "utf8");
    return JSON.parse(raw) as User[];
  } catch {
    // File doesn't exist yet — that just means nobody has registered.
    return [];
  }
}

async function writeUsers(users: User[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
}

// Emails are case-insensitive in practice, so we store and compare them
// lowercased. Otherwise "Matt@x.com" and "matt@x.com" become two accounts.
export function normaliseEmail(email: string): string {
  return email.trim().toLowerCase();
}

// ─── Passwords ──────────────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scryptAsync(password, salt, 64)) as Buffer;
  // Store the salt alongside the hash — we'll need it again to check a login,
  // and it isn't secret. Its job is uniqueness, not secrecy.
  return `${salt}:${derived.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;

  const derived = (await scryptAsync(password, salt, 64)) as Buffer;
  const expected = Buffer.from(hash, "hex");

  if (expected.length !== derived.length) return false;

  // `timingSafeEqual` instead of `===` on purpose. A normal comparison stops at
  // the first character that differs, so a wrong guess starting with the right
  // letter takes microscopically longer to reject. Measured over thousands of
  // attempts, that leak lets an attacker work out the value one character at a
  // time. This version always takes the same time regardless. It's called a
  // timing attack, and it's a lovely example of a bug that isn't in the logic
  // at all — it's in how long the logic takes.
  return timingSafeEqual(expected, derived);
}

// ─── Queries ────────────────────────────────────────────────────────────────

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await readUsers();
  const target = normaliseEmail(email);
  return users.find((u) => u.email === target) ?? null;
}

export async function findUserById(id: string): Promise<User | null> {
  const users = await readUsers();
  return users.find((u) => u.id === id) ?? null;
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
}): Promise<User> {
  const users = await readUsers();
  const email = normaliseEmail(input.email);

  if (users.some((u) => u.email === email)) {
    throw new Error("EMAIL_TAKEN");
  }

  const user: User = {
    id: randomUUID(),
    name: input.name.trim(),
    email,
    passwordHash: await hashPassword(input.password),
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeUsers(users);
  return user;
}
