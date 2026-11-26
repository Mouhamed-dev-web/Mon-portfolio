"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading eyebrow="Method" title="Ma méthode de travail" />
      <div className="grid gap-6 md:grid-cols-4">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="mb-3 block font-display text-3xl text-accent-border">
              {step.number}
            </span>
            <h3 className="mb-2 font-display text-base text-ink-primary">{step.title}</h3>
            <p className="text-sm text-ink-secondary">{step.description}</p>
            {i < processSteps.length - 1 && (
              <span className="absolute right-[-1.25rem] top-2 hidden text-accent-border md:block">
                →
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
