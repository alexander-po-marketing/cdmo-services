# Pharmaoffer SEO: CDMO / Contract Services Pages

This repository contains the SEO-driven front-end templates for Pharmaoffer’s **CDMO / Contract Services directory** pages.

The goal is to ship a scalable, brand-consistent set of pages that:
- rank for commercial-intent queries like **contract manufacturing organizations**, **CDMO companies**, **pharmaceutical contract manufacturing**, and **CDMO services**
- provide genuinely useful directory + guide content (not “keyword padding around a list”)
- keep styling consistent with the Pharmaoffer **brand book** at all times

## What this project includes

- A shared **Header** and **Footer** used by all pages
- A global brand stylesheet: `brand.css` (tokens + base + components)
- Page-level stylesheets: one CSS file per page (e.g. `contract-services.css`)
- Page templates under `src/pages/**`

## Pages (current + planned)

### Root directory page
- `/contract-services/`
  - Directory introduction + category navigation
  - “How to use” steps
  - Overview table
  - Provider directory placeholder (will be replaced by production components)
  - Guide section + FAQs

### Taxonomy pages (planned)
- `/contract-services/drug-substance-cdmo-cro/`
- `/contract-services/drug-substance-cdmo-cro/small-molecule-apis/`
- `/contract-services/drug-product-cmo/`
- `/contract-services/drug-product-cmo/oral-solid-products/tablets-capsules/`
...and so on

## Tech approach

This repo is a simple static build:
- HTML pages assembled from **partials** (header/footer)
- CSS split into:
  - `src/styles/brand.css` (global brand tokens + components)
  - `src/styles/pages/<page>.css` (page-only styles)

No inline styles. No random hex codes. No “just this one exception”.

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
    logo.svg (optional)


## Rules (non-negotiable)

Brand styling must follow the brand book.
Use CSS variables from brand.css for colors, radii, shadows, typography.
Page CSS may extend layout, spacing, and page-specific components only.
Header and Footer are shared across all pages and must not be duplicated inside page templates.

## Contribution workflow

Create a new page folder in src/pages/<slug>/index.html
Create a matching stylesheet in src/styles/pages/<slug>.css
Link brand.css + the page CSS in the page template
Use header/footer partials (do not copy-paste header/footer into pages)
