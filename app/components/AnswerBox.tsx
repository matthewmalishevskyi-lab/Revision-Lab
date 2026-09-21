"use client";

// The box you type an answer into — and it grows.
//
// Matthew: "when you write a lot in one rectangle for text you can't see
// well... make it expand after you reach a certain number of letters and
// stretch." It used to be a single-line <input> 11rem wide, so a sentence
// scrolled sideways out of sight and you could only see its last few words.
//
// Now it starts the same size, gets WIDER as you type until it fills the row,
// then gets TALLER, wrapping onto as many lines as the answer needs. Short
// numeric answers look exactly as before.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ A <textarea>, BUT ENTER STILL CHECKS THE ANSWER. Every answer here is one
// line of meaning, and "type, press Enter" is how students get through sixteen
// questions without reaching for the mouse. The text wraps visually; no line
// break is ever typed. (Marking ignores all whitespace anyway — normalise()
// strips it — so even a pasted line break cannot change a result.)
//
// ⚠️ NOT `field-sizing: content`. It does this in one CSS line, but Firefox
// does not support it, and a box that never grows in one browser is the bug
// this component exists to fix. The width is worked out from the length
// during render; the height is measured after it, in a callback ref.
// ─────────────────────────────────────────────────────────────────────────────

import type { KeyboardEvent } from "react";

/** Grow the height to fit what is in it — after the width has settled. */
function fitHeight(el: HTMLTextAreaElement | null) {
  if (!el) return;
  el.style.height = "auto";
  // ⚠️ scrollHeight leaves out the border, and the box is border-box, so
  // setting height to scrollHeight alone clipped the bottom of the last line
  // by the border's width. Measured in a browser, not guessed.
  const border = el.offsetHeight - el.clientHeight;
  el.style.height = `${el.scrollHeight + border}px`;
}

export function AnswerBox({
  value,
  onChange,
  onSubmit,
  disabled,
  placeholder = "Your answer",
  ariaLabel,
  id,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
  ariaLabel?: string;
  id?: string;
  className?: string;
}) {
  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  }

  // Roughly one `ch` per character plus room for the caret, never narrower
  // than the old box and never wider than the row. Past the row's width the
  // text wraps and fitHeight takes over.
  const width = `min(100%, max(11rem, ${Math.max(value.length, placeholder.length) + 3}ch))`;

  return (
    <textarea
      id={id}
      // A new callback each render, so the height is re-measured whenever the
      // text changes — including when a saved answer is restored on load.
      ref={(el) => fitHeight(el)}
      rows={1}
      value={value}
      onChange={(event) => onChange(event.target.value.replace(/\r?\n/g, " "))}
      onKeyDown={onKeyDown}
      disabled={disabled}
      placeholder={placeholder}
      aria-label={ariaLabel}
      autoComplete="off"
      spellCheck={false}
      style={{ width }}
      className={`block min-h-11 resize-none overflow-hidden break-words rounded-lg border border-black/10 bg-white/80 px-3 py-2.5 leading-6 outline-none transition-[border-color,box-shadow] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 disabled:opacity-70 dark:border-white/15 dark:bg-white/5 ${className}`}
    />
  );
}
