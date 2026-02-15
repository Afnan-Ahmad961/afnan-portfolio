"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollPanelContainerProps {
  children: [React.ReactNode, React.ReactNode, ...React.ReactNode[]];
}

export default function ScrollPanelContainer({ children }: ScrollPanelContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");
    const firstPanel = panels[0];
    const secondPanel = panels[1];

    if (firstPanel && secondPanel) {
      // Pin only the first panel (About) while the second one (Portfolio) scrolls over it
      ScrollTrigger.create({
        trigger: firstPanel,
        start: "top top",
        end: () => `+=${secondPanel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background">
      {/* First panel: Pinned */}
      <div className="scroll-panel w-full min-h-screen relative overflow-hidden bg-background z-10">
        {children[0]}
      </div>
      
      {/* Rest of the content: Scrolls normally over/after the pinned section */}
      <div className="scroll-panel w-full relative bg-background z-20">
        {children.slice(1)}
      </div>
    </div>
  );
}
