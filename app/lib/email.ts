// Sending an email, for the one thing on this site that genuinely needs one.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS FILE ADDS THE FIRST REAL DEPENDENCY THIS PROJECT HAS TAKEN, AND THAT
// DESERVES AN EXPLANATION RATHER THAN A SHRUG.
//
// Password hashing here is Node's own `crypto`. Sessions are hand-signed. The
// Supabase client is `fetch`. That is not stubbornness — it is so that every
// line of anything security-shaped on this site can be read and understood,
// rather than trusted because it has a lot of stars on GitHub.
//
// Email is where that stops being the right call. Sending one means speaking
// SMTP over a TLS socket: an authentication handshake, base64 credentials,
// CRLF line endings, header encoding, and "dot stuffing" (a line consisting of
// a single full stop ends the message, so any real line that starts with one
// has to be escaped — miss it and a message is silently truncated). None of
// that is interesting, all of it is fiddly, and the failure mode is the worst
// kind: a reset email that quietly doesn't arrive, for one person, sometimes.
//
// So: nodemailer, which is the boring, twenty-year-old, universally used
// answer. One dependency, for the one job where writing it by hand would make
// the site less reliable rather than more understandable.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY GMAIL, AND WHAT IT COSTS
//
// Matthew's choice, from three options. The alternative (Resend, or any
// similar service) has a nicer free tier but requires a verified DOMAIN —
// checked against Resend's own documentation rather than assumed: without one
// you may only send email to yourself, which is no use at all when the whole
// point is emailing a classmate who is locked out. A domain is about £10 a
// year and needs a card, so Gmail it is for now.
//
// What that means in practice, stated plainly rather than discovered later:
//   • Mail arrives FROM Matthew's own Gmail address. It is already on the
//     privacy page, so this is not new exposure, but it is his name on it.
//   • Google's limit is roughly 500 messages a day. Fine for a school; the
//     wrong answer if this site ever gets big.
//   • It needs an APP PASSWORD, not the account password — a 16-character
//     code generated at myaccount.google.com/apppasswords, which requires
//     2-Step Verification to be switched on first. Google has refused plain
//     account passwords for this since 2022.
//
// Neither variable starts with NEXT_PUBLIC_, for the same reason the Supabase
// key doesn't: that prefix ships a value to the browser.
// ─────────────────────────────────────────────────────────────────────────────

import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

/**
 * Whether this site can currently send email at all.
 *
 * Everything that sends mail checks this first and degrades honestly if it is
 * false — the same pattern as ACCOUNTS_ENABLED in site.ts. A half-configured
 * site should say "this isn't set up" out loud, not offer a button that
 * silently does nothing.
 */
export const EMAIL_ENABLED = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);

// Built once and reused. nodemailer holds a pool of connections open behind
// this, so making a new one per email would mean a fresh TLS handshake and a
// fresh login to Gmail every single time.
//
// `null` until first use rather than at import time, because importing this
// file must not blow up on a machine with no email configured — plenty of
// pages import things that import this.
let cachedTransport: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter {
  if (cachedTransport) return cachedTransport;

  cachedTransport = nodemailer.createTransport({
    // `service: "gmail"` fills in host, port and TLS settings from
    // nodemailer's own table, which is one less set of numbers to get wrong.
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },

    // ⚠️ TIMEOUTS, AND THEY ARE NOT PARANOIA — this was watched happening.
    //
    // Testing this flow from a machine that cannot reach smtp.gmail.com, the
    // send did not fail. It HUNG. nodemailer's defaults wait a long time for a
    // connection, and because the Server Action awaits the send, the person who
    // pressed "Send me a link" was left looking at a spinner with no idea
    // whether anything had happened.
    //
    // Ten seconds each. Long enough for a slow but working connection; short
    // enough that a dead mail server becomes a plain error rather than a page
    // that never finishes. A reset email that fails fast can be retried; one
    // that hangs just looks broken.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
  });

  return cachedTransport;
}

export type Email = {
  to: string;
  subject: string;
  /** The plain-text body. Required — see the note in sendEmail. */
  text: string;
  /** The HTML body. Optional; the text version is what actually matters. */
  html?: string;
};

/**
 * Sends one email. Returns whether it went.
 *
 * Deliberately returns a boolean rather than throwing: every caller here is a
 * Server Action in the middle of doing something for a person, and none of
 * them should turn a mail-server hiccup into an error page.
 */
export async function sendEmail(message: Email): Promise<boolean> {
  if (!EMAIL_ENABLED) {
    console.error("[email] not sent — GMAIL_USER/GMAIL_APP_PASSWORD not set");
    return false;
  }

  try {
    await getTransport().sendMail({
      // A display name in front of the address, so the message shows up as
      // "Revision Lab" in an inbox rather than as a stranger's Gmail address,
      // which is what a locked-out person is deciding whether to trust.
      from: `"Revision Lab" <${GMAIL_USER}>`,
      to: message.to,
      subject: message.subject,
      // ⚠️ ALWAYS send a plain-text part, not just HTML. Two reasons and both
      // are real: spam filters treat HTML-only mail as a signal, and this is
      // already mail from a personal Gmail account containing a link, which is
      // the exact shape of a phishing message. And some people genuinely read
      // mail as plain text. The text version is written first in
      // password-reset-email.ts for that reason, and the HTML follows it.
      text: message.text,
      html: message.html,
    });
    return true;
  } catch (error) {
    // Logged privately, never shown. What the caller says to the person is
    // deliberately the same whether this worked or not — see
    // requestPasswordReset for why.
    console.error("[email] send failed:", error);
    return false;
  }
}
