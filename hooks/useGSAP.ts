"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export function useGSAP<T extends HTMLElement = HTMLDivElement>() {
  const scopeRef = useRef<T>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, scopeRef);
    return () => ctx.revert();
  }, []);

  return scopeRef;
}

export function useGSAPContext(
  callback: (context: gsap.Context) => void,
  deps: React.DependencyList = [],
) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!scopeRef.current) return;
    const ctx = gsap.context(callback, scopeRef);
    return () => ctx.revert();
  }, deps);

  return scopeRef;
}
