import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-magnetic]")) setIsHover(true);
    };

    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-magnetic]")) setIsHover(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "oklch(0.97 0.01 255)" }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHover ? 1.8 : 1,
          borderColor: isHover
            ? "oklch(0.7 0.24 312)"
            : "oklch(0.82 0.2 196 / 0.6)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-9 h-9 rounded-full border-2 transition-colors"
          style={{
            borderColor: isHover
              ? "oklch(0.7 0.24 312)"
              : "oklch(0.82 0.2 196 / 0.6)",
            boxShadow: isHover
              ? "0 0 16px oklch(0.7 0.24 312 / 0.4)"
              : "0 0 10px oklch(0.82 0.2 196 / 0.25)",
          }}
        />
      </motion.div>
    </>
  );
}
