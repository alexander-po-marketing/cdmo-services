# Pharmaoffer SEO Pages: CDMO / Contract Services (Static + GitHub Pages)

This repository contains **static HTML + CSS + JavaScript** templates for Pharmaoffer’s **CDMO / Contract Services SEO pages**.

It is built to work directly on **GitHub Pages**:
- no build tools
- no server required
- no Python scripts
- header/footer are shared via lightweight **client-side JS includes**

## What this project is

A scalable set of **SEO directory pages** that combine:
- a directory UI (filters + provider list placeholders / production components later)
- genuinely helpful guide content (how to shortlist, checklists, FAQs)
- strict **Pharmaoffer brand-book styling** through a shared CSS system

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
  js/
    includes.js
assets/
  brand/
    Pharmaoffer-brandbook.pdf
  images/
    (logo.svg, icons)

## How to view

### Option A: GitHub Pages (recommended)
1. Push to GitHub
2. Enable GitHub Pages:
   - Settings → Pages → Deploy from branch
   - Select `main` branch and `/root` (or `/docs` if you choose)
3. Open the published site URL

### Option B: Local (no server required)
Open:
- `src/pages/contract-services/index.html`

Note:
Some browsers restrict `fetch()` on `file://` URLs.
If header/footer do not load when opened locally, use GitHub Pages for preview.
(Still no “server dependency” in the repo, just browser security being browser security.)

## How header/footer works

Pages do NOT contain duplicated header/footer markup.

Instead:
- Each page includes placeholders:
  - `<div id="site-header"></div>`
  - `<div id="site-footer"></div>`
- A JS loader (`src/js/includes.js`) fetches:
  - `src/partials/header.html`
  - `src/partials/footer.html`
  and injects them into the page.

This keeps header/footer consistent across all pages without any build step.

## Styling rules

CSS is split into:
- `src/styles/brand.css`
  - tokens (colors/fonts/radius/shadow)
  - base styles
  - shared components (buttons, cards, breadcrumbs, tables, FAQ)
- `src/styles/pages/<page>.css`
  - page-only layout rules
  - no brand token redefinitions
  - no hardcoded colors

## Adding a new page

1. Create `src/pages/<slug>/index.html`
2. Create `src/styles/pages/<slug>.css`
3. In the HTML:
   - link `../../styles/brand.css`
   - link `../../styles/pages/<slug>.css`
   - include header/footer placeholders + `../../js/includes.js`
4. Use a single H1 and consistent content block order.

## SEO scope

Root directory targets broad commercial-intent queries:
- contract manufacturing organizations
- CDMO companies
- pharmaceutical contract manufacturing
- CDMO services

Child taxonomy pages target specific service/type/category intent and must not cannibalize the root.
