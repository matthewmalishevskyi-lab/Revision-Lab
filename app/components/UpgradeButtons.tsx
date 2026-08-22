"use client";

// The "Upgrade to Plus" / "Upgrade to Pro" buttons on the account page.
//
// These are LIVE — every visitor with an account sees them, right now. What
// they do is deliberately small: there is no payment processor anywhere in
// this codebase, and Vercel's free Hobby plan is explicitly non-commercial
// (see the note in PROJECT_NOTES.md), so there is nothing real to sell yet.
// Clicking either button just reveals a "Coming soon" message in place of
// itself — no network request, no redirect, nothing that could look like a
// transaction that isn't actually happening. That distinction matters: a
// button that LOOKS like it charges you but doesn't would be a dark
// pattern, not an honest "not ready yet" the way this site's other
// placeholders are (see the login page's genuinely-empty forgot-password
// flow for the same idea applied to a different feature).
//
// A Client Component because "which button did you press" is exactly the
// kind of state that lives in the browser and needs nothing from the
// server — the same reasoning ThemeToggle and the accessibility panel
// already use.

import { useState } from "react";

type PlanId = "plus" | "pro";

const PLAN_COPY: Record<
  PlanId,
  { name: string; price: string; blurb: string; features: string[] }
> = {
  plus: {
    name: "Plus",
    price: "TBC",
    blurb: "For anyone who just wants the site without ads.",
    features: ["No adverts, anywhere on the site"],
  },
  pro: {
    name: "Pro",
    price: "TBC",
    blurb: "Everything in Plus, plus extra tools for serious revision.",
    features: [
      "No adverts, anywhere on the site",
      "Build your own custom tests, topic by topic",
      "A revision planner with a calendar of your last 4 weeks",
      "Every mascot gets a wardrobe, plus a Pro-exclusive outfit for Pixel",
    ],
  },
};

const card =
  "flex flex-1 flex-col rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5";

export function UpgradeButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <PlanCard plan="plus" />
      <PlanCard plan="pro" />
    </div>
  );
}

function PlanCard({ plan }: { plan: PlanId }) {
  const [clicked, setClicked] = useState(false);
  const copy = PLAN_COPY[plan];

  return (
    <div className={card}>
      <h3 className="text-lg font-semibold">{copy.name}</h3>
      <p className="mt-1 text-sm opacity-70">{copy.blurb}</p>

      <ul className="mt-4 flex-1 space-y-2 text-sm opacity-80">
        {copy.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {clicked ? (
        <p
          role="status"
          className="mt-5 rounded-xl border border-dashed border-current px-4 py-2.5 text-center text-sm font-medium opacity-70"
        >
          Coming soon — thanks for the interest!
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setClicked(true)}
          className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Upgrade to {copy.name}
        </button>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
