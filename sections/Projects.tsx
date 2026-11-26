"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { projects } from "@/data/projects";

function ProjectImage({ src, name }: { src: string; name: string }) {
  const [ok, setOk] = useState(true);

  return (
    <div className="h-40 overflow-hidden bg-accent-soft">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`Capture d'écran de ${name}`}
          loading="lazy"
          onError={() => setOk(false)}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center font-mono text-xs text-ink-secondary">
          Aperçu {name}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading
        eyebrow="Work"
        title="Projets réalisés"
        description="Cliquez sur un projet pour ouvrir le site ou l'application en ligne."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvrir ${project.name} (nouvel onglet)`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col overflow-hidden rounded-card border border-border bg-night-card transition-colors hover:border-accent-border"
          >
            <ProjectImage src={project.image} name={project.name} />
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-ink-primary">{project.name}</h3>
                <ArrowUpRight
                  size={18}
                  className="flex-shrink-0 text-ink-secondary transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mb-4 flex-1 text-sm text-ink-secondary">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}