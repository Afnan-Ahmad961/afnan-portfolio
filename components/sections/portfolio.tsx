'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  url: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'EternalSec',
    description: 'Portfolio site for a cybersecurity firm. High-performance landing page with secure contact forms and service showcases.',
    image: '/project_images/eternalsec.png',
    tech: ['React', 'Tailwind'],
    url: 'https://eternalsec.vercel.app',
  },
  {
    title: 'SecWall',
    description: 'Portfolio site for a vulnerability management project. Interactive dashboards and reporting tools integration showcase.',
    image: '/project_images/secwall.png',
    tech: ['Next.js', 'TypeScript'],
    url: 'https://securitywall.co/',
  },
  {
    title: 'Abeera',
    description: 'Portfolio website for an artist with a modern look. Focus on gallery layout and visual storytelling.',
    image: '/project_images/abeera.png',
    tech: ['React', 'Tailwind'],
    url: 'https://abeera-xi.vercel.app/',
  },
  {
    title: 'FrosthFlour',
    description: 'Ecommerce site for a bakery. Features include product catalog, shopping cart, and seamless checkout integration.',
    image: '/project_images/fnf.png',
    tech: ['Medusa JS', 'Stripe'],
    url: 'https://www.frostnflour.pk/',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollAmount = track.scrollWidth - track.parentElement!.clientWidth;

      gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + (track.scrollWidth - track.parentElement!.clientWidth),
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 text-balance">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work
          </p>
        </div>

        {/* Portfolio Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-col md:flex-row gap-6 lg:gap-8 md:px-20"
          >
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] md:shrink-0 group rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Build Complete Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <button className="px-4 py-2 bg-primary/60 text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 uppercase tracking-wider">
                      Build Complete
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-secondary/50 text-foreground text-xs font-medium rounded-full border border-border/50 hover:border-accent/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  <button
                    onClick={() => window.open(item.url, '_blank')}
                    className="w-full py-2.5 px-4 bg-primary border border-border rounded-lg text-foreground text-sm font-medium hover:bg-transparent hover:border-primary hover:cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
