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
export const chipClasses =
  "flex items-center gap-2 rounded-xl border border-white/60 bg-white/60 px-4 py-2.5 text-lg font-medium shadow-sm backdrop-blur transition hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20";
