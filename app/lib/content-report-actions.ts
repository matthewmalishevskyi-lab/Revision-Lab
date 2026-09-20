"use server";

// "This looks wrong" — the Server Action behind the button.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS FEATURE EXISTS AT ALL, IN MATTHEW'S OWN WORDS
//
//   "just in case something is wrong and we recheck the question if it's
//    wrong, because you're not so reliable... people do not really trust you
//    for some reason."
//
// That is the correct instinct and the right response to it. The site carries
// 651,000 words written with AI help that no subject teacher has read, and
// every page already says so. What it has never had is a way for the person
// who SPOTS a mistake to tell anyone. A disclaimer admits the risk; this does
// something about it.
// ─────────────────────────────────────────────────────────────────────────────

import { getCurrentUser } from "./actions";
import { getSubject, getTopic } from "./subjects";
import { getTopicContent } from "./content";
import { saveReport, MAX_MESSAGE } from "./content-reports";
import { reportEmail } from "./content-report-email";
import { sendEmail } from "./email";
import { checkReportAllowed, recordReport, throttleMessage } from "./throttle";
import { CONTACT_EMAIL, SITE_URL } from "./site";

export type ReportResult =
  | { ok: true; emailed: boolean }
  | { ok: false; error: string };

export async function reportQuestion(
  subjectSlug: string,
  topicSlug: string,
  question: string,
  message: string,
): Promise<ReportResult> {
  // ⚠️ IDENTITY COMES FROM THE SESSION COOKIE AND NOWHERE ELSE.
  // The rule every action in this codebase follows, and there is a permanent
  // check that fails the build if one of them ever reads an email out of a
  // form. A `userId` parameter here would let anyone file reports as anyone.
  const user = await getCurrentUser();
  if (!user) {
    return { ok: false, error: "You need to be logged in to report a question." };
  }

  // ⚠️ LOGGED-IN ONLY WAS MATTHEW'S CALL, AND IT HAS A REAL COST.
  // A visiting teacher — the person most likely to catch a genuine subject
  // error, and the one whose report would be worth the most — cannot send one
  // without making an account first. That is a deliberate trade for a smaller,
  // higher-signal, harder-to-abuse inbox, and it is worth revisiting if the
  // reports that do arrive turn out to be mostly students who got the question
  // wrong and assumed the site was at fault.
  const verdict = await checkReportAllowed(user.id);
  if (!verdict.allowed) {
    return {
      ok: false,
      error: `That is a lot of reports at once. ${throttleMessage(verdict.retryAfterSeconds)}`,
    };
  }

  // ⚠️ THE QUESTION IS CHECKED AGAINST THE REAL CONTENT, NOT TRUSTED.
  // A Server Action is reachable by anything that can make an HTTP request,
  // not only by our own button, so the text arriving here could be anything at
  // all — and it goes into an email sent to Matthew's personal address. Making
  // sure it is a question that genuinely exists in that topic is what stops
  // this being an open "send arbitrary text to the site owner" endpoint.
  const subject = getSubject(subjectSlug);
  const topic = getTopic(subjectSlug, topicSlug);
  const content = getTopicContent(subjectSlug, topicSlug);
  if (!subject || !topic || !content) {
    return { ok: false, error: "That topic does not exist." };
  }
  const known = (content.practice ?? []).some((q) => q.question === question);
  if (!known) {
    return { ok: false, error: "That question is not in this topic." };
  }

  const trimmed = message.trim().slice(0, MAX_MESSAGE);

  // ⚠️ SAVED FIRST, EMAILED SECOND, AND THE ORDER IS THE WHOLE DESIGN.
  // If this were email-first, a Gmail outage would lose the report and the
  // student would still be thanked — the precise failure that left password
  // reset silently broken for weeks. The row is the record; the email is only
  // the nudge that makes Matthew look at it today rather than eventually.
  const stored = await saveReport({
    userId: user.id,
    subject: subjectSlug,
    topic: topicSlug,
    question,
    message: trimmed,
  });
  if (!stored) {
    return {
      ok: false,
      error:
        "Something went wrong saving that, so it has not been recorded. Please try again in a moment.",
    };
  }
  await recordReport(user.id);

  const { subject: emailSubject, text } = reportEmail({
    subjectName: subject.name,
    topicTitle: topic.topic.title,
    question,
    message: trimmed || null,
    reporterName: user.name,
    reporterEmail: user.email,
    topicUrl: `${SITE_URL}/subjects/${subjectSlug}/${topicSlug}#practice`,
    reportsUrl: `${SITE_URL}/admin/reports`,
  });

  // Not awaited into the result beyond its boolean: the report is already
  // safe, so a mail failure changes what the student is TOLD but never
  // whether their report counted.
  const emailed = await sendEmail({ to: CONTACT_EMAIL, subject: emailSubject, text });

  return { ok: true, emailed };
}
