const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

export default function Footer() {
  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: "oklch(0.08 0.01 262)" }}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Grid bg overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.2 196 / 0.1), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#hero"
            className="flex items-center gap-2"
            data-ocid="footer.link"
          >
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="w-7 h-7"
              aria-hidden="true"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="1.5"
              />
              <path
                d="M10 18 C10 13 13 10 18 10 C23 10 26 13 26 18 C26 23 23 26 18 26"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="18" cy="18" r="3" fill="oklch(0.82 0.2 196)" />
            </svg>
            <span className="font-display font-bold text-lg">
              <span className="text-gradient">Bigg</span>
              <span className="text-foreground">Brains</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              "Services",
              "About",
              "How It Works",
              "Testimonials",
              "Contact",
            ].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                data-ocid="footer.link"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            &copy; {year} — Built with{" "}
            <span className="text-gradient font-semibold">caffeine.ai</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/60">
            The starting point for your next project. Bold UI.
          </p>
        </div>
      </div>
    </footer>
  );
}
