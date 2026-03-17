import { motion } from "motion/react";

const row1 = [
  "Nexora",
  "Veltrix",
  "Orbify",
  "Cloudstack",
  "Luminate",
  "Praxis",
  "Syntho",
  "Arqive",
];
const row2 = [
  "Zenflo",
  "Pinnacle",
  "Bravo",
  "Stratix",
  "Velox",
  "Novacore",
  "Axient",
  "Nexora",
];

function LogoPill({ name }: { name: string }) {
  return (
    <div className="relative mx-3 flex-shrink-0 group cursor-default inline-block">
      <div
        className="px-6 py-3 rounded-full transition-transform duration-300 group-hover:scale-110 select-none"
        style={{
          background:
            "linear-gradient(oklch(0.97_0.005_255),oklch(0.97_0.005_255)) padding-box, linear-gradient(135deg,oklch(0.55_0.18_196),oklch(0.52_0.2_300)) border-box",
          border: "1.5px solid transparent",
        }}
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-foreground/70 group-hover:text-foreground transition-colors duration-200">
          {name}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
}: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full relative py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, oklch(0.99_0.003_255), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, oklch(0.99_0.003_255), transparent)",
        }}
      />
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((name, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: marquee duplicate items need index
          <LogoPill key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.96_0.01_255) 0%, oklch(0.99_0.003_255) 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "oklch(0.55_0.18_196)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-40 rounded-full blur-3xl opacity-15"
        style={{ background: "oklch(0.52_0.2_300)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.55_0.18_196)" }}
          >
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted By{" "}
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.82_0.18_196), oklch(0.65_0.28_300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Leading Brands
              <motion.span
                className="absolute left-0 bottom-0 h-[3px] rounded-full block"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.82_0.18_196), oklch(0.65_0.28_300))",
                }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Powering digital experiences for innovative companies worldwide
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>
      </div>
    </section>
  );
}
