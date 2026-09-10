import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { SUBJECTS, SUBJECT_GROUPS } from "./lib/subjects";
import { subjectsWithDiagrams } from "./lib/teacher-tools";

// A sitemap is a list of every page on the site, handed straight to search
// engines. Without one, Google finds pages only by following links, which is
// slower and can miss things entirely.
//
// This file IS /sitemap.xml — Next turns it into the XML format automatically.
// And because it's built from the same SUBJECTS data as the pages themselves,
// it can never fall out of date. A hand-written sitemap is out of date the
// moment someone adds a topic and forgets to update it.
//
// priority is a hint about relative importance within your own site, from 0 to
// 1. changeFrequency hints at how often it's worth re-checking. Search engines
// treat both as suggestions rather than instructions.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const subjectPages = SUBJECTS.map((subject) => ({
    url: `${SITE_URL}/subjects/${subject.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // The group "chooser" pages (app/subjects/science, app/subjects/languages)
  // — found missing in the 2026-08-25 deep bug hunt. This file's own comment
  // above says the sitemap "can never fall out of date" because it's built
  // from the same data as the pages, but that was only ever true of SUBJECTS;
  // SUBJECT_GROUPS was added later (see subjects.ts) as a genuinely separate,
  // real, indexable route each, and this file was never updated to know about
  // it. Same priority as an ordinary subject page — a group page is exactly
  // that from a visitor's point of view, just one that leads to three more.
  const groupPages = SUBJECT_GROUPS.map((group) => ({
    url: `${SITE_URL}/subjects/${group.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // flatMap because each subject produces many topic pages rather than one.
  const topicPages = SUBJECTS.flatMap((subject) =>
    subject.years.flatMap((group) =>
      group.topics.map((topic) => ({
        url: `${SITE_URL}/subjects/${subject.slug}/${topic.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ),
  );

  // ── TEACHER TOOLS ───────────────────────────────────────────────────────────
  // These pages never needed an account (see teacher-tools/page.tsx's comment),
  // but for a long while the only link to them was a card on /dashboard, which
  // redirects to /login. So a crawler following links from the homepage could
  // never reach them, and a teacher searching for "GCSE osmosis diagram" would
  // never be shown them. Public but unfindable is the same as private.
  //
  // Built from the same derived index the pages themselves use, so a new topic
  // with a diagram appears here on its own — the guarantee the rest of this
  // file makes.
  const teacherToolPages = [
    {
      url: `${SITE_URL}/teacher-tools`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/teacher-tools/diagrams`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...subjectsWithDiagrams().flatMap((subject) => [
      {
        url: `${SITE_URL}/teacher-tools/diagrams/${subject.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      },
      ...subject.topics.map((topic) => ({
        url: `${SITE_URL}/teacher-tools/diagrams/${subject.slug}/${topic.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ]),
  ];

  // Login, register, dashboard and forgot-password are deliberately absent —
  // they're marked noindex, so listing them here would contradict that.
  return [
    home,
    ...subjectPages,
    ...groupPages,
    ...topicPages,
    ...teacherToolPages,
  ];
}
