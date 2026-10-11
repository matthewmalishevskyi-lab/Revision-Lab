-- Saves for the alien game: five slots per account.
--
-- Matthew, 2026-10-11: "add saves, like manual saves, so you can actually save
-- stuff, like have your own saves." He chose the exact moment, kept on the
-- account (so a laptop save loads on a phone), five slots.
--
-- A TABLE OF ITS OWN, for the reason QUESTION_REVIEW_SETUP.sql gives: code
-- deploys the moment it is pushed and this runs whenever somebody gets round
-- to it. Until it is run, pressing Save says "Saves aren't switched on yet",
-- and the game, progress and every other page carry on exactly as before.
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project. Safe to run more than once.

create table if not exists public.game_saves (
  -- ⚠️ on delete cascade: when an account is deleted (ACCOUNT_SETUP.sql's
  -- nightly job), its saves go with it, as the privacy page promises.
  user_id uuid not null references public.users(id) on delete cascade,

  -- 1 to 5. The primary key below is what makes "save to slot 2" REPLACE
  -- slot 2 rather than add a sixth row, whatever the app sends.
  slot smallint not null check (slot between 1 and 5),

  name text not null check (char_length(name) between 1 and 40),

  -- Copied out of `state` when it is written, so the menu can list five
  -- slots without fetching five whole game states.
  level smallint not null check (level between 0 and 63),
  health smallint not null check (health between 0 and 1000),

  -- Which subject, topics and mascot the game was set up with, so loading
  -- brings the same questions back.
  setup jsonb not null,

  -- The exact moment. Checked field by field by app/lib/gameSave.ts before it
  -- is written and again when it is read; capped at 100 KB here as well, so
  -- the database itself refuses anything bigger whatever sends it.
  state jsonb not null check (octet_length(state::text) <= 100000),

  updated_at timestamptz not null default now(),

  primary key (user_id, slot)
);

-- RLS on with no policies, like every other table here: only the server's
-- service_role key can touch it, and that key bypasses RLS entirely.
alter table public.game_saves enable row level security;

-- ⚠️ Since April 2026 a new table in `public` is not exposed to the API until
-- it is granted — see DEPLOYING.md step 5b and the PGRST205 afternoon.
grant usage on schema public to service_role;
grant all privileges on table public.game_saves to service_role;
revoke all on table public.game_saves from anon, authenticated;

notify pgrst, 'reload schema';
