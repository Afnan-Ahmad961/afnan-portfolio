'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

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
  return (
    <section className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my recent work
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Build Complete Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <button className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 uppercase tracking-wider">
                    Build Complete
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground">
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
                  className="w-full py-3 px-4 bg-card/80 border border-border rounded-lg text-foreground font-medium hover:bg-card hover:border-accent/50 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
