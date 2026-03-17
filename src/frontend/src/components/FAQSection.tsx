import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    q: "What types of projects do you work on?",
    a: "We partner with startups and growth-stage companies on product design, web development, and brand identity. From MVPs to full rebrands.",
  },
  {
    q: "How long does a typical project take?",
    a: "Scope varies, but most design sprints run 2\u20134 weeks. Full-stack builds typically land in 6\u201312 weeks depending on complexity.",
  },
  {
    q: "Do you offer ongoing retainers?",
    a: "Yes. Many clients stay with us post-launch for continuous iteration, feature development, and design system maintenance.",
  },
  {
    q: "What is your design process?",
    a: "We kick off with a discovery session, move into wireframes and prototypes, then production-ready design handoff. You're involved at every step.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Absolutely. We're comfortable diving into existing repos and leveling up what's already there.",
  },
  {
    q: "How do we get started?",
    a: "Just fill out the contact form below or reach out via biggbrains.com. We'll schedule a call within 24 hours.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-3xl" data-ocid="faq.panel">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            FAQs
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
            Questions we <span className="text-gradient">always</span> hear
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              data-ocid={`faq.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-card/60 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm md:text-base">
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full border border-border/60 flex items-center justify-center text-primary font-bold text-lg transition-all duration-300"
                  style={{
                    background:
                      open === i ? "oklch(0.82 0.2 196 / 0.15)" : "transparent",
                    borderColor:
                      open === i ? "oklch(0.82 0.2 196 / 0.5)" : undefined,
                  }}
                >
                  {open === i ? "\u00d7" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
