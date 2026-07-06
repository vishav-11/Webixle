"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Link2,
  Palette,
  PenTool,
  Video,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const CATEGORIES = [
  { id: "all", label: "All Services", icon: Filter },
  { id: "development", label: "Development", icon: Globe },
  { id: "design", label: "Design", icon: Palette },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "creative", label: "Creative", icon: Video },
];

const SERVICES = [
  {
    id: 1,
    category: "development",
    title: "Web Development",
    subtitle: "Frontend + Backend",
    description:
      "High-performance, SEO-optimized websites and web applications built with modern frameworks — from landing pages to complex enterprise platforms.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
    dot: "bg-blue-500",
    features: [
      "Landing Pages & Websites",
      "Web Applications",
      "E-Commerce Stores",
      "Admin Dashboards",
      "REST & GraphQL APIs",
      "Database Design",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    tag: "Most Popular",
    anchorId: "web-development",
  },
  {
    id: 2,
    category: "development",
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Cross-platform and native mobile apps delivering smooth, intuitive experiences — from idea to App Store end-to-end.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-500",
    dot: "bg-purple-500",
    features: [
      "Consumer & Business Apps",
      "E-Commerce Mobile Apps",
      "On-Demand Apps",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
    ],
    techStack: ["Flutter", "React Native", "Firebase", "Swift"],
    tag: "High Demand",
    anchorId: "mobile-app",
  },
  {
    id: 3,
    category: "development",
    title: "Blockchain & Web3",
    subtitle: "DeFi, NFTs & Smart Contracts",
    description:
      "Smart contracts, NFT platforms, DeFi protocols, and decentralized applications — bringing the future of the internet to life.",
    icon: Link2,
    gradient: "from-orange-500 to-amber-500",
    color: "text-orange-500",
    dot: "bg-orange-500",
    features: [
      "Smart Contract Development",
      "NFT Platforms",
      "DeFi Protocols",
      "dApp Development",
      "Token Creation (ERC-20)",
      "Wallet Integration",
    ],
    techStack: ["Solidity", "Ethers.js", "Hardhat", "Web3.js"],
    tag: "Trending",
    anchorId: "blockchain",
  },
  {
    id: 4,
    category: "design",
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Beautiful, functional interfaces designed with the user in mind — wireframes, prototypes, and production-ready Figma designs.",
    icon: Palette,
    gradient: "from-primary-500 to-accent-500",
    color: "text-primary-500",
    dot: "bg-primary-500",
    features: [
      "Wireframes & User Flows",
      "High-Fidelity UI Design",
      "Interactive Prototypes",
      "Design Systems",
      "Usability Testing",
      "Developer Handoff",
    ],
    techStack: ["Figma", "Adobe XD", "Maze", "Zeplin"],
    tag: "Creative",
    anchorId: "uiux-design",
  },
  {
    id: 5,
    category: "design",
    title: "Graphic Design & Branding",
    subtitle: "Brand Identity & Visual Design",
    description:
      "Complete brand identities — logos, color systems, typography, and marketing materials that make your business instantly recognizable.",
    icon: PenTool,
    gradient: "from-rose-500 to-pink-500",
    color: "text-rose-500",
    dot: "bg-rose-500",
    features: [
      "Logo Design",
      "Brand Identity Kit",
      "Social Media Assets",
      "Pitch Deck Design",
      "Print Materials",
      "Packaging Design",
    ],
    techStack: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    tag: "Brand First",
    anchorId: "graphic-branding",
  },
  {
    id: 6,
    category: "creative",
    title: "Video Editing & Motion",
    subtitle: "Content & Motion Graphics",
    description:
      "Engaging video content that captures attention — reels, motion graphics, product demos, and animated explainers that make brands move.",
    icon: Video,
    gradient: "from-cyan-500 to-teal-500",
    color: "text-cyan-500",
    dot: "bg-cyan-500",
    features: [
      "Social Media Reels",
      "Motion Graphics",
      "Product Demo Videos",
      "YouTube Content",
      "Animated Explainers",
      "Brand Films",
    ],
    techStack: ["After Effects", "Premiere Pro", "DaVinci", "Cinema 4D"],
    tag: "Viral Content",
    anchorId: "video-motion",
  },
  {
    id: 7,
    category: "marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Data-driven marketing that grows your business — SEO, paid ads, social media, and content strategy reaching the right audience.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-500",
    dot: "bg-green-500",
    features: [
      "SEO & Content Strategy",
      "Meta & Google Ads",
      "Social Media Management",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    techStack: ["GA4", "Meta Ads", "Google Ads", "SEMrush"],
    tag: "ROI Focused",
    anchorId: "digital-marketing",
  },
];

const INCLUDED_ALWAYS = [
  "Free Consultation",
  "NDA Agreement",
  "Weekly Updates",
  "Source Code Ownership",
  "30-Day Support",
  "Revision Rounds",
];

// ============================================
// CATEGORY FILTER
// ============================================

const CategoryFilter: React.FC<{
  active: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}> = ({ active, onChange, counts }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {CATEGORIES.map((cat) => {
      const Icon = cat.icon;
      const isActive = active === cat.id;
      return (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold
            transition-all duration-200 border
            ${
              isActive
                ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20"
                : "bg-card-theme border-card-theme text-secondary-theme hover:border-primary-500/30 hover:text-primary-theme"
            }`}
        >
          <Icon size={13} className={isActive ? "text-white" : "text-tertiary-theme"} />
          {cat.label}
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              isActive
                ? "bg-white/20 text-white"
                : "bg-secondary-theme text-tertiary-theme"
            }`}
          >
            {counts[cat.id] || 0}
          </span>
        </button>
      );
    })}
  </div>
);

// ============================================
// SERVICE CARD
// ============================================

const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
}> = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <div
      id={service.anchorId}
      className="group relative flex flex-col rounded-2xl border border-card-theme bg-card-theme
        hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top Gradient Strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`} />

      <div className="flex flex-col flex-1 p-5 sm:p-6">

        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl
              bg-gradient-to-br ${service.gradient} shadow-md shrink-0
              group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={22} className="text-white" />
          </div>
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full
              bg-secondary-theme border border-card-theme text-tertiary-theme"
          >
            {service.tag}
          </span>
        </div>

        {/* Title + Subtitle */}
        <div className="mb-2.5">
          <h3
            className="text-base sm:text-lg font-bold text-primary-theme
              group-hover:text-primary-500 transition-colors leading-tight mb-1"
          >
            {service.title}
          </h3>
          <p className={`text-[10px] font-bold uppercase tracking-widest ${service.color}`}>
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-secondary-theme leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2.5">
            What's Included
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {service.features
              .slice(0, expanded ? service.features.length : 4)
              .map((feature) => (
                <div key={feature} className="flex items-start gap-1.5">
                  <CheckCircle2
                    size={12}
                    className={`${service.color} shrink-0 mt-0.5`}
                  />
                  <span className="text-xs font-medium text-primary-theme leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
          </div>
          {service.features.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className={`mt-2 text-xs font-bold ${service.color} hover:underline transition-all duration-200`}
            >
              {expanded
                ? "Show Less ↑"
                : `+${service.features.length - 4} More ↓`}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-semibold px-2 py-1 rounded-md
                bg-secondary-theme border border-card-theme text-tertiary-theme"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-card-theme mb-4" />

        {/* CTA */}
        <Link href={`/contact?service=${service.anchorId}`}>
          <button
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
              text-sm font-bold text-white bg-gradient-to-r ${service.gradient}
              hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md`}
          >
            Get Quote
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
};

