"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Desktop-only blended cursor. Disabled on touch / reduced-motion.
 * Grows over [data-cursor="grow"] / interactive elements.
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 32, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive =
        target.closest("a, button, [data-cursor='grow'], input, textarea, [role='button']") !== null;
      setGrow(interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <m.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta mix-blend-multiply will-change-transform"
        animate={{
          width: grow ? 56 : 14,
          height: grow ? 56 : 14,
          opacity: grow ? 0.65 : 0.85,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </m.div>
  );
}
