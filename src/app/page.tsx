"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import MouseFollower from "../components/MouseFollower";
import ThreeBackground from "../components/ThreeBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic intro loading panel */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main interface rendered after loader finishes */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen flex flex-col"
        >
          {/* Custom dynamic cursor trailing dots */}
          <MouseFollower />

          {/* WebGL interactive connections background canvas */}
          <ThreeBackground />

          {/* Fixed navigation menu options bar */}
          <Navbar />

          {/* Portfolio landing layout components flow */}
          <main className="relative flex flex-col flex-grow">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </motion.div>
      )}
    </>
  );
}
