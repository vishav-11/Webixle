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
  Users,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const CATEGORIES = [
  { id: "all", label: "All", icon: Filter },
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
      "High-performance websites and web apps — from landing pages to complex enterprise platforms.",
    icon: Globe,
    linear: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
    features: ["Landing Pages", "Web Apps", "E-Commerce", "REST & GraphQL APIs"],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    tag: "Popular",
    anchorId: "web-development",
  },
  {
    id: 2,
    category: "development",
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Cross-platform and native mobile apps — from idea to App Store end-to-end.",
    icon: Smartphone,
    linear: "from-purple-500 to-pink-500",
    color: "text-purple-500",
    features: ["Consumer Apps", "On-Demand Apps", "Push Notifications", "App Store Deploy"],
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
      "Smart contracts, NFT platforms, and dApps bringing the future of the internet to life.",
    icon: Link2,
    linear: "from-orange-500 to-amber-500",
    color: "text-orange-500",
    features: ["Smart Contracts", "NFT Platforms", "DeFi Protocols", "Wallet Integration"],
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
      "Beautiful, functional interfaces — wireframes, prototypes, and production-ready Figma designs.",
    icon: Palette,
    linear: "from-primary-500 to-accent-500",
    color: "text-primary-500",
    features: ["Wireframes", "High-Fidelity UI", "Prototypes", "Design Systems"],
    techStack: ["Figma", "Adobe XD", "Maze", "Zeplin"],
    tag: "Creative",
    anchorId: "uiux-design",
  },
  {
    id: 5,
    category: "design",
    title: "Graphic Design & Branding",
    subtitle: "Brand Identity & Visuals",
    description:
      "Complete brand identities — logos, color systems, and materials that make you recognizable.",
    icon: PenTool,
    linear: "from-rose-500 to-pink-500",
    color: "text-rose-500",
    features: ["Logo Design", "Brand Identity Kit", "Social Assets", "Pitch Decks"],
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
      "Engaging videos that capture attention — reels, motion graphics, and explainer animations.",
    icon: Video,
    linear: "from-cyan-500 to-teal-500",
    color: "text-cyan-500",
    features: ["Social Reels", "Motion Graphics", "Product Demos", "Explainer Videos"],
    techStack: ["After Effects", "Premiere Pro", "DaVinci", "Cinema 4D"],
    tag: "Viral",
    anchorId: "video-motion",
  },
  {
    id: 7,
    category: "marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Data-driven marketing — SEO, paid ads, social media reaching the right audience.",
    icon: TrendingUp,
    linear: "from-green-500 to-emerald-500",
    color: "text-green-500",
    features: ["SEO & Content", "Meta & Google Ads", "Social Media", "Analytics"],
    techStack: ["GA4", "Meta Ads", "Google Ads", "SEMrush"],
    tag: "ROI",
    anchorId: "digital-marketing",
  },
];

