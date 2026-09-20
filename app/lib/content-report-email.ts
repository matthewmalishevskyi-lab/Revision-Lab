// The words in the "this looks wrong" email.
//
// A separate file with no imports, same reasoning as password-reset-email.ts:
// this is the part a person actually reads, and it should be editable without
// scrolling past database code.
//
// ⚠️ THIS EMAIL IS A WORK ITEM, NOT A NOTIFICATION.
// It goes to one person — Matthew — who will read it on a phone, between
// lessons, and either act on it or not. So it opens with the thing he has to
// judge (the question and what the student said), not with a greeting, a
// banner, or a count of how many reports there are this week. Everything he
// needs to find the question is in the first screen, and the link to it is
// written out rather than hidden behind "click here".

export function reportEmail(input: {
  subjectName: string;
  topicTitle: string;
  question: string;
  message: string | null;
  reporterName: string;
  reporterEmail: string;
  topicUrl: string;
  reportsUrl: string;
}): { subject: string; text: string } {
  // The subject line carries the topic, so a phone notification is already
  // useful without opening it — and so that several reports about one topic
  // thread together in Gmail rather than looking like unrelated noise.
  const subject = `Revision Lab — "${input.topicTitle}" question reported`;

  const said = input.message
    ? `What they said:\n  "${input.message}"`
    : `They did not add a message — the tap alone says they doubted this one.`;

  const text = [
    `${input.subjectName} · ${input.topicTitle}`,
    ``,
    `The question:`,
    `  ${input.question.replace(/\n/g, "\n  ")}`,
    ``,
    said,
    ``,
    `Reported by ${input.reporterName} (${input.reporterEmail}).`,
    ``,
    `The topic page:`,
    `  ${input.topicUrl}`,
    ``,
    `All reports, and a button to mark this one done:`,
    `  ${input.reportsUrl}`,
    ``,
    `— Revision Lab. You are getting this because you are the site's contact`,
    `  address. The report is saved whether or not this email arrives, so`,
    `  nothing is lost if you delete it.`,
  ].join("\n");

  return { subject, text };
}
