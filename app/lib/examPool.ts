// Shared by every page that builds a mixed-topic, timed question set from a
// whole subject — originally just the quick "{Subject} test"
// (subjects/[subject]/exam), now also the longer "past paper" mode
// (subjects/[subject]/past-paper). Pulled out into its own file rather than
// left duplicated across both pages the moment a second one needed it —
// two copies of "how do we build the pool" is exactly the kind of thing
// that quietly drifts apart, the same reasoning `normalise()` and
// `shuffle()` were already shared rather than copied.

import { getTopicContent } from "./content";
import type { ExamQuestion } from "../components/MockExam";
import type { YearGroup } from "./subjects";

// Every practice question across every WRITTEN topic in the given year
// groups, each tagged with where it came from. A topic with no content yet
// ("content coming soon") simply contributes nothing — not an error, the
// same way an empty optional section on a topic page isn't an error.
export function collectQuestionPool(
  subjectSlug: string,
  years: Pick<YearGroup, "topics">[],
): ExamQuestion[] {
  return years.flatMap((group) =>
    group.topics.flatMap((topic) => {
      const content = getTopicContent(subjectSlug, topic.slug);
      return (content?.practice ?? []).map((q) => ({
        ...q,
        topicSlug: topic.slug,
        topicTitle: topic.title,
      }));
    }),
  );
}

// A query-string value comes back as `undefined` (missing), a single string
// (one value), or an array of strings (the same key repeated) — Next.js
// decides which of those three shapes based on how many times the key
// appeared in the URL. Folding all three into one plain array means the
// rest of a page can just check "is this value present" the same way
// regardless of how many times the key showed up. Used both for `years`
// (naturally repeatable — one tick per box) and for `configured` (normally
// appears once, but nothing stops a hand-edited or bookmarked URL from
// repeating it too, and this way that can't silently break the "has the
// form been submitted" check).
export function normalizeQueryValue(raw: string | string[] | undefined): string[] {
  if (raw === undefined) return [];
  return Array.isArray(raw) ? raw : [raw];
}
