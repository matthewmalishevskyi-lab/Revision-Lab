import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { CONTACT_EMAIL } from "../lib/site";

// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS PAGE IS WRITTEN THE WAY IT IS
//
// Almost every privacy policy is written to protect the company from the
// reader. That is why they are long, vague, full of "may" and "such as", and
// why nobody finishes one. "We may share data with selected partners" is doing
// deliberate work: it commits to nothing while sounding like a disclosure.
//
// This one is short and specific because the truth here IS short and specific:
// a name, an email, a password hash, and a list of topics revised. No
// analytics, no advertising, no third parties beyond the two companies that
// host the thing. Writing that plainly takes a page, not ten.
//
// The test applied to every sentence below: could a 15-year-old read this and
// correctly predict what happens to their data? Legally it needs to be
// accurate. To be worth anything it also needs to be READ.
//
// ⚠️ If the site ever starts doing something new — analytics, emails, a
// comments section, anything — this page has to change in the same commit. A
// privacy policy that is out of date is worse than not having one, because it
// is a public promise you are no longer keeping.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What Revision Lab stores about you, why, and how to get it deleted.",
};

const LAST_UPDATED = "9 August 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 opacity-80">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-5xl">
        Privacy
      </h1>
      <p className="mt-3 text-lg opacity-60">
        Last updated {LAST_UPDATED}.
      </p>

      <Section title="Who runs this site">
        <p>
          Revision Lab is a personal project built and run by Matthew, a
          secondary school student in the UK. It is not a company, and nobody is
          paid for it. There are no adverts and nothing is sold.
        </p>
        <p>
          You can use the whole site — every subject, every topic, every
          practice question — without making an account or giving any details at
          all. An account exists only so your progress can be saved.
        </p>
      </Section>

      <Section title="What is stored, if you make an account">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Your name</strong> — only to say hello on the dashboard.
          </li>
          <li>
            <strong>Your email address</strong> — used as your username. No
            email is ever sent to it: there is no newsletter, and password
            resets are not built yet.
          </li>
          <li>
            <strong>Your password, as a hash.</strong> A hash is a scrambled
            version that cannot be turned back into the original. Your actual
            password is never stored and cannot be read by anyone, including
            Matthew.
          </li>
          <li>
            <strong>What you revise</strong> — which topic, whether an answer
            was right, and roughly how long you spent. This is what the progress
            page is built from.
          </li>
        </ul>
        <p>
          That is the complete list. There is no tracking of any kind: no Google
          Analytics, no advertising pixels, no third-party scripts watching what
          you do.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          One cookie, called <code>revision_lab_session</code>, set only when you
          log in. It holds your user ID with a signature proving the site issued
          it, so that the site knows you are you on the next page. It lasts one
          day, or 30 days if you tick &quot;keep me logged in&quot;, and logging
          out deletes it.
        </p>
        <p>
          There are no other cookies, which is why this site has no cookie
          banner — one that is strictly necessary for a service you asked for
          doesn&apos;t need consent.
        </p>
      </Section>

      <Section title="Who else can see it">
        <p>Two companies, both used to run the site rather than to do anything with your data:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Vercel</strong> hosts the site and, like every web server,
            keeps short-term technical logs of requests.
          </li>
          <li>
            <strong>Supabase</strong> stores the database that accounts and
            progress live in.
          </li>
        </ul>
        <p>
          Nobody else. Your data is not sold, shared, or handed to advertisers,
          because there are none.
        </p>
      </Section>

      <Section title="How long it is kept">
        <p>
          For as long as you have an account. Delete your account and everything
          above is scheduled for erasure.
        </p>
        <p>
          <strong>To be exact about the delay:</strong> deleting hides your
          account immediately and permanently erases it 30 days later. The wait
          exists so that an accidental click can be undone — log back in during
          those 30 days and there is an Undo button. If you would rather it went
          straight away, email the address below and it will be deleted by hand.
        </p>
      </Section>

      <Section title="What you can ask for">
        <p>
          Under UK data protection law you can ask to see a copy of your data,
          have it corrected, or have it deleted, and you do not have to give a
          reason.
        </p>
        <p>
          Most of this is on your{" "}
          <Link href="/account" className="underline underline-offset-2">
            account page
          </Link>{" "}
          already. For anything else, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          . This is one person checking an inbox rather than a support desk, so
          allow a few days.
        </p>
        <p>
          If you are not happy with how a request is handled, you can complain
          to the Information Commissioner&apos;s Office at{" "}
          <a
            href="https://ico.org.uk"
            className="underline underline-offset-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            ico.org.uk
          </a>
          .
        </p>
      </Section>

      <Section title="Age">
        <p>
          The site is aimed at GCSE students, who are typically 14 to 16. If you
          are under 13, please ask a parent or guardian before making an
          account. You do not need one to use the revision material.
        </p>
      </Section>

      <Section title="Security, honestly">
        <p>
          Passwords are hashed with scrypt and a random salt, sign-in attempts
          are rate limited, and the database is not reachable from the browser.
        </p>
        <p>
          But this is a student project rather than a bank, built by someone
          learning as he goes. Please use a password you do not use anywhere
          else — that is good advice for any site, and especially this one.
        </p>
      </Section>

      <p className="mt-12 text-sm opacity-60">
        If this page ever disagrees with what the site actually does, the page is
        wrong and should be fixed — please say so at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </main>
  );
}
