import type { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
        variant === "primary" && "bg-cta text-white hover:bg-cta-hover",
        variant === "ghost" &&
          "border border-border-strong text-ink-primary hover:border-accent-border hover:text-accent",
        className
      )}
    >
      {children}
    </a>
  );
}
