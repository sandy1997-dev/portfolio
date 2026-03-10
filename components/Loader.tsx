"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "Sandeep Kumar Pati";

export default function Loader() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setLoaded(true), 400);
      }
      setProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          id="loader"
          // Using px-6 to ensure content doesn't touch screen edges on tiny devices
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 md:gap-8 bg-black px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Name reveal */}
          {/* Changed whitespace-nowrap and tracking to keep letters together */}
          <div className="flex flex-wrap justify-center gap-[0.02em] overflow-hidden whitespace-nowrap">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                // Responsive font sizes: text-3xl (mobile) -> text-5xl (tablet) -> text-7xl (desktop)
                className="font-display text-3xl sm:text-5xl md:text-7xl font-black text-cream leading-none inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.04, // Slightly faster delay for smoother feel
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          {/* Changed w-48 (fixed) to w-full max-w-[200px] for fluidity */}
          <div className="w-full max-w-[150px] md:max-w-[240px] h-px bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress number */}
          <motion.span
            className="font-body text-[10px] md:text-xs tracking-[0.2em] text-muted uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(progress).toString().padStart(2, "0")} %
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}