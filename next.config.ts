import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────────────────────
// SECURITY HEADERS — instructions to the BROWSER, not to this server.
//
// Everything else on this site defends the server: check the password, check
// the signature, check who is asking. These four defend the person sitting in
// front of the browser, against attacks that never touch our server at all.
// They cost nothing and there was no reason for them to be missing.
//
// Deliberately NOT here: a Content-Security-Policy. It is the strongest of
// these by a distance, and it is also the one that breaks a site quietly if
// it is got wrong — layout.tsx runs two inline <script> bootstraps (theme and
// accessibility, both of which must run before the first paint or the page
// flashes), and a real CSP means giving those a per-request nonce rather than
// waving them through with 'unsafe-inline', which would defeat the point. That
// is a change worth making carefully and testing, not one to smuggle in
// alongside four one-liners.
// ─────────────────────────────────────────────────────────────────────────────
const securityHeaders = [
  {
    // Stops another site putting Revision Lab in an invisible <iframe> over
    // its own buttons, so a logged-in person's clicks land on our page
    // instead — "clickjacking". SAMEORIGIN rather than DENY because the site
    // framing its own pages is a normal thing to want later.
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Makes the browser believe the Content-Type we send rather than sniffing
    // the bytes and guessing. A file we serve as text should never be run as
    // a script because it happened to look like one.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Reset links carry their token in the URL. Without this, clicking any
    // outbound link from that page hands the whole URL — token included — to
    // the site being visited, in the Referer header. This sends only the
    // origin off-site, and the full URL only to ourselves.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Nothing on this site needs a camera, a microphone or a location, so
    // nothing on this site is allowed to ask for one.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Come back over HTTPS next time without asking first. Vercel already
    // serves HTTPS; this closes the very first plain-HTTP request, which is
    // the one an attacker on the same café wifi would want to intercept.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Next sends `X-Powered-By: Next.js` on every response by default. Naming
  // your framework and letting an attacker skip straight to its known issues
  // is free information for them and worth nothing to anyone else — and this
  // sits squarely inside what the headers block below set out to do.
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