// ============================================
// QUICK NAV (Desktop Sidebar)
// ============================================

const QuickNav: React.FC = () => (
  <div className="hidden xl:flex flex-col gap-1 sticky top-28 w-48 shrink-0">
    <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2">
      Jump To
    </p>
    {SERVICES.map((service) => {
      const Icon = service.icon;
      return (
        <a
          key={service.id}
          href={`#${service.anchorId}`}
          className="group flex items-center gap-2.5 px-3 py-2 rounded-lg
            text-xs font-semibold text-secondary-theme
            hover:text-primary-theme hover:bg-secondary-theme
            transition-all duration-200"
        >
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-md
              bg-gradient-to-br ${service.gradient} shrink-0
              group-hover:scale-110 transition-transform`}
          >
            <Icon size={11} className="text-white" />
          </div>
          {service.title}
        </a>
      );
    })}
  </div>
);

// ============================================
// COMPARE / CTA STRIP
// ============================================

const CompareStrip: React.FC = () => (
  <div className="mt-12 p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-primary-500/8 to-accent-500/5 border border-primary-500/20">
    {/* Top Row */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-6">
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl
            bg-gradient-to-br from-primary-500 to-accent-500 shadow-md shrink-0"
        >
          <Sparkles size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-base font-bold text-primary-theme mb-0.5">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-sm text-secondary-theme">
            Book a free 30-min call — we'll guide you to the right solution.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
        <Link href="/contact">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5
              rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
              transition-all duration-200 active:scale-95 whitespace-nowrap
              shadow-md shadow-primary-500/25"
          >
            Book Free Call
            <ArrowRight size={14} />
          </button>
        </Link>
        <Link href="https://wa.me/yourphonenumber" target="_blank">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5
              rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm
              transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            💬 WhatsApp Us
          </button>
        </Link>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-primary-500/15 mb-5" />

    {/* Included Always */}
    <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-3 text-center">
      Included With Every Service
    </p>
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {INCLUDED_ALWAYS.map((item) => (
        <div key={item} className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-green-500 shrink-0" />
          <span className="text-xs font-semibold text-secondary-theme">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const ServicesOverview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] =
      cat.id === "all"
        ? SERVICES.length
        : SERVICES.filter((s) => s.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-10 animate-in">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-4
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <Sparkles size={12} className="text-primary-500" />
            Everything We Offer
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
              text-primary-theme leading-[1.1] mb-3"
          >
            One Team.{" "}
            <span className="gradient-text">Every Solution.</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            7 services, 1 dedicated team, zero coordination headache —
            everything your business needs under one roof.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className="mb-8 animate-in-delay-1">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* ── Main Layout ── */}
        <div className="flex gap-8 items-start">

          {/* Quick Nav Sidebar */}
          <QuickNav />

          {/* Services Grid */}
          <div className="flex-1 min-w-0">
            {filteredServices.length === 0 ? (
              <div className="text-center py-16 text-tertiary-theme text-sm">
                No services found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            )}

            <CompareStrip />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;