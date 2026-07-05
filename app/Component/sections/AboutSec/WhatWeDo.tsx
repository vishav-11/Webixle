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
  ExternalLink,
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
      "We build high-performance, SEO-optimized websites and web applications using the latest frameworks. From simple landing pages to complex enterprise platforms — we handle it all with clean, scalable code.",
    icon: Globe,
    gradient: "from-blue-600 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    features: [
      "Next.js & React",
      "Node.js Backend",
      "REST & GraphQL APIs",
      "Database Design",
    ],
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    emoji: "🌐",
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    description:
      "Cross-platform and native mobile apps that deliver smooth, intuitive user experiences. From idea to App Store — we handle design, development, testing, and deployment end-to-end.",
    icon: Smartphone,
    gradient: "from-purple-600 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    dotColor: "bg-purple-500",
    features: [
      "Flutter & React Native",
      "iOS & Android",
      "Push Notifications",
      "App Store Deployment",
    ],
    tag: "High Demand",
    tagColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    emoji: "📱",
  },
  {
    id: 3,
    title: "Blockchain & Web3",
    subtitle: "DeFi, NFTs & Smart Contracts",
    description:
      "Cutting-edge Web3 solutions including smart contract development, NFT platforms, DeFi protocols, and decentralized applications (dApps). We bring the future of the internet to life.",
    icon: Link2,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    dotColor: "bg-orange-500",
    features: [
      "Smart Contracts (Solidity)",
      "NFT Platforms",
      "DeFi Protocols",
      "Wallet Integration",
    ],
    tag: "Trending",
    tagColor:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    emoji: "⛓️",
  },
  {
    id: 4,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Beautiful, functional interfaces designed with the user in mind. We create wireframes, prototypes, and production-ready designs in Figma — ensuring every pixel serves a purpose.",
    icon: Palette,
    gradient: "from-primary-600 to-accent-500",
    bgGradient: "from-primary-500/10 to-accent-500/5",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    dotColor: "bg-primary-500",
    features: [
      "Wireframes & Prototypes",
      "Figma Design Systems",
      "User Research",
      "Usability Testing",
    ],
    tag: "Creative",
    tagColor:
      "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
    emoji: "🎨",
  },
  {
    id: 5,
    title: "Graphic Design & Branding",
    subtitle: "Brand Identity & Visual Design",
    description:
      "Your brand is your first impression. We craft complete brand identities — logos, color systems, typography, and marketing materials that make your business instantly recognizable and memorable.",
    icon: PenTool,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    dotColor: "bg-rose-500",
    features: [
      "Logo Design",
      "Brand Identity Kit",
      "Social Media Assets",
      "Print & Digital Materials",
    ],
    tag: "Brand First",
    tagColor:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    emoji: "✏️",
  },
  {
    id: 6,
    title: "Video Editing & Motion",
    subtitle: "Content & Motion Graphics",
    description:
      "Engaging video content that captures attention and drives action. From product demos and social media reels to full motion graphics and animated explainer videos — we make brands move.",
    icon: Video,
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/5",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    features: [
      "Social Media Reels",
      "Motion Graphics",
      "Product Demo Videos",
      "YouTube Content",
    ],
    tag: "Creative",
    tagColor:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    emoji: "🎬",
  },
  {
    id: 7,
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Data-driven digital marketing strategies that actually grow your business. From SEO and paid ads to social media management and content marketing — we help brands reach the right audience.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    dotColor: "bg-green-500",
    features: [
      "SEO & Content Strategy",
      "Meta & Google Ads",
      "Social Media Growth",
      "Analytics & Reporting",
    ],
    tag: "ROI Focused",
    tagColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    emoji: "📈",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Service Card ── */
const ServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 animate-fade-up ${
        isActive
          ? `bg-gradient-to-br ${service.bgGradient} ${service.borderColor} shadow-[var(--shadow-elevation-lg)] -translate-y-1`
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <div
          className={`relative flex items-center justify-center w-13 h-13 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={24} className="text-white" />
          {/* Glow */}
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
          />
        </div>

        {/* Tag */}
        <span
          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.tagColor} shrink-0`}
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <div className="mb-1">
        <h3
          className={`text-lg font-bold leading-tight transition-colors ${
            isActive ? "text-primary-500" : "text-primary-theme group-hover:text-primary-500"
          }`}
        >
          {service.title}
        </h3>
        <p className={`text-xs font-semibold mt-0.5 ${service.iconColor}`}>
          {service.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-5 line-clamp-3">
        {service.description}
      </p>

      {/* Features List */}
      <div
        className={`space-y-1.5 mb-5 overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2">
          What's Included
        </p>
        {service.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full ${service.dotColor} shrink-0`}
            />
            <span className="text-xs font-medium text-primary-theme">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-sm font-bold flex items-center gap-1.5 transition-all duration-200 ${
            isActive
              ? service.iconColor
              : "text-tertiary-theme group-hover:text-primary-500"
          }`}
        >
          Learn More
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </span>

        {/* Active Indicator */}
        {isActive && (
          <div className="flex items-center gap-1.5">
            <div
              className={`w-1.5 h-1.5 rounded-full ${service.dotColor} animate-pulse`}
            />
            <span className="text-[10px] font-bold text-secondary-theme">
              Selected
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Active Service Detail Panel ── */
const DetailPanel: React.FC<{ service: (typeof SERVICES)[0] }> = ({
  service,
}) => {
  const Icon = service.icon;

  return (
    <div className="sticky top-28">
      <div
        className={`relative rounded-3xl border p-7 sm:p-9 bg-gradient-to-br ${service.bgGradient} ${service.borderColor} shadow-[var(--shadow-elevation-lg)] overflow-hidden transition-all duration-500`}
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Emoji + Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-[var(--shadow-glow)] shrink-0`}
            >
              <Icon size={30} className="text-white" />
            </div>
            <span className="text-5xl">{service.emoji}</span>
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs font-bold uppercase tracking-widest ${service.iconColor} mb-2`}
          >
            {service.subtitle}
          </p>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-theme mb-4 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-secondary-theme leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Divider */}
          <div
            className={`w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 mb-6`}
          />

          {/* Features */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-4">
              What's Included
            </p>
            <div className="grid grid-cols-1 gap-3">
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} shrink-0`}
                  >
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-primary-theme">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <button
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg`}
              >
                Start This Project
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm border border-card-theme bg-card-theme text-primary-theme hover:border-primary-500/30 hover:bg-secondary-theme active:scale-95 transition-all duration-200">
                <ExternalLink size={15} />
                See Related Work
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats Below Panel */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Avg Timeline", value: "2-6 Wks" },
          { label: "Support", value: "30 Days" },
          { label: "Revisions", value: "Unlimited" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-3 rounded-xl bg-card-theme border border-card-theme"
          >
            <div className="text-base font-extrabold text-primary-theme">
              {stat.value}
            </div>
            <div className="text-[10px] text-secondary-theme font-medium mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Mobile Service Card (Accordion) ── */
const MobileServiceCard: React.FC<{
  service: (typeof SERVICES)[0];
  index: number;
}> = ({ service, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 animate-fade-up ${
        isOpen
          ? `bg-gradient-to-br ${service.bgGradient} ${service.borderColor}`
          : "bg-card-theme border-card-theme"
      }`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Header */}
      <button
        className="w-full flex items-center gap-4 p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} shrink-0`}
        >
          <Icon size={20} className="text-white" />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-bold uppercase tracking-wide ${service.iconColor}`}>
            {service.subtitle}
          </p>
          <h3 className="font-bold text-primary-theme text-base leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Arrow */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg border border-card-theme bg-secondary-theme shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <ArrowRight size={14} className="text-secondary-theme" />
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-5 space-y-4">
          {/* Description */}
          <p className="text-sm text-secondary-theme leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${service.dotColor} shrink-0`}
                />
                <span className="text-xs font-medium text-primary-theme">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/contact">
            <button
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 active:scale-95 transition-all duration-200`}
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
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="relative section-padding bg-secondary-theme/20 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] rounded-full bg-primary-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 mb-5">
            <Sparkles size={13} className="text-primary-500" />
            What We Do
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Everything Under{" "}
            <span className="gradient-text">One Roof</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            From design to development to marketing — we are your complete
            digital partner. No need to hire multiple agencies.
          </p>
        </div>

        {/* ── Desktop Layout: Grid + Detail Panel ── */}
        <div className="hidden lg:grid grid-cols-[1fr_360px] gap-8 max-w-6xl mx-auto items-start">

          {/* Left: Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>

          {/* Right: Active Detail Panel */}
          <DetailPanel service={SERVICES[activeService]} />
        </div>

        {/* ── Mobile Layout: Accordion ── */}
        <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
          {SERVICES.map((service, index) => (
            <MobileServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center animate-in-delay-3">
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-10" />

          <p className="text-secondary-theme text-base mb-6">
            Not sure which service you need?{" "}
            <span className="font-bold text-primary-theme">
              Let's figure it out together.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-lg)]">
                Book Free Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-card-theme bg-card-theme text-primary-theme font-bold text-sm hover:border-primary-500/30 hover:bg-secondary-theme transition-all duration-200 active:scale-95">
                <ExternalLink size={15} />
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};