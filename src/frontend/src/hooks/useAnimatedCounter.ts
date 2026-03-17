import { useEffect, useState } from "react";

export function useAnimatedCounter(
  end: number,
  duration: number,
  suffix: string,
  trigger: boolean,
): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [trigger, end, duration]);

  return `${count}${suffix}`;
}
