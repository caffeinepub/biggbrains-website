import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealHeading from "./RevealHeading";

const steps = [
  {
    step: "01",
    title: "Discovery & Brief",
    desc: "We dive deep into your goals, audience, and constraints to define what success looks like.",
    icon: (
      <svg
        aria-hidden="true"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle
          cx="36"
          cy="36"
          r="28"
          stroke="oklch(0.82 0.2 196 / 0.3)"
          strokeWidth="1"
          fill="oklch(0.82 0.2 196 / 0.04)"
        />
        <circle
          cx="36"
          cy="32"
          r="10"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse-glow"
        />
        <line
          x1="43"
          y1="39"
          x2="52"
          y2="48"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="36"
          cy="32"
          r="3"
          fill="oklch(0.82 0.2 196)"
          className="animate-blink"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "High-fidelity designs and interactive prototypes — you see and feel the product before we code.",
    icon: (
      <svg
        aria-hidden="true"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <rect
          x="12"
          y="14"
          width="48"
          height="36"
          rx="4"
          stroke="oklch(0.7 0.24 312 / 0.3)"
          strokeWidth="1"
          fill="oklch(0.7 0.24 312 / 0.04)"
        />
        <rect
          x="18"
          y="20"
          width="16"
          height="12"
          rx="2"
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="1.5"
          fill="oklch(0.7 0.24 312 / 0.1)"
          className="animate-pulse-glow-violet"
        />
        <rect
          x="38"
          y="20"
          width="16"
          height="4"
          rx="2"
          fill="oklch(0.7 0.24 312 / 0.4)"
        />
        <rect
          x="38"
          y="27"
          width="10"
          height="3"
          rx="1.5"
          fill="oklch(0.7 0.24 312 / 0.25)"
        />
        <rect
          x="18"
          y="36"
          width="36"
          height="3"
          rx="1.5"
          fill="oklch(0.7 0.24 312 / 0.2)"
        />
        <path
          d="M28 56 L36 64 L44 56"
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="36"
          y1="50"
          x2="36"
          y2="64"
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Build & Ship",
    desc: "Clean, performant code shipped fast. CI/CD pipelines, testing, and seamless deployment.",
    icon: (
      <svg
        aria-hidden="true"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M36 12 L44 28 L60 30 L48 42 L51 58 L36 50 L21 58 L24 42 L12 30 L28 28 Z"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1.5"
          fill="oklch(0.82 0.2 196 / 0.08)"
          className="animate-pulse-glow"
        />
        <circle
          cx="36"
          cy="35"
          r="6"
          fill="oklch(0.82 0.2 196 / 0.3)"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1"
          className="animate-blink"
        />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="py-28 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 w-80 h-80 rounded-full bg-primary/6 blur-[120px] pointer-events-none" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            The Process
          </span>
          <RevealHeading
            as="h2"
            isVisible={isVisible}
            className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4"
          >
            How We Work
          </RevealHeading>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Three focused phases that take you from raw idea to polished
            product, efficiently.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="h-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.2 196 / 0.4), oklch(0.7 0.24 312 / 0.4))",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              data-ocid={`how-it-works.item.${i + 1}`}
              className="relative group text-center p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/25 hover:bg-card/60 transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-background border border-border text-xs font-display font-bold text-primary">
                  {step.step}
                </span>
              </div>
              <div className="flex justify-center mb-5 mt-2">{step.icon}</div>
              <h3 className="font-display font-bold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
