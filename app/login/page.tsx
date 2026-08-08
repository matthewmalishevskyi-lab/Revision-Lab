import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AccountsOff } from "../components/AccountsOff";
import { AuthShell } from "../components/AuthShell";
import { getCurrentUser } from "../lib/actions";
import { ACCOUNTS_ENABLED } from "../lib/site";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Log in",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

// A folder called `login` containing `page.tsx` IS the /login route. No router
// configuration anywhere — the folder structure is the routing.
export default async function LoginPage() {
  // Already logged in? Don't show them a login form; send them home.
  // Accounts off (deployed with no database)? Say so plainly.
  if (!ACCOUNTS_ENABLED) return <AccountsOff />;

  const user = await getCurrentUser();
  if (user) redirect("/");

  return (
    <AuthShell
      heading="Welcome back!"
      subheading="Continue your GCSE revision journey."
    >
      <LoginForm />
    </AuthShell>
  );
}
