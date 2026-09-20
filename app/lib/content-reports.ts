// Storing and reading "this looks wrong" reports.
//
// See CONTENT_REPORTS_SETUP.sql for the table and, more importantly, for why
// the report is WRITTEN before it is emailed.

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY_IS_LEGACY_JWT = (SUPABASE_KEY ?? "").startsWith("eyJ");

export const REPORTS_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

async function supabase(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY as string,
      ...(KEY_IS_LEGACY_JWT ? { Authorization: `Bearer ${SUPABASE_KEY}` } : {}),
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

export type ContentReport = {
  id: string;
  userId: string;
  subject: string;
  topic: string;
  question: string;
  message: string | null;
  resolvedAt: string | null;
  createdAt: string;
};

/** The longest message that will be stored. */
export const MAX_MESSAGE = 1000;

/**
 * Write one report. Returns whether it was stored.
 *
 * ⚠️ RETURNS A BOOLEAN AND THE CALLER MUST LOOK AT IT.
 * The failure this feature exists to avoid is a student being thanked for a
 * report that went nowhere. If this returns false the action says so on
 * screen, rather than printing "thanks, we'll check it" over a silent error —
 * the exact thing password reset did for weeks.
 */
export async function saveReport(input: {
  userId: string;
  subject: string;
  topic: string;
  question: string;
  message?: string;
}): Promise<boolean> {
  if (!REPORTS_ENABLED) {
    console.error("[reports] not saved — Supabase is not configured");
    return false;
  }
  try {
    const res = await supabase("content_reports", {
      method: "POST",
      body: JSON.stringify({
        user_id: input.userId,
        subject: input.subject,
        topic: input.topic,
        // Trimmed rather than rejected if long: a question stem is at most a
        // few hundred characters, and a truncated one is still findable.
        question: input.question.slice(0, 2000),
        message: input.message?.trim().slice(0, MAX_MESSAGE) || null,
      }),
    });
    if (!res.ok) {
      // Logged with the real Postgres complaint. The 2026-08-29 clan bug took
      // a second debugging round purely because these returned null silently.
      console.error("[reports] insert failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[reports] insert threw:", error);
    return false;
  }
}

/** Every report, newest first. For the page only Matthew can see. */
export async function listReports(): Promise<ContentReport[]> {
  if (!REPORTS_ENABLED) return [];
  try {
    const res = await supabase(
      "content_reports?select=id,user_id,subject,topic,question,message,resolved_at,created_at" +
        "&order=created_at.desc&limit=500",
    );
    if (!res.ok) {
      console.error("[reports] list failed:", res.status, await res.text());
      return [];
    }
    const rows = (await res.json()) as Record<string, string | null>[];
    return rows.map((r) => ({
      id: r.id as string,
      userId: r.user_id as string,
      subject: r.subject as string,
      topic: r.topic as string,
      question: r.question as string,
      message: r.message,
      resolvedAt: r.resolved_at,
      createdAt: r.created_at as string,
    }));
  } catch (error) {
    console.error("[reports] list threw:", error);
    return [];
  }
}

/** Mark one as dealt with, or put it back. */
export async function setReportResolved(id: string, resolved: boolean): Promise<boolean> {
  if (!REPORTS_ENABLED) return false;
  try {
    const res = await supabase(`content_reports?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({ resolved_at: resolved ? new Date().toISOString() : null }),
    });
    if (!res.ok) {
      console.error("[reports] resolve failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[reports] resolve threw:", error);
    return false;
  }
}
