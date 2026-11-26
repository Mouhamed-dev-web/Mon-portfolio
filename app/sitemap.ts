import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // remplacer par le vrai domaine
  return [{ url: base, lastModified: new Date() }];
}
