// "How this connects" — what a topic builds on and what it leads to, from
// lib/connections.ts, with the words that join them so the link explains
// itself. A server component: plain links, no JavaScript.

import Link from "next/link";
import type { Connections, TopicLink } from "../lib/connections";
import { MASTERY_LABEL, type Mastery } from "../lib/mastery";
import { MASTERY_PILL } from "./WhereYouAre";

function Column({ heading, links, subject, mastery }: { heading: string; links: TopicLink[]; subject: string; mastery?: Map<string, Mastery> | null }) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">{heading}</h3>
      <ul className="mt-2 space-y-2">
        {links.map((l) => {
          const m = mastery?.get(`${subject}/${l.slug}`);
          return (
            <li key={l.slug}>
              <Link
                href={`/subjects/${subject}/${l.slug}`}
                className="flex min-h-11 flex-col justify-center rounded-xl border border-black/5 bg-white/70 px-4 py-2.5 hover:border-black/15 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25"
              >
                <span className="flex flex-wrap items-center gap-2 font-semibold">
                  {l.title}
                  {m && m.state !== "new" && (
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${MASTERY_PILL[m.state]}`}>
                      {m.state === "mastered" ? "✓ " : ""}{MASTERY_LABEL[m.state]}
                    </span>
                  )}
                </span>
                <span className="text-sm opacity-65">{l.year} · shares {l.shared.join(", ")}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function TopicConnections({ connections, subject, mastery }: { connections: Connections; subject: string; mastery?: Map<string, Mastery> | null }) {
  const { buildsOn, leadsTo } = connections;
  if (!buildsOn.length && !leadsTo.length) return null;
  return (
    <section id="connections" className="mt-10 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight">How this connects</h2>
      <p className="mt-1 opacity-60">
        Exam questions are often built on the joins between topics. Worked out from the words they share.
      </p>
      <div className={`mt-4 grid gap-6 ${buildsOn.length && leadsTo.length ? "sm:grid-cols-2" : ""}`}>
        {buildsOn.length > 0 && <Column heading="Builds on" links={buildsOn} subject={subject} mastery={mastery} />}
        {leadsTo.length > 0 && <Column heading="Leads to" links={leadsTo} subject={subject} mastery={mastery} />}
      </div>
    </section>
  );
}
