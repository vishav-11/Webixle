// import type { Metadata } from "next";
// import { Hero } from "@/app/Component/sections/Hero";
// import { WhyChooseUs } from "@/app/Component/sections/WhyChooseUs";
// import { FAQ } from "@/app/Component/sections/FAQ";
// import { Services } from "@/app/Component/sections/ServiceCard";
// import { TechStack } from "./Component/sections/TechCategories";
// import { WorkProcess } from "./Component/sections/HowWeWork";
// import { Portfolio } from "./Component/sections/Portfolio";
// import { Testimonials } from "./Component/sections/Testimonials";
// import { CTABanner } from "./Component/sections/CTA";
// import { HeroSlider } from "./Component/sections/HeroSection";

// export const metadata: Metadata = {
//   title: "Webixle — The Future of Business Automation",
//   description:
//     "AI-powered automation, seamless integrations, and enterprise-grade security to accelerate your business growth.",
// };

// export default function HomePage() {
//   return (
//     <>
//       <HeroSlider/>
//       <Hero />
//       <Services />
//       <WhyChooseUs />
//       {/* <TechStack/> */}
//       <WorkProcess/>
//       <Portfolio/>
//       {/* <Testimonials/> */}
//       <FAQ/>
//       <CTABanner/>

//     </>
//   );
// }

import type { Metadata } from "next";
import { Hero } from "@/app/Component/sections/Hero";
import { WhyChooseUs } from "@/app/Component/sections/WhyChooseUs";
import { FAQ } from "@/app/Component/sections/FAQ";
import { Services } from "@/app/Component/sections/ServiceCard";
import { TechStack } from "./Component/sections/TechCategories";
import { WorkProcess } from "./Component/sections/HowWeWork";
import { Portfolio } from "./Component/sections/Portfolio";
import { Testimonials } from "./Component/sections/Testimonials";
import { CTABanner } from "./Component/sections/CTA";
import { HeroSlider } from "./Component/sections/HeroSection";

export const metadata: Metadata = {
  // ✅ Title with keyword targeting
  title: {
    default: "Webixle — Web Development, App Development & Digital Services",
    template: "%s | Webixle",
  },

  // ✅ Meta Description (150-160 characters)
  description:
    "Webixle offers professional Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing services. Get a free quote today!",

  // ✅ Keywords (helpful for some search engines)
  keywords: [
    "web development company",
    "mobile app development",
    "UI UX design services",
    "graphic designing",
    "video editing services",
    "social media marketing",
    "digital marketing agency",
    "website design and development",
    "app development company",
    "Webixle",
    "professional web design",
    "SEO services",
    "branding agency",
    "react development",
    "next js development",
  ],

  // ✅ Author & Publisher
  authors: [{ name: "Webixle", url: "https://webixle.com" }],
  creator: "Webixle",
  publisher: "Webixle",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://webixle.com",
  },

  // ✅ Open Graph (Facebook, LinkedIn, WhatsApp sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webixle.com",
    siteName: "Webixle",
    title: "Webixle — Web Development, App Development & Digital Services",
    description:
      "Professional Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing. Transform your business with Webixle.",
    images: [
      {
        url: "https://webixle.com/og-image.png", // ✅ 1200x630 image banao
        width: 1200,
        height: 630,
        alt: "Webixle - Web Development & Digital Services",
        type: "image/png",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@webixle",       // ✅ apna twitter handle daalo
    creator: "@webixle",
    title: "Webixle — Web Development, App Development & Digital Services",
    description:
      "Professional Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing services.",
    images: ["https://webixle.com/og-image.png"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Icons / Favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Manifest (PWA support)
  manifest: "/site.webmanifest",

  // ✅ Verification Tags (Google, Bing)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",  // Google Search Console se lo
    // bing: "YOUR_BING_VERIFICATION_CODE",   // optional
  },

  // ✅ Category
  category: "technology",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <TechStack/> */}
      <WorkProcess />
      <Portfolio />
      {/* <Testimonials/> */}
      <FAQ />
      <CTABanner />
    </>
  );
}