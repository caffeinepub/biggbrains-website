import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

const TYPEWRITER_WORDS = ["Design.", "Develop.", "Launch."];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 5.5) % 90)}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 5),
  delay: (i * 0.6) % 4,
  xDrift: -15 + (i % 7) * 5,
  opacity: 0.5 + (i % 4) * 0.12,
  isAccent: i % 3 === 0,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function TypewriterBadge() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        90,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-sm font-medium glow-primary">
      <Sparkles size={14} className="animate-pulse-glow" />
      <AnimatePresence mode="wait">
        <motion.span
          key={`${wordIndex}-${displayed}`}
          className="inline-block min-w-[80px]"
        >
          {displayed}
          <span className="animate-[blink_0.8s_step-end_infinite] border-r-2 border-primary ml-0.5" />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
    </div>
  );
}

function StatCounter({
  end,
  suffix,
  label,
}: { end: number; suffix: string; label: string }) {
  const value = useAnimatedCounter(end, 1.5, suffix, true);
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="font-display font-bold text-2xl text-gradient"
      >
        {value}
      </motion.div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

/** Animated rocket with exhaust trail */
function RocketAnimation() {
  return (
    <div className="absolute top-16 right-[8%] pointer-events-none z-0 hidden lg:block">
      <motion.div
        initial={{ y: 60, x: 0, opacity: 0, rotate: -15 }}
        animate={{
          y: [60, -20, -80, -20, 60],
          x: [0, 30, 60, 30, 0],
          opacity: [1, 1, 0.7, 1, 1],
          rotate: [-15, -20, -25, -20, -15],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.5, 0.75, 1],
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
        }}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          role="img"
          aria-label="Animated rocket"
          className="drop-shadow-[0_0_12px_oklch(0.72_0.2_196/0.9)]"
        >
          <ellipse cx="24" cy="18" rx="10" ry="16" fill="oklch(0.72 0.2 196)" />
          <rect
            x="14"
            y="30"
            width="20"
            height="24"
            rx="2"
            fill="oklch(0.65 0.22 312)"
          />
          <polygon points="8,54 14,40 14,58" fill="oklch(0.72 0.2 196 / 0.8)" />
          <polygon
            points="40,54 34,40 34,58"
            fill="oklch(0.72 0.2 196 / 0.8)"
          />
          <ellipse
            cx="24"
            cy="20"
            rx="5"
            ry="7"
            fill="oklch(0.85 0.1 220 / 0.5)"
          />
          <motion.ellipse
            cx="24"
            cy="62"
            rx="6"
            ry="12"
            fill="oklch(0.85 0.22 60 / 0.9)"
            animate={{
              ry: [10, 14, 8, 14, 10],
              opacity: [0.8, 1, 0.6, 1, 0.8],
            }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.ellipse
            cx="24"
            cy="70"
            rx="4"
            ry="8"
            fill="oklch(0.75 0.24 312 / 0.7)"
            animate={{
              ry: [6, 10, 5, 10, 6],
              opacity: [0.6, 0.9, 0.4, 0.9, 0.6],
            }}
            transition={{
              duration: 0.4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.1,
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [-500, 500], [-12, 12]);
  const parallaxY = useTransform(mouseY, [-400, 400], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, oklch(0.72 0.2 196 / 0.15), transparent 60%), radial-gradient(ellipse at 80% 20%, oklch(0.65 0.22 312 / 0.12), transparent 55%), oklch(0.08 0.01 262)",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated mesh blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none animate-mesh"
        style={{
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, oklch(0.72 0.2 196 / 0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none animate-mesh"
        style={{
          bottom: "-20%",
          right: "-10%",
          background:
            "radial-gradient(circle, oklch(0.65 0.22 312 / 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-5s",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none animate-mesh"
        style={{
          top: "40%",
          left: "60%",
          background:
            "radial-gradient(circle, oklch(0.72 0.2 196 / 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "-9s",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              backgroundColor: p.isAccent
                ? `oklch(0.75 0.24 312 / ${p.opacity})`
                : `oklch(0.82 0.22 196 / ${p.opacity})`,
              boxShadow: p.isAccent
                ? `0 0 ${p.size * 3}px oklch(0.75 0.24 312 / 0.6)`
                : `0 0 ${p.size * 3}px oklch(0.82 0.22 196 / 0.6)`,
            }}
            animate={{
              y: ["-10vh", `-${30 + p.id * 5}vh`, "-100vh"],
              x: [0, p.xDrift, p.xDrift * 1.5],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Rocket */}
      <RocketAnimation />

      {/* Main content */}
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ x: parallaxX, y: parallaxY }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants}>
            <TypewriterBadge />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight max-w-5xl"
          >
            We Build Digital{" "}
            <span className="text-gradient-shimmer">Experiences</span>
            <br />
            That{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Inspire</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Strategy-led design and development studio crafting bold products
            for ambitious brands and startups.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <MagneticButton>
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="gap-2 px-8 text-base font-semibold glow-primary hover:scale-105 transition-transform"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="gap-2 px-8 text-base border-primary/40 hover:border-primary/80 hover:bg-primary/10 transition-all"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Our Work
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-10 mt-6 pt-6 border-t border-border/30"
          >
            <StatCounter end={150} suffix="+" label="Projects" />
            <div className="w-px h-10 bg-border/50" />
            <StatCounter end={98} suffix="%" label="Satisfaction" />
            <div className="w-px h-10 bg-border/50" />
            <StatCounter end={50} suffix="+" label="Clients" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-border/60 flex items-start justify-center p-1"
          style={{ borderColor: "oklch(0.72 0.2 196 / 0.4)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
