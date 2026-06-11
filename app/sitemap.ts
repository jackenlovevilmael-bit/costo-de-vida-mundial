import { MetadataRoute } from "next";
import { countries } from "@/lib/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://costodev idamundial.com";

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/paises`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...countryRoutes];
}