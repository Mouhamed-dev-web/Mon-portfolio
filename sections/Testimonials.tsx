"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading eyebrow="Testimonials" title="Ce qu'on dit de mon travail" />
      <div className="relative mx-auto max-w-2xl rounded-card border border-border bg-night-card p-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-6 text-ink-secondary">&ldquo;{current.comment}&rdquo;</p>
            <p className="font-display text-ink-primary">{current.name}</p>
            <p className="text-xs text-ink-secondary">
              {current.role} — {current.company}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Témoignage précédent"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-ink-secondary hover:text-accent"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Témoignage suivant"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-ink-secondary hover:text-accent"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
