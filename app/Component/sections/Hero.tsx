"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Code2,
  Smartphone,
  Globe,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

// ============================================
// CONSTANTS
// ============================================

const HERO_HIGHLIGHTS = [
  "Free Consultation",
  "On-Time Delivery",
  "Post-Launch Support",
];

const SOCIAL_PROOF_AVATARS = [
  { initials: "AK", color: "from-primary-400 to-primary-600" },
  { initials: "SR", color: "from-accent-400 to-accent-600" },
  { initials: "MJ", color: "from-blue-400 to-blue-600" },
  { initials: "PR", color: "from-green-400 to-green-600" },
  { initials: "NK", color: "from-orange-400 to-orange-600" },
];

const FLOATING_TECH_BADGES = [
  { icon: Code2, label: "Next.js", color: "text-primary-500" },
  { icon: Smartphone, label: "React Native", color: "text-accent-500" },
  { icon: Globe, label: "Node.js", color: "text-green-500" },
  { icon: Zap, label: "Flutter", color: "text-yellow-500" },
];

const STATS = [
  { value: "150+", label: "Projects Done", color: "text-primary-500" },
  { value: "80+", label: "Happy Clients", color: "text-accent-500" },
  { value: "5+", label: "Years Exp.", color: "text-green-500" },
  { value: "99%", label: "Satisfaction", color: "text-yellow-500" },
];

const RECENT_PROJECTS = [
  {
    name: "EcommerceX",
    type: "Web App",
    status: "Live",
    color: "bg-green-500",
  },
  {
    name: "RideApp Pro",
    type: "Mobile App",
    status: "Live",
    color: "bg-blue-500",
  },
  {
    name: "FinTrack",
    type: "Dashboard",
    status: "Live",
    color: "bg-accent-500",
  },
];

