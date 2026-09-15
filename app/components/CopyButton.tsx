"use client";

// Copy something to the clipboard, and say so.
//
// ⚠️ THE FALLBACK IS THE POINT OF THIS COMPONENT, NOT THE HAPPY PATH.
//
// `navigator.clipboard.writeText` needs a secure context and a permission, and
// it rejects rather than throwing anywhere in between: an iframe without
// clipboard-write, a browser where the user has denied it, a school-managed
// Chrome with a policy on it, or plain http. All of those are real for a
// teacher on a school network, and in every one of them the naive version does
// nothing at all — no error, no text, a button that looks like it worked.
//
// A teacher who thinks they have copied a question, pastes, and gets whatever
// was on the clipboard before is worse off than one who was told it failed. So
// a failure shows the text in a selected textarea instead: they can still press
// Ctrl+C, which is the thing they were trying to do.

import { useRef, useState } from "react";

type Status = "idle" | "copied" | "manual";

export function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
  title,
  className = "",
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  /** Spoken by a screen reader, where "Copy" on its own says nothing useful. */
  title: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const manualRef = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      // `?.` because `navigator.clipboard` is undefined outright on http.
      await navigator.clipboard?.writeText(text);
      if (!navigator.clipboard) throw new Error("no clipboard");
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("manual");
      // Let the textarea mount before reaching for it.
      timer.current = setTimeout(() => {
        manualRef.current?.focus();
        manualRef.current?.select();
      }, 0);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        title={title}
        aria-label={status === "copied" ? `${title} — copied` : title}
        className={`tap-pad inline-flex min-h-11 items-center gap-1.5 rounded-full border border-black/10 px-4 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10 ${className}`}
      >
        <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>
        {status === "copied" ? copiedLabel : label}
      </button>

      {/* A live region rather than only a changed label: a screen-reader user
          who pressed the button does not re-read it, so the confirmation has
          to be announced. */}
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Copied to the clipboard." : ""}
        {status === "manual"
          ? "This browser would not let the page use the clipboard. The text is selected below — press Control C, or Command C on a Mac."
          : ""}
      </span>

      {status === "manual" && (
        <span className="mt-2 block w-full">
          <span className="mb-1 block text-xs opacity-70">
            This browser blocked the clipboard. The text is selected — press
            Ctrl+C (⌘C on a Mac).
          </span>
          <textarea
            ref={manualRef}
            readOnly
            value={text}
            rows={Math.min(10, text.split("\n").length + 1)}
            aria-label="Text to copy"
            className="w-full rounded-xl border border-black/15 bg-white/80 p-3 font-mono text-xs dark:border-white/20 dark:bg-black/30"
          />
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="tap-pad mt-1 min-h-11 text-xs underline opacity-70"
          >
            Close
          </button>
        </span>
      )}
    </>
  );
}
