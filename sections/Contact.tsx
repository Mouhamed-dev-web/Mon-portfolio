"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    try {
      // Remplacer par un appel API réel (ex: /api/contact) avec validation serveur
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Have a project in mind?"
        description="Let's build something remarkable together."
      />

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="grid max-w-2xl gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="rounded-md border border-border-strong bg-night-card px-4 py-3 text-sm text-ink-primary outline-none focus:border-accent"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="rounded-md border border-border-strong bg-night-card px-4 py-3 text-sm text-ink-primary outline-none focus:border-accent"
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="rounded-md border border-border-strong bg-night-card px-4 py-3 text-sm text-ink-primary outline-none focus:border-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="rounded-md border border-border-strong bg-night-card px-4 py-3 text-sm text-ink-primary outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="w-fit rounded-md bg-cta px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cta-hover"
        >
          Send Message
        </button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-accent"
          >
            Message envoyé avec succès — merci !
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-cta"
          >
            Merci de remplir tous les champs requis.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
