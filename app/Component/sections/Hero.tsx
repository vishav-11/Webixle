"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Code2,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Clock,
  HeartHandshake,
} from "lucide-react";

import DarkBg from "../../../public/Image/banners/herobg.png";
import LightBg from "../../../public/Image/banners/lightbg.png";
import { useTheme } from "next-themes";

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
];

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Fast, modern websites & web apps",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "iOS & Android apps that users love",
    iconBg: "bg-accent-500/10",
    iconColor: "text-accent-500",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored solutions for your business",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
];

const TRUST_POINTS = [
  { icon: Clock, label: "On-Time Delivery", color: "text-primary-500" },
  { icon: Shield, label: "NDA Protected", color: "text-green-500" },
  { icon: HeartHandshake, label: "Dedicated Support", color: "text-accent-500" },
  { icon: Zap, label: "Fast Turnaround", color: "text-yellow-500" },
];

// ============================================
// BACKGROUND
// ============================================

const HeroBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={isDark ? DarkBg : LightBg}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Light overlay for better text readability */}
        <div 
          className={`absolute inset-0 ${
            isDark 
              ? "bg-black/70" 
              : "bg-white/60"
          }`} 
        />
      </div>

      {/* Existing Glow Effects */}
      <div className="hero-glow" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />
    </>
  );
};

// ============================================
// SERVICE VISUAL (Right Column)
// ============================================

const ServiceVisual: React.FC = () => (
  <div className="relative w-full max-w-md">
    {/* Glow */}
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-500/10 to-accent-500/10 blur-2xl scale-105" />

    {/* Main Card */}
    <div
      className="relative rounded-2xl border border-card-theme bg-card-theme
        shadow-[0_24px_60px_rgba(0,0,0,0.10)] overflow-hidden"
    >
      {/* Card Header */}
      <div className="px-5 py-4 border-b border-card-theme bg-secondary-theme">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-primary-theme">Our Services</h3>
            <p className="text-xs text-tertiary-theme mt-0.5">What we build for you</p>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full
              bg-green-500/10 border border-green-500/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-green-500">
              Accepting Projects
            </span>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="p-4 space-y-2.5">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex items-center gap-3 p-3 rounded-xl
              bg-secondary-theme border border-card-theme
              hover:border-primary-500/30 transition-all duration-200 group cursor-default"
          >
            <div
              className={`w-9 h-9 rounded-lg ${service.iconBg}
                flex items-center justify-center shrink-0
                group-hover:scale-110 transition-transform duration-200`}
            >
              <service.icon size={17} className={service.iconColor} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-primary-theme">{service.title}</div>
              <div className="text-xs text-tertiary-theme mt-0.5">{service.desc}</div>
            </div>
            <ArrowRight
              size={13}
              className="text-tertiary-theme group-hover:text-primary-500
                group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
            />
          </div>
        ))}
      </div>

      {/* Trust Points */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {TRUST_POINTS.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg
                bg-secondary-theme border border-card-theme"
            >
              <Icon size={13} className={`${color} shrink-0`} />
              <span className="text-xs font-medium text-secondary-theme truncate">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating Badge — Top Right */}
    <div className="absolute -top-4 -right-4 animate-float">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <div
          className="w-7 h-7 rounded-full bg-linear-to-br from-green-400 to-green-600
            flex items-center justify-center shrink-0"
        >
          <CheckCircle size={13} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold text-primary-theme">Project Delivered!</div>
          <div className="text-[10px] text-green-500 font-medium">On-time ✨</div>
        </div>
      </div>
    </div>

    {/* Floating Badge — Bottom Left */}
    <div
      className="absolute -bottom-4 -left-4 animate-float"
      style={{ animationDelay: "1.5s" }}
    >
      <div
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl
          bg-card-theme border border-card-theme shadow-lg"
      >
        <div className="flex -space-x-1.5">
          {[
            "from-primary-400 to-primary-600",
            "from-accent-400 to-accent-600",
            "from-blue-400 to-blue-600",
          ].map((c, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-full bg-linear-to-br ${c} border-2 border-card-theme`}
            />
          ))}
        </div>
        <div>
          <div className="text-xs font-bold text-primary-theme">80+ Clients</div>
          <div className="text-[10px] text-tertiary-theme">Across 10+ Industries</div>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN HERO COMPONENT
// ============================================

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-16">
      <HeroBackground />

      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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
                <span className="text-xs font-semibold text-secondary-theme">
                  🚀 Available for New Projects
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="animate-in-delay-1 text-3xl sm:text-4xl lg:text-[48px] font-bold
                tracking-tight leading-[1.1] mb-5"
            >
              <span className="text-primary-theme">We Build </span>
              <span className="linear-text">Digital Products</span>
              <br />
              <span className="text-primary-theme">That Drive </span>
              <span className="relative inline-block">
                <span className="linear-text">Real Results</span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M2 6C50 3 100 2 150 2.5C200 3 250 5 298 3"
                    stroke="url(#ug)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="ug" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-lg mb-6">
              From idea to launch — we design and develop{" "}
              <span className="font-semibold text-primary-theme">websites</span>,{" "}
              <span className="font-semibold text-primary-theme">mobile apps</span> &{" "}
              <span className="font-semibold text-primary-theme">custom software</span>{" "}
              for businesses that want to grow.
            </p>

            {/* Highlights */}
            <div className="animate-in-delay-2 flex flex-wrap gap-x-5 gap-y-2 mb-7">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-medium text-secondary-theme"
                >
                  <CheckCircle size={13} className="text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 mb-9 w-full sm:w-auto">
              <Link href="/contact">
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
                    Start Your Project
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
                  View Our Work
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300
                      opacity-60"
                  />
                </button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="animate-in-delay-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {SOCIAL_PROOF_AVATARS.map((avatar, i) => (
                  <div
                    key={avatar.initials}
                    className={`w-8 h-8 rounded-full bg-linear-to-br ${avatar.color}
                      flex items-center justify-center text-white text-[10px] font-bold
                      border-2 border-card-theme`}
                    style={{ zIndex: SOCIAL_PROOF_AVATARS.length - i }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs text-secondary-theme">
                  <span className="font-bold text-primary-theme">80+</span> happy clients
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <ServiceVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;