import type { Metadata } from "next";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
