"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { iconChipClasses } from "./chipStyles";
import { Icon } from "./Icon";
import {
  searchSite,
  suggestions,
  type SearchResult,
} from "../lib/siteSearch";

// Jump straight to anywhere on the site by typing its name, instead of
// clicking through to find it.
//
// ⚠️ IT USED TO FIND TOPICS AND NOTHING ELSE, which quietly made every feature
// that is not a topic harder to reach than it should be. Matthew: *"you can
// search up the different buttons. And not just the topics. For example, if
// you write teacher tools, it gives you the teacher tools."* Teacher tools,
// the live quiz, clans, the wardrobe, today's practice, the accessibility
// settings — each is reached from a button on exactly one page, and on a phone
// most of those buttons are inside a menu. If you did not already know where a
// thing lived, search could not tell you.
//
// The index itself lives in lib/siteSearch.ts, which is plain data with no
// server-only imports — see that file for what is in it, and for why
// /early-access deliberately is not.

export function SearchBox({ signedIn = false }: { signedIn?: boolean }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const typed = query.trim() !== "";
  const { pages, topics } = searchSite(query, signedIn);
  // Before anything is typed, offer a few places rather than an empty panel —
  // a search box that shows nothing until you guess a word cannot teach you
  // what it now knows about.
  const offered = typed ? [] : suggestions(signedIn);
  // One flat list for the keyboard, so Up/Down walks the sections in the order
  // they appear rather than treating them as two separate lists.
  const results: SearchResult[] = typed ? [...pages, ...topics] : offered;

  function open() {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }

  function close() {
    setIsOpen(false);
  }

  function go(entry: SearchResult) {
    router.push(entry.href);
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
      if (entry) go(entry);
    }
  }

  return (
    <>
      {/* Icon-only: a magnifying glass needs no label, and dropping the text
          here is one of several trims that keep the header row fitting on
          one line — see chipStyles.ts's comment. The keyboard shortcut still
          shows up on hover via `title`, for anyone who wouldn't otherwise
          know it exists. */}
      <button
        type="button"
        onClick={open}
        className={iconChipClasses}
        aria-label="Search"
        title="Search (press /)"
      >
        <SearchIcon />
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
                placeholder="Search topics, tools and settings…"
                className="w-full bg-transparent text-lg outline-none placeholder:opacity-50"
              />
            </div>

            <ul className="mt-2 max-h-96 overflow-y-auto">
              {!typed && offered.length > 0 && <SectionHeading>Jump to</SectionHeading>}
              {!typed &&
                offered.map((entry, index) => (
                  <ResultRow
                    key={entry.href}
                    entry={entry}
                    selected={index === selectedIndex}
                    onSelect={() => setSelectedIndex(index)}
                    onGo={() => go(entry)}
                  />
                ))}

              {typed && results.length === 0 && (
                <li className="px-3.5 py-3 text-base opacity-60">
                  Nothing on the site matches “{query}”.
                </li>
              )}

              {typed && pages.length > 0 && <SectionHeading>Pages</SectionHeading>}
              {typed &&
                pages.map((entry, index) => (
                  <ResultRow
                    key={entry.href}
                    entry={entry}
                    selected={index === selectedIndex}
                    onSelect={() => setSelectedIndex(index)}
                    onGo={() => go(entry)}
                  />
                ))}

              {typed && topics.length > 0 && <SectionHeading>Topics</SectionHeading>}
              {typed &&
                topics.map((entry, index) => {
                  // Continues the numbering from the pages above it: the
                  // keyboard walks one list, even though the eye sees two.
                  const flat = pages.length + index;
                  return (
                    <ResultRow
                      key={entry.href}
                      entry={entry}
                      selected={flat === selectedIndex}
                      onSelect={() => setSelectedIndex(flat)}
                      onGo={() => go(entry)}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <li
      // Presentational: a screen reader should hear the results, not a word
      // that only exists to break them into two visual groups.
      aria-hidden="true"
      className="px-3.5 pb-1 pt-2.5 text-xs font-semibold uppercase tracking-wider opacity-45"
    >
      {children}
    </li>
  );
}

function ResultRow({
  entry, selected, onSelect, onGo,
}: {
  entry: SearchResult;
  selected: boolean;
  onSelect: () => void;
  onGo: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onGo}
        onMouseEnter={onSelect}
        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left transition ${
          selected ? "bg-black/5 dark:bg-white/10" : ""
        }`}
      >
        <Icon name={entry.icon} className="h-5 w-5 shrink-0 opacity-70" />
        <span className="min-w-0">
          <span className="block text-base font-medium">{entry.title}</span>
          <span className="block truncate text-sm opacity-60">{entry.detail}</span>
        </span>
      </button>
    </li>
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
