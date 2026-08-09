# Putting Revision Lab online

Written for doing this the first time. Follow it in order — each step depends on the one before.

---

## Before you start

**A parent or guardian needs to own the Vercel account.** Vercel requires account holders to be at least 16. This isn't a formality to work around: the account holder is agreeing to terms and is responsible for what the site does.

**The free plan is non-commercial only.** Vercel's Hobby plan is for personal and non-commercial projects. The moment the site makes money — ads, subscriptions, anything — it needs the Pro plan (about $20/month). Since we're staying non-commercial for now, the free plan is the right choice.

**Login won't work until Step 5.** Accounts are currently stored in a file on your laptop. Hosting gives every request a fresh, read-only filesystem, so registered accounts would silently disappear. The revision content works perfectly without login — that's why we can deploy first and add accounts after.

---

## Step 1 — Put the code on GitHub

GitHub stores your code online. Vercel reads from it, and it's your backup.

1. Create a free account at [github.com](https://github.com) (minimum age 13).
2. Make a new repository called `revision-lab`. **Leave it empty** — no README, no .gitignore. Adding files here causes a conflict later.
3. Decide public or private. Public means anyone can read your code (fine, and normal). Private is also fine and works with Vercel.
4. In your project folder, run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/revision-lab.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME`. You'll be asked to sign in.

**Check:** refresh the GitHub page. Your files should be there. Confirm there is **no `data` folder** — that holds your email, your password hash and the session signing key, and it's deliberately excluded by `.gitignore`. If you can see it on GitHub, stop and tell Claude.

---

## Step 2 — Deploy to Vercel

1. Your parent creates an account at [vercel.com](https://vercel.com) and signs in with GitHub.
2. Click **Add New → Project**.
3. Choose your `revision-lab` repository.
4. Vercel detects Next.js automatically. Change nothing.
5. Click **Deploy**.

Two or three minutes later the site is live at something like `revision-lab.vercel.app`.

**Every future push to GitHub redeploys automatically.** That's the part that feels like magic: `git push` and the live site updates itself.

---

## Step 3 — Tell the site its own address

1. In Vercel: **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_SITE_URL` set to your real address, e.g. `https://revision-lab.vercel.app` — no trailing slash.
3. Redeploy.

This matters because search engines and link previews need full addresses, not relative ones. Without it your sitemap points at the wrong domain.

---

## Step 4 — Get onto Google

**Your site is already public.** Anyone with the link can use it right now. This step is only about being *findable by search*, which is a separate thing — and deploying does not do it. You have to ask, and then wait.

### 4a — Add the property

1. Go to [Google Search Console](https://search.google.com/search-console) and sign in.
2. You're offered two kinds of property. Choose **URL prefix**, on the right — not "Domain". Domain verification needs you to change DNS records, and you can't do that on a `.vercel.app` address because Vercel owns that domain, not you.
3. Enter your full address including `https://`, with no trailing slash:
   `https://revision-lab-sigma.vercel.app`

### 4b — Verify with the HTML tag method

Search Console offers several proofs. Pick **HTML tag**.

It shows you something like:

```html
<meta name="google-site-verification" content="AbCdEf123456..." />
```

**You only need the part inside `content="..."`.** Copy that code — not the whole tag.

Then, in Vercel: **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `GOOGLE_SITE_VERIFICATION` | the code from inside `content="..."` |

Redeploy (**Deployments → ⋯ → Redeploy**), wait for it to go green, then click **Verify** in Search Console.

*Why an environment variable rather than pasting it into the code:* it means verifying takes no code change, and the same code will work unchanged if you ever move to a real domain. The code isn't secret — it ends up visible in the page source, which is precisely how Google checks it.

### 4c — Submit the sitemap

Once verified, in Search Console: **Sitemaps** in the left menu → enter `sitemap.xml` → **Submit**.

That hands Google all **57** pages at once: the homepage, 3 subject pages and 53 topic pages. Login, register and dashboard are deliberately excluded — a login form is no use to someone arriving from a search.

### 4d — Ask for the homepage to be looked at

**URL Inspection** at the top → paste your homepage address → **Request Indexing**. This nudges Google to come and look sooner rather than waiting to find you.

### Then wait, and expect less than you'd like

- **Days to weeks** before anything appears at all. That's normal and there is no way to hurry it.
- **Ranking for "GCSE revision" is not going to happen.** That term is fought over by BBC Bitesize, Save My Exams and Seneca, who have millions of visitors and years of history. A brand-new site does not outrank them, and no amount of technical work changes that.
- **What you can realistically win** are very specific searches — a phrase from one of your topics, or your site's own name.
- **Most of your first users will arrive from a link you sent them.** That's why the Open Graph tags are set up: when you paste the link into a group chat it shows a proper title, description and preview instead of a bare URL.

Track it in Search Console's **Performance** page. It stays empty for a while; that isn't a fault.

**Then wait.** New sites typically take days to weeks to appear, and ranking for competitive terms like "GCSE revision" takes months and a lot of visitors. Realistically the first people who use this will arrive because you sent them the link — which is exactly why Open Graph tags are set up, so the link looks good when pasted into a group chat.

Already done for you: page titles and descriptions, a sitemap covering every page, robots.txt, Open Graph previews, and structured data marking the topics as GCSE learning resources.

---

## Step 5 — Turn the Login button back on

**The code is already written.** The Login button, the login page and the register page have been there since the beginning; they hide themselves on the live site until there is somewhere real to store accounts. This step gives them that. No code changes, no `npm install` — just three settings.

### 5a — Make a free Supabase project

1. Sign up at [supabase.com](https://supabase.com). The free tier is far more than this needs.
2. Create a new project. Choose a region in Europe (London or Frankfurt) — it's closer, so it's faster.
3. It takes a couple of minutes to start up.

### 5b — Make the table

In Supabase, open **SQL Editor** and run exactly this:

```sql
create table if not exists public.users (
  id            uuid primary key,
  name          text        not null,
  email         text        not null unique,
  password_hash text        not null,
  created_at    timestamptz not null default now()
);

-- Row Level Security ON, with no policies added.
-- That combination blocks the public key completely, while the secret key the
-- server uses bypasses RLS by design. Net effect: the browser can never read
-- this table, and the server always can.
alter table public.users enable row level security;

-- ⚠️ DO NOT SKIP THESE TWO LINES.
-- Since April 2026, new tables in the `public` schema are NOT automatically
-- exposed to Supabase's API. Without them the table exists, shows up in the
-- Table Editor, and the API still answers:
--   PGRST205 "Could not find the table 'public.users' in the schema cache"
-- Every tutorial written before April says just to create the table.
grant usage on schema public to service_role;
grant all privileges on table public.users to service_role;

-- The API caches the list of tables rather than asking the database on every
-- request. This tells it to re-read now instead of in a few minutes.
notify pgrst, 'reload schema';
```

Only `service_role` is granted anything — that is the role the secret key acts as, and the only thing that touches this table. `anon` and `authenticated`, the public roles, get nothing, so even if Row Level Security were switched off by accident the browser still could not read it. Two locks rather than one.

The `unique` on `email` is doing real work too: it is what stops two people registering the same address at the same instant. Only the database can promise that.

**This block is safe to re-run.** `if not exists` and repeated grants change nothing the second time, so if something is broken, running it again is a reasonable first move.

### 5c — Copy two settings

In Supabase: **Settings → API Keys**.

- **Project URL** — looks like `https://abcdefgh.supabase.co`. It's in **Settings → API**, or in the **Connect** dialog at the top of the dashboard.
- **A secret key** — open the **API Keys** tab, click **Create new API Keys** if you don't have one, and copy the value under **Secret keys**. It starts `sb_secret_...`

If your project only shows older keys, use the **Legacy API Keys** tab and copy `service_role` (a long value starting `eyJ...`). **Either kind works** — the code detects which one you gave it and sends the right headers, because Supabase requires them to be sent differently. Prefer the new `sb_secret_` one: the legacy keys are being deprecated at the end of 2026.

Do **not** use the `anon` or **publishable** key. Those are the public ones, and they cannot write to this table.

⚠️ **A secret key can read and write every row in your database.** Never put it in the code, never paste it into a chat (Supabase's own docs say not to send it over chat apps), never commit it. It goes in Vercel and nowhere else. If you think it has leaked, create a new one and delete the old.

### 5d — Add three settings to Vercel

**Settings → Environment Variables**, add all three:

| Name | Value |
|---|---|
| `SUPABASE_URL` | your Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | your `service_role` key |
| `SESSION_SECRET` | a long random string — generate one below |

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then **redeploy** (Deployments → ⋯ → Redeploy). Environment variables are only read at build time, so a redeploy is what makes them take effect.

**All three are required.** With storage but no signing key, the site would try to generate one and save it to disk, the hosting filesystem is read-only, the write fails — and someone typing the *correct* password would get an error page. Setting only some of them leaves accounts off, which is the safe outcome, not a bug.

Notice none of the names start with `NEXT_PUBLIC_`. Anything with that prefix is baked into the JavaScript sent to the browser, where anyone can read it. These stay on the server.

### 5e — Check it worked

1. The **Login/Register** button is back in the header.
2. Register an account on the live site.
3. In Supabase: **Table Editor → users**. Your row is there — and the password is a long unreadable string, because it is a scrypt hash. Not even you can read it. That is correct.
4. Log out, log back in.
5. Wait a few minutes and log in again. This is the real test: with the old file storage the account would have vanished by now.

---

## Step 6 — Turn on login rate limiting

Without this, anyone can guess passwords as fast as the network allows. With it,
they get about 113 guesses a day instead of over a million.

1. Supabase → **SQL Editor** → **New query**.
2. Paste the whole of **`THROTTLE_SETUP.sql`** from the repo and hit **Run**.
3. That's it — no new environment variables, no new keys. It uses the Supabase
   settings you already added in step 5d.

**To check it works** (do this on the live site, not localhost):

1. Try to log in with your own email and a deliberately wrong password, six
   times in a row.
2. The sixth attempt should say *"Too many sign-in attempts. Please wait 1
   minute and try again."*
3. Supabase → **Table Editor → login_throttle** — there's a row for your email
   with `failures: 6` and a `locked_until` a minute in the future.
4. Wait a minute, log in with the CORRECT password. It works, and that row
   disappears, because a successful login clears the count.

To unlock yourself immediately instead of waiting, run in the SQL Editor:

```sql
delete from public.login_throttle where key = 'email:you@example.com';
```

If you skip this step nothing breaks — the site notices there's no table, logs
the error and lets people log in as before. That is deliberate (a database blip
should not lock everyone out), but it does mean a missing table fails quietly.
Check the table exists rather than assuming.

---

## Step 7 — Account deletion and the privacy page

The privacy page and account page work as soon as the code is deployed. The
**deletion** half needs one piece of database setup, and without it the site
makes a promise it does not keep.

1. Supabase → **SQL Editor** → **New query**.
2. Paste the whole of **`ACCOUNT_SETUP.sql`** and hit **Run**.
3. Check the scheduled job exists:

   ```sql
   select jobname, schedule, active from cron.job;
   ```

   You should see `revision-lab-nightly-cleanup`.

**Why step 3 is not optional.** Deleting an account marks it and erases it 30
days later. If that nightly job isn't running, nothing ever erases it — the row
sits in your database forever while the privacy page tells people it was
deleted. That is the sort of thing that turns a small project into a real
problem. Check the job is there.

To see who is currently counting down:

```sql
select email, deleted_at, deleted_at + interval '30 days' as erased_on
from public.users where deleted_at is not null;
```

If someone emails asking to be deleted immediately, they're entitled to that —
the queries at the bottom of `ACCOUNT_SETUP.sql` do it by hand.

---

## Before real students sign up

Once other people's data is involved, you have responsibilities. Worth talking through with a parent:

- ~~**A privacy policy**~~ — built, at `/privacy`. Keep it TRUE: if the site ever starts doing something new (analytics, emails, comments), that page changes in the same commit.
- ~~**A way to delete an account**~~ — built, on the account page. Needs step 7 to actually erase anything.
- **Passwords are already handled properly** — hashed with scrypt and salted, never stored as text. That part is genuinely done right.
- **Consider "Sign in with Google" instead.** Then you never store passwords at all, which removes most of the risk. More setup, much less responsibility.
- **Guessing passwords is now rate limited** (step 6) — but only if you ran the SQL.
- **Get the content checked.** Over 190,000 words of revision material written by an AI, aimed at students sitting real exams. A teacher should look over it before anyone revises from it seriously.

---

## If something breaks

- **Build fails on Vercel:** read the log — it names the file and line. Run `npm run build` locally to see the same error faster.
- **Site loads but looks unstyled:** usually a CSS build issue. Check the deployment log.
- **Login does nothing:** expected until Step 5 is done.
- **Changes aren't showing:** did you `git push`? Vercel only deploys what's on GitHub.
