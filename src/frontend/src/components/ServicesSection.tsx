import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealHeading from "./RevealHeading";

const services = [
  {
    id: 1,
    title: "UI Design",
    desc: "Clean, purposeful interfaces that convert visitors into users. Every pixel has a reason.",
    delay: 0,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
      >
        <rect
          x="4"
          y="8"
          width="56"
          height="40"
          rx="6"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1.5"
          fill="oklch(0.82 0.2 196 / 0.08)"
        />
        <rect
          x="12"
          y="16"
          width="20"
          height="16"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.2)"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1"
        />
        <rect
          x="36"
          y="16"
          width="16"
          height="6"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.4)"
          className="animate-blink"
        />
        <rect
          x="36"
          y="25"
          width="10"
          height="4"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.25)"
        />
        <rect
          x="12"
          y="36"
          width="40"
          height="4"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.2)"
        />
        <circle cx="32" cy="52" r="3" fill="oklch(0.82 0.2 196 / 0.5)" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Fast, scalable, and maintainable frontend architectures built with modern technology stacks.",
    delay: 0.1,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
        style={{ animationDelay: "0.4s" }}
      >
        <rect
          x="4"
          y="10"
          width="56"
          height="44"
          rx="6"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="1.5"
          fill="oklch(0.75 0.24 312 / 0.08)"
        />
        <rect
          x="4"
          y="10"
          width="56"
          height="10"
          rx="6"
          fill="oklch(0.75 0.24 312 / 0.15)"
        />
        <circle cx="14" cy="15" r="2.5" fill="oklch(0.62 0.22 25)" />
        <circle cx="22" cy="15" r="2.5" fill="oklch(0.72 0.2 60)" />
        <circle cx="30" cy="15" r="2.5" fill="oklch(0.78 0.18 162)" />
        <path
          d="M16 30 L22 36 L16 42"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-blink"
        />
        <line
          x1="26"
          y1="42"
          x2="48"
          y2="42"
          stroke="oklch(0.75 0.24 312 / 0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="34"
          x2="42"
          y2="34"
          stroke="oklch(0.75 0.24 312 / 0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Branding",
    desc: "Distinctive visual identities that communicate your values and leave a lasting impression.",
    delay: 0.2,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <circle
          cx="32"
          cy="32"
          r="24"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1.5"
          fill="oklch(0.82 0.2 196 / 0.05)"
          strokeDasharray="8 4"
          className="animate-spin-slow"
        />
        <circle
          cx="32"
          cy="32"
          r="16"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="1.5"
          fill="oklch(0.75 0.24 312 / 0.08)"
        />
        <circle
          cx="32"
          cy="32"
          r="6"
          fill="oklch(0.82 0.2 196)"
          className="animate-pulse-glow"
        />
        <line
          x1="32"
          y1="8"
          x2="32"
          y2="16"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="56"
          y1="32"
          x2="48"
          y2="32"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Motion Design",
    desc: "Purposeful animations and micro-interactions that guide users and delight at every step.",
    delay: 0.3,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <path
          d="M8 32 Q20 12 32 32 Q44 52 56 32"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-draw-path"
        />
        <path
          d="M8 24 Q20 4 32 24 Q44 44 56 24"
          stroke="oklch(0.75 0.24 312 / 0.6)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="animate-draw-path"
          style={{ animationDelay: "0.3s" }}
        />
        <circle
          cx="32"
          cy="32"
          r="4"
          fill="oklch(0.82 0.2 196)"
          className="animate-pulse-glow"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Strategy",
    desc: "Research-backed product strategy and roadmapping that aligns design with business goals.",
    delay: 0.4,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
        style={{ animationDelay: "1.6s" }}
      >
        <rect
          x="6"
          y="6"
          width="52"
          height="52"
          rx="8"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="1.5"
          fill="oklch(0.75 0.24 312 / 0.06)"
        />
        <polyline
          points="14,44 26,28 36,36 50,18"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-path"
        />
        <circle
          cx="50"
          cy="18"
          r="4"
          fill="oklch(0.82 0.2 196)"
          className="animate-blink"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Accessibility",
    desc: "Inclusive design patterns ensuring your product is usable by everyone, everywhere.",
    delay: 0.5,
    icon: (
      <svg
        aria-hidden="true"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="animate-float"
        style={{ animationDelay: "2s" }}
      >
        <circle
          cx="32"
          cy="12"
          r="6"
          fill="oklch(0.82 0.2 196 / 0.8)"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1.5"
        />
        <line
          x1="32"
          y1="18"
          x2="32"
          y2="38"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="28"
          x2="50"
          y2="28"
          stroke="oklch(0.75 0.24 312)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-blink"
        />
        <line
          x1="32"
          y1="38"
          x2="20"
          y2="54"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="38"
          x2="44"
          y2="54"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: x * -8 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: service.delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s" : "transform 0.5s",
      }}
      className="relative group rounded-2xl p-6 bg-card border border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden"
      data-ocid="services.card"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.72 0.2 196 / 0.12), transparent 70%)",
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-4">{service.icon}</div>
        <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Gradient top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.2 196 / 0.06), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <RevealHeading
            as="h2"
            className="font-display font-bold text-4xl md:text-5xl"
            isVisible={isVisible}
          >
            Our Services
          </RevealHeading>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            End-to-end design and engineering for products people love.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
