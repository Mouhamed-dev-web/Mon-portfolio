import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { Navbar } from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mouhamed Niang — Développeur Full-Stack & Graphiste",
  description:
    "Portfolio de Mouhamed Niang, développeur full-stack et graphiste. Découvrez mes projets, mes compétences et mon parcours.",
  openGraph: {
    title: "Mouhamed Niang — Développeur Full-Stack & Graphiste",
    description:
      "Portfolio de Mouhamed Niang, développeur full-stack et graphiste.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouhamed Niang — Développeur Full-Stack & Graphiste",
    description:
      "Portfolio de Mouhamed Niang, développeur full-stack et graphiste.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-night"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
