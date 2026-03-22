"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const hoverables = "a, button, [data-cursor-hover]";
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(hoverables)) setIsHovering(true);
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!(e.relatedTarget as Element)?.closest(hoverables))
        setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [isVisible]);

  const [isPointerFine, setIsPointerFine] = useState<boolean | null>(null);
  useEffect(() => {
    setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
  }, []);
  if (isPointerFine !== true) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="h-10 w-10 rounded-full border-2 border-primary/60 bg-transparent mix-blend-difference"
          style={{
            transform: `scale(${isHovering ? 1.6 : 1})`,
            transition: "transform 0.2s ease",
          }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full bg-primary"
          style={{
            backgroundColor: "var(--primary)",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  );
}
