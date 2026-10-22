# 04 — SaaS / product landing page
Repo name: `saas-landing-template`
For: startups, apps, digital products, courses. Your "show-off" design piece.

## Pages
- **Home (long-form landing)** — hero with product mockup, logo strip, problem/solution, feature sections with alternating layouts, how-it-works steps, integrations grid, pricing, testimonials, FAQ, final CTA
- **Pricing** — monthly/yearly toggle, plan comparison table, FAQ
- **Changelog or Blog** — MDX list + post page (pick one in Phase 1)
- **Waitlist / Sign-up** — email capture with success state

## Config fields to add
`pricing: { currency, plans: [{ name, monthly, yearly, features[], highlighted, cta }] }`, `featureSections[]`, `steps[]`, `integrations[]`, `comparison: { rows[] }`

## Signature touch
Polished motion: scroll-linked hero mockup, smooth pricing toggle, bento-grid features. All reduced-motion safe.

## Phases
1. **Plan** — sections, motion approach (CSS vs Framer Motion), config additions. Stop for approval.
2. **Hero + logo strip + feature sections**
3. **How it works + integrations + testimonials + FAQ**
4. **Pricing page + toggle + comparison table**
5. **Blog/changelog + waitlist form**
6. **Polish** — motion tuning, responsive, a11y, Lighthouse (keep motion from hurting performance), README, deploy.
