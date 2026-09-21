"use client";

// "Early access for developers", at the very foot of the progress page.
// The button reveals a code box; the right code unlocks /early-access for
// this account. The code is checked on the server — nothing in this file
// knows what it is.

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { unlockDevAccess } from "../lib/dev-access-actions";

export function DevAccessForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await unlockDevAccess(code);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/early-access");
    });
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 text-sm font-semibold transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Early access for developers
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="mt-4 flex max-w-md flex-wrap items-start gap-3">
      <label htmlFor="dev-code" className="sr-only">Developer code</label>
      <input
        id="dev-code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoFocus
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        placeholder="Developer code"
        className="min-h-11 flex-1 rounded-lg border border-black/10 bg-white/80 px-3 text-base tracking-widest outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-white/5"
      />
      <button
        type="submit"
        disabled={pending || !code.trim()}
        className="min-h-11 rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:opacity-50 dark:bg-white dark:text-neutral-900"
      >
        {pending ? "Checking…" : "Unlock"}
      </button>
      <button
        type="button"
        onClick={() => { setOpen(false); setCode(""); setError(null); }}
        className="min-h-11 px-2 text-sm opacity-60 hover:opacity-100"
      >
        Cancel
      </button>
      {error && <p role="alert" className="w-full text-sm text-red-700 dark:text-red-400">{error}</p>}
    </form>
  );
}
