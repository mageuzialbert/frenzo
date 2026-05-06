"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { CONTACT } from "@/lib/content";
import { FadeUp } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-[36px] bg-brand-gradient px-6 py-20 text-center text-white md:rounded-[48px] md:px-16 md:py-32">
          {/* Drifting blobs */}
          <m.div
            aria-hidden
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl"
          />
          <m.div
            aria-hidden
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 0.9, 1],
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-24 -right-16 size-96 rounded-full bg-violet-300/30 blur-3xl"
          />

          <FadeUp>
            <p className="text-eyebrow uppercase text-white/80">Ready when you are</p>
            <h2
              id="cta-heading"
              className="mx-auto mt-3 max-w-3xl text-balance font-display text-display-2"
            >
              Let&rsquo;s print something memorable.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-white/85 md:text-lg">
              Send your brief — quotes back within 1 business day, often the same morning.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.3}>
              <Button asChild size="lg" className="bg-ink text-paper hover:bg-ink-soft">
                <Link href="/contact">
                  Start a project <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-ink"
            >
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
