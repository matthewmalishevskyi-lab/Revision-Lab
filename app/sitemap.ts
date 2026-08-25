import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { SUBJECTS, SUBJECT_GROUPS } from "./lib/subjects";

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

  // Login, register, dashboard and forgot-password are deliberately absent —
  // they're marked noindex, so listing them here would contradict that.
  return [home, ...subjectPages, ...groupPages, ...topicPages];
}
