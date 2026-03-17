import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealHeading from "./RevealHeading";

const projects = [
  {
    title: "FlowSync Dashboard",
    category: "Product Design",
    color: "oklch(0.82 0.2 196)",
    illustration: (
      <svg
        role="img"
        aria-label="FlowSync Dashboard illustration"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>FlowSync Dashboard illustration</title>
        <rect
          x="20"
          y="20"
          width="360"
          height="260"
          rx="12"
          fill="oklch(0.94 0.01 255)"
          stroke="oklch(0.82 0.2 196 / 0.3)"
          strokeWidth="1"
        />
        <rect
          x="40"
          y="45"
          width="100"
          height="8"
          rx="4"
          fill="oklch(0.82 0.2 196 / 0.6)"
        />
        <rect
          x="40"
          y="60"
          width="60"
          height="6"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.3)"
        />
        <rect
          x="280"
          y="40"
          width="70"
          height="24"
          rx="6"
          fill="oklch(0.82 0.2 196 / 0.15)"
          stroke="oklch(0.82 0.2 196 / 0.4)"
          strokeWidth="1"
        />
        <rect
          x="55"
          y="130"
          width="22"
          height="80"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.7)"
        />
        <rect
          x="85"
          y="110"
          width="22"
          height="100"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.5)"
        />
        <rect
          x="115"
          y="150"
          width="22"
          height="60"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.6)"
        />
        <rect
          x="145"
          y="120"
          width="22"
          height="90"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.8)"
        />
        <rect
          x="175"
          y="100"
          width="22"
          height="110"
          rx="3"
          fill="oklch(0.82 0.2 196)"
        />
        <polyline
          points="220,190 250,155 280,170 310,130 340,145"
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="220" cy="190" r="4" fill="oklch(0.7 0.24 312)" />
        <circle cx="340" cy="145" r="4" fill="oklch(0.7 0.24 312)" />
        <rect
          x="40"
          y="230"
          width="70"
          height="30"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <rect
          x="120"
          y="230"
          width="70"
          height="30"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <rect
          x="200"
          y="230"
          width="70"
          height="30"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <rect
          x="280"
          y="230"
          width="70"
          height="30"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <line
          x1="40"
          y1="220"
          x2="360"
          y2="220"
          stroke="oklch(0.85 0.02 262)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    title: "NovaDash Mobile",
    category: "Mobile Development",
    color: "oklch(0.7 0.24 312)",
    illustration: (
      <svg
        role="img"
        aria-label="NovaDash Mobile illustration"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>NovaDash Mobile illustration</title>
        <rect
          x="145"
          y="15"
          width="110"
          height="270"
          rx="18"
          fill="oklch(0.94 0.01 255)"
          stroke="oklch(0.7 0.24 312 / 0.5)"
          strokeWidth="1.5"
        />
        <rect
          x="152"
          y="28"
          width="96"
          height="170"
          rx="6"
          fill="oklch(0.97 0.005 255)"
        />
        <circle
          cx="200"
          cy="268"
          r="8"
          stroke="oklch(0.7 0.24 312 / 0.4)"
          strokeWidth="1.5"
        />
        <rect
          x="185"
          y="20"
          width="30"
          height="4"
          rx="2"
          fill="oklch(0.85 0.02 262)"
        />
        <rect
          x="158"
          y="34"
          width="60"
          height="6"
          rx="3"
          fill="oklch(0.7 0.24 312 / 0.7)"
        />
        <rect
          x="160"
          y="50"
          width="84"
          height="40"
          rx="6"
          fill="oklch(0.7 0.24 312 / 0.12)"
          stroke="oklch(0.7 0.24 312 / 0.3)"
          strokeWidth="1"
        />
        <circle cx="176" cy="70" r="10" fill="oklch(0.7 0.24 312 / 0.3)" />
        <rect
          x="192"
          y="62"
          width="44"
          height="6"
          rx="3"
          fill="oklch(0.7 0.24 312 / 0.5)"
        />
        <rect
          x="192"
          y="74"
          width="30"
          height="4"
          rx="2"
          fill="oklch(0.62 0.05 255 / 0.4)"
        />
        <rect
          x="160"
          y="100"
          width="84"
          height="40"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <rect
          x="160"
          y="150"
          width="84"
          height="40"
          rx="6"
          fill="oklch(0.9 0.015 255)"
        />
        <circle
          cx="90"
          cy="80"
          r="30"
          fill="oklch(0.7 0.24 312 / 0.06)"
          stroke="oklch(0.7 0.24 312 / 0.2)"
          strokeWidth="1"
        />
        <circle
          cx="320"
          cy="180"
          r="40"
          fill="oklch(0.7 0.24 312 / 0.06)"
          stroke="oklch(0.7 0.24 312 / 0.2)"
          strokeWidth="1"
        />
        <circle
          cx="70"
          cy="210"
          r="20"
          fill="oklch(0.7 0.24 312 / 0.08)"
          stroke="oklch(0.7 0.24 312 / 0.25)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    title: "Luminary Brand",
    category: "Brand Identity",
    color: "oklch(0.82 0.2 196)",
    illustration: (
      <svg
        role="img"
        aria-label="Luminary Brand illustration"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>Luminary Brand illustration</title>
        <circle
          cx="200"
          cy="130"
          r="60"
          fill="oklch(0.82 0.2 196 / 0.08)"
          stroke="oklch(0.82 0.2 196 / 0.3)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="130"
          r="40"
          fill="oklch(0.82 0.2 196 / 0.1)"
          stroke="oklch(0.82 0.2 196 / 0.5)"
          strokeWidth="1"
        />
        <polygon
          points="200,95 230,145 170,145"
          fill="oklch(0.82 0.2 196 / 0.7)"
        />
        <polygon
          points="200,165 175,118 225,118"
          fill="oklch(0.82 0.2 196 / 0.3)"
        />
        <ellipse
          cx="200"
          cy="130"
          rx="85"
          ry="30"
          stroke="oklch(0.82 0.2 196 / 0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <ellipse
          cx="200"
          cy="130"
          rx="30"
          ry="85"
          stroke="oklch(0.82 0.2 196 / 0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <rect
          x="50"
          y="220"
          width="40"
          height="40"
          rx="8"
          fill="oklch(0.82 0.2 196)"
        />
        <rect
          x="98"
          y="220"
          width="40"
          height="40"
          rx="8"
          fill="oklch(0.7 0.24 312)"
        />
        <rect
          x="146"
          y="220"
          width="40"
          height="40"
          rx="8"
          fill="oklch(0.94 0.01 255)"
        />
        <rect
          x="194"
          y="220"
          width="40"
          height="40"
          rx="8"
          fill="oklch(0.85 0.02 262)"
        />
        <rect
          x="256"
          y="222"
          width="90"
          height="8"
          rx="4"
          fill="oklch(0.82 0.2 196 / 0.5)"
        />
        <rect
          x="256"
          y="236"
          width="70"
          height="5"
          rx="2.5"
          fill="oklch(0.62 0.05 255 / 0.3)"
        />
        <rect
          x="256"
          y="248"
          width="80"
          height="5"
          rx="2.5"
          fill="oklch(0.62 0.05 255 / 0.2)"
        />
        <circle cx="310" cy="80" r="5" fill="oklch(0.82 0.2 196 / 0.5)" />
        <circle cx="90" cy="170" r="5" fill="oklch(0.7 0.24 312 / 0.5)" />
      </svg>
    ),
  },
  {
    title: "Orbit Platform",
    category: "Full-Stack Build",
    color: "oklch(0.7 0.24 312)",
    illustration: (
      <svg
        role="img"
        aria-label="Orbit Platform illustration"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>Orbit Platform illustration</title>
        <ellipse
          cx="200"
          cy="150"
          rx="160"
          ry="60"
          stroke="oklch(0.7 0.24 312 / 0.2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <ellipse
          cx="200"
          cy="150"
          rx="120"
          ry="45"
          stroke="oklch(0.7 0.24 312 / 0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle
          cx="200"
          cy="150"
          r="32"
          fill="oklch(0.7 0.24 312 / 0.15)"
          stroke="oklch(0.7 0.24 312 / 0.5)"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="150" r="20" fill="oklch(0.7 0.24 312 / 0.3)" />
        <ellipse
          cx="200"
          cy="150"
          rx="32"
          ry="10"
          stroke="oklch(0.7 0.24 312 / 0.4)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="60"
          cy="150"
          r="12"
          fill="oklch(0.82 0.2 196 / 0.2)"
          stroke="oklch(0.82 0.2 196 / 0.5)"
          strokeWidth="1"
        />
        <circle
          cx="340"
          cy="150"
          r="8"
          fill="oklch(0.7 0.24 312 / 0.3)"
          stroke="oklch(0.7 0.24 312 / 0.6)"
          strokeWidth="1"
        />
        <g transform="translate(295, 95) rotate(45)">
          <ellipse
            cx="0"
            cy="0"
            rx="8"
            ry="16"
            fill="oklch(0.7 0.24 312 / 0.8)"
          />
          <polygon points="-8,8 8,8 0,20" fill="oklch(0.55 0.18 312)" />
          <circle cx="0" cy="-4" r="4" fill="oklch(0.82 0.2 196 / 0.7)" />
        </g>
        <circle cx="120" cy="60" r="6" fill="oklch(0.82 0.2 196 / 0.4)" />
        <circle cx="290" cy="60" r="6" fill="oklch(0.7 0.24 312 / 0.4)" />
        <circle cx="120" cy="240" r="6" fill="oklch(0.7 0.24 312 / 0.4)" />
        <circle cx="290" cy="240" r="6" fill="oklch(0.82 0.2 196 / 0.4)" />
        <line
          x1="120"
          y1="60"
          x2="200"
          y2="150"
          stroke="oklch(0.82 0.2 196 / 0.15)"
          strokeWidth="1"
        />
        <line
          x1="290"
          y1="60"
          x2="200"
          y2="150"
          stroke="oklch(0.7 0.24 312 / 0.15)"
          strokeWidth="1"
        />
        <line
          x1="120"
          y1="240"
          x2="200"
          y2="150"
          stroke="oklch(0.7 0.24 312 / 0.15)"
          strokeWidth="1"
        />
        <line
          x1="290"
          y1="240"
          x2="200"
          y2="150"
          stroke="oklch(0.82 0.2 196 / 0.15)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
];

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 bg-card/40 relative cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`portfolio.item.${index + 1}`}
    >
      {/* Illustration */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {project.illustration}
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background:
                "linear-gradient(to top, oklch(0.13 0.025 262 / 0.92) 0%, oklch(0.13 0.025 262 / 0.75) 50%, transparent 100%)",
            }}
          >
            <div>
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-3"
                style={{ color: project.color }}
                data-ocid={`portfolio.item.${index + 1}.button`}
              >
                View Project <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner badge */}
      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
        style={{
          background: `${project.color}1a`,
          border: `1px solid ${project.color}4d`,
          color: project.color,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="portfolio" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block"
          >
            Portfolio
          </motion.span>
          <RevealHeading
            className="text-4xl md:text-5xl font-display font-bold"
            isVisible={isVisible}
          >
            Work We&apos;re Proud Of
          </RevealHeading>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-lg mx-auto"
          >
            A curated selection of projects where we turned bold ideas into
            polished digital products.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
