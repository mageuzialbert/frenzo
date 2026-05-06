"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Wrap the app once. We use domAnimation (smaller) instead of domMax,
 * and respect prefers-reduced-motion via MotionConfig.
 */
export function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={reduced ? "always" : "never"}
        transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.8 }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
