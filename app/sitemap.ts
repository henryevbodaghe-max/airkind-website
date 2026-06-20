import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

const routes = [
  "",
  "/product",
  "/ingredients",
  "/science",
  "/about",
  "/faq",
  "/contact",
  "/disclaimer",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/product" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/product" ? 0.9 : 0.7
  }));
}
