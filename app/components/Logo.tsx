// The Revision Hub mark: an open book. Small, so it works at any size.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Revision Hub"
      className={className}
    >
      <path
        d="M24 12 C18 7, 11 7, 6 9 L6 38 C11 36, 18 36, 24 41 Z"
        fill="#2563eb"
      />
      <path
        d="M24 12 C30 7, 37 7, 42 9 L42 38 C37 36, 30 36, 24 41 Z"
        fill="#60a5fa"
      />
      <path
        d="M24 12 L24 41"
        stroke="#1e3a8a"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
