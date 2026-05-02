import type { MetadataRoute } from "next"
import { DATA } from "@/data/resume"
import { routing } from "@/i18n/routing"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""]
  // Add more dynamic routes here if needed, e.g. /blog, /projects

  const sitemapEntries = routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${DATA.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  )

  return sitemapEntries
}
