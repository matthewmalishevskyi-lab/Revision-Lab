import { ClanBadgeIcon } from "./ClanBadgeIcon";
import {
  colorHex,
  isClanIcon,
  isClanShape,
  type ClanShapeName,
} from "../lib/clanBanners";

// Looser than ClanBannerConfig on purpose: the picker always supplies real
// values from the fixed lists, but a banner read back from storage is just
// whatever string was saved — never guaranteed to still be a shape or icon
// this file recognises, the same defensive stance AccessibilityPanel's
// parseSettings takes on anything read from outside this file's control.
type BannerLike = { color: string; shape: string; icon: string };

// Draws a clan's banner from its three stored choices — colour, shape, icon.
// One component reused everywhere a banner appears (the picker's live
// preview, a search result card, a clan's own page), so a banner always
// looks the same wherever it's shown.
//
// Both layers share ONE 0–100 coordinate space: the shape is drawn as a
// filled outline on that grid, and the icon — natively drawn on Icon.tsx's
// 24x24 grid — is scaled and centred inside it with a single <g transform>,
// rather than nesting a second <svg> with its own viewBox. One coordinate
// system is simpler to reason about than two.
const SHAPES: Record<ClanShapeName, React.ReactNode> = {
  circle: <circle cx="50" cy="50" r="48" />,
  square: <rect x="6" y="6" width="88" height="88" rx="18" />,
  diamond: <polygon points="50,4 96,50 50,96 4,50" />,
  hexagon: <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" />,
  shield: <path d="M50 4 L92 18 V52 C92 78 74 92 50 98 C26 92 8 78 8 52 V18 Z" />,
  ribbon: <path d="M10 6 H90 V70 L50 96 L10 70 Z" />,
};

export function ClanBanner({
  banner,
  className,
}: {
  banner: BannerLike;
  className?: string;
}) {
  // Falls back to a shield-and-trophy rather than rendering nothing (or
  // crashing) if a shape or icon name somehow doesn't match one of the
  // fixed lists — a future removed option, a hand-edited local data file,
  // that sort of thing. A slightly wrong-looking banner beats a broken page.
  const shape: ClanShapeName = isClanShape(banner.shape) ? banner.shape : "shield";
  const icon = isClanIcon(banner.icon) ? banner.icon : "trophy";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill={colorHex(banner.color)}>{SHAPES[shape]}</g>
      {/* Icon.tsx's icons are drawn on a 24x24 grid; scaling by 1.8 and
          centring the result inside the 100x100 banner puts the glyph at
          roughly 43% of the banner's width, which reads clearly at both a
          small search-result size and a large clan-page size. White,
          hard-coded rather than currentColor: every banner colour here is
          dark enough (see lib/clanBanners.ts) that white is always legible
          on top of it, and a banner's icon shouldn't change colour just
          because it sits inside coloured text. */}
      <g transform="translate(28,28) scale(1.8)">
        <ClanBadgeIcon name={icon} className="text-white" />
      </g>
    </svg>
  );
}
