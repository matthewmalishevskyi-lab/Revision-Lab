import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthShell } from "../components/AuthShell";
import { getCurrentUser } from "../lib/actions";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Create an account",
  // Deliberately kept OUT of search results. A login form is no use to someone
  // arriving from Google, and a dashboard is private. Search engines should
  // send people to the revision content instead.
  robots: { index: false, follow: false },
};

export default async function RegisterPage() {
  const user = await getCurrentUser();
  if (user) redirect("/");

  return (
    <AuthShell
      heading="Let's get started."
      subheading="Save your progress across every subject."
    >
      <RegisterForm />
    </AuthShell>
  );
}
