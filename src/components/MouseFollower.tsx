"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Position references for linear interpolation
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect mobile touch devices to disable custom cursor
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Track when user hovers on buttons/links
    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const updateInteractions = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .surface-card'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Watch DOM changes to bind new elements
    const observer = new MutationObserver(updateInteractions);
    observer.observe(document.body, { childList: true, subtree: true });
    updateInteractions();

    // Lerp trail animation frame loop
    let reqId: number;
    const tick = () => {
      // Linear interpolation: currentPos += (targetPos - currentPos) * factor
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      reqId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(reqId);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Tiny inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-110 -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference transition-transform duration-100 ease-out"
      />
      {/* Delayed trailing outer ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-109 -ml-4 -mt-4 h-8 w-8 rounded-full border border-blue-400/50 bg-blue-500/5 transition-all duration-300 ease-out ${
          hovered ? "h-16 w-16 -ml-8 -mt-8 border-blue-400 bg-blue-500/10 shadow-glow" : ""
        }`}
      />
    </>
  );
}
