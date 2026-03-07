"use client";

import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/afnan-ahmad-8691182a5/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/Afnan-Ahmad961", icon: Github },
  { name: "Instagram", href: "https://www.instagram.com/afnanthenerd?igsh=ZnZha3Q1aThkanRl", icon: Instagram },
  { name: "X", href: "https://x.com/AfnanAhmad961", icon: Twitter },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-background border-t border-border/40">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Quote Section */}
        <div className="text-center mb-16">
          <blockquote className="relative max-w-2xl mx-auto">
            <span className="absolute -top-6 -left-4 text-6xl text-primary/20 font-serif select-none">&ldquo;</span>
            <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed font-light tracking-wide">
              The only way to do great work is to love what you do.
            </p>
            <span className="absolute -bottom-4 -right-2 text-6xl text-primary/20 font-serif select-none">&rdquo;</span>
            <cite className="block mt-6 text-sm font-mono text-primary tracking-widest uppercase not-italic">
              &mdash; Steve Jobs
            </cite>
          </blockquote>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary/60" />
          <div className="flex-1 h-px bg-border/40" />
        </div>

        {/* Socials & Email */}
        <div className="flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative p-3 rounded-full border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -inset-0.5 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:afnanahmad3338@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-mono tracking-wider"
          >
            <Mail className="w-4 h-4" />
            afnanahmad3338@gmail.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-16 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Afnan Ahmad
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-muted-foreground/60 hover:text-primary font-mono tracking-wider transition-colors duration-300 cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
