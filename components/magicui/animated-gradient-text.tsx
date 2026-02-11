import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-accent-light via-ink-light to-accent-light bg-[length:200%_200%] bg-clip-text text-transparent animate-pulse-soft dark:from-accent-dark dark:via-ink-dark dark:to-accent-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
