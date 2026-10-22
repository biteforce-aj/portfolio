# Progress
Project: portfolio · Prompt file: kit/prompts/01-portfolio.md · Content: kit/prompts/portfolio-content.md · Design source: kit/prototype.html (no Figma)

## Done

## Next
- Phase 1 — Plan

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Reveal hides content until hydration: never wrap above-the-fold content. contact.action.ts is a stub (no delivery yet)
- Lighthouse: `prod` launch config serves `next start` on :3001; run `npx lighthouse@12` against it after `npm run build`
