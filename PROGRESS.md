# Progress
Project: site-starter · Prompt file: kit/prompts/00-starter.md · Approved plan: kit/PLAN.md

## Done
- Phases 1–6: Plan, Scaffold, UI components (+ /styleguide), all sections, demo home + SEO
- Phase 7 Polish + README: no overflow at 360/768/1280, AA contrast both themes, Lighthouse mobile 93–94 / desktop 100 perf, 100 a11y/BP/SEO, CLS 0

## Next
- Starter complete. Fill README placeholders (demo URL, `YOUR_GITHUB_USER`, LICENSE file), push to GitHub, mark as template repo, then `/new-site` per START_HERE.md

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, dark values duplicated in tokens.css, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Sections take an optional `tone`; alternate backgrounds per page. Navbar/Footer/WhatsAppButton stay per-page. OG image is static `seo.ogImage`
- Reveal hides content until hydration: never wrap above-the-fold content. contact.action.ts is a stub (no delivery yet)
- Lighthouse: `prod` launch config serves `next start` on :3001; run `npx lighthouse@12` against it after `npm run build`
