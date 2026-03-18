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
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.08 0.01 262), oklch(0.1 0.015 312 / 0.5) 50%, oklch(0.08 0.01 262))",
      }}
      ref={ref}
    >
      {/* Ambient glows */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.2 196 / 0.18), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 312 / 0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center order-2 lg:order-1"
        >
          <div
            className="relative w-80 h-80 rounded-full"
            style={{
              border: "1px solid oklch(0.72 0.2 196 / 0.25)",
              boxShadow:
                "0 0 40px oklch(0.72 0.2 196 / 0.1), inset 0 0 40px oklch(0.72 0.2 196 / 0.05)",
            }}
          >
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
                stroke="oklch(0.82 0.2 196 / 0.2)"
                strokeWidth="1"
                strokeDasharray="8 6"
                className="animate-spin-slow"
              />
              <circle
                cx="160"
                cy="160"
                r="120"
                stroke="oklch(0.75 0.24 312 / 0.25)"
                strokeWidth="1"
                strokeDasharray="6 8"
                style={{ animation: "spin-slow 30s linear infinite reverse" }}
              />
              <circle
                cx="160"
                cy="160"
                r="90"
                stroke="oklch(0.82 0.2 196 / 0.35)"
                strokeWidth="1.5"
                fill="oklch(0.82 0.2 196 / 0.04)"
              />
              <path
                d="M160 105 C140 105 128 118 128 135 C128 148 136 158 144 165 L144 178 L176 178 L176 165 C184 158 192 148 192 135 C192 118 180 105 160 105 Z"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2"
                fill="oklch(0.82 0.2 196 / 0.15)"
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
                stroke="oklch(0.82 0.2 196 / 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw-path"
              />
              <path
                d="M160 135 L180 118"
                stroke="oklch(0.82 0.2 196 / 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-draw-path"
                style={{ animationDelay: "0.3s" }}
              />
              <path
                d="M160 135 L155 115"
                stroke="oklch(0.82 0.2 196 / 0.7)"
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
                cx="303"
                cy="100"
                r="4"
                fill="oklch(0.75 0.24 312)"
                className="animate-blink"
                style={{ animationDelay: "0.8s" }}
              />
              <circle
                cx="17"
                cy="220"
                r="4"
                fill="oklch(0.82 0.2 196)"
                className="animate-blink"
                style={{ animationDelay: "1.4s" }}
              />
              <circle
                cx="295"
                cy="240"
                r="3"
                fill="oklch(0.75 0.24 312)"
                className="animate-blink"
                style={{ animationDelay: "2s" }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Story
          </span>
          <RevealHeading
            as="h2"
            className="font-display font-bold text-4xl md:text-5xl mb-6"
            isVisible={isVisible}
          >
            Built for Makers &amp; Dreamers
          </RevealHeading>
          <p className="text-muted-foreground leading-relaxed mb-8">
            BiggBrains is a boutique design and development studio. We work with
            founders, startups, and growing companies to turn complex ideas into
            clean, scalable digital products. No bloated agencies, no endless
            handoffs — just sharp thinking and sharp execution.
          </p>
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-foreground/90"
              >
                <CheckCircle2
                  size={18}
                  className="text-primary shrink-0 animate-pulse-glow"
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
