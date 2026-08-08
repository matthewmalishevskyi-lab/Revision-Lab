// THE CONTENT REGISTRY.
//
// Every topic has the same four parts, deliberately:
//
//   summary     - one paragraph, what this topic actually is
//   keyFacts    - the raw stuff you have to know, grouped and stripped bare
//   flashcards  - definitions, for self-testing
//   examTips    - how to not lose marks you've already earned
//
// Keeping the SHAPE identical across all 38 topics is what makes this scale.
// The page is written once and works for everything; adding a topic is writing
// content, never writing code.
//
// Content lives in one file per subject. To add a subject, write its file next
// to this one and spread it into the record below — that's the only change
// needed here.

import { COMPUTER_SCIENCE } from "./computer-science";
import { ENGLISH } from "./english";
import { MATHS } from "./maths";

export type TopicContent = {
  summary: string;
  keyFacts: { heading: string; points: string[] }[];
  flashcards: { term: string; definition: string }[];
  examTips: { tip: string; detail: string }[];
};

// Keys are "subject-slug/topic-slug", matching the URLs exactly.
// The `...` spread merges each subject's topics into one lookup.
export const TOPIC_CONTENT: Record<string, TopicContent> = {
  ...COMPUTER_SCIENCE,
  ...MATHS,
  ...ENGLISH,
};

export function getTopicContent(
  subjectSlug: string,
  topicSlug: string,
): TopicContent | undefined {
  return TOPIC_CONTENT[`${subjectSlug}/${topicSlug}`];
}
