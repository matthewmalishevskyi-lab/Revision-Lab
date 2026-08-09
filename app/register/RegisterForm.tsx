"use client";

import Link from "next/link";
import { useActionState } from "react";
import { register, type AuthState } from "../lib/actions";
import {
  Field,
  FormError,
  MailIcon,
  PasswordField,
  SubmitButton,
  UserIcon,
} from "../components/FormBits";

export function RegisterForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    register,
    null,
  );

  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight">Create an account</h2>
      <p className="mt-2 opacity-60">It takes about ten seconds.</p>

      <form action={action} className="mt-8">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          placeholder="Matthew"
          icon={<UserIcon />}
          error={state?.fieldErrors?.name}
        />

        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
          error={state?.fieldErrors?.email}
        />

        <PasswordField
          // "new-password" tells the browser's password manager to offer to
          // generate and save one, rather than autofilling an existing login.
          autoComplete="new-password"
          error={state?.fieldErrors?.password}
        />

        <p className="mt-2 text-sm opacity-55">At least 8 characters.</p>

        <FormError message={state?.formError} />

        <SubmitButton pending={pending}>Create account</SubmitButton>

        {/* The one place a privacy link is genuinely useful is the moment
            before someone hands over their details — not buried in a footer
            they'll never scroll to. */}
        <p className="mt-4 text-center text-xs opacity-55">
          We store your name, email and what you revise — nothing else, and no
          tracking.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            How your data is handled
          </Link>
          .
        </p>
      </form>

      <hr className="mt-8 border-black/10 dark:border-white/10" />

      <p className="mt-6 text-center text-sm">
        Already have an account?{" "}
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
