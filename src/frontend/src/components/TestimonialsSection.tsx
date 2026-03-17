import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    id: 1,
    quote:
      "BiggBrains completely transformed our product's look and feel. The interface they built helped us increase user retention by 40% in just two months.",
    name: "Sarah Chen",
    title: "Co-founder, FlowSync",
    avatar: "SC",
    isPrimary: true,
  },
  {
    id: 2,
    quote:
      "Their minimalist approach was exactly what we needed. They stripped away all the noise and delivered a product that our users actually love using every single day.",
    name: "Marcus Webb",
    title: "CPO, NovaDash",
    avatar: "MW",
    isPrimary: false,
  },
  {
    id: 3,
    quote:
      "Working with BiggBrains felt like having a co-founder who happened to be an elite designer and engineer. Incredibly collaborative and fast.",
    name: "Priya Nair",
    title: "CEO, Luminary Labs",
    avatar: "PN",
    isPrimary: true,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  };

  const prev = () =>
    go((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => go((current + 1) % testimonials.length, 1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section
      id="testimonials"
      className="py-28 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute left-1/3 top-0 w-72 h-72 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Social Proof
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
            Words from our <span className="text-gradient">Clients</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <svg
            aria-hidden="true"
            width="100"
            height="60"
            viewBox="0 0 100 60"
            fill="none"
            className="animate-float"
          >
            <circle
              cx="20"
              cy="30"
              r="18"
              stroke="oklch(0.82 0.2 196 / 0.4)"
              strokeWidth="1.5"
              fill="oklch(0.82 0.2 196 / 0.05)"
            />
            <circle
              cx="50"
              cy="22"
              r="22"
              stroke="oklch(0.7 0.24 312 / 0.5)"
              strokeWidth="1.5"
              fill="oklch(0.7 0.24 312 / 0.06)"
            />
            <circle
              cx="80"
              cy="30"
              r="18"
              stroke="oklch(0.82 0.2 196 / 0.4)"
              strokeWidth="1.5"
              fill="oklch(0.82 0.2 196 / 0.05)"
            />
            <circle
              cx="20"
              cy="30"
              r="6"
              fill="oklch(0.82 0.2 196 / 0.4)"
              className="animate-blink"
            />
            <circle
              cx="50"
              cy="22"
              r="7"
              fill="oklch(0.7 0.24 312 / 0.5)"
              className="animate-blink"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="80"
              cy="30"
              r="6"
              fill="oklch(0.82 0.2 196 / 0.4)"
              className="animate-blink"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative max-w-2xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              data-ocid="testimonials.secondary_button"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 z-10"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={t.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-ocid={`testimonials.item.${t.id}`}
                  className="p-8 md:p-12 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm text-center"
                >
                  <div
                    className="text-4xl mb-6 font-serif leading-none"
                    style={{ color: "oklch(0.7 0.24 312 / 0.5)" }}
                  >
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-8">
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                      style={{
                        background: t.isPrimary
                          ? "oklch(0.82 0.2 196 / 0.15)"
                          : "oklch(0.7 0.24 312 / 0.15)",
                        color: t.isPrimary
                          ? "oklch(0.82 0.2 196)"
                          : "oklch(0.7 0.24 312)",
                        border: `1px solid ${t.isPrimary ? "oklch(0.82 0.2 196 / 0.3)" : "oklch(0.7 0.24 312 / 0.3)"}`,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              data-ocid="testimonials.primary_button"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 z-10"
            >
              <ChevronRight size={18} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid="testimonials.toggle"
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === current
                        ? "oklch(0.82 0.2 196)"
                        : "oklch(0.82 0.2 196 / 0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
