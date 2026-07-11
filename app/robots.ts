// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: "https://webixle.com/sitemap.xml",
    host: "https://webixle.com",
  };
}



// Kaam	Status
// G-XXXXXXXXXX → apna GA ID daalo	⚠️
// YOUR_GOOGLE_VERIFICATION_CODE → Search Console se lo	⚠️
// /og-image.png → 1200×630 image banao	⚠️
// /favicon.ico → favicon daalo	⚠️
// Social media handles update karo	⚠️
// Phone number update karo	⚠️
// Domain webixle.com → sahi hai toh raho	✅