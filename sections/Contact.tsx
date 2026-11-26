"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

type Status = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const [errorMsg, setErrorMsg] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || ""), // champ piège anti-bot
    };

    if (!payload.name || !payload.email || payload.message.length < 10) {
      setErrorMsg("Merci de remplir nom, email et un message d'au moins 10 caractères.");
      setStatus("error");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Échec de l'envoi.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Échec de l'envoi.");
      setStatus("error");
    } finally {
      setSending(false);
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
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
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
          disabled={sending}
          className="w-fit rounded-md bg-cta px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cta-hover disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
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
            {errorMsg}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
