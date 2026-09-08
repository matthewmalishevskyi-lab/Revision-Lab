-- ═══════════════════════════════════════════════════════════════════════════
--  RUN THIS ONCE IN SUPABASE  →  SQL Editor  →  New query  →  paste  →  Run
-- ═══════════════════════════════════════════════════════════════════════════
--
--  WHAT THIS IS
--  Three setup scripts joined into one, plus one repair, so it is a single
--  paste instead of four. It creates the database tables the live site needs
--  but does not have yet:
--
--    quiz_sessions / quiz_players / quiz_answers  → the live head-to-head
--        quiz. Without these, hosting a quiz shows a server error. This is
--        why the quiz has never worked on the live site.
--    flashcard_reviews                            → spaced repetition. Without
--        it, judging a card as Got it / Still learning silently does nothing.
--    login_throttle                               → the brute-force limiter on
--        login. Without it, the limiter fails open and allows every attempt.
--
--  IS IT SAFE TO RUN?
--  Yes, and it is safe to run more than once. Every statement is written as
--  "create ... if not exists", "add column if not exists" or "create or
--  replace", so anything that already exists is left exactly as it is (Part 4
--  redefines one function, which holds no data). Nothing is dropped, and no
--  existing data is touched or deleted.
--
--  WHAT SUCCESS LOOKS LIKE
--  Supabase will say "Success. No rows returned." Then go to Table Editor and
--  you should see nine tables: activity, clan_members, clans, users (already
--  there), plus flashcard_reviews, login_throttle, quiz_answers, quiz_players
--  and quiz_sessions.
--
--  The very last line tells Supabase's API layer to re-read the schema, so
--  the new tables are visible to the site immediately rather than after a
--  wait. That is the step whose absence produced the PGRST205 errors.
-- ═══════════════════════════════════════════════════════════════════════════




-- ───────────────────────────────────────────────────────────────────────
--  PART 1 of 4 — THE LIVE QUIZ (quiz_sessions, quiz_players, quiz_answers)
-- ───────────────────────────────────────────────────────────────────────

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


-- ───────────────────────────────────────────────────────────────────────
--  PART 2 of 4 — SPACED REPETITION (flashcard_reviews)
-- ───────────────────────────────────────────────────────────────────────

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


-- ───────────────────────────────────────────────────────────────────────
--  PART 3 of 4 — LOGIN RATE LIMITING (login_throttle)
-- ───────────────────────────────────────────────────────────────────────

-- ============================================================================
-- LOGIN RATE LIMITING — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
-- ============================================================================
--
-- WHY THIS TABLE LOOKS DIFFERENT TO `activity`.
--
-- The progress table is an append-only event log: one row per thing that
-- happened, nothing ever updated. That is the right shape there, because we
-- want the full history and the rows only arrive as fast as a person can
-- revise.
--
-- Doing the same here would be a mistake, and it's worth seeing why. Failed
-- logins do NOT arrive as fast as a person can type — an attacker can send
-- thousands a minute. One row per attempt would mean that anyone who wanted to
-- could fill this database up simply by guessing passwords badly, which turns a
-- security feature into a way of attacking the site. The defence must not be
-- more expensive to run than the attack is to launch.
--
-- So this table keeps a COUNTER instead: one row per email address or IP
-- address, updated in place. A million guesses against one account write to the
-- same single row a million times, and the table does not grow at all.
-- ============================================================================

create table if not exists public.login_throttle (
  -- Either "email:someone@example.com", "ip:1.2.3.4" or "register:1.2.3.4".
  -- One text column with a prefix, rather than separate tables per kind,
  -- because every kind needs exactly the same three numbers.
  key            text        primary key,

  -- How many failures in the current run.
  failures       integer     not null default 0,

  -- When the most recent failure happened. The count is forgotten after an hour
  -- of QUIET, measured from here — deliberately NOT from when the run started.
  -- Measuring from the start of the run gives an attacker a fresh allowance
  -- every hour; the simulation in scripts/check-throttle.mjs measured that as
  -- four times more guesses getting through. See the note in app/lib/throttle.ts.
  last_failure_at timestamptz not null default now(),

  -- When the lockout ends, or null if there isn't one.
  locked_until   timestamptz
);

-- ── Permissions ─────────────────────────────────────────────────────────────
--
-- Since April 2026 a newly created table in the public schema does NOT
-- automatically get these grants, so a fresh project fails with PGRST205
-- ("could not find the table in the schema cache") until you run them. This
-- caught us out once already on the `activity` table.
grant usage on schema public to service_role;
grant all on public.login_throttle to service_role;

-- ── Row Level Security ──────────────────────────────────────────────────────
--
-- RLS on, and NO policy allowing anyone in. That combination means: nobody can
-- read or write this table through the public API at all. The site reaches it
-- with the service_role key, which bypasses RLS by design and lives only in
-- Vercel's environment variables.
--
-- Locked shut by default is the right posture for a table that records which
-- email addresses somebody has been trying to break into.
alter table public.login_throttle enable row level security;

