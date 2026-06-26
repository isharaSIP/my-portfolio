"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "University Resources Booking System",
      category: "University Project - 2026",
      description: "A comprehensive booking management ecosystem designed for university lecture rooms, computer labs, and scientific apparatus. Features conflict checks, automated approval workflows, and booking statistics.",
      tech: ["React.js", "Spring Boot", "Spring Security", "OAuth2", "JWT", "MySQL", "Java"],
      features: [
        "Real-time double-booking conflict check engine",
        "Role-based privilege filters (Students, Lecturers, Administrators)",
        "Automated booking confirmation and status change mail triggers",
        "Interactive dashboard displaying room utilization charts"
      ],
      github: "https://github.com/isharaSIP/UniBrain-Smart-campus-operations-hub"
    },
    {
      id: 2,
      title: "University Clubs & Event Management System",
      category: "University Project - 2026",
      description: "A digital social hub for academic students. Enables club presidents to publish events, track attendee registrations, issue digital entrance passes, and generate club membership reports.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js APIs", "MongoDB", "JWT"],
      features: [
        "Full calendar event visualizer with filter tags",
        "Multi-stage administrator approval pipeline for events",
        "PDF ticket generator with verify-token indicators",
        "Interactive forums for club members' discussions"
      ],
      github: "https://github.com/isharaSIP/Eventra-University-Club-and-Event-Management-System"
    },
    {
      id: 3,
      title: "Online Recyclable Waste Management System",
      category: "University Project - 2025",
      description: "A green environment dashboard connecting residential households with commercial recycling operators. Handles scheduling, rewards ledger distributions, and driver routes coordinates.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      features: [
        "Flexible drop-off and pickup scheduler coordinates",
        "Rewards point balance sheet translating waste weights to shop discount credits",
        "Recycling vendor inventory management ledger",
        "Client geographical markers interface"
      ],
      github: "https://github.com/isharaSIP/Recyclable-Waste-Management-System"
    },
    {
      id: 4,
      title: "Online Bidding System",
      category: "University Project - 2025",
      description: "A mock real-time product auction portal where users upload products, schedule bidding duration limits, and bid securely on other active auction assets.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Java Servlets", "MySQL"],
      features: [
        "Dynamic countdown bid closing timers on UI",
        "Ledger tracking highest bidding values and timestamps",
        "Advanced item categories filter queries",
        "Sellers console detailing auction transactions"
      ],
      github: "https://github.com/isharaSIP/Online-Bidding-System"
    },
    {
      id: 5,
      title: "Online Property Sales System",
      category: "University Project - 2024",
      description: "A real estate listings hub designed to connect home sellers, land developers, and real estate brokers directly to potential property buyers.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: [
        "Clean property cards with media galleries and dimensions details",
        "Filter forms search indices (Filter by pricing, locations, sizes)",
        "Agents panel managing properties catalogs",
        "Direct email contact form triggers"
      ],
      github: "https://github.com/isharaSIP/Property-Sales-System"
    },
    {
      id: 6,
      title: "Writer LK Business Web",
      category: "Individual Project",
      description: "A web app for small online business with WhatsApp integration",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Express.js"],
      features: [
        "Clean and Modern Design",
        "WhatsApp integration",
        "Feedback section"
      ],
      github: "https://github.com/isharaSIP/writerlk",
      demo: "https://www.writerlk.com"
    }
  ];

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative px-6 py-28 md:px-12 lg:px-24 border-t border-border/25">
      {/* Background visual spotlight */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow">
            04 / Selected Works
          </p> */}
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            Projects I have designed,<br />
            <span className="text-gradient">and implemented.</span>
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((proj, idx) => {
            const isExp = expandedId === proj.id;
            return (
              <motion.div
                layout="position"
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`surface-card group overflow-hidden rounded-3xl border border-border/40 hover:border-primary-glow/35 transition-all w-full ${
                  isExp ? "md:col-span-2 border-primary-glow/40 shadow-glow" : ""
                }`}
              >
                {/* Body Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[280px]">
                  <div>
                    {/* Category Tag */}
                    <span className="font-mono text-[9px] uppercase tracking-wider text-primary-glow mb-2 block font-semibold">
                      {proj.category}
                    </span>
                    
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary-glow transition-colors">
                      {proj.title}
                    </h3>
                      
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {proj.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="rounded px-2.5 py-0.5 font-mono text-[9px] bg-background/50 border border-border text-muted-foreground/95"
                          >
                            {t}
                          </span>
                        ))}
                        {proj.tech.length > 5 && (
                          <span className="rounded px-2.5 py-0.5 font-mono text-[9px] bg-background/50 border border-border text-muted-foreground/60">
                            +{proj.tech.length - 5} more
                          </span>
                        )}
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground mt-5">
                        {proj.description}
                      </p>
                    </div>

                    {/* Interactive expansion container details */}
                    <AnimatePresence>
                      {isExp && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-border/40 overflow-hidden"
                        >
                          <h4 className="font-display text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                            Key Specifications & Features:
                          </h4>
                          <ul className="space-y-2">
                            {proj.features.map((feat) => (
                              <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Extra tech listings if any */}
                          {proj.tech.length > 5 && (
                            <div className="mt-4 pt-4 border-t border-border/30">
                              <h5 className="font-display text-[10px] font-bold text-foreground mb-2 uppercase tracking-wide">
                                Complete Technology Stack:
                              </h5>
                              <div className="flex flex-wrap gap-1.5">
                                {proj.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded px-2 py-0.5 font-mono text-[8px] bg-background border border-border text-primary-glow"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                     {/* Action buttons footer */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-border/30">
                      
                      <div className="flex flex-wrap items-center gap-3">
                        {/* GitHub Link */}
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-5 py-2.5 text-xs font-bold text-foreground transition-all hover:bg-background hover:border-primary-glow/40 hover:text-primary-glow"
                        >
                          <GithubIcon className="h-4 w-4" />
                          Source Repository
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>

                        {/* Live Demo Link */}
                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-primary-glow"
                          >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Expand Toggle */}
                      <button
                        onClick={() => handleToggle(proj.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-glow hover:text-foreground transition-colors cursor-pointer"
                      >
                        {isExp ? (
                          <>
                            Collapse Details
                            <ArrowUpRight className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            View Details
                            <ArrowDownRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                    </div>
                  </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
