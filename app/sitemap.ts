import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllServiceSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = absoluteUrl("");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/clients"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/book-now"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/reviews"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...servicePages];
}
