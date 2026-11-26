import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="text-3xl text-ink-primary md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-ink-secondary">{description}</p>}
    </motion.div>
  );
}
