"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-14 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Education</p>
        <h2
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-16"
        >
          EDUCATION
        </h2>
        <div ref={listRef} className="space-y-8">
          {portfolioData.education.map((edu) => (
            <motion.div
              key={edu.id}
              className="rounded-2xl glass p-6 md:p-8 border border-[var(--border)] hover:border-secondary/30 transition-colors duration-300"
              whileHover={{ x: 4 }}
              data-cursor-hover
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="font-display text-xl tracking-wide text-white">
                  {edu.degree}
                </h3>
                <span className="text-sm text-primary font-body">
                  {edu.period}
                </span>
              </div>
              <p className="text-secondary font-body font-medium text-sm mb-2">
                {edu.institution}
              </p>
              {/* {edu.description && (
                <p className="text-foreground-muted font-body text-sm leading-relaxed">
                  {edu.description}
                </p>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
