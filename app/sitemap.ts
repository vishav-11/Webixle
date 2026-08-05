// app/sitemap.ts

import { MetadataRoute } from "next";
import { blogPosts } from "@/app/blog/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://webixle.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://webixle.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://webixle.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",  // ✅ weekly karo kyunki blog update hota hai
      priority: 0.8,
    },
    {
      url: "https://webixle.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://webixle.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webixle.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://webixle.com/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ✅ Dynamic Blog Post Pages - blog-data.ts se automatically generate honge
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://webixle.com/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ✅ Combine static + dynamic pages
  return [...staticPages, ...blogPostPages];
}