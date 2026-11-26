# Portfolio — Mouhamed Niang

Stack : Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Projet complet généré

- Setup Next.js/TypeScript/Tailwind, palette dark/light via variables CSS
- Navbar sticky glassmorphism + menu mobile plein écran + ThemeToggle (persisté)
- Hero : photo dans un badge flottant avec nom accroché en dessous, texte typewriter (rôles développeur), stats, CTA
- About, Skills (4 catégories), Projects (cartes cliquables : un clic ouvre le site officiel ou l'application dans un nouvel onglet)
- Experience (timeline), Services, Process (4 étapes), Architecture (diagramme de flux)
- Testimonials (carousel), Contact (formulaire avec validation front, prêt pour une API)
- Footer, easter egg Terminal (Ctrl/Cmd + `), page 404 personnalisée
- SEO : metadata, Open Graph, Twitter Cards, sitemap.ts, robots.ts
- Accessibilité : skip link, focus visible, `prefers-reduced-motion` respecté partout

## Lancer le projet

```bash
npm install
npm run dev
```

## À personnaliser avant mise en ligne

- Dans `data/projects.ts`, remplacer chaque `url` (https://example.com/...) par le lien réel du site ou de l'application
- Remplacer les placeholders "Photo profil" / "Aperçu {projet}" par de vraies images (`next/image`)
- Remplacer `https://example.com` dans `sitemap.ts` et `robots.ts` par le vrai domaine
- Compléter `data/projects.ts`, `data/testimonials.ts`, `data/experience.ts` avec le contenu réel
- Ajouter la photo de profil dans `public/images/profile.jpg` (elle apparaît automatiquement sur le badge), favicon et images Open Graph dans `public/`
- Curseur personnalisé desktop et scène 3D (blob Three.js) du Hero restent à brancher — non inclus dans cette génération pour garder le bundle léger ; se greffent facilement dans `sections/Hero.tsx`

## Formulaire de contact (envoi réel)

Les messages sont envoyés par `app/api/contact/route.ts` (Nodemailer, validation serveur,
échappement HTML, limitation à 5 messages / 10 min par IP, champ piège anti-bot).

1. Copier `.env.example` en `.env.local`
2. `CONTACT_TO_EMAIL` = la boîte qui reçoit les messages
3. Gmail : activer la validation en 2 étapes, créer un « mot de passe d'application »
   (compte Google > Sécurité) et le mettre dans `SMTP_PASS`
4. Relancer `npm install` puis `npm run dev`
5. En production (Vercel, etc.), ajouter ces 5 variables dans les réglages d'environnement