const WHY_US = [
  { icon: Users, label: "Dedicated Team", desc: "Not freelancers — a full studio", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Clock, label: "On-Time Delivery", desc: "Always delivered on schedule", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Shield, label: "NDA Protected", desc: "Your ideas stay yours", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Zap, label: "Fast Turnaround", desc: "Quick without compromising quality", color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

const INCLUDED = [
  "Free Consultation",
  "NDA Agreement",
  "Weekly Updates",
  "Source Code Ownership",
  "30-Day Support",
  "Unlimited Revisions",
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
              isActive ? "bg-white/20 text-white" : "bg-secondary-theme text-tertiary-theme"
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
  const Icon = service.icon;
  return (
    <div
      id={service.anchorId}
      className="group flex flex-col rounded-2xl border border-card-theme bg-card-theme
        hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300 overflow-hidden"
    >
      {/* Top Strip */}
      <div className={`h-1 w-full bg-linear-to-r ${service.linear}`} />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-xl
              bg-linear-to-br ${service.linear} shadow-md shrink-0
              group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={20} className="text-white" />
          </div>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-secondary-theme border border-card-theme text-tertiary-theme">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-primary-theme group-hover:text-primary-500 transition-colors leading-tight mb-0.5">
          {service.title}
        </h3>
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${service.color}`}>
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-secondary-theme leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className={`${service.color} shrink-0`} />
              <span className="text-xs text-primary-theme leading-tight">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.techStack.map((t) => (
            <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary-theme border border-card-theme text-tertiary-theme">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="h-px bg-card-theme mb-4" />
        <Link href={`/contact?service=${service.anchorId}`}>
          <button
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
              text-sm font-bold text-white bg-linear-to-r ${service.linear}
              hover:opacity-90 active:scale-95 transition-all duration-200`}
          >
            Get Started
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
};

// ============================================
// SECTION 2 — WHY CHOOSE US
// ============================================

const WhyUsSection: React.FC = () => (
  <div className="mt-16 pt-16 border-t border-card-theme">
    <div className="text-center mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-2">
        Why Work With Us?
      </h3>
      <p className="text-sm text-secondary-theme">
        What sets Webixle apart from the rest.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {WHY_US.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="group flex flex-col items-center text-center p-5 rounded-2xl
              bg-card-theme border border-card-theme
              hover:border-primary-500/20 hover:-translate-y-1
              transition-all duration-300"
          >
            <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${item.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={20} className={item.color} />
            </div>
            <p className="text-sm font-bold text-primary-theme mb-1">{item.label}</p>
            <p className="text-xs text-secondary-theme leading-relaxed">{item.desc}</p>
          </div>
        );
      })}
    </div>
  </div>
);

// ============================================
// SECTION 3 — ALWAYS INCLUDED
// ============================================

const AlwaysIncludedSection: React.FC = () => (
  <div className="mt-16 pt-16 border-t border-card-theme">
    <div className="text-center mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-2">
        Included With Every Service
      </h3>
      <p className="text-sm text-secondary-theme">
        No hidden fees — these come standard with every project.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
      {INCLUDED.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 p-3.5 rounded-xl
            bg-card-theme border border-card-theme
            hover:border-primary-500/20 transition-colors duration-200"
        >
          <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-green-500" />
          </div>
          <span className="text-sm font-semibold text-primary-theme">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// SECTION 4 — BOTTOM CTA
// ============================================

const BottomCTA: React.FC = () => (
  <div className="mt-16 pt-16 border-t border-card-theme">
    <div className="relative rounded-2xl overflow-hidden border border-card-theme">
      <div className="absolute inset-0 bg-linear-to-br from-primary-600/90 to-accent-600/90" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-linear(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 sm:p-9">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Not Sure Where to Start?
          </h3>
          <p className="text-white/75 text-sm">
            Book a free 30-min consultation — no commitment required.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <Link href="/contact">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 whitespace-nowrap">
              Book Free Call
              <ArrowRight size={14} />
            </button>
          </Link>
          <Link href="https://wa.me/yourphonenumber" target="_blank">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200 active:scale-95 whitespace-nowrap">
              💬 WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
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

        {/* ══════════════════════
            SECTION 1 — SERVICES
        ══════════════════════ */}
        <div className="max-w-2xl mx-auto text-center mb-10 animate-in">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-card-theme border border-card-theme text-secondary-theme">
            <Sparkles size={12} className="text-primary-500" />
            Everything We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-3">
            One Team.{" "}
            <span className="linear-text">Every Solution.</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            7 services, 1 dedicated team — everything your business needs under one roof.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 animate-in-delay-1">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Services Grid */}
        <div className="animate-in-delay-1">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 text-tertiary-theme text-sm">
              No services found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* ══════════════════════
            SECTION 2 — WHY US
        ══════════════════════ */}
        <WhyUsSection />

        {/* ══════════════════════
            SECTION 3 — INCLUDED
        ══════════════════════ */}
        <AlwaysIncludedSection />

        {/* ══════════════════════
            SECTION 4 — CTA
        ══════════════════════ */}
        <BottomCTA />
      </div>
    </section>
  );
};

export default ServicesOverview;