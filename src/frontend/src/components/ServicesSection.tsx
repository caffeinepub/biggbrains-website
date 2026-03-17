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
          fill="oklch(0.82 0.2 196 / 0.05)"
        />
        <rect
          x="12"
          y="16"
          width="20"
          height="16"
          rx="3"
          fill="oklch(0.82 0.2 196 / 0.15)"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1"
        />
        <rect
          x="36"
          y="16"
          width="16"
          height="6"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.3)"
          className="animate-blink"
        />
        <rect
          x="36"
          y="25"
          width="10"
          height="4"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.2)"
        />
        <rect
          x="12"
          y="36"
          width="40"
          height="4"
          rx="2"
          fill="oklch(0.82 0.2 196 / 0.15)"
        />
        <circle cx="32" cy="52" r="3" fill="oklch(0.82 0.2 196 / 0.4)" />
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
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="1.5"
          fill="oklch(0.7 0.24 312 / 0.05)"
        />
        <rect
          x="4"
          y="10"
          width="56"
          height="10"
          rx="6"
          fill="oklch(0.7 0.24 312 / 0.1)"
        />
        <circle cx="14" cy="15" r="2.5" fill="oklch(0.62 0.22 25)" />
        <circle cx="22" cy="15" r="2.5" fill="oklch(0.72 0.2 60)" />
        <circle cx="30" cy="15" r="2.5" fill="oklch(0.78 0.18 162)" />
        <path
          d="M16 30 L22 36 L16 42"
          stroke="oklch(0.7 0.24 312)"
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
          stroke="oklch(0.7 0.24 312 / 0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="34"
          x2="42"
          y2="34"
          stroke="oklch(0.7 0.24 312 / 0.3)"
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
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="1"
          fill="oklch(0.82 0.2 196 / 0.05)"
        />
        <path
          d="M26 38 L32 22 L38 38 M28 34 H36"
          stroke="oklch(0.82 0.2 196)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Strategy",
    desc: "Data-backed product strategy and roadmapping to ensure you build what actually matters.",
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
          d="M12 48 L24 34 L34 40 L52 20"
          stroke="oklch(0.7 0.24 312)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="48"
          r="3"
          fill="oklch(0.7 0.24 312)"
          className="animate-blink"
        />
        <circle
          cx="24"
          cy="34"
          r="3"
          fill="oklch(0.7 0.24 312)"
          className="animate-blink"
          style={{ animationDelay: "0.3s" }}
        />
        <circle
          cx="34"
          cy="40"
          r="3"
          fill="oklch(0.7 0.24 312)"
          className="animate-blink"
          style={{ animationDelay: "0.6s" }}
        />
        <circle
          cx="52"
          cy="20"
          r="3"
          fill="oklch(0.7 0.24 312)"
          className="animate-blink"
          style={{ animationDelay: "0.9s" }}
        />
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="4"
          stroke="oklch(0.7 0.24 312 / 0.15)"
          strokeWidth="1"
        />
        <line
          x1="4"
          y1="48"
          x2="60"
          y2="48"
          stroke="oklch(0.7 0.24 312 / 0.2)"
          strokeWidth="1"
        />
        <line
          x1="12"
          y1="4"
          x2="12"
          y2="60"
          stroke="oklch(0.7 0.24 312 / 0.2)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
];

function TiltCard({
  service,
  isVisible,
}: { service: (typeof services)[0]; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rotateX: (0.5 - y) * 16, rotateY: (x - 0.5) * 16 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: service.delay }}
      data-ocid={`services.item.${service.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
      }}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered ? "transform 0.15s ease" : "transform 0.4s ease",
      }}
      className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card overflow-hidden cursor-default"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, oklch(0.82 0.2 196 / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(ellipse at ${50 + tilt.rotateY * 3}% ${50 - tilt.rotateX * 3}%, oklch(1 0 0 / 0.05), transparent 60%)`,
        }}
      />
      <div className="mb-5 flex justify-center">{service.icon}</div>
      <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.desc}
      </p>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-accent/8 blur-[80px] pointer-events-none" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <RevealHeading
            as="h2"
            isVisible={isVisible}
            className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4"
          >
            Services that Scale
          </RevealHeading>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From pixel-perfect design to production-ready code, we cover every
            layer of your digital product.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <TiltCard
              key={service.id}
              service={service}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
