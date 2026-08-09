-- ============================================================================
-- PROGRESS TRACKING — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
-- ============================================================================
--
-- ONE TABLE, NOT FIVE.
--
-- The tempting design is a table per thing you want to show: one for scores,
-- one for flashcards, one for study time, one for streaks. It looks tidy right
-- up until you want a number nobody planned for, and then every new question
-- needs a new table and a migration.
--
-- Instead this stores EVENTS — one row for each thing that happened, as it
-- happened. "Matthew answered a question on binary-and-data correctly at
-- 19:42." Nothing is added up in advance.
--
-- Every figure on the progress page is then worked out FROM these events:
--   topics covered   = how many distinct topics appear
--   accuracy         = correct answers ÷ answered questions
--   this week        = seconds recorded in the last 7 days
--   the daily chart  = events grouped by day
--
-- The payoff is that a new statistic later needs no new table and no migration
-- — the raw history is already there. This is called an append-only event log,
-- and it is how most analytics is really built.
--
-- The cost, honestly: reading means adding things up every time, which is more
-- work than reading one stored total. That is the right trade at this size and
-- the wrong one at a million users, where these totals would be pre-computed.
-- ============================================================================

create table if not exists public.activity (
  id         uuid        primary key,
  user_id    uuid        not null,

  -- Which topic the event belongs to, stored as the same slugs the URLs use,
  -- so "computer-science" / "binary-and-data" joins straight back to the
  -- content without a lookup table.
  subject    text        not null,
  topic      text        not null,

  -- What happened. The CHECK constraint means a typo like 'flashcards' is
  -- rejected by the database rather than quietly creating a category that
  -- nothing ever counts.
  kind       text        not null check (kind in ('practice', 'flashcard', 'time')),

  -- Only meaningful for kind = 'practice'. NULL everywhere else, which is
  -- exactly what NULL is for: not zero, not false — "does not apply".
  correct    boolean,

  -- Only meaningful for kind = 'time'.
  seconds    integer,

  created_at timestamptz not null default now()
);

-- An index is a lookup structure the database keeps beside the table, so it can
-- jump straight to the rows it needs instead of reading every row and checking.
-- Every query here asks "this user's events, newest first", so that is what to
-- index. Without it, reading stays fast until it suddenly isn't.
create index if not exists activity_user_created
  on public.activity (user_id, created_at desc);

-- Same reasoning as the users table: RLS on, and only the server's key granted
-- anything. The browser can never read this table, whatever else goes wrong.
alter table public.activity enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.activity to service_role;

-- Tell the API to re-read the schema now rather than in a few minutes.
-- Skipping this is what caused PGRST205 when the users table was created.
notify pgrst, 'reload schema';
