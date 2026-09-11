"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchableDiagram } from "../lib/teacher-tools";

// Search across every diagram in the library.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS AN INLINE FILTER AND NOT THE HEADER'S MODAL
//
// The site already has a search — SearchBox in the header — and it is a modal
// opened with "/" that jumps you to a topic page. This is deliberately not
// that.
//
// A teacher on this page has already arrived somewhere; they are not
// navigating, they are looking for one picture among a hundred and forty. An
// always-visible box with the results underneath lets them type two letters,
// glance, retype, glance — without a modal opening and closing over the top of
// the thing they are reading. It is also visible, which matters for someone
// who has been sent this link and has never seen the site before: a modal you
// have to know about is a modal nobody uses.
//
// The whole index is passed in from the server and filtered in the browser.
// A hundred and forty rows is nothing to filter, and doing it locally means no
// request per keystroke and it works the moment the page is interactive.
// ─────────────────────────────────────────────────────────────────────────────

const MAX_RESULTS = 40;

/**
 * Rank matters more than it looks. Somebody typing "osmosis" wants the diagram
 * called osmosis, not the eleven diagrams that happen to sit in a topic whose
 * title contains the letters. So a hit on the diagram's own name sorts above a
 * hit on its heading, which sorts above the topic, which sorts above the
 * subject.
 */
function rank(d: SearchableDiagram, q: string): number {
  // ⚠️ THE DIAGRAM'S REAL NAME RANKS FIRST, AND USED NOT TO BE HERE AT ALL.
  // Only the de-kebabed slug was indexed, so 109 of the 124 diagrams could not
  // be found by the name printed above them: "Alternate segment theorem"
  // returned nothing, and you had to guess "circle alternate segment".
  if (d.title.toLowerCase().includes(q)) return 0;
  if (d.label.includes(q)) return 1;
  if (d.heading.toLowerCase().includes(q)) return 2;
  if (d.topicTitle.toLowerCase().includes(q)) return 3;
  if (d.subjectName.toLowerCase().includes(q)) return 4;
  return -1;
}

export function DiagramSearch({ diagrams }: { diagrams: SearchableDiagram[] }) {
  const [query, setQuery] = useState("");

  const trimmed = query.trim().toLowerCase();

  const { results, matched } = useMemo(() => {
    if (!trimmed) return { results: [], matched: 0 };
    const hits = diagrams
      .map((d) => ({ d, r: rank(d, trimmed) }))
      .filter(({ r }) => r >= 0)
      .sort((a, b) => a.r - b.r);
    // ⚠️ Counted BEFORE the slice. "40+" used to fire whenever the sliced list
    // was 40 long, which is also true when there are exactly 40 and no more —
    // one query on the whole site hits it, and it said there were more when
    // there were not.
    return { results: hits.slice(0, MAX_RESULTS).map(({ d }) => d), matched: hits.length };
  }, [diagrams, trimmed]);

  const total = diagrams.length;

  return (
    <section className="mt-8">
      <label htmlFor="diagram-search" className="sr-only">
        Search the diagram library
      </label>
      {/* ⚠️ THE PADDING IS ON THE WRAPPER, SO THE WRAPPER CANNOT BE THE TARGET.
          Measured on a 390px phone: the box looks 50px tall and the INPUT was
          24px of it, because `py-3` belongs to this div and tapping a div does
          not focus an input. The top and bottom 13px of the obvious search box
          did nothing. `min-h-11` on the input gives it the site's own 44px
          floor, and `focus-within` puts the ring on the box the reader sees.

          The ring also had to be added at all: `outline-none` was removed and
          nothing replaced it, so the field had NO visible focus state — the
          only input on the site like that. Every other one pairs the two. */}
      <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-1.5 backdrop-blur-sm focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/15 dark:border-white/15 dark:bg-white/5">
        <SearchIcon />
        <input
          id="diagram-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${total} diagrams — try "osmosis" or "circuit"`}
          // 16px minimum, or iOS zooms in on focus and will not zoom back out.
          className="min-h-11 w-full bg-transparent text-base outline-none placeholder:opacity-50"
        />
      </div>

      {/* ⚠️ The live region is rendered ALWAYS, empty when there is no query.
          A `role="status"` element inserted into the DOM already containing its
          text is frequently not announced at all — live regions have to exist
          before their content changes — so the very first search a screen
          reader user ran was the one most likely to be silent. */}
      <p role="status" aria-live="polite" className="mt-3 text-sm opacity-60">
        {trimmed === ""
          ? ""
          : results.length === 0
            ? `Nothing matches “${query.trim()}”.`
            : results.length === 1
              ? `1 diagram matches “${query.trim()}”.`
              : `${results.length}${matched > MAX_RESULTS ? "+" : ""} diagrams match “${query.trim()}”.`}
      </p>

      {results.length > 0 && (
        <ul className="mt-3 space-y-2">
          {results.map((d) => (
            <li key={`${d.subjectSlug}-${d.topicSlug}-${d.name}`}>
              {/* The fragment is the diagram's own registry name, which the
                  topic page puts on each card as an id — so a result lands
                  on the picture rather than the top of a page with fourteen
                  of them. */}
              <Link
                href={`/teacher-tools/diagrams/${d.subjectSlug}/${d.topicSlug}#${d.name}`}
                className="group flex items-baseline justify-between gap-4 rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="min-w-0">
                  <span className="block font-semibold">{d.title}</span>
                  <span className="mt-0.5 block text-sm opacity-60">
                    {d.subjectName} · {d.topicTitle} · {d.heading}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="h-5 w-5 shrink-0 opacity-50"
    >
      <circle cx={11} cy={11} r={7} />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
