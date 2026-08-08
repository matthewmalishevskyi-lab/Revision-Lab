// Site-wide settings that need to be identical everywhere.
//
// The URL matters more than it looks. Search engines and social media need
// ABSOLUTE addresses (https://...) rather than relative ones like /subjects,
// because they're reading your page from somewhere else entirely.
//
// It reads from an environment variable so the same code works on your laptop
// and on the real site without editing anything. Set NEXT_PUBLIC_SITE_URL in
// Vercel to your actual domain once you have one — until then the fallback is
// used, and the only consequence is that shared links preview oddly.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://revision-lab-sigma.vercel.app";

export const SITE_NAME = "Revision Lab";

export const SITE_DESCRIPTION =
  "Free GCSE revision for Computer Science, Maths and English. Key facts, flashcards and exam technique for every topic across Years 9, 10 and 11.";

// ─── The accounts safety switch ─────────────────────────────────────────────
//
// Accounts are stored in a JSON file, which works perfectly on your laptop and
// silently FAILS once deployed: hosts give each request a fresh, read-only
// filesystem, so a student could register, see "welcome", and find their
// account gone minutes later.
//
// Software that appears to work but quietly loses your data is worse than
// software that openly says "not ready yet". So rather than trusting ourselves
// to remember, the code checks:
//
//   - running locally?             accounts on  (the file works fine)
//   - deployed WITH a DATABASE_URL? accounts on  (real storage exists)
//   - deployed WITHOUT one?         accounts OFF (would lose data)
//
// Set DATABASE_URL in Vercel and accounts turn themselves back on. Nothing here
// needs editing.
export const ACCOUNTS_ENABLED =
  process.env.NODE_ENV !== "production" || Boolean(process.env.DATABASE_URL);
