export type Project = {
  name: string;
  description: string;
  technologies: string[];
  /** Image du projet, placée dans public/images/projects/ */
  image: string;
  /** URL du site officiel ou de l'application — le clic sur la carte redirige ici */
  url: string;
};

// TODO : remplacer chaque url par le lien réel (site en ligne ou application).
export const projects: Project[] = [
  {
    name: "GestionPro",
    description: "Dashboard de gestion : produits, ventes, clients et utilisateurs.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    image: "/images/projects/gestionpro.png",
    url: "https://example.com/gestionpro",
  },
  {
    name: "PointagePro",
    description: "SaaS de gestion de pointage des employés, multi-entreprises.",
    technologies: ["PHP 8.3", "MySQL", "MVC"],
    image: "/images/projects/pointagepro_illustration_accueil.png",
    url: "https://example.com/pointagepro",
  },
  {
    name: "Invitations de mariage",
    description: "Plateforme SaaS multi-mariages d'invitations numériques.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    image: "/images/projects/mariage.png",
    url: "https://example.com/invitations",
  },
  {
    name: "ArtGallery",
    description: "Plateforme e-commerce de vente d'œuvres d'art pour le marché sénégalais.",
    technologies: ["PHP", "MySQL"],
    image: "/images/projects/artgallery-boutique.png",
    url: "https://example.com/artgallery",
  },
  // {
  //   name: "DIJA — Lips & Parfums",
  //   description: "Boutique en ligne de parfums, gloss et cosmétiques.",
  //   technologies: ["PHP", "MySQL", "JavaScript"],
  //   image: "/images/projects/dija.jpg",
  //   url: "https://example.com/dija",
  // },
  {
    name: "TeamFlow",
    description: "Application Kanban de gestion de tâches d'équipe.",
    technologies: ["JavaScript", "React"],
    image: "/images/projects/teamflow-apercu.png",
    url: "https://example.com/teamflow",
  },
];