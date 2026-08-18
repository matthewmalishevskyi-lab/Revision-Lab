// The homepage of Revision Lab.
// `app/page.tsx` IS the route for "/" in the App Router.

import Link from "next/link";
import { MASCOTS } from "./components/Mascots";
import { SiteHeader } from "./components/SiteHeader";
import { StreakSpotlight } from "./components/StreakSpotlight";
import { StructuredData, websiteSchema } from "./components/StructuredData";
import { getViewer } from "./lib/viewer";
import { getProgress } from "./lib/progress";
import { SITE_NAME, SITE_URL } from "./lib/site";
import { homepageCards, isGroup, subjectsInGroup } from "./lib/subjects";

// Different walking speeds so the three characters never march in step — three
// things moving in perfect sync looks mechanical, slightly off pace looks alive.
const WALK_DURATIONS = ["13s", "17s", "10s"];

// `async` because it waits on the session cookie to see who's logged in.
// Server Components can do that directly — no loading spinner, no fetching from
// the browser. The page arrives already knowing who you are.
export default async function Home(props: PageProps<"/">) {
  const user = await getViewer();

  // Only fetched when someone is actually logged in — a logged-out visitor
  // has no streak to show, and getProgress needs a real user id. Safe to
  // call even with no database configured; it just comes back with no
  // recorded activity, not an error.
  const progress = user ? await getProgress(user.id) : null;

  // Deleting an account logs you out, so the confirmation cannot live on the
  // account page — there is no session left to show it with. It arrives as a
  // query string instead, which survives the redirect and the sign-out.
  const { deleted } = await props.searchParams;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <StructuredData data={websiteSchema(SITE_URL, SITE_NAME)} />

      <SiteHeader />

      {deleted && (
        <p
          role="status"
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-center text-sm"
        >
          Your account has been scheduled for deletion and you&apos;ve been
          signed out. Everything will be permanently erased in 30 days — log
          back in before then if you change your mind.
        </p>
      )}

      {/* ---------- Welcome box, or the streak spotlight ---------- */}
      {/* Logged in and logged out visitors see genuinely different things
          here, not just different text in the same box. A logged-out visitor
          gets the plain marketing welcome — there's no streak to show them.
          A logged-in visitor gets StreakSpotlight instead: the streak, at the
          very top of the page, is what makes coming back mean something —
          see that component's comment for why this replaced the welcome box
          rather than sitting below it. */}
      {user && progress ? (
        <StreakSpotlight
          userName={user.name}
          streak={progress.streak}
          today={progress.today}
          nextUp={progress.nextUp}
        />
      ) : (
        <section className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/60 bg-white/55 px-8 py-10 text-center shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Welcome to Revision Lab
          </h1>
          <p className="mt-5 text-lg opacity-70 sm:text-2xl">
            Everything you would need for GCSE revision
          </p>
        </section>
      )}

      {/* ---------- Subject cards ---------- */}
      <section className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {homepageCards().map((card, index) => {
          const Mascot = MASCOTS[card.mascot];

          // A GROUP card links to its own chooser page and says how many
          // subjects are inside; a subject card links straight to its topics.
          //
          // Science is three separate GCSEs with separate exams and separate
          // progress, so listing all three here would make nine cards and bury
          // everything else. One card, then choose.
          const group = isGroup(card);
          const caption = group
            ? `${subjectsInGroup(card.slug).length} subjects →`
            : "Choose a topic →";

          return (
            // The whole card is now a Link, so clicking anywhere on it opens
            // the subject. Note it's an <a> under the hood, which means
            // keyboard users can tab to it and the browser can prefetch it —
            // things a clickable <div> with an onClick would silently lose.
            <Link
              key={card.slug}
              href={`/subjects/${card.slug}`}
              // `group` lets the child layers below react when THIS card is
              // hovered. `relative` + `overflow-hidden` keep the glow layers
              // and the walking character clipped inside the rounded corners.
              className={`group relative block min-h-[24rem] overflow-hidden rounded-2xl p-7 text-white transition duration-300 ease-out hover:-translate-y-1 ${card.shadow}`}
              // The gradient goes in `style` rather than a class because it's a
              // per-subject value. Tailwind scans source files as plain text to
              // decide which CSS to generate, so it can only find classes that
              // literally appear — a class built up in code produces nothing.
              style={{ backgroundImage: card.gradient }}
            >
              {/* Layer 1 — the "reflection". A white-to-transparent fade across
                  the top, like light catching a glossy surface. */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.38), rgba(255,255,255,0.06) 55%, rgba(255,255,255,0))",
                }}
              />

              {/* Layer 2 — a soft blurred ball of light in the corner, brighter
                  on hover so the card feels alive when you point at it. */}
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/25 opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Layer 3 — a second glow low down, so the bottom of the card
                  isn't just flat dark. */}
              <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

              {/* Layer 4 — a hairline highlight around the very edge, the way
                  glass and glossy plastic catch light on their rim. */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />

              {/* --- The character, pacing along the bottom of the card ---
                  Outer div: walks left to right and turns around.
                  Inner div: bobs up and down while that happens.
                  They're separate because both animations want to control
                  `transform`, and only one of them can win. */}
              <div
                className="animate-walk pointer-events-none absolute bottom-4 w-28"
                style={{ animationDuration: WALK_DURATIONS[index] }}
              >
                <div className="animate-bob">
                  <Mascot className="w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" />
                </div>
              </div>

              {/* The text needs `relative` so it sits ON TOP of those layers. */}
              <h2 className="relative text-3xl font-semibold tracking-tight drop-shadow-sm">
                {card.name}
              </h2>
              {/* A group says what is inside it even before you hover, because
                  "Science" alone does not tell you it contains three GCSEs. */}
              {group && (
                <p className="relative mt-1 text-sm opacity-75">{card.blurb}</p>
              )}
              <p className="relative mt-2 opacity-0 transition duration-300 group-hover:opacity-80">
                {caption}
              </p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
