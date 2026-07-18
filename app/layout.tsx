import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Navbar } from "@/app/Component/layout/Navbar";
import { Footer } from "@/app/Component/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ✅ GA ID .env.local se le raha hai
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ============================================
// ✅ FULL SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: {
    default: "Webixle — Web Development, App Development & Digital Services",
    template: "%s | Webixle",
  },
  description:
    "Webixle provides professional Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing services. Get a free quote today!",
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
    "branding agency",
    "react development",
    "next js development",
    "software company india",
    "web design mumbai",
  ],
  authors: [{ name: "Webixle", url: "https://webixle.com" }],
  creator: "Webixle",
  publisher: "Webixle",
  alternates: {
    canonical: "https://webixle.com",
  },
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
        url: "https://webixle.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webixle - Web Development & Digital Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webixle",
    creator: "@webixle",
    title: "Webixle — Web Development, App Development & Digital Services",
    description:
      "Professional Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing services.",
    images: ["https://webixle.com/og-image.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  
  category: "technology",
};

// ============================================
// ✅ JSON-LD SCHEMA DATA
// ============================================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webixle",
  url: "https://webixle.com",
  logo: "https://webixle.com/logo.png",
  description:
    "Webixle provides Web Development, Mobile App Development, UI/UX Design, Graphic Designing, Video Editing & Social Media Marketing services.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/webixle",
    "https://www.instagram.com/webixle",
    "https://www.linkedin.com/company/webixle",
    "https://twitter.com/webixle",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom website design and development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android mobile application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "User interface and experience design services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Designing",
          description: "Professional graphic design and branding services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Video Editing",
          description: "Professional video editing and production services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          description: "Social media management and marketing services",
        },
      },
    ],
  },
};

// ============================================
// ✅ ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* ✅ JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-screen bg-(--bg-primary) text-(--text-primary) antialiased">

        {/* ✅ Google Analytics — Sirf tab load hoga jab GA_ID exist kare */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}