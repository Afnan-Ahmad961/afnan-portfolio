"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicBento from "@/components/MagicBento";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const expContainerRef = useRef<HTMLDivElement>(null);
  const exp1Ref = useRef<HTMLDivElement>(null);
  const exp2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animation on desktop (md and above)
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
        },
      });

      // Reset initial states
      gsap.set([exp1Ref.current, exp2Ref.current, expContainerRef.current], { opacity: 0 });

      // Phase 1: Person moves Right to Left (X only), Bento slides RIGHT
      tl.to(bentoRef.current, { x: "100vw", opacity: 0, duration: 2 }, "start")
        .to(personRef.current, { x: "-65vw", ease: "power2.inOut", duration: 2 }, "start")
        
        // Phase 1b: Work Experience Header & Intern Content slide in
        .to(expContainerRef.current, { opacity: 1, duration: 0.5 }, "start+=1.2")
        .fromTo(
          exp1Ref.current,
          { x: "50%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
          "start+=1.2"
        )

      // Phase 2: Person moves Left to Right (Junior Part)
      tl.to(personRef.current, { x: "-5vw", ease: "power2.inOut", duration: 2 }, "next")
        .to(exp1Ref.current, { x: "50%", opacity: 0, ease: "power2.in", duration: 1 }, "next")
        .fromTo(
          exp2Ref.current,
          { x: "-50%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
          "next+=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center"
    >
      {/* Background/Fixed Person - Centered Vertically */}
      <div
        ref={personRef}
        className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[22vw] h-[65vh] z-50 pointer-events-none"
      >
        <Image
          src="/person-dummy.png"
          alt="Afnan"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        
        {/* Phase 0: Workflow Grid */}
        <div ref={bentoRef} className="w-full max-h-[90vh] flex flex-col items-center justify-center">
          <div className="w-full scale-[0.8] lg:scale-90 origin-center">
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          </div>
        </div>

        {/* Work Experience Container (Hidden on Mobile) */}
        <div ref={expContainerRef} className="hidden md:flex absolute inset-0 flex-col items-center justify-center pointer-events-none">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary/80 uppercase tracking-[0.3em] drop-shadow-sm">Work Experience</h2>
           
           <div className="relative w-full h-1/2 flex items-center justify-center">
              {/* Intern Content */}
              <div
                ref={exp1Ref}
                className="absolute right-[12%] w-[38%] flex flex-col space-y-6 opacity-0"
              >
                <div className="space-y-2 text-right md:text-left">
                  <h3 className="text-primary font-mono text-xl tracking-tighter">2023</h3>
                  <h2 className="text-5xl font-black text-foreground tracking-tight leading-none">Full-Stack Intern</h2>
                </div>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed pointer-events-auto">
                  Contributed to client projects using JS/TS. Focused on API integration, 
                  database operations, and responsive UIs while mastering team workflows.
                </p>
              </div>

              {/* Junior Content */}
              <div
                ref={exp2Ref}
                className="absolute left-[12%] w-[38%] flex flex-col space-y-6 opacity-0"
              >
                <div className="space-y-2">
                  <h3 className="text-primary font-mono text-xl tracking-tighter">2024–2025</h3>
                  <h2 className="text-5xl font-black text-foreground tracking-tight leading-none">Junior Developer</h2>
                </div>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed pointer-events-auto">
                  Delivered production web apps with scalable architectures. Optimized performance 
                  and built reusable systems for polished, deployable interfaces.
                </p>
              </div>
           </div>
        </div>

        {/* Mobile View: Static Stack */}
        <div className="md:hidden flex flex-col space-y-12 w-full pt-10 px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Workflow</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-2 border-l-2 border-primary pl-6">
               <h3 className="text-primary font-mono text-sm">2023</h3>
               <h2 className="text-xl font-bold text-foreground">Full-Stack Intern</h2>
               <p className="text-sm text-muted-foreground leading-snug">Contributed to client projects. Focused on API integration and responsive UIs.</p>
            </div>
            <div className="space-y-2 border-l-2 border-primary pl-6">
               <h3 className="text-primary font-mono text-sm">2024–2025</h3>
               <h2 className="text-xl font-bold text-foreground tracking-tight">Junior Next.js Developer</h2>
               <p className="text-sm text-muted-foreground leading-snug">Delivered production web apps. Optimized performance and built reusable systems.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;
