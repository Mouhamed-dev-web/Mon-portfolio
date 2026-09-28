"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "$ whoami",
  "Mouhamed Niang — Full-Stack Developer & Graphiste",
  "",
  "$ skills",
  "Full-Stack, Backend, Design, DevOps",
  "",
  "$ status",
  "Available for amazing projects.",
];

export function Terminal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 w-80 rounded-card border border-accent-border bg-night-card p-4 font-mono text-xs text-ink-secondary shadow-glow"
        >
          {lines.map((line, i) => (
            <p key={i} className={line.startsWith("$") ? "text-accent" : ""}>
              {line || "\u00A0"}
            </p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
