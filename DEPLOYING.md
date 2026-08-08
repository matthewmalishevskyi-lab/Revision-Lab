# Putting Revision Hub online

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
2. Make a new repository called `revision-site`. **Leave it empty** — no README, no .gitignore. Adding files here causes a conflict later.
3. Decide public or private. Public means anyone can read your code (fine, and normal). Private is also fine and works with Vercel.
4. In your project folder, run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/revision-site.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME`. You'll be asked to sign in.

**Check:** refresh the GitHub page. Your files should be there. Confirm there is **no `data` folder** — that holds your email, your password hash and the session signing key, and it's deliberately excluded by `.gitignore`. If you can see it on GitHub, stop and tell Claude.

---

## Step 2 — Deploy to Vercel

1. Your parent creates an account at [vercel.com](https://vercel.com) and signs in with GitHub.
2. Click **Add New → Project**.
3. Choose your `revision-site` repository.
4. Vercel detects Next.js automatically. Change nothing.
5. Click **Deploy**.

Two or three minutes later the site is live at something like `revision-site.vercel.app`.

**Every future push to GitHub redeploys automatically.** That's the part that feels like magic: `git push` and the live site updates itself.

---

## Step 3 — Tell the site its own address

1. In Vercel: **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_SITE_URL` set to your real address, e.g. `https://revision-site.vercel.app` — no trailing slash.
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

Already done for you: page titles and descriptions, a sitemap covering all 41 pages, robots.txt, Open Graph previews, and structured data marking the topics as GCSE learning resources.

---

## Step 5 — Add a real database (do this before turning login back on)

1. Sign up at [neon.com](https://neon.com) or [supabase.com](https://supabase.com). Both have free tiers that are ample for this.
2. Create a project and copy the **connection string** (it starts `postgresql://`).
3. In Vercel: **Settings → Environment Variables**, add `DATABASE_URL` with that value.
4. Also add `SESSION_SECRET` — a long random string. Generate one with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

5. Then ask Claude to migrate the storage layer. Only `app/lib/users.ts` needs rewriting — everything else was deliberately built to not care where the data lives.

**Never put these values in the code.** They go in Vercel's environment variables. Anything committed to GitHub is visible to anyone who can see the repository, and secrets leaked this way get found by automated scanners within minutes.

---

## Before real students sign up

Once other people's data is involved, you have responsibilities. Worth talking through with a parent:

- **A privacy policy** — what you collect, why, how long you keep it, how someone deletes their account.
- **A way to delete an account.** Not optional under UK data protection law.
- **Passwords are already handled properly** — hashed with scrypt and salted, never stored as text. That part is genuinely done right.
- **Consider "Sign in with Google" instead.** Then you never store passwords at all, which removes most of the risk. More setup, much less responsibility.
- **Get the content checked.** 34,000 words of revision material written by an AI, aimed at students sitting real exams. A teacher should look over it before anyone revises from it seriously.

---

## If something breaks

- **Build fails on Vercel:** read the log — it names the file and line. Run `npm run build` locally to see the same error faster.
- **Site loads but looks unstyled:** usually a CSS build issue. Check the deployment log.
- **Login does nothing:** expected until Step 5 is done.
- **Changes aren't showing:** did you `git push`? Vercel only deploys what's on GitHub.
