"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { projects } from "@/data/projects";
import clsx from "clsx";

const filters = [
  { label: "Tous", value: "all" },
  { label: "Dev", value: "dev" },
  { label: "Design", value: "design" },
] as const;

export function Projects() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]["value"]>("all");

  const filtered = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20 md:px-8"
    >
      {/* En-tête */}
      <SectionHeading
        eyebrow="Work"
        title="Projets"
        description="Une sélection de mes projets de développement et de mes créations graphiques."
      />

      {/* Filtres */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm transition-all duration-300",
              filter === f.value
                ? "border-accent bg-accent-soft text-accent"
                : "border-border-strong text-ink-secondary hover:border-accent-border hover:text-ink-primary"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* =========================
          AFFICHAGE DESIGN / AFFICHES
          ========================= */}
      {filter === "design" ? (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
              }}
              className="group block overflow-hidden rounded-card border border-border bg-night-card transition-all duration-300 hover:border-accent-border hover:shadow-lg"
            >
              {/* Affiche */}
              <div className="relative aspect-[3/4] overflow-hidden bg-accent-soft">
                <img
                  src={project.image}
                  alt={`Affiche ${project.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-all duration-300 group-hover:bg-black/40">
                  <span className="translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Voir le design →
                  </span>
                </div>
              </div>

              {/* Informations affiche */}
              <div className="p-4">
                <h3 className="font-display text-base text-ink-primary">
                  {project.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs text-ink-secondary">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <Badge
                      key={technology}
                      label={technology}
                    />
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      ) : (
        /* =========================
           AFFICHAGE PROJETS DEV
           ========================= */
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="group block overflow-hidden rounded-card border border-border bg-night-card transition-all duration-300 hover:border-accent-border hover:shadow-lg"
            >
              {/* Image du projet */}
              <div className="relative h-52 overflow-hidden bg-accent-soft">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge catégorie */}
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {project.category === "dev" ? "Développement" : "Design"}
                </div>
              </div>

              {/* Informations */}
              <div className="p-6">
                <h3 className="mb-2 font-display text-lg text-ink-primary">
                  {project.name}
                </h3>

                <p className="mb-4 text-sm leading-6 text-ink-secondary">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      label={technology}
                    />
                  ))}
                </div>

                {/* Lien */}
                <span className="text-sm text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Voir le projet →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {/* Aucun résultat */}
      {filtered.length === 0 && (
        <div className="rounded-card border border-border bg-night-card p-10 text-center">
          <p className="text-sm text-ink-secondary">
            Aucun projet disponible dans cette catégorie.
          </p>
        </div>
      )}
    </section>
  );
}