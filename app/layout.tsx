import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// What search engines and social media see.
//
// `metadataBase` turns relative paths into full URLs everywhere else, so no
// other page has to repeat the domain.
//
// The title `template` means any page setting a title of "Maths" automatically
// becomes "Maths · Revision Lab" in the browser tab and in search results,
// without every page repeating the site name.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Revision Lab · Free GCSE revision notes and flashcards",
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  // Words people might actually type into Google. Keywords carry little weight
  // with search engines these days — the real work is done by the titles,
  // descriptions and the content itself being genuinely useful.
  keywords: [
    "GCSE revision",
    "GCSE Computer Science",
    "GCSE Maths",
    "GCSE English",
    "revision notes",
    "flashcards",
    "exam technique",
    "Year 9",
    "Year 10",
    "Year 11",
  ],
  // Open Graph controls how a link looks when pasted into WhatsApp, Discord,
  // Instagram or a group chat — which is how a site like this actually spreads
  // between students, far more than through search.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Revision Lab · Free GCSE revision notes and flashcards",
    description: SITE_DESCRIPTION,
    locale: "en_GB",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Revision Lab · Free GCSE revision",
    description: SITE_DESCRIPTION,
  },
  // Explicitly invites search engines to index the site.
  robots: {
    index: true,
    follow: true,
  },

  // ── Proving to Google that this site is yours ─────────────────────────────
  //
  // Google Search Console will not show you a site's search data until you
  // prove you control it — otherwise anyone could snoop on anyone's traffic.
  // One accepted proof is a meta tag containing a code only Google gave you.
  //
  // The code arrives as an environment variable rather than being typed into
  // this file, so verifying costs no code change and no deploy of new code.
  // It is not a secret — it ends up visible in the page source, which is the
  // entire point — but keeping it out here means the same code works for a
  // future domain without editing.
  //
  // With the variable unset, `undefined` means Next simply omits the tag.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

import { SiteFooter } from "./components/SiteFooter";

// --- Avoiding a flash of the wrong theme on load ----------------------------
//
// The class that switches dark mode on (`dark`, on <html>) is only added by
// ThemeToggle.tsx, which is a Client Component — it can't run anything until
// React has hydrated. Left alone, that means every dark-mode visitor would
// see a flash of the light page first, every single load, before JavaScript
// caught up and switched it. That flash is the classic giveaway of a
// bolted-on dark mode.
//
// The fix is this tiny script, run as plain HTML rather than through React.
// It sits in <head>, which the browser parses and executes BEFORE it starts
// painting <body> — so by the time anything is on screen, the class is
// already correct. No flash, because nothing wrong was ever drawn.
//
// It reads localStorage directly rather than waiting for a React component,
// which is exactly why this has to be a raw <script>, not JSX logic.
// ─── The phone half of the page setup ───────────────────────────────────────
//
// Next fills in a sensible default viewport on its own, so this export exists
// for the two things it does NOT do by default, both of them iPhone-shaped.
//
// `viewportFit: "cover"` lets the page fill the whole screen, corners and all,
// rather than sitting in a letterbox with blank bars beside the notch. That is
// only safe because globals.css pads the body by `env(safe-area-inset-*)` to
// match — the two changes belong together, and neither is right on its own.
//
// `themeColor` is what tints Safari's own address bar and the status bar above
// it to match the page, which is most of the difference between a site that
// feels like an app on a phone and one that feels like a web page in a box.
//
// ⚠️ It is a SINGLE colour, deliberately, not a light/dark pair keyed off
// `prefers-color-scheme`. This site does not follow the OS preference — light
// is the default for everyone until they press the toggle themselves (see
// THEME_BOOTSTRAP_SCRIPT below). A media-query pair would therefore paint the
// browser chrome dark for somebody whose phone is in dark mode but who is
// looking at a light page, which is worse than not tinting at all. The toggle
// updates this tag itself instead; ThemeToggle.tsx does it on click, and the
// bootstrap script does it on load.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Matches --background in globals.css. If either changes, change both.
  themeColor: "#f2f4fa",
};

const THEME_BOOTSTRAP_SCRIPT = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
        // Repaint the browser's own chrome to match, before first paint, for
        // the same reason the class itself is added here rather than in an
        // effect: otherwise a phone shows a light address bar above a dark
        // page for a moment on every single load. See the viewport export
        // above for why this is done by hand rather than by media query.
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", "#0a0d1a");
      }
      // No stored value, or it's "light" — leave the class off. Light mode is
      // the default for every first-time visitor, regardless of what their
      // OS prefers; only an explicit choice from the toggle turns dark mode
      // on, and only that choice is remembered.
    } catch (e) {
      // localStorage can throw (private browsing, disabled storage). Doing
      // nothing here just means the visitor gets light mode, same as anyone
      // whose browser has no opinion — never a broken page.
    }
  })();
`;

// The same "no flash on reload" trick as the theme script above, for the
// three accessibility toggles from AccessibilityPanel.tsx. Without this, a
// visitor who turned on larger text would see the ordinary-sized page for a
// moment on every single load, right up until React hydrated and the panel's
// own effect caught up — the same flash the theme script exists to prevent.
//
// This is a hand-written copy of AccessibilityPanel's readSettings/
// applyClasses logic, not an import — a raw <head> script runs before any
// JavaScript bundle has loaded, so it can't reach into that file. If the
// stored keys or class names ever change, both places need updating; that's
// the cost of avoiding the flash, the same cost the theme script already
// pays.
const A11Y_BOOTSTRAP_SCRIPT = `
  (function () {
    try {
      var stored = localStorage.getItem("revision-lab:accessibility");
      if (!stored) return;
      var settings = JSON.parse(stored);
      var root = document.documentElement;
      if (settings.largeText) root.classList.add("a11y-large-text");
      if (settings.dyslexiaFont) root.classList.add("a11y-dyslexia");
      if (settings.reduceMotion) root.classList.add("a11y-reduce-motion");
    } catch (e) {
      // Same reasoning as the theme script: a broken or unavailable storage
      // just means the visitor gets the ordinary page, never a crashed one.
    }
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning is scoped to this one element on purpose. The
    // bootstrap script above can add `dark` to <html> before React hydrates,
    // which makes the class React sees on the client differ from the class
    // it rendered on the server — normally a hydration error. Since we KNOW
    // why they differ and that it's harmless, this tells React to stop
    // checking THIS attribute, on THIS element, rather than silencing
    // hydration warnings anywhere else in the app.
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOTSTRAP_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
