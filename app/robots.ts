import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// robots.txt tells crawlers which parts of the site they may visit, and points
// them at the sitemap so they don't have to discover pages by guessing.
//
// Worth knowing: it is a request, not a lock. Well-behaved crawlers such as
// Google obey it; malicious ones ignore it entirely. Never use robots.txt to
// hide anything sensitive — it's a public file, so listing a secret page in it
// actually advertises that the page exists.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // ─────────────────────────────────────────────────────────────────────
      // Private or pointless-in-search pages. These are also marked noindex in
      // their own metadata, which is the part that actually keeps them out of
      // results — this is just belt and braces.
      //
      // This list had drifted stale — found in the 2026-08-25 deep bug hunt.
      // /account, /progress, /review, /revise, /wardrobe and every /pro-preview
      // page all carry `robots: { index: false, follow: false }` in their own
      // metadata but were missing here, so the "belt and braces" this comment
      // promises wasn't actually happening for any of them. Added below —
      // "/pro-preview" as one prefix rather than listing each sub-page, since
      // a robots.txt disallow rule matches by prefix.
      //
      // Deliberately NOT added: /subjects/*/exam, /subjects/*/print and
      // /subjects/*/stats. Those are also noindex, but with `follow: true` —
      // they deliberately want crawlers to fetch the page and follow its
      // links (back to the real, indexable topic pages) without indexing the
      // page itself. Disallowing them here would stop crawlers reaching them
      // at all, which would break that "follow" intent, not reinforce it.
      // ─────────────────────────────────────────────────────────────────────
      disallow: [
        "/dashboard",
        "/login",
        "/register",
        "/forgot-password",
        "/account",
        "/progress",
        "/review",
        "/revise",
        "/wardrobe",
        "/pro-preview",
        // Added alongside the clans feature — /clans, /clans/new and every
        // /clans/[id] page all carry `robots: { index: false, follow: false
        // }` in their own metadata, the same reasoning as everything else
        // in this list.
        "/clans",
        // Added alongside the live quiz feature — /quiz and every
        // /quiz/host/*, /quiz/join and /quiz/play/* page all carry
        // `robots: { index: false, follow: false }` in their own metadata,
        // the same reasoning as everything else in this list. "/quiz" as
        // one prefix covers all of them, the same trick already used above
        // for "/pro-preview".
        "/quiz",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
