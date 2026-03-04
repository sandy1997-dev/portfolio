"use client";

const TECHS = [
  { name: "React.js", highlight: false },
  { name: "Node.js", highlight: false },
  { name: "MongoDB", highlight: true },
  { name: "Express.js", highlight: false },
  { name: "Next.js", highlight: false },
  { name: "TypeScript", highlight: true },
  { name: "GraphQL", highlight: false },
  { name: "REST APIs", highlight: false },
  { name: "Tailwind CSS", highlight: true },
  { name: "Docker", highlight: false },
  { name: "Redis", highlight: false },
  { name: "AWS", highlight: true },
];

export default function Marquee() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <div className="border-y border-border bg-dark overflow-hidden py-5">
      <div className="marquee-track flex items-center">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-8 px-6 shrink-0">
            <span
              className={`font-display font-bold text-base tracking-tight whitespace-nowrap ${
                tech.highlight ? "text-accent" : "text-muted"
              }`}
            >
              {tech.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
