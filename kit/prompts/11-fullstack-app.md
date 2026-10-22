# 11 — Full-stack app: booking system
Repo name: `booking-app`
For: salons, clinics, consultants, studios, tutors. Proves you can do real auth, data and logic.

## Stack additions
Supabase (Postgres + Auth) and its JS client. Keys in `.env.local`; commit a `.env.example`. Reuse the dashboard's `DataTable` if built already.

## Features
**Customers**
- Browse services (name, duration, price)
- Pick a date and an available time slot (based on business hours and existing bookings)
- Sign up / log in, book, see "My bookings", cancel or reschedule

**Business owner (admin role)**
- Dashboard: today's bookings, upcoming, revenue estimate
- Manage services and business hours
- View, confirm, or cancel bookings
- Block off dates (holidays)

**System**
- Row-level security so customers only see their own bookings
- Double-booking prevention
- Email confirmation hook (stub or Resend)

## Phases
1. **Plan** — database schema (tables, relations, RLS policies), routes, auth flow. Stop for approval.
2. **Supabase setup** — schema migration SQL, RLS, seed data, client helpers
3. **Auth** — sign up, log in, log out, protected routes, roles
4. **Customer booking flow** — services, slot picker, create booking
5. **My bookings** — list, cancel, reschedule
6. **Admin** — dashboard, services/hours management, bookings management, blocked dates
7. **Polish** — error/loading states, tests for slot logic, README with setup steps and screenshots, deploy.
