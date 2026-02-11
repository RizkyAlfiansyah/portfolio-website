"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MorphingTextProps = {
  texts: string[];
  className?: string;
  intervalMs?: number;
  morphMs?: number;
  pauseMs?: number;
};

export function MorphingText({
  texts,
  className,
  intervalMs = 2800,
  morphMs = 600,
  pauseMs = 0
}: MorphingTextProps) {
  const [index, setIndex] = useState(0);
  const [morph, setMorph] = useState(false);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    if (texts.length <= 1) return;
    let morphTimeout: number | undefined;
    const holdMs = intervalMs + pauseMs;
    const cycleTimeout = window.setTimeout(() => {
      setMorph(true);
      morphTimeout = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setMorph(false);
        setSwap((prev) => !prev);
      }, morphMs);
    }, holdMs);

    return () => {
      window.clearTimeout(cycleTimeout);
      if (morphTimeout) window.clearTimeout(morphTimeout);
    };
  }, [index, intervalMs, morphMs, pauseMs, texts.length]);

  if (!texts.length) {
    return null;
  }

  const current = texts[index];
  const next = texts[(index + 1) % texts.length];
  const topFirst = swap ? next : current;
  const topSecond = swap ? current : next;

  return (
    <span className={cn("morph-wrap", className)}>
      <span
        className={cn("morph-layer", morph ? "morph-out" : "morph-in")}
        aria-hidden="true"
      >
        {topFirst}
      </span>
      <span
        className={cn("morph-layer", morph ? "morph-in" : "morph-out")}
        aria-hidden="true"
      >
        {topSecond}
      </span>
      <span className="invisible" aria-hidden="true">
        {current}
      </span>
      <span className="sr-only">{current}</span>
    </span>
  );
}
