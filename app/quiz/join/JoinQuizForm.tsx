"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { joinQuizAction } from "../../lib/quiz-actions";
import { writeStorageRaw } from "../../lib/browserStore";
import { quizPlayerStorageKey } from "../quizStorage";

// A logged-in visitor plays under their real (first) name automatically —
// no separate "pick a nickname" step, the same way a clan membership is
// always your real account rather than an alias. A GUEST (no account)
// types whatever name they want, exactly like joining a Kahoot game.
export function JoinQuizForm({
  loggedInName,
  initialCode,
}: {
  loggedInName: string | null;
  initialCode: string;
}) {
  const router = useRouter();

  const [code, setCode] = useState(initialCode);
  const [guestName, setGuestName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const result = await joinQuizAction(code, guestName);
    setPending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    // Remembered in THIS browser only — a guest has no account for the
    // server to recognise them by, so this is what lets the play page
    // reconnect them to their own player row after a refresh. See
    // quizStorage.ts's own comment for why this is scoped per room code.
    writeStorageRaw(
      quizPlayerStorageKey(result.code),
      JSON.stringify({ playerId: result.playerId, displayName: result.displayName }),
    );
    router.push(`/quiz/play/${result.code}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <label className="block text-sm font-semibold opacity-70">Room code</label>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
        inputMode="numeric"
        placeholder="123456"
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-center text-3xl font-black tracking-widest tabular-nums dark:border-white/15 dark:bg-white/5"
      />

      {!loggedInName && (
        <>
          <label className="mt-5 block text-sm font-semibold opacity-70">Your name</label>
          <input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            maxLength={30}
            placeholder="Sam"
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 dark:border-white/15 dark:bg-white/5"
          />
        </>
      )}
      {loggedInName && (
        <p className="mt-4 text-sm opacity-60">
          Joining as <span className="font-semibold">{loggedInName}</span>.
        </p>
      )}

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || code.length !== 6}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-lg font-bold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Joining…" : "Join"}
      </button>
    </form>
  );
}
