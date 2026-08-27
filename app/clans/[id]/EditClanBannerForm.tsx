"use client";

import { useActionState } from "react";
import { updateClanBannerAction, type ClanFormState } from "../../lib/clan-actions";
import { FormError, SubmitButton } from "../../components/FormBits";
import { ClanBannerPicker } from "../../components/ClanBannerPicker";
import type { ClanBannerConfig } from "../../lib/clanBanners";

export function EditClanBannerForm({
  clanId,
  initial,
}: {
  clanId: string;
  initial: ClanBannerConfig;
}) {
  const [state, action, pending] = useActionState<ClanFormState, FormData>(
    updateClanBannerAction,
    null,
  );

  return (
    <form action={action}>
      <input type="hidden" name="clanId" value={clanId} />

      <ClanBannerPicker initial={initial} />

      <FormError message={state?.formError} />

      <SubmitButton pending={pending}>Save banner</SubmitButton>
    </form>
  );
}
