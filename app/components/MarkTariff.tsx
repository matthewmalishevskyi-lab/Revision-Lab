// "[3 marks]" beside a question, the way a real paper prints it.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS WORTH A COMPONENT RATHER THAN THREE LITTLE SPANS
//
// Matthew: "on the exam style questions, can you please tell how many marks
// you're getting for different questions? Because for now it's the same."
//
// The number itself is derived in one place (lib/marks.ts — read its header
// before changing anything about how big a question is). This file is only
// about how it LOOKS, and it exists because the tariff has to look identical
// in practice, in a test and on the printed sheet. Three hand-written spans
// would drift, and a tariff that is styled like a decoration in one place and
// like a heading in another stops reading as the thing an exam paper puts in
// the margin.
//
// Singular matters: a real paper writes "[1 mark]", never "[1 marks]". Getting
// that wrong is small and instantly tells a student the site is not written by
// someone who has looked at a paper.
// ─────────────────────────────────────────────────────────────────────────────

export function MarkTariff({ marks }: { marks: number }) {
  return (
    <span
      // `whitespace-nowrap` so "[12 marks]" never wraps between the number and
      // the word, and `tabular-nums` so a column of them lines up.
      className="ml-2 whitespace-nowrap text-sm font-semibold tabular-nums opacity-60"
    >
      [{marks} {marks === 1 ? "mark" : "marks"}]
    </span>
  );
}
