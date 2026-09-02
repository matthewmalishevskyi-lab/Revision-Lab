"use client";

// "use client" means this file runs in the browser, which it has to: the
// password show/hide toggle needs to remember whether it's currently showing,
// and remembering things in response to clicks is what browsers do and servers
// don't.
//
// Most of the site stays on the server. Only the bits that genuinely need
// interactivity get marked like this — the more you ship to the browser, the
// slower the page.

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white/80 py-3 pl-11 pr-4 text-base outline-none transition placeholder:opacity-40 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-white/5";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  // `role="alert"` makes screen readers announce the problem the moment it
  // appears, instead of the user tabbing around wondering why nothing works.
  return (
    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

export function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  error,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0">
      {/* htmlFor ties the label to the input, so clicking the label focuses the
          box. Free usability, and required for screen readers. */}
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40">
          {icon}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={inputClasses}
          aria-invalid={error ? true : undefined}
        />
      </div>
      <FieldError message={error} />
    </div>
  );
}

export function PasswordField({
  label = "Password",
  name = "password",
  autoComplete = "current-password",
  error,
}: {
  label?: string;
  name?: string;
  autoComplete?: string;
  error?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mt-6">
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40">
          <LockIcon />
        </span>
        <input
          id={name}
          name={name}
          // The ONLY difference between a password box and a normal text box is
          // this one word. Flip it to "text" and the characters become visible.
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          className={`${inputClasses} pr-12`}
          aria-invalid={error ? true : undefined}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          // Icon-only buttons are invisible to screen readers without this.
          aria-label={visible ? "Hide password" : "Show password"}
          // 30x30 measured, against a 44px minimum for anything meant to be
          // tapped with a thumb. Bigger padding rather than a bigger icon:
          // the eye stays the size it looks best at, the target around it
          // grows. `flex` + `items-center` keeps the icon centred in it.
          className="absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg opacity-50 transition hover:opacity-90"
        >
          <EyeIcon crossed={visible} />
        </button>
      </div>
      <FieldError message={error} />
    </div>
  );
}

export function SubmitButton({
  children,
  pending,
}: {
  children: React.ReactNode;
  pending: boolean;
}) {
  return (
    <button
      type="submit"
      // Disabling while it's working stops double-submits — the classic way to
      // accidentally create two accounts by impatiently clicking twice.
      disabled={pending}
      className="mt-8 w-full rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Just a moment…" : children}
    </button>
  );
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
    >
      {message}
    </p>
  );
}

// ─── Icons ──────────────────────────────────────────────────────────────────

export function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20a7.5 7.5 0 0115 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon({ crossed }: { crossed: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      {crossed && (
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}
