"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Cinematic Hero Component
 * Animates a zoom into the laptop screen coordinates:
 * x: 667, y: 492, width: 399, height: 223
 * Image dimensions: 1280 x 960
 */
export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const imgW = 1280;
        const imgH = 960;
        const targetRect = { x: 500, y: 380, width: 399, height: 223 };

        const ctx = gsap.context(() => {
            if (!containerRef.current || !imageRef.current || !stickyRef.current) return;

            const vpW = window.innerWidth;
            const vpH = window.innerHeight;

            const baseScale = Math.max(vpW / imgW, vpH / imgH);
            const targetScale = Math.max(vpW / targetRect.width, vpH / targetRect.height);

            const targetCenterX = targetRect.x + targetRect.width / 2;
            const targetCenterY = targetRect.y + targetRect.height / 2;
            const imgCenterX = imgW / 2;
            const imgCenterY = imgH / 2;

            const offsetX = targetCenterX - imgCenterX;
            const offsetY = targetCenterY - imgCenterY;

            // Start state
            gsap.set(imageRef.current, {
                scale: baseScale,
                x: 0,
                y: 0,
                transformOrigin: "center center"
            });

            // Main zoom logic using manual pinning to prevent gap
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: stickyRef.current,
                pinSpacing: false, // Keep About section strictly behind/below
                scrub: 0.3,
                animation: gsap.to(imageRef.current, {
                    scale: targetScale,
                    x: -offsetX * targetScale,
                    y: -offsetY * targetScale,
                    ease: "none"
                }),
                snap: {
                    snapTo: [0, 1],
                    duration: 0.2,
                    delay: 0,
                    ease: "power1.inOut"
                }
            });

            // Bridge Trigger: Force transition to eliminate the black flicker
            const nextSection = containerRef.current.nextElementSibling as HTMLElement;
            if (nextSection) {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "bottom bottom",
                    onLeave: () => {
                        window.scrollTo({
                            top: nextSection.offsetTop,
                            behavior: "auto"
                        });
                    }
                });

                ScrollTrigger.create({
                    trigger: nextSection,
                    start: "top bottom",
                    onEnterBack: () => {
                        window.scrollTo({
                            top: containerRef.current!.offsetTop + containerRef.current!.offsetHeight - window.innerHeight,
                            behavior: "auto"
                        });
                    }
                });
            }

        }, containerRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[200vh] bg-background z-0"
        >
            <div
                ref={stickyRef}
                className="w-full h-screen overflow-hidden flex items-center justify-center bg-background"
            >
                <div className="relative w-full h-full">
                    <Image
                        ref={imageRef}
                        src="/hero_img.jpeg"
                        alt="Cinematic Hero"
                        fill
                        priority
                        className="will-change-transform object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
