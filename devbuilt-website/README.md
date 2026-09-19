# DevBuilt — Website

Static site (plain HTML/CSS/JS, no build step) for DevBuilt Digital Solution.

## Run locally
Just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploy to Vercel
1. Push this folder to a GitHub repo (or run `vercel` directly from this folder with the Vercel CLI).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (no build command needed — it's static).
4. Deploy.

Or from the CLI, inside this folder:
```
npm i -g vercel
vercel
```

## Before you launch — replace these placeholders
- `hello@devbuilt.com` and the phone number in the Contact section (`index.html`) — your real contact details.
- The contact form currently opens the visitor's email client (mailto). To collect submissions directly, wire it to a form backend (e.g. Formspree, Resend, or your own API route) in `script.js`.
- `assets/` contains PNGs generated from your uploaded logo PDF for the nav icon and favicons. Swap in higher-res brand assets if you have them.

## Structure
```
index.html     Page markup and copy
styles.css     Design system + layout (navy/blue theme from your logo)
script.js      Nav behavior, scroll reveal, mailto contact form
assets/        Logo-derived icon + favicons
vercel.json    Clean URLs config
```
