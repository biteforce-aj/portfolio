# 09 — Church / NGO / school
Repo name: `community-template`
For: churches and ministries, NGOs and foundations, schools. One template, three presets.

## Presets
A `preset` field in config ("church" | "ngo" | "school") switches labels and which sections show:
- church → Sermons, Events, Ministries, Give
- ngo → Programs, Impact, Get Involved, Donate
- school → Academics, Admissions, Events, Fees/Pay

## Pages
- **Home** — hero (welcome / mission), service times or key info, upcoming events, latest sermons/news, impact stats, give/donate CTA
- **About** — story, beliefs/mission/vision, leadership team
- **Events** — upcoming/past list, `/events/[slug]` detail with date, venue, map, add-to-calendar (.ics)
- **Media** — sermons/news: video embeds (YouTube), audio, notes; filter by series or category
- **Programs / Ministries / Academics** — cards + detail pages
- **Give / Donate / Pay fees** — giving options, bank details, payment link from config
- **Contact** — form, map, service or office hours

## Config fields to add
`preset`, `serviceTimes[]`, `events[]`, `media: [{ title, date, speaker?, series?, youtubeId?, audioUrl? }]`, `programs[]`, `leadership[]`, `giving: { methods[], bankDetails, paymentLink }`, `livestreamUrl`

## Signature touch
"Live now" banner when the livestream is on, and add-to-calendar on every event.

## Phases
1. **Plan** — preset mechanism, routes, config additions. Stop for approval.
2. **Config + presets + Home**
3. **About + Programs/Ministries**
4. **Events + add-to-calendar**
5. **Media + livestream banner**
6. **Give/Donate + Contact**
7. **Polish** — check all three presets, responsive, a11y, Lighthouse, README (screenshots of each preset), deploy.
