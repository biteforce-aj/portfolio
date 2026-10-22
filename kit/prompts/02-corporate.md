# 02 — Corporate / agency site
Repo name: `business-template`
For: agencies, consultancies, logistics, construction, law firms, any service business.

## Pages
- **Home** — hero, logo strip, services overview, why-us/stats, featured case studies, testimonials, CTA band
- **Services** — overview grid + `/services/[slug]` detail pages generated from config
- **About** — story, mission/values, timeline, team grid
- **Case studies** — list + `/case-studies/[slug]` detail (challenge, solution, results)
- **Contact** — form with service dropdown, map, office details
- **Careers** (optional, toggle in config) — open roles list

## Config fields to add
`services: [{ slug, title, icon, summary, body, benefits[] }]`, `team: [{ name, role, photo, linkedin }]`, `caseStudies: [{ slug, client, title, challenge, solution, results[], image }]`, `values[]`, `timeline[]`, `careers: { enabled, roles[] }`

## Signature touch
Animated stats counter and a clean service-detail template that makes 1 page or 20 equally easy.

## Phases
1. **Plan** — routes, new components, config additions. Stop for approval.
2. **Config + Home**
3. **Services list + detail pages**
4. **About + team + case studies**
5. **Contact + careers toggle**
6. **Polish** — responsive, a11y, Lighthouse, README with screenshots, deploy.
