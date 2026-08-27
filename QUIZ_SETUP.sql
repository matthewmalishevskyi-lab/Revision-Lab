-- ============================================================================
-- LIVE HEAD-TO-HEAD QUIZ — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
-- ============================================================================
--
-- THREE TABLES, matching the three genuinely different kinds of fact:
-- `quiz_sessions` is one row per game — who's hosting it, which questions,
-- what stage it's at right now. `quiz_players` is one row per person who
-- joined one. `quiz_answers` is one row per question someone actually
-- answered — an event log, the same "one row per thing that happened"
-- pattern PROGRESS_SETUP.sql's `activity` table already uses, and for the
-- same reason: it's what lets each player's score be COMPUTED (sum their
-- points) rather than tracked as a running total that could drift out of
-- sync with what actually happened.

create table if not exists public.quiz_sessions (
  -- A short, spoken-aloud-friendly room code — like Kahoot's own game PIN —
  -- rather than a uuid nobody could ever read out or type from memory.
  -- Generated as a random 6-digit number in lib/quiz.ts, checked against
  -- this table for a collision before use.
  code               text        primary key,

  host_user_id       uuid        not null,

  subject_slug       text        not null,

  -- Denormalised so the host's and players' screens never need a second
  -- lookup just to show what this quiz is even about — the same reasoning
  -- clans.ts's `withCount` avoids extra round trips for information that's
  -- cheap to just store once, alongside the row that needs it.
  topic_slugs        jsonb       not null,
  topic_titles       jsonb       not null,

  -- The FULLY RESOLVED question set for this one game, decided once at
  -- creation time and never recomputed: each question's text, its choices
  -- already shuffled into the order every screen will show them in, and
  -- which one is correct. Storing the finished result rather than a seed
  -- to reconstruct it later means there's no risk of the host's screen and
  -- a player's screen ever disagreeing about what order the buttons are
  -- in — see lib/quiz.ts's own comment on why that matters.
  questions          jsonb       not null,

  -- 'lobby' (waiting for players) → 'question' (live, clock running) →
  -- 'reveal' (correct answer shown, host-paced) → back to 'question' for
  -- the next one, or 'finished' once the last question's been revealed.
  status             text        not null default 'lobby',

  -- -1 while still in the lobby; the index into `questions` once started.
  current_index      integer     not null default -1,

  -- When the CURRENT phase began — a player's on-screen countdown is
  -- computed from this plus `question_seconds`, not from a server push,
  -- so nobody's clock depends on how often their device happens to poll.
  phase_started_at   timestamptz,

  question_seconds   integer     not null default 20,

  created_at         timestamptz not null default now()
);

create table if not exists public.quiz_players (
  id            uuid        primary key,
  session_code  text        not null references public.quiz_sessions(code),

  -- Null for a guest — see lib/quiz.ts's join logic. Kahoot-style: anyone
  -- with the room code can play with just a name typed in, no account
  -- required. A LOGGED-IN player's user_id is recorded here specifically
  -- so their own device can feed the result into their real progress/XP
  -- afterwards — never something the host or anyone else's device does on
  -- their behalf, since a Server Action can only ever record activity
  -- against whoever's OWN session cookie is making the call.
  user_id       uuid,

  display_name  text        not null,
  joined_at     timestamptz not null default now(),

  -- A logged-in user can't join the same game twice — Postgres treats every
  -- NULL as distinct from every other NULL, so this constraint quietly does
  -- NOT stop many different guests (all user_id = null) joining the same
  -- session, which is exactly the behaviour wanted here without any extra
  -- code to special-case it.
  unique (session_code, user_id)
);

create index if not exists quiz_players_session
  on public.quiz_players (session_code);

create table if not exists public.quiz_answers (
  session_code    text        not null references public.quiz_sessions(code),
  player_id       uuid        not null references public.quiz_players(id),
  question_index  integer     not null,

  -- Which of the (already-shuffled) choices they tapped — 0-based.
  choice_index    integer     not null,
  correct         boolean     not null,
  points          integer     not null,

  answered_at     timestamptz not null default now(),

  -- Lets the DATABASE stop a double-submit (a slow network retry, a
  -- doubled tap) rather than trusting application code to check first —
  -- the exact same "let a constraint make the promise, not a lookup
  -- beforehand" reasoning as clan_members' own unique(user_id).
  primary key (session_code, player_id, question_index)
);

create index if not exists quiz_answers_session_question
  on public.quiz_answers (session_code, question_index);

alter table public.quiz_sessions enable row level security;
alter table public.quiz_players enable row level security;
alter table public.quiz_answers enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.quiz_sessions to service_role;
grant all privileges on table public.quiz_players to service_role;
grant all privileges on table public.quiz_answers to service_role;

notify pgrst, 'reload schema';

-- ─── Known limitation, not fixed here because it wasn't asked for ─────────
--
-- Nothing ever deletes an old quiz session. At the scale a personal
-- revision site actually gets played at, that's genuinely fine for now —
-- but if this ever gets heavy use, a scheduled job (the same pg_cron
-- pattern ACCOUNT_SETUP.sql already uses for the 30-day deletion grace
-- period) deleting finished sessions older than a day or two would be the
-- next thing to add, in that same style.
