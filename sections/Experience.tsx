"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading eyebrow="Career" title="Expérience" />
      <div className="relative border-l border-border pl-8">
        {experience.map((exp, i) => (
          <motion.div
            key={`${exp.year}-${exp.role}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="mb-1 font-mono text-xs text-accent">{exp.year}</p>
            <h3 className="mb-1 font-display text-lg text-ink-primary">
              {exp.role} — {exp.company}
            </h3>
            <p className="mb-3 text-sm text-ink-secondary">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((t) => (
                <Badge key={t} label={t} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
