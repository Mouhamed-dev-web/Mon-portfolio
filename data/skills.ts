export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Python", "APIs REST"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    items: ["Git", "GitHub",  "CI/CD", "Cloud"],
  },
  {
    category: "Design",
    items: ["Figma", "Illustrator", "Photoshop", "UI/UX"],
  },
];
