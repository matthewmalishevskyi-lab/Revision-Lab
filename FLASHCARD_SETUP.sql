-- ============================================================================
-- SPACED-REPETITION FLASHCARDS — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
-- ============================================================================
--
-- AN EVENT LOG, LIKE `activity` — NOT A "CURRENT STATE" TABLE.
--
-- The obvious design is one row per flashcard, updated in place: this card is
-- currently in "box 3", next due such-and-such a date. PROGRESS_SETUP.sql
-- explains why that shape was rejected for revision statistics generally, and
-- the same reasoning applies here: this table is written by the same
-- Server Action pattern as everything else on the site, and INSERT-only rows
-- are simpler to reason about and impossible to corrupt with a bad update.
--
-- So this stores one row per JUDGEMENT — "got it" or "still learning" — the
-- moment it happens, and nothing is added up in advance. `app/lib/
-- flashcard-review.ts` works out each card's current box and next due date by
-- folding over its own history, the same way `getProgress` already turns raw
-- `activity` rows into coverage and accuracy. The upside beyond consistency:
-- the full review history is sitting right there if it's ever wanted later
-- (spent no extra table doing it).
-- ============================================================================

create table if not exists public.flashcard_reviews (
  id         uuid        primary key,
  user_id    uuid        not null,

  -- Same slugs the URLs use, same reasoning as `activity`: joins straight
  -- back to the content without a lookup table.
  subject    text        not null,
  topic      text        not null,

  -- The flashcard's own TERM, verbatim — there's no numeric id for an
  -- individual flashcard anywhere else on the site, and the term is stable
  -- enough in practice to serve as one. If a term's wording is ever rewritten
  -- in the content files, that one card's history starts over rather than
  -- carrying across — an acceptable, rare edge case rather than a reason to
  -- invent a second identifier that has to be kept in sync by hand.
  card_key   text        not null,

  -- Self-reported: did you know it before you saw the definition?
  knew_it    boolean     not null,

  created_at timestamptz not null default now()
);

-- Every query here is "this user's review history, oldest first, so it can be
-- folded into current state" — so that's what to index.
create index if not exists flashcard_reviews_user_created
  on public.flashcard_reviews (user_id, created_at asc);

-- Same posture as every other table here: RLS on, nothing granted to the
-- public roles, only the server's secret key can touch it.
alter table public.flashcard_reviews enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.flashcard_reviews to service_role;

-- Tell the API to re-read the schema now rather than in a few minutes.
-- Skipping this is what caused PGRST205 ("could not find the table") when the
-- users table was first created — see PROGRESS_SETUP.sql.
notify pgrst, 'reload schema';

-- ── Useful while you're checking it works ───────────────────────────────────
--
--   select subject, topic, card_key, knew_it, created_at
--   from public.flashcard_reviews
--   order by created_at desc
--   limit 20;
