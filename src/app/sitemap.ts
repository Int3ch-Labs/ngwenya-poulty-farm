import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";

const BASE_URL = "https://example.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/gallery",
    "/blog",
    "/contact",
    "/policies/privacy-policy",
    "/policies/terms-of-service",
    "/policies/cookie-policy",
    "/policies/food-safety-policy",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
