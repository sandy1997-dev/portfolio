"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SERVICES = [
  {
    num: "01",
    icon: "⚡",
    title: "Full-Stack Development",
    desc: "End-to-end MERN applications — from database schema design to polished frontend UI. I build scalable, maintainable, and well-tested systems.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    num: "02",
    icon: "🎨",
    title: "UI/UX Engineering",
    desc: "Translating Figma designs into pixel-perfect, accessible, and performant React interfaces with buttery-smooth animations.",
    tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
  },
  {
    num: "03",
    icon: "🚀",
    title: "API Development",
    desc: "RESTful & GraphQL APIs with proper authentication, rate-limiting, caching, validation and comprehensive documentation.",
    tags: ["REST", "GraphQL", "JWT", "Redis"],
  },
  {
    num: "04",
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Deployment pipelines with Docker, GitHub Actions CI/CD, and cloud hosting on AWS or Vercel with monitoring and logging.",
    tags: ["Docker", "AWS", "GitHub Actions", "Vercel"],
  },
  {
    num: "05",
    icon: "🔍",
    title: "Code Review & Audit",
    desc: "In-depth code reviews, performance audits, and refactoring legacy codebases for better maintainability and developer experience.",
    tags: ["Code Quality", "Performance", "Security", "DX"],
  },
  {
    num: "06",
    icon: "🤝",
    title: "Technical Consulting",
    desc: "Architecture advice, tech stack selection, and guidance for early-stage startups and teams looking to scale their product.",
    tags: ["Architecture", "Consulting", "Strategy"],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="services" className="bg-dark px-6 md:px-[5vw] py-28 md:py-36" ref={ref}>
      {/* Header */}
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-accent">
          03 — What I Do
        </span>
        <div className="w-12 h-px bg-border" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.num}
            className="bg-card p-8 md:p-10 relative group hover:bg-dark transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: i * 0.08 + 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Number */}
            <span className="absolute top-8 right-8 font-display italic text-[0.65rem] text-border">
              {service.num}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 text-xl group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-xl tracking-tight mb-4 text-cream" style={{ letterSpacing: "-0.02em" }}>
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-[0.83rem] leading-[1.85] mb-6">
              {service.desc}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6rem] tracking-[0.08em] uppercase text-muted border border-border px-2 py-1 group-hover:border-accent/30 group-hover:text-accent/70 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
