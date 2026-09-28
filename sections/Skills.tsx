"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading eyebrow="Stack" title="Compétences & technologies" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-card border border-border bg-night-card p-6"
          >
            <h3 className="mb-4 font-display text-lg text-ink-primary">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
