"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/Button";
import { stats } from "@/data/stats";
import { socialLinks } from "@/data/socials";

const roles = ["Full-Stack Developer", "Graphic Designer", "UI/UX Designer"];

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:justify-between md:px-8 md:py-24">

        {/* Photo + anneau néon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-64 w-64 flex-shrink-0 items-center justify-center md:h-80 md:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--accent-soft)_0%,transparent_70%)]" />

          <div className="absolute inset-6 rounded-full border border-accent-border" />

          <div className="flex h-[75%] w-[75%] items-center justify-center overflow-hidden rounded-full border-2 border-accent bg-night-card">
            <Image
              src="/images/rassoul.jpeg"
              alt="Photo de profil de Mouhamed Niang"
              width={400}
              height={300}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texte */}
        <div className="max-w-xl text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-1 text-ink-secondary"
          >
            Hello, I&rsquo;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-2 text-4xl text-ink-primary md:text-5xl"
          >
            Mouhamed Niang
          </motion.h1>

          <p className="mb-4 text-xl">
            <span className="text-ink-secondary">And I&rsquo;m a </span>
            <span className="font-medium text-accent">{role}</span>
            <span className="animate-pulse text-accent">|</span>
          </p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-7 text-ink-secondary"
          >
            Je transforme des idées complexes en expériences numériques
            performantes, avec un regard de graphiste sur chaque interface.
          </motion.p>

          <div className="mb-7 flex justify-center gap-3 md:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-ink-secondary transition-colors hover:border-accent-border hover:text-accent"
              >
                <Icon size={15} strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-3 md:justify-start">
            <Button href="#contact" variant="primary">
              Hire Me
            </Button>

            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Barre de stats */}
      <div className="border-t border-border bg-accent-soft/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-medium text-accent md:text-3xl">
                {stat.value}
              </div>

              <div className="text-xs text-ink-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}