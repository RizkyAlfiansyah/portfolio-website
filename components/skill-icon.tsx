"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SkillIconProps = {
  name: string;
  slug?: string | null;
  size?: number;
  className?: string;
  fallbackLabel?: string;
};

const LIGHT_COLOR = "0f172a";
const DARK_COLOR = "e2e8f0";

const BRAND_COLORS: Record<string, string> = {
  linkedin: "0A66C2"
};

const iconUrl = (slug: string, isDark: boolean) => {
  const slugKey = slug.toLowerCase();
  const color = BRAND_COLORS[slugKey] ?? (isDark ? DARK_COLOR : LIGHT_COLOR);
  return `https://cdn.simpleicons.org/${slug}/${color}`;
};

export function SkillIcon({
  name,
  slug,
  size = 16,
  className,
  fallbackLabel
}: SkillIconProps) {
  const [error, setError] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const label = fallbackLabel ?? name.slice(0, 2).toUpperCase();

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!slug || error) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-ink-light/10 text-[9px] font-semibold text-ink-light dark:bg-ink-dark/10 dark:text-ink-dark",
          className
        )}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {label}
      </span>
    );
  }

  return (
    <img
      src={iconUrl(slug, isDark)}
      alt={name}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
}
