"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        listRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-14 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Experience</p>
        <h2
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-16"
        >
          WHERE I&apos;VE WORKED
        </h2>
        <div ref={listRef} className="space-y-8">
          {portfolioData.experience.map((exp) => (
            <motion.div
              key={exp.id}
              className="rounded-2xl glass p-6 md:p-8 border border-[var(--border)] hover:border-secondary/30 transition-colors duration-300"
              whileHover={{ x: 4 }}
              data-cursor-hover
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-display text-xl tracking-wide text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-primary font-body">
                  {exp.period}
                </span>
              </div>
              <p className="text-secondary font-body font-medium text-sm md:text-base mb-2">
                {exp.company}
              </p>
              <p className="text-foreground-muted font-body text-sm md:text-base leading-relaxed mb-4">
                {exp.description}
              </p>
              <ul className="list-disc list-inside text-muted text-sm md:text-base space-y-1">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
