"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  target,
  suffix = "",
  durationMs = 2000,
}: {
  target: number;
  suffix?: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;

          const step = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / durationMs, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) window.requestAnimationFrame(step);
          };

          window.requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
