# Template kit — start here

Everything you need to build your portfolio and 12 projects with Claude Code without burning through your usage.

## What's in the kit
| File | What it does |
|---|---|
| `CLAUDE.md` | Project rules Claude Code loads automatically every session. Kept short on purpose. |
| `PROGRESS.md` | Where you are: done / next / issues. Lets a fresh session pick up instantly. |
| `.claude/commands/next.md` | `/next` — do the next phase from PROGRESS.md |
| `.claude/commands/wrap-up.md` | `/wrap-up` — commit, update PROGRESS.md, summarize |
| `.claude/commands/new-site.md` | `/new-site restaurant` — start a new template from the starter |
| `kit/STARTER_SPEC.md` | The full spec for the base repo |
| `kit/prompts/00–12` | One file per project, split into one-session phases |

## How usage works (so you can plan around it)
- Your usage is **one pool for your whole account**, not per project. It covers Claude Code, the Claude app and claude.ai together, on a rolling 5-hour window plus a weekly cap.
- Separately, each **session** has a context window. Everything in the conversation (files read, code written, chat) fills it, and every new message re-sends that context. A bloated session costs more per message.
- Check where you stand with `/usage` inside Claude Code, or in Settings → Usage on claude.ai.

## One-time setup
1. Create a folder `site-starter`, copy this whole kit into it, run `git init`.
2. Open Claude Code in that folder.
3. Fill in `PROGRESS.md`: Project `site-starter`, Prompt file `kit/prompts/00-starter.md`.
4. Type `/next`. It will plan Phase 1 and stop. Approve or adjust.
5. Keep going phase by phase until the starter is done. Push it to GitHub and mark it as a **template repository** in the repo settings.

## Starting each new site
1. On GitHub, click **Use this template** on `site-starter` → name it (e.g. `restaurant-template`) → clone it.
2. Open Claude Code in it and type `/new-site restaurant`.
3. Approve the plan. Then the loop below.

Exceptions: `11-fullstack-app` and `12-design-system` can start from the starter too, but expect their phases to add extra tooling (Supabase, Storybook).

## The session loop (this is what saves usage)
```
/next        → Claude does ONE phase, commits, updates PROGRESS.md
/clear       → wipe the conversation (PROGRESS.md remembers everything)
/next        → next phase in a fresh, cheap session
```
- **One phase per session, then `/clear`.** A small fresh session costs far less per message than a long one.
- If a phase runs long and you're mid-task, use `/compact` and say what to keep, e.g. `/compact keep the list of files changed and the remaining steps`.
- **Plan first** (built into Phase 1 and `/next`). A plan is cheap; rebuilding the wrong thing is expensive.
- **Point at files.** "Fix the spacing in `src/components/sections/Hero.tsx`" is much cheaper than "the hero looks off, fix it."
- **Don't paste big things.** No whole files, logs or long error dumps — paste the relevant lines. Screenshots: one at a time, only when needed.
- **Use the right model.** Do routine phases on Sonnet; switch with `/model` to Opus only for planning or a hard bug.
- **Fix small things yourself.** Changing a color, a word, or padding by hand costs nothing.
- **Avoid long autopilot runs.** Small phases with commits are cheaper and easier to undo.
- **Space your sessions.** If you're close to the 5-hour limit, stop at a `/wrap-up` and continue when it resets — PROGRESS.md means nothing is lost.

## Recommended build order
| # | Project | Prompt file | Why this position |
|---|---|---|---|
| 1 | Starter | `00-starter.md` | Everything else depends on it |
| 2 | Portfolio v1 | `01-portfolio.md` | Somewhere to show work as it lands |
| 3 | Corporate / agency | `02-corporate.md` | Most reusable for paid work |
| 4 | Restaurant | `03-restaurant.md` | Very common client request |
| 5 | SaaS landing | `04-saas-landing.md` | Your best "design" showpiece |
| 6 | E-commerce | `05-ecommerce.md` | High-value client work |
| 7 | Dashboard | `06-dashboard.md` | Strong for job applications |
| 8 | Real estate | `07-real-estate.md` | Common, good filters/maps practice |
| 9 | Personal brand | `08-personal-brand.md` | Quick win, easy to resell |
| 10 | Church / NGO / school | `09-church-ngo-school.md` | Three markets in one template |
| 11 | Event / wedding | `10-event-wedding.md` | Fast to build and deliver |
| 12 | Booking app | `11-fullstack-app.md` | Proves full-stack ability |
| 13 | Design system | `12-design-system.md` | Proves systems thinking |

After each one: deploy it, add it to your portfolio's `projects` config, pin the best six on GitHub.

## Using your Figma designs
Design each site's key screens in Figma first (at least the home page and one inner page). In Claude Code, connect the Figma MCP server, then paste the frame link into the phase: "Build the home page to match this frame: <link>". Your design is what makes these yours rather than generic.

## Before you put a project in your portfolio
- [ ] You can explain every file and decision in it
- [ ] Live link works on mobile
- [ ] README has screenshot, live link, features, stack, "customize in 3 steps"
- [ ] Lighthouse 90+
- [ ] No API keys in the repo
- [ ] `kit/` folder deleted once the project is finished (it stays in the starter, so new sites still get it)
