"use client";

import { useEffect, useState, useRef } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const isJumping = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setProgress(Math.round(scrolled));

      if (isJumping.current || lastScrollY.current === winScroll) return;

      const isScrollingDown = winScroll > lastScrollY.current;

      if (isScrollingDown && scrolled >= 10 && scrolled < 15) {
        // Jump to 20% when scrolling down past 10%
        isJumping.current = true;
        window.scrollTo({ top: height * 0.20, behavior: "smooth" });
        setTimeout(() => { isJumping.current = false; }, 1000);
      } else if (!isScrollingDown && scrolled <= 20 && scrolled > 15) {
        // Jump to 10% when scrolling up past 20%
        isJumping.current = true;
        window.scrollTo({ top: height * 0.10, behavior: "smooth" });
        setTimeout(() => { isJumping.current = false; }, 1000);
      }

      lastScrollY.current = winScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed bottom-12 right-12 z-[100] flex-col items-end pointer-events-none">
      <div className="flex items-baseline gap-1 font-mono text-primary group transition-all duration-300">
        <span className="text-5xl font-black tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
          {progress}
        </span>
        <span className="text-lg font-bold opacity-50">%</span>
      </div>
      <div className="w-32 h-1 bg-muted mt-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(var(--primary),0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
