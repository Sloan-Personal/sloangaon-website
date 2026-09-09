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

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo (or drag-and-drop the folder into the Vercel dashboard at vercel.com/new — GitHub isn't required).
2. In [vercel.com](https://vercel.com), "Add New Project" → import the repo (or the folder). No framework preset needed — Vercel will detect it as a static site. Click Deploy.
3. You'll get a `*.vercel.app` URL immediately.

## Point sloangaon.com at it (domain is on GoDaddy)

1. In the Vercel project → **Settings → Domains** → add `sloangaon.com` (and `www.sloangaon.com`).
2. Vercel will show you DNS records to add. Typically:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
   (Vercel shows the exact current values on the Domains screen — use those if they differ.)
3. In GoDaddy → your domain → **DNS Management**, add/edit those records to match.
4. DNS propagation is usually minutes, sometimes up to ~48 hours. Vercel's dashboard shows a green check once it's verified and SSL is issued automatically (free).

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
