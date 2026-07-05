"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Link2,
  Palette,
  PenTool,
  Video,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Star,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SERVICES_LIST = [
  {
    icon: Globe,
    label: "Web Development",
    color: "text-blue-500",
    bg: "bg-blue-500",
    linear: "from-blue-500 to-cyan-500",
    description: "Next.js, React, Node.js",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    color: "text-purple-500",
    bg: "bg-purple-500",
    linear: "from-purple-500 to-pink-500",
    description: "Flutter, React Native",
  },
  {
    icon: Link2,
    label: "Blockchain & Web3",
    color: "text-orange-500",
    bg: "bg-orange-500",
    linear: "from-orange-500 to-amber-500",
    description: "Solidity, Smart Contracts",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    color: "text-primary-500",
    bg: "bg-primary-500",
    linear: "from-primary-500 to-accent-500",
    description: "Figma, Prototyping",
  },
  {
    icon: PenTool,
    label: "Graphic & Branding",
    color: "text-rose-500",
    bg: "bg-rose-500",
    linear: "from-rose-500 to-pink-500",
    description: "Logo, Brand Identity",
  },
  {
    icon: Video,
    label: "Video & Motion",
    color: "text-cyan-500",
    bg: "bg-cyan-500",
    linear: "from-cyan-500 to-teal-500",
    description: "Reels, Motion Graphics",
  },
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    color: "text-green-500",
    bg: "bg-green-500",
    linear: "from-green-500 to-emerald-500",
    description: "SEO, Meta & Google Ads",
  },
];

const HIGHLIGHTS = [
  "Free Consultation Call",
  "Custom Solutions Only",
  "On-Time Delivery Guaranteed",
];

const TRUST_BADGES = [
  {
    icon: Shield,
    label: "NDA Protected",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock,
    label: "24hr Quote",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Star,
    label: "4.9 Rated",
    color: "text-accent-500",
    bg: "bg-accent-500/10",
  },
];

