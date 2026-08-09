import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteHeader } from "../components/SiteHeader";
import { getViewer } from "../lib/viewer";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { undoDeletion } from "../lib/account-actions";
import { purgeDateFor } from "../lib/users";
import { ChangePasswordForm, DeleteAccountForm } from "./AccountForms";

export const metadata: Metadata = {
  title: "Your account",
  robots: { index: false, follow: false },
};

const card =
  "rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5";

export default async function AccountPage() {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const user = await getViewer();
  if (!user) redirect("/login");

  const joined = new Date(user.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const erasedOn = user.deletedAt
    ? purgeDateFor(user.deletedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-8">
      <SiteHeader greeting={false} />

      <h1 className="mt-10 text-4xl font-bold tracking-tight">Your account</h1>
      <p className="mt-3 text-lg opacity-60">
        What we hold, and what you can do about it.
      </p>

      {/* ── Scheduled for deletion ─────────────────────────────────────────
          Shown first and impossible to miss. Someone in this state came back
          for a reason, and it is probably this. */}
      {erasedOn && (
        <section className="mt-8 rounded-2xl border border-red-500/40 bg-red-500/10 p-6">
          <h2 className="text-xl font-semibold">
            This account is scheduled for deletion
          </h2>
          <p className="mt-2">
            Everything — your account and all your progress — will be
            permanently erased on <strong>{erasedOn}</strong>. Until then you
            can change your mind.
          </p>
          <form action={undoDeletion}>
            <button
              type="submit"
              className="mt-4 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Undo — keep my account
            </button>
          </form>
        </section>
      )}

      {/* ── What we hold ───────────────────────────────────────────────── */}
      <section className={`mt-8 ${card}`}>
        <h2 className="text-xl font-semibold">What we store about you</h2>
        <dl className="mt-4 space-y-3">
          <div className="flex justify-between gap-4">
            <dt className="opacity-60">Name</dt>
            <dd className="font-medium">{user.name}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="opacity-60">Email</dt>
            <dd className="font-medium break-all">{user.email}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="opacity-60">Member since</dt>
            <dd className="font-medium">{joined}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="opacity-60">Password</dt>
            <dd className="font-medium opacity-70">
              Stored as a hash — unreadable, even by us
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm opacity-70">
          Plus a record of the topics you&apos;ve revised, so the progress page
          has something to show. That&apos;s everything.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Full privacy notice
          </Link>
          .
        </p>
      </section>

      {/* ── Change password ────────────────────────────────────────────── */}
      <section className={`mt-8 ${card}`}>
        <h2 className="text-xl font-semibold">Change your password</h2>
        <div className="mt-2">
          <ChangePasswordForm />
        </div>
        <p className="mt-4 text-sm opacity-60">
          Being straight with you about a limitation: changing your password
          does <strong>not</strong> sign you out on other devices. Sessions here
          are signed cookies rather than a list we keep, so there is nothing to
          revoke — an old one stays valid until it expires.
        </p>
      </section>

      {/* ── Delete ─────────────────────────────────────────────────────── */}
      {!erasedOn && (
        <section className="mt-8 rounded-2xl border border-red-500/25 p-6">
          <h2 className="text-xl font-semibold">Delete your account</h2>
          <p className="mt-2 opacity-80">
            This removes your account and every bit of progress attached to it.
            You get 30 days to change your mind, and after that it is gone for
            good.
          </p>
          <DeleteAccountForm />
        </section>
      )}
    </main>
  );
}
