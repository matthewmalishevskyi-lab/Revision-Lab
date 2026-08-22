"use client";

import { useEffect, useState } from "react";
import { chipClasses } from "./chipStyles";

// The hamburger menu that holds the "you're logged in" links (Progress,
// Dashboard, Account, Log out, Pixel) on narrow screens.
//
// WHY THIS EXISTS: Home, Search and the theme toggle already fit on a phone
// screen with room to spare. Adding Pixel's avatar plus four more chips next
// to them does not — measured on a real 390px-wide phone screen, that whole
// header row came out 674px wide, so everything past the theme toggle sat
// off the right edge of the screen with no scrollbar and no way to reach it.
// A logged-in visitor on a phone genuinely could not get to Dashboard,
// Account, or even Log out.
//
// The fix keeps the wider-screen row exactly as it was (see the
// `hidden sm:flex` wrapper in SiteHeader.tsx) and, only below that
// breakpoint, renders the SAME Links and the same logout form a second time,
// inside this dropdown instead. Nothing was removed from the site — it's
// the same destinations, just reachable from a phone.
export function MobileMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Every link inside the panel is a real navigation (or, for logout, a form
  // submit that redirects), and either one unmounts this component on the
  // next page — which resets `open` back to false for free. Escape doesn't
  // go through React Router at all, so it's the one case that needs its own
  // listener.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        className={chipClasses}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <>
          {/* A full-screen click target behind the panel, so tapping
              anywhere outside it closes the menu — the behaviour a phone
              user already expects from a dropdown like this one. */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 cursor-default bg-black/20"
          />
          <div className="absolute right-0 top-full z-40 mt-2 flex w-60 flex-col items-stretch gap-1 rounded-2xl border border-white/60 bg-white/95 p-3 text-left shadow-lg backdrop-blur dark:border-white/15 dark:bg-neutral-900/95">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

// The style every link/button inside the dropdown shares — a full-width row
// rather than a pill, since there's no need to save horizontal space once
// the links are stacked vertically instead of squeezed into one line.
export const mobileMenuItemClasses =
  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-lg font-medium transition hover:bg-black/5 dark:hover:bg-white/10";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6.5h16M4 12h16M4 17.5h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
