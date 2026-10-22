# 12 — Design system / component library
Repo name: `design-system`
For: your UI/UX credibility. Shows you think in systems, not pages. Pair it with a matching Figma library.

## Contents
- **Foundations** — color tokens (with light/dark), type scale, spacing, radius, shadows, motion tokens; documented with usage do's and don'ts
- **Components** — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Avatar, Card, Alert, Toast, Modal/Dialog, Dropdown menu, Tabs, Accordion, Tooltip, Table, Pagination, Breadcrumbs, Skeleton
- Each component: variants, sizes, states (hover, focus, disabled, loading, error), keyboard support, ARIA

## Tooling
Storybook for docs, with the a11y addon. Tokens exported from one source so the starter can consume them. Publish Storybook to Vercel or Chromatic.

## Figma link
Your Figma component library: [add link]. Match names and variants 1:1 between Figma and code. The Figma MCP server can help keep them in sync.

## Signature touch
A "Foundations" docs page that explains *why* each decision was made — that is the UX case study inside the repo.

## Phases
1. **Plan** — token structure, component list order, Storybook setup. Stop for approval.
2. **Storybook + tokens + foundations docs**
3. **Form components** (Button, Input, Textarea, Select, Checkbox, Radio, Switch)
4. **Display components** (Badge, Avatar, Card, Alert, Skeleton, Table, Pagination, Breadcrumbs)
5. **Overlay & interactive components** (Modal, Dropdown, Tabs, Accordion, Tooltip, Toast)
6. **Polish** — a11y addon passes, keyboard checks, README, deploy Storybook.
