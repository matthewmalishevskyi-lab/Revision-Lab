"use client";

// "Tick every topic" / "Untick all" for the game's topic picker.
//
// Matthew, 2026-10-11: you should be able to pick "more than eight topics,
// like as many as you want". With the cap gone, ticking all nineteen maths
// topics one box at a time is the next annoyance, so these do it in one press.
//
// The picker is a plain GET form that works with no JavaScript at all, and it
// still does: these buttons are a shortcut on top, not the only way. They act
// on the checkboxes inside their own <fieldset> (one year), or the whole form
// when `scope="form"`. type="button", so pressing one never submits the form.

type Props = { scope: "form" | "fieldset"; label: string };

export function TickAllTopics({ scope, label }: Props) {
  const set = (button: HTMLButtonElement, on: boolean) => {
    const root = button.closest(scope === "form" ? "form" : "fieldset");
    root?.querySelectorAll<HTMLInputElement>('input[type="checkbox"][name="topic"]').forEach((box) => { box.checked = on; });
  };
  return (
    <span className="inline-flex flex-wrap gap-2">
      <button type="button" onClick={(e) => set(e.currentTarget, true)}
        className="min-h-11 rounded-full border border-black/15 px-4 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5">
        {label}
      </button>
      {/* one "Untick all" for the whole form is enough; one per year is clutter */}
      {scope === "form" && (
        <button type="button" onClick={(e) => set(e.currentTarget, false)}
          className="min-h-11 rounded-full px-4 text-sm opacity-70 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/5">
          Untick all
        </button>
      )}
    </span>
  );
}
