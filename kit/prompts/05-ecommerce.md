# 05 — E-commerce storefront
Repo name: `store-template`
For: fashion, beauty, gadgets, food products, small online shops.

## Pages
- **Home** — hero/banner carousel, featured categories, best sellers, promo band, newsletter
- **Shop** — product grid with filters (category, price range, size/colour), sort, pagination
- **Product `/product/[slug]`** — image gallery with zoom, variants, quantity, add to cart, related products
- **Cart** — line items, quantity edit, remove, subtotal, delivery fee from config
- **Checkout** — customer + delivery form, order summary, payment step
- **Order confirmation**

## Data
Products in `src/data/products.json` (no backend yet). Cart in React context, persisted to localStorage.

## Payments
Pick one provider in Phase 1 — Stripe, Paystack, or Flutterwave, whichever your target clients use. Integrate in **test mode only** with test keys from `.env.local` (never commit keys). Add a `.env.example`.

## Config fields to add
`store: { currency, deliveryFee, freeDeliveryOver, paymentProvider }`, `categories[]`, `promos[]`

## Signature touch
Slide-out cart drawer with smooth add-to-cart feedback, and a "free delivery when you spend X more" progress bar.

## Phases
1. **Plan** — routes, cart state design, product data shape, payment provider. Stop for approval.
2. **Product data + Home + Shop grid**
3. **Filters, sort, pagination**
4. **Product page + cart context + cart drawer/page**
5. **Checkout + payment (test mode) + confirmation**
6. **Polish** — empty/loading/error states, responsive, a11y, Lighthouse, README, deploy.
