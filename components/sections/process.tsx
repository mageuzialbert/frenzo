"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/content";
import { FadeUp } from "@/components/motion/reveal";

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Progress rail height
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-labelledby="process-heading"
      className="relative bg-ink text-paper"
    >
      <div className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-eyebrow uppercase text-magenta">Process</p>
            <h2
              id="process-heading"
              className="mt-3 text-balance font-display text-display-2"
            >
              From brief to brand-ready in <span className="text-gradient">4 steps</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-paper/70 md:text-lg">
              We keep the loop tight: fewer meetings, faster proofs, sharper
              prints.
            </p>
          </FadeUp>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Vertical progress rail */}
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-paper/15 md:left-1/2 md:block"
          >
            <m.div
              style={{ height: railHeight }}
              className="w-full bg-brand-gradient origin-top"
            />
          </div>

          <ol className="space-y-24 md:space-y-40">
            {PROCESS.map((step, i) => (
              <Step key={step.n} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof PROCESS)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.35, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  const reversed = index % 2 === 1;

  return (
    <m.li
      ref={ref}
      style={{ opacity, scale }}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
    >
      <div className={reversed ? "md:order-2" : ""}>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-7xl tracking-tight text-magenta md:text-8xl">
            {step.n}
          </span>
          <h3 className="font-display text-3xl tracking-tight md:text-4xl">
            {step.title}
          </h3>
        </div>
        <p className="mt-5 max-w-md text-pretty text-paper/70 md:text-lg">
          {step.body}
        </p>
      </div>

      <div className={reversed ? "md:order-1" : ""}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-paper/10 bg-paper/5">
          {/* TODO(client): swap with your in-house process photography */}
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>
      </div>
    </m.li>
  );
}
