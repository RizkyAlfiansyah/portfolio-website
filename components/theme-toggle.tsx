"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@/components/icons";

const STORAGE_KEY = "theme";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextMode = stored ?? (prefersDark ? "dark" : "light");
    setMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
  }, []);

  const toggle = () => {
    const nextMode: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    document.documentElement.classList.toggle("dark", nextMode === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-light text-muted-light transition hover:opacity-80 dark:border-line-dark dark:text-muted-dark"
      aria-label="Toggle theme"
    >
      {mode === "dark" ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
      <span className="sr-only">{mode === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
