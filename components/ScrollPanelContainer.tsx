"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollPanelContainerProps {
  children: React.ReactNode[];
}

export default function ScrollPanelContainer({ children }: ScrollPanelContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".scroll-panel");
    
    // Stacked effect: each panel stays pinned while the next one comes up
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: i === sections.length - 1 ? undefined : 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background">
      {children.map((child, index) => (
        <div key={index} className="scroll-panel w-full min-h-screen relative overflow-hidden bg-background">
          {child}
        </div>
      ))}
    </div>
  );
}
