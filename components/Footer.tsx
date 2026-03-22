"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted font-body text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6">
          {portfolioData.personal.social.map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary text-sm font-body transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              {s.name}
            </motion.a>
          ))}
        </div>
        <p className="text-muted/80 text-sm font-body">
          Next.js · Tailwind · GSAP · Framer Motion
        </p>
      </div>
    </footer>
  );
}
