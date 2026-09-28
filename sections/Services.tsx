"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading eyebrow="What I do" title="Services" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-card border border-border bg-night-card p-6 transition-colors hover:border-accent-border"
          >
            <Icon size={22} strokeWidth={1.5} className="mb-4 text-accent" />
            <h3 className="mb-2 font-display text-base text-ink-primary">{title}</h3>
            <p className="text-sm text-ink-secondary">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
