import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Navbar } from "@/app/Component/layout/Navbar";
import { Footer } from "@/app/Component/layout/Footer";
// import "@/app/styles/theme.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: " — The Future of Business Automation",
    template: "%s | Webixle",
  },
  description:
    "Webixle empowers businesses with cutting-edge AI automation, seamless integrations, and enterprise-grade security to accelerate growth.",
  keywords: [
    "automation",
    "AI",
    "workflow",
    "enterprise",
    "SaaS",
    "integrations",
    "analytics",
  ],
  authors: [{ name: "Webixle Team" }],
  openGraph: {
    title: "Webixle — The Future of Business Automation",
    description:
      "Automate, scale, and dominate your market with Webixle's AI-powered platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webixle",
    description: "The Future of Business Automation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-(--bg-primary) text-(--text-primary) antialiased">
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