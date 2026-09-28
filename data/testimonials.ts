export type Testimonial = {
  name: string;
  role: string;
  company: string;
  comment: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Client A",
    role: "Fondateur",
    company: "Entreprise A",
    comment:
      "Un travail sérieux et réactif, livré dans les délais avec une vraie attention au détail.",
  },
  {
    name: "Client B",
    role: "Responsable produit",
    company: "Entreprise B",
    comment:
      "Excellente communication tout au long du projet et un résultat qui dépasse nos attentes.",
  },
  {
    name: "Client C",
    role: "Directrice marketing",
    company: "Entreprise C",
    comment:
      "Un développeur qui comprend aussi bien le design que la technique, rare et précieux.",
  },
];
