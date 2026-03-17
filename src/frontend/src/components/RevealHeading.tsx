import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  isVisible: boolean;
}

function WordReveal({
  word,
  delay,
  isVisible,
}: { word: string; delay: number; isVisible: boolean }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: 40, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{
          duration: 0.55,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {word}&nbsp;
      </motion.span>
    </span>
  );
}

export default function RevealHeading({
  children,
  className = "",
  as: Tag = "h2",
  isVisible,
}: RevealHeadingProps) {
  const renderContent = () => {
    if (typeof children === "string") {
      const words = children.split(" ");
      return words.map((word, i) => (
        <WordReveal
          key={word}
          word={word}
          delay={i * 0.07}
          isVisible={isVisible}
        />
      ));
    }
    return (
      <motion.span
        className="inline-block"
        initial={{ y: 40, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    );
  };

  return <Tag className={className}>{renderContent()}</Tag>;
}
