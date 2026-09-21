"use client";

// The pop-up calculator, with Hoot peeking over the top of it.
//
// Beside practice questions, tests and today's practice in the subjects whose
// papers allow a calculator (`calculator: true` in subjects.ts). All the maths
// lives in lib/calculator.ts, which has its own checker; this file is only the
// buttons.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ IT DOES NOT COVER THE QUESTION, AND IT IS NOT A MODAL.
//
// The obvious build is a dialog over the page. That hides the one thing the
// student needs while they are calculating: the numbers in the question. So it
// sits in the corner, the page underneath stays usable, and typing an answer
// into the answer box still works while it is open. It is labelled as a
// dialog for screen readers but does not trap focus — trapping focus in
// something that is deliberately beside the work would be a trap.
//
// ⚠️ KEYS ARE HEARD ONLY INSIDE THE CALCULATOR.
// A window-wide listener would steal "5" from the answer box the student is
// typing into. So the keyboard handler is on the panel, and opening it moves
// focus there; clicking back into the page hands the keyboard back.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useId, useRef, useState } from "react";
import { evaluate } from "../lib/calculator";
import { useStoredRaw, writeStorageRaw } from "../lib/browserStore";
import { Hoot } from "./Mascots";

/** "off" = the student is practising for the non-calculator paper. */
export const CALCULATOR_PREF_KEY = "revision-lab:calculator";
/** Opening one calculator closes any other on the page. */
const OPEN_EVENT = "revision-lab:calculator-open";

type Key = {
  label: string;
  /** What is added to the sum. Functions bring their own bracket. */
  insert?: string;
  action?: "clear" | "delete" | "equals";
  /** Read out instead of the label: "sin⁻¹" means nothing to a screen reader. */
  spoken?: string;
  kind?: "fn" | "num" | "op" | "danger" | "equals";
};

const KEYS: Key[] = [
  { label: "sin", insert: "sin(", kind: "fn", spoken: "sine" },
  { label: "cos", insert: "cos(", kind: "fn", spoken: "cosine" },
  { label: "tan", insert: "tan(", kind: "fn", spoken: "tangent" },
  { label: "√", insert: "√(", kind: "fn", spoken: "square root" },
  { label: "x²", insert: "²", kind: "fn", spoken: "squared" },

  { label: "sin⁻¹", insert: "sin⁻¹(", kind: "fn", spoken: "inverse sine" },
  { label: "cos⁻¹", insert: "cos⁻¹(", kind: "fn", spoken: "inverse cosine" },
  { label: "tan⁻¹", insert: "tan⁻¹(", kind: "fn", spoken: "inverse tangent" },
  { label: "xʸ", insert: "^", kind: "fn", spoken: "to the power of" },
  { label: "π", insert: "π", kind: "fn", spoken: "pi" },

  { label: "(", insert: "(", kind: "fn", spoken: "open bracket" },
  { label: ")", insert: ")", kind: "fn", spoken: "close bracket" },
  { label: "%", insert: "%", kind: "fn", spoken: "percent" },
  { label: "×10ˣ", insert: "×10^", kind: "fn", spoken: "times ten to the power of" },
  { label: "Ans", insert: "Ans", kind: "fn", spoken: "previous answer" },

  { label: "7", insert: "7", kind: "num" },
  { label: "8", insert: "8", kind: "num" },
  { label: "9", insert: "9", kind: "num" },
  { label: "DEL", action: "delete", kind: "danger", spoken: "delete" },
  { label: "AC", action: "clear", kind: "danger", spoken: "all clear" },

  { label: "4", insert: "4", kind: "num" },
  { label: "5", insert: "5", kind: "num" },
  { label: "6", insert: "6", kind: "num" },
  { label: "×", insert: "×", kind: "op", spoken: "times" },
  { label: "÷", insert: "÷", kind: "op", spoken: "divide" },

  { label: "1", insert: "1", kind: "num" },
  { label: "2", insert: "2", kind: "num" },
  { label: "3", insert: "3", kind: "num" },
  { label: "+", insert: "+", kind: "op", spoken: "plus" },
  { label: "−", insert: "−", kind: "op", spoken: "minus" },

  { label: "0", insert: "0", kind: "num" },
  { label: ".", insert: ".", kind: "num", spoken: "point" },
  { label: "=", action: "equals", kind: "equals", spoken: "equals" },
];

/** Keyboard → what it inserts. Anything not here is left alone. */
const TYPED: Record<string, string> = {
  "*": "×", x: "×", "/": "÷", "-": "−", "+": "+", "^": "^",
  "(": "(", ")": ")", ".": ".", "%": "%", p: "π",
};

