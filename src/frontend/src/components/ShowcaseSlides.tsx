import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 5000;

const slides = [
  {
    id: 0,
    label: "01",
    headline: "We Build Digital Products",
    sub: "Crafted with precision, designed for humans.",
    cta: "Explore Services",
    align: "left" as const,
    theme: "navy",
  },
  {
    id: 1,
    label: "02",
    headline: "Design That Converts",
    sub: "Every pixel serves a purpose.",
    cta: "See Our Work",
    align: "right" as const,
    theme: "violet",
  },
  {
    id: 2,
    label: "03",
    headline: "Strategy First,\nAlways",
    sub: "We think before we build.",
    cta: "Our Process",
    align: "center" as const,
    theme: "teal",
  },
  {
    id: 3,
    label: "04",
    headline: "Launch With Confidence",
    sub: "From concept to live in record time.",
    cta: "Start a Project",
    align: "left" as const,
    theme: "charcoal",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getVariants(
  fromIdx: number,
  toIdx: number,
): { initial: any; animate: any; exit: any; transition: any } {
  const forward = toIdx > fromIdx;
  if (fromIdx === 0 && toIdx === 1) {
    return {
      initial: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
      animate: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
      exit: { clipPath: "inset(0 0 0 100%)", opacity: 1 },
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    };
  }
  if (fromIdx === 1 && toIdx === 2) {
    return {
      initial: { scale: 0.88, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.08, opacity: 0 },
      transition: { duration: 0.7, ease: "easeInOut" },
    };
  }
  if (fromIdx === 2 && toIdx === 3) {
    return {
      initial: { y: "100%", opacity: 1 },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: 1 },
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    };
  }
  return {
    initial: { opacity: 0, x: forward ? 40 : -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: forward ? -40 : 40 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };
}

// ─── Slide Backgrounds ────────────────────────────────────────────────────────

function NavyBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #e8f4fd 0%, #d0e8f8 60%, #bddcf5 100%)",
      }}
    >
      <svg
        role="img"
        aria-label="Mesh grid background"
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Mesh grid</title>
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "160%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #0ea5e9, transparent)",
          top: "42%",
          left: "-30%",
          transform: "rotate(-18deg)",
          filter: "blur(2px)",
          boxShadow: "0 0 24px 6px #0ea5e966",
        }}
        animate={{ opacity: [0.4, 1, 0.4], x: ["-5%", "5%", "-5%"] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <span
        className="absolute top-4 right-8 font-black select-none pointer-events-none"
        style={{
          fontSize: "clamp(100px, 18vw, 240px)",
          lineHeight: 1,
          color: "rgba(14,165,233,0.1)",
          letterSpacing: "-0.04em",
        }}
      >
        01
      </span>
    </div>
  );
}

function VioletBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #f5f0ff 0%, #ede5ff 50%, #e4d8ff 100%)",
      }}
    >
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(260px, 50vw, 520px)",
          height: "clamp(260px, 50vw, 520px)",
          border: "2px solid rgba(124,58,237,0.2)",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 40px 8px rgba(124,58,237,0.12)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(180px, 34vw, 360px)",
          height: "clamp(180px, 34vw, 360px)",
          border: "1px solid rgba(124,58,237,0.12)",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          top: "10%",
          right: "5%",
          filter: "blur(8px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "40% 60% 30% 70% / 60% 40% 60% 40%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

const HUD_CORNERS = [
  {
    pos: "top-6 left-6",
    bt: "2px solid rgba(14,165,233,0.45)",
    bb: "none",
    bl: "2px solid rgba(14,165,233,0.45)",
    br: "none",
  },
  {
    pos: "top-6 right-6",
    bt: "2px solid rgba(14,165,233,0.45)",
    bb: "none",
    bl: "none",
    br: "2px solid rgba(14,165,233,0.45)",
  },
  {
    pos: "bottom-6 left-6",
    bt: "none",
    bb: "2px solid rgba(14,165,233,0.45)",
    bl: "2px solid rgba(14,165,233,0.45)",
    br: "none",
  },
  {
    pos: "bottom-6 right-6",
    bt: "none",
    bb: "2px solid rgba(14,165,233,0.45)",
    bl: "none",
    br: "2px solid rgba(14,165,233,0.45)",
  },
];

function TealBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 55%, #a7f3d0 100%)",
      }}
    >
      <svg
        role="img"
        aria-label="Dot grid background"
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Dot grid</title>
        <defs>
          <pattern
            id="dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#059669" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "100%",
          height: "4px",
          background:
            "linear-gradient(90deg, transparent, #059669, transparent)",
          top: "54%",
          left: 0,
          filter: "blur(1px)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  );
}

function CharcoalBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 60%, #e9ecef 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(14,165,233,0.04) 3px, rgba(14,165,233,0.04) 4px)",
        }}
      />
      {HUD_CORNERS.map((corner) => (
        <div
          key={corner.pos}
          className={`absolute ${corner.pos} w-8 h-8 pointer-events-none`}
          style={{
            borderTop: corner.bt,
            borderBottom: corner.bb,
            borderLeft: corner.bl,
            borderRight: corner.br,
          }}
        />
      ))}
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(14,165,233,0.35), transparent)",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{
          boxShadow: "0 0 30px 4px rgba(14,165,233,0.25)",
          background: "rgba(14,165,233,0.4)",
        }}
      />
    </div>
  );
}

// ─── Terminal Headline ────────────────────────────────────────────────────────

function TerminalHeadline({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: done ? [1, 0, 1] : 1 }}
        transition={{
          duration: 0.8,
          repeat: done ? Number.POSITIVE_INFINITY : 0,
        }}
        style={{ color: "#0369a1", marginLeft: 2 }}
      >
        ▮
      </motion.span>
    </span>
  );
}

// ─── Slide Content ────────────────────────────────────────────────────────────

function Slide0() {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 max-w-3xl">
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
        style={{ color: "#0369a1" }}
      >
        Digital Excellence
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        We Build
        <br />
        <span style={{ color: "#0369a1" }}>Digital Products</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="text-lg md:text-xl mb-8"
        style={{ color: "rgba(15,23,42,0.65)" }}
      >
        Crafted with precision, designed for humans.
      </motion.p>
      <motion.button
        data-ocid="showcase.slide1.primary_button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 24px 4px #38bdf8aa" }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase"
        style={{
          background: "#0369a1",
          color: "#ffffff",
          letterSpacing: "0.12em",
        }}
      >
        Explore Services
      </motion.button>
    </div>
  );
}

function Slide1() {
  return (
    <div className="relative z-10 flex flex-col items-end justify-center h-full px-8 md:px-20 ml-auto max-w-3xl text-right">
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
        style={{ color: "#7c3aed" }}
      >
        Creative Studio
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black leading-tight mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        <span style={{ color: "#1e1b4b" }}>Design That </span>
        <span
          style={{
            background: "linear-gradient(90deg, #a78bfa, #f472b6, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Converts
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="text-lg md:text-xl mb-8"
        style={{ color: "rgba(30,27,75,0.6)" }}
      >
        Every pixel serves a purpose.
      </motion.p>
      <motion.button
        data-ocid="showcase.slide2.primary_button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 24px 6px #a78bfa88" }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #db2777)",
          color: "white",
          letterSpacing: "0.12em",
        }}
      >
        See Our Work
      </motion.button>
    </div>
  );
}

const SLIDE2_WORDS1 = ["Strategy", "First,"];
const SLIDE2_WORDS2 = ["Always"];

function Slide2() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-20 w-full text-center">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
        style={{ color: "#059669" }}
      >
        Thoughtful Process
      </motion.span>
      <h2
        className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-2"
        style={{ letterSpacing: "-0.02em" }}
      >
        <div className="flex justify-center gap-3 flex-wrap">
          {SLIDE2_WORDS1.map((w) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {w}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {SLIDE2_WORDS2.map((w) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative px-3"
              style={{ color: "#059669" }}
            >
              <motion.span
                className="absolute inset-0 rounded"
                style={{ background: "rgba(52,211,153,0.15)", zIndex: -1 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              />
              {w}
            </motion.span>
          ))}
        </div>
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg md:text-xl mt-4 mb-8"
        style={{ color: "rgba(5,25,20,0.6)" }}
      >
        We think before we build.
      </motion.p>
      <motion.button
        data-ocid="showcase.slide3.primary_button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 24px 6px #34d39988" }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase"
        style={{
          background: "#059669",
          color: "#ffffff",
          letterSpacing: "0.12em",
        }}
      >
        Our Process
      </motion.button>
    </div>
  );
}

