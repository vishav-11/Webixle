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
} from "lucide-react";

// ============================================
// DATA
// ============================================

const STATS = [
  {
    value: "150+",
    label: "Projects Delivered",
    icon: FolderOpen,
    color: "text-primary-500",
    bgColor: "bg-primary-500/10",
  },
  {
    value: "80+",
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

const SERVICES_PREVIEW = [
  { emoji: "🌐", label: "Web Dev" },
  { emoji: "📱", label: "Mobile Apps" },
  { emoji: "🎨", label: "UI/UX" },
  { emoji: "⛓️", label: "Web3" },
  { emoji: "📈", label: "Marketing" },
  { emoji: "🎬", label: "Video" },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Stat Card ── */
const StatCard: React.FC<{
  stat: (typeof STATS)[0];
  index: number;
}> = ({ stat, index }) => {
  const Icon = stat.icon;
  return (
    <div
      className="group flex items-center gap-3 p-4 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-11 h-11 rounded-xl ${stat.bgColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} className={stat.color} />
      </div>

      {/* Text */}
      <div>
        <div
          className={`text-2xl font-extrabold ${stat.color} leading-none mb-0.5`}
        >
          {stat.value}
        </div>
        <div className="text-xs font-medium text-secondary-theme">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

/* ── Right Visual Card ── */
const RightVisualCard: React.FC = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-500/20 to-accent-500/20 blur-2xl scale-105 pointer-events-none" />

    {/* Main Card */}
    <div className="relative rounded-3xl border border-card-theme bg-card-theme overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

      {/* Card Top Gradient Banner */}
      <div className="relative h-40 bg-linear-to-br from-primary-600 via-primary-500 to-accent-500 overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent-400/20 blur-xl" />

        {/* Company Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-2 shadow-xl">
            <Rocket size={30} className="text-white" />
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight">
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
          <div className="flex items-center gap-2 text-sm text-secondary-theme">
            <MapPin size={14} className="text-primary-500" />
            <span className="font-medium">India · Global</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/40">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-green-700 dark:text-green-400">
              Available for Projects
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-border-primary to-transparent" />

        {/* Services Preview */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-3">
            What We Build
          </p>
          <div className="grid grid-cols-3 gap-2">
            {SERVICES_PREVIEW.map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-secondary-theme border border-card-theme hover:border-primary-500/30 transition-colors group cursor-default"
              >
                <span className="text-xl group-hover:scale-125 transition-transform duration-200">
                  {service.emoji}
                </span>
                <span className="text-[10px] font-semibold text-secondary-theme text-center leading-tight">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-border-primary to-transparent" />

        {/* Team Avatars */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
              Our Team
            </p>
            <div className="flex -space-x-2">
              {TEAM_AVATARS.map((avatar, i) => (
                <div
                  key={avatar.initials}
                  className={`w-8 h-8 rounded-full bg-linear-to-br ${avatar.gradient} flex items-center justify-center text-white text-[10px] font-bold border-2 border-card-theme ring-1 ring-border-card`}
                  style={{ zIndex: TEAM_AVATARS.length - i }}
                >
                  {avatar.initials}
                </div>
              ))}
              <div
                className="w-8 h-8 rounded-full bg-secondary-theme border-2 border-card-theme flex items-center justify-center text-[10px] font-bold text-secondary-theme ring-1 ring-border-card"
                style={{ zIndex: 0 }}
              >
                +10
              </div>
            </div>
          </div>

          {/* Founded Year */}
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-1">
              Founded
            </p>
            <p className="text-2xl font-extrabold text-primary-theme">2022</p>
          </div>
        </div>
      </div>
    </div>

    {/* ── Floating Badge 1 — Top Left ── */}
    <div
      className="absolute -top-4 -left-6 animate-float hidden sm:block"
      style={{ animationDelay: "0s" }}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)">
        <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <Zap size={14} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">Fast Delivery</p>
          <p className="text-[10px] text-tertiary-theme">On-Time Always</p>
        </div>
      </div>
    </div>

    {/* ── Floating Badge 2 — Bottom Right ── */}
    <div
      className="absolute -bottom-4 -right-6 animate-float hidden sm:block"
      style={{ animationDelay: "2s" }}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)">
        <div className="w-7 h-7 rounded-lg bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-primary-theme">150+ Done</p>
          <p className="text-[10px] text-green-500 font-semibold">
            Projects Delivered
          </p>
        </div>
      </div>
    </div>

    {/* ── Floating Badge 3 — Top Right ── */}
    <div
      className="absolute -top-3 -right-4 animate-float hidden xl:block"
      style={{ animationDelay: "3.5s" }}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)">
        <span className="text-lg">🌍</span>
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

      {/* ── Background ── */}
      <div className="hero-glow" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ══════════════════════════
              LEFT COLUMN
          ══════════════════════════ */}
          <div className="flex flex-col items-start">

            {/* Top Badge */}
            <div className="animate-in mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-950/40">
                <Sparkles size={14} className="text-primary-500" />
                <span className="text-sm font-bold text-primary-700 dark:text-primary-300">
                  About Webixle
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
              <span className="text-primary-theme">We Are</span>{" "}
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
                      <linearGradient
                        id="hero-underline"
                        x1="0"
                        y1="0"
                        x2="200"
                        y2="0"
                      >
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-5 text-balance">
              Welcome to{" "}
              <span className="font-bold text-primary-theme">Webixle</span> — a
              young, creative, and passionate digital team focused on building
              modern brands, products, and experiences from the ground up.
            </p>

            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-xl mb-8 text-balance">
              We are a{" "}
              <span className="font-semibold text-primary-theme">
                full-service digital startup
              </span>{" "}
              helping businesses turn ideas into reality through design,
              development, and marketing.
            </p>

            {/* Highlight Checks */}
            <div className="animate-in-delay-2 flex flex-col gap-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
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

            {/* CTA Buttons */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-12">
              {/* Primary */}
              <Link href="/portfolio">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  <span className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600" />
                  <span className="absolute inset-0 bg-linear-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 rounded-xl shadow-[0_0_24px_rgba(99,102,241,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    See Our Work
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </Link>

              {/* Secondary */}
              <Link href="/about#team">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base border border-card-theme bg-card-theme text-primary-theme hover:bg-secondary-theme transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-(--shadow-elevation-sm)">
                  <Users
                    size={18}
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

          {/* ══════════════════════════
              RIGHT COLUMN
          ══════════════════════════ */}
          <div className="hidden lg:flex items-center justify-center animate-in-delay-2">
            <RightVisualCard />
          </div>
        </div>

        {/* ══════════════════════════
            BOTTOM STRIP
        ══════════════════════════ */}
        <div className="mt-20 animate-in-delay-3">
          {/* Gradient Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent mb-10" />

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { emoji: "🚀", text: "Innovation First" },
              { emoji: "🎨", text: "Creative Designs" },
              { emoji: "⚡", text: "Fast Delivery" },
              { emoji: "🔒", text: "NDA Protected" },
              { emoji: "🌍", text: "Global Clients" },
              { emoji: "🤝", text: "Long-Term Partner" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 group cursor-default"
              >
                <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                  {item.emoji}
                </span>
                <span className="text-sm font-semibold text-secondary-theme group-hover:text-primary-theme transition-colors">
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