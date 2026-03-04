"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TITLE_LINES = ["Design-Minded", "Full-Stack", "Developer."];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for loader to finish
    const timer = setTimeout(() => setReady(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-[5vw] pt-28 pb-16 overflow-hidden"
    >
      {/* Background ghost text */}
      <div
        className="absolute bottom-[-3vw] left-[-1vw] font-display font-black text-transparent pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: "clamp(5rem, 18vw, 22rem)",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        DEVELOPER
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.02) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Availability badge */}
        {ready && (
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-10 h-px bg-accent" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-accent animate-blink">
              ● Available for freelance work
            </span>
          </motion.div>
        )}

        {/* Main title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          className="mb-12"
        >
          {TITLE_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <motion.h1
                variants={lineVariants}
                className="font-display font-black tracking-tight"
                style={{
                  fontSize: "clamp(3.2rem, 9vw, 9.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "0.92",
                  color: i === 1 ? "transparent" : "#f0ede8",
                  WebkitTextStroke: i === 1 ? "1px rgba(240,237,232,0.35)" : "none",
                }}
              >
                {i === 0 ? (
                  <>Design-<em className="italic text-accent not-italic">Minded</em></>
                ) : (
                  line
                )}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Bottom row */}
        {ready && (
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
          >
            <motion.p
              variants={fadeIn}
              className="max-w-sm text-muted text-[0.92rem] leading-[1.85]"
            >
              I&apos;m a{" "}
              <span className="text-cream font-medium">MERN stack developer</span>{" "}
              who crafts thoughtful, accessible, and pixel-perfect digital
              experiences — from REST APIs to polished React UIs.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex items-center gap-6"
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="group flex items-center gap-3 text-[0.75rem] tracking-[0.12em] uppercase text-cream pb-2 border-b border-border hover:border-accent hover:text-accent transition-all duration-300"
              >
                View My Work
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="text-[0.75rem] tracking-[0.12em] uppercase text-muted hover:text-cream transition-colors duration-200 pb-2 border-b border-transparent hover:border-muted"
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {ready && (
        <motion.div
          className="absolute bottom-10 left-6 md:left-[5vw] flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div
            className="w-px bg-gradient-to-b from-transparent to-muted"
            style={{ height: 60 }}
          />
          <span
            className="text-muted text-[0.6rem] tracking-[0.2em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </motion.div>
      )}

      {/* Stats — desktop only */}
      {ready && (
        <motion.div
          className="absolute bottom-10 right-6 md:right-[5vw] hidden md:flex flex-col gap-6 text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "25+", label: "Projects Built" },
            { num: "15+", label: "Happy Clients" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-black text-3xl text-accent leading-none tracking-tight">
                {num}
              </div>
              <div className="text-[0.62rem] tracking-[0.12em] uppercase text-muted mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
