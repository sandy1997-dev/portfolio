"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-[5vw] py-5 md:py-6 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-cream hover:text-accent transition-colors duration-200"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Sandeep<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => scrollTo(href)}
                className="text-[0.7rem] tracking-[0.18em] uppercase text-muted hover:text-cream transition-colors duration-200"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="/SANDEEP KUMAR PATI CV NEW.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[0.7rem] tracking-[0.12em] uppercase bg-cream text-black px-5 py-2.5 font-semibold hover:bg-accent transition-colors duration-200"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-4 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[150] bg-black flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollTo(href)}
                  className="font-display text-5xl font-black text-cream hover:text-accent transition-colors duration-200 tracking-tight"
                >
                  {label}
                </button>
              </motion.div>
            ))}
            <motion.a
              href="/resume.pdf"
              className="mt-4 text-sm tracking-widest uppercase text-muted border border-border px-8 py-3 hover:border-accent hover:text-accent transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
