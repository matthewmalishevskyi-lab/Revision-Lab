"use client";

// The interactive parts of the account page. Everything else on that page is a
// Server Component; only these need to be Client Components, because only these
// hold state that changes without a new page load.
//
// The split is deliberate. "use client" is not a switch you flip for a whole
// page — the smaller the client component, the less JavaScript gets shipped to
// the visitor. Here the headings, the account details and the deletion notice
// stay on the server; only the two forms cross over.

import { useActionState, useState } from "react";
import { changePassword, requestDeletion } from "../lib/account-actions";
import { FormError, PasswordField, SubmitButton } from "../components/FormBits";

export function ChangePasswordForm() {
  const [state, action, pending] = useActionState(changePassword, null);

  return (
    <form action={action}>
      <PasswordField
        label="Current password"
        name="currentPassword"
        autoComplete="current-password"
      />
      <PasswordField
        label="New password"
        name="newPassword"
        autoComplete="new-password"
      />
      <PasswordField
        label="Confirm new password"
        name="confirmPassword"
        autoComplete="new-password"
      />

      <FormError message={state?.error} />

      {state?.success && (
        <p
          role="status"
          className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300"
        >
          {state.success}
        </p>
      )}

      <SubmitButton pending={pending}>Change password</SubmitButton>
    </form>
  );
}

export function DeleteAccountForm() {
  // The form stays hidden until they ask for it. Not decoration: a delete
  // button sitting permanently next to "change password" is a delete button
  // someone will eventually hit by accident.
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(requestDeletion, null);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 rounded-xl border border-red-500/40 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-500/10 dark:text-red-300"
      >
        Delete my account
      </button>
    );
  }

  return (
    <form action={action} className="mt-6">
      <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm">
        Your account will be hidden straight away and{" "}
        <strong>permanently erased after 30 days</strong>, along with all your
        progress. If you change your mind, log back in before then and press
        Undo. After 30 days it cannot be recovered by anyone, including us.
      </p>

      <div className="mt-2">
        <PasswordField
          label="Enter your password to confirm"
          name="password"
          autoComplete="current-password"
        />
      </div>

      <FormError message={state?.error} />

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {pending ? "Just a moment…" : "Yes, delete my account"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-xl border border-white/60 bg-white/60 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90 dark:border-white/15 dark:bg-white/10"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
