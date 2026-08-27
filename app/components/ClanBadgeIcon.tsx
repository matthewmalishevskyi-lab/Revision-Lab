import type { ClanIconName } from "../lib/clanBanners";

// The 15 objects/characters a clan banner can show, drawn on the exact same
// 24x24 grid, stroke width and line style as Icon.tsx's topic icons — see
// that file's own comment for why matching stroke weight is what makes a
// set of icons read as a SET. Kept in its own file and its own type rather
// than added to Icon.tsx's IconName: these are chosen by students for
// decoration, not by subjects.ts for identity, and mixing the two lists
// would mean a stray clan icon could accidentally show up somewhere a topic
// icon was expected.

// Exported as well as used below — ClanBanner.tsx needs the raw paths, not
// a whole <svg>. See that file's comment on why: nesting a second <svg>
// (this component, as it renders standalone) inside a banner's own <svg>
// caused a real, shipped bug — a nested svg with no explicit width/height
// sizes itself to the PARENT's viewport rather than its own viewBox, so the
// icon rendered far too large and got clipped by the banner's edge instead
// of sitting centred inside it. A <g> of paths has no viewport of its own,
// so it can't make that mistake.
export const CLAN_ICON_PATHS: Record<ClanIconName, React.ReactNode> = {
  laptop: (
    <>
      <rect x="5" y="5" width="14" height="9" rx="1.2" />
      <path d="M3 17.5h18l-1.2 2.3a1.5 1.5 0 01-1.3.7H5.5a1.5 1.5 0 01-1.3-.7z" />
    </>
  ),
  mouse: (
    <>
      <rect x="8" y="3.5" width="8" height="17" rx="4" />
      <path d="M12 3.5v6" />
    </>
  ),
  pen: <path d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19zM14 6.5l3.5 3.5" />,
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M7.5 6.5h9" />
      <path d="M7.5 11h1.6M11.2 11h1.6M14.9 11h1.6M7.5 14.5h1.6M11.2 14.5h1.6M7.5 18h1.6M11.2 18h1.6M14.9 14.5v4.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5c2-1 5-1 8 0v13c-3-1-6-1-8 0z" />
      <path d="M20 5.5c-2-1-5-1-8 0v13c3-1 6-1 8 0z" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 01-10 0z" />
      <path d="M7 5.5H4a3 3 0 003 3M17 5.5h3a3 3 0 01-3 3" />
      <path d="M12 13v3.5M8.5 20.5h7M9.5 17h5l.6 3.5h-6.2z" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z" />
  ),
  rocket: (
    <>
      <path d="M12 3.5c3 2 4.5 5.8 4.5 9.5 0 1.6-.3 3-.8 4.2h-7.4c-.5-1.2-.8-2.6-.8-4.2 0-3.7 1.5-7.5 4.5-9.5z" />
      <circle cx="12" cy="10.5" r="1.6" />
      <path d="M8.3 17.2L5.5 20M15.7 17.2L18.5 20M9.5 20.5h5" />
    </>
  ),
  flame: (
    <path d="M12 3.5c1 3-3 4.4-3 8a3 3 0 006 0c1.4 1 2 2.6 2 4a5 5 0 01-10 0c0-4.5 3-6 5-12z" />
  ),
  crown: <path d="M4 9l3.5 3L12 6l4.5 6L20 9l-1.6 9H5.6z" />,
  gem: (
    <>
      <path d="M6.5 4h11l4 5.5L12 20.5 2.5 9.5z" />
      <path d="M2.5 9.5h19M9 4l3 5.5 3-5.5" />
    </>
  ),
  controller: (
    <>
      <path d="M6 8.5h12a4 4 0 013.9 4.9l-.7 3a2.6 2.6 0 01-4.6 1L15 15.5H9l-1.6 1.9a2.6 2.6 0 01-4.6-1l-.7-3A4 4 0 016 8.5z" />
      <path d="M8 11v3M6.5 12.5h3" />
      <path d="M16 11.2h.01M18.2 13h.01" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13.5" width="4" height="6" rx="1.5" />
      <rect x="17" y="13.5" width="4" height="6" rx="1.5" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18.5h6M9.7 21h4.6" />
      <path d="M12 3.5a6.5 6.5 0 00-3.6 11.9c.6.4 1 1.1 1 1.9v.2h5.2v-.2c0-.8.4-1.5 1-1.9A6.5 6.5 0 0012 3.5z" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </>
  ),
  microphone: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11v1a6 6 0 0012 0v-1" />
      <path d="M12 18v3M9 21h6" />
    </>
  ),
  guitar: (
    <>
      <circle cx="10" cy="16" r="5" />
      <circle cx="10" cy="16" r="1.6" />
      <path d="M11.3 12.3L16 3.7" />
      <path d="M15 4.3l2.5-1M16.3 6l2.5-1" />
    </>
  ),
  paintbrush: (
    <>
      <path d="M6 15.5c-1.4 1.7-1.9 3.8-1.5 5.5 1.9-.4 4-1 5.5-2.4" />
      <path d="M8.5 15L15.7 6c1-1.2 2.7-1.2 3.6.1.9 1.2.6 2.9-.7 3.8l-8 6.2z" />
    </>
  ),
  football: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8.3l3 2.1-1.1 3.5H10.1L9 10.4z" />
      <path d="M12 8.3V5M14.9 10.4l2.6-1.4M9.1 10.4L6.5 9M13.9 13.9l1 3.3M10.1 13.9l-1 3.3" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8.3 7l1.3-2.5h4.8L15.7 7" />
      <circle cx="12" cy="13.7" r="4" />
    </>
  ),
  pawn: (
    <>
      <circle cx="12" cy="6" r="2.4" />
      <path d="M9.6 12.3c0-1.6 1.1-2.9 2.4-2.9s2.4 1.3 2.4 2.9c0 .9-.4 1.7-1.1 2.2l1.6 4.5H9.1l1.6-4.5c-.7-.5-1.1-1.3-1.1-2.2z" />
      <path d="M7.5 20.5h9" />
    </>
  ),
  lightning: <path d="M13 3L5.5 13.2h5.3L10 21l8.5-11.2h-5.3z" />,
};

export function ClanBadgeIcon({
  name,
  className,
}: {
  name: ClanIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {CLAN_ICON_PATHS[name]}
    </svg>
  );
}
