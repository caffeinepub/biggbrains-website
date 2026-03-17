import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
              Ready to build something
              <br />
              <span className="text-gradient">remarkable?</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tell us about your project. We respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col items-center justify-center gap-8"
            >
              <div className="animate-float">
                <svg
                  aria-hidden="true"
                  width="120"
                  height="160"
                  viewBox="0 0 120 160"
                  fill="none"
                >
                  <path
                    d="M52 140 Q60 155 68 140"
                    stroke="oklch(0.7 0.24 312 / 0.4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-pulse-glow-violet"
                  />
                  <path
                    d="M48 148 Q60 165 72 148"
                    stroke="oklch(0.7 0.24 312 / 0.25)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M56 136 Q60 145 64 136"
                    stroke="oklch(0.82 0.2 196 / 0.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-pulse-glow"
                  />
                  <path
                    d="M60 20 C50 20 38 35 36 55 L36 110 L60 118 L84 110 L84 55 C82 35 70 20 60 20 Z"
                    fill="oklch(0.18 0.04 262)"
                    stroke="oklch(0.82 0.2 196)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M60 5 C54 5 48 14 44 25 L76 25 C72 14 66 5 60 5 Z"
                    fill="oklch(0.82 0.2 196 / 0.2)"
                    stroke="oklch(0.82 0.2 196)"
                    strokeWidth="1.5"
                    className="animate-pulse-glow"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="12"
                    fill="oklch(0.82 0.2 196 / 0.1)"
                    stroke="oklch(0.82 0.2 196)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="6"
                    fill="oklch(0.82 0.2 196 / 0.3)"
                    className="animate-blink"
                  />
                  <path
                    d="M36 90 L20 115 L36 110 Z"
                    fill="oklch(0.7 0.24 312 / 0.3)"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M84 90 L100 115 L84 110 Z"
                    fill="oklch(0.7 0.24 312 / 0.3)"
                    stroke="oklch(0.7 0.24 312)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="50"
                    y1="80"
                    x2="70"
                    y2="80"
                    stroke="oklch(0.82 0.2 196 / 0.3)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="50"
                    y1="90"
                    x2="70"
                    y2="90"
                    stroke="oklch(0.82 0.2 196 / 0.2)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                </svg>
              </div>
              <div className="text-center space-y-3">
                <div className="text-sm text-muted-foreground">
                  Or reach us directly
                </div>
                <a
                  href="https://biggbrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-medium hover:underline text-sm"
                  data-ocid="contact.link"
                >
                  biggbrains.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll be in touch within 24 hours. Talk soon!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.panel"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="bg-card/50 border-border/60"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="bg-card/50 border-border/60"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Brief
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project — what are you building, and what do you need?"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="bg-card/50 border-border/60 resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold text-base group"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                    <Send
                      size={16}
                      className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
