"use client";

import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Restrict viewport scroll while assets load
    document.body.style.overflow = "hidden";

    const countObj = { value: 0 };

    const tl = anime.timeline({
      complete: () => {
        // Slide out effect with bezier curve
        anime({
          targets: loaderRef.current,
          translateY: "-100%",
          duration: 1000,
          easing: "cubicBezier(0.85, 0, 0.15, 1)",
          complete: () => {
            setVisible(false);
            document.body.style.overflow = "unset";
            onComplete();
          },
        });
      },
    });

    // Animate loading digits
    tl.add({
      targets: countObj,
      value: 100,
      round: 1,
      duration: 2200,
      easing: "cubicBezier(0.25, 1, 0.5, 1)",
      update: () => {
        setProgress(countObj.value);
      },
    });

    // Draw the hexagon svg outline path
    anime({
      targets: ".loader-hexagon path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 1800,
      delay: 100,
    });

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#030712] text-foreground select-none"
    >
      <div className="flex flex-col items-center space-y-10">
        {/* Cinematic SVG drawing logo */}
        <div className="relative h-28 w-28">
          <svg className="loader-hexagon h-full w-full" viewBox="0 0 100 100">
            {/* Elegant double-hexagon stroke */}
            <path
              d="M50,6 L88,28 L88,72 L50,94 L12,72 L12,28 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="400"
              strokeDashoffset="400"
            />
            <text
              x="50%"
              y="53%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#ffffff"
              className="font-display text-2xl font-bold tracking-widest"
              style={{ letterSpacing: "1px" }}
            >
              IS
            </text>
          </svg>
        </div>

        {/* Counter and status log */}
        <div className="flex flex-col items-center space-y-2">
          <span
            ref={counterRef}
            className="font-display text-5xl font-extrabold tracking-tighter md:text-6xl text-gradient"
          >
            {String(progress).padStart(3, "0")}%
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-blue-400/80 animate-pulse">
            LOADING PORTFOLIO ENVIRONMENT
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 font-mono text-[8px] uppercase tracking-[0.4em] text-muted-foreground/30">
        Ishara Senarath &copy; 2026
      </div>
    </div>
  );
}
