"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES_BUSINESS, SERVICES_NGO, type ServiceTile } from "@/lib/content";
import { FadeUp } from "@/components/motion/reveal";

type Track = "business" | "ngo";

export function Services() {
  const [track, setTrack] = useState<Track>("business");
  const tiles = track === "business" ? SERVICES_BUSINESS : SERVICES_NGO;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 md:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-eyebrow uppercase text-magenta">Services</p>
            <h2
              id="services-heading"
              className="mt-3 text-balance font-display text-display-2 text-ink"
            >
              Two tracks. <span className="text-gradient">One press.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-ink/65 md:text-lg">
              Whether you&rsquo;re building a brand or running a campaign,
              we&rsquo;ve calibrated for both worlds.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-8 inline-flex">
            <TrackToggle value={track} onChange={setTrack} />
          </FadeUp>
        </div>

        <AnimatePresence mode="wait">
          <m.div
            key={track}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 md:mt-16 md:auto-rows-[200px] md:grid-cols-6 md:gap-5"
          >
            {tiles.map((t, i) => (
              <BentoTile key={t.title} tile={t} index={i} />
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TrackToggle({
  value,
  onChange,
}: {
  value: Track;
  onChange: (t: Track) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Service track"
      className="relative inline-flex rounded-full border border-ink/10 bg-paper p-1 shadow-sm"
    >
      {(
        [
          { id: "business", label: "For businesses" },
          { id: "ngo", label: "For NGOs & co-operates" },
        ] as { id: Track; label: string }[]
      ).map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.id)}
            className={cn(
              "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active ? "text-paper" : "text-ink/65 hover:text-ink"
            )}
          >
            {active && (
              <m.span
                layoutId="track-pill"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-ink"
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function spanClass(span: ServiceTile["span"]) {
  // Bento sizing — varied row/col spans for visual rhythm.
  switch (span) {
    case "wide":
      return "md:col-span-3 md:row-span-1";
    case "tall":
      return "md:col-span-2 md:row-span-2";
    case "lg":
      return "md:col-span-3 md:row-span-2";
    default:
      return "md:col-span-2 md:row-span-1";
  }
}

function BentoTile({ tile, index }: { tile: ServiceTile; index: number }) {
  const Icon = tile.icon;
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border border-ink/10 bg-paper p-5 transition-all hover:border-ink/20",
        spanClass(tile.span)
      )}
      data-cursor="grow"
    >
      {tile.image && (
        <>
          <Image
            src={tile.image}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="absolute inset-0 -z-10 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </>
      )}

      {tile.badge && (
        <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-magenta px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
          {tile.badge}
        </span>
      )}

      <div className="flex h-full flex-col justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-magenta/10 text-magenta transition-colors group-hover:bg-paper/90 group-hover:text-magenta">
          <Icon className="size-5" />
        </div>

        <div className="space-y-1.5 transition-colors group-hover:text-paper">
          <h3 className="font-display text-2xl tracking-tight md:text-[26px]">
            {tile.title}
          </h3>
          <p className="text-sm text-ink/65 transition-colors group-hover:text-paper/85">
            {tile.blurb}
          </p>

          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 opacity-0 transition-all hover:underline group-hover:opacity-100 group-hover:text-paper"
          >
            Request quote <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </m.div>
  );
}
