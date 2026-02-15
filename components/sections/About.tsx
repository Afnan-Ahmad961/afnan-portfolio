"use client";

import Image from "next/image";
import LogoLoop from "@/components/LogoLoop";

export default function About() {
  const imageLogos = [
  { src: "/logos/typescript.png", alt: "TypeScript" },
  { src: "/logos/react.png", alt: "React js" },
  { src: "/logos/nextjs.png", alt: "Next js" },
  { src: "/logos/html.png", alt: "HTML" },
  { src: "/logos/css.png", alt: "CSS" },
  { src: "/logos/mongodb.png", alt: "MongoDB" },
  { src: "/logos/express.png", alt: "Express" },
  { src: "/logos/prisma.png", alt: "Prisma" },
  { src: "/logos/drizzle.png", alt: "Drizzle" },
  { src: "/logos/trpc.png", alt: "tRPC" },
  { src: "/logos/medusa.png", alt: "Medusa js" }
];


  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="relative h-96 w-full lg:h-full lg:min-h-96 flex items-center justify-center">
            <div className="relative w-full h-full max-w-sm">
              {/* <div className="absolute inset-0  rounded-2xl"></div> */}
              <Image
                src="/about_image.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl relative z-10"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                Who am I?
              </h1>
              <div className="h-1 w-12 bg-accent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a self-taught web developer with over 2 years of hands-on
              experience building production-ready web applications and modern
              websites. I focus on creating clean, scalable solutions and take
              pride in turning real-world requirements into reliable,
              user-friendly products. I'm known for being resourceful and
              persistent — when given a problem, I work through it until it's
              solved.
            </p>

            {/* Technologies Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Technologies
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full"></div>
              </div>

              {/* Animated Logo Loop */}

              <LogoLoop
                logos={imageLogos}
                speed={150}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#0c0a09"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
