# Pharmaoffer SEO Pages: CDMO / Contract Services (Static)

This repository contains **static HTML + CSS** templates for Pharmaoffer’s **CDMO / Contract Services SEO pages**.

It is designed to be:
- **Brand-consistent** (strictly follows the Pharmaoffer brand book)
- **Scalable** (shared header/footer + reusable CSS system)
- **SEO-friendly** (directory + guide content structure, clean semantic HTML)

No build tools. No bundlers. No framework. Just files.

## What’s inside

- Shared layout parts:
  - `src/partials/header.html`
  - `src/partials/footer.html`
- Page templates:
  - `src/pages/contract-services/index.html`
- Styles:
  - `src/styles/brand.css` (global tokens + typography + components)
  - `src/styles/pages/contract-services.css` (page-specific layout rules)
- Assets:
  - `assets/brand/Pharmaoffer-brandbook.pdf`
  - `assets/images/` (logo/icons if needed)

## Folder structure

src/
  partials/
    header.html
    footer.html
  pages/
    contract-services/
      index.html
  styles/
    brand.css
    pages/
      contract-services.css
assets/
  brand/
    Pharmaoffer-brandbook.pdf
  images/
    (logo.svg, icons, etc.)

## How to view locally

Because this is static, you can open the HTML file directly:
- `src/pages/contract-services/index.html`

If your browser blocks some relative paths when opening from disk, use any simple local server:
- Python: `python -m http.server 8080`
- Node: `npx serve`

These are optional. The repo is not dependent on any server or build step.

## How pages are composed (important)

Header and footer are stored as separate files under `src/partials/`.
Static HTML has no native “include” feature, so composition is handled in one of two ways:

### Option A (recommended): copy from partials (manual sync)
- When updating header/footer:
  1) Update `src/partials/header.html` and/or `src/partials/footer.html`
  2) Copy the updated markup into every page template

This is simple and works everywhere. It’s also painfully human.

### Option B (optional): lightweight include script
If we want automatic composition without a framework:
- Keep partials as source of truth
- Use a tiny script (Node or Python) to inject header/footer into pages before publishing

This is OPTIONAL and not required for the repo to function.

## Rules (non-negotiable)

- No inline styles.
- No random hex codes in page CSS.
- All global styles live in `brand.css`.
- Each page has its own CSS file under `styles/pages/`.
- One H1 per page. Clean heading hierarchy.

## Adding a new page

1) Create page folder: `src/pages/<slug>/index.html`
2) Create page stylesheet: `src/styles/pages/<slug>.css`
3) Link styles:
   - `../../styles/brand.css`
   - `../../styles/pages/<slug>.css`
4) Copy shared header/footer markup (or use Option B if enabled)

## SEO scope

Root directory page targets broad, commercial-intent queries:
- contract manufacturing organizations
- CDMO companies
- pharmaceutical contract manufacturing
- CDMO services

Child taxonomy pages (service → type → category) will target more specific intent and must not cannibalize the root page.
