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
  ChevronDown,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Frontend + Backend",
    description:
      "High-performance, SEO-optimized websites and web applications built with modern frameworks.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
    dot: "bg-blue-500",
    features: ["Next.js & React", "Node.js Backend", "REST & GraphQL APIs", "Database Design"],
    tag: "Popular",
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Cross-platform and native mobile apps that deliver smooth, intuitive user experiences.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-500",
    dot: "bg-purple-500",
    features: ["Flutter & React Native", "iOS & Android", "Push Notifications", "App Store Deploy"],
    tag: "High Demand",
  },
  {
    id: 3,
    title: "Blockchain & Web3",
    subtitle: "DeFi, NFTs & Smart Contracts",
    description:
      "Cutting-edge Web3 solutions — smart contracts, NFT platforms, DeFi protocols, and dApps.",
    icon: Link2,
    gradient: "from-orange-500 to-amber-500",
    color: "text-orange-500",
    dot: "bg-orange-500",
    features: ["Smart Contracts", "NFT Platforms", "DeFi Protocols", "Wallet Integration"],
    tag: "Trending",
  },
  {
    id: 4,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Beautiful, functional interfaces designed with the user in mind — from wireframes to production.",
    icon: Palette,
    gradient: "from-primary-500 to-accent-500",
    color: "text-primary-500",
    dot: "bg-primary-500",
    features: ["Wireframes", "Figma Design Systems", "User Research", "Usability Testing"],
    tag: "Creative",
  },
  {
    id: 5,
    title: "Graphic Design & Branding",
    subtitle: "Brand Identity & Visuals",
    description:
      "Complete brand identities — logos, color systems, typography, and marketing materials.",
    icon: PenTool,
    gradient: "from-rose-500 to-pink-500",
    color: "text-rose-500",
    dot: "bg-rose-500",
    features: ["Logo Design", "Brand Identity Kit", "Social Media Assets", "Print Materials"],
    tag: "Brand First",
  },
  {
    id: 6,
    title: "Video Editing & Motion",
    subtitle: "Content & Motion Graphics",
    description:
      "Engaging video content that captures attention — reels, motion graphics, and product demos.",
    icon: Video,
    gradient: "from-cyan-500 to-teal-500",
    color: "text-cyan-500",
    dot: "bg-cyan-500",
    features: ["Social Reels", "Motion Graphics", "Product Videos", "YouTube Content"],
    tag: "Creative",
  },
  {
    id: 7,
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Data-driven marketing strategies — SEO, paid ads, social media, and content marketing.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-500",
    dot: "bg-green-500",
    features: ["SEO & Content", "Meta & Google Ads", "Social Growth", "Analytics"],
    tag: "ROI Focused",
  },
];

// ============================================
// SERVICE CARD (Accordion — works on all screens)
// ============================================

const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ service, isOpen, onToggle }) => {
  const Icon = service.icon;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300
        ${
          isOpen
            ? "border-primary-500/30 bg-card-theme shadow-md"
            : "border-card-theme bg-card-theme hover:border-primary-500/20"
        }`}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl
            bg-gradient-to-br ${service.gradient} shrink-0 shadow-md`}
        >
          <Icon size={20} className="text-white" />
        </div>

        {/* Title + Subtitle */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-bold text-primary-theme text-sm sm:text-base leading-tight">
              {service.title}
            </h3>
            <span
              className={`hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full
                bg-secondary-theme text-tertiary-theme border border-card-theme`}
            >
              {service.tag}
            </span>
          </div>
          <p className={`text-xs font-medium ${service.color}`}>
            {service.subtitle}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          size={16}
          className={`text-secondary-theme shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-5 pb-5 space-y-4">
          {/* Divider */}
          <div className="h-px bg-card-theme" />

          {/* Description */}
          <p className="text-sm text-secondary-theme leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 size={13} className={`${service.color} shrink-0`} />
                <span className="text-xs font-medium text-primary-theme">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/contact">
            <button
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
                font-bold text-sm text-white bg-gradient-to-r ${service.gradient}
                hover:opacity-90 active:scale-95 transition-all duration-200`}
            >
              Get Started
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const WhatWeDo: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

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
            What We Do
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
              text-primary-theme leading-[1.1] mb-3"
          >
            Everything Under{" "}
            <span className="gradient-text">One Roof</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            From design to development to marketing — your complete digital
            partner in one place.
          </p>
        </div>

        {/* ── Services Grid (2 columns on desktop) ── */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 animate-in-delay-1">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center animate-in-delay-2">
          <p className="text-sm text-secondary-theme mb-5">
            Not sure which service you need?{" "}
            <span className="font-semibold text-primary-theme">
              Let's figure it out together.
            </span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
              transition-all duration-200 active:scale-95
              shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30"
          >
            Book Free Consultation
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;