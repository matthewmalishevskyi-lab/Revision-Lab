import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthShell } from "../components/AuthShell";
import { getCurrentUser } from "../lib/actions";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Log in · Revision Hub",
};

// A folder called `login` containing `page.tsx` IS the /login route. No router
// configuration anywhere — the folder structure is the routing.
export default async function LoginPage() {
  // Already logged in? Don't show them a login form; send them home.
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
