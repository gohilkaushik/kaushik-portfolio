"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { portfolioData } from "@/data/portfolioData";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  // { href: "#certifications", label: "Certifications" },
  // { href: "#open-source", label: "Open Source" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`rounded-2xl transition-all duration-300 ${
            scrolled ? "glass px-6 py-3 shadow-lg" : "bg-transparent px-0 py-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="font-display text-xl tracking-wider text-white hover:text-primary transition-colors"
              data-cursor-hover
            >
              {portfolioData.personal.name.split(" ")[0].toUpperCase()}
            </Link>
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-foreground-muted hover:text-primary transition-colors"
                    data-cursor-hover
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setOpen((o) => !o)}
              data-cursor-hover
            >
              {open ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-6 rounded-2xl glass py-4 px-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-foreground-muted hover:text-primary font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
