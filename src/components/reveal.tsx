"use client";

import { useEffect, useRef, useState } from "react";
import cn from "@/utils/cn";

export function Reveal({
  children,
  className,
  delayMs = 0,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        stagger ? "stagger-in" : "reveal-on-scroll",
        visible && "is-visible",
        className
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
