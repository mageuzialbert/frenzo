"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { m, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BRAND } from "@/lib/content";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-300",
        scrolled
          ? "border-b border-ink/10 bg-paper/70 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/55"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-1.5 text-lg font-semibold tracking-tight"
          aria-label={`${BRAND.short} — home`}
        >
          <span className="font-display text-xl tracking-tight">Frenzo</span>
          <span
            className="inline-block size-2 rounded-full bg-magenta transition-transform duration-500 group-hover:scale-150 group-hover:rotate-90"
            aria-hidden
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnetic strength={0.25}>
            <Button asChild variant="primary" size="default">
              <Link href="/contact">Get a quote</Link>
            </Button>
          </Magnetic>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-ink/10 bg-paper md:hidden"
          >
            <div className="container flex flex-col py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="primary" className="mt-3">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get a quote
                </Link>
              </Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
