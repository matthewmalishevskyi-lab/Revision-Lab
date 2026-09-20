import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { getViewer } from "../../lib/viewer";
import { listReports, REPORTS_ENABLED } from "../../lib/content-reports";
import { EMAIL_ENABLED } from "../../lib/email";
import { CONTACT_EMAIL } from "../../lib/site";
import { getSubject, getTopic } from "../../lib/subjects";
import { ResolveButton } from "./ResolveButton";

export const metadata: Metadata = {
  title: "Reported questions",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// Who can see this.
//
// ⚠️ MATCHED ON THE CONTACT ADDRESS RATHER THAN AN "admin" COLUMN.
// There is exactly one person who acts on these, his address is already the
// site's published contact address in site.ts, and it is already the single
// source of truth for "who is this site". A role column would be a second
// place to keep that fact, which is the kind of drift this codebase has been
// bitten by before — and a boolean on a user row is one bad UPDATE away from
// being wrong. If the site ever has real moderators this needs replacing; one
// person does not need a permissions system.
//
// notFound() rather than a "you are not allowed" page, so the existence of the
// route is not confirmed to anyone who guesses it.
export default async function ReportsPage() {
  const viewer = await getViewer();
  if (!viewer || viewer.email.toLowerCase() !== CONTACT_EMAIL.toLowerCase()) notFound();

  const reports = await listReports();
  const open = reports.filter((r) => !r.resolvedAt);
  const done = reports.filter((r) => r.resolvedAt);

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-8">
      <SiteHeader greeting={false} />

      <section className="mt-10">
        <h1 className="text-4xl font-bold tracking-tight">Reported questions</h1>
        <p className="mt-3 max-w-2xl opacity-70">
          What students have flagged as wrong. Every report is stored here
          whether or not its email arrived, so this list is the real record.
        </p>
      </section>

      {!REPORTS_ENABLED && (
        <p className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          Supabase is not configured here, so nothing can be stored or read.
          This is normal when running the site locally.
        </p>
      )}

      {/* ⚠️ SAID OUT LOUD RATHER THAN LEFT TO BE DISCOVERED. If the Gmail
          variables were never set in Vercel, reports are still being saved but
          no email is going anywhere — and the only way to notice would be to
          wonder why the inbox is quiet. That is the password-reset failure
          again, so the page states it. */}
      {REPORTS_ENABLED && !EMAIL_ENABLED && (
        <p className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
          <strong>Reports are being saved but not emailed.</strong>{" "}
          GMAIL_USER and GMAIL_APP_PASSWORD are not set, so nothing reaches{" "}
          {CONTACT_EMAIL}. Check this page directly until they are — see step 8
          of DEPLOYING.md.
        </p>
      )}

      <p className="mt-6 text-sm tabular-nums opacity-60">
        {open.length} open · {done.length} done
      </p>

      {reports.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-6 opacity-70 dark:border-white/10 dark:bg-white/5">
          Nothing reported yet.
        </p>
      ) : (
        <ol className="mt-4 space-y-3">
          {[...open, ...done].map((r) => {
            const subject = getSubject(r.subject);
            const topic = getTopic(r.subject, r.topic);
            return (
              <li
                key={r.id}
                className={`rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 ${
                  r.resolvedAt ? "opacity-50" : ""
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm">
                      <Link
                        href={`/subjects/${r.subject}/${r.topic}#practice`}
                        className="font-semibold hover:underline"
                      >
                        {topic?.topic.title ?? r.topic}
                      </Link>{" "}
                      <span className="opacity-55">{subject?.name ?? r.subject}</span>
                    </p>
                    <p className="mt-2 whitespace-pre-line text-sm font-medium">
                      {r.question}
                    </p>
                    {r.message && (
                      <p className="mt-2 border-l-2 border-black/15 pl-3 text-sm italic opacity-80 dark:border-white/25">
                        {r.message}
                      </p>
                    )}
                    <p className="mt-2 text-xs opacity-50">
                      {new Date(r.createdAt).toLocaleString("en-GB", {
                        timeZone: "Europe/London",
                      })}
                    </p>
                  </div>
                  <ResolveButton id={r.id} resolved={Boolean(r.resolvedAt)} />
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
