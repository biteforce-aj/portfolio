# 08 — Personal brand / coach / consultant
Repo name: `personal-brand-template`
For: coaches, speakers, authors, therapists, fitness trainers, freelancers, beauty pros.

## Pages
- **Home** — strong portrait hero, credibility strip (as seen in / stats), services/offers, about teaser, testimonials, lead magnet, booking CTA
- **About** — story, credentials, photo gallery
- **Services / Programs** — offer cards with price, what's included, FAQ per offer
- **Book** — booking embed (Calendly or Cal.com URL from config) with fallback contact form
- **Blog / Resources** — MDX posts with categories
- **Contact**

## Config fields to add
`offers: [{ title, price, duration, includes[], cta }]`, `bookingUrl`, `leadMagnet: { title, description, fileUrl }`, `credentials[]`, `mediaMentions[]`

## Signature touch
Lead-magnet email capture (free guide download) and an elegant testimonial wall with video-testimonial support.

## Phases
1. **Plan** — routes, MDX setup, booking approach. Stop for approval.
2. **Config + Home**
3. **About + Services/Programs**
4. **Booking page + lead magnet + contact**
5. **Blog (MDX)**
6. **Polish** — responsive, a11y, Lighthouse, README, deploy.