export function Calculator({ colour }: { colour: string }) {
  const id = useId();
  const pref = useStoredRaw(CALCULATOR_PREF_KEY, null);
  const hidden = pref === "off";

  const [open, setOpen] = useState(false);
  // The sum is kept as the pieces the buttons added, so DEL removes "sin("
  // in one press, like a real calculator, rather than leaving "sin" behind.
  const [pieces, setPieces] = useState<string[]>([]);
  const [shown, setShown] = useState<{ text: string; error: boolean } | null>(null);
  const [ans, setAns] = useState(0);
  // Phones only: which half of the keypad is showing. See the note on the
  // keypad below — the whole thing does not fit on a small screen.
  const [fnPage, setFnPage] = useState(false);
  // Folded down to just its screen, so the question behind it can be read.
  const [mini, setMini] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Another calculator on the page opened: this one steps aside. Two open at
  // once in one corner would sit exactly on top of each other.
  useEffect(() => {
    function onOther(e: Event) {
      if ((e as CustomEvent<string>).detail !== id) setOpen(false);
    }
    window.addEventListener(OPEN_EVENT, onOther);
    return () => window.removeEventListener(OPEN_EVENT, onOther);
  }, [id]);

  // ⚠️ ON A PHONE THE PANEL SITS OVER THE BOTTOM OF THE PAGE, so while it is
  // open the page gets that much extra room at the end. Without it the last
  // question can never be scrolled up above the calculator, and the student
  // cannot see the numbers they are meant to be calculating with. Found on an
  // iPhone SE, where the first version covered the answer box completely.
  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 639px)").matches) return;
    const previous = document.body.style.paddingBottom;
    document.body.style.paddingBottom = mini ? "9rem" : "24rem";
    return () => { document.body.style.paddingBottom = previous; };
  }, [open, mini]);

  function openPanel() {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: id }));
    setOpen(true);
    requestAnimationFrame(() => panelRef.current?.focus());
  }

  function close() {
    setOpen(false);
    // Back to the button that opened it — focus left on something that has
    // just been removed falls to <body>, and a keyboard user starts again
    // from the top of the page. Same rule as Present mode.
    requestAnimationFrame(() => buttonRef.current?.focus());
  }

  function press(key: Key) {
    if (key.action === "clear") {
      setPieces([]);
      setShown(null);
      return;
    }
    if (key.action === "delete") {
      setShown(null);
      setPieces((p) => p.slice(0, -1));
      return;
    }
    if (key.action === "equals") {
      if (pieces.length === 0) return;
      const result = evaluate(pieces.join(""), ans);
      if (result.ok) {
        setAns(result.value);
        setShown({ text: result.display, error: false });
      } else {
        setShown({ text: result.error, error: true });
      }
      return;
    }
    const insert = key.insert ?? "";
    // On a phone, a function key hands the keypad back to the numbers — you
    // press sin, then you want 3 and 0. The same as SHIFT letting go.
    if (key.kind === "fn") setFnPage(false);
    // After an answer, a number starts a new sum and an operator carries the
    // answer on — "= then × 2" means "that, times 2", exactly as on a Casio.
    if (shown && !shown.error) {
      const continues = key.kind === "op" || insert === "²" || insert === "^" || insert === "%";
      setPieces(continues ? ["Ans", insert] : [insert]);
      setShown(null);
      return;
    }
    setShown(null);
    setPieces((p) => [...p, insert]);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    let key: Key | undefined;
    if (k === "Escape") { e.preventDefault(); e.stopPropagation(); close(); return; }
    if (k === "Enter" || k === "=") key = KEYS.find((x) => x.action === "equals");
    else if (k === "Backspace") key = KEYS.find((x) => x.action === "delete");
    else if (k === "Delete") key = KEYS.find((x) => x.action === "clear");
    else if (/^[0-9]$/.test(k)) key = KEYS.find((x) => x.insert === k);
    else if (TYPED[k]) key = KEYS.find((x) => x.insert === TYPED[k]) ?? { label: k, insert: TYPED[k], kind: "op" };
    if (!key) return;
    // Enter on a focused button would ALSO click it. Handle the key once.
    e.preventDefault();
    // ⚠️ AND KEEP IT HERE. The site's search box opens on "/" from anywhere
    // on the page (SearchBox.tsx), so typing 12/4 into the calculator opened
    // search and took the keyboard away mid-sum. Found by driving it in a
    // browser; a key the calculator has used is not also a shortcut.
    e.stopPropagation();
    press(key);
  }

  if (hidden) {
    return (
      <button
        type="button"
        onClick={() => writeStorageRaw(CALCULATOR_PREF_KEY, "on")}
        className="tap-pad-xs text-xs font-medium opacity-50 hover:underline hover:opacity-100"
        title="You hid the calculator to practise for the non-calculator paper"
      >
        Calculator off — turn it back on
      </button>
    );
  }

  const expression = pieces.join("");

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : openPanel())}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-medium shadow-sm transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
      >
        <CalculatorIcon />
        {open ? "Close calculator" : "Calculator"}
      </button>

      {open && (
        <div
          id={`${id}-panel`}
          ref={panelRef}
          role="dialog"
          aria-label="Calculator"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          // Bottom-right, clear of the question. On a phone it becomes a strip
          // along the bottom edge, full width, so the keys are big enough to
          // hit — safe-area padding keeps "=" above the iPhone home bar.
          className="calc-panel fixed inset-x-3 bottom-3 z-50 outline-none sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[19rem]"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Hoot, peeking over the top edge. Decorative, so hidden from
              screen readers and never in the way of a tap. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-[3.1rem] left-5 block h-16 w-14 overflow-hidden"
          >
            <Hoot className="h-[5.5rem] w-auto" />
          </span>

          <div
            className="relative rounded-[1.75rem] border-4 p-3 shadow-[0_20px_50px_-20px_rgba(22,24,43,0.55)]"
            style={{ borderColor: colour, backgroundColor: colour }}
          >
            <div className="mb-2 flex items-center justify-between px-1 text-white">
              <span className="whitespace-nowrap pl-16 text-xs font-bold uppercase tracking-wide opacity-90 max-sm:hidden">
                Hoot&apos;s calculator
              </span>
              {!mini && (
                <button
                  type="button"
                  onClick={() => setFnPage((f) => !f)}
                  aria-pressed={fnPage}
                  className="ml-auto mr-1.5 h-9 shrink-0 whitespace-nowrap rounded-full bg-white/20 px-3 text-xs font-bold transition hover:bg-white/35 sm:hidden"
                >
                  {fnPage ? "123" : "sin √ π"}
                </button>
              )}
              <button
                type="button"
                onClick={() => setMini((m) => !m)}
                aria-expanded={!mini}
                aria-label={mini ? "Show the keys" : "Fold the calculator down"}
                className={`${mini ? "ml-auto" : "max-sm:ml-0 ml-auto"} mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm leading-none transition hover:bg-white/35`}
              >
                <span aria-hidden="true">{mini ? "▴" : "▾"}</span>
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close calculator"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg leading-none transition hover:bg-white/35"
              >
                ×
              </button>
            </div>

            {/* The screen. The answer line is a live region, so a screen
                reader hears the result of = without having to go looking. */}
            <div className="rounded-2xl bg-[#eef3e6] px-3 py-2 font-mono text-[#1f2a1a] shadow-inner">
              <div className="min-h-6 overflow-x-auto whitespace-nowrap text-right text-sm opacity-80" aria-label="Sum">
                {expression || <span className="opacity-40">0</span>}
              </div>
              <div
                aria-live="polite"
                className={`min-h-8 text-right text-2xl font-bold tabular-nums ${shown?.error ? "text-red-700" : ""}`}
              >
                {shown?.text ?? ""}
              </div>
            </div>
            {!mini && (
            <>
            <p className="mt-1.5 px-1 text-[0.65rem] font-medium text-white/80 max-sm:hidden">Angles in degrees, like a school calculator.</p>

            <div className="mt-2 grid grid-cols-5 gap-1.5">
              {KEYS.map((key) => (
                <button
                  key={key.label}
                  type="button"
                  onClick={() => press(key)}
                  aria-label={key.spoken ?? key.label}
                  className={`calc-key ${
                    // ⚠️ PHONES SEE HALF THE KEYPAD AT A TIME. All 33 keys at a
                    // tappable size need ~550px — the whole screen of an
                    // iPhone SE. The "sin √ π" switch in the header swaps the
                    // number half for the function half, the way SHIFT does on
                    // a real calculator; from sm up everything shows at once.
                    (key.kind === "fn") !== fnPage ? "max-sm:hidden" : ""
                  } min-h-10 max-sm:min-h-11 rounded-xl text-sm font-semibold shadow-[0_2px_0_rgba(0,0,0,0.18)] transition active:translate-y-px active:shadow-none ${
                    key.kind === "num"
                      ? "bg-white text-neutral-900 hover:bg-neutral-100"
                      : key.kind === "op"
                        ? "bg-white/85 text-neutral-900 hover:bg-white"
                        : key.kind === "danger"
                          ? "bg-rose-100 text-rose-800 hover:bg-rose-200"
                          : key.kind === "equals"
                            ? "col-span-3 bg-neutral-900 text-lg text-white hover:bg-neutral-800"
                            : "bg-white/25 text-xs text-white hover:bg-white/35"
                  }`}
                >
                  {key.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                writeStorageRaw(CALCULATOR_PREF_KEY, "off");
                setOpen(false);
              }}
              className="mt-2 w-full rounded-lg px-2 py-1.5 text-[0.7rem] font-medium text-white/85 underline-offset-2 hover:underline"
            >
              Practising for the non-calculator paper? Hide the calculator
            </button>
            </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <rect x="5" y="2.5" width="14" height="19" rx="3" />
      <rect x="8" y="5.5" width="8" height="3.5" rx="1" />
      <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01" />
    </svg>
  );
}
