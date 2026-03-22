"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { portfolioData } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-14 md:py-28 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label mb-4">Contact</p>
        <h2
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-8"
        >
          LET&apos;S WORK TOGETHER
        </h2>
        <div ref={contentRef} className="space-y-6">
          <p className="text-foreground-muted font-body text-lg">
            Open to new opportunities and interesting projects. Say hello.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground-muted hover:text-primary border border-[var(--border)] hover:border-primary/40 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
            >
              <HiMail className="w-5 h-5" />
              {portfolioData.personal.email}
            </motion.a>
            <span className="inline-flex items-center gap-2 text-muted text-sm">
              <HiLocationMarker className="w-4 h-4" />
              {portfolioData.personal.location}
            </span>
          </div>
          <motion.a
            href={portfolioData.personal.resumeUrl}
            download={portfolioData.personal.resumeUrl.replace(/^\//, "")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-background transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
            style={{ backgroundColor: "var(--primary)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            Download resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
