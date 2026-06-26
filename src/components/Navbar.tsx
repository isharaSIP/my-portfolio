"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Add event listener to scroll to style nav bar borders on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor which section is active via intersection observers
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-90 px-6 py-4 transition-all duration-300 md:px-12 ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-6 py-3.5 transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/80 shadow-glow-sm backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Initials Brand Logo */}
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-foreground hover:opacity-90">
          ishara<span className="text-primary-glow">.</span>
        </a>

        {/* Navigation list */}
        <ul className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative block px-1 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-primary-glow" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-glow shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Global Controls & Theme */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground transition-all hover:border-primary-glow/40 hover:text-primary-glow cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all hover:scale-[1.03] hover:bg-primary-glow md:block cursor-pointer"
            style={{ boxShadow: scrolled ? "var(--shadow-glow-sm)" : "none" }}
          >
            Let's talk
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/50 text-foreground md:hidden hover:border-primary-glow/40 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {/* Responsive mobile nav pane */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-6 right-6 top-24 z-80 rounded-2xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-3 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg py-2.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-border/40 mt-1">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-primary py-3 text-xs font-bold text-white text-center shadow-md"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
