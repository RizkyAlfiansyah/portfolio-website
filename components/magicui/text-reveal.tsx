import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden align-bottom",
        className
      )}
    >
      <span className="block animate-fade-in" style={{ animationDelay: "120ms" }}>
        {text}
      </span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-40 dark:via-white/10" />
    </span>
  );
}
