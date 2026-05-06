"use client";

import { CLIENTS } from "@/lib/content";
import { FadeUp } from "@/components/motion/reveal";

// Distinct typographic flavours per client to read like a logo wall.
const FONTS = [
  "font-display tracking-tight",
  "font-display italic tracking-tight",
  "font-mono tracking-tighter uppercase text-sm",
  "font-display font-light tracking-wide uppercase",
  "font-sans font-bold tracking-tight",
  "font-display font-extrabold tracking-tight",
  "font-sans tracking-[0.2em] uppercase text-sm",
  "font-display italic font-light tracking-wide",
];

export function Marquee() {
  // Split clients into two rows
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = [...CLIENTS.slice(0, half), ...CLIENTS.slice(0, half)];
  const row2 = [...CLIENTS.slice(half), ...CLIENTS.slice(half)];

  return (
    <section
      aria-labelledby="clients-heading"
      className="relative border-y border-ink/5 bg-paper-warm py-20 md:py-28"
    >
      <div className="container">
        <FadeUp>
          <p className="text-eyebrow uppercase text-magenta">Clientele</p>
          <h2
            id="clients-heading"
            className="mt-3 max-w-2xl text-balance font-display text-display-3 text-ink"
          >
            Brands &amp; organizations we&rsquo;ve printed for.
          </h2>
        </FadeUp>
      </div>

      <div className="mt-14 space-y-6 md:mt-20 md:space-y-10">
        <Row items={row1} direction="left" fonts={FONTS} />
        <Row items={row2} direction="right" fonts={FONTS} />
      </div>
    </section>
  );
}

function Row({
  items,
  direction,
  fonts,
}: {
  items: string[];
  direction: "left" | "right";
  fonts: string[];
}) {
  return (
    <div className="group mask-fade-x overflow-hidden">
      <div
        className={
          direction === "left"
            ? "flex w-max animate-marquee-x gap-12 group-hover:[animation-play-state:paused] md:gap-20"
            : "flex w-max animate-marquee-x-reverse gap-12 group-hover:[animation-play-state:paused] md:gap-20"
        }
      >
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className={`shrink-0 select-none text-2xl text-ink/75 transition-colors hover:text-ink md:text-3xl ${fonts[i % fonts.length]}`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
