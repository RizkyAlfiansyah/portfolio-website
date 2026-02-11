import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.25),transparent_65%)] blur-2xl dark:bg-[radial-gradient(circle_at_center,rgba(94,234,212,0.22),transparent_65%)]",
        className
      )}
    />
  );
}
