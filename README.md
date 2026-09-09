# sloangaon.com

A plain HTML/CSS/JS personal site — no build step, no framework, no monthly hosting cost.

## What's here

- `index.html`, `writing.html`, `videos.html`, `ai-ceo-playbook.html`, `speaking.html`, `about.html`, `contact.html` — the pages
- `essays/*.html` — one page per essay (title, date, excerpt are real; full essay text is a placeholder marked clearly on the page — drop your final draft into the `essay-placeholder` block when ready)
- `css/style.css`, `js/main.js`, `js/videos-data.js` — shared styles/behavior
- `assets/` — hero portrait and book cover, pulled from the current live site
- `vercel.json` — enables clean URLs (`/about` instead of `/about.html`)

## Content notes

- **Videos**: real, pulled from your existing YouTube playlist — links work today.
- **Essays**: titles, dates, and excerpts are real (from the current site); the full essay body isn't live on the current site either (checked — `/writing/...` returns 404 there too), so each essay page has a clearly marked placeholder for you to fill in.
- **Book / frameworks downloads**: the current site's "Download" buttons aren't wired to real files, so these now go to a pre-filled `mailto:` to you instead of a dead link. Swap in real PDFs later by dropping them in `assets/` and pointing the button at the file.
- **Forms** (contact, speaking inquiry, newsletter signup) submit via [FormSubmit](https://formsubmit.co) directly to `sloangaon@gmail.com` — free, no account needed. **The first submission on each form will trigger a one-time "confirm your email" message from FormSubmit** — click confirm or future submissions from that form won't reach you. Test all three forms once after deploying.

## Deploy to Vercel (free) — done

- Repo: https://github.com/Sloan-Personal/sloangaon-website (public — required for free-tier deploys from a GitHub Organization; nothing sensitive is in this repo)
- Vercel project: `datadotgov/sloangaon-website`, deployed and live at `sloangaon-website.vercel.app`
- Domains `sloangaon.com` and `www.sloangaon.com` are already added to the Vercel project.

## Point sloangaon.com at it (domain is on GoDaddy) — DNS still needed

Vercel needs these exact records added at GoDaddy (DNS Management for sloangaon.com):

| Type | Name | Value |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `22b073d3dd01dfac.vercel-dns-017.com.` |

Steps:
1. Log into GoDaddy → **My Products** → `sloangaon.com` → **DNS** → **DNS Management**.
2. If an existing `A` record on `@` or `CNAME` on `www` is already there (e.g. GoDaddy's default parked-page records), edit it to the value above rather than adding a duplicate.
3. Save. DNS propagation is usually minutes, sometimes up to ~48 hours.
4. Vercel's Domains page (Settings → Domains on the project) will flip from "Invalid Configuration" to a green check once it verifies, and issues free SSL automatically.

## Analytics (free)

In the Vercel dashboard → your project → **Analytics** tab → enable **Web Analytics** (free on the Hobby plan). Then add this one line before `</body>` on each page:

```html
<script defer src="/_vercel/insights/script.js"></script>
```

Vercel auto-serves that script once analytics is enabled — no signup elsewhere, no cost.

## Local preview

No build step needed. From this folder:

```bash
npx serve .
```

or

```bash
python -m http.server 8000
```

Then open the printed localhost URL.
