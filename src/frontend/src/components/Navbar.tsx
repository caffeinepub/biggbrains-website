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
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
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
                stroke="oklch(0.7 0.24 312)"
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
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted/50 relative group ${
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
            variant="outline"
            size="sm"
            className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
            data-ocid="nav.secondary_button"
            asChild
          >
            <a
              href="https://biggbrains.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
            data-ocid="nav.primary_button"
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    className={`px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-md transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-3 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/40 text-primary"
                  data-ocid="nav.secondary_button"
                  asChild
                >
                  <a
                    href="https://biggbrains.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground"
                  data-ocid="nav.primary_button"
                  asChild
                >
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      window.location.hash = "contact";
                    }}
                  >
                    Get Started
                  </button>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
