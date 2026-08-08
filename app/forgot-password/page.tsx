import type { Metadata } from "next";
import Link from "next/link";
import { AccountsOff } from "../components/AccountsOff";
import { AuthShell } from "../components/AuthShell";
import { ACCOUNTS_ENABLED } from "../lib/site";

export const metadata: Metadata = {
  title: "Forgot password",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

// A placeholder, on purpose.
//
// Resetting a password properly means emailing a one-time link to the address
// on the account — which needs an email sending service, and a whole extra
// layer of care (the link has to expire, be single-use, and be impossible to
// guess). That's a project of its own, so rather than ship a button that
// quietly does nothing, this page says so plainly.
export default function ForgotPasswordPage() {
  if (!ACCOUNTS_ENABLED) return <AccountsOff />;

  return (
    <AuthShell
      heading="Not built yet."
      subheading="This one needs an email service behind it."
    >
      <h2 className="text-3xl font-bold tracking-tight">Forgot password</h2>
      <p className="mt-4 opacity-70">
        Password resets aren&apos;t working yet. Sending a secure reset link
        needs an email service wired up first, so it&apos;s on the list rather
        than half-finished.
      </p>
      <p className="mt-4 opacity-70">
        For now, if you&apos;re locked out, make a new account.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/login"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to log in
        </Link>
        <Link
          href="/register"
          className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Create an account
        </Link>
      </div>
    </AuthShell>
  );
}
