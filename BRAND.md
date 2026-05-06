# Frenzo — Brand & Motion System

This document is the source of truth for the visual and motion language of frenzo.co.tz. Designers and engineers should refer to it before adding new sections.

---

## Voice

| Trait | Lean toward | Avoid |
|---|---|---|
| Tone | Confident, vibrant, professional | Cute, ironic, jargon-heavy |
| Posture | Tanzanian pride, NGO-credible, business-sharp | Generic agency language |
| Promise | "We turn ideas into things people hold, wear, and remember." | Inflated marketing-speak |
| Tagline | **Print · Brand · Promote** | Anything that breaks the three-beat rhythm |

---

## Colour tokens

Defined in [`tailwind.config.ts`](tailwind.config.ts). Use the named utilities (`bg-magenta`, `text-violet`, `bg-ink`, `bg-paper`) — never raw hex in components.

| Token | Hex | Use |
|---|---|---|
| `magenta` | `#E5097F` | Primary CTAs, accent dots, key highlights |
| `magenta-600` | `#B80665` | Hover state on `magenta` |
| `violet` | `#6D28D9` | Gradient partner only — never solo |
| `ink` | `#0A0A0F` | Body copy, dark surfaces, secondary buttons |
| `ink-soft` | `#1A1A22` | Hover on `ink` |
| `paper` | `#FAFAF7` | Page background |
| `paper-warm` | `#F4F2EC` | Section break / band background |

### Gradient usage

The `bg-brand-gradient` (`magenta → violet → cyan`) is **the** brand gradient. Reserve it for:

- The hero "Promote." word
- The Final CTA panel
- Large decorative blurs (low-opacity)
- The OG image

If a third surface needs the gradient, replace one of the existing uses — overuse drains its impact.

---

## Typography

Two fonts, loaded via `next/font`:

| Family | CSS var | Use |
|---|---|---|
| **Sora** | `--font-sora` | Display headlines (`font-display`) |
| **Inter** | `--font-inter` | Body, UI, captions (`font-sans`) |

### Type scale

| Token | Clamp | Tracking | Use |
|---|---|---|---|
| `text-display-1` | 56–112px | -0.04em | Hero headline |
| `text-display-2` | 40–80px | -0.035em | Section headlines |
| `text-display-3` | 32–56px | -0.03em | Sub-section / strip titles |
| `text-eyebrow` | 12px | 0.18em | Section overlines (uppercase) |

Body copy: 16–18px, line-height 1.6, applied via Tailwind's defaults. Headlines should always carry `text-balance` for clean wrapping.

---

## Layout & spacing

- Outer container: `container` with `padding: 1.25rem`, max width `1440px`.
- Section vertical rhythm: `py-24 md:py-32` for major sections; `py-20 md:py-28` for bands.
- Bento gap: 4–5 (16–20px). Components round at `1rem` (default `rounded-lg`); large hero/CTA panels go `rounded-[36px]`.
- Mobile-first breakpoints: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1440.

---

## Motion principles

We use **Framer Motion** (`m.*` only — never `motion.*`, see `lazy-motion-provider.tsx`).

### Five rules

1. **One signature moment per section.** Never identical fade-ins everywhere.
2. **Prefer reduced motion always.** `MotionConfig` switches to `reducedMotion="always"` when the user has the OS preference set, and `globals.css` short-circuits CSS animations.
3. **Easing is `[0.22, 1, 0.36, 1]`** for entrances. It feels confident without being snappy.
4. **Magnetic hover only on primary CTAs.** Don't sprinkle it.
5. **Scroll-linked transforms over scroll-triggered fades** wherever a sense of "this is alive" is wanted (hero parallax, work zoom, process rail).

### Section signature moves

| Section | Signature |
|---|---|
| Hero | Word-by-word clip-reveal + cursor spotlight + parallax product stack |
| Marquee | Two infinite rows scrolling opposite, edge fade-mask, pause on hover |
| Services | `layoutId` pill on the audience toggle + image fade-in on tile hover |
| Process | Vertical brand-gradient progress rail tied to scroll |
| Work | Subtle scroll-linked image zoom-out (`scale 1.08 → 1`) |
| Stats | `useInView` triggered count-up on enter |
| Testimonial | Giant quotation glyph with parallax `y` |
| Final CTA | Two drifting blurred blobs over the gradient panel |

### Timing budget

- Page entrance: 600–900ms total before user can scroll.
- Section reveals: 600–800ms each, never staggered beyond 0.6s total.
- Hover transitions: 200–300ms.
- Marquee duration: 40s (left), 50s (right) — slightly different so they don't visually sync.

---

## Iconography

[Lucide React](https://lucide.dev) only. Stroke `1.5` (default), size `size-4` for inline, `size-5` for tile icons, `size-6` for emphasis. Never mix icon libraries.

---

## Imagery

Hero stack and work strips are the strongest visual real estate — those photos need to be **real**. The `// TODO(client)` comments throughout `lib/content.ts` mark every placeholder. When swapping:

- Use 70–75 quality JPEG / WebP at 2× density.
- Crop tight; let the background do the breathing.
- Prefer photos with one clear subject and brand colours bleeding through.
- Avoid stock-y "diverse team in office" images.

---

## When in doubt

- **Loud or quiet?** Quiet, until exactly the moment you need to be loud (hero word three, final CTA, magenta CTAs).
- **Gradient or solid?** Solid magenta. The gradient is reserved.
- **Motion or no motion?** No motion. Then ask if there's an interaction worth marking. Then pick the smallest motion that marks it.
