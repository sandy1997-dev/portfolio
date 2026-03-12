"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const PROJECTS = [
  {
    num: "01",
    title: "Shopify-Style E-Commerce",
    desc: "Full-stack MERN store with product management, Stripe payments, cart, orders & admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    year: "2026",
    link: "https://shopmern-ecommerce.vercel.app/",
    github: "https://github.com/sandy1997-dev/shopmern-ecommerce",
  },
  {
    num: "02",
    title: "Real-Time Chat App",
    desc: "Slack-inspired messaging platform with Socket.io, channels, file uploads & push notifications.",
    tags: ["Socket.io", "Express", "React", "JWT"],
    year: "2026",
    link: "https://nexus-chat-chi.vercel.app/",
    github: "https://github.com/sandy1997-dev/nexus-chat",
  },
  {
    num: "03",
    title: "Project Management SaaS",
    desc: "Trello-style task board with drag-and-drop, team collaboration, and analytics dashboard.",
    tags: ["Next.js", "GraphQL", "MongoDB", "Prisma"],
    year: "2026",
    link: "https://projectflow-lime.vercel.app/",
    github: "https://github.com/sandy1997-dev/projectflow",
  },
  {
    num: "04",
    title: "Fintech Dashboard",
    desc: "Personal finance tracker with budget analytics, expense categories, and beautiful D3.js charts.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    year: "2026",
    link: "https://fintech-dashboard-pink.vercel.app/",
    github: "https://github.com/sandy1997-dev/fintech-dashboard",
  },
  {
    num: "05",
    title: "Developer Blog CMS",
    desc: "Headless CMS with Next.js, MDX support, syntax highlighting, and full SEO optimization.",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    year: "2026",
    link: "https://devblog-cms-one.vercel.app/",
    github: "https://github.com/sandy1997-dev/devblog-cms",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-black px-6 md:px-[5vw] py-28 md:py-36" ref={ref}>
      {/* Header */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-accent">
          02 — Projects
        </span>
        <div className="w-12 h-px bg-border" />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-muted text-[0.9rem] leading-relaxed max-w-md mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      >
        A selection of things I&apos;ve built — from startups to side experiments.
        Each crafted with care, curiosity, and a lot of coffee ☕
      </motion.p>

      {/* Projects list */}
      <div>
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.num}
            className="project-row relative border-b border-border group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: i * 0.08 + 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* First row: border-top on first item */}
            {i === 0 && (
              <div className="absolute top-0 left-0 right-0 h-px bg-border" />
            )}

            <div
              className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-7 md:py-8 transition-all duration-400 ${
                hoveredIdx === i ? "md:pl-6" : ""
              }`}
            >
              {/* Number */}
              <span className="font-display italic text-[0.7rem] text-muted w-10 shrink-0">
                {project.num}
              </span>

              {/* Title + desc */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-display font-bold tracking-tight leading-tight mb-1.5 transition-colors duration-300 ${
                    hoveredIdx === i ? "text-accent" : "text-cream"
                  }`}
                  style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.9rem)", letterSpacing: "-0.03em" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted text-[0.8rem] leading-relaxed line-clamp-1 hidden md:block">
                  {project.desc}
                </p>
              </div>

              {/* Tags - desktop */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 border transition-all duration-300 ${
                      hoveredIdx === i
                        ? "border-accent/40 text-accent"
                        : "border-border text-muted"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year */}
              <span className="text-[0.65rem] tracking-[0.12em] text-muted shrink-0 hidden md:block">
                {project.year}
              </span>

              {/* Links */}
              <div className="flex items-center gap-4 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] tracking-[0.1em] uppercase text-muted hover:text-cream transition-colors duration-200 border-b border-transparent hover:border-muted pb-0.5"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[0.65rem] tracking-[0.1em] uppercase pb-0.5 border-b transition-colors duration-200 ${
                    hoveredIdx === i
                      ? "text-accent border-accent"
                      : "text-cream border-cream"
                  }`}
                >
                  Live ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More projects CTA */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="https://github.com/sandy1997-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-[0.72rem] tracking-[0.14em] uppercase text-muted hover:text-cream transition-colors duration-200 border border-border hover:border-accent px-8 py-4"
        >
          View All on GitHub
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
        </a>
      </motion.div>
    </section>
  );
}
