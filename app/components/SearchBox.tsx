"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { chipClasses } from "./chipStyles";
import { Icon } from "./Icon";
import { SUBJECTS, getGroup, type IconName } from "../lib/subjects";

// Jump straight to a topic by typing its name, instead of clicking through a
// subject page to find it. Useful the moment there are more than a handful of
// topics on the site — which there now are.
//
// The searchable list is built ONCE, outside the component, from SUBJECTS —
// the same single source of truth every other page reads from. Nothing here
// is hand-typed, so a new topic added to subjects.ts is searchable
// automatically, the same guarantee the rest of the site already relies on.
//
// SUBJECTS is safe to import into a Client Component: unlike progress.ts or
// viewer.ts, subjects.ts never touches cookies, the database or any other
// server-only API. It's just data.

type SearchEntry = {
  subjectSlug: string;
  // What shows under the topic title. For a topic inside a group (Languages,
  // Science) this is "Languages · Spanish" rather than just "Spanish", so a
  // result makes sense on its own without already knowing the site's
  // grouping.
  subjectLabel: string;
  topicSlug: string;
  topicTitle: string;
  icon: IconName;
};

const SEARCH_INDEX: SearchEntry[] = SUBJECTS.flatMap((subject) => {
  const group = subject.group ? getGroup(subject.group) : undefined;
  const subjectLabel = group ? `${group.name} · ${subject.name}` : subject.name;

  return subject.years.flatMap((yearGroup) =>
    yearGroup.topics.map((topic) => ({
      subjectSlug: subject.slug,
      subjectLabel,
      topicSlug: topic.slug,
      topicTitle: topic.title,
      icon: topic.icon,
    })),
  );
});

// How many results to show at once. Beyond this, typing one more letter is
// faster than scrolling a long list — so the list narrows instead of growing.
const MAX_RESULTS = 8;

function search(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  // Topic-title matches are what someone is almost always looking for, so
  // they're listed first; a match only in the subject name ("show me
  // everything in maths") comes after.
  const titleMatches: SearchEntry[] = [];
  const subjectOnlyMatches: SearchEntry[] = [];

  for (const entry of SEARCH_INDEX) {
    if (entry.topicTitle.toLowerCase().includes(q)) {
      titleMatches.push(entry);
    } else if (entry.subjectLabel.toLowerCase().includes(q)) {
      subjectOnlyMatches.push(entry);
    }
  }

  return [...titleMatches, ...subjectOnlyMatches].slice(0, MAX_RESULTS);
}

export function SearchBox() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = search(query);

  function open() {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }

  function close() {
    setIsOpen(false);
  }

  function goToTopic(entry: SearchEntry) {
    router.push(`/subjects/${entry.subjectSlug}/${entry.topicSlug}`);
    close();
  }

  // Autofocus the input the moment the overlay appears. Without this the
  // visitor has to click into the box before they can type, which defeats
  // the point of a search that's meant to be faster than clicking around.
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // A global "/" shortcut to open search, the same key GitHub and plenty of
  // other sites use — so it's a convention people already half-know, not one
  // this site invented. It only fires when nothing else is being typed into,
  // otherwise pressing "/" while filling in, say, an answer box would
  // hijack the keystroke instead of typing it.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isOpen) return;

      const target = event.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        open();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const entry = results[selectedIndex];
      if (entry) goToTopic(entry);
    }
  }

  return (
    <>
      <button type="button" onClick={open} className={chipClasses}>
        <SearchIcon />
        <span className="hidden sm:inline">Search</span>
      </button>

      {isOpen && (
        // The backdrop is its own clickable element so clicking anywhere
        // outside the panel closes it — the same "click away to dismiss"
        // behaviour people expect from every search box like this one.
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/60 bg-white/95 p-3 shadow-2xl dark:border-white/15 dark:bg-neutral-900/95"
            // Stop a click inside the panel from bubbling up to the
            // backdrop and closing the thing you're trying to use.
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 rounded-xl border border-black/10 px-3.5 py-2.5 dark:border-white/15">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search for a topic…"
                className="w-full bg-transparent text-lg outline-none placeholder:opacity-50"
              />
            </div>

            {query.trim() !== "" && (
              <ul className="mt-2 max-h-96 overflow-y-auto">
                {results.length === 0 ? (
                  <li className="px-3.5 py-3 text-base opacity-60">
                    No topics found for “{query}”.
                  </li>
                ) : (
                  results.map((entry, index) => (
                    <li key={`${entry.subjectSlug}-${entry.topicSlug}`}>
                      <button
                        type="button"
                        onClick={() => goToTopic(entry)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left transition ${
                          index === selectedIndex
                            ? "bg-black/5 dark:bg-white/10"
                            : ""
                        }`}
                      >
                        <Icon name={entry.icon} className="h-5 w-5 shrink-0 opacity-70" />
                        <span>
                          <span className="block text-base font-medium">
                            {entry.topicTitle}
                          </span>
                          <span className="block text-sm opacity-60">
                            {entry.subjectLabel}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// A magnifying glass, drawn to the same convention as every other header
// icon — 24 viewBox, 1.7 stroke, rounded caps.
function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </svg>
  );
}
