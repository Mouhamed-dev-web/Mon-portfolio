import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "430px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
      colors: {
        // Toutes les couleurs passent par des variables CSS (voir globals.css)
        // pour permettre le basculement dark/light sans dupliquer la config.
        night: {
          DEFAULT: "var(--bg-primary)",
          soft: "var(--bg-secondary)",
          card: "var(--bg-card)",
        },
        ink: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
        },
        cta: {
          DEFAULT: "#E23B5C",
          hover: "#F04B6D",
        },
        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // Space Grotesk
        body: ["var(--font-body)", "sans-serif"], // Inter
        mono: ["var(--font-mono)", "monospace"], // JetBrains Mono
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        glow: "0 0 60px rgba(91,140,255,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
