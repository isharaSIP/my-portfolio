"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, MapPin } from "lucide-react";
import anime from "animejs";

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

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const obj = { value: 0 };
    anime({
      targets: obj,
      value: end,
      round: 1,
      duration: duration,
      easing: "easeOutExpo",
      update: () => {
        if (nodeRef.current) {
          nodeRef.current.textContent = obj.value + suffix;
        }
      },
    });
  }, [end, duration, suffix]);

  return <span ref={nodeRef} className="font-display text-3xl font-extrabold text-foreground md:text-4xl">0{suffix}</span>;
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Letter stagger animation using anime.js on mount
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="letter inline-block">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      anime({
        targets: ".letter",
        translateY: [40, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 100 + i * 25,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:px-12 lg:px-24"
    >
      {/* Visual background lights and shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-600/5" />
        <div className="absolute right-10 top-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-600/5" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          
          {/* Hero Content Column */}
          <div>
            {/* Status Pill */}
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Open to Internships & Projects
            </motion.div> */}

            {/* Name Heading */}
            <h1
              ref={titleRef}
              className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl"
            >
              Ishara Senarath
            </h1>

            {/* Staggered Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 flex flex-wrap gap-2.5"
            >
              <span className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-blue-400">
                IT Undergraduate
              </span>
              <span className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-indigo-400">
                Full Stack Developer
              </span>
              <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                Software Engineer
              </span>
            </motion.div>

            {/* Biography Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I am an Information Technology undergraduate at Sri Lanka Institute of Information Technology (SLIIT). I build premium, production-ready web platforms with a focus on robust architectures, clean APIs, and modern frontend design patterns.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-primary-glow"
              >
                View Selected Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="/CV.pdf"
                download="Ishara_Senarath_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3.5 text-xs font-bold text-foreground transition-all hover:bg-surface"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </motion.div>

            {/* Interactive Counters Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex gap-8 border-t border-border/40 pt-8 max-w-md"
            >
              <div>
                <AnimatedCounter end={3} suffix="rd" />
                <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Year Student</p>
              </div>
              <div className="border-r border-border/30 h-8 self-center" />
              <div>
                <AnimatedCounter end={5} suffix="+" />
                <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Featured Projects</p>
              </div>
              <div className="border-r border-border/30 h-8 self-center" />
              <div>
                <AnimatedCounter end={12} suffix="+" />
                <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Tech Stack Skills</p>
              </div>
            </motion.div>

            {/* Social Icons Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 flex items-center gap-5 text-muted-foreground"
            >
              <a
                href="https://github.com/isharaSIP"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-glow"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ishara-senarath"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-glow"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:isharapathumsenarath@gmail.com"
                className="transition-colors hover:text-primary-glow"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Portrait/Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]"
          >
            {/* Glow Backing */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-500/10 blur-3xl opacity-70" />

            <div className="group relative aspect-[4/5] rounded-3xl p-[1px]">
              {/* Outer boundary gradient with animations */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-border/50 to-primary-glow/30 opacity-70 transition-all duration-500 group-hover:from-primary group-hover:to-primary-glow group-hover:opacity-100" />

              {/* Picture wrap container */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-surface p-2.5 backdrop-blur-xl">
                <img
                  src="/myNew22.png"
                  alt="Ishara Senarath"
                  className="h-full w-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Status floating badge */}
              {/* <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-background/90 px-4 py-2.5 text-[10px] font-mono backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-foreground font-semibold">Available for Hire</span>
              </div> */}

              {/* Location floating badge */}
              {/* <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-background/90 px-4 py-2.5 text-[10px] font-mono backdrop-blur-md shadow-lg flex items-center gap-2">
                <MapPin className="h-3 w-3 text-blue-400" />
                <span className="text-muted-foreground">// Based in</span>
                <span className="text-foreground font-semibold">Sri Lanka</span>
              </div> */}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
