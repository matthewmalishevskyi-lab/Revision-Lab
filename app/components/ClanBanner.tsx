import { CLAN_ICON_PATHS } from "./ClanBadgeIcon";
import {
  clampIconOffset,
  clampIconScale,
  colorHex,
  isClanIcon,
  isClanShape,
  type ClanShapeName,
} from "../lib/clanBanners";

// Looser than ClanBannerConfig on purpose: the picker always supplies real
// values from the fixed lists, but a banner read back from storage is just
// whatever was saved — never guaranteed to still be a shape or icon this
// file recognises, the same defensive stance AccessibilityPanel's
// parseSettings takes on anything read from outside this file's control.
// The three sizing/position fields are optional for the same reason: every
// clan made before resizing existed has no opinion on them at all, and
// this must still render exactly as it always did for those.
type BannerLike = {
  color: string;
  shape: string;
  icon: string;
  iconScale?: number;
  iconOffsetX?: number;
  iconOffsetY?: number;
};

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

  // 1.8 is the ORIGINAL fixed scale — the base every clan had before
  // resizing existed, kept as the multiplier's anchor point so a clan with
  // no scale/offset saved (iconScale ?? 1) renders pixel-identical to how
  // it always did. Icons are drawn on a 24x24 grid; centring the SCALED
  // icon means solving for the translate that puts its scaled midpoint
  // (12 × scale) at the banner's own midpoint (50), rather than a fixed
  // translate that only centred one specific scale correctly.
  const scale = 1.8 * clampIconScale(banner.iconScale ?? 1);
  const centred = 50 - 12 * scale;
  const x = centred + clampIconOffset(banner.iconOffsetX ?? 0);
  const y = centred + clampIconOffset(banner.iconOffsetY ?? 0);

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill={colorHex(banner.color)}>{SHAPES[shape]}</g>
      {/* ⚠️ This renders CLAN_ICON_PATHS directly rather than nesting a
          <ClanBadgeIcon> — that was the very first version, and it was a
          real, shipped bug: <ClanBadgeIcon> renders its own <svg>, and an
          <svg> nested inside another <svg> with no explicit width/height
          sizes itself to the PARENT's 100x100 viewport rather than its own
          24x24 viewBox. The icon rendered roughly 4x too large as a result,
          and the outer banner clipped almost all of it — which is exactly
          what showed up as "the icon's stuck at the side, not centred."
          A <g> has no viewport of its own, so the transform below applies
          directly to the paths with nothing to size incorrectly.

          The stroke attributes that used to live on <ClanBadgeIcon>'s own
          <svg> now live directly on this <g> instead — fill="white" isn't
          used because these are OUTLINE icons (fill="none", stroke draws
          the shape), the same reasoning Icon.tsx's own icons use. */}
      <g
        transform={`translate(${x},${y}) scale(${scale})`}
        fill="none"
        stroke="white"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {CLAN_ICON_PATHS[icon]}
      </g>
    </svg>
  );
}
