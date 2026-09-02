import { SUBJECTS } from "./subjects";

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
//
// This address changed once already, from revision-lab-sigma.vercel.app. The
// "-sigma" was not chosen: Vercel bolts a random word onto the end when the
// plain name is taken, and revision-lab.vercel.app belongs to somebody else.
// Renaming the project in the Vercel dashboard is what changes it.
//
// The old address was NOT lost, which is worth writing down because it is the
// opposite of what I told Matthew would happen. Vercel kept
// revision-lab-sigma.vercel.app on the project and redirects it here, so
// every link anyone had already shared still works. Nothing needs deleting.
// If this ever changes again, leave the previous address in place for the
// same reason.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://revision-lab-uk.vercel.app";

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

export const SITE_DESCRIPTION = buildDescription();

// ⚠️ DERIVED, NOT TYPED OUT. This sentence is what Google prints underneath the
// link in its results, and for months it read "Computer Science, Maths and
// English" while the site also covered History, Geography and Business — three
// whole subjects the description was quietly telling people were not there.
//
// Nothing about that fails to compile, and nobody rereads a constant they wrote
// once. So it is generated from the same SUBJECTS list the pages are built
// from, exactly as the sitemap is: add a seventh subject and this fixes itself.
function buildDescription(): string {
  const names = SUBJECTS.map((s) => s.name);
  const list =
    names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  return `Free GCSE revision for ${list}. Key facts, flashcards and exam technique for every topic across Years 9, 10 and 11.`;
}

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

// ─── Pro/Plus preview switch ────────────────────────────────────────────────
//
// The account page has real "Upgrade to Plus" / "Upgrade to Pro" buttons —
// see UpgradeButtons.tsx — but clicking either only ever says "Coming soon".
// There's no payment processor wired up anywhere, and Vercel's free Hobby
// plan is explicitly non-commercial, so there is genuinely nothing to sell
// yet even if someone wanted to pay right now.
//
// The features those buttons are FOR — a topic-by-topic custom test builder,
// the calendar-style planner, and a wardrobe extended beyond Pixel — are
// real, working code (see app/pro-preview/), not mockups. But nobody should
// be able to reach them before there is an actual way to pay for them, so
// every page under app/pro-preview/ checks this flag first and 404s while
// it's off.
//
// It reads from an environment variable that is not set anywhere the site
// is actually deployed, so this is false in production by default — the
// preview pages don't exist as far as a real visitor is concerned. To try
// them yourself, add PRO_PREVIEW_ENABLED=true to .env.local and restart the
// dev server.
export const PRO_PREVIEW_ENABLED = process.env.PRO_PREVIEW_ENABLED === "true";
