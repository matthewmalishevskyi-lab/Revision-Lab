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
import { CONTACT_EMAIL } from "../lib/site";

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

        {/* Matthew asked for this, and he was right to.
            Somebody locked out of their account has just been handed a
            sentence with an "if" in it and no way to tell whether anything is
            actually happening. On a site with a support team that is fine,
            because the next step is obvious. Here the next step is emailing a
            fifteen-year-old who is at school all day, and saying so plainly
            turns "this is broken" into "this is a person" — which is both true
            and the difference between someone waiting and someone giving up.

            Deliberately not an apology for the site being small. It sets an
            expectation and says thank you, and it does it in three lines. */}
        <div className="mt-6 rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
          <p>
            <strong>One quick thing.</strong> Revision Lab is built and run by
            one person, not a company — so if this doesn&apos;t work and you
            need a hand, it&apos;s me you&apos;re waiting on, and I might be in
            lessons.
          </p>
          <p className="mt-2 opacity-80">
            Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and I&apos;ll sort it out as soon as I can. Thanks for being
            patient.
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
