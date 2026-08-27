"use client";

import { useActionState } from "react";
import { createClanAction, type ClanFormState } from "../lib/clan-actions";
import { Field, FormError, PasswordField, SubmitButton, UserIcon } from "../components/FormBits";
import { ClanBannerPicker } from "../components/ClanBannerPicker";

export function CreateClanForm() {
  const [state, action, pending] = useActionState<ClanFormState, FormData>(
    createClanAction,
    null,
  );

  return (
    <form action={action}>
      <Field
        label="Clan name"
        name="name"
        placeholder="Year 11 Mathletes"
        icon={<UserIcon />}
      />

      <PasswordField
        label="Join password"
        name="password"
        autoComplete="new-password"
      />
      <p className="mt-2 text-sm opacity-55">
        Share this with whoever you want to invite — they&apos;ll need it to join.
        At least 4 characters.
      </p>

      <ClanBannerPicker />

      <FormError message={state?.formError} />

      <SubmitButton pending={pending}>Create clan</SubmitButton>
    </form>
  );
}
