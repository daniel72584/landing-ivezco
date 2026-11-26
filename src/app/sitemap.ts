import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://daniel72584.github.io/landing-ivezco";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
