# 10 — Event / wedding page
Repo name: `event-template`
For: weddings, birthdays, conferences, launches, concerts. Fast to deliver, easy to resell.

## Sections (single page + RSVP route)
- Hero with names/event title, date, and countdown
- Our story / About the event
- Schedule / programme timeline
- Venue with map and directions
- Speakers or wedding party (toggle)
- Gallery
- Dress code / colours of the day (colour swatches)
- Gift registry / account details
- FAQ
- **RSVP** — name, attending yes/no, number of guests, dietary needs, message; confirmation screen

## Config fields to add
`event: { type, title, hosts[], date, endDate, timezone, venue, mapUrl, dressCode, colors[] }`, `schedule[]`, `people[]`, `registry`, `rsvp: { enabled, deadline, maxGuests }`

## Signature touch
Two very different visual themes switchable in config ("elegant" and "bold"), so one codebase covers a wedding and a tech conference.

## Phases
1. **Plan** — sections, theme mechanism, RSVP storage (form service vs server action). Stop for approval.
2. **Config + hero/countdown + story + schedule**
3. **Venue, people, gallery, dress code, registry, FAQ**
4. **RSVP flow + second theme**
5. **Polish** — responsive, a11y, Lighthouse, OG image with event details, README, deploy.
