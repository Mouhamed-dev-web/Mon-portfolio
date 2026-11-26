"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const layers = ["User", "Frontend", "API", "Backend", "Database", "Infrastructure", "Deployment"];

export function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading
        eyebrow="Architecture"
        title="Une approche full-stack, du client au déploiement"
      />
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
        {layers.map((layer, i) => (
          <motion.div
            key={layer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center gap-3"
          >
            <span className="rounded-md border border-accent-border bg-accent-soft px-4 py-2 text-sm text-ink-primary">
              {layer}
            </span>
            {i < layers.length - 1 && (
              <span className="text-accent-border md:rotate-0">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
