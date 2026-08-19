import type { Metadata } from "next";
import { AccessibilityPanel } from "../components/AccessibilityPanel";
import { SiteHeader } from "../components/SiteHeader";

// A settings page for the site itself, not an account — it works whether or
// not you're logged in, the same way ThemeToggle in the header does. See
// AccessibilityPanel.tsx for how each toggle is stored and applied.

export const metadata: Metadata = {
  title: "Accessibility settings",
  description:
    "Larger text, a dyslexia-friendly font, and reduced motion for Revision Lab.",
};

export default function AccessibilityPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Accessibility settings
        </h1>
        <p className="mt-3 opacity-70">
          These are remembered on this device only — they don&apos;t need an
          account, and switching devices starts with them off again.
        </p>
      </section>

      <div className="mt-8">
        <AccessibilityPanel />
      </div>
    </main>
  );
}
