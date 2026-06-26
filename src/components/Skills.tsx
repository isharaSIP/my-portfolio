"use client";

import { motion } from "framer-motion";
import { Layout, Server, Terminal, Database, Paintbrush, Wrench, Shield, Cloud } from "lucide-react";

// Inline brand SVGs for professional display
const ReactIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg className="h-3.5 w-3.5 text-foreground" viewBox="0 0 180 180" fill="currentColor">
    <path d="M120.9 94.3L153.6 142.2M137 77.2L91.4 10.3C87.4 4.5 80.8 1 73.8 1C61.8 1 52 10.8 52 22.8V126.9M127.3 64.9C133 73.2 136 83.1 136 93.3C136 116.9 116.9 136 93.3 136C81 136 69.8 130.8 61.9 122.4" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const JSIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm20.06 18.232c-.156-.37-.417-.678-.78-.921-.365-.243-.8-.365-1.309-.365-.411 0-.767.096-1.068.288-.302.193-.522.46-.66.804-.139.342-.208.736-.208 1.181 0 .426.071.81.213 1.152.141.343.376.609.704.798.328.188.723.283 1.183.283.473 0 .886-.11 1.238-.332.353-.223.602-.533.748-.931.147-.398.22-1.049.22-1.956H19.98c.002-.507-.062-.907-.162-1.201zm-4.708-5.304H12.38v8.664H9.721v-8.664H6.845V10.29h8.384v2.638z" />
  </svg>
);

const TSIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm20.06 18.232c-.156-.37-.417-.678-.78-.921-.365-.243-.8-.365-1.309-.365-.411 0-.767.096-1.068.288-.302.193-.522.46-.66.804-.139.342-.208.736-.208 1.181 0 .426.071.81.213 1.152.141.343.376.609.704.798.328.188.723.283 1.183.283.473 0-.156-.37-.417-.678-.78-.921zM9.721v-8.664H6.845V10.29h8.384v2.638H9.721v6.026z" />
  </svg>
);

const JavaIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#e76f51]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.164 16.486c-.53 1.157-1.946 2.096-3.844 2.651l.362 1.018c2.404-.702 4.159-1.91 4.887-3.498l-1.405-.171zm-9.352 1.427c-.779.13-1.603.203-2.464.218 2.012.721 5.385.938 7.915-.045l-.462-1.01c-1.892.738-4.475.76-4.989.837zm9.645-12.019c-2.31 0-3.666 1.944-3.766 4.316-.073 1.761.644 3.326 1.821 4.095 1.171.763 2.766.702 3.565-.632.793-1.326.689-3.238-.383-4.839-1.077-1.602-2.37-2.94-1.237-2.94.391 0 1.096.536 1.705 1.258l.685-.796c-.958-1.096-2.128-1.462-2.39-1.462zm-6.19 2.072l.462.906c3.27-1.666 4.417-3.535 3.349-4.882l-.837.58c.837 1.045-.213 2.375-2.974 3.396zm.266 10.378c-2.52.483-5.263.296-6.666-.411 1.109.95 3.75 1.49 6.277 1.015l.389-.604z" />
  </svg>
);

const PHPIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#777BB4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 13H8v-2h1.5c.83 0 1.5-.67 1.5-1.5S10.33 8 9.5 8H6v7h1.5v-2H8v2h1.5zm6.5-3.5c0-.83-.67-1.5-1.5-1.5H12v7h1.5v-2h1c.83 0 1.5-.67 1.5-1.5v-2zm-1.5 1.5H13.5v-2h1c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.091 18l-5.454-3.149V8.563L9.091 5.41l5.454 3.153v6.287L9.091 18zm6.216-9.878L10.332 5.24v5.336l4.975 2.882V8.122zM2.693 8.122v5.336l4.975-2.882V5.24L2.693 8.122zm6.398 9.387l4.975-2.882V9.291l-4.975 2.882v5.336zM9.091 0L0 5.24v13.52L9.091 24l9.091-5.24v-13.52L9.091 0z" />
  </svg>
);

const SpringIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.6c-1.32-.48-2.28-1.56-2.28-2.88 0-1.8 1.8-3.24 3.6-3.24s3.6 1.44 3.6 3.24c0 1.32-.96 2.4-2.28 2.88l-.6-1.2c.48-.12.84-.6.84-1.08 0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2c0 .48.36.96.84 1.08l-.6 1.2z" />
  </svg>
);

const MySQLIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const MongoIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5c-.2 0-.3.1-.4.3C10.5 4.5 7.5 9 7.5 12.5c0 3.2 2 5.5 4.5 5.5s4.5-2.3 4.5-5.5c0-3.5-3-8-4.1-10.7-.1-.2-.2-.3-.4-.3zM12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6.086C14.286 2.43 18.06 0 22.286 0 23.23 0 24 .77 24 1.714v17.43c0 .762-.5 1.417-1.226 1.623-3.666 1.037-7.39 1.233-10.774.343a4.017 4.017 0 0 1-.944-.378 4.025 4.025 0 0 1-.944.378c-3.385.89-7.108.694-10.774-.343A1.711 1.711 0 0 1 0 19.144V1.714C0 .77.77 0 1.714 0 5.94 0 9.714 2.43 12 6.086z" />
  </svg>
);

const VercelIcon = () => (
  <svg className="h-3 w-3 text-foreground" viewBox="0 0 76 65" fill="currentColor">
    <polygon points="38,0 76,65 0,65" />
  </svg>
);

const GitIcon = () => (
  <svg className="h-3.5 w-3.5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.277 11.761L12.239.723a1.665 1.665 0 0 0-2.355 0L7.42 3.187l2.84 2.84a1.657 1.657 0 0 1 2.378-.008 1.67 1.67 0 0 1 .008 2.357L9.82 11.205a1.672 1.672 0 1 1-2.366-2.365l2.812-2.813-2.828-2.828-4.715 4.717a1.665 1.665 0 0 0 0 2.355l11.038 11.038a1.665 1.665 0 0 0 2.355 0l11.038-11.038a1.665 1.665 0 0 0 0-2.355" />
  </svg>
);

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-4.5 w-4.5" />,
      skills: [
        { name: "React.js", icon: <ReactIcon /> },
        { name: "Next.js", icon: <NextIcon /> },
        { name: "HTML", icon: <span className="text-[10px] font-bold text-[#E34F26]">H5</span> },
        { name: "CSS", icon: <span className="text-[10px] font-bold text-[#1572B6]">C3</span> },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-4.5 w-4.5" />,
      skills: [
        { name: "Node.js", icon: <NodeIcon /> },
        { name: "Express.js", icon: <span className="text-[10px] font-bold text-foreground">ex</span> },
        { name: "Spring Boot", icon: <SpringIcon /> },
        { name: "REST APIs", icon: <span className="text-[9px] font-bold text-[#60a5fa]">//</span> },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="h-4.5 w-4.5" />,
      skills: [
        { name: "JavaScript", icon: <JSIcon /> },
        { name: "TypeScript", icon: <TSIcon /> },
        { name: "Java", icon: <JavaIcon /> },
        { name: "PHP", icon: <PHPIcon /> },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-4.5 w-4.5" />,
      skills: [
        { name: "MySQL", icon: <MySQLIcon /> },
        { name: "MongoDB", icon: <MongoIcon /> },
      ],
    },
    {
      title: "UI Technologies",
      icon: <Paintbrush className="h-4.5 w-4.5" />,
      skills: [
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
      ],
    },
    {
      title: "Tools & Git",
      icon: <Wrench className="h-4.5 w-4.5" />,
      skills: [
        { name: "Git", icon: <GitIcon /> },
        { name: "GitHub", icon: <span className="text-[10px] font-bold text-foreground">GH</span> },
        { name: "Postman", icon: <span className="text-[10px] font-bold text-[#FF6C37]">PM</span> },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="h-4.5 w-4.5" />,
      skills: [
        { name: "JWT", icon: <span className="text-[10px] font-bold text-yellow-400">JWT</span> },
        { name: "OAuth2", icon: <span className="text-[10px] font-bold text-red-400">OA2</span> },
      ],
    },
    {
      title: "Deployment",
      icon: <Cloud className="h-4.5 w-4.5" />,
      skills: [
        { name: "Vercel", icon: <VercelIcon /> },
      ],
    },
  ];

  return (
    <section id="skills" className="relative px-6 py-28 md:px-12 lg:px-24 border-t border-border/25">
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute left-10 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary-glow">
            03 / Skills
          </p> */}
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            My technology catalog and <br />
            <span className="text-gradient">development strengths.</span>
          </h2>
        </motion.div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="surface-card shadow-glow-hover group relative rounded-2xl p-6 border border-border/40 hover:border-primary-glow/40 transition-colors"
            >
              {/* Header block inside categories */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-border/70 bg-background/50 text-muted-foreground group-hover:border-primary-glow/30 group-hover:text-primary-glow transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display text-xs font-bold text-foreground tracking-tight group-hover:text-primary-glow transition-colors duration-300">
                  {cat.title}
                </h3>
              </div>

              {/* Skills pills wrap list */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/40 px-3 py-1.5 text-[10px] text-muted-foreground hover:border-primary-glow/40 hover:bg-background/80 hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    {skill.icon && (
                      <span className="flex items-center justify-center shrink-0">
                        {skill.icon}
                      </span>
                    )}
                    <span className="font-semibold text-foreground/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
