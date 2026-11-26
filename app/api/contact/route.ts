import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Limitation simple en mémoire : 5 messages / 10 min par IP.
// (Suffisant pour un portfolio ; utiliser Redis/Upstash si plusieurs instances.)
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Trop de messages, réessayez plus tard." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ piège anti-bot : un humain ne le remplit jamais.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim() || "Nouveau message depuis le portfolio";
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Message trop court ou trop long." }, { status: 400 });
  }
  if (subject.length > 150) {
    return NextResponse.json({ error: "Sujet trop long." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("Configuration SMTP manquante (voir .env.example)");
    return NextResponse.json({ error: "Service d'envoi non configuré." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 465),
      secure: Number(SMTP_PORT ?? 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`, // répondre = écrire au visiteur
      subject: `[Portfolio] ${subject.replace(/[\r\n]/g, " ")}`,
      text: `De : ${name} <${email}>\n\n${message}`,
      html: `<p><strong>De :</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
             <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
             <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur d'envoi email :", err);
    return NextResponse.json({ error: "Échec de l'envoi. Réessayez plus tard." }, { status: 500 });
  }
}
