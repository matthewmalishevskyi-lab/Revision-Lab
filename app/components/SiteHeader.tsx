import Link from "next/link";
import { Logo } from "./Logo";
import { logout } from "../lib/actions";
import { getViewer } from "../lib/viewer";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { PixelCompanion } from "./PixelCompanion";
import { chipClasses, quizChipClasses } from "./chipStyles";
import { MobileMenu, mobileMenuItemClasses } from "./MobileMenu";

// The header that appears on every page.
//
// It works out for itself who's logged in, rather than each page fetching that
// and passing it down. Server Components can do their own data loading, which
// keeps pages from having to know things they don't care about.
//
// chipClasses lives in its own file (chipStyles.ts), not here — see that
// file's comment for why ThemeToggle can't safely import it from a Server
// Component module.

export async function SiteHeader({ greeting = true }: { greeting?: boolean }) {
  // Don't even ask who's logged in if accounts are switched off.
  const user = ACCOUNTS_ENABLED ? await getViewer() : null;

  // First name only, everywhere this header shows a greeting. Measured (not
  // guessed) as one of several things trimmed to fix a real overflow bug —
  // see the big comment on the button row below for the full story.
  // `.trim().split` rather than a naive `[0]` so a name typed with leading
  // spaces, or as a single word, both still work.
  const firstName = user?.name.trim().split(/\s+/)[0];

  return (
    // ─────────────────────────────────────────────────────────────────────
    // `@container`, and every breakpoint below is `@`-prefixed. This is the
    // fix for a bug that kept coming back in different clothes.
    //
    // `sm:` and `lg:` ask how wide the WINDOW is. This header does not live in
    // the window — it lives inside whatever column the page around it happens
    // to have, and those range from max-w-md (448px) on the quiz join page to
    // max-w-7xl (1280px). On a 1440px screen, `sm:` was true on every one of
    // them, so the join page rendered the full wide header inside a 448px
    // column and wrapped it into five ragged rows.
    //
    // Container queries ask how wide THIS ELEMENT is instead. The header now
    // adapts to the space it actually has, which is the thing it was always
    // trying to do. It fixes every narrow page at once — and 29 of the site's
    // page columns are narrower than the 923px the full row needs.
    //
    // The ladder below is built from measured widths, not guesses:
    //
    //   base   252px  logo mark, Join/Search/Theme/account, all icon-only
    //   @sm    364px  + the "Revision Lab" wordmark        (container 384)
    //   @md    414px  + the Home chip                        (container 448)
    //   @xl    549px  + the words on the account chip        (container 576)
    //   @2xl   637px  + the "Join quiz" label                (container 672)
    //   @3xl   687px  + the wordmark grows to text-2xl       (container 768)
    //   @4xl   862px  + Pixel, Progress and Revise           (container 896)
    //   @5xl   923px  + the "Home" label                     (container 1024)
    //
    // Each step has headroom over the container width that unlocks it.
    //
    // ── The phone rungs (base → @md) were added 2026-09-02, and they were
    //    added because the header was MEASURED on a phone and was four rows
    //    and 152 pixels tall — a fifth of an iPhone screen spent on nothing
    //    but buttons, before a single word of revision. The old base rung
    //    kept Home (50px) and a full-width "Login/Register" chip (157px)
    //    visible, which needed 381px of row inside the 272px an iPhone SE
    //    actually gives this header. It could only wrap.
    //
    //    Two cuts fix it, both reversed as soon as there is room: Home goes
    //    (the logo beside it already goes home, and it comes back at @md),
    //    and the account chip drops to its icon (its words come back at
    //    @xl). That is 252px at the narrowest width this site is likely to
    //    be opened at — one row, with 20px to spare.
    //
    //    The wordmark moves the other way. It used to be hidden below
    //    @xl — so every phone AND every small laptop window showed a bare
    //    book icon and nothing else. It now appears from @sm at text-base
    //    and grows at @3xl.
    //
    //    @sm rather than lower is a MEASURED limit, not caution. The
    //    wordmark renders at 94px; with the four icon chips (216px) and the
    //    gaps the row then needs about 370px, and an iPhone 15 gives this
    //    header 342px. Setting it to @xs was tried and put the header
    //    straight back onto two rows at 375, 390 and 414. Fitting it on a
    //    phone would mean dropping Search, the theme toggle or Join quiz,
    //    which is the worse trade — the name is nice, a working control is
    //    useful. `sm:` and `lg:`
    //    are still the wrong tools here — see the container-query note
    //    above — so these are `@`-prefixed like every other rung.
    //
    //    Every rung above was re-measured after the change, at twelve widths
    //    from 320px to 1536px. The band that still needed work was 500-700px
    //    — a small laptop window, or a tablet — where the wordmark and the
    //    account label both arriving at once overflowed again; hence the
    //    account label waiting until @xl and the big wordmark until @3xl,
    //    rather than both landing on the same rung.
    // ─────────────────────────────────────────────────────────────────────
    <header className="@container flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      {/* `shrink-0` and `whitespace-nowrap` because in the screenshot that
          prompted this fix, "Revision Lab" had been squeezed into two lines by
          the button row next to it. A wordmark that breaks in half is the
          single most broken-looking thing a header can do. */}
      <Link href="/" className="flex shrink-0 items-center gap-2 @sm:gap-3">
        <Logo className="h-9 w-9" />
        {/* Two sizes rather than hidden-then-shown: on a phone the wordmark
            has to earn its 96px, so it is text-base there and only grows to
            the full text-2xl once the container is wide enough not to
            notice. Below @sm there genuinely isn't room, and a squeezed
            wordmark is worse than none. */}
        <span className="hidden whitespace-nowrap text-base font-semibold tracking-tight @sm:inline @3xl:text-2xl">
          Revision Lab
        </span>
      </Link>

      {/* `flex-wrap` here for the same reason it is on the logged-in group
          inside: this row now has one more button in it, and a row that
          cannot wrap overflows the page instead — which is precisely the bug
          that was fixed once already at 1536px. Wrapping is the ugly outcome;
          overflowing off the edge of the browser is the broken one. */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {/* Always present, on every page, whether you're logged in or not.
            The logo also links home, but a labelled button is findable —
            people don't reliably know that a logo is clickable. */}
        {/* Hidden entirely below @md, not just its label. On a phone this
            chip is 50px spent on a destination the logo two inches to its
            left already reaches, and 50px is the difference between one row
            and two. It returns the moment there is room. */}
        <Link href="/" className={`hidden @md:flex ${chipClasses}`}>
          <HomeIcon />
          {/* The LABEL waits until @5xl even once the chip itself is
              back: below about 1024px it is the cheapest 60px to give back,
              and the logo beside it already goes home. Above it, the label
              stays — people genuinely do not all know a logo is
              clickable. */}
          <span className="hidden @5xl:inline">Home</span>
        </Link>

        {/* Joining a live quiz, from anywhere on the site.
            Placed in this always-visible group rather than with the
            account links because it needs NO account — a room code is all
            it takes, like a Kahoot PIN — so hiding it behind a login would
            be wrong for the exact people most likely to use it: a class
            where one person hosts and everyone else joins.

            The label hides below @2xl so that on a phone this costs 50px
            rather than 138px, which is what keeps it from squeezing the
            row it just joined. */}
        <Link href="/quiz/join" className={quizChipClasses}>
          <PlayIcon />
          <span className="hidden @2xl:inline">Join quiz</span>
        </Link>

        {/* Finding a topic by typing beats clicking through a subject page to
            find it, once there are this many topics on the site. Sits next to
            Home because both are "get me somewhere", unlike the account
            links after it. */}
        <SearchBox />

        {/* The one button in this row that changes something in the browser
            rather than navigating anywhere, which is why it's a small Client
            Component instead of another Server-rendered Link. */}
        <ThemeToggle />

        {user ? (
          <>
            {/* Everything from here down is the same set of links rendered
                TWICE — once for screens with room to spare, once inside the
                phone hamburger below. See MobileMenu.tsx for why: this whole
                group is 500+ pixels wide with Pixel and four chips in it,
                which never fit next to Home/Search/the theme toggle on a
                real phone screen. Only one of the two ever shows at once,
                switched purely by CSS breakpoint (`hidden @4xl:flex` vs the
                `@4xl:hidden` on the duplicated items), so there's exactly one visible
                copy of "Dashboard" at any given screen width.

                ⚠️ A second, wider-screen overflow bug lived here too, found
                by actually measuring rather than assuming "sm:flex" meant
                "fits any screen sm and up." This row's own content needed
                roughly 1450px in a single line — Pixel, a greeting and six
                chips — but every page's content column is capped at
                max-w-6xl, about 1100px wide. That's not a narrow-screen
                problem: it overflowed the column, and therefore the page
                itself, on every desktop width, including a real 1536px-wide
                laptop screen where "Log out" ran off the right edge of the
                browser window entirely, with a horizontal scrollbar as the
                only clue anything was wrong.

                Fixed with several small cuts rather than one big one:
                dropping the "Hi, {name}" greeting entirely (see below —
                it was one of the widest things here, for zero information
                StreakSpotlight doesn't already say louder, right below this
                row); icon-only Search/theme/menu buttons (see
                chipStyles.ts); tighter padding and gaps; and "Revise"
                instead of "Revise today" on this specific chip. Verified
                against the real, deployed page at 1536px — no longer
                overflows, with room to spare. `flex-wrap` stays on as a
                genuine safety net regardless: if some future change (a
                longer name, a new chip, the large-text accessibility
                setting) ever makes this not fit again, it wraps onto a
                second line instead of quietly overflowing the page a
                second time. */}
            <div className="hidden flex-wrap items-center gap-2 @4xl:flex">
              {/* Pixel, wearing whatever's equipped in the wardrobe — see
                  PixelCompanion.tsx. This is the one placement that puts him on
                  literally every page, since SiteHeader is on all of them.
                  No "Hi, {name}" greeting next to him any more, deliberately
                  — see the comment above. It's kept in the phone menu below,
                  which has room to spare and no "Welcome back" card nearby. */}
              <PixelCompanion className="h-10" />

              {/* Progress before Dashboard: it's the thing people actually come
                  back for, and the reason accounts exist at all. */}
              <Link href="/progress" className={chipClasses}>
                <ChartIcon />
                <span>Progress</span>
              </Link>


              {/* The global daily queue — overdue flashcards, weak topics and
                  new ones, across every subject at once. See
                  lib/revision-queue.ts. Reachable from anywhere, the same
                  reasoning as Progress and Dashboard sitting here rather
                  than only being linked from inside one page. Shortened to
                  "Revise" here specifically — the full "Revise today (N)"
                  phrasing, with the actual count, is still what the
                  homepage's own streak card says; this chip only has to get
                  you there. */}
              <Link href="/revise" className={chipClasses}>
                <ChecklistIcon />
                <span>Revise</span>
              </Link>


            </div>

            <MobileMenu>
              {/* Pixel and the greeting are in the visible row above `sm`. */}
              <div className="flex items-center gap-3 border-b border-black/10 px-1 pb-3 dark:border-white/10 @4xl:hidden">
                <PixelCompanion className="h-10" />
                {greeting && (
                  <span className="text-lg font-medium opacity-80">
                    Hi, {firstName}
                  </span>
                )}
              </div>

              <Link href="/progress" className={`${mobileMenuItemClasses} @4xl:hidden`}>
                <ChartIcon />
                <span>Progress</span>
              </Link>

              <Link href="/dashboard" className={mobileMenuItemClasses}>
                <GridIcon />
                <span>Dashboard</span>
              </Link>

              <Link href="/revise" className={`${mobileMenuItemClasses} @4xl:hidden`}>
                <ChecklistIcon />
                <span>Revise today</span>
              </Link>

              <Link href="/account" className={mobileMenuItemClasses}>
                <CogIcon />
                <span>Account</span>
              </Link>

              <form action={logout}>
                <button type="submit" className={mobileMenuItemClasses}>
                  <ExitIcon />
                  <span>Log out</span>
                </button>
              </form>
            </MobileMenu>
          </>
        ) : (
          // When accounts are off there's no Login button at all, rather than
          // one that leads somewhere apologetic.
          ACCOUNTS_ENABLED && (
            // "Login/Register" is 157px of text — by a distance the widest
            // thing in this row, and on a phone it was the single item
            // pushing the header onto a fourth line. Below @md it is the
            // icon alone; the words come back the moment the container can
            // hold them. An aria-label carries the meaning while the text
            // is hidden, so this is only ever a VISUAL shortening — a
            // screen reader still hears the whole thing.
            <Link
              href="/login"
              className={chipClasses}
              aria-label="Login or register"
            >
              <UserIcon />
              <span className="hidden @xl:inline">Login/Register</span>
            </Link>
          )
        )}
      </div>
    </header>
  );
}

