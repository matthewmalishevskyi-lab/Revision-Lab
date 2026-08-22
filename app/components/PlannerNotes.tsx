"use client";

// PREVIEW ONLY — the "plan ahead" half of the Pro-tier planner (see
// app/pro-preview/planner/page.tsx). The look-BACK half of that page reads
// real activity rows from the database; this, the look-FORWARD half, is
// just a list of short notes ("Tuesday: Chemistry topic 4") with nothing to
// mark right or wrong and nothing that needs marking against real content —
// so unlike everything else added this round, it doesn't need a database
// migration to exist at all.
//
// ⚠️ KNOWN LIMITATION, WORTH FIXING BEFORE THIS EVER GOES LIVE: these notes
// live in localStorage, the same "a fact about the browser" category as the
// theme toggle and the wardrobe's equipped outfit. That's fine for a
// preference nobody else needs to see, but a REAL plan a Pro subscriber
// wrote on their laptop should probably still be there on their phone —
// which localStorage cannot do. A shipped version of this almost certainly
// wants a small `planner_notes` table instead, the same "activity is an
// event log, plans are just rows with a date" shape as everything else on
// this site. Left as localStorage for this preview specifically so trying
// it out doesn't require Matthew to run a new SQL migration first.

import { useEffect, useState } from "react";

type PlannedItem = { date: string; note: string };

const STORAGE_KEY = "revision-lab:preview-planner-notes";

function loadNotes(): PlannedItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveNotes(items: PlannedItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // No localStorage available — the note just won't be remembered next
    // time, same trade-off as every other browser-only preference here.
  }
}

function todayISO(): string {
  // Deliberately the VISITOR's local date, not a server-computed one — this
  // is a client-only feature (see the comment above), so there is no
  // "Europe/London" server clock to defer to the way getMonthlyActivity
  // does for the real activity data.
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60_000);
  return local.toISOString().slice(0, 10);
}

export function PlannerNotes() {
  const [items, setItems] = useState<PlannedItem[]>([]);
  const [date, setDate] = useState(todayISO());
  const [note, setNote] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(loadNotes());
    setLoaded(true);
  }, []);

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = note.trim();
    if (!trimmed) return;
    const next = [...items, { date, note: trimmed }].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    setItems(next);
    saveNotes(next);
    setNote("");
  }

  function removeNote(index: number) {
    const next = items.filter((_, i) => i !== index);
    setItems(next);
    saveNotes(next);
  }

  // Not rendering anything from storage until after mount keeps the
  // server-rendered HTML and the first client render in agreement — the
  // same "read after mount" reasoning as ThemeToggle and every other
  // localStorage-backed component on this site.
  if (!loaded) return null;

  const today = todayISO();
  const upcoming = items.filter((item) => item.date >= today);
  const past = items.filter((item) => item.date < today);

  return (
    <div>
      <form onSubmit={addNote} className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1 text-sm">
          <span className="opacity-70">Date</span>
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-white/60 bg-white/70 px-3 py-2 dark:border-white/15 dark:bg-white/10"
          />
        </label>
        <label className="flex flex-1 flex-col gap-1 text-sm">
          <span className="opacity-70">What are you planning to revise?</span>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Chemistry — atomic structure"
            className="w-full rounded-lg border border-white/60 bg-white/70 px-3 py-2 dark:border-white/15 dark:bg-white/10"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide opacity-60">
          Upcoming
        </h3>
        {upcoming.length === 0 ? (
          <p className="mt-2 text-sm opacity-60">Nothing planned yet.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {upcoming.map((item) => {
              const realIndex = items.indexOf(item);
              return (
                <li
                  key={`${item.date}-${item.note}-${realIndex}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/60 bg-white/50 px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span>
                    <strong>
                      {new Date(`${item.date}T00:00:00`).toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })}
                    </strong>{" "}
                    — {item.note}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeNote(realIndex)}
                    className="shrink-0 opacity-50 hover:opacity-100"
                    aria-label={`Remove plan: ${item.note}`}
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {past.length > 0 && (
        <p className="mt-4 text-xs opacity-50">
          {past.length} older plan{past.length === 1 ? "" : "s"} hidden.
        </p>
      )}
    </div>
  );
}
