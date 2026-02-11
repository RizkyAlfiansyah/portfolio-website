"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypingAnimationProps = {
  texts: string[];
  className?: string;
  durationMs?: number;
  pauseMs?: number;
};

export function TypingAnimation({
  texts,
  className,
  durationMs = 2200,
  pauseMs = 1200
}: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!texts.length) return;
    const total = durationMs + pauseMs;
    const timeout = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setKey((prev) => prev + 1);
    }, total);
    return () => window.clearTimeout(timeout);
  }, [texts, durationMs, pauseMs, index]);

  if (!texts.length) {
    return null;
  }

  const text = texts[index];
  const steps = Math.max(1, text.length + 2);
  const extraSpacing = Math.max(0, text.length - 1) * 0.35;
  const widthValue = `calc(${text.length}ch + ${extraSpacing}em)`;

  return (
    <span
      key={key}
      className={cn("typing", className)}
      style={{
        ["--typing-width" as any]: widthValue,
        ["--typing-steps" as any]: steps,
        ["--typing-duration" as any]: `${durationMs}ms`
      }}
    >
      {text}
    </span>
  );
}
