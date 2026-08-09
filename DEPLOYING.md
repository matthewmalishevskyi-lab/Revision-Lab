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

Deploying does **not** put you in Google. You have to ask, and then wait.

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your site as a property and verify ownership (the DNS or HTML file method — Search Console walks you through it).
3. Submit your sitemap: `https://your-site.vercel.app/sitemap.xml`.
4. Use **URL Inspection → Request Indexing** on your homepage.

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
create table users (
  id            uuid primary key,
  name          text        not null,
  email         text        not null unique,
  password_hash text        not null,
  created_at    timestamptz not null default now()
);

-- Row Level Security ON, with no policies added.
-- That combination blocks the public key completely, while the service role
-- key the server uses bypasses RLS by design. Net effect: the browser can
-- never read this table, and the server always can.
alter table users enable row level security;
```

The `unique` on `email` is doing real work: it is what stops two people registering the same address at the same instant. Only the database can promise that.

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

## Before real students sign up

Once other people's data is involved, you have responsibilities. Worth talking through with a parent:

- **A privacy policy** — what you collect, why, how long you keep it, how someone deletes their account.
- **A way to delete an account.** Not optional under UK data protection law.
- **Passwords are already handled properly** — hashed with scrypt and salted, never stored as text. That part is genuinely done right.
- **Consider "Sign in with Google" instead.** Then you never store passwords at all, which removes most of the risk. More setup, much less responsibility.
- **Get the content checked.** Over 100,000 words of revision material written by an AI, aimed at students sitting real exams. A teacher should look over it before anyone revises from it seriously.

---

## If something breaks

- **Build fails on Vercel:** read the log — it names the file and line. Run `npm run build` locally to see the same error faster.
- **Site loads but looks unstyled:** usually a CSS build issue. Check the deployment log.
- **Login does nothing:** expected until Step 5 is done.
- **Changes aren't showing:** did you `git push`? Vercel only deploys what's on GitHub.
