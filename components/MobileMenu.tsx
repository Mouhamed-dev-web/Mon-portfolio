"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-night md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg text-ink-primary">
              Rassoul<span className="text-accent">Conceptor</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.25 }}
                className="font-display text-3xl text-ink-primary transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
