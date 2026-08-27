import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { ACCOUNTS_ENABLED } from "../../../lib/site";
import { getClanById } from "../../../lib/clans";
import { isClanIcon, isClanShape } from "../../../lib/clanBanners";
import { getViewer } from "../../../lib/viewer";
import { EditClanBannerForm } from "../EditClanBannerForm";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const clan = await getClanById(id);
  return {
    title: clan ? `Edit ${clan.name}'s banner` : "Clan not found",
    robots: { index: false, follow: false },
  };
}

// Creator-only — see updateClanBanner's own comment in lib/clans.ts for why
// a clan's banner is a shared setting rather than something every member
// should be able to change. Checked here too, not just in the server
// action, so someone who isn't the creator never even sees the form —
// the same "belt and braces" reasoning every other protected page here
// follows (dashboard, /clans/new).
export default async function EditClanBannerPage({ params }: Props) {
  if (!ACCOUNTS_ENABLED) redirect("/");

  const { id } = await params;
  const clan = await getClanById(id);
  if (!clan) notFound();

  const user = await getViewer();
  if (!user) redirect("/login");
  if (user.id !== clan.createdBy) redirect(`/clans/${id}`);

  // Defensive fallback, same reasoning as ClanBanner.tsx's own BannerLike —
  // a saved shape/icon should always be one of the fixed lists, but this
  // guards against a hand-edited local data file or a future removed
  // option rather than trusting storage blindly.
  const initial = {
    color: clan.bannerColor,
    shape: isClanShape(clan.bannerShape) ? clan.bannerShape : ("shield" as const),
    icon: isClanIcon(clan.bannerIcon) ? clan.bannerIcon : ("trophy" as const),
    iconScale: clan.iconScale,
    iconOffsetX: clan.iconOffsetX,
    iconOffsetY: clan.iconOffsetY,
  };

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">Edit banner</h1>
        <p className="mt-3 opacity-70">
          Change {clan.name}&apos;s colour, shape, icon, size or position.
        </p>
      </section>

      <div className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <EditClanBannerForm clanId={clan.id} initial={initial} />
      </div>

      <p className="mt-6 text-center">
        <Link
          href={`/clans/${clan.id}`}
          className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to {clan.name}
        </Link>
      </p>
    </main>
  );
}
