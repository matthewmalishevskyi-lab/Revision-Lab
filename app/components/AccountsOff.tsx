import Link from "next/link";
import { AuthShell } from "./AuthShell";

// Shown at /login, /register and /forgot-password when accounts are switched
// off (see ACCOUNTS_ENABLED in lib/site.ts).
//
// Someone reaching these pages has usually followed an old link or typed the
// address. Telling them plainly what's happening is better than a 404, and far
// better than a login form that would lose their account.
export function AccountsOff() {
  return (
    <AuthShell
      heading="Accounts aren't on yet."
      subheading="Everything else works — go and revise."
    >
      <h2 className="text-3xl font-bold tracking-tight">Not available yet</h2>
      <p className="mt-4 opacity-70">
        Accounts are switched off while the site&apos;s storage is being set up
        properly. Turning them on before that would mean people registering and
        quietly losing their account, which is worse than waiting.
      </p>
      <p className="mt-4 opacity-70">
        All the revision content is free to use without an account.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Start revising
        </Link>
      </div>
    </AuthShell>
  );
}
