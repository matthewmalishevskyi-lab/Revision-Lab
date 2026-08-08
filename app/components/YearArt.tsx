// Decorative artwork for the three year columns.
//
// Deliberately generic — an open book and an exam paper work for Maths and
// English just as well as for Computer Science. The mockup had a monitor and a
// laptop, which look great on a Computer Science page and slightly odd on an
// English one. Only the Year 9 card gets the subject's own mascot.
//
// There's a small story in the order too: meet your mascot, then study,
// then sit the exam.

export function BookArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} aria-hidden="true">
      <ellipse cx="70" cy="98" rx="46" ry="7" fill="#000" opacity={0.08} />
      {/* pages */}
      <path d="M70 30 C56 20, 34 19, 20 24 L20 84 C34 79, 56 80, 70 90 Z" fill="#ffffff" />
      <path d="M70 30 C84 20, 106 19, 120 24 L120 84 C106 79, 84 80, 70 90 Z" fill="#f1f5fb" />
      {/* covers */}
      <path d="M20 24 L20 84 L12 88 L12 28 Z" fill="#1e3a8a" opacity={0.75} />
      <path d="M120 24 L120 84 L128 88 L128 28 Z" fill="#1e3a8a" opacity={0.75} />
      {/* lines of text */}
      <g stroke="#94a3b8" strokeWidth={3} strokeLinecap="round" opacity={0.7}>
        <path d="M30 38h28M30 48h30M30 58h24M30 68h28" />
        <path d="M82 38h28M82 48h30M82 58h24M82 68h28" />
      </g>
      <path d="M70 30v60" stroke="#64748b" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

export function ExamArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} aria-hidden="true">
      <ellipse cx="70" cy="100" rx="40" ry="6" fill="#000" opacity={0.08} />
      {/* clipboard back */}
      <rect x="34" y="14" width="72" height="84" rx="8" fill="#ffffff" />
      <rect x="34" y="14" width="72" height="84" rx="8" fill="none" stroke="#cbd5e1" strokeWidth={2} />
      {/* clip */}
      <rect x="58" y="6" width="24" height="14" rx="5" fill="#64748b" />
      {/* answered questions */}
      <g strokeLinecap="round" strokeWidth={3}>
        <path d="M46 38h34" stroke="#cbd5e1" />
        <path d="M46 50h44" stroke="#cbd5e1" />
        <path d="M46 62h30" stroke="#cbd5e1" />
        <path d="M46 74h40" stroke="#cbd5e1" />
      </g>
      {/* ticks */}
      <g stroke="#22c55e" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M86 34l3.5 4 6.5-8" />
        <path d="M94 58l3.5 4 6.5-8" />
      </g>
    </svg>
  );
}
