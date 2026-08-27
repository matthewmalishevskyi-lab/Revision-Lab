"use client";

import { useActionState } from "react";
import { joinClanAction, type ClanFormState } from "../../lib/clan-actions";
import { FormError, PasswordField, SubmitButton } from "../../components/FormBits";

export function JoinClanForm({ clanId }: { clanId: string }) {
  const [state, action, pending] = useActionState<ClanFormState, FormData>(
    joinClanAction,
    null,
  );

  return (
    <form action={action} className="mt-4">
      <input type="hidden" name="clanId" value={clanId} />

      <PasswordField label="Clan password" name="password" autoComplete="off" />

      <FormError message={state?.formError} />

      <SubmitButton pending={pending}>Join</SubmitButton>
    </form>
  );
}
