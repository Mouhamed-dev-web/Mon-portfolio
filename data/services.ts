import type { LucideIcon } from "lucide-react";
import { Code2, Server, Layers, Palette } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Création d'applications web modernes et performantes.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "APIs, architecture serveur, bases de données et systèmes métier.",
    icon: Server,
  },
  {
    title: "Full-Stack Development",
    description: "Développement complet d'applications web, du schéma de données à l'interface.",
    icon: Layers,
  },
  {
    title: "Design & Identité visuelle",
    description: "UI/UX, identité de marque et supports graphiques.",
    icon: Palette,
  },
];
