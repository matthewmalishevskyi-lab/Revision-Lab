// An honest note at the foot of every topic page.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// This site now holds around 234,000 words of revision material across six
// subjects, and it is public. Students may find it through a search and use it
// to prepare for exams that decide what they do next.
//
// Every word of it was written with AI assistance, and no subject teacher has
// checked any of it. Matthew studies Computer Science, Maths, English and
// History, so four of the six subjects have had a student's eye on them. He
// does not take Geography or Business, so nobody involved can verify those 43
// topics at all.
//
// That is not a reason to take it down — it is carefully written, it cites real
// figures, and it flags where historians and scientists disagree. It IS a
// reason to say so plainly, where a reader will see it, rather than letting
// them assume a teacher signed it off.
//
// The tone matters. A frightening warning would put people off material that is
// genuinely useful; no warning at all would be dishonest. This aims for the
// same standard a decent textbook footnote would meet: tell the reader what
// this is, what it is not, and what to check.
//
// It is deliberately at the FOOT of the page rather than the top. Someone
// arriving to revise should reach the revision first; someone deciding whether
// to trust it will scroll.
// ─────────────────────────────────────────────────────────────────────────────

export function ContentNotice() {
  return (
    <section className="mt-10 rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] p-5 text-sm">
      <h2 className="font-semibold">About this material</h2>
      <ul className="mt-2 space-y-1.5 opacity-80">
        <li>
          Written with AI assistance and <strong>not checked by a subject
          teacher</strong>. It is researched and carefully written, and it has
          not been through the review a textbook gets.
        </li>
        <li>
          <strong>Exam boards differ.</strong> AQA, Edexcel, OCR and WJEC split
          subjects up differently and set different texts, options and case
          studies. Check anything important against your own school&apos;s
          specification.
        </li>
        <li>
          <strong>Some figures date.</strong> Populations, CO₂ levels,
          development statistics and casualty estimates all change or are
          revised. Look up current values before quoting them.
        </li>
        <li>
          Use it to test yourself and to check your understanding — and let your
          teacher, not this site, be the final word on anything you&apos;re
          unsure about.
        </li>
      </ul>
    </section>
  );
}
