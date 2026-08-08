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
      // Private or pointless-in-search pages. These are also marked noindex in
      // their own metadata, which is the part that actually keeps them out of
      // results — this is just belt and braces.
      disallow: ["/dashboard", "/login", "/register", "/forgot-password"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
