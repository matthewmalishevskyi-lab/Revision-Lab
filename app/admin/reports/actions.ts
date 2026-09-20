"use server";

import { getCurrentUser } from "../../lib/actions";
import { setReportResolved } from "../../lib/content-reports";
import { CONTACT_EMAIL } from "../../lib/site";

export async function setReportResolvedAction(id: string, resolved: boolean): Promise<boolean> {
  // ⚠️ THE ACTION CHECKS, NOT JUST THE PAGE.
  // Hiding the page from everyone else is not access control — a Server Action
  // is reachable by anything that can make an HTTP request, whether or not the
  // caller was ever shown a button. The same check has to be here.
  const user = await getCurrentUser();
  if (!user || user.email.toLowerCase() !== CONTACT_EMAIL.toLowerCase()) return false;
  return setReportResolved(id, resolved);
}
