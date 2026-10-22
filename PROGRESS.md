# Progress
Project: portfolio · Prompt file: kit/prompts/01-portfolio.md · Content: kit/prompts/portfolio-content.md · Design source: kit/prototype.html (no Figma)

## Done
- Phase 1 Plan approved (defaults: name hero "Joshua *Anderson.*", keep prototype microcopy, cursor bubble on work rows/cards only, nav → routes)
- Phase 2 Tokens + config: dark-only prototype palette, cobalt split into `primary` (fills) / `primary-text` (AA text), mock-screen colour group, named type scale; Geist / Instrument Serif / Geist Mono; all content in site.config.ts

## Next
- Phase 3 — Home (status bar, nav, hero + CompareSlider, credentials, WorkIndex, services, about + Portrait, contact band, footer, mobile menu, toast)

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Reveal hides content until hydration: never wrap above-the-fold content. contact.action.ts is a stub (no delivery yet)
- Lighthouse: `prod` launch config serves `next start` on :3001; run `npx lighthouse@12` against it after `npm run build`
