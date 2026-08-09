// Staying logged in.
//
// HTTP has no memory. Every request arrives as a total stranger — the server
// has no idea it just spoke to you a second ago. So after you log in, we hand
// your browser a cookie, and the browser sends it back on every future request.
// That cookie is your "I already proved who I am" note.
//
// The obvious version of that note would be `userId=42`. The obvious problem:
// anyone can open their browser tools and change it to `userId=43`, and now
// they're logged in as someone else.
//
// So we SIGN it. The server appends a signature computed from the note plus a
// secret key only the server knows (an HMAC). Anyone can read the note — it
// isn't encrypted, and doesn't need to be — but nobody can produce a valid
// signature for a note they made up, because they don't have the key. On every
// request we recompute the signature and check it matches. If someone tampered
// with a single character, it won't.
//
// (The real world uses signed tokens like JWTs for this. Same idea, more
// features. Written out longhand here so you can see there's no magic.)

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";

// Renaming this logs everyone out, because browsers will keep sending the old
// cookie name and the server will no longer look for it. Harmless right now
// (the only account is yours, on your laptop) — but worth knowing before ever
// changing it once real people are signed in.
const COOKIE_NAME = "revision_lab_session";
const DATA_DIR = path.join(process.cwd(), "data");
const SECRET_FILE = path.join(DATA_DIR, "session-secret.txt");

type SessionPayload = {
  userId: string;
  expiresAt: number;
};

// The signing key. In a deployed app this MUST come from an environment
// variable (a setting stored on the server, never in the code). For local
// development we generate a random one on first run and keep it in /data,
// which is gitignored — so it never lands in your repository.
async function getSecret(): Promise<string> {
  const fromEnv = process.env.SESSION_SECRET;
  if (fromEnv) return fromEnv;

  // ───────────────────────────────────────────────────────────────────────────
  // A LANDMINE THAT WAS WAITING FOR THE DAY WE ADD A DATABASE.
  //
  // The fallback below writes a generated key into /data. On a host like Vercel
  // the filesystem is read-only, and that write throws EACCES (tested). Login
  // does not wrap createSession in a try/catch, so a visitor typing the CORRECT
  // password would have got a 500 error page.
  //
  // It could not happen before, because accounts switch themselves off in
  // production without a DATABASE_URL. It would have happened the moment one
  // was added and SESSION_SECRET was forgotten — which is the very next thing
  // planned. So: fail here, loudly and legibly, instead of somewhere confusing.
  //
  // ACCOUNTS_ENABLED now also requires SESSION_SECRET in production, so this
  // should be unreachable. It stays as a second line of defence, because the
  // failure it replaces was so much harder to diagnose than a clear message.
  // ───────────────────────────────────────────────────────────────────────────
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "SESSION_SECRET is not set. Generate one with " +
        `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" ` +
        "and add it to your hosting environment variables.",
    );
  }

  try {
    // `.trim()` matters: opening this file in an editor that helpfully adds a
    // trailing newline would silently change the key and log everyone out.
    return (await readFile(SECRET_FILE, "utf8")).trim();
  } catch {
    const generated = randomBytes(32).toString("hex");
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(SECRET_FILE, generated, "utf8");
    return generated;
  }
}

function sign(data: string, secret: string): string {
  return createHmac("sha256", secret).update(data).digest("base64url");
}

async function encodeSession(payload: SessionPayload): Promise<string> {
  const secret = await getSecret();
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body, secret)}`;
}

async function decodeSession(token: string): Promise<SessionPayload | null> {
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  const secret = await getSecret();
  const expected = sign(body, secret);

  // Same timing-safe comparison as the password check, for the same reason.
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as SessionPayload;

    // A signature proves the note wasn't tampered with. It does NOT prove the
    // note is still valid — an old one is still perfectly signed. So we check
    // the expiry ourselves.
    if (payload.expiresAt < Date.now()) return null;

    return payload;
  } catch {
    return null;
  }
}

export async function createSession(userId: string, rememberMe: boolean) {
  // "Keep me logged in" ticked → 30 days. Otherwise the session lasts a day.
  const days = rememberMe ? 30 : 1;
  const expiresAt = Date.now() + days * 24 * 60 * 60 * 1000;

  const token = await encodeSession({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    // httpOnly: JavaScript running in the page cannot read this cookie. That
    // way, if someone ever manages to inject a script into the site, it still
    // can't steal login sessions.
    httpOnly: true,
    // secure: only send over HTTPS. Switched off in development because
    // localhost is plain HTTP, so it would never be sent at all.
    secure: process.env.NODE_ENV === "production",
    // sameSite "lax": the browser won't attach this cookie to requests started
    // by other websites, which blocks a whole family of attacks where a
    // malicious page makes requests to our site using your logged-in identity.
    sameSite: "lax",
    expires: new Date(expiresAt),
    path: "/",
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// Returns the id of whoever is logged in, or null. Used by pages to decide
// what to show.
export async function getSessionUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = await decodeSession(token);
  return payload?.userId ?? null;
}
