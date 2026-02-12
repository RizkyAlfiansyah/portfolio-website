"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMoon, IconSun } from "@/components/icons";

const STORAGE_KEY = "theme";

type ThemeMode = "light" | "dark";

type AnimatedThemeToggleProps = {
  className?: string;
};

export function AnimatedThemeToggle({ className }: AnimatedThemeToggleProps) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const nextMode = stored ?? "dark";
    setMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
    if (!stored) {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    }
  }, []);

  const toggle = () => {
    const nextMode: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-light bg-white/70 transition hover:opacity-90 dark:border-line-dark dark:bg-[#101312]/80",
        className
      )}
    >
      <span
        className={cn(
          "absolute transition-all duration-500",
          mode === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      >
        <IconMoon className="h-4 w-4 text-accent-dark" />
      </span>
      <span
        className={cn(
          "absolute transition-all duration-500",
          mode === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      >
        <IconSun className="h-4 w-4 text-accent-light" />
      </span>
      <span className="sr-only">{mode === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
