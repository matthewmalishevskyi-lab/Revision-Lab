import Link from "next/link";
import { CONTACT_EMAIL } from "../lib/site";

// A footer on every page, existing mainly so the privacy notice is reachable
// from anywhere.
//
// That is not a formality. "Tell people what you do with their data" only
// counts if they can actually find it — a privacy page nobody can navigate to
// is the same as no privacy page, however well written. The register form is
// the single most important place for this link to appear, which is why this
// lives in the root layout rather than being added page by page and forgotten
// on the one that matters.
//
// `mt-auto` with the flex column on <body> is what pins it to the bottom of
// short pages without pretending to be `position: fixed`.
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/5 px-6 py-8 text-sm print:hidden dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 opacity-60">
        {/* This said "a student project. Free, and always will be." Matthew
            removed it himself, for the right reason: there are plans to charge
            for something eventually, so "always will be" was a promise the
            site could not keep. A broken promise about money is the kind users
            remember, and it would have sat on every page.

            "A student project" stays because it is true, and because it is
            genuinely disarming — it sets the right expectation for content
            that has not been through a textbook's review process. What is gone
            is only the part that made a commitment about the future. */}
        <p>Revision Lab — a student project.</p>
        {/* Each link is its own 44px-tall box rather than 20px of text with
            padding hung off it. The distinction matters because this row
            WRAPS on a phone: with `.tap-pad`'s negative margins the boxes on
            one line reached 18px into the line below, so a tap aimed at
            "Contact" could land on "Privacy" — a bigger target that hits the
            wrong thing is worse than a small one that hits the right thing.
            Real height plus `gap-y-0` keeps every box exactly where it looks
            like it is. */}
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-0">
          <Link href="/privacy" className="flex min-h-11 items-center hover:underline underline-offset-2">
            Privacy
          </Link>
          <Link
            href="/accessibility"
            className="flex min-h-11 items-center hover:underline underline-offset-2"
          >
            Accessibility
          </Link>
          <Link
            href="/exam-board"
            className="flex min-h-11 items-center hover:underline underline-offset-2"
          >
            Exam board
          </Link>
          <Link href="/quiz" className="flex min-h-11 items-center hover:underline underline-offset-2">
            Live quiz
          </Link>
          {/* Teacher tools needs no account — it only rearranges content that
              is already public — but until this link existed the only way in
              was the dashboard, which does need one. A teacher sent the site
              could not find it, which made "no account needed" true and
              useless at the same time. */}
          <Link
            href="/teacher-tools"
            className="flex min-h-11 items-center hover:underline underline-offset-2"
          >
            Teacher tools
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex min-h-11 items-center hover:underline underline-offset-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
