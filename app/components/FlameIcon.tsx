// A filled flame — used wherever the site shows a streak (the homepage
// spotlight and the dashboard strip), pulled out into its own file so the two
// places can't quietly drift into two slightly different-looking flames.
//
// Filled rather than stroked, unlike most icons on the site: a flame reads as
// "flame" from its silhouette far more than from an outline, and this is the
// one icon on the site meant to catch the eye rather than sit quietly next to
// text. Colour comes from currentColor, same convention as every other icon
// here — the caller decides how bright it looks.
export function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c1.2 3-2.8 4.4-2.8 8.2a2.8 2.8 0 005.6 0c0-.9-.6-1.7-.6-2.6 2.2 1.4 4.3 3.8 4.3 6.9a6.5 6.5 0 11-13 0C5.5 8.8 9 6.4 12 2z" />
    </svg>
  );
}
