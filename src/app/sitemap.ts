import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://saffraw.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://saffraw.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
