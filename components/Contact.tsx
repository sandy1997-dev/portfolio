"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Resend, Formspree)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  });

  return (
    <section id="contact" className="bg-black px-6 md:px-[5vw] py-28 md:py-36" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <div>
          <motion.div className="flex items-center gap-4 mb-10" {...fadeUp(0)}>
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-accent">
              04 — Contact
            </span>
            <div className="w-12 h-px bg-border" />
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              className="font-display font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", letterSpacing: "-0.04em" }}
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              Let&apos;s Build
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="font-display font-black italic text-accent tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", letterSpacing: "-0.04em" }}
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              Something Great.
            </motion.h2>
          </div>

          <motion.p className="text-muted text-[0.92rem] leading-[1.85] mb-10 max-w-sm" {...fadeUp(0.3)}>
            Have a project in mind? Looking for a developer to join your team?
            Or just want to say hello — my inbox is always open.
          </motion.p>

          <motion.a
            href="mailto:hello@yourname.dev"
            className="group block font-display font-bold text-cream border-b border-border pb-4 mb-2 hover:text-accent hover:border-accent transition-all duration-300"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.6rem)", letterSpacing: "-0.02em" }}
            {...fadeUp(0.4)}
          >
            <span className="inline-flex items-center gap-3">
              hello@yourname.dev
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-0 group-hover:opacity-100"
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
            </span>
          </motion.a>

          {/* Socials */}
          <motion.div className="flex flex-wrap gap-6 mt-10" {...fadeUp(0.5)}>
            {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
              <a
                key={s}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          {...fadeUp(0.25)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-[0.62rem] tracking-[0.2em] uppercase text-muted">
              Your Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Smith"
              required
              className="bg-card border border-border px-5 py-4 text-cream text-[0.9rem] outline-none focus:border-accent transition-colors duration-200 placeholder:text-border font-body"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.62rem] tracking-[0.2em] uppercase text-muted">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@example.com"
              required
              className="bg-card border border-border px-5 py-4 text-cream text-[0.9rem] outline-none focus:border-accent transition-colors duration-200 placeholder:text-border font-body"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.62rem] tracking-[0.2em] uppercase text-muted">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              required
              rows={6}
              className="bg-card border border-border px-5 py-4 text-cream text-[0.9rem] outline-none focus:border-accent transition-colors duration-200 placeholder:text-border resize-none font-body"
            />
          </div>

          <button
            type="submit"
            className="btn-fill self-start bg-accent text-black font-body font-semibold text-[0.78rem] tracking-[0.12em] uppercase px-8 py-4 hover:text-accent transition-colors duration-300"
          >
            <span>{sent ? "Message Sent ✓" : "Send Message ↗"}</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
