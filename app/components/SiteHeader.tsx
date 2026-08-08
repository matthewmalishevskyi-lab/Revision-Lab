import Link from "next/link";
import { Logo } from "./Logo";
import { getCurrentUser, logout } from "../lib/actions";
import { ACCOUNTS_ENABLED } from "../lib/site";

// The header that appears on every page.
//
// It works out for itself who's logged in, rather than each page fetching that
// and passing it down. Server Components can do their own data loading, which
// keeps pages from having to know things they don't care about.

const chipClasses =
  "flex items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-4 py-2.5 text-lg font-medium shadow-sm backdrop-blur transition hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20";

export async function SiteHeader({ greeting = true }: { greeting?: boolean }) {
  // Don't even ask who's logged in if accounts are switched off.
  const user = ACCOUNTS_ENABLED ? await getCurrentUser() : null;

  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-9 w-9" />
        <span className="text-2xl font-semibold tracking-tight">
          Revision Hub
        </span>
      </Link>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            {greeting && (
              <span className="hidden text-lg opacity-70 lg:inline">
                Hi, {user.name}
              </span>
            )}

            <Link href="/dashboard" className={chipClasses}>
              <HomeIcon />
              <span className="hidden sm:inline">Dashboard</span>
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
