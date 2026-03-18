import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "bg-transparent py-5"
      }`}
      style={
        scrolled
          ? {
              background: "oklch(0.11 0.015 262 / 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid oklch(0.72 0.2 196 / 0.2)",
              boxShadow: "0 1px 20px oklch(0.72 0.2 196 / 0.1)",
            }
          : undefined
      }
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div className="relative w-9 h-9">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="w-9 h-9"
              aria-hidden="true"
            >
              <circle
                cx="18"
                cy="18"
                r="17"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="1.5"
                className="animate-pulse-glow"
              />
              <path
                d="M10 18 C10 13 13 10 18 10 C23 10 26 13 26 18 C26 23 23 26 18 26"
                stroke="oklch(0.82 0.2 196)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="18" cy="18" r="3" fill="oklch(0.82 0.2 196)" />
              <path
                d="M18 10 L18 8 M26 18 L28 18 M18 26 L18 28 M10 18 L8 18"
                stroke="oklch(0.75 0.24 312)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-gradient">Bigg</span>
            <span className="text-foreground">Brains</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/10 relative group ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            data-ocid="nav.primary_button"
            className="glow-primary hover:scale-105 transition-transform"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "oklch(0.1 0.015 262 / 0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid oklch(0.72 0.2 196 / 0.2)",
            }}
          >
            <nav className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 glow-primary"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let&apos;s Talk
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
