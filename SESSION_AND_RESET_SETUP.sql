-- ============================================================================
-- PASSWORD RESET, AND SIGNING OUT YOUR OTHER DEVICES
-- Run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
--
-- WHAT HAPPENS IF YOU DON'T RUN IT: the site keeps working exactly as it does
-- today. `users.session_version` reads back as empty, which the code treats as
-- version 1 for everybody (see fromRow in app/lib/users.ts), so nobody is
-- logged out and nothing breaks — sign-out-everywhere just doesn't do anything
-- yet. Asking for a password reset will fail and say so. Both start working the
-- moment this runs. That is deliberate: a half-migrated database should degrade
-- quietly, not lock everyone out of their accounts.
-- ============================================================================


-- ── 1. The number that ends your other sessions ─────────────────────────────
--
-- Sessions on this site are signed cookies, not rows in a table (see
-- app/lib/session.ts for why, at length). That is fast and needs no storage,
-- and it has exactly one sharp edge: there is no list of who is logged in, so
-- there is nothing to delete when you want to end a session early.
--
-- This one integer buys that back. Every cookie carries the version it was
-- issued at; every request compares it against the number in this column.
-- Change your password and the number goes up by one, and every cookie that
-- came before it — on every device, everywhere — stops working immediately.
--
-- `default 1` and `not null` so existing accounts get a real value rather than
-- a null the application has to keep guessing about.
alter table public.users
  add column if not exists session_version integer not null default 1;


-- ── 2. Password reset tokens ────────────────────────────────────────────────
--
-- ⚠️ THE TOKEN ITSELF IS NOT STORED HERE — ONLY A HASH OF IT.
--
-- This is the same reasoning as never storing a password, applied to a thing
-- that is, for the next fifteen minutes, exactly as powerful as one: anybody
-- holding a live reset token can take over the account it belongs to. If these
-- were stored in the clear, then one leaked backup, one over-broad SELECT, one
-- screenshot of this table, would be enough to walk into every account that had
-- a reset in flight. Hashing means the row is worthless to anyone reading it:
-- the only copy of the real token is the one in the email, and the server
-- recognises it by hashing what it is given and looking for the match.
--
-- SHA-256 rather than the slow scrypt used for passwords, and that difference
-- is deliberate rather than a shortcut. Slow hashing exists to make GUESSING
-- expensive, and it is needed for passwords because people choose short,
-- memorable, guessable ones. This token is 32 random bytes from the operating
-- system's own generator — there is nothing to guess and no dictionary to try,
-- so the only thing a slow hash would buy is a slow page.
create table if not exists public.password_resets (
  -- The hash IS the identity: looking a token up is the only thing this table
  -- is ever asked to do, so there is no point in a separate id column.
  token_hash text        primary key,

  user_id    uuid        not null,

  created_at timestamptz not null default now(),

  -- Short on purpose. A reset link is a key to somebody's account sitting in
  -- an inbox — which is exactly the thing that gets left open on a school
  -- computer. Long enough to walk to another room and check your email;
  -- not long enough to still work tomorrow.
  expires_at timestamptz not null,

  -- Set the moment a token is spent. A reset link works ONCE — the second use
  -- is refused, whoever is holding it. Without this, a link forwarded, cached
  -- by a mail scanner, or left in a browser history stays a working key to the
  -- account for as long as it hasn't expired.
  used_at    timestamptz
);

-- The one lookup this table serves, plus the cleanup below.
create index if not exists password_resets_user
  on public.password_resets (user_id);
create index if not exists password_resets_expires
  on public.password_resets (expires_at);

-- Same posture as every other table here: RLS on, nothing granted to the
-- public roles, only the server's secret key can touch it.
alter table public.password_resets enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.password_resets to service_role;


-- ── 3. Taking the spent ones out again ──────────────────────────────────────
--
-- Not housekeeping for tidiness' sake. Every row here is a record that a
-- particular person asked to get back into their account on a particular day,
-- and keeping those forever means keeping a log of everyone who ever forgot
-- their password. There is no reason to hold that, so it goes: an hour after a
-- token expires it has no use to anybody, and it is deleted.
--
-- This uses pg_cron, the same scheduler ACCOUNT_SETUP.sql uses to finish
-- account deletions. If that extension is not enabled, this block is skipped
-- with a notice rather than failing the whole script — the reset feature works
-- fine without it, the old rows simply pile up.
do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.schedule(
      'purge-expired-password-resets',
      '30 3 * * *',
      $job$ delete from public.password_resets
            where expires_at < now() - interval '1 hour' $job$
    );
    raise notice 'Scheduled nightly cleanup of expired reset tokens.';
  else
    raise notice 'pg_cron not enabled — expired reset tokens will not be purged automatically. Harmless; see ACCOUNT_SETUP.sql for how to enable it.';
  end if;
end
$$;


-- Tell the API to re-read the schema now rather than in a few minutes.
-- Skipping this is what caused PGRST205 ("could not find the table") when the
-- users table was first created, and again when the quiz tables were.
notify pgrst, 'reload schema';


-- ── Useful while you're checking it worked ──────────────────────────────────
--
--   -- Did the column arrive?
--   select id, email, session_version from public.users limit 5;
--
--   -- Did the table arrive? (Empty is the correct answer until someone
--   -- actually asks for a reset.)
--   select user_id, created_at, expires_at, used_at
--   from public.password_resets
--   order by created_at desc
--   limit 10;