function Slide3() {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 max-w-3xl">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
        style={{ color: "#0369a1" }}
      >
        Ready to Ship
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black leading-tight mb-4"
        style={{
          letterSpacing: "-0.02em",
          fontFamily: "monospace",
          color: "#0f172a",
        }}
      >
        <TerminalHeadline text="Launch With Confidence" />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="text-lg md:text-xl mb-8"
        style={{ color: "rgba(3,105,161,0.85)", fontFamily: "monospace" }}
      >
        From concept to live in record time.
      </motion.p>
      <motion.button
        data-ocid="showcase.slide4.primary_button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 28px 8px rgba(0,255,255,0.5)",
        }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 font-bold text-sm tracking-wider uppercase"
        style={{
          border: "2px solid #0369a1",
          color: "#0369a1",
          background: "transparent",
          letterSpacing: "0.12em",
          fontFamily: "monospace",
        }}
      >
        Start a Project
      </motion.button>
    </div>
  );
}

const slideComponents = [Slide0, Slide1, Slide2, Slide3];
const backgrounds = [
  NavyBackground,
  VioletBackground,
  TealBackground,
  CharcoalBackground,
];

export default function ShowcaseSlides() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setPrev(current);
      setCurrent(idx);
      setProgress(0);
    },
    [current],
  );

  const goNext = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const goPrev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, goNext]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: current triggers reset intentionally
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 30);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current, paused]);

  const vars =
    prev !== null
      ? getVariants(prev, current)
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.6 },
        };

  const SlideContent = slideComponents[current];
  const SlideBackground = backgrounds[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(520px, 60vw, 600px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Showcase slides"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={vars.initial}
          animate={vars.animate}
          exit={vars.exit}
          transition={vars.transition}
        >
          <SlideBackground />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex" style={{ minHeight: "inherit" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="absolute inset-0 flex"
            initial={vars.initial}
            animate={vars.animate}
            exit={vars.exit}
            transition={{
              ...vars.transition,
              duration: (vars.transition?.duration ?? 0.6) + 0.05,
            }}
          >
            <SlideContent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 left-8 md:left-20 z-20">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono tracking-widest"
          style={{ color: "rgba(15,23,42,0.4)" }}
        >
          {slides[current].label} / {String(slides.length).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            type="button"
            data-ocid={`showcase.dot.${(slide.id + 1) as 1 | 2 | 3 | 4}`}
            onClick={() => goTo(slide.id)}
            aria-label={`Go to slide ${slide.id + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: slide.id === current ? 28 : 8,
              height: 8,
              background:
                slide.id === current
                  ? "rgba(15,23,42,0.8)"
                  : "rgba(15,23,42,0.25)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Arrow nav */}
      <button
        data-ocid="showcase.pagination_prev"
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 44,
          height: 44,
          background: "rgba(15,23,42,0.06)",
          border: "1px solid rgba(15,23,42,0.15)",
          color: "#0f172a",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(15,23,42,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(15,23,42,0.06)";
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        data-ocid="showcase.pagination_next"
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 44,
          height: 44,
          background: "rgba(15,23,42,0.06)",
          border: "1px solid rgba(15,23,42,0.15)",
          color: "#0f172a",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(15,23,42,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(15,23,42,0.06)";
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 w-full h-[3px] z-20"
        style={{ background: "rgba(15,23,42,0.08)" }}
      >
        <motion.div
          className="h-full"
          style={{ width: `${progress}%`, background: "rgba(15,23,42,0.5)" }}
          transition={{ ease: "linear" }}
        />
      </div>
    </section>
  );
}
