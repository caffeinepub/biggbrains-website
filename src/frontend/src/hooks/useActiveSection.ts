import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "services",
  "about",
  "how-it-works",
  "testimonials",
  "faq",
  "contact",
];

export function useActiveSection(): string {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return active;
}
