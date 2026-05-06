"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIAL } from "@/lib/content";

export function Testimonial() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      aria-labelledby="testimonial-heading"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <m.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[40vw] font-bold leading-none tracking-tighter text-magenta/5 md:text-[28vw]"
      >
        “
      </m.div>

      <h2 id="testimonial-heading" className="sr-only">
        Client testimonial
      </h2>

      <div className="container max-w-4xl text-center">
        <Quote className="mx-auto size-8 text-magenta" />
        <m.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-balance font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl lg:text-[56px]"
        >
          &ldquo;{TESTIMONIAL.quote}&rdquo;
        </m.blockquote>

        <m.figcaption
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-ink/60"
        >
          <span className="font-medium text-ink">{TESTIMONIAL.author}</span>
          {" · "}
          {TESTIMONIAL.org}
          {/* TODO(client): replace with a real attributed quote when collected */}
        </m.figcaption>
      </div>
    </section>
  );
}