const STATS = [
  { value: "7+", label: "Services", color: "text-primary-500" },
  { value: "150+", label: "Projects Done", color: "text-accent-500" },
  { value: "80+", label: "Happy Clients", color: "text-green-500" },
  { value: "5+", label: "Years Exp.", color: "text-orange-500" },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Animated Service Ticker ── */
const ServiceTicker: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES_LIST.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeService = SERVICES_LIST[activeIndex];
  const Icon = activeService.icon;

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-sm)]">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br ${activeService.linear} shrink-0 transition-all duration-500`}
      >
        <Icon size={16} className="text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-extrabold text-primary-theme truncate transition-all duration-500">
          {activeService.label}
        </p>
        <p className="text-[10px] text-tertiary-theme truncate">
          {activeService.description}
        </p>
      </div>
      <div className="flex gap-1 shrink-0">
        {SERVICES_LIST.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-4 h-1.5 bg-primary-500"
                : "w-1.5 h-1.5 bg-border-primary-theme"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Services Visual Grid Card ── */
const ServicesVisualCard: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-500/20 to-accent-500/20 blur-2xl scale-105 pointer-events-none" />

      {/* Main Card */}
      <div className="relative rounded-3xl border border-card-theme bg-card-theme overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

        {/* Card Header */}
        <div className="relative h-36 bg-linear-to-br from-primary-700 via-primary-600 to-accent-600 overflow-hidden">
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-linear(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          {/* Glow Orbs */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent-400/20 blur-xl" />

          {/* Header Content */}
          <div className="relative z-10 flex items-center justify-between px-6 h-full">
            <div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                Webixle Services
              </p>
              <h3 className="text-white font-extrabold text-xl leading-tight">
                Everything You Need
              </h3>
              <p className="text-white/70 text-xs mt-1">
                7 Services · One Team · Zero Hassle
              </p>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
              <Sparkles size={26} className="text-white" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {SERVICES_LIST.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={service.label}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-default ${
                    isHovered
                      ? `bg-linear-to-br from-${service.bg}/10 to-transparent border-${service.bg}/30 -translate-y-0.5 shadow-sm`
                      : "bg-secondary-theme border-card-theme"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br ${service.linear} shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-sm`}
                  >
                    <Icon size={15} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-primary-theme truncate leading-tight">
                      {service.label}
                    </p>
                    <p className="text-[10px] text-tertiary-theme truncate mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last Service (Full Width) */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-linear-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 group hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-green-500 to-emerald-500 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200">
              <TrendingUp size={15} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-primary-theme">
                Digital Marketing & Growth Strategy
              </p>
              <p className="text-[10px] text-tertiary-theme">
                SEO · Meta Ads · Analytics
              </p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 shrink-0">
              ROI Focused
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-border-primary to-transparent my-4" />

          {/* Bottom Ticker */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2">
              Currently Working On
            </p>
            <ServiceTicker />
          </div>
        </div>
      </div>

      {/* ── Floating Badges ── */}
      {/* Top Left */}
      <div
        className="absolute -top-4 -left-6 animate-float hidden sm:block"
        style={{ animationDelay: "0s" }}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)]">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <CheckCircle2 size={14} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-primary-theme">
              150+ Delivered
            </p>
            <p className="text-[10px] text-green-500 font-semibold">
              Projects Done ✓
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Right */}
      <div
        className="absolute -bottom-4 -right-6 animate-float hidden sm:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)]">
          <div className="flex -space-x-1.5">
            {["from-primary-400 to-primary-600", "from-accent-400 to-accent-600", "from-green-400 to-green-600"].map(
              (grad, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full bg-linear-to-br ${grad} border-2 border-card-theme flex items-center justify-center text-[8px] text-white font-bold`}
                >
                  {["A", "S", "M"][i]}
                </div>
              )
            )}
          </div>
          <div>
            <p className="text-xs font-bold text-primary-theme">
              80+ Clients
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={9}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Right */}
      <div
        className="absolute -top-3 -right-5 animate-float hidden xl:block"
        style={{ animationDelay: "3.5s" }}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)]">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-xs font-bold text-primary-theme">
            Available Now
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Stats Bar ── */
const StatsBar: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
    {STATS.map((stat, i) => (
      <div
        key={stat.label}
        className="group text-center p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
      >
        <div
          className={`text-3xl sm:text-4xl font-extrabold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
        >
          {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-secondary-theme font-medium">
          {stat.label}
        </div>
        <div
          className={`mt-2 mx-auto h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-500 bg-linear-to-r ${
            i === 0
              ? "from-primary-500 to-primary-400"
              : i === 1
              ? "from-accent-500 to-accent-400"
              : i === 2
              ? "from-green-500 to-green-400"
              : "from-orange-500 to-orange-400"
          }`}
        />
      </div>
    ))}
  </div>
);

/* ── Trust Badges Row ── */
const TrustBadgesRow: React.FC = () => (
  <div className="flex flex-wrap items-center gap-3 mt-8">
    {TRUST_BADGES.map((badge) => {
      const Icon = badge.icon;
      return (
        <div
          key={badge.label}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary-theme border border-card-theme group hover:border-primary-500/20 transition-all duration-200"
        >
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-md ${badge.bg} shrink-0`}
          >
            <Icon size={13} className={badge.color} />
          </div>
          <span className="text-xs font-semibold text-secondary-theme group-hover:text-primary-theme transition-colors">
            {badge.label}
          </span>
        </div>
      );
    })}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const HeroServices: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-mesh pt-20">

      {/* ── Background ── */}
      <div className="hero-glow" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-linear(var(--border-primary) 1px, transparent 1px), linear-linear(90deg, var(--border-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full bg-primary-400/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ══════════════════════════
              LEFT COLUMN
          ══════════════════════════ */}
          <div className="flex flex-col items-start">

            {/* Top Badge */}
            <div className="animate-in mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-950/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm font-bold text-primary-700 dark:text-primary-300">
                  Our Services
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
              <span className="text-primary-theme">Complete Digital</span>
              <br />
              <span className="linear-text">Solutions</span>{" "}
              <span className="text-primary-theme">Under</span>
              <br />
              <span className="relative inline-block text-primary-theme">
                One Roof.
                {/* SVG Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 250 10"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 100 1 125 2C150 3 200 7 248 5"
                    stroke="url(#services-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="services-underline"
                      x1="0"
                      y1="0"
                      x2="250"
                      y2="0"
                    >
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Sub Description */}
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-6 text-balance">
              From design to development to marketing — we are your{" "}
              <span className="font-bold text-primary-theme">
                complete digital partner.
              </span>{" "}
              One team. Every solution. Zero coordination headache between
              multiple agencies.
            </p>

            {/* Highlight Checks */}
            <div className="animate-in-delay-2 flex flex-col gap-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle2
                      size={12}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <span className="text-sm font-semibold text-primary-theme">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Pills */}
            <div className="animate-in-delay-2 flex flex-wrap gap-2 mb-8">
              {SERVICES_LIST.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-theme border border-card-theme hover:border-primary-500/30 transition-colors duration-200 group cursor-default"
                  >
                    <Icon
                      size={12}
                      className={`${service.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-xs font-semibold text-secondary-theme group-hover:text-primary-theme transition-colors">
                      {service.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6">
              {/* Primary CTA */}
              <Link href="/contact">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  <span className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600" />
                  <span className="absolute inset-0 bg-linear-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 rounded-xl shadow-[0_0_24px_rgba(99,102,241,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </Link>

              {/* Secondary CTA */}
              <Link href="/portfolio">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base border border-card-theme bg-card-theme text-primary-theme hover:bg-secondary-theme transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-(--shadow-elevation-sm)]">
                  <Star
                    size={16}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                  View Portfolio
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-in-delay-3">
              <TrustBadgesRow />
            </div>
          </div>

          {/* ══════════════════════════
              RIGHT COLUMN
          ══════════════════════════ */}
          <div className="hidden lg:flex items-center justify-center animate-in-delay-2">
            <ServicesVisualCard />
          </div>
        </div>

        {/* ══════════════════════════
            BOTTOM STATS BAR
        ══════════════════════════ */}
        <div className="animate-in-delay-3">
          {/* linear Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent mt-16 mb-1" />
          <StatsBar />
        </div>
      </div>
    </section>
  );
};