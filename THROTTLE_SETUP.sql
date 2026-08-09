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
