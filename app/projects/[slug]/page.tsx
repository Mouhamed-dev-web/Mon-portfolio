
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <>
      <article className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        {/* Retour */}
        <Link
          href="/#projects"
          className="mb-8 inline-block text-sm text-accent transition-opacity hover:opacity-80"
        >
          ← Retour aux projets
        </Link>

        {/* Titre */}
        <h1 className="mb-3 font-display text-3xl text-ink-primary md:text-4xl">
          {project.name}
        </h1>

        <p className="mb-8 text-ink-secondary">
          {project.description}
        </p>

        {/* =========================
            APERÇU DU PROJET
            ========================= */}
        <div
          className={
            project.category === "design"
              ? "mb-10 flex justify-center overflow-hidden rounded-card border border-border bg-accent-soft p-4"
              : "mb-10 overflow-hidden rounded-card border border-border bg-accent-soft"
          }
        >
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            className={
              project.category === "design"
                ? "max-h-[750px] w-auto max-w-full rounded-lg object-contain"
                : "h-auto max-h-[550px] w-full object-cover"
            }
          />
        </div>

        {/* Problème */}
        <section className="mb-8">
          <h2 className="mb-2 font-display text-lg text-ink-primary">
            Problème
          </h2>

          <p className="text-ink-secondary">
            {project.problem}
          </p>
        </section>

        {/* Solution */}
        <section className="mb-8">
          <h2 className="mb-2 font-display text-lg text-ink-primary">
            Solution
          </h2>

          <p className="text-ink-secondary">
            {project.solution}
          </p>
        </section>

        {/* Fonctionnalités */}
        <section className="mb-8">
          <h2 className="mb-2 font-display text-lg text-ink-primary">
            Fonctionnalités
          </h2>

          <ul className="list-inside list-disc text-ink-secondary">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="mb-2 font-display text-lg text-ink-primary">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                label={technology}
              />
            ))}
          </div>
        </section>

        {/* Résultats */}
        <section className="mb-8">
          <h2 className="mb-2 font-display text-lg text-ink-primary">
            Résultats
          </h2>

          <p className="text-ink-secondary">
            {project.results}
          </p>
        </section>

        {/* Liens */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              className="text-sm text-accent transition-opacity hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              className="text-sm text-accent transition-opacity hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          )}
        </div>
      </article>

      <Footer />
    </>
  );
}
