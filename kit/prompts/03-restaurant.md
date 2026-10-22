# 03 — Restaurant / café
Repo name: `restaurant-template`
For: restaurants, cafés, bakeries, lounges, food vendors.

## Pages
- **Home** — full-bleed hero with Reserve and Order buttons, featured dishes, about snippet, testimonials, hours and location, CTA band
- **Menu** — categories from config with sticky category nav, item name/description/price/dietary tags, search box
- **Gallery** — responsive masonry grid with accessible lightbox
- **Reservations** — form (name, phone, date, time, guests, notes) with validation; server action stub
- **Contact** — map embed, hours table, phone, WhatsApp order button

## Config fields to add
`menu: { currency, categories: [{ name, items: [{ name, description, price, tags[], image?, popular? }] }] }`, `hours: [{ day, open, close }]`, `reservations: { enabled, maxGuests }`, `orderLinks: { whatsapp, deliveryApps[] }`

## Signature touch
"Open now / Closes at 10pm" badge computed from `hours`, and menu search with tag filters (vegetarian, spicy, popular).

## Phases
1. **Plan** — routes, new components, config additions. Stop for approval.
2. **Config + Home**
3. **Menu page** (nav, search, filters)
4. **Gallery + Reservations + Contact**
5. **Polish** — open-now badge, responsive, a11y, Lighthouse, README, deploy.
