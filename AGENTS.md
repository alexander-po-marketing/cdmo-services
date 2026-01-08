# Agent Instructions: Pharmaoffer Brand + Static GitHub Pages Rules

You are implementing SEO directory pages for Pharmaoffer.
This repository is **static HTML + CSS + JavaScript only**, intended to work on **GitHub Pages**.

## Absolute rules (do not break)

1) Static only
- Only HTML/CSS/JS/assets.
- No Python. No Node build tools. No frameworks (React/Next/Vite/etc.).
- Pages must load in a browser from GitHub Pages.

2) Header/Footer via JavaScript includes
- Header source: `src/partials/header.html`
- Footer source: `src/partials/footer.html`
- Pages must contain placeholders:
  - <div id="site-header"></div>
  - <div id="site-footer"></div>
- JS loader must inject the partials at runtime:
  - `src/js/includes.js` performs fetch() + injects HTML
- Never copy-paste header/footer markup into each page.

3) No inline styles
- No style="" attributes.
- No <style> blocks in page HTML.
- All styling lives in CSS files.

4) Brand book compliance (strict)
- Use DM Sans for headings and Inter for body.
- Use brand palette tokens only (teal + deep teal + defined greys).
- Cards: brand radius + shadow.
- Buttons: pill shape, correct padding (15px vertical / 25px horizontal), hover arrow behavior.
- Do NOT introduce new colors, fonts, shadows, or radii outside tokens.

5) CSS architecture
- `src/styles/brand.css` contains:
  - tokens (colors/fonts/radius/shadow)
  - base styles (body, headings, links)
  - shared components:
    buttons, cards, breadcrumbs, tables, FAQ, badges, layout primitives
- `src/styles/pages/<page>.css` contains:
  - page layout and page-only components
  - MUST NOT redefine brand tokens
  - MUST NOT introduce hex colors

6) Header requirements
Header has TWO rows:

Top header:
- Left: Pharmaoffer logo
- Center nav: Home | How it works | Services | About | Contact
- Right: Request a quote button + search icon + sign-in icon + “For suppliers” link

Bottom header:
- API sourcing | CDMO and contract services | Intelligence | Audit reports

Use semantic markup:
<header> with <nav> elements.
Icons must have aria-labels or be aria-hidden if decorative.

7) Footer requirements
Footer columns:
Platform:
- How it works
- Solutions
- Intelligence

For users:
- Buyers
- Suppliers

Company:
- About
- Contact
- Privacy and Terms

Bottom line:
© Pharmaoffer - Global pharma sourcing platform

8) Accessibility and semantics
- Use semantic tags: header/nav/main/footer/section.
- Maintain visible keyboard focus styling.
- Ensure nav links are usable on mobile.

9) SEO structure
- Exactly one H1 per page.
- Heading hierarchy: H2/H3 only where needed.
- Content order: hero → categories → directory → guide → FAQ.

## Quality checklist before finishing
- Header/footer injected via JS includes on GitHub Pages.
- No inline styles or embedded CSS.
- brand.css contains tokens/components; page CSS is layout-only.
- No hardcoded colors in page CSS.
- Page renders cleanly with consistent spacing and typography.
