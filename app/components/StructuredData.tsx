// Structured data — machine-readable facts about a page.
//
// A search engine reading your topic page sees words and has to guess what
// they are. Structured data tells it outright: this is a learning resource,
// for GCSE students, about this subject, published by Revision Hub.
//
// The format is JSON-LD, agreed by Google, Bing and others at schema.org. It's
// invisible to visitors — it sits in a script tag that browsers don't render —
// and it's what lets search engines show richer results than a plain blue link.
//
// Why `dangerouslySetInnerHTML`: React normally escapes everything you insert,
// which is what protects you from injected scripts. JSON-LD has to be inserted
// raw or it becomes invalid. The name is deliberately alarming so nobody uses
// it thoughtlessly. It's safe HERE because every value comes from our own
// content files, not from anything a user typed. Never use it on user input.

type JsonLd = Record<string, unknown>;

export function StructuredData({ data }: { data: JsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function websiteSchema(siteUrl: string, siteName: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-GB",
  };
}

export function learningResourceSchema(input: {
  siteUrl: string;
  siteName: string;
  name: string;
  description: string;
  path: string;
  subject: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: input.name,
    description: input.description,
    url: `${input.siteUrl}${input.path}`,
    // These fields are what make it clear this is GCSE material specifically,
    // rather than general educational content.
    educationalLevel: "GCSE",
    learningResourceType: ["Revision notes", "Flashcards"],
    about: input.subject,
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: input.siteName,
      url: input.siteUrl,
    },
  };
}
