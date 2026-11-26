export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Comprendre le besoin, le public cible et les objectifs du projet.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture technique, wireframes et maquettes de l'interface.",
  },
  {
    number: "03",
    title: "Development",
    description: "Développement front-end et back-end, intégration, tests.",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Mise en production, optimisation et suivi post-lancement.",
  },
];
