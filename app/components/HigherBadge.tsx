// A label marking content that only appears on the Higher tier paper.
//
// GCSE Maths splits into two tiers: Foundation (grades 1–5) and Higher
// (grades 4–9). Some material is examined only on Higher.
//
// Labelling it helps BOTH students, in opposite directions. A Foundation
// student who spends a week on circle theorems has wasted a week on something
// they will never be asked. A Higher student who assumes everything is shared
// skips marks they could have had. An unlabelled page silently disadvantages
// one of them, and there is no way for the reader to tell which.
export function HigherBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-amber-500/40 bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
      Higher tier only
    </span>
  );
}

// Shown once at the top of any topic that contains Higher-only material, so a
// student meets the explanation before they meet the first badge.
export function HigherNotice() {
  return (
    <div className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4">
      <p className="flex flex-wrap items-center gap-2 font-semibold">
        <HigherBadge />
        <span>This topic contains Higher tier material.</span>
      </p>
      <p className="mt-2 text-sm leading-relaxed opacity-80">
        Anything carrying that badge is examined on the Higher paper only. If
        you are entered for Foundation you can skip it — but check with your
        teacher first, because the exact split varies slightly between exam
        boards, and which tier you sit is decided by your school.
      </p>
    </div>
  );
}
