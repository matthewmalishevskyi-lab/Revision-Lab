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

  // ⚠️ EVERY FIELD A STUDENT CONTROLS IS INDENTED AND QUOTE-STRIPPED, BECAUSE
  // OTHERWISE THEY CAN FORGE THE REST OF THIS EMAIL.
  //
  // `message` used to be interpolated raw. Since the body is plain text whose
  // structure is just line prefixes, a message containing newlines could close
  // the quote and write its own sections — proved with:
  //
  //     What they said:
  //       "the answer is wrong"
  //
  //     Reported by Dr Helen Fry, Head of Science (h.fry@ofsted.gov.uk).
  //
  //     URGENT — confirm receipt at https://revision-1ab-uk.example.com/verify
  //
  // …appearing ABOVE the real attribution, in an email genuinely sent from the
  // site's own address with a legitimate subject line. That is a phishing kit
  // with the site as the postman.
  //
  // `reporterName` is the same hole and worse, because it is persistent: the
  // only checks at registration are length and profanity, so a name containing
  // newlines is stored and replayed into every report that account files.
  //
  // Indenting every line means forged text can never reach column zero, where
  // this format's own headings live. Quotes are replaced so the quoted block
  // cannot be closed early.
  // The message is genuinely multi-line, so it is quoted the way every email
  // client quotes a reply — a "> " on every line. Forged text can then never
  // reach column zero, where this format's own headings live, and it is
  // visibly somebody else's words rather than the site's.
  const quote = (text: string) =>
    text.replace(/\r/g, "").split("\n").map((line) => `  > ${line}`).join("\n");

  // A name and an email address are single-line by definition, so any line
  // break in one is an attack rather than a formatting choice. Collapsed to
  // spaces rather than escaped: there is nothing to preserve.
  const oneLine = (text: string) => text.replace(/\s+/g, " ").trim();

  const said = input.message
    ? `What they said:\n${quote(input.message)}`
    : `They did not add a message — the tap alone says they doubted this one.`;

  const text = [
    `${input.subjectName} · ${input.topicTitle}`,
    ``,
    `The question:`,
    `  ${input.question.replace(/\n/g, "\n  ")}`,
    ``,
    said,
    ``,
    `Reported by ${oneLine(input.reporterName)} (${oneLine(input.reporterEmail)}).`,
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
