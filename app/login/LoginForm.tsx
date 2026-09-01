"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, type AuthState } from "../lib/actions";
import {
  Field,
  FormError,
  MailIcon,
  PasswordField,
  SubmitButton,
} from "../components/FormBits";

export function LoginForm() {
  // useActionState connects a form to a server function.
  //   state   - whatever the server sent back last time (our error messages)
  //   action  - hand this to the <form> and React does the rest
  //   pending - true while the server is working, for the loading state
  const [state, action, pending] = useActionState<AuthState, FormData>(
    login,
    null,
  );

  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight">Log in</h2>
      <p className="mt-2 opacity-60">Good to see you again!</p>

      {/* No onSubmit, no fetch, no API route. The form posts straight to the
          server function. If JavaScript fails to load, this still works —
          it's a real HTML form underneath. */}
      <form action={action} className="mt-8">
        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
          error={state?.fieldErrors?.email}
        />

        <PasswordField error={state?.fieldErrors?.password} />

        <div className="mt-5 flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              name="rememberMe"
              defaultChecked
              className="h-4 w-4 rounded accent-blue-600"
            />
            Keep me logged in
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Can&apos;t log in?
          </Link>
        </div>

        <FormError message={state?.formError} />

        <SubmitButton pending={pending}>Log in</SubmitButton>
      </form>

      <hr className="mt-8 border-black/10 dark:border-white/10" />

      <p className="mt-6 text-center text-sm">
        New to Revision Lab?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          Create an account
        </Link>
      </p>
    </>
  );
}
