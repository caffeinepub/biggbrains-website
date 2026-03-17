const row1 = [
  { label: "React", color: "#61dafb", id: "react" },
  { label: "TypeScript", color: "#3178c6", id: "typescript" },
  { label: "Figma", color: "#a259ff", id: "figma" },
  { label: "Tailwind CSS", color: "#38bdf8", id: "tailwind" },
  { label: "Node.js", color: "#68a063", id: "nodejs" },
  { label: "Framer Motion", color: "#ff0080", id: "framer" },
  { label: "Vite", color: "#bd34fe", id: "vite" },
  { label: "Next.js", color: "#ffffff", id: "nextjs" },
  { label: "GraphQL", color: "#e535ab", id: "graphql" },
  { label: "Storybook", color: "#ff4785", id: "storybook" },
];

const row2 = [
  { label: "Vercel", color: "#ffffff", id: "vercel" },
  { label: "PostgreSQL", color: "#336791", id: "postgres" },
  { label: "Stripe", color: "#6772e5", id: "stripe" },
  { label: "Three.js", color: "#49ef4f", id: "threejs" },
  { label: "Docker", color: "#2496ed", id: "docker" },
  { label: "GitHub", color: "#ffffff", id: "github" },
  { label: "Notion", color: "#ffffff", id: "notion" },
  { label: "Linear", color: "#5e6ad2", id: "linear" },
  { label: "Lottie", color: "#00ddb3", id: "lottie" },
  { label: "Webflow", color: "#4353ff", id: "webflow" },
];

function Chip({ label, color }: { label: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-card/40 text-sm font-medium text-foreground/80 whitespace-nowrap flex-shrink-0">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

export default function TechMarquee() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-8 overflow-hidden" aria-label="Technologies we use">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Technologies We Use
        </span>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="relative overflow-hidden mb-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-3 animate-marquee">
          {doubled1.map((chip, i) => (
            <Chip
              key={`${chip.id}-${i}`}
              label={chip.label}
              color={chip.color}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-3 animate-marquee-reverse">
          {doubled2.map((chip, i) => (
            <Chip
              key={`${chip.id}-${i}`}
              label={chip.label}
              color={chip.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
