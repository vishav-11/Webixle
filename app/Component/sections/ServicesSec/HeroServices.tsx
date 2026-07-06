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
    gradient: "from-blue-500 to-cyan-500",
    description: "Next.js, React, Node.js",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    description: "Flutter, React Native",
  },
  {
    icon: Link2,
    label: "Blockchain & Web3",
    color: "text-orange-500",
    gradient: "from-orange-500 to-amber-500",
    description: "Solidity, Smart Contracts",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    color: "text-primary-500",
    gradient: "from-primary-500 to-accent-500",
    description: "Figma, Prototyping",
  },
  {
    icon: PenTool,
    label: "Graphic & Branding",
    color: "text-rose-500",
    gradient: "from-rose-500 to-pink-500",
    description: "Logo, Brand Identity",
  },
  {
    icon: Video,
    label: "Video & Motion",
    color: "text-cyan-500",
    gradient: "from-cyan-500 to-teal-500",
    description: "Reels, Motion Graphics",
  },
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
    description: "SEO, Meta & Google Ads",
  },
];

const HIGHLIGHTS = [
  "Free Consultation Call",
  "Custom Solutions Only",
  "On-Time Delivery Guaranteed",
];

const TRUST_BADGES = [
  { icon: Shield, label: "NDA Protected", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Clock, label: "24hr Quote", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Zap, label: "Fast Delivery", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Star, label: "4.9 Rated", color: "text-accent-500", bg: "bg-accent-500/10" },
];

const STATS = [
  { value: "7+", label: "Services", color: "text-primary-500", grad: "from-primary-500 to-primary-400" },
  { value: "150+", label: "Projects Done", color: "text-accent-500", grad: "from-accent-500 to-accent-400" },
  { value: "80+", label: "Happy Clients", color: "text-green-500", grad: "from-green-500 to-green-400" },
  { value: "5+", label: "Years Exp.", color: "text-orange-500", grad: "from-orange-500 to-orange-400" },
];

