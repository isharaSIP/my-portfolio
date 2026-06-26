"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Users } from "lucide-react";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}

function PillarCard({ icon, title, desc, index }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="surface-card shadow-glow-hover relative overflow-hidden rounded-2xl p-6"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50 text-blue-400">
          {icon}
        </div>
        <h3 className="font-display font-bold text-foreground text-base">{title}</h3>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  const pillars = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Analytical Problem Solving",
      desc: "Deconstructs complex functional issues into clean, modular logic blocks. Focused on execution efficiency and performance scaling.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Clean Systems Architecture",
      desc: "Advocates for modular codebase structure, strict separation of concerns, REST API safety, and reliable database schema setups.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Synergistic Teamwork",
      desc: "Enjoys code reviews, active peer discussions, documentation compliance, and agile software development cycles.",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-28 md:px-12 lg:px-24 border-t border-border/25">
      {/* Decorative background vectors */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[90px] dark:bg-blue-600/3" />
      
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          
          {/* Left bio column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow">
              01 / Biography
            </p> */}
            <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Deconstruct complexity. <br />
              <span className="text-gradient">Engineered with precision.</span>
            </h2>
            
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                I am a highly motivated Information Technology undergraduate at SLIIT, currently pursuing my BSc (Honours) degree. My engineering focus lies in the intersection between robust backends and premium, polished user interfaces.
              </p>
              <p>
                My learning journey began with exploring fundamental coding concepts, leading me to specialize in full-stack ecosystems. Whether designing data relationships in MySQL and MongoDB, creating REST interfaces with Spring Boot and Node.js, or polishing micro-interactions in React and Next.js, I approach every codebase with rigorous standards.
              </p>
              <p>
                I thrive in environments that challenge me to solve concrete user problems, learn new frameworks rapidly, and collaborate with other developers. My goal is to build digital products that are not only performant and stable under the hood, but also offer smooth, memorable, and high-end aesthetics on the screen.
              </p>
            </div>
          </motion.div>

          {/* Right pillars column */}
          <div className="grid gap-6">
            <div className="mb-2">
              {/* <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-1">
                // Core Philosophy
              </p> */}
              <h3 className="font-display text-lg font-bold text-foreground">How I approach software engineering</h3>
            </div>
            
            {pillars.map((pillar, idx) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                desc={pillar.desc}
                index={idx}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
