import Link from "next/link";
import { Logo } from "./Logo";
import { logout } from "../lib/actions";
import { getViewer } from "../lib/viewer";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { chipClasses } from "./chipStyles";

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

  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-9 w-9" />
        <span className="text-2xl font-semibold tracking-tight">
          Revision Lab
        </span>
      </Link>

      <div className="flex items-center gap-3">
        {/* Always present, on every page, whether you're logged in or not.
            The logo also links home, but a labelled button is findable —
            people don't reliably know that a logo is clickable. */}
        <Link href="/" className={chipClasses}>
          <HomeIcon />
          <span className="hidden sm:inline">Home</span>
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
            {greeting && (
              <span className="hidden text-lg opacity-70 lg:inline">
                Hi, {user.name}
              </span>
            )}

            {/* Progress before Dashboard: it's the thing people actually come
                back for, and the reason accounts exist at all. */}
            <Link href="/progress" className={chipClasses}>
              <ChartIcon />
              <span className="hidden sm:inline">Progress</span>
            </Link>

            <Link href="/dashboard" className={chipClasses}>
              <GridIcon />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>

            {/* Account settings need to be reachable in one click from
                anywhere. Somebody who wants their data deleted should not have
                to hunt for the page that does it. */}
            <Link href="/account" className={chipClasses}>
              <CogIcon />
              <span className="hidden sm:inline">Account</span>
            </Link>

            {/* Logging out CHANGES something on the server, so it's a form, not
                a link. Links are for going places; anything that alters state
                should be a real submission. */}
            <form action={logout}>
              <button type="submit" className={chipClasses}>
                <ExitIcon />
                <span className="hidden sm:inline">Log out</span>
              </button>
            </form>
          </>
        ) : (
          // When accounts are off there's no Login button at all, rather than
          // one that leads somewhere apologetic.
          ACCOUNTS_ENABLED && (
            <Link href="/login" className={chipClasses}>
              Login/Register
            </Link>
          )
        )}
      </div>
    </header>
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
