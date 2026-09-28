"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted && theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-accent-border hover:text-accent"
    >
      {mounted && theme === "dark" ? (
        <Sun size={16} strokeWidth={1.75} />
      ) : (
        <Moon size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}
