"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Users,
  FolderOpen,
  Sparkles,
  MapPin,
  CheckCircle2,
  Globe,
  Zap,
  Heart,
  Smartphone,
  Palette,
  Blocks,
  TrendingUp,
  Video,

  ShieldCheck,
  Handshake,
} from "lucide-react";


// ============================================
// DATA
// ============================================

const STATS = [
  {
    value: "30+",
    label: "Projects Delivered",
    icon: FolderOpen,
    color: "text-primary-500",
    bgColor: "bg-primary-500/10",
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    value: "15+",
    label: "Team Members",
    icon: Users,
    color: "text-accent-500",
    bgColor: "bg-accent-500/10",
  },
  {
    value: "5+",
    label: "Countries Served",
    icon: Globe,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const HIGHLIGHTS = [
  "Full-Service Digital Studio",
  "Young & Passionate Team",
  "All Services Under One Roof",
];

const TEAM_AVATARS = [
  { initials: "AK", gradient: "from-primary-400 to-primary-600" },
  { initials: "SR", gradient: "from-accent-400 to-accent-600" },
  { initials: "MJ", gradient: "from-blue-400 to-blue-600" },
  { initials: "PR", gradient: "from-green-400 to-green-600" },
  { initials: "NK", gradient: "from-orange-400 to-orange-600" },
];

// const SERVICES_PREVIEW = [
//   { emoji: "🌐", label: "Web Dev" },
//   { emoji: "📱", label: "Mobile Apps" },
//   { emoji: "🎨", label: "UI/UX" },
//   { emoji: "⛓️", label: "Web3" },
//   { emoji: "📈", label: "Marketing" },
//   { emoji: "🎬", label: "Video" },
// ];

// const TRUST_ITEMS = [
//   { emoji: "🚀", text: "Innovation First" },
//   { emoji: "🎨", text: "Creative Designs" },
//   { emoji: "⚡", text: "Fast Delivery" },
//   { emoji: "🔒", text: "NDA Protected" },
//   { emoji: "🌍", text: "Global Clients" },
//   { emoji: "🤝", text: "Long-Term Partner" },
// ];


const SERVICES_PREVIEW = [
  { icon: Globe, label: "Web Dev" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Palette, label: "UI/UX" },
  { icon: Blocks, label: "Web3" },
  { icon: TrendingUp, label: "Marketing" },
  { icon: Video, label: "Video" },
];

const TRUST_ITEMS = [
  { icon: Rocket, text: "Innovation First" },
  { icon: Palette, text: "Creative Designs" },
  { icon: Zap, text: "Fast Delivery" },
  { icon: ShieldCheck, text: "NDA Protected" },
  { icon: Globe, text: "Global Clients" },
  { icon: Handshake, text: "Long-Term Partner" },
];
// ============================================
// STAT CARD
// ============================================

const StatCard: React.FC<{
  stat: (typeof STATS)[0];
  index: number;
}> = ({ stat, index }) => {
  const Icon = stat.icon;
  return (
    <div
      className="group flex items-center gap-5 p-2 rounded-xl
        bg-card-theme border border-card-theme
        hover:border-primary-500/30 hover:-translate-y-1
        transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-xl
          ${stat.bgColor} shrink-0
          group-hover:scale-105 transition-transform duration-300`}
      >
        <Icon size={16} className={stat.color} />
      </div>
      <div>
        <div className={`text-lg font-extrabold ${stat.color} leading-none mb-0.5`}>
          {stat.value}
        </div>
        <div className="text-xs font-medium text-secondary-theme">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

// ============================================
// RIGHT VISUAL CARD
// ============================================

const RightVisualCard: React.FC = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 blur-2xl scale-105 pointer-events-none" />

    {/* Main Card */}
    <div className="relative rounded-3xl border border-card-theme bg-card-theme overflow-hidden shadow-xl">

      {/* Top Banner */}
      <div className="relative h-36 bg-linear-to-br from-primary-600 via-primary-500 to-accent-500 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent-400/20 blur-xl" />

        {/* Company Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl
              bg-white/20 backdrop-blur-sm border border-white/30 mb-2 shadow-xl"
          >
            <Rocket size={26} className="text-white" />
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">
            Webixle
          </span>
          <span className="text-white/70 text-xs font-medium mt-0.5">
            Digital Studio
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4">

        {/* Location + Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-secondary-theme">
            <MapPin size={13} className="text-primary-500" />
            <span className="font-medium text-sm">India · Global</span>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full
              bg-green-500/10 border border-green-500/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-500">
              Available for Projects
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card-theme" />

        {/* Services Preview */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-3">
            What We Build
          </p>
          <div className="grid grid-cols-3 gap-2">
            {SERVICES_PREVIEW.map(({ icon: ServiceIcon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl
                  bg-secondary-theme border border-card-theme
                  hover:border-primary-500/30 transition-colors group cursor-default"
              >
                <ServiceIcon size={20} className="text-primary-theme group-hover:scale-125 transition-transform duration-200" />
                <span className="text-[10px] font-semibold text-secondary-theme text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card-theme" />

        {/* Team + Founded */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-2">
              Our Team
            </p>
            <div className="flex -space-x-2">
              {TEAM_AVATARS.map((avatar, i) => (
                <div
                  key={avatar.initials}
                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatar.gradient}
                    flex items-center justify-center text-white text-[9px] font-bold
                    border-2 border-card-theme`}
                  style={{ zIndex: TEAM_AVATARS.length - i }}
                >
                  {avatar.initials}
                </div>
              ))}
              <div
                className="w-7 h-7 rounded-full bg-secondary-theme border-2 border-card-theme
                  flex items-center justify-center text-[9px] font-bold text-secondary-theme"
                style={{ zIndex: 0 }}
              >
                +10
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme mb-1">
              Founded
            </p>
            <p className="text-2xl font-extrabold text-primary-theme">2022</p>
          </div>
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
          className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700
            flex items-center justify-center"
        >
          <Zap size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">Fast Delivery</p>
          <p className="text-[10px] text-tertiary-theme">On-Time Always</p>
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
        <div
          className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600
            flex items-center justify-center"
        >
          <CheckCircle2 size={13} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">150+ Done</p>
          <p className="text-[10px] text-green-500 font-semibold">
            Projects Delivered
          </p>
        </div>
      </div>
    </div>

    {/* Floating Badge — Top Right */}
    <div
      className="absolute -top-3 -right-4 animate-float hidden xl:block"
      style={{ animationDelay: "3.5s" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <span className="text-base">🌍</span>
        <div>
          <p className="text-xs font-bold text-primary-theme">Global Reach</p>
          <p className="text-[10px] text-tertiary-theme">5+ Countries</p>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const HeroAbout: React.FC = () => {
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
                <Sparkles size={13} className="text-primary-500" />
                <span className="text-xs font-bold text-secondary-theme">
                  About Webixle
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="animate-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold
                tracking-tight leading-[1.1] mb-5"
            >
              <span className="text-primary-theme">We Are </span>
              <span className="gradient-text">Webixle</span>
              <span className="block text-primary-theme mt-1">
                — Built to{" "}
                <span className="relative inline-block">
                  Create.
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M2 5C40 2 80 1 100 2C120 3 160 5 198 3"
                      stroke="url(#hero-underline)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="hero-underline" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-4">
              Welcome to{" "}
              <span className="font-bold text-primary-theme">Webixle</span> — a
              young, creative, and passionate digital team focused on building
              modern brands, products, and experiences from the ground up.
            </p>

            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-7">
              A{" "}
              <span className="font-semibold text-primary-theme">
                full-service digital startup
              </span>{" "}
              helping businesses turn ideas into reality through design,
              development, and marketing.
            </p>

            {/* Highlights */}
            {/* <div className="animate-in-delay-2 flex flex-col gap-2.5 mb-7">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full bg-green-500/10
                      flex items-center justify-center shrink-0"
                  >
                    <CheckCircle2 size={11} className="text-green-500" />
                  </div>
                  <span className="text-sm font-semibold text-primary-theme">
                    {item}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto">
              <Link href="/portfolio">
                <button
                  className="group relative w-full sm:w-auto inline-flex items-center
                    justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                    text-white overflow-hidden transition-all duration-300
                    hover:scale-[1.02] active:scale-95"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600" />
                  <span
                    className="absolute inset-0 bg-linear-to-r from-primary-700 to-accent-700
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center gap-2">
                    See Our Work
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </Link>

              <Link href="/about#team">
                <button
                  className="group w-full sm:w-auto inline-flex items-center
                    justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                    border border-card-theme bg-card-theme text-primary-theme
                    hover:bg-secondary-theme transition-all duration-300
                    hover:scale-[1.02] active:scale-95"
                >
                  <Users
                    size={16}
                    className="text-primary-500 group-hover:scale-110 transition-transform"
                  />
                  Meet The Team
                </button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="animate-in-delay-3 grid grid-cols-2 gap-3 w-full max-w-md">
              {STATS.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hidden lg:flex items-center justify-center animate-in-delay-2">
            <RightVisualCard />
          </div>
        </div>

        {/* ── BOTTOM TRUST BAR ── */}
        <div className="mt-16 animate-in-delay-3">
          <div className="w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 group cursor-default"
              >
                {(() => {
                  const TrustIcon = item.icon;
                  return (
                    <span className="text-base group-hover:scale-125 transition-transform duration-200">
                      <TrustIcon size={18} className="text-primary-theme" />
                    </span>
                  );
                })()}
                <span
                  className="text-sm font-semibold text-secondary-theme
                    group-hover:text-primary-theme transition-colors"
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;