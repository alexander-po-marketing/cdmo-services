# Agent Instructions: Pharmaoffer Brand & UI Rules

You are implementing SEO directory pages for Pharmaoffer.
Your output MUST follow the Pharmaoffer brand book.

## Absolute rules (do not break)
1. **No inline styles** in HTML. All styling must be in CSS files.
2. **No hardcoded colors** in page CSS. Use variables defined in `src/styles/brand.css`.
3. **Header and Footer are shared**:
   - header markup lives only in `src/partials/header.html`
   - footer markup lives only in `src/partials/footer.html`
   - pages include these partials. Do not duplicate.
4. **Typography**:
   - Headings use the brand heading font (DM Sans).
   - Body uses the brand body font (Inter).
   - Keep heading weights consistent with brand usage.
5. **Components**:
   - Buttons must use brand button rules (pill shape, correct padding, hover behavior).
   - Cards use brand radius + shadow.
   - Tables use brand table styling.
   - FAQ uses brand accordion pattern.
6. **Accessibility**:
   - Use semantic HTML (header/nav/main/footer/section).
   - All icons must have accessible labels or be aria-hidden if decorative.
   - Maintain visible focus styles.
7. **SEO template consistency**:
   - One H1 per page.
   - Use structured headings (H2/H3) to reflect content blocks.
   - Keep content blocks in the intended order (hero → categories → directory → guide → FAQ).

## CSS architecture
- `brand.css` contains:
  - design tokens (colors, typography, radius, shadow)
  - base styles (body, headings, links)
  - shared components (buttons, cards, table, faq, badges)
- `pages/<page>.css` contains:
  - page layout and composition rules only
  - page-specific components only
  - may NOT redefine brand tokens

## Visual consistency checks (before finishing)
- Does the page look consistent with brand book screenshots?
- Are teal + deep teal used as primary accents (not random blues)?
- Are cards and buttons using the correct radii and shadow?
- Is spacing clean and consistent across sections?
