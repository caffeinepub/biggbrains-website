const items = [
  "Web Design",
  "UI/UX Development",
  "Brand Identity",
  "Mobile Apps",
  "SEO Optimization",
  "Digital Strategy",
  "Creative Solutions",
  "E-Commerce",
  "Motion Design",
  "Cloud Solutions",
];

const separator = <span className="mx-4 text-white/60">✦</span>;

const repeated = [...items.map((t) => `${t}-a`), ...items.map((t) => `${t}-b`)];

export default function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{
        background:
          "linear-gradient(90deg, #06b6d4 0%, #7c3aed 50%, #06b6d4 100%)",
      }}
    >
      <div
        className="animate-marquee flex whitespace-nowrap"
        style={{ animationDuration: "20s" }}
      >
        {repeated.map((key) => (
          <span
            key={key}
            className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm"
          >
            {key.replace(/-[ab]$/, "")}
            {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
