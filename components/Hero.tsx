"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const name = portfolioData.personal.name;
  const tagline = portfolioData.personal.tagline;
  const title = portfolioData.personal.title;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = headingRef.current?.querySelectorAll(".char");
      if (!chars?.length) return;

      gsap.set(containerRef.current, { visibility: "visible" });
      gsap.set(chars, { y: 100, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 24, opacity: 0 });
      gsap.set(ctaRef.current, { y: 20, opacity: 0 });
      gsap.set(scrollRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.025,
        delay: 0.4,
      })
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
        .to(scrollRef.current, { opacity: 0.6, duration: 0.5 }, "-=0.1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden visibility-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 85% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0a0e17 0%, #0f172a 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <p
          className="section-label mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {title}
        </p>
        <h1
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-6 text-white"
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ willChange: "transform, opacity" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-foreground-muted font-body max-w-2xl mx-auto mb-12"
        >
          {tagline}
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-background transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:scale-[1.02]"
            style={{ backgroundColor: "var(--primary)" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            View work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-foreground-muted hover:text-primary border border-[var(--border)] hover:border-primary/40 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            Get in touch
          </motion.a>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 border-r-2 border-b-2 border-primary/60 rotate-45"
        />
      </div>
    </section>
  );
}
