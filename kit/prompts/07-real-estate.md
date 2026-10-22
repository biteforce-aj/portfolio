# 07 — Real estate listings
Repo name: `realestate-template`
For: agents, developers, short-let and rental businesses.

## Pages
- **Home** — hero with search bar (location, type, price), featured listings, neighbourhoods, why-us, agent CTA
- **Listings** — grid/list toggle, filters (buy/rent/short-let, type, beds, price range, location), sort, map view toggle
- **Listing `/listings/[slug]`** — photo gallery, price, key facts, description, amenities, floor plan image, location map, inquiry form, schedule-a-viewing, share button, similar listings
- **Agents** — team grid + agent profile with their listings
- **Contact**

## Data
Listings in `src/data/listings.json`. Saved/favourite listings in localStorage.

## Config fields to add
`currency`, `listingTypes[]`, `locations[]`, `agents: [{ slug, name, photo, phone, whatsapp, email }]`

## Signature touch
Filters synced to the URL (shareable searches) and a mortgage/rent affordability calculator on listing pages.

## Phases
1. **Plan** — routes, listing data shape, filter/URL approach, map choice (embed vs Leaflet). Stop for approval.
2. **Data + Home**
3. **Listings page + filters + URL sync**
4. **Listing detail + inquiry form + calculator**
5. **Agents + favourites + map view**
6. **Polish** — responsive, a11y, Lighthouse, README, deploy.
