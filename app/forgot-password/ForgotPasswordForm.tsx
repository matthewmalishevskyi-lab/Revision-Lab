"use client";

// Asking for a reset link.
//
// One field, and a confirmation that deliberately doesn't tell you whether the
// address was real — see the long note at the top of lib/reset-actions.ts for
// why, and what it costs.

import Link from "next/link";
import { useActionState } from "react";
import {
  requestPasswordReset,
  type ResetRequestState,
} from "../lib/reset-actions";
import { Field, FormError, MailIcon, SubmitButton } from "../components/FormBits";

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState<ResetRequestState, FormData>(
    requestPasswordReset,
    null,
  );

  // The form is REPLACED once a request goes through, rather than a message
  // being added under it. Leaving the field and button sitting there invites
  // somebody who isn't sure it worked to press it again and again, which is
  // exactly the behaviour the rate limiter would then punish them for.
  if (state?.sent) {
    return (
      <>
        <h2 className="text-4xl font-bold tracking-tight">Check your email</h2>

        <p
          role="status"
          className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3"
        >
          If that address has a Revision Lab account, a link to set a new
          password is on its way to it.
        </p>

        <div className="mt-6 space-y-3 text-sm opacity-70">
          <p>
            The link lasts <strong>30 minutes</strong> and works once. If
            nothing arrives in a few minutes, check your spam folder — it comes
            from a Gmail address, which mail providers are suspicious of.
          </p>
          <p>
            Still nothing? The most likely reason is a typo in the address, or
            that the account was made with a different one. Try again with
            another address.
          </p>
        </div>

        <hr className="mt-8 border-black/10 dark:border-white/10" />

        <p className="mt-6 text-center text-sm">
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to log in
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight">Reset your password</h2>
      <p className="mt-2 opacity-60">
        Give us the address you signed up with and we&apos;ll send you a link.
      </p>

      <form action={action} className="mt-8">
        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
        />

        <FormError message={state?.error} />

        <SubmitButton pending={pending}>Send me a link</SubmitButton>
      </form>

      <hr className="mt-8 border-black/10 dark:border-white/10" />

      <p className="mt-6 text-center text-sm">
        Remembered it?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Log in
        </Link>
      </p>
    </>
  );
}
