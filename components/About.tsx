"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scope = sectionRef;
    const ctx = gsap.context(function () {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-14 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">About</p>
        <h2
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6"
        >
          BUILDING FOR THE WEB
        </h2>
        <div
          ref={textRef}
          className="space-y-4 text-foreground-muted font-body text-lg leading-relaxed"
        >
          <p>{portfolioData.personal.bio}</p>
          <p>
            Based in {portfolioData.personal.location}. Open to remote and
            hybrid roles.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {portfolioData.personal.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full glass text-sm text-foreground-muted hover:text-primary border border-[var(--border)] hover:border-primary/40 transition-all"
              data-cursor-hover
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
