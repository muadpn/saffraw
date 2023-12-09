import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about"],
    },
    sitemap: "http://saffraw.vercel.app/sitemap.xml",
  };
}
