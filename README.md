# Frenzo Printing Solutions — Marketing Site

A production-ready marketing site for **Frenzo Printing Solutions**, the print, brand and promotion studio in Magomeni Mapipa, Dar es Salaam.

Built with Next.js 14 (App Router), TypeScript, Tailwind, shadcn/ui primitives and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffrenzo%2Ffrenzo-site&project-name=frenzo&repository-name=frenzo)

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # strict TS check
npm run lint         # next lint
```

Node 20+ is recommended.

---

## Project structure

```
app/
  layout.tsx            Root layout (fonts, nav, footer, JSON-LD)
  page.tsx              Landing page composition
  contact/page.tsx      /contact page
  contact/actions.ts    Server action for the contact form
  opengraph-image.tsx   Generated 1200×630 OG image
  sitemap.ts robots.ts  Generated /sitemap.xml and /robots.txt
  globals.css           Tokens, utilities, reduced-motion rules
components/
  nav.tsx footer.tsx    Layout shell
  custom-cursor.tsx     Desktop blended cursor
  page-transition.tsx   Shared layout fade/scale between routes
  motion/               Magnetic, Reveal, CountUp, LazyMotion provider
  sections/             Hero, Marquee, Services, Process, Work, Stats, Testimonial, FinalCta
  contact/              ContactForm, ContactCard
  ui/                   shadcn primitives (Button, Input, Textarea, Label, Select)
lib/
  content.ts            ALL editable copy + clients + services + stats
  seo.ts                JSON-LD LocalBusiness + Organization schema
  utils.ts              cn()
```

---

## Editing the site (content guide)

Almost every piece of copy lives in **[`lib/content.ts`](lib/content.ts)**. Open that file to:

| Want to change … | Edit this constant |
|---|---|
| Phone, email, address, hours, WhatsApp, map | `CONTACT` |
| Brand name, tagline, promise, URL | `BRAND` |
| Top-of-page navigation links | `NAV_LINKS` |
| Client logo wall (just add a name) | `CLIENTS` |
| Business services bento grid | `SERVICES_BUSINESS` |
| NGO services bento grid | `SERVICES_NGO` |
| Process steps (Brief → Deliver) | `PROCESS` |
| Featured work strips | `WORK` |
| Stat band counters | `STATS` |
| Pull-quote testimonial | `TESTIMONIAL` |
| Project type dropdown options | `PROJECT_TYPES` |
| Trust bar text | `TRUST` |

### Swapping images

Every photo URL in `lib/content.ts` is annotated with a `// TODO(client)` comment. Replace each Unsplash placeholder with your actual product photography or job photos. Recommended sizes:

- Hero floating cards: `5:6` portrait, ~900×1080
- Bento tile hover image: `square or wide`, ~900×900
- Process step image: `4:3`, ~1200×900
- Work strip: `16:9 or wider`, ~1600×900

If you self-host photos, drop them in `public/` and reference them as `/your-photo.jpg`. If you keep using a remote host, add the hostname to `images.remotePatterns` in `next.config.mjs`.

### Adding a new client logo

Open `lib/content.ts`, push the company name into `CLIENTS`. The marquee renders each client in a different typographic flavour automatically — no logo file needed.

### Updating prices / quotes

There are no hard-coded prices on the site (intentional — prices change). Quote requests come through the contact form. To wire the form to a real inbox, see "Contact form" below.

---

## Contact form

The form is a Server Action at [`app/contact/actions.ts`](app/contact/actions.ts). It currently validates inputs and shows the animated success state but **doesn't send anywhere yet**.

To wire it up, choose one:

- **Resend** (`npm i resend`): in `submitContact`, after validation, call `resend.emails.send({...})` with the form fields.
- **Formspree / Getform / Web3Forms**: replace the placeholder `await new Promise(...)` with `fetch("https://formspree.io/f/xxxx", { method: "POST", body: JSON.stringify(data) })`.
- **WhatsApp redirect**: skip Server Action and `window.location.href = wa.me/...?text=...` instead.

Don't forget to add any environment variables to Vercel.

---

## Deploying

The simplest path is **Vercel**:

1. Push this repo to GitHub.
2. Click the "Deploy with Vercel" button at the top of this README, or import the repo at vercel.com.
3. No env vars are required for a baseline deploy. Add `RESEND_API_KEY` etc. once you wire up the form.
4. Point `frenzo.co.tz` at the Vercel domain settings.

The `BRAND.url` constant in `lib/content.ts` controls the canonical URL used by metadata and JSON-LD. Update it if you deploy under a different domain.

---

## Performance & accessibility

- **Lighthouse targets** (verified locally on the production build): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- All images use `next/image` with explicit dimensions, lazy-loaded except for the hero stack which is `priority`.
- Headings are semantic; every section has an `aria-labelledby`.
- A skip-to-content link is rendered for keyboard users.
- Motion respects `prefers-reduced-motion` via `MotionConfig` and a CSS short-circuit in `globals.css`.
- The custom cursor is disabled on touch devices and when reduced motion is preferred.

---

## Brand & motion principles

See **[BRAND.md](BRAND.md)**.

---

## Licence

© 2026 Frenzo Printing Solutions. All rights reserved.
