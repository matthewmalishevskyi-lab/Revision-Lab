// The shared look for every pill-shaped button in the header.
//
// This used to live inside SiteHeader.tsx and get exported from there. That
// broke dark mode: SiteHeader is a Server Component that reads the session
// (via getViewer, which touches cookies through next/headers) — and the
// moment ThemeToggle, a Client Component, imported ANYTHING from that file,
// Next tried to pull SiteHeader's whole module graph into the browser bundle,
// including the server-only session code. tsc and eslint don't understand
// that boundary, so both passed clean; only Next's own compiler catches it,
// which is exactly the check that couldn't run in the sandbox this was first
// built in.
//
// The fix is this file: a constant with zero imports of its own, safe for a
// Server Component and a Client Component to both depend on without either
// one dragging the other's world into a bundle that shouldn't have it.
//
// Tightened 2026-08-25: the logged-in header row was measured (not
// eyeballed) at needing roughly 1450px to lay out in a single line, on a
// page whose own content column is capped at max-w-6xl — about 1100px
// available. Every screen at or above that container width was overflowing
// the column and, on a real 1536px-wide laptop screen, running the whole
// PAGE past the edge of the browser window, cutting "Log out" off-screen
// entirely. Trimming each chip's own padding is one of several changes that
// together close that gap — see SiteHeader.tsx's own comment for the rest.
export const chipClasses =
  "flex items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-3.5 py-2 text-lg font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20";

// For a chip that's a single, universally recognised icon and nothing else
// — search's magnifying glass, the sun/moon theme switch, the hamburger —
// where a text label adds width without adding clarity. Equal padding on
// every side keeps these square-ish rather than the wide, lopsided pill
// `chipClasses` makes when its text span is empty.
//
// ⚠️ THE PADDING HERE IS NOT ARBITRARY — it makes these the same height as
// chipClasses, and they were measured on the live site, not eyeballed:
//
//     text chip  (Home, Login/Register) ....... 46px tall
//     icon chip  (search, theme, menu) ........ 42px tall   ← 4px short
//
// Four pixels sounds like nothing. In a row of buttons sitting side by side it
// is the difference between a tidy row and one that looks slightly broken,
// which is exactly how it was described when someone looked at it.
//
// The arithmetic, so a future change can keep it true:
//     text chip: text-lg line-height 28 + py-2 (8+8) + border (1+1) = 46
//     icon chip: icon 20        + p-3  (12+12) + border (1+1) = 46
//
// So if chipClasses' text size or vertical padding ever changes, this padding
// has to move with it. There is a check for this in check-security.mjs.
export const iconChipClasses =
  "flex items-center justify-center rounded-xl border border-white/60 bg-white/60 p-3 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20";

// The one deliberately loud button in the header.
//
// Joining a live quiz needs no account — it is a 6-digit room code, the same
// shape as a Kahoot PIN — but the only way in was a link buried on the /quiz
// page, which nobody found. A filled accent chip against a row of translucent
// white ones is the standard "this is the primary action" treatment, and it is
// the whole point here: this button is meant to be spotted from across a
// classroom, by someone whose friend has just read a code out loud.
//
// Same geometry as chipClasses (px-3.5 py-2 text-lg + 1px border = 46px tall),
// so making it stand out by COLOUR does not also make it stand out by size and
// wreck the row it sits in.
export const quizChipClasses =
  "flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-3.5 py-2 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600";
