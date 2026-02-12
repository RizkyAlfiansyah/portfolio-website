"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MorphingImageProps = {
  sources: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
  morphMs?: number;
  pauseMs?: number;
};

export function MorphingImage({
  sources,
  alt,
  className,
  intervalMs = 4200,
  morphMs = 5000,
  pauseMs = 1000
}: MorphingImageProps) {
  const [index, setIndex] = useState(0);
  const [morph, setMorph] = useState(false);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    if (sources.length <= 1) return;
    let morphTimeout: number | undefined;
    const holdMs = intervalMs + pauseMs;
    const cycleTimeout = window.setTimeout(() => {
      setMorph(true);
      morphTimeout = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % sources.length);
        setMorph(false);
        setSwap((prev) => !prev);
      }, morphMs);
    }, holdMs);

    return () => {
      window.clearTimeout(cycleTimeout);
      if (morphTimeout) window.clearTimeout(morphTimeout);
    };
  }, [index, intervalMs, morphMs, pauseMs, sources.length]);

  if (!sources.length) return null;

  const current = sources[index];
  const next = sources[(index + 1) % sources.length];
  const topFirst = swap ? next : current;
  const topSecond = swap ? current : next;

  return (
    <div className={cn("relative h-full w-full", className)}>
      <div className={cn("morph-layer", morph ? "morph-out" : "morph-in")}>
        <Image src={topFirst} alt={alt} fill className="object-cover scale-150 rounded-[32px] shadow-glow" />
      </div>
      <div className={cn("morph-layer", morph ? "morph-in" : "morph-out")}>
        <Image src={topSecond} alt={alt} fill className="object-cover scale-[1.3] rounded-[32px] shadow-glow" />
      </div>
      <div className="sr-only">{alt}</div>
    </div>
  );
}