-- ── Housekeeping ────────────────────────────────────────────────────────────
--
-- Rows go stale: an IP that failed twice a year ago is of no interest. Nothing
-- deletes them automatically, so run this occasionally, or set it up as a
-- Supabase cron job. It is not urgent — the rows are tiny and the table cannot
-- grow faster than one row per distinct email or IP.
--
--   delete from public.login_throttle
--   where last_failure_at < now() - interval '7 days'
--     and (locked_until is null or locked_until < now());

-- ── Useful while you're checking it works ───────────────────────────────────
--
--   select * from public.login_throttle order by last_failure_at desc;
--
-- To let yourself back in immediately after testing a lockout:
--
--   delete from public.login_throttle where key = 'email:you@example.com';


-- ═══════════════════════════════════════════════════════════════════════════
--  PART 4 of 4 — MAKING THE RATE LIMITER COUNT PROPERLY
-- ═══════════════════════════════════════════════════════════════════════════
--
--  THE BUG THIS FIXES
--
--  Recording a failed login used to be three separate trips from the site to
--  the database: read the counter, add one, write it back. That is correct
--  only if the attempts arrive one at a time.
--
--  They do not have to. A browser can open dozens of connections at once, and
--  fifty simultaneous guesses all READ "failures: 0" before any of them has
--  written "1" — so all fifty write 1, and the counter that is supposed to
--  say fifty says one. The lockout tiers never trigger. The site's own
--  simulation in scripts/check-security.mjs did not catch this because it
--  models a patient attacker guessing in sequence, which is the polite kind.
--
--  A database is the only place this can be fixed. `insert ... on conflict do
--  update` is ONE statement: Postgres takes a lock on that row and every other
--  caller waits behind it, so fifty simultaneous calls become fifty increments
--  rather than fifty ones. The tiers are passed in from the application so the
--  numbers still live in throttle.ts where they can be read and reasoned about
--  — this function decides nothing about policy, it only counts without
--  losing count.
--
--  SAFE TO RUN MORE THAN ONCE: `create or replace` simply redefines it.
-- ═══════════════════════════════════════════════════════════════════════════

create or replace function public.bump_login_throttle(
  p_key           text,
  p_quiet_seconds integer,
  -- [{"at": 6, "lock": 60}, ...] — at this many failures, lock for this many
  -- seconds. Straight from EMAIL_TIERS / IP_TIERS / REGISTER_TIERS.
  p_tiers         jsonb
)
returns public.login_throttle
language plpgsql
as $$
declare
  row_after   public.login_throttle;
  lock_seconds integer;
begin
  -- One statement, so one row lock. Everything racing for this key queues here.
  insert into public.login_throttle as t (key, failures, last_failure_at, locked_until)
  values (p_key, 1, now(), null)
  on conflict (key) do update
    set failures = case
          -- A quiet hour forgets the run — measured from the last failure,
          -- not from the start of the run. Same rule as the TypeScript had.
          when t.last_failure_at < now() - make_interval(secs => p_quiet_seconds)
            then 1
          else t.failures + 1
        end,
        last_failure_at = now()
  returning * into row_after;

  select coalesce(max((tier->>'lock')::integer), 0)
    into lock_seconds
    from jsonb_array_elements(p_tiers) as tier
   where row_after.failures >= (tier->>'at')::integer;

  -- A lockout may only ever be extended, never shortened, so a later failure
  -- inside a long lock cannot accidentally hand back an early release.
  if lock_seconds > 0 then
    update public.login_throttle
       set locked_until = greatest(
             coalesce(locked_until, now()),
             now() + make_interval(secs => lock_seconds)
           )
     where key = p_key
    returning * into row_after;
  end if;

  return row_after;
end;
$$;

-- ── Permissions: the site only ──────────────────────────────────────────────
--
-- Postgres grants EXECUTE on a new function to PUBLIC by default, and Supabase
-- exposes every function in the public schema at /rest/v1/rpc/<name>. Left
-- alone, that would mean anyone holding the publishable key — which is, by
-- design, in every visitor's browser — could call this and drive any email
-- address's counter up until the account locked out. A rate limiter that
-- strangers can trigger against you is a weapon pointed the wrong way.
--
-- So: nobody but the service role, which lives only in Vercel's environment.
revoke execute on function public.bump_login_throttle(text, integer, jsonb) from public;
revoke execute on function public.bump_login_throttle(text, integer, jsonb) from anon, authenticated;
grant  execute on function public.bump_login_throttle(text, integer, jsonb) to service_role;


-- ═══════════════════════════════════════════════════════════════════════════
--  FINALLY: tell the API layer to re-read the schema.
--  Without this, Supabase can carry on reporting "table not found in schema
--  cache" (error code PGRST205) even though the tables now exist.
-- ═══════════════════════════════════════════════════════════════════════════
notify pgrst, 'reload schema';
