"use client";

// Choosing the new password, at the end of the emailed link.

import Link from "next/link";
import { useActionState } from "react";
import { resetPassword, type ResetState } from "../lib/reset-actions";
import { FormError, PasswordField, SubmitButton } from "../components/FormBits";

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, action, pending] = useActionState<ResetState, FormData>(
    resetPassword,
    null,
  );

  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight">Choose a new password</h2>
      <p className="mt-2 opacity-60">
        At least 8 characters. You&apos;ll be logged straight in afterwards.
      </p>

      <form action={action} className="mt-8">
        {/* The token rides along in a hidden field rather than being read from
            the URL by the Server Action, because a Server Action cannot see the
            URL of the page that called it — it is a POST to the server, not a
            navigation.

            Worth being clear that this is NOT the usual "never trust a hidden
            field" mistake, which is putting an IDENTITY in one (see the rule at
            the top of account-actions.ts). Nothing here trusts the field: the
            token is looked up, checked against a stored hash, checked for
            expiry and checked for prior use before it is worth anything at all.
            Editing it gets you a rejected link, not somebody else's account. */}
        <input type="hidden" name="token" value={token} />

        <PasswordField
          label="New password"
          name="password"
          autoComplete="new-password"
        />
        <PasswordField
          label="Confirm new password"
          name="confirmPassword"
          autoComplete="new-password"
        />

        <FormError message={state?.error} />

        <SubmitButton pending={pending}>Set my new password</SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm opacity-70">
        This also signs you out on every other device.
      </p>

      <hr className="mt-8 border-black/10 dark:border-white/10" />

      <p className="mt-6 text-center text-sm">
        <Link
          href="/forgot-password"
          className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Send me a new link
        </Link>
      </p>
    </>
  );
}
