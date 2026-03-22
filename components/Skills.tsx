"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      const cards = cardsRef.current;
      if (cards) {
        gsap.fromTo(
          cards.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-14 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Skills</p>
        <h2
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-16"
        >
          WHAT I USE
        </h2>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {portfolioData.skills.categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="rounded-2xl glass p-6 border border-[var(--border)] hover:border-primary/30 transition-colors duration-300"
              whileHover={{ y: -4 }}
              data-cursor-hover
            >
              <h3 className="font-display text-xl tracking-wide text-primary mb-4">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm text-foreground-muted bg-white/5 border border-[var(--border)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
