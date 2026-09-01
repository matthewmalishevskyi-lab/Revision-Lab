"use client";

// "Delete my progress history", at the very bottom of the progress page.
//
// Built on the same idiom as DeleteAccountForm in app/account/AccountForms.tsx
// rather than a native confirm() dialog: the first click REVEALS the serious
// step instead of doing anything. Two reasons that's better than a browser
// pop-up. A confirm() box is a grey system dialog with no room to say what is
// actually about to happen — and people dismiss those on reflex. And a delete
// button that acts on one click is a delete button somebody eventually hits by
// accident, which for this particular action means months of their own
// revision gone with nothing to undo it.
//
// The same pattern is already used for ending a live quiz early. Three places
// now use it, which is the point: a serious action should always feel the same.

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteMyProgress } from "../lib/progress-actions";

export function DeleteProgressForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  // useTransition rather than a plain `pending` boolean, so the router refresh
  // below is part of the same pending state — otherwise the button goes back
  // to normal a moment before the page's numbers actually update, which reads
  // as "it didn't work".
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    setError(null);
    startTransition(async () => {
      const result = await deleteMyProgress();
      if (!result.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
      setOpen(false);
      // The progress page is a Server Component, so the new (empty) figures
      // have to be fetched again — the action revalidates on the server, and
      // this is what makes this tab actually re-render with them.
      router.refresh();
    });
  }

  if (done) {
    return (
      <p className="mt-6 rounded-xl border border-green-600/30 bg-green-500/10 px-4 py-3 text-sm">
        Your progress history has been deleted. Everything on this page now
        starts again from zero.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 rounded-xl border border-red-500/40 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-500/10 dark:text-red-300"
      >
        Delete my progress history
      </button>
    );
  }

  return (
    <div className="mt-6">
      <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm">
        Are you sure? This deletes{" "}
        <strong>every question you&apos;ve answered, every flashcard you&apos;ve
        reviewed, all your study time, your test results, your streak, your XP
        and your badges</strong>{" "}
        — and the record of which flashcards were due for review. Everything on
        this page goes back to zero.
        <br />
        <br />
        This happens <strong>immediately and permanently</strong>. There is no
        undo, and nobody can get it back for you afterwards — not even us. Your
        account itself stays exactly as it is; only what you&apos;ve done is
        removed.
      </p>

      {error && (
        <p className="mt-3 text-sm font-semibold text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleDelete}
          disabled={pending}
          className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {pending ? "Deleting…" : "Yes, delete it all"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setError(null);
          }}
          disabled={pending}
          className="rounded-xl border border-white/60 bg-white/60 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90 disabled:opacity-60 dark:border-white/15 dark:bg-white/10"
        >
          Keep my progress
        </button>
      </div>
    </div>
  );
}
