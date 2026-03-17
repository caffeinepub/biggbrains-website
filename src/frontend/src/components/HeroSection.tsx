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

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 8.3) % 90)}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 5),
  delay: (i * 0.6) % 4,
  xDrift: -15 + (i % 7) * 5,
  opacity: 0.3 + (i % 4) * 0.08,
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
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
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

/** Animated rocket with exhaust particles flying diagonally */
function FlyingRocket() {
  // Exhaust particle configs
  const exhaustParticles = [
    { id: 0, delay: 0, size: 8, offsetX: 0 },
    { id: 1, delay: 0.25, size: 6, offsetX: 4 },
    { id: 2, delay: 0.5, size: 5, offsetX: -4 },
  ];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ bottom: "12%", left: "8%" }}
      // Arc flight: diagonal from bottom-left to top-right, loop
      animate={{
        x: [0, 280, 320],
        y: [0, -200, -240],
        rotate: [-35, -40, -35],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: [0.4, 0, 0.6, 1],
        times: [0, 0.85, 1],
      }}
    >
      {/* Exhaust particles trailing below-left of rocket */}
      {exhaustParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: "oklch(0.7 0.24 312)",
            bottom: -p.size - 4,
            left: `calc(50% + ${p.offsetX}px - ${p.size / 2}px)`,
          }}
          animate={{
            opacity: [0.9, 0.4, 0],
            scale: [1, 0.7, 0.2],
            y: [0, 10, 20],
          }}
          transition={{
            duration: 0.55,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Rocket SVG — pointing upper-right (rotated -35deg via parent) */}
      <svg
        width="68"
        height="100"
        viewBox="0 0 68 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Body */}
        <path
          d="M34 4 C20 4 12 22 10 46 L10 72 L34 80 L58 72 L58 46 C56 22 48 4 34 4Z"
          fill="oklch(0.82 0.2 196)"
          opacity="0.95"
        />
        {/* Body shine */}
        <path
          d="M34 8 C24 8 17 24 15 46 L15 68 L34 75"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Nose cone */}
        <path
          d="M34 4 C34 4 22 14 20 30 L34 26 L48 30 C46 14 34 4 34 4Z"
          fill="oklch(0.72 0.2 196)"
        />
        {/* Window */}
        <circle
          cx="34"
          cy="44"
          r="10"
          fill="oklch(0.15 0.05 220)"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.6"
        />
        <circle cx="31" cy="41" r="3" fill="white" opacity="0.3" />
        {/* Left fin */}
        <path d="M10 58 L0 78 L10 72 Z" fill="oklch(0.65 0.22 196)" />
        {/* Right fin */}
        <path d="M58 58 L68 78 L58 72 Z" fill="oklch(0.65 0.22 196)" />
        {/* Flame / exhaust base */}
        <path
          d="M22 80 Q26 96 34 98 Q42 96 46 80 Z"
          fill="oklch(0.7 0.24 312)"
          opacity="0.9"
        />
        {/* Flame inner glow */}
        <path
          d="M28 80 Q31 90 34 92 Q37 90 40 80 Z"
          fill="oklch(0.88 0.18 60)"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);
  const translateX = useTransform(mouseX, [-300, 300], [-8, 8]);
  const translateY = useTransform(mouseY, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: "oklch(0.82 0.2 196)",
            opacity: p.opacity,
          }}
          animate={{
            y: ["-5vh", "-110vh"],
            x: [0, p.xDrift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: 0,
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <TypewriterBadge />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            The starting point
            <br />
            for your <span className="text-gradient-shimmer">next project</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            BiggBrains crafts minimal, high-impact digital experiences. We
            partner with founders and teams to turn bold ideas into polished
            products.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <MagneticButton>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-lg font-semibold text-base group"
                data-ocid="hero.primary_button"
                asChild
              >
                <a href="#contact">
                  Start a Project{" "}
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-border/70 hover:border-primary/50 hover:bg-primary/5 font-semibold text-base"
                data-ocid="hero.secondary_button"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-2"
          >
            <StatCounter end={150} suffix="+" label="Projects Shipped" />
            <StatCounter end={98} suffix="%" label="Client Satisfaction" />
            <StatCounter end={5} suffix="yr" label="Industry Experience" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative flex items-center justify-center"
        >
          <div
            className="relative w-full max-w-lg"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
              }}
              className="animate-float-slow"
            >
              <img
                src="/assets/generated/biggbrains-hero-illustration.dim_800x800.png"
                alt="BiggBrains neural network illustration"
                className="w-full rounded-2xl opacity-90"
                style={{
                  filter: "drop-shadow(0 0 40px oklch(0.82 0.2 196 / 0.4))",
                }}
              />
            </motion.div>

            {/* Flying Rocket */}
            <FlyingRocket />

            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-4 right-8 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="oklch(0.82 0.2 196)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    className="animate-spin-slow"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="8"
                    fill="oklch(0.82 0.2 196 / 0.2)"
                    stroke="oklch(0.82 0.2 196)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="3"
                    fill="oklch(0.82 0.2 196)"
                    className="animate-blink"
                  />
                </svg>
              </div>
              <div
                className="absolute bottom-8 left-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  width="56"
                  height="40"
                  viewBox="0 0 56 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="1"
                    width="54"
                    height="38"
                    rx="6"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                    fill="oklch(0.7 0.24 312 / 0.08)"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="36"
                    height="20"
                    rx="3"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1"
                    fill="oklch(0.7 0.24 312 / 0.1)"
                  />
                  <line
                    x1="14"
                    y1="0"
                    x2="14"
                    y2="10"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="28"
                    y1="0"
                    x2="28"
                    y2="10"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="42"
                    y1="0"
                    x2="42"
                    y2="10"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="14"
                    y1="30"
                    x2="14"
                    y2="40"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="28"
                    y1="30"
                    x2="28"
                    y2="40"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="42"
                    y1="30"
                    x2="42"
                    y2="40"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-bounce-gentle" />
      </motion.div>
    </section>
  );
}
