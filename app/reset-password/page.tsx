import type { Metadata } from "next";
import Link from "next/link";
import { AccountsOff } from "../components/AccountsOff";
import { AuthShell } from "../components/AuthShell";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { ResetPasswordForm } from "./ResetPasswordForm";

export const metadata: Metadata = {
  title: "Set a new password",
  // Kept out of search results like every other account page — and here it
  // matters more than usual. The URL of this page CONTAINS a live credential
  // while a reset is in flight, and a crawler is one more thing that would see
  // it. `follow: false` too, so nothing follows the link back out either.
  robots: { index: false, follow: false },
};

// The page the emailed link lands on.
//
// ⚠️ THE TOKEN IS IN THE URL, WHICH IS A DELIBERATE, BOUNDED COMPROMISE.
//
// Everywhere else on this site, secrets stay out of URLs — they end up in
// browser history, in server logs, and in the Referer header sent to any other
// site the page links to. All of that is true here too.
//
// It is accepted for this one page because an emailed link has nowhere else to
// carry the token: a link is a URL, and the alternative (a code to copy and
// paste into a box) is the same secret in the same email with more work for
// the person using it. What actually contains the risk is everything around
// it — the token is worthless thirty minutes later, worthless once used, and
// this page carries no outbound links to third-party sites for a Referer
// header to leak to.
//
// `force-dynamic` because the searchParams differ for every visitor and this
// page must never be cached or pre-rendered with somebody's token baked in.
export const dynamic = "force-dynamic";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  if (!ACCOUNTS_ENABLED) return <AccountsOff />;

  // `await` because in this version of Next, searchParams is a Promise — the
  // same change that made `params` one. Older tutorials read it directly.
  const { token } = await searchParams;

  // No token at all means somebody typed the address by hand, or a mail client
  // mangled the link across a line break — a real and common thing. Say what
  // happened rather than showing an empty form that can only fail.
  if (!token) {
    return (
      <AuthShell
        heading="Something's missing"
        subheading="That link doesn't have a reset code in it."
      >
        <h2 className="text-3xl font-bold tracking-tight">
          This link looks incomplete
        </h2>
        <p className="mt-4 opacity-70">
          Reset links are long, and some email apps break them across two lines
          — which means only half of it opens. Try copying the whole thing from
          the email, or just ask for a fresh one.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/forgot-password"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Send me a new link
          </Link>
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

  // Deliberately NOT checked here before showing the form. Checking a token
  // SPENDS it (see consumeResetToken), so validating on page load would burn
  // the link the moment an email scanner or a link preview fetched the page —
  // and plenty of mail providers fetch every link in a message automatically.
  // The person would then click a link that had already been used up by their
  // own email service. So the token is only ever checked at the moment the new
  // password is actually submitted.
  return (
    <AuthShell
      heading="Nearly there"
      subheading="Pick a new password and you're back in."
    >
      <ResetPasswordForm token={token} />
    </AuthShell>
  );
}
