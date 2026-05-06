"use client";

import Link from "next/link";
import Image from "next/image";
import { m, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Star, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { WordReveal } from "@/components/motion/reveal";
import { TRUST } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });

  const spotX = useTransform(smx, (v) => `${v * 100}%`);
  const spotY = useTransform(smy, (v) => `${v * 100}%`);

  // Parallax on the floating product cards (scroll-linked)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotCard1 = useTransform(scrollYProgress, [0, 1], [-6, -10]);
  const rotCard2 = useTransform(scrollYProgress, [0, 1], [4, 12]);
  const rotCard3 = useTransform(scrollYProgress, [0, 1], [-2, -6]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-28 md:pt-36"
    >
      {/* Conic gradient blob — slow rotate */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 size-[140vmin] -translate-x-1/2 animate-spin-slow rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(229,9,127,0.22), rgba(109,40,217,0.18), rgba(6,182,212,0.12), rgba(229,9,127,0.22))",
        }}
      />
      {/* Cursor spotlight */}
      <m.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: useTransform(
            [spotX, spotY] as any,
            ([sx, sy]: any) =>
              `radial-gradient(420px circle at ${sx} ${sy}, rgba(229,9,127,0.18), transparent 60%)`
          ),
        }}
      />
      {/* Subtle noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.07]"
      />

      <div className="container grid items-center gap-12 pb-24 md:pb-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/60 px-3 py-1.5 text-xs font-medium text-ink/70 backdrop-blur"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-magenta" />
            </span>
            Studio open · Magomeni Mapipa, Dar es Salaam
          </m.div>

          <h1
            id="hero-heading"
            className="font-display text-display-1 text-ink"
          >
            <span className="block">
              <WordReveal text="Print." delay={0.05} />
            </span>
            <span className="block">
              <WordReveal text="Brand." delay={0.25} />
            </span>
            <span className="block text-gradient">
              <WordReveal text="Promote." delay={0.45} />
            </span>
          </h1>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 max-w-xl text-balance text-base text-ink/70 md:text-lg"
          >
            Dar es Salaam&rsquo;s print partner for ambitious businesses and
            mission-driven NGOs. From a single business card to a full event
            roll-out — we handle every step in-house.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.3}>
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  Start a project <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild variant="outline" size="lg">
              <Link href="#work">See our work</Link>
            </Button>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink/60"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-magenta" aria-hidden />
              {TRUST.customers}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 fill-magenta text-magenta" /> {TRUST.google}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Instagram className="size-3.5 text-magenta" /> {TRUST.instagram}
            </span>
          </m.div>
        </div>

        {/* Floating product stack */}
        <div className="relative h-[420px] w-full lg:col-span-5 lg:h-[560px]">
          <FloatingCard
            y={yCard1}
            rot={rotCard1}
            className="left-0 top-8 z-10 w-[58%]"
            delay={0.6}
            label="Business cards"
            // TODO(client): swap for your own product photography
            src="https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?auto=format&fit=crop&w=900&q=70"
          />
          <FloatingCard
            y={yCard2}
            rot={rotCard2}
            className="right-0 top-32 z-20 w-[60%]"
            delay={0.8}
            label="Branded apparel"
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
          />
          <FloatingCard
            y={yCard3}
            rot={rotCard3}
            className="bottom-0 left-8 z-30 w-[64%]"
            delay={1}
            label="Event branding"
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=75"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  y,
  rot,
  className = "",
  delay = 0,
  label,
  src,
}: {
  y: any;
  rot: any;
  className?: string;
  delay?: number;
  label: string;
  src: string;
}) {
  return (
    <m.div
      style={{ y, rotate: rot }}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute aspect-[5/6] overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_30px_80px_-20px_rgba(10,10,15,0.3)] ${className}`}
    >
      <Image
        src={src}
        alt={label}
        width={900}
        height={1080}
        sizes="(min-width: 1024px) 30vw, 60vw"
        className="h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-paper/85 px-3 py-1.5 backdrop-blur-md">
        <span className="text-xs font-medium tracking-tight text-ink">
          {label}
        </span>
        <span
          className="size-1.5 rounded-full bg-magenta"
          aria-hidden
        />
      </div>
    </m.div>
  );
}
