export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experience: Experience[] = [
  {
    year: "2026",
    role: "Full-Stack Developer",
    company: "Freelance",
    description:
      "Conception et développement d'applications web complètes pour des clients locaux : e-commerce, SaaS de gestion, sites vitrines.",
    technologies: ["PHP", "MySQL", "React", "Next.js"],
  },
  {
    year: "2025",
    role: "Backend Developer",
    company: "Freelance",
    description:
      "Développement d'APIs REST, architecture de bases de données et systèmes métier pour plusieurs projets clients.",
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    year: "2024",
    role: "Junior Developer",
    company: "Freelance",
    description:
      "Premiers projets web complets : sites vitrines, intégrations front-end, prise en main de l'écosystème full-stack.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
