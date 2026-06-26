"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:px-12 lg:px-24 border-t border-border/25">
      {/* Background visual spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow">
              05 / Connect
            </p> */}
            <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Let's build something <br />
              <span className="text-gradient">exceptional together.</span>
            </h2>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
              I am open to internship opportunities, software engineering roles, and collaborative projects. Reach out via email or connect on my social networks.
            </p>
          </motion.div>

          {/* Centered Glassmorphic Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface-card rounded-3xl p-6 md:p-8 border border-border/40 w-full max-w-lg mt-12 grid gap-5"
          >
            {/* Email Address Link */}
            <div className="flex items-center gap-4 text-left p-4 rounded-xl border border-border/30 bg-background/20 hover:border-primary-glow/30 hover:bg-background/40 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 text-blue-400 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Email Address</span>
                <a href="mailto:isharapathumsenarath@gmail.com" className="text-xs md:text-sm font-bold text-foreground hover:text-primary-glow transition-colors truncate block">
                  isharapathumsenarath@gmail.com
                </a>
              </div>
            </div>

            {/* Location Address */}
            <div className="flex items-center gap-4 text-left p-4 rounded-xl border border-border/30 bg-background/20 hover:border-primary-glow/30 hover:bg-background/40 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 text-blue-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Base Coordinates</span>
                <span className="text-xs md:text-sm font-bold text-foreground block">
                  Colombo, Sri Lanka
                </span>
              </div>
            </div>

            {/* Social channels grid */}
            <div className="pt-4 border-t border-border/20 mt-1 flex items-center justify-between gap-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                {/* // Social Links */}
              </span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/isharaSIP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface hover:border-primary-glow/40 hover:text-primary-glow transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://linkedin.com/in/ishara-senarath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface hover:border-primary-glow/40 hover:text-primary-glow transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Centered copyright details footer */}
          <div className="mt-20 pt-8 border-t border-border/25 text-center text-[10px] text-muted-foreground w-full space-y-2">
            <p>&copy; {new Date().getFullYear()} Ishara Senarath. Crafted with precision.</p>
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground/35">
              Available Worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
