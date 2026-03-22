"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(".loader-text .char", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.04,
      ease: "power3.out",
    })
      .to(
        ".loader-bar",
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        "-=0.3",
      )
      .to(
        ".loader-text .char",
        { y: -20, opacity: 0, duration: 0.3, stagger: 0.02 },
        "+=0.2",
      )
      .to(
        ".loader-wrap",
        { y: "-100%", duration: 0.8, ease: "power3.inOut" },
        "-=0.1",
      )
      .call(() => setVisible(false), undefined, "+=0.1");
  }, []);

  const text = "PORTFOLIO";
  if (!visible) return null;

  return (
    <AnimatePresence>
      <div
        className="loader-wrap fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        aria-hidden
      >
        <div className="loader-text font-display text-4xl sm:text-5xl md:text-6xl tracking-widest text-white overflow-hidden flex">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block translate-y-full opacity-0"
              style={{ willChange: "transform, opacity" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div className="mt-6 w-32 h-px bg-white/20 overflow-hidden">
          <div
            className="loader-bar h-full bg-primary origin-left scale-x-0"
            style={{ backgroundColor: "var(--primary)" }}
          />
        </div>
      </div>
    </AnimatePresence>
  );
}
