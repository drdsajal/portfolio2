# Dev Rabi Das Sajal — Portfolio

A modern, dark-themed, **fully static** portfolio built with semantic HTML, modern CSS, and vanilla JavaScript. Zero build step. Drop into GitHub Pages and you're live.

## Quick start

1. Create a new GitHub repo (e.g. `drdsajal.github.io` for a user site, or any repo name for a project site).
2. Copy these three files + the `assets/` folder into the repo root:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` (with `profile.jpg` and `Dev_Sajal_CV.pdf`)
3. Push to GitHub.
4. In repo **Settings → Pages**, set the source to the `main` branch (root). Your site is live at `https://<username>.github.io/<repo>/`.

## Customising

- **Profile photo** → put a square JPG at `assets/profile.jpg` (~600×600px). Auto-fallback to initials if missing.
- **CV** → drop your PDF as `assets/Dev_Sajal_CV.pdf`.
- **Content** → all copy lives in `index.html`. Skill levels (the bar widths) are inline `style="width: X%"` — tweak as you like.
- **Colors** → edit CSS variables in `:root` of `style.css` (e.g. `--accent`, `--bg-0`).
- **Tabs** → add another tab by adding a `<button class="tab">` in the `<div class="tabs">` block and a matching `<section class="tab-panel" id="panel-NAME">` below.

## Tech

- HTML5, CSS3 (variables, grid, sticky), vanilla JS (no frameworks)
- [Lucide](https://lucide.dev) icons via CDN
- Google Fonts: Inter + JetBrains Mono

MIT — use freely.
