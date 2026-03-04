"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind / SCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js / Express", "MongoDB / Mongoose", "REST & GraphQL", "JWT / OAuth"],
  },
  {
    category: "DevOps",
    items: ["Docker / Compose", "GitHub Actions", "Vercel / Railway", "AWS (EC2, S3)"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Postman / Insomnia", "Figma", "VS Code"],
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: i * 0.12, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  return (
    <section id="about" className="bg-dark px-6 md:px-[5vw] py-28 md:py-36" ref={ref}>
      {/* Section header */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-accent">
          01 — About
        </span>
        <div className="w-12 h-px bg-border" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: text + skills */}
        <div>
          <div className="space-y-5 mb-12">
            {[
              <>
                Hey! I&apos;m{" "}
                <strong className="text-cream font-medium">Your Name</strong>, a
                passionate MERN stack developer who believes great software lives
                at the intersection of{" "}
                <strong className="text-cream font-medium">clean code</strong> and{" "}
                <strong className="text-cream font-medium">thoughtful design</strong>.
              </>,
              <>
                With <strong className="text-cream font-medium">3+ years</strong>{" "}
                of experience building full-stack applications, I&apos;ve shipped
                SaaS platforms, e-commerce systems, real-time apps, and developer
                tools — always focused on performance, scalability, and UX.
              </>,
              <>
                When I&apos;m not building, I&apos;m contributing to open-source,
                exploring design trends, or mentoring upcoming developers in my
                community.
              </>,
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-muted text-[0.95rem] leading-[1.9]"
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-2 border-t border-border"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {SKILLS.map(({ category, items }, i) => (
              <div
                key={category}
                className={`py-6 border-b border-border ${
                  i % 2 === 0
                    ? "pr-6 border-r border-border"
                    : "pl-6"
                }`}
              >
                <h4 className="text-[0.62rem] tracking-[0.22em] uppercase text-accent mb-3">
                  {category}
                </h4>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-muted text-[0.82rem] leading-loose hover:text-cream transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: image frame */}
        <motion.div
          className="relative"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main frame */}
          <div className="relative border border-border bg-card overflow-hidden aspect-[4/5] flex items-center justify-center">
            {/* Replace with <Image> when you have a photo */}
            <span
              className="font-display font-black text-border select-none"
              style={{ fontSize: "clamp(5rem, 10vw, 8rem)", letterSpacing: "-0.05em" }}
            >
              YN
            </span>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,255,0,0.06) 0%, transparent 50%, rgba(255,107,53,0.04) 100%)",
              }}
            />

            {/* Location tag */}
            <div className="absolute bottom-5 left-5 bg-black border border-border px-4 py-2 text-[0.7rem] tracking-[0.08em] text-muted">
              Based in{" "}
              <strong className="text-accent font-medium">Your City, Country</strong>
            </div>

            {/* Experience badge */}
            <div className="absolute top-5 right-5 bg-accent text-black text-[0.65rem] tracking-[0.1em] font-bold uppercase px-3 py-1.5">
              3+ Yrs
            </div>
          </div>

          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-border pointer-events-none -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
