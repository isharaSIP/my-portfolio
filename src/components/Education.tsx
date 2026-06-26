"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Bookmark } from "lucide-react";

interface TimelineItemProps {
  year: string;
  degree: string;
  school: string;
  details?: string;
  icon: React.ReactNode;
  index: number;
}

function TimelineItem({ year, degree, school, details, icon, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative pl-10 md:pl-16 grid grid-cols-1 gap-1"
    >
      {/* Vertical Track Circle Indicator */}
      <span className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-glow bg-background shadow-glow text-primary-glow">
        {icon}
      </span>

      <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary-glow">
        {year}
      </div>

      <div className="surface-card shadow-glow-hover rounded-2xl p-6 mt-2 border border-border/50">
        <h3 className="font-display text-base font-bold text-foreground md:text-lg">{degree}</h3>
        <p className="font-mono text-xs text-muted-foreground mt-1">// {school}</p>
        {details && <p className="text-xs leading-relaxed text-muted-foreground mt-3">{details}</p>}
      </div>
    </motion.div>
  );
}

export default function Education() {
  const items = [
    {
      year: "2024 — Present",
      degree: "BSc (Hons) in Information Technology",
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      details: "Currently a 3rd year 2nd semester student.",
      icon: <GraduationCap className="h-3.5 w-3.5" />,
    },
    {
      year: "2022 — 2024",
      degree: "Pearson BTEC Level 5 HND in Computing",
      school: "Esoft Metro Campus",
      details: "Graduated with overall Merit pass.",
      icon: <Award className="h-3.5 w-3.5" />,
    },
    {
      year: "2021",
      degree: "G.C.E. Advanced Level",
      school: "Maliyadeva College, Kurunegala",
      details: "Completed secondary education in the Physical Science Stream (Mathematics, Physics, Chemistry).",
      icon: <BookOpen className="h-3.5 w-3.5" />,
    },
    {
      year: "2017",
      degree: "G.C.E. Ordinary Level",
      school: "Maliyadeva College, Kurunegala",
      // details: "Completed general secondary education with outstanding achievements, preparing for advanced science and mathematics streams.",
      icon: <Bookmark className="h-3.5 w-3.5" />,
    },
  ];

  return (
    <section id="education" className="relative px-6 py-28 md:px-12 lg:px-24 border-t border-border/25">
      {/* Background soft lighting */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          {/* <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow">
            02 / Education
          </p> */}
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            My educational timeline <br />
            <span className="text-gradient">and academic foundations.</span>
          </h2>
        </motion.div>

        {/* Timeline body */}
        <div className="relative border-l border-border/40 ml-3.5 space-y-12">
          {items.map((it, idx) => (
            <TimelineItem
              key={it.degree}
              year={it.year}
              degree={it.degree}
              school={it.school}
              details={it.details}
              icon={it.icon}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
