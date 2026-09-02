// The words in the password-reset email.
//
// A separate file from reset-actions.ts, with no imports and no side effects,
// for one reason: this is the only part of the whole flow a person actually
// READS, and it deserves to be looked at and edited without scrolling past
// token hashing to find it.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS EMAIL LOOKS EXACTLY LIKE A PHISHING ATTEMPT, AND THAT IS THE PROBLEM
//
// It arrives from a personal Gmail address (see email.ts for why), it is about
// somebody's password, and it contains a link it wants them to click. That is
// the precise shape of the scam every school in the country teaches children
// to delete on sight — and being deleted on sight is the failure mode here,
// not a security hole.
//
// So the text is written to be checkable rather than persuasive:
//
//   • It says who asked and roughly when, so the reader can match it against
//     something they just did.
//   • It says what to do if it wasn't them — nothing — and why that is safe.
//   • It never says "urgent", "verify", "your account will be suspended", or
//     anything else that pushes. Pressure is the tell.
//   • The link is written out in full, not hidden behind "click here", so it
//     can be read before it is clicked.
//   • It asks for nothing back. No reply, no password, no code to type.
// ─────────────────────────────────────────────────────────────────────────────

/** The plain-text and HTML bodies for one reset email. */
export function resetEmail(
  name: string,
  link: string,
): { subject: string; text: string; html: string } {
  // First name only. "Hi Matthew" reads like a person wrote it; the full name
  // out of a database reads like a mail merge, which is the tone this email
  // most needs to avoid.
  const firstName = name.trim().split(/\s+/)[0] || "there";

  const subject = "Reset your Revision Lab password";

  const text = [
    `Hi ${firstName},`,
    "",
    "Someone asked to reset the password on your Revision Lab account. If that was you, open this link and choose a new one:",
    "",
    link,
    "",
    "The link works for 30 minutes and can only be used once.",
    "",
    "If it wasn't you, you can ignore this email. Nothing has changed, and your password still works — a reset link on its own can't do anything unless someone opens it.",
    "",
    "— Revision Lab",
  ].join("\n");

  // The HTML is deliberately plain: no images, no tracking pixel, no buttons
  // that hide where they go. An email full of remote images is an email most
  // clients block by default and most spam filters mark down, and this one
  // already has enough working against it.
  //
  // The link text IS the link, so what you see is where you go.
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #16182b;">
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Someone asked to reset the password on your Revision Lab account. If that was you, open this link and choose a new one:</p>
      <p><a href="${escapeHtml(link)}" style="color: #2563eb;">${escapeHtml(link)}</a></p>
      <p>The link works for <strong>30 minutes</strong> and can only be used once.</p>
      <p>If it wasn't you, you can ignore this email. Nothing has changed, and your password still works &mdash; a reset link on its own can't do anything unless someone opens it.</p>
      <p style="color: #6b7280;">&mdash; Revision Lab</p>
    </div>
  `.trim();

  return { subject, text, html };
}

// The name comes from whatever somebody typed into the registration form, and
// it is about to be dropped into HTML. React escapes this sort of thing
// automatically on a page; an email is a string we build by hand, so nothing
// does it for us. Without this, a name containing a tag would be live markup
// inside the message.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
