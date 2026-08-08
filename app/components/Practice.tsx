"use client";

// Practice questions that hide their answer until you ask for it.
//
// The hiding is the entire point, and it isn't decoration. Your own revision
// content says it in the Revision & exam practice topics: RETRIEVAL PRACTICE —
// trying to recall something and finding out whether you were right — builds
// memory far better than rereading, which mostly builds false confidence.
//
// An answer printed next to the question destroys that. Your eye reads it
// before your brain attempts it, you think "yes, I knew that", and you learn
// almost nothing. One click of friction is what turns reading into testing.

import { useState } from "react";

type Question = { question: string; answer: string };

export function Practice({
  questions,
  colour,
}: {
  questions: Question[];
  colour: string;
}) {
  // A Set of the indexes whose answers are showing. A Set rather than an array
  // because "is this one revealed?" is the only question we ever ask, and Sets
  // answer that directly with .has().
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  function reveal(index: number) {
    // A NEW Set rather than adding to the existing one. React compares by
    // identity — if you mutate the old Set and hand back the same object, React
    // sees no change and refuses to re-render. This catches everyone once.
    setRevealed((current) => new Set(current).add(index));
  }

  const allRevealed = revealed.size === questions.length;

  return (
    <div>
      <ol className="space-y-3">
        {questions.map((item, index) => {
          const isRevealed = revealed.has(index);

          return (
            <li
              key={item.question}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: colour }}
                >
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-medium leading-relaxed">{item.question}</p>

                  {isRevealed ? (
                    <div
                      className="mt-3 rounded-xl px-4 py-3"
                      style={{ backgroundColor: `${colour}14` }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-50">
                        Answer
                      </p>
                      <p className="mt-1 leading-relaxed opacity-85">
                        {item.answer}
                      </p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => reveal(index)}
                      className="mt-3 rounded-lg border border-black/10 px-3.5 py-2 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                    >
                      Show answer
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {!allRevealed && (
        <p className="mt-4 text-sm opacity-50">
          Write your answer down before revealing it. Deciding you knew it after
          reading the answer is the most common way to waste revision time.
        </p>
      )}
    </div>
  );
}
