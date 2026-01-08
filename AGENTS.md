# Agent Instructions: Pharmaoffer Brand + Static Repo Rules

You are implementing SEO directory pages for Pharmaoffer.
This repository is **static HTML + CSS only**. No bundlers. No frameworks. No inline styling.

Your output MUST follow the Pharmaoffer brand book.

## Absolute rules (do not break)
1. **Static only**
   - Output plain HTML/CSS files.
   - Do not introduce Vite, Next.js, React, Webpack, etc.
   - No build step required to view the pages.

2. **No inline styles**
   - No `style=""` attributes.
   - No `<style>` tags inside page HTML.
   - All styling lives in CSS files.

3. **Brand book compliance**
   - Colors must come from `src/styles/brand.css` variables.
   - Typography must use DM Sans (headings) and Inter (body).
   - Card shadows and radii must match the brand system.
   - Buttons must follow brand rules (pill, padding 15x25, hover behavior).

4. **CSS architecture**
   - `brand.css` contains:
     - tokens (colors, fonts, radii, shadows)
     - base styles (body, headings, links)
     - shared components (buttons, cards, breadcrumbs, tables, FAQ, badges)
   - `styles/pages/<page>.css` contains:
     - layout and page-specific rules ONLY
     - may not redefine brand tokens or introduce new colors

5. **Header/footer source of truth**
   - Header markup lives in `src/partials/header.html`
   - Footer markup lives in `src/partials/footer.html`
   - Because static HTML has no native includes:
     - pages may contain copied markup from these partials
     - but the partial files remain the canonical reference

6. **Header requirements**
   Top header:
   - left: logo
   - center: Home | How it works | Services | About | Contact
   - right: Request a quote button + search icon + sign-in icon + “For suppliers” link

   Bottom header:
   - API sourcing | CDMO and contract services | Intelligence | Audit reports

7. **Footer requirements**
   Columns:
   - Platform: How it works, Solutions, Intelligence
   - For users: Buyers, Suppliers
   - Company: About, Contact, Privacy and Terms
   Bottom line:
   - © Pharmaoffer - Global pharma sourcing platform

8. **Accessibility and semantics**
   - Use semantic tags: header/nav/main/footer/section.
   - Icons must have accessible labels (aria-label) or be aria-hidden if decorative.
   - Maintain keyboard focus visibility.

9. **SEO structure**
   - Exactly one H1.
   - Use H2/H3 for content blocks in correct order:
     hero → categories → directory → guide → FAQ
   - Avoid duplicate content across taxonomy pages.

## Quality checklist before finishing
- No inline styles or embedded CSS.
- No hardcoded colors in page CSS.
- Uses brand CSS variables everywhere.
- Header/footer match requirements and are consistent across pages.
- Page renders correctly when opened directly as a file.
