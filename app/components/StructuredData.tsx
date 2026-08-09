// Structured data — machine-readable facts about a page.
//
// A search engine reading your topic page sees words and has to guess what
// they are. Structured data tells it outright: this is a learning resource,
// for GCSE students, about this subject, published by Revision Lab.
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

// Escaping `<` is the one piece of care this needs, and it is worth
// understanding because the reasoning is not obvious.
//
// A browser reading <script> looks for the literal characters "</script>" to
// know where the tag ends. It does that BEFORE any JSON is parsed. So if a
// topic summary ever contained the text "</script>", the browser would end the
// tag early and treat everything after it as page HTML — which is how a
// harmless-looking piece of content becomes a way to inject a real script.
//
// Checked today: no topic contains "</script>", "<script" or "<!--", so this is
// hardening rather than a live hole. But the site is a COMPUTER SCIENCE revision
// site. A topic about HTML is an entirely plausible thing to add next, and it
// would contain exactly those characters. Escaping the "<" costs one line and
// removes the possibility permanently. JSON treats < as identical to "<",
// so search engines read exactly the same data.
function toSafeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData({ data }: { data: JsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toSafeJsonLd(data) }}
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
