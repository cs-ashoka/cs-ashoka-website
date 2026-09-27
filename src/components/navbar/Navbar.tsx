"use client"
import { jetbrainsMono } from "@/utils/fonts";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gray-100/90 backdrop-blur-md border-b border-border">
     <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/animated-logo.gif"
            alt="CS Society Logo"
            width={57}
            height={57}
            unoptimized
          />
        </a>
        <ul className={`${jetbrainsMono.className} hidden md:flex items-center justify-center gap-8 text-sm uppercase tracking-wide`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative text-on-surface-variant hover:text-primary transition-colors",
                    isActive && "text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end"> <a href="/join-us.html"
  target="_blank"
  rel="noopener noreferrer"
  className={`${jetbrainsMono.className} hidden md:inline-block bg-primary text-on-primary px-5 py-2 text-sm uppercase tracking-wide rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30`}
>
  Join Us
</a></div>
 
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-on-surface"></span>
          <span className="block w-6 h-0.5 bg-on-surface"></span>
          <span className="block w-6 h-0.5 bg-on-surface"></span>
        </button>
      </div>

      {open && (
        <ul className={`${jetbrainsMono.className} md:hidden flex flex-col gap-4 px-6 pb-6 text-sm uppercase tracking-wide`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-block border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors",
                    isActive && "text-primary border-primary"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}