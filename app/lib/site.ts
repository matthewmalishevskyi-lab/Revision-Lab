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

// The address on the privacy page, so people can ask for their data or its
// deletion. UK data protection law requires a route to a real human; this is
// it.
//
// It is a single constant rather than an address typed into each page, because
// the day this changes it must change EVERYWHERE — a privacy page listing an
// address nobody reads is worse than no address at all.
//
// Note it will be scraped and will attract spam: any address on a public page
// does. Swapping it for a dedicated one later is a one-line change here.
export const CONTACT_EMAIL = "matthewmalishevskyi@gmail.com";

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
//   - running locally?          accounts on  (the file works fine)
//   - deployed, fully set up?   accounts on  (real storage exists)
//   - deployed, half set up?    accounts OFF (would lose data, or error)
//
// Set the three variables in Vercel and the Login button comes back on its own.
// Nothing in the code needs editing:
//
//   SUPABASE_URL                 your project's API URL
//   SUPABASE_SERVICE_ROLE_KEY    the secret key that can read and write rows
//   SESSION_SECRET               a long random string for signing cookies
//
// ALL THREE are required, and the third one is here because of a bug found
// during a hunt rather than because it looked tidy. The session code falls back
// to generating a signing key and saving it to /data; a deployed filesystem is
// read-only, so that write throws EACCES. Login does not catch it, so a visitor
// typing the CORRECT password would have hit a 500 page. Half-finished setups
// are exactly what this switch exists to catch.
export const ACCOUNTS_ENABLED =
  process.env.NODE_ENV !== "production" ||
  (Boolean(process.env.SUPABASE_URL) &&
    Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
    Boolean(process.env.SESSION_SECRET));
