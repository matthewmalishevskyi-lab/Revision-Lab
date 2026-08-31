"use server";

// SERVER ACTIONS for clans — see actions.ts's own header comment for what
// "use server" does and why validating here (not in the browser) matters.

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  clampIconOffset,
  clampIconScale,
  isClanColor,
  isClanIcon,
  isClanShape,
} from "./clanBanners";
import {
  createClan,
  designateClanHeir,
  getUserClan,
  joinClan,
  leaveClan,
  updateClanBanner,
} from "./clans";
import { getSessionUserId } from "./session";
import { checkClanJoinAllowed, humanDelay, recordFailedClanJoin } from "./throttle";
import { containsProfanity, PROFANITY_REJECTION_MESSAGE } from "./cleanName";

export type ClanFormState = { formError?: string } | null;

export async function createClanAction(
  _prevState: ClanFormState,
  formData: FormData,
): Promise<ClanFormState> {
  const userId = await getSessionUserId();
  if (!userId) return { formError: "Please log in first." };

  const name = String(formData.get("name") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const bannerColor = String(formData.get("bannerColor") ?? "");
  const bannerShape = String(formData.get("bannerShape") ?? "");
  const bannerIcon = String(formData.get("bannerIcon") ?? "");
  // clampIconScale/clampIconOffset already fall back to the untouched
  // default (1, and 0/0) for anything that isn't a finite number, so a
  // missing or tampered-with field can't produce an icon drawn off the
  // banner entirely — same "clamp, don't just validate" reasoning as the
  // sliders themselves in ClanBannerPicker.tsx.
  const iconScale = clampIconScale(Number(formData.get("iconScale")));
  const iconOffsetX = clampIconOffset(Number(formData.get("iconOffsetX")));
  const iconOffsetY = clampIconOffset(Number(formData.get("iconOffsetY")));

  // Upper AND lower bounds, the same reasoning register()'s own comment
  // gives: generous limits nobody real will hit, just enough to stop
  // something silly being written straight into storage.
  if (name.length < 3) return { formError: "Clan names need to be at least 3 characters." };
  if (name.length > 40) return { formError: "That name is too long — 40 characters or fewer." };
  // A clan name is the most public piece of text a visitor can put on this
  // site — it shows up in the browse/search list to everyone, not just to
  // the people in one room for one game.
  if (containsProfanity(name)) return { formError: PROFANITY_REJECTION_MESSAGE };
  if (password.length < 4) return { formError: "Clan passwords need to be at least 4 characters." };
  if (password.length > 100) return { formError: "That password is too long." };

  // The banner fields come from a <select> the picker controls, but any
  // value can be typed straight into a POST body with dev tools — never
  // trust that a value in a form submission is one of the options the form
  // actually offered.
  if (!isClanColor(bannerColor) || !isClanShape(bannerShape) || !isClanIcon(bannerIcon)) {
    return { formError: "Something went wrong with the banner. Please try again." };
  }

  // Checked here, not inside createClan(), so a clan is never created with
  // an auto-join that's doomed to fail — see clans.ts's own comment on why
  // a clan with nobody in it is a confusing thing to land on. This is a
  // best-effort check rather than a database-enforced guarantee (unlike
  // joinClan's real `unique(user_id)` constraint) — a fine trade for a
  // feature used by a handful of people, not worth a second constraint for.
  const existing = await getUserClan(userId);
  if (existing) {
    return { formError: `You're already in "${existing.name}" — leave it first.` };
  }

  let clan;
  try {
    clan = await createClan({
      name,
      password,
      bannerColor,
      bannerShape,
      bannerIcon,
      iconScale,
      iconOffsetX,
      iconOffsetY,
      creatorId: userId,
    });
  } catch (error) {
    console.error("[createClanAction] failed:", error);
    return { formError: "Something went wrong. Please try again." };
  }

  revalidatePath("/clans");
  redirect(`/clans/${clan.id}`);
}

export async function joinClanAction(
  _prevState: ClanFormState,
  formData: FormData,
): Promise<ClanFormState> {
  const userId = await getSessionUserId();
  if (!userId) return { formError: "Please log in first." };

  const clanId = String(formData.get("clanId") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!clanId || !password) return { formError: "Please enter the clan's password." };

  // Checked BEFORE the password, same ordering as checkLoginAllowed and for
  // the same reason — see throttle.ts's own comment on why a clan password
  // (as short as 4 characters) needed the identical rate-limiting a login
  // password already had, found while building this feature rather than by
  // a later audit.
  const verdict = await checkClanJoinAllowed(clanId);
  if (!verdict.allowed) {
    return {
      formError: `Too many attempts on this clan. Please wait ${humanDelay(verdict.retryAfterSeconds)} and try again.`,
    };
  }

  const result = await joinClan({ clanId, userId, password });

  if (!result.ok) {
    if (result.error === "WRONG_PASSWORD") await recordFailedClanJoin(clanId);

    const messages: Record<typeof result.error, string> = {
      NOT_FOUND: "That clan doesn't exist any more.",
      WRONG_PASSWORD: "That password's not right for this clan.",
      ALREADY_IN_A_CLAN: "You're already in a clan — leave it first.",
    };
    return { formError: messages[result.error] };
  }

  revalidatePath(`/clans/${clanId}`);
  redirect(`/clans/${clanId}`);
}

// Changing an EXISTING clan's banner — a separate action from creating one,
// not a reuse of createClanAction, because the checks are genuinely
// different: no name or password here at all, and it needs a creator check
// that createClanAction has no reason to make. `clanId` comes from a hidden
// input the same way JoinClanForm's does, rather than a bound argument —
// keeps every clan form in this file following the identical shape.
export async function updateClanBannerAction(
  _prevState: ClanFormState,
  formData: FormData,
): Promise<ClanFormState> {
  const userId = await getSessionUserId();
  if (!userId) return { formError: "Please log in first." };

  const clanId = String(formData.get("clanId") ?? "");
  if (!clanId) return { formError: "Something went wrong. Please try again." };

  const bannerColor = String(formData.get("bannerColor") ?? "");
  const bannerShape = String(formData.get("bannerShape") ?? "");
  const bannerIcon = String(formData.get("bannerIcon") ?? "");
  const iconScale = clampIconScale(Number(formData.get("iconScale")));
  const iconOffsetX = clampIconOffset(Number(formData.get("iconOffsetX")));
  const iconOffsetY = clampIconOffset(Number(formData.get("iconOffsetY")));

  if (!isClanColor(bannerColor) || !isClanShape(bannerShape) || !isClanIcon(bannerIcon)) {
    return { formError: "Something went wrong with the banner. Please try again." };
  }

  const result = await updateClanBanner({
    clanId,
    userId,
    bannerColor,
    bannerShape,
    bannerIcon,
    iconScale,
    iconOffsetX,
    iconOffsetY,
  });

  if (!result.ok) {
    const messages: Record<typeof result.error, string> = {
      NOT_FOUND: "That clan doesn't exist any more.",
      NOT_CREATOR: "Only the clan's creator can change its banner.",
    };
    return { formError: messages[result.error] };
  }

  revalidatePath(`/clans/${clanId}`);
  redirect(`/clans/${clanId}`);
}

// Choosing an heir — NOT an immediate handover. See designateClanHeir's own
// comment in clans.ts for what this choice actually does: the chosen
// person only becomes leader later, automatically, if the current leader
// leaves without ever picking someone else instead. A plain
// single-argument server action bound directly to a form, the same shape
// as leaveClanAction just below — no useActionState/ClanFormState needed
// here, since this button is only ever rendered for the clan's actual
// current leader; a failure here means the page was already out of date
// (a race, not a real user mistake), so it's enough to log it and simply
// show the page as it now really is rather than build error UI for a case
// nobody will normally hit. designateClanHeir itself re-checks that the
// caller really is the current leader — this action trusting the button
// being hidden from everyone else would not be enough on its own.
export async function designateHeirAction(formData: FormData): Promise<void> {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  const clanId = String(formData.get("clanId") ?? "");
  const heirUserId = String(formData.get("heirUserId") ?? "");

  const result = await designateClanHeir({
    clanId,
    currentUserId: userId,
    heirUserId,
  });

  if (result.ok) {
    revalidatePath(`/clans/${clanId}`);
  } else {
    console.error("[designateHeirAction] failed:", result.error);
  }

  redirect(`/clans/${clanId}`);
}

export async function leaveClanAction(): Promise<void> {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  await leaveClan(userId);
  revalidatePath("/clans");
  redirect("/clans");
}
