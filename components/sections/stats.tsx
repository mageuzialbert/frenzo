"use client";

import { STATS } from "@/lib/content";
import { CountUp } from "@/components/motion/count-up";
import { FadeUp } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative bg-paper-warm py-20 md:py-28"
    >
      <div className="container">
        <h2 id="stats-heading" className="sr-only">
          By the numbers
        </h2>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06} className="text-center md:text-left">
              <div className="font-display text-5xl tracking-tight text-ink md:text-7xl lg:text-[80px]">
                <CountUp to={s.value} className="tabular-nums" />
                <span className="text-magenta">{s.suffix}</span>
              </div>
              <p className="mt-3 text-sm text-ink/65 md:text-base">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
