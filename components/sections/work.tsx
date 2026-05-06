"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/content";
import { FadeUp } from "@/components/motion/reveal";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative py-24 md:py-32"
    >
      <div className="container">
        <FadeUp>
          <p className="text-eyebrow uppercase text-magenta">Featured work</p>
          <h2
            id="work-heading"
            className="mt-3 max-w-3xl text-balance font-display text-display-2 text-ink"
          >
            Recent jobs we&rsquo;re proud of.
          </h2>
        </FadeUp>

        <div className="mt-14 space-y-6 md:mt-20 md:space-y-8">
          {WORK.map((w, i) => (
            <WorkStrip key={w.title} item={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkStrip({
  item,
  index,
}: {
  item: (typeof WORK)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative isolate overflow-hidden rounded-[28px] border border-ink/10"
      data-cursor="grow"
    >
      <m.div style={{ scale, y }} className="aspect-[16/9] md:aspect-[16/7]">
        {/* TODO(client): swap each image for actual case-study photography */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 90vw, 100vw"
          className="object-cover"
        />
      </m.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
      />

      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 md:inset-x-10 md:bottom-10">
        <div className="text-paper">
          <p className="font-display text-2xl tracking-tight md:text-3xl lg:text-4xl">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-paper/75 md:text-base">
            {item.subtitle}
          </p>
          <ul className="mt-4 hidden flex-wrap gap-2 md:flex">
            {item.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-paper/25 px-3 py-1 text-xs text-paper/85"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex size-12 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:rotate-45 md:size-14">
          <ArrowUpRight className="size-5" />
        </div>
      </div>
    </m.div>
  );
}
