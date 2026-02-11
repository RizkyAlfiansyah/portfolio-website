"use client";

import { useEffect, useMemo, useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";

type IconCloudThemeProps = {
  slugs: string[];
  className?: string;
};

const LIGHT_COLOR = "0f172a";
const DARK_COLOR = "e2e8f0";

export function IconCloudTheme({ slugs, className }: IconCloudThemeProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const images = useMemo(() => {
    const color = isDark ? DARK_COLOR : LIGHT_COLOR;
    return slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${color}`);
  }, [slugs, isDark]);

  return <IconCloud images={images} className={className} />;
}
