import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { end: 150, suffix: "+", label: "Projects Shipped", key: "projects" },
  { end: 98, suffix: "%", label: "Client Satisfaction", key: "satisfaction" },
  { end: 5, suffix: "yr", label: "Experience", key: "experience" },
  { end: 50, suffix: "+", label: "Happy Clients", key: "clients" },
];

const floatingDots = [
  {
    size: 6,
    top: "15%",
    left: "8%",
    right: undefined,
    delay: "0s",
    color: "oklch(0.82 0.2 196 / 0.5)",
    dur: 4,
  },
  {
    size: 10,
    top: "70%",
    left: "5%",
    right: undefined,
    delay: "1.2s",
    color: "oklch(0.75 0.24 312 / 0.45)",
    dur: 4.8,
  },
  {
    size: 5,
    top: "25%",
    left: undefined,
    right: "10%",
    delay: "0.5s",
    color: "oklch(0.82 0.2 196 / 0.55)",
    dur: 5.6,
  },
  {
    size: 8,
    top: "65%",
    left: undefined,
    right: "7%",
    delay: "2s",
    color: "oklch(0.75 0.24 312 / 0.5)",
    dur: 6.4,
  },
  {
    size: 4,
    top: "45%",
    left: "15%",
    right: undefined,
    delay: "0.8s",
    color: "oklch(0.82 0.2 196 / 0.4)",
    dur: 7.2,
  },
  {
    size: 7,
    top: "35%",
    left: undefined,
    right: "20%",
    delay: "1.5s",
    color: "oklch(0.75 0.24 312 / 0.55)",
    dur: 8,
  },
];

function StatItem({
  end,
  suffix,
  label,
  trigger,
  index,
}: {
  end: number;
  suffix: string;
  label: string;
  trigger: boolean;
  index: number;
}) {
  const value = useAnimatedCounter(end, 2, suffix, trigger);
  return (
    <div className="flex flex-col items-center gap-2 group relative">
      {/* Separator line (all but first) */}
      {index > 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      )}
      <span className="text-5xl md:text-6xl font-display font-bold text-gradient tabular-nums leading-none">
        {value}
      </span>
      <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent mt-1 group-hover:via-primary transition-all duration-500" />
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-20 relative overflow-hidden" id="stats">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div
        className="relative py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.08 0.01 262), oklch(0.12 0.02 262) 40%, oklch(0.1 0.015 312) 70%, oklch(0.08 0.01 262))",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.2 196 / 0.15), transparent 70%)",
          }}
        />

        {/* Corner glows */}
        <div
          className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.2 196 / 0.12), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.22 312 / 0.12), transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Floating ambient dots */}
        {floatingDots.map((dot) => (
          <div
            key={dot.delay + dot.size}
            className="absolute rounded-full animate-float pointer-events-none"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              right: dot.right,
              backgroundColor: dot.color,
              boxShadow: `0 0 ${dot.size * 4}px ${dot.color}`,
              animationDelay: dot.delay,
              animationDuration: `${dot.dur}s`,
            }}
          />
        ))}

        <div
          ref={ref}
          className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10"
        >
          {stats.map((stat, i) => (
            <StatItem
              key={stat.key}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              trigger={isVisible}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
