import type { Metadata } from "next";
import Link from "next/link";
import { AccountsOff } from "../components/AccountsOff";
import { AuthShell } from "../components/AuthShell";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { EMAIL_ENABLED } from "../lib/email";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot password",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

// This page was an honest placeholder for three weeks — "password resets
// aren't working yet, make a new account" — because doing it properly needs a
// way to send email, and that is a real dependency rather than an afternoon.
//
// It is real now. What made it worth doing rather than leaving: an account on
// this site holds somebody's streak, their XP, their badges and months of
// answered questions, and telling a locked-out person to start again from zero
// means telling them to throw all of that away. That is not a missing feature,
// it is the site losing the one thing it asks people to build up.
export default function ForgotPasswordPage() {
  if (!ACCOUNTS_ENABLED) return <AccountsOff />;

  // Configured on the server or not, said out loud either way. A form that
  // cheerfully promises an email the site cannot send is worse than a page
  // admitting it isn't set up — that is the same silent-failure trap this
  // codebase keeps finding, and the placeholder this page used to be was at
  // least honest about it.
  if (!EMAIL_ENABLED) {
    return (
      <AuthShell
        heading="Locked out?"
        subheading="This one needs an email service behind it."
      >
        <h2 className="text-3xl font-bold tracking-tight">Can&apos;t log in?</h2>
        <p className="mt-4 opacity-70">
          Password resets are built, but this copy of the site hasn&apos;t got
          an email account wired up yet, so there&apos;s nothing to send the
          link with.
        </p>
        <p className="mt-4 opacity-70">
          If you&apos;re running this yourself, set <code>GMAIL_USER</code> and{" "}
          <code>GMAIL_APP_PASSWORD</code> and it starts working. Otherwise,
          give Matthew a shout.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/login"
            className="rounded-xl border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Back to log in
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      heading="Locked out?"
      subheading="It happens. Let's get you back in."
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
