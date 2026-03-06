"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
      className="relative min-h-screen flex flex-col px-6 md:px-[5vw] pt-28 pb-16 overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.015) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      {/* Ghost text — decorative only, fully clipped behind content */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
        style={{ height: "40%" }}
      >
        <div
          className="font-display font-black text-transparent absolute bottom-[-1vw] left-[-1vw] whitespace-nowrap"
          style={{
            fontSize: "clamp(4rem, 16vw, 19rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.025)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          DEVELOPER
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col flex-1">

        {/* Top spacer */}
        <div className="flex-1 flex flex-col justify-center min-h-0">

          {/* Availability badge */}
          {ready && (
            <motion.div
              className="flex items-center gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="w-10 h-px bg-accent flex-shrink-0" />
              <span className="text-[0.7rem] tracking-[0.2em] uppercase text-accent">
                ● Available for freelance work
              </span>
            </motion.div>
          )}

          {/* Title lines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            className="mb-12"
          >
            {/* Line 1 */}
            <div className="overflow-hidden leading-none mb-2">
              <motion.h1
                variants={lineVariants}
                className="font-display font-black"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 8.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "0.95",
                  color: "#f0ede8",
                }}
              >
                Design-<em style={{ fontStyle: "italic", color: "#c8ff00" }}>Minded</em>
              </motion.h1>
            </div>

            {/* Line 2 — outline */}
            <div className="overflow-hidden leading-none mb-2">
              <motion.h1
                variants={lineVariants}
                className="font-display font-black"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 8.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "0.95",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(240,237,232,0.22)",
                }}
              >
                Full-Stack
              </motion.h1>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden leading-none">
              <motion.h1
                variants={lineVariants}
                className="font-display font-black"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 8.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "0.95",
                  color: "#f0ede8",
                }}
              >
                Developer.
              </motion.h1>
            </div>
          </motion.div>

          {/* Description + CTAs */}
          {ready && (
            <motion.div
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
            >
              <motion.p
                variants={fadeIn}
                className="max-w-md text-muted text-[0.92rem] leading-[1.85]"
              >
                I&apos;m a{" "}
                <span className="text-cream font-medium">MERN stack developer</span>{" "}
                who crafts thoughtful, accessible, and pixel-perfect digital
                experiences — from REST APIs to polished React UIs.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex items-center gap-6 flex-shrink-0"
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

        {/* ── BOTTOM ROW: scroll indicator + stats — always in flow, never absolute ── */}
        {ready && (
          <motion.div
            className="flex items-end justify-between mt-14 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {/* Scroll indicator */}
            <div className="flex items-center gap-3">
              <div
                className="w-px bg-gradient-to-b from-transparent to-muted"
                style={{ height: 52 }}
              />
              <span
                className="text-muted text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                Scroll
              </span>
            </div>

            {/* Stats — desktop only */}
            <div className="hidden md:flex items-end gap-10">
              {[
                { num: "1+", label: "Years Exp." },
                { num: "10+", label: "Projects" },
                { num: "8+", label: "Clients" },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  className="text-right"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1, duration: 0.7 }}
                >
                  <div className="font-display font-black text-2xl text-accent leading-none tracking-tight">
                    {num}
                  </div>
                  <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted mt-1.5">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}