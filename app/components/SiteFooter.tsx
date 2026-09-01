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
        <nav className="flex flex-wrap items-center gap-5">
          <Link href="/privacy" className="hover:underline underline-offset-2">
            Privacy
          </Link>
          <Link
            href="/accessibility"
            className="hover:underline underline-offset-2"
          >
            Accessibility
          </Link>
          <Link
            href="/exam-board"
            className="hover:underline underline-offset-2"
          >
            Exam board
          </Link>
          <Link href="/quiz" className="hover:underline underline-offset-2">
            Live quiz
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:underline underline-offset-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
