# 06 — Admin / analytics dashboard
Repo name: `dashboard-template`
For: SaaS back-offices, school portals, inventory, sales or HR admin panels.

## Screens
- **Layout** — collapsible sidebar, top bar with search, notifications dropdown, user menu, dark mode
- **Overview** — KPI cards with trend, line/area chart, bar chart, donut, recent activity, top items table
- **Data table page** (e.g. Orders) — sorting, search, filters, pagination, row selection, bulk actions, status badges, CSV export
- **Detail page** — record view with tabs and an activity timeline
- **Forms page** — create/edit form with validation, file upload UI
- **Settings** — profile, team members, notifications toggles
- **Auth screens (UI only)** — login, sign up, forgot password

## Data
Mock data in `src/data/*.json` with a small `api.ts` layer, so a real API can be swapped in later. Charts with Recharts.

## Signature touch
A reusable `DataTable` component that any future client dashboard can use as-is.

## Phases
1. **Plan** — screens, table component API, chart choices. Stop for approval.
2. **Layout shell** (sidebar, top bar, dark mode, routing)
3. **Overview** (KPIs + charts)
4. **DataTable component + Orders page**
5. **Detail page + forms page**
6. **Settings + auth screens**
7. **Polish** — loading skeletons, empty states, keyboard navigation, responsive (sidebar becomes drawer), README, deploy.
