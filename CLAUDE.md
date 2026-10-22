# Project rules

This repo is one of a family of website templates built from a shared starter.
Keep this file short — it is loaded at the start of every session.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- npm. Deploy target: Vercel.

## Content
- All business content (name, copy, services, images, links, contact, socials) lives in `src/config/site.config.ts`. Never hardcode it in components.
- Images go in `public/images/` and render with `next/image`.

## Design
- Colors, fonts, radius and spacing come only from the tokens in `src/styles/tokens.css`. No raw hex values or ad-hoc font sizes in components.
- Mobile-first. Check 360px, 768px and 1280px.
- Accessibility: semantic HTML, alt text, visible focus states, AA contrast, respect `prefers-reduced-motion`.

## Components
- Reuse `src/components/ui` and `src/components/sections` before creating anything new.
- Reusable pieces go in those folders; page-only pieces stay in their route folder.

## Working style (keeps usage low)
- For anything bigger than a small fix: give a short plan first and wait for approval.
- Only open files the task needs. Never read `node_modules`, `.next`, lockfiles or build output.
- Make focused edits; don't rewrite files that don't need changing.
- Don't paste whole files back in chat; summarize what changed in a few lines.
- After each finished feature: `npm run lint` and `npm run build`, fix errors, then commit with a clear message.
- The current task and phase are in `PROGRESS.md`. Update it at the end of every session (under 15 lines).

## Commands
- `npm run dev` · `npm run lint` · `npm run build`
