
export type Project = {
  slug: string;
  name: string;
  category: "dev" | "design";
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string;
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  // =====================================================
  // PROJETS DE DÉVELOPPEMENT
  // =====================================================

  {
    slug: "gestionpro",
    name: "GestionPro",
    category: "dev",
    description:
      "Dashboard de gestion (produits, ventes, clients, utilisateurs).",
    problem:
      "Suivi manuel et dispersé des ventes et du stock pour les commerçants.",
    solution:
      "Une application centralisée avec sidebar sombre et accent bleu, pensée pour la rapidité d'usage au quotidien.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    features: [
      "Gestion produits",
      "Suivi des ventes",
      "Gestion clients",
      "Utilisateurs & rôles",
    ],
    results:
      "Réduction du temps de suivi administratif pour les utilisateurs pilotes.",
    image: "/images/gestionpro.png",
    github: "",
    demo: "",
  },

  {
    slug: "pointagepro",
    name: "PointagePro",
    category: "dev",
    description:
      "SaaS de gestion de pointage des employés multi-entreprises.",
    problem:
      "Absence d'outil simple et abordable pour le pointage sur le marché local.",
    solution:
      "Application MVC en PHP 8.3/MySQL, construite étape par étape selon un cahier des charges complet.",
    technologies: ["PHP 8.3", "MySQL", "MVC"],
    features: [
      "Multi-entreprises",
      "Pointage employés",
      "Rapports",
      "Rôles & permissions",
    ],
    results:
      "Architecture prête pour un déploiement SaaS multi-tenant.",
    image: "/images/gestionpro.png",
    github: "",
    demo: "",
  },

  {
    slug: "invitations-mariage",
    name: "Invitations de mariage",
    category: "dev",
    description:
      "Plateforme SaaS multi-mariages d'invitations numériques.",
    problem:
      "Les couples sénégalais manquent d'un outil moderne pour gérer leurs invitations.",
    solution:
      "Plateforme PHP natif/MySQL/Bootstrap construite en 18 étapes.",
    technologies: ["PHP natif", "MySQL", "Bootstrap"],
    features: [
      "Multi-mariages",
      "Invitations numériques",
      "Gestion des invités",
    ],
    results:
      "Plateforme livrée en production, prête pour le marché sénégalais.",
    image: "/images/mariage.png",
    github: "",
    demo: "",
  },

  // =====================================================
  // DESIGN / AFFICHES
  // =====================================================

  {
    slug: "finale-coupe-du-monde",
    name: "Finale de la Coupe du Monde",
    category: "design",
    description:
      "Affiche sportive réalisée autour de la finale de la Coupe du Monde.",
    problem:
      "Créer un visuel sportif fort capable de transmettre l'intensité et l'importance d'une grande finale.",
    solution:
      "Création d'une composition graphique sportive avec retouche photo, typographie, effets visuels et mise en scène dynamique.",
    technologies: ["Photoshop", "Illustrator"],
    features: [
      "Composition graphique",
      "Retouche photo",
      "Typographie",
      "Effets visuels",
      "Direction artistique",
    ],
    results:
      "Une affiche sportive moderne conçue pour une communication digitale.",
    image: "/images/Final.png",
  },

  {
    slug: "lamine-yamal-espagne",
    name: "Lamine Yamal — Sélection espagnole",
    category: "design",
    description:
      "Création graphique dédiée à Lamine Yamal avec la sélection nationale espagnole.",
    problem:
      "Créer une affiche mettant en valeur le joueur et son identité avec la sélection espagnole.",
    solution:
      "Composition sportive moderne centrée sur Lamine Yamal avec une ambiance visuelle inspirée du football international.",
    technologies: ["Photoshop", "Illustrator"],
    features: [
      "Retouche photo",
      "Composition graphique",
      "Effets lumineux",
      "Typographie sportive",
      "Color grading",
    ],
    results:
      "Une affiche personnalisée mettant en avant le joueur et son identité sportive.",
    image: "/images/Lamine yamal.png",
  },

  {
    slug: "match-entrainement-ecole",
    name: "Match d'entraînement — École de formation",
    category: "design",
    description:
      "Affiche sportive créée pour annoncer un match d'entraînement d'une école de formation.",
    problem:
      "Présenter clairement les informations du match tout en créant un visuel attractif pour les joueurs, les parents et le public.",
    solution:
      "Création d'une affiche sportive intégrant les informations du match, les joueurs et l'identité visuelle de l'école.",
    technologies: ["Photoshop", "Canva"],
    features: [
      "Affiche sportive",
      "Mise en page",
      "Informations du match",
      "Retouche photo",
      "Identité visuelle",
    ],
    results:
      "Un support de communication prêt à être publié sur les réseaux sociaux.",
    image: "/images/entrainement.jpg",
  },

  {
    slug: "affiche-football",
    name: "Affiche Football",
    category: "design",
    description:
      "Création graphique autour de l'univers du football.",
    problem:
      "Créer un visuel sportif moderne et impactant destiné à une communication digitale.",
    solution:
      "Composition graphique combinant photographie, typographie, effets visuels et ambiance sportive.",
    technologies: ["Photoshop"],
    features: [
      "Composition",
      "Retouche photo",
      "Typographie",
      "Effets visuels",
    ],
    results:
      "Une affiche moderne adaptée aux réseaux sociaux.",
    image: "/images/match amical.jpg",
  },

  {
    slug: "affiche-vente",
    name: "Affiche Vente de produit",
    category: "design",
    description:
      "Création graphique destinée à promouvoir un produit.",
    problem:
      "Présenter les informations essentielles tout en attirant l'attention du public.",
    solution:
      "Création d'une composition visuelle claire avec une hiérarchie graphique adaptée.",
    technologies: ["Photoshop", "Canva"],
    features: [
      "Mise en page",
      "Typographie",
      "Composition graphique",
      "Communication visuelle",
    ],
    results:
      "Une affiche prête pour une diffusion digitale et imprimée.",
    image: "/images/affiche2.png",
  },

  {
    slug: "affiche-Pub",
    name: "Affiche publicitaire",
    category: "design",
    description:
      "Visuel destine a attirer des clients pour donner plus de visibiliter aux entreprises.",
    problem:
      "Présenter les informations essentielles tout en attirant l'attention du public.",
    solution:
      "Création d'une composition visuelle claire avec une hiérarchie graphique adaptée.",
    technologies: ["Photoshop", "Illustrator"],
    features: [
      "Mise en page",
      "Typographie",
      "Composition graphique",
      "Communication visuelle",
    ],
    results:
      "Une affiche prête pour une diffusion digitale et imprimée.",
    image: "/images/site web.png",
  },

  {
    slug: "affiche-Instagram",
    name: "Affiche Instagram",
    category: "design",
    description:
      "Création graphique destinée à promouvoir mon entreprise.",
    problem:
      "Présenter les informations essentielles tout en attirant l'attention du public.",
    solution:
      "Création d'une composition visuelle claire avec une hiérarchie graphique adaptée.",
    technologies: ["Photoshop"],
    features: [
      "Mise en page",
      "Typographie",
      "Composition graphique",
      "Communication visuelle",
    ],
    results:
      "Une affiche prête pour une diffusion digitale et imprimée.",
    image: "/images/insta.png",
  },
];

