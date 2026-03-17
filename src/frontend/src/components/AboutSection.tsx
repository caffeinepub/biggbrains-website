import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealHeading from "./RevealHeading";

const highlights = [
  "Minimal, purposeful design approach",
  "Full-stack capability from day one",
  "Startup-tested workflows and delivery",
  "Transparent, collaborative process",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/6 blur-[100px] pointer-events-none" />
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center order-2 lg:order-1"
        >
          <div className="relative w-80 h-80">
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
            >
              <circle
                cx="160"
                cy="160"
                r="150"
                stroke="oklch(0.82 0.2 196 / 0.12)"
                strokeWidth="1"
                strokeDasharray="8 6"
                className="animate-spin-slow"
              />
              <circle
                cx="160"
                cy="160"
                r="120"
                stroke="oklch(0.7 0.24 312 / 0.15)"
                strokeWidth="1"
                strokeDasharray="6 8"
                style={{ animation: "spin-slow 30s linear infinite reverse" }}
              />
              <circle
                cx="160"
                cy="160"
                r="90"
                stroke="oklch(0.82 0.2 196 / 0.2)"
                strokeWidth="1.5"
                fill="oklch(0.82 0.2 196 / 0.03)"
              />
              <path
                d="M160 105 C140 105 128 118 128 135 C128 148 136 158 144 165 L144 178 L176 178 L176 165 C184 158 192 148 192 135 C192 118 180 105 160 105 Z"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2"
                fill="oklch(0.82 0.2 196 / 0.1)"
                className="animate-pulse-glow"
              />
              <line
                x1="148"
                y1="182"
                x2="172"
                y2="182"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="151"
                y1="188"
                x2="169"
                y2="188"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M160 135 L140 118"
                stroke="oklch(0.82 0.2 196 / 0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw-path"
              />
              <path
                d="M160 135 L180 118"
                stroke="oklch(0.82 0.2 196 / 0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw-path"
                style={{ animationDelay: "0.3s" }}
              />
              <path
                d="M160 135 L155 115"
                stroke="oklch(0.82 0.2 196 / 0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw-path"
                style={{ animationDelay: "0.6s" }}
              />
              <circle
                cx="160"
                cy="15"
                r="5"
                fill="oklch(0.82 0.2 196)"
                className="animate-blink"
              />
              <circle
                cx="305"
                cy="160"
                r="5"
                fill="oklch(0.7 0.24 312)"
                className="animate-blink"
                style={{ animationDelay: "0.8s" }}
              />
              <circle
                cx="160"
                cy="305"
                r="5"
                fill="oklch(0.82 0.2 196)"
                className="animate-blink"
                style={{ animationDelay: "1.6s" }}
              />
              <circle
                cx="15"
                cy="160"
                r="5"
                fill="oklch(0.7 0.24 312)"
                className="animate-blink"
                style={{ animationDelay: "2.4s" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse-glow" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 order-1 lg:order-2"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Story
          </span>
          <RevealHeading
            as="h2"
            isVisible={isVisible}
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
          >
            Minimal design. Maximum impact.
          </RevealHeading>
          <p className="text-muted-foreground leading-relaxed">
            BiggBrains was born from a simple frustration: too many digital
            products are overcomplicated, bloated, and hard to use. We set out
            to prove that the best products are the ones that do less — but do
            it brilliantly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we partner with ambitious startups and established companies
            to craft digital experiences that are clean, fast, and memorable.
          </p>
          <ul className="space-y-3 pt-2">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-primary flex-shrink-0"
                />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
