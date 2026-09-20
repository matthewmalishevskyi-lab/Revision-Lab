"use client";

// "This looks wrong" — a small link under a question.
//
// ─────────────────────────────────────────────────────────────────────────────
// SMALL WAS THE BRIEF: "make it a small button that won't bother our nice
// design". Three things follow from that, and the third is the one that is
// easy to get wrong.
//
//   1. It is a text link at 12px and 45% opacity, not a button with a border.
//      A bordered control next to every question would read as part of the
//      exercise — something you are meant to press — rather than as an escape
//      hatch for the rare occasion the site is wrong.
//
//   2. ⚠️ IT ONLY APPEARS ONCE THE ANSWER HAS BEEN SEEN. Before that, a
//      student who cannot do a question has no way of knowing whether it is
//      wrong, and offering them a "this looks wrong" button at the exact
//      moment they are stuck invites a report that means "I don't know this".
//      After the answer is on screen, the person pressing it has actually
//      compared the two — which is the only report worth Matthew's time.
//
//   3. ⚠️ SMALL IS NOT THE SAME AS A SMALL TAP TARGET, and this project has
//      shipped that bug twice. `.tap-pad` grows the hit box to 42px with
//      padding cancelled by an equal negative margin, so the link stays
//      visually tiny while staying tappable. It is safe HERE specifically
//      because the link stands alone on its own line — inside a paragraph it
//      would cover the text above and below, which is exactly how a tap on
//      "Contact" once followed "Privacy".
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { reportQuestion } from "../lib/content-report-actions";
import { MAX_MESSAGE } from "../lib/content-reports";

type Phase = "idle" | "open" | "sending" | "sent" | "failed";

export function ReportQuestion({
  subjectSlug,
  topicSlug,
  question,
  className = "",
}: {
  subjectSlug: string;
  topicSlug: string;
  question: string;
  className?: string;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function send() {
    setPhase("sending");
    setError("");
    const result = await reportQuestion(subjectSlug, topicSlug, question, message);
    if (result.ok) {
      setPhase("sent");
    } else {
      setError(result.error);
      setPhase("failed");
    }
  }

  if (phase === "sent") {
    return (
      <p className={`mt-2 text-xs opacity-60 ${className}`} role="status">
        Thanks — that is saved, and Matthew will look at it.
      </p>
    );
  }

  if (phase === "idle") {
    return (
      <p className={`mt-2 ${className}`}>
        <button
          type="button"
          onClick={() => setPhase("open")}
          className="tap-pad-xs text-xs opacity-45 underline underline-offset-2 transition hover:opacity-80"
        >
          This looks wrong
        </button>
      </p>
    );
  }

  return (
    <div className={`mt-2 rounded-xl border border-black/10 p-3 dark:border-white/15 ${className}`}>
      <label htmlFor={`report-${topicSlug}`} className="block text-xs font-medium opacity-70">
        What looks wrong? (optional)
      </label>
      <textarea
        id={`report-${topicSlug}`}
        value={message}
        onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
        rows={2}
        autoFocus
        placeholder="The answer says 4 but I make it 6…"
        className="mt-1.5 w-full rounded-lg border border-black/15 bg-white/80 p-2 text-sm dark:border-white/20 dark:bg-black/30"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={send}
          disabled={phase === "sending"}
          className="min-h-11 rounded-full bg-black/80 px-4 text-xs font-semibold text-white disabled:opacity-50 dark:bg-white/85 dark:text-black"
        >
          {phase === "sending" ? "Sending…" : "Send it"}
        </button>
        <button
          type="button"
          onClick={() => { setPhase("idle"); setError(""); }}
          className="tap-pad text-xs underline opacity-55"
        >
          Cancel
        </button>
        {/* ⚠️ A failure is SHOWN, not swallowed. The whole point of this
            feature is that a message arrives; telling somebody "thanks" over a
            silent error would be worse than having no button. */}
        {error && (
          <span role="alert" className="text-xs text-red-700 dark:text-red-400">
            {error}
          </span>
        )}
      </div>
      <p className="mt-2 text-[0.6875rem] opacity-45">
        Sent with the question and your account, so it can be checked and
        replied to.
      </p>
    </div>
  );
}
