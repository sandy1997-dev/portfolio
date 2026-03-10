"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const data = await res.json();
        console.error("Error:", data.error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: {
      duration: 0.9,
      delay,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  });

  const inputClass =
    "bg-card border border-border px-5 py-4 text-cream text-[0.9rem] outline-none focus:border-accent transition-colors duration-200 placeholder:text-muted/40 font-body w-full";

  const labelClass = "text-[0.62rem] tracking-[0.2em] uppercase text-muted";

  return (
    <section id="contact" className="bg-black px-6 md:px-[5vw] py-28 md:py-36" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── LEFT ── */}
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

          <motion.p
            className="text-muted text-[0.92rem] leading-[1.85] mb-10 max-w-sm"
            {...fadeUp(0.3)}
          >
            Have a project in mind? Looking for a developer to join your team?
            Or just want to say hello — my inbox is always open.
          </motion.p>

          <motion.a
            href="mailto:sandeepkumar.pati1997@gmail.com"
            className="group block font-display font-bold text-cream border-b border-border pb-4 mb-2 hover:text-accent hover:border-accent transition-all duration-300 break-all"
            style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.2rem)", letterSpacing: "-0.01em" }}
            {...fadeUp(0.4)}
          >
            <span className="inline-flex items-center gap-3 flex-wrap">
              sandeepkumar.pati1997@gmail.com
              <svg
                className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
            {[
              { label: "GitHub", href: "https://github.com/sandy1997-dev" },
              { label: "LinkedIn", href: "www.linkedin.com/in/sandeep-kumar-pati-b49976189" },
              { label: "X", href: "https://x.com/KumarSande7673" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] tracking-[0.14em] uppercase text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <motion.div {...fadeUp(0.25)}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Sandeep Kumar"
                required
                disabled={status === "sending"}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                disabled={status === "sending"}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                rows={6}
                disabled={status === "sending"}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`btn-fill self-start font-body font-semibold text-[0.78rem] tracking-[0.12em] uppercase px-8 py-4 transition-all duration-300 disabled:cursor-not-allowed ${
                status === "sent"
                  ? "bg-accent text-black"
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : status === "sending"
                  ? "bg-accent/50 text-black"
                  : "bg-accent text-black hover:text-accent"
              }`}
            >
              <span>
                {status === "sending" && "⏳ Sending..."}
                {status === "sent"    && "✓ Message Sent!"}
                {status === "error"   && "✕ Failed — Retry"}
                {status === "idle"    && "Send Message ↗"}
              </span>
            </button>

            {/* Success */}
            {status === "sent" && (
              <motion.div
                className="flex items-start gap-3 p-4 border border-accent/30 bg-accent/5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-accent text-lg leading-none">✓</span>
                <div>
                  <p className="text-cream text-[0.85rem] font-medium mb-0.5">
                    Message sent successfully!
                  </p>
                  <p className="text-muted text-[0.78rem]">
                    I&apos;ll get back to you at your email within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error */}
            {status === "error" && (
              <motion.div
                className="flex items-start gap-3 p-4 border border-red-500/30 bg-red-500/5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-red-400 text-lg leading-none">✕</span>
                <div>
                  <p className="text-cream text-[0.85rem] font-medium mb-0.5">
                    Something went wrong.
                  </p>
                  <p className="text-muted text-[0.78rem]">
                    Email me directly at{" "}
                    <a
                      href="mailto:sandeepkumar.pati1997@gmail.com"
                      className="text-accent underline"
                    >
                      sandeepkumar.pati1997@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
