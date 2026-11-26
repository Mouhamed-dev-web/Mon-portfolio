"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading
        eyebrow="About"
        title="Développeur full-stack, de la base de données à l'interface"
        description="Développeur full-stack basé au Sénégal, je conçois des applications web complètes, de l'architecture back-end à l'interface utilisateur."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-4 text-ink-secondary"
      >
        <p>
          Je travaille sur l&rsquo;ensemble de la chaîne de production d&rsquo;un produit web :
          conception de la base de données, développement back-end et front-end, jusqu&rsquo;à
          l&rsquo;interface et l&rsquo;expérience utilisateur.
        </p>
        <p>
          Mon approche est structurée et progressive — je construis chaque projet étape par
          étape, avec une attention constante à la qualité du code et à la cohérence visuelle.
        </p>
      </motion.div>
    </section>
  );
}