// ============================================
// SERVICE TICKER (Auto-rotating)
// ============================================

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
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-secondary-theme border border-card-theme">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-lg
          bg-gradient-to-br ${activeService.gradient} shrink-0
          transition-all duration-500`}
      >
        <Icon size={15} className="text-white" />
      </div>
      <div className="min-w-0 flex-1">
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
                ? "w-3 h-1.5 bg-primary-500"
                : "w-1.5 h-1.5 bg-card-theme"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================
// SERVICES VISUAL CARD (Right Side)
// ============================================

const ServicesVisualCard: React.FC = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 blur-2xl scale-105 pointer-events-none" />

    {/* Main Card */}
    <div className="relative rounded-3xl border border-card-theme bg-card-theme overflow-hidden shadow-xl">

      {/* Card Header */}
      <div className="relative h-32 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent-400/20 blur-xl" />

        {/* Header Content */}
        <div className="relative z-10 flex items-center justify-between px-5 h-full">
          <div>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
              Webixle Services
            </p>
            <h3 className="text-white font-extrabold text-lg leading-tight">
              Everything You Need
            </h3>
            <p className="text-white/70 text-xs mt-0.5">
              7 Services · One Team · Zero Hassle
            </p>
          </div>
          <div
            className="flex items-center justify-center w-12 h-12 rounded-2xl
              bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl"
          >
            <Sparkles size={22} className="text-white" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {SERVICES_LIST.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className="group flex items-center gap-2.5 p-2.5 rounded-xl
                  bg-secondary-theme border border-card-theme
                  hover:border-primary-500/30 hover:-translate-y-0.5
                  transition-all duration-200 cursor-default"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg
                    bg-gradient-to-br ${service.gradient} shrink-0 shadow-sm
                    group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={14} className="text-white" />
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

        {/* Last Service (Full Width Featured) */}
        <div
          className="flex items-center gap-3 p-2.5 rounded-xl
            bg-gradient-to-r from-green-500/10 to-emerald-500/5
            border border-green-500/20 group hover:-translate-y-0.5
            transition-all duration-200 cursor-default"
        >
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg
              bg-gradient-to-br from-green-500 to-emerald-500 shrink-0 shadow-sm
              group-hover:scale-110 transition-transform duration-200"
          >
            <TrendingUp size={14} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-primary-theme">
              Digital Marketing & Growth
            </p>
            <p className="text-[10px] text-tertiary-theme">
              SEO · Meta Ads · Analytics
            </p>
          </div>
          <span
            className="text-[9px] font-bold px-2 py-0.5 rounded-full
              bg-green-500/10 text-green-500 border border-green-500/20 shrink-0"
          >
            ROI
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-card-theme my-3" />

        {/* Bottom Ticker */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2">
            Currently Working On
          </p>
          <ServiceTicker />
        </div>
      </div>
    </div>

    {/* Floating Badge — Top Left */}
    <div
      className="absolute -top-4 -left-6 animate-float hidden sm:block"
      style={{ animationDelay: "0s" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <div
          className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600
            flex items-center justify-center"
        >
          <CheckCircle2 size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">150+ Delivered</p>
          <p className="text-[10px] text-green-500 font-semibold">
            Projects Done ✓
          </p>
        </div>
      </div>
    </div>

    {/* Floating Badge — Bottom Right */}
    <div
      className="absolute -bottom-4 -right-6 animate-float hidden sm:block"
      style={{ animationDelay: "2s" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <div className="flex -space-x-1.5">
          {[
            "from-primary-400 to-primary-600",
            "from-accent-400 to-accent-600",
            "from-green-400 to-green-600",
          ].map((grad, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full bg-gradient-to-br ${grad}
                border-2 border-card-theme
                flex items-center justify-center text-[8px] text-white font-bold`}
            >
              {["A", "S", "M"][i]}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">80+ Clients</p>
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

    {/* Floating Badge — Top Right */}
    <div
      className="absolute -top-3 -right-5 animate-float hidden xl:block"
      style={{ animationDelay: "3.5s" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-xs font-bold text-primary-theme">Available Now</p>
      </div>
    </div>
  </div>
);

// ============================================
// TRUST BADGES
// ============================================

const TrustBadgesRow: React.FC = () => (
  <div className="flex flex-wrap items-center gap-2 mt-6">
    {TRUST_BADGES.map((badge) => {
      const Icon = badge.icon;
      return (
        <div
          key={badge.label}
          className="flex items-center gap-2 px-3 py-2 rounded-lg
            bg-card-theme border border-card-theme
            hover:border-primary-500/20 transition-all duration-200 group"
        >
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-md
              ${badge.bg} shrink-0`}
          >
            <Icon size={12} className={badge.color} />
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
// STATS BAR
// ============================================

const StatsBar: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14">
    {STATS.map((stat) => (
      <div
        key={stat.label}
        className="group text-center p-4 rounded-2xl bg-card-theme border border-card-theme
          hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
      >
        <div
          className={`text-2xl sm:text-3xl font-extrabold ${stat.color} mb-1
            group-hover:scale-110 transition-transform duration-300`}
        >
          {stat.value}
        </div>
        <div className="text-xs text-secondary-theme font-medium">
          {stat.label}
        </div>
        <div
          className={`mt-2 mx-auto h-0.5 w-0 group-hover:w-8 rounded-full
            transition-all duration-500 bg-gradient-to-r ${stat.grad}`}
        />
      </div>
    ))}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const HeroServices: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-mesh pt-20">

      {/* Background */}
      <div className="hero-glow" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="animate-in mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  border border-card-theme bg-card-theme"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
                </span>
                <span className="text-xs font-bold text-secondary-theme">
                  Our Services
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="animate-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold
                tracking-tight leading-[1.1] mb-5"
            >
              <span className="text-primary-theme">Complete Digital</span>
              <br />
              <span className="gradient-text">Solutions</span>{" "}
              <span className="text-primary-theme">Under</span>
              <br />
              <span className="relative inline-block text-primary-theme">
                One Roof.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 250 10"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 100 1 125 2C150 3 200 7 248 5"
                    stroke="url(#services-underline)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="services-underline" x1="0" y1="0" x2="250" y2="0">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-6">
              From design to development to marketing — we are your{" "}
              <span className="font-bold text-primary-theme">
                complete digital partner.
              </span>{" "}
              One team, every solution, zero coordination headache.
            </p>

            {/* Highlights */}
            {/* <div className="animate-in-delay-2 flex flex-col gap-2.5 mb-6">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div
                    className="w-5 h-5 rounded-full bg-green-500/10
                      flex items-center justify-center shrink-0
                      group-hover:scale-110 transition-transform duration-200"
                  >
                    <CheckCircle2 size={11} className="text-green-500" />
                  </div>
                  <span className="text-sm font-semibold text-primary-theme">
                    {item}
                  </span>
                </div>
              ))}
            </div> */}

            {/* Service Pills */}
            <div className="animate-in-delay-2 flex flex-wrap gap-2 mb-7">
              {SERVICES_LIST.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full
                      bg-card-theme border border-card-theme
                      hover:border-primary-500/30 transition-colors duration-200
                      group cursor-default"
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
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 mb-2 w-full sm:w-auto">
              <Link href="/contact">
                <button
                  className="group relative w-full sm:w-auto inline-flex items-center
                    justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                    text-white overflow-hidden transition-all duration-300
                    hover:scale-[1.02] active:scale-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600" />
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </Link>

              <Link href="/portfolio">
                <button
                  className="group w-full sm:w-auto inline-flex items-center justify-center
                    gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                    border border-card-theme bg-card-theme text-primary-theme
                    hover:bg-secondary-theme transition-all duration-300
                    hover:scale-[1.02] active:scale-95"
                >
                  <Star size={14} className="text-yellow-400" fill="currentColor" />
                  View Portfolio
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-in-delay-3 w-full">
              <TrustBadgesRow />
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hidden lg:flex items-center justify-center animate-in-delay-2">
            <ServicesVisualCard />
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="animate-in-delay-3">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mt-14" />
          <StatsBar />
        </div>
      </div>
    </section>
  );
};

export default HeroServices;