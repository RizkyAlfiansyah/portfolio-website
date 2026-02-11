import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function ShineBorder({ children, className }: ShineBorderProps) {
  return (
    <div className={cn("relative rounded-3xl p-[1px]", className)}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-accent-light/40 to-transparent opacity-60 blur-md dark:via-accent-dark/40" />
      <div className="relative rounded-3xl bg-white/70 p-6 backdrop-blur dark:bg-[#101312]/80">
        {children}
      </div>
    </div>
  );
}