// ============================================
// HERO COMPONENT
// ============================================

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-16">

      {/* ── Background Layer ── */}
      <HeroBackground />

      {/* ── Main Content ── */}
      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start">

            {/* Top Badge */}
            <div className="animate-in mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-200 bg-primary-50 dark:bg-primary-950/40 dark:border-primary-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                  🚀 Available for New Projects
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
              <span className="text-primary-theme">We Build</span>{" "}
              <span className="linear-text">Websites</span>{" "}
              <span className="text-primary-theme">&</span>{" "}
              <br className="hidden sm:block" />
              <span className="linear-text">Mobile Apps</span>{" "}
              <span className="text-primary-theme">That</span>
              <br />
              {/* Animated Typewriter Word */}
              <span className="relative inline-block text-primary-theme">
                Actually{" "}
                <span className="linear-text">Convert</span>
                {/* Underline Decoration */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 4 100 2 150 3C200 4 250 6 298 4"
                    stroke="url(#underline-linear)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-linear"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="0"
                    >
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-in-delay-2 text-lg sm:text-xl text-secondary-theme leading-relaxed max-w-xl mb-8 text-balance">
              We transform your{" "}
              <span className="font-semibold text-primary-theme">
                business idea
              </span>{" "}
              into a powerful digital product — with clean code, modern design,
              and on-time delivery.
            </p>

            {/* Highlight Checks */}
            <div className="animate-in-delay-2 flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-secondary-theme"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link href="/contact">
                <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  {/* linear Background */}
                  <span className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600 transition-opacity duration-300" />
                  <span className="absolute inset-0 bg-linear-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Glow */}
                  <span className="absolute inset-0 rounded-xl shadow-[0_0_24px_rgba(99,102,241,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    Start Your Project
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </button>
              </Link>

              {/* Secondary CTA */}
              <Link href="/portfolio">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base border border-card-theme bg-card-theme text-primary-theme hover:bg-secondary-theme transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-(--shadow-elevation-sm)">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                    <Play size={13} className="text-white ml-0.5" fill="white" />
                  </div>
                  View Our Work
                </button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Avatars + Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {SOCIAL_PROOF_AVATARS.map((avatar, i) => (
                    <div
                      key={avatar.initials}
                      className={`w-9 h-9 rounded-full bg-linear-to-br ${avatar.color} flex items-center justify-center text-white text-xs font-bold border-2 border-primary-theme ring-1 ring-card-theme`}
                      style={{ zIndex: SOCIAL_PROOF_AVATARS.length - i }}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xs text-secondary-theme font-medium">
                    <span className="text-primary-theme font-bold">80+</span> satisfied clients
                  </span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-primary-theme opacity-10" />

              {/* Trust Badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary-theme border border-card-theme">
                <Shield size={16} className="text-green-500 shrink-0" />
                <span className="text-xs font-medium text-secondary-theme">
                  NDA & Secure Development
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <RightVisual />
          </div>
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <StatsBar />
      </div>
    </section>
  );
};

// ============================================
// SUB-COMPONENTS
// ============================================

/* ── Background Decorations ── */
const HeroBackground: React.FC = () => (
  <>
    <div className="hero-glow" />

    {/* Animated Grid */}
    <div
      className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-linear(var(--border-primary) 1px, transparent 1px), linear-linear(90deg, var(--border-primary) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    {/* Floating Orbs */}
    <div className="absolute top-20 right-0 w-125 h-125 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
    <div className="absolute bottom-20 left-0 w-100 h-100 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 rounded-full bg-primary-400/5 blur-[120px] pointer-events-none" />
  </>
);


/* ── Right Visual / Mockup ── */
const RightVisual: React.FC = () => (
  <div className="relative w-full max-w-lg">

    {/* Main Card - Phone + Web Mockup */}
    <div className="relative">

      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-500/20 to-accent-500/20 blur-xl scale-105" />

      {/* Main Dashboard Card */}
      <div className="relative rounded-2xl border border-card-theme bg-card-theme overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

        {/* Browser Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary-theme/10 bg-secondary-theme">
          <div className="flex gap-1.5">
            {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
              <div key={c} className={`w-3 h-3 rounded-full ${c} opacity-80`} />
            ))}
          </div>
          <div className="flex-1 mx-3">
            <div className="h-6 bg-tertiary-theme rounded-md flex items-center px-3 gap-2">
              <div className="w-3 h-3 rounded-full border border-green-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-tertiary-theme font-mono">
                yourproject.com
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-5 space-y-4">

          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-32 bg-linear-to-r from-primary-500/30 to-accent-500/30 rounded-full mb-2" />
              <div className="h-3 w-20 bg-secondary-theme rounded-full" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/40">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-green-700 dark:text-green-400">Live</span>
            </div>
          </div>

          {/* Mini Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "₹2.4L", up: true, color: "text-green-500" },
              { label: "Users", value: "12.8K", up: true, color: "text-primary-500" },
              { label: "Orders", value: "1,240", up: true, color: "text-accent-500" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-secondary-theme rounded-xl p-3 border border-card-theme"
              >
                <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-tertiary-theme mt-0.5">{s.label}</div>
                <div className="text-[10px] text-green-500 font-semibold flex items-center gap-0.5 mt-1">
                  <TrendingUp size={9} /> +18%
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-secondary-theme rounded-xl p-3 border border-card-theme">
            <div className="text-xs font-semibold text-primary-theme mb-3">
              Weekly Performance
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[35, 55, 40, 70, 50, 85, 65, 90, 72, 88, 76, 95].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm relative overflow-hidden"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-primary-600 to-primary-400 opacity-80" />
                    {i === 11 && (
                      <div className="absolute inset-0 bg-linear-to-t from-accent-600 to-accent-400" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Recent Projects */}
          <div className="space-y-2">
            {RECENT_PROJECTS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary-theme transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${p.color} shrink-0`} />
                <span className="text-xs font-semibold text-primary-theme flex-1">
                  {p.name}
                </span>
                <span className="text-[10px] text-tertiary-theme">{p.type}</span>
                <span className="text-[10px] font-medium text-green-500 bg-green-100 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating Tech Badges ── */}
      {/* Top Left */}
      <div className="absolute -top-4 -left-6 animate-float">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Globe size={14} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-primary-theme">Next.js</div>
            <div className="text-[10px] text-tertiary-theme">Web Dev</div>
          </div>
        </div>
      </div>

      {/* Bottom Right */}
      <div
        className="absolute -bottom-4 -right-6 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md)">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-accent-500 to-accent-700 flex items-center justify-center">
            <Smartphone size={14} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-primary-theme">Flutter</div>
            <div className="text-[10px] text-tertiary-theme">Mobile App</div>
          </div>
        </div>
      </div>

      {/* Top Right - Notification */}
      <div
        className="absolute -top-4 -right-4 animate-float"
        style={{ animationDelay: "3s" }}
      >
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-md) min-w-40">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0">
            <CheckCircle size={15} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-primary-theme">Project Delivered!</div>
            <div className="text-[10px] text-green-500 font-medium">On-time ✨</div>
          </div>
        </div>
      </div>

      {/* Left Side - Code snippet */}
      <div
        className="absolute -left-8 bottom-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="px-3 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-950 border border-gray-700 shadow-(--shadow-elevation-md)">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <div className="font-mono text-[10px] space-y-0.5">
            <div>
              <span className="text-purple-400">const</span>
              <span className="text-blue-300"> app </span>
              <span className="text-white">= </span>
              <span className="text-yellow-300">build</span>
              <span className="text-white">()</span>
            </div>
            <div>
              <span className="text-green-400">// ✅ Ready to Launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


/* ── Bottom Stats Bar ── */
const StatsBar: React.FC = () => (
  <div className="mt-20 animate-in-delay-3">
    {/* Divider */}
    <div className="w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent mb-10" />

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
      {STATS.map((stat, i) => (
        <div key={stat.label} className="text-center group">
          {/* Number */}
          <div
            className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}
          >
            {stat.value}
          </div>
          {/* Label */}
          <div className="text-sm text-secondary-theme font-medium">
            {stat.label}
          </div>
          {/* Bottom accent line */}
          <div
            className={`mt-2 mx-auto h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-500 ${i === 0
                ? "bg-primary-500"
                : i === 1
                  ? "bg-accent-500"
                  : i === 2
                    ? "bg-green-500"
                    : "bg-yellow-500"
              }`}
          />
        </div>
      ))}
    </div>

    {/* Tech Stack Pills */}
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
      <span className="text-xs text-tertiary-theme font-medium mr-1">
        Built with:
      </span>
      {FLOATING_TECH_BADGES.map(({ icon: Icon, label, color }) => (
        <div
          key={label}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-theme border border-card-theme hover:border-primary-500/30 transition-colors duration-200 group"
        >
          <Icon size={13} className={`${color} group-hover:scale-110 transition-transform`} />
          <span className="text-xs font-medium text-secondary-theme">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);