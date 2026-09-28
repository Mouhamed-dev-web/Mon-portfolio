# Portfolio — Mouhamed Niang

Stack : Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Projet complet généré

- Setup Next.js/TypeScript/Tailwind, palette dark/light via variables CSS
- Navbar sticky glassmorphism + menu mobile plein écran + ThemeToggle (persisté)
- Hero avec photo/anneau néon, texte typewriter (Dev/Design/UI-UX), stats, CTA
- About, Skills (5 catégories dont Design), Projects (filtrable Dev/Design + pages détail dynamiques `/projects/[slug]`)
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

- Remplacer les placeholders "Photo profil" / "Aperçu {projet}" par de vraies images (`next/image`)
- Remplacer `https://example.com` dans `sitemap.ts` et `robots.ts` par le vrai domaine
- Brancher le formulaire de contact sur une vraie route API avec validation serveur
- Compléter `data/projects.ts`, `data/testimonials.ts`, `data/experience.ts` avec le contenu réel
- Ajouter la photo de profil, favicon et images Open Graph dans `public/`
- Curseur personnalisé desktop et scène 3D (blob Three.js) du Hero restent à brancher — non inclus dans cette génération pour garder le bundle léger ; se greffent facilement dans `sections/Hero.tsx`
