"use client";

import { useState } from "react";
import { setReportResolvedAction } from "./actions";

export function ResolveButton({ id, resolved }: { id: string; resolved: boolean }) {
  const [done, setDone] = useState(resolved);
  const [busy, setBusy] = useState(false);

  return (
    <button
      type="button"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        const next = !done;
        const ok = await setReportResolvedAction(id, next);
        if (ok) setDone(next);
        setBusy(false);
      }}
      className="min-h-11 shrink-0 rounded-full border border-black/15 px-4 text-xs font-medium disabled:opacity-50 dark:border-white/20"
    >
      {done ? "Reopen" : "Mark done"}
    </button>
  );
}