// A play triangle in a rounded square, for the live quiz. Same 24 grid and 1.7
// stroke as every other icon in this header — that consistency is what stops a
// row of icons looking like it was assembled from three different websites.
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10 8.5l5.5 3.5L10 15.5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A head and shoulders, for the logged-out account chip. Same 24 grid and 1.7
// stroke as every other icon in this header. Deliberately not the cog (that
// one belongs to Account, for people who are already logged in) — two
// different destinations sharing an icon reads as one destination with two
// names.
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8.5" r="3.75" />
        <path d="M4.75 19.5a7.25 7.25 0 0114.5 0" />
      </g>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A grid, for the dashboard — the house icon now belongs to Home, and two
// buttons sharing one icon would be worse than either having none.
function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </g>
    </svg>
  );
}

// Rising bars, for progress. Deliberately different from the dashboard grid —
// two buttons sharing an icon is worse than either having none.
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20V4M4 20h16M8 20v-5M13 20v-9M18 20v-13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Three ticked rows, for the revision queue — a literal checklist, since
// that's exactly what the page behind it is: a ranked list of things to do.
// Deliberately not reusing ChartIcon or GridIcon; two links sharing an icon
// reads as one link with two names.
function ChecklistIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 6.5l1.5 1.5 2.5-2.5" />
        <path d="M11 6.5h9" />
        <path d="M4.5 12.5l1.5 1.5 2.5-2.5" />
        <path d="M11 12.5h9" />
        <path d="M4.5 18.5l1.5 1.5 2.5-2.5" />
        <path d="M11 18.5h9" />
      </g>
    </svg>
  );
}

function ExitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 4.5H6.5A1.5 1.5 0 005 6v12a1.5 1.5 0 001.5 1.5H14M17 8.5l3.5 3.5-3.5 3.5M20 12h-9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A cog, for account settings. Drawn in the same weight as the others: 1.7
// stroke, rounded caps, on a 24 grid — that consistency is what stops a row of
// icons from looking like it was assembled from three different websites.
function CogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6L17 17M7 7L5.4 5.4" />
    </svg>
  );
}
