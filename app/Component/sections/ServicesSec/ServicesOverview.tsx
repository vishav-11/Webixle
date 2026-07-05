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
  Clock,
  DollarSign,
  ExternalLink,
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
      "High-performance, SEO-optimized websites and web applications built with modern frameworks. From simple landing pages to complex enterprise platforms with clean, scalable code.",
    icon: Globe,
    linear: "from-blue-600 to-cyan-500",
    bglinear: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    emoji: "🌐",
    features: [
      "Landing Pages & Websites",
      "Web Applications",
      "E-Commerce Stores",
      "Admin Dashboards",
      "REST & GraphQL APIs",
      "Database Design",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    timeline: "1–8 Weeks",
    startingPrice: "₹15,000",
    tag: "Most Popular",
    tagColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/40",
    anchorId: "web-development",
  },
  {
    id: 2,
    category: "development",
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Cross-platform and native mobile apps delivering smooth, intuitive user experiences. From idea to App Store — design, development, testing, and deployment end-to-end.",
    icon: Smartphone,
    linear: "from-purple-600 to-pink-500",
    bglinear: "from-purple-500/10 to-pink-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    dotColor: "bg-purple-500",
    emoji: "📱",
    features: [
      "Consumer & Business Apps",
      "E-Commerce Mobile Apps",
      "On-Demand Apps",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
    ],
    techStack: ["Flutter", "React Native", "Firebase", "Swift"],
    timeline: "6–12 Weeks",
    startingPrice: "₹1,20,000",
    tag: "High Demand",
    tagColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/40",
    anchorId: "mobile-app",
  },
  {
    id: 3,
    category: "development",
    title: "Blockchain & Web3",
    subtitle: "DeFi, NFTs & Smart Contracts",
    description:
      "Cutting-edge Web3 solutions including smart contracts, NFT platforms, DeFi protocols, and decentralized applications. We bring the future of the internet to life.",
    icon: Link2,
    linear: "from-orange-500 to-amber-500",
    bglinear: "from-orange-500/10 to-amber-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    dotColor: "bg-orange-500",
    emoji: "⛓️",
    features: [
      "Smart Contract Development",
      "NFT Platforms & Marketplaces",
      "DeFi Protocols",
      "dApp Development",
      "Token Creation (ERC-20)",
      "Wallet Integration",
    ],
    techStack: ["Solidity", "Ethers.js", "Hardhat", "Web3.js"],
    timeline: "4–10 Weeks",
    startingPrice: "₹80,000",
    tag: "Trending",
    tagColor:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800/40",
    anchorId: "blockchain",
  },
  {
    id: 4,
    category: "design",
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Beautiful, functional interfaces designed with the user in mind. Wireframes, prototypes, and production-ready Figma designs — ensuring every pixel serves a purpose.",
    icon: Palette,
    linear: "from-primary-600 to-accent-500",
    bglinear: "from-primary-500/10 to-accent-500/5",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    dotColor: "bg-primary-500",
    emoji: "🎨",
    features: [
      "Wireframes & User Flows",
      "High-Fidelity UI Design",
      "Interactive Prototypes",
      "Design Systems",
      "Usability Testing",
      "Developer Handoff",
    ],
    techStack: ["Figma", "Adobe XD", "Maze", "Zeplin"],
    timeline: "1–3 Weeks",
    startingPrice: "₹20,000",
    tag: "Creative",
    tagColor:
      "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 border-primary-200 dark:border-primary-800/40",
    anchorId: "uiux-design",
  },
  {
    id: 5,
    category: "design",
    title: "Graphic Design & Branding",
    subtitle: "Brand Identity & Visual Design",
    description:
      "Complete brand identities — logos, color systems, typography, and marketing materials that make your business instantly recognizable and memorable across all touchpoints.",
    icon: PenTool,
    linear: "from-rose-500 to-pink-500",
    bglinear: "from-rose-500/10 to-pink-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    dotColor: "bg-rose-500",
    emoji: "✏️",
    features: [
      "Logo Design",
      "Complete Brand Identity Kit",
      "Social Media Assets",
      "Pitch Deck Design",
      "Print Materials",
      "Packaging Design",
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
    timeline: "3–7 Days",
    startingPrice: "₹8,000",
    tag: "Brand First",
    tagColor:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800/40",
    anchorId: "graphic-branding",
  },
  {
    id: 6,
    category: "creative",
    title: "Video Editing & Motion",
    subtitle: "Content & Motion Graphics",
    description:
      "Engaging video content that captures attention and drives action. Product demos, social media reels, motion graphics, and animated explainer videos that make brands move.",
    icon: Video,
    linear: "from-cyan-500 to-teal-500",
    bglinear: "from-cyan-500/10 to-teal-500/5",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    emoji: "🎬",
    features: [
      "Social Media Reels",
      "Motion Graphics",
      "Product Demo Videos",
      "YouTube Content",
      "Animated Explainers",
      "Brand Films",
    ],
    techStack: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Cinema 4D"],
    timeline: "2–5 Days",
    startingPrice: "₹5,000",
    tag: "Viral Content",
    tagColor:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/40",
    anchorId: "video-motion",
  },
  {
    id: 7,
    category: "marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Data-driven digital marketing strategies that grow your business. SEO, paid ads, social media management, and content marketing — reaching the right audience at the right time.",
    icon: TrendingUp,
    linear: "from-green-500 to-emerald-500",
    bglinear: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    dotColor: "bg-green-500",
    emoji: "📈",
    features: [
      "SEO & Content Strategy",
      "Meta & Google Ads",
      "Social Media Management",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    techStack: ["GA4", "Meta Ads", "Google Ads", "SEMrush"],
    timeline: "Ongoing",
    startingPrice: "₹12,000/mo",
    tag: "ROI Focused",
    tagColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/40",
    anchorId: "digital-marketing",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Category Filter ── */
const CategoryFilter: React.FC<{
  active: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}> = ({ active, onChange, counts }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {CATEGORIES.map((cat) => {
      const Icon = cat.icon;
      return (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            active === cat.id
              ? "bg-primary-600 text-white shadow-(--shadow-glow)]"
              : "bg-card-theme border border-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30"
          }`}
        >
          <Icon
            size={14}
            className={
              active === cat.id ? "text-white" : "text-tertiary-theme"
            }
          />
          {cat.label}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
              active === cat.id
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

/* ── Service Card ── */
const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
}> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <div
      id={service.anchorId}
      className={`group relative flex flex-col rounded-2xl border bg-card-theme transition-all duration-300 overflow-hidden animate-fade-up hover:-translate-y-1 hover:shadow-(--shadow-elevation-lg)] hover:border-primary-500/20 ${
        isExpanded ? `${service.borderColor} shadow-(--shadow-elevation-lg)]` : "border-card-theme"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top linear Strip */}
      <div
        className={`h-1.5 w-full bg-linear-to-r ${service.linear}`}
      />

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">

        {/* Header Row */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div
            className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${service.linear} shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
          >
            <Icon size={26} className="text-white" />
            {/* Glow */}
            <div
              className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.linear} blur-lg opacity-0 group-hover:opacity-40 -z-10 transition-opacity duration-300`}
            />
          </div>

          {/* Tag */}
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.tagColor}`}
          >
            {service.tag}
          </span>
        </div>

        {/* Title + Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-primary-theme group-hover:text-primary-500 transition-colors leading-tight mb-1">
            {service.title}
          </h3>
          <p className={`text-xs font-bold uppercase tracking-widest ${service.iconColor}`}>
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-secondary-theme leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Features List */}
        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-3">
            What's Included
          </p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-3">
            {service.features
              .slice(0, isExpanded ? service.features.length : 4)
              .map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${service.dotColor} shrink-0 mt-1.5`}
                  />
                  <span className="text-xs font-medium text-primary-theme leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
          </div>

          {/* Show More/Less Toggle */}
          {service.features.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-3 text-xs font-bold ${service.iconColor} hover:underline transition-all duration-200`}
            >
              {isExpanded
                ? "Show Less ↑"
                : `+${service.features.length - 4} More Features ↓`}
            </button>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-secondary-theme border border-card-theme text-secondary-theme"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-border-primary to-transparent mb-4" />

        {/* Bottom Row — Pricing + Timeline + CTA */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Pricing + Timeline */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <DollarSign size={13} className="text-green-500" />
              <div>
                <p className="text-[10px] text-tertiary-theme font-medium">
                  Starting from
                </p>
                <p className="text-sm font-extrabold text-primary-theme">
                  {service.startingPrice}
                </p>
              </div>
            </div>
            <div className="w-px h-8 bg-border-primary-theme" />
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary-500" />
              <div>
                <p className="text-[10px] text-tertiary-theme font-medium">
                  Timeline
                </p>
                <p className="text-sm font-extrabold text-primary-theme">
                  {service.timeline}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href={`/contact?service=${service.anchorId}`}>
            <button
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-linear-to-r ${service.linear} hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md whitespace-nowrap`}
            >
              Get Quote
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Compare Strip ── */
const CompareStrip: React.FC = () => (
  <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-primary-500/10 to-accent-500/5 border border-primary-500/20 animate-in-delay-3">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 shadow-(--shadow-glow)] shrink-0">
          <Sparkles size={26} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-primary-theme mb-1">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-sm text-secondary-theme">
            Book a free 30-min consultation — we'll guide you to the
            right solution.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
        <Link href="/contact">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-(--shadow-glow)] whitespace-nowrap">
            Book Free Call
            <ArrowRight size={15} />
          </button>
        </Link>
        <Link
          href="https://wa.me/yourphonenumber"
          target="_blank"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-all duration-200 active:scale-95 whitespace-nowrap">
            💬 WhatsApp Us
          </button>
        </Link>
      </div>
    </div>

    {/* Included Always */}
    <div className="mt-6 pt-6 border-t border-primary-500/20">
      <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-3 text-center">
        Included With Every Service
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {[
          "Free Consultation",
          "NDA Agreement",
          "Weekly Updates",
          "Source Code Ownership",
          "30-Day Support",
          "Revision Rounds",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-500 shrink-0" />
            <span className="text-xs font-semibold text-secondary-theme">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── Quick Nav ── */
const QuickNav: React.FC = () => (
  <div className="hidden xl:flex flex-col gap-2 sticky top-28 max-w-50">
    <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
      Jump To Service
    </p>
    {SERVICES.map((service) => {
      const Icon = service.icon;
      return (
        <a
          key={service.id}
          href={`#${service.anchorId}`}
          className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-secondary-theme hover:text-primary-theme hover:bg-secondary-theme transition-all duration-200`}
        >
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-md bg-linear-to-br ${service.linear} shrink-0 group-hover:scale-110 transition-transform`}
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
    <section className="relative section-padding bg-secondary-theme/20 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-180 h-180 rounded-full bg-primary-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-160 h-160 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 mb-5">
            <Sparkles size={13} className="text-primary-500" />
            Everything We Offer
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            One Team.{" "}
            <span className="linear-text">Every Solution.</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            7 services. 1 dedicated team. Zero coordination headache.
            Everything your business needs — handled under one roof.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className="mb-10 animate-in-delay-1">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* ── Main Layout ── */}
        <div className="flex gap-8 items-start">

          {/* Quick Nav Sidebar (Desktop Only) */}
          <QuickNav />

          {/* Services Grid */}
          <div className="flex-1 min-w-0">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 text-secondary-theme">
                No services found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Compare + CTA Strip */}
            <CompareStrip />
          </div>
        </div>
      </div>
    </section>
  );
};