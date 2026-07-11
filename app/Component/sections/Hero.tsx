"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useTheme } from "next-themes";

import DarkBg from "../../../public/Image/banners/herobg.png";
import LightBg from "../../../public/Image/banners/lightbg.png";
import HeroSecImage from "../../../public/Image/banners/herosecimage.png";

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

// ============================================
// BACKGROUND
// ============================================

const HeroBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        {mounted ? (
          <Image
            src={resolvedTheme === "dark" ? DarkBg : LightBg}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-(--bg-primary)" />
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            mounted && resolvedTheme === "dark"
              ? "bg-black/70"
              : "bg-white/60"
          }`}
        />
      </div>

      {/* Glow Effects */}
      <div className="hero-glow" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-500/8 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px] animate-pulse-slow pointer-events-none" />
    </>
  );
};

// ============================================
// RIGHT SECTION — Image
// ============================================

const HeroRightImage: React.FC = () => (
  // ✅ px-8 mobile pe badges clip hone se bachata hai
  <div className="relative w-full px-8 sm:px-6 lg:px-0">

    {/* ✅ Image container — mobile pe choti, desktop pe badi */}
    <div className="relative w-full h-70 sm:h-95 lg:h-125 mx-auto max-w-sm sm:max-w-md lg:max-w-lg">

      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-500/20 to-accent-500/20 blur-3xl scale-105" />

      {/* Main Image */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={HeroSecImage}
          alt="Webixle — Web Development & Digital Services"
          fill
          className="object-cover object-center rounded-2xl"
          priority
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>

      {/* ✅ Floating Badge — Top Right */}
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 animate-float z-10">
        <div
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2
            rounded-xl bg-card-theme border border-card-theme shadow-lg backdrop-blur-sm"
        >
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-linear-to-br
              from-green-400 to-green-600 flex items-center justify-center shrink-0"
          >
            <CheckCircle size={11} className="text-white" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-bold text-primary-theme">
              Project Delivered!
            </div>
            <div className="text-[9px] sm:text-[10px] text-green-500 font-medium">
              On-time ✨
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Floating Badge — Bottom Left */}
      <div
        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 animate-float z-10"
        style={{ animationDelay: "1.5s" }}
      >
        <div
          className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2
            rounded-xl bg-card-theme border border-card-theme shadow-lg backdrop-blur-sm"
        >
          <div className="flex -space-x-1.5">
            {[
              "from-primary-400 to-primary-600",
              "from-accent-400 to-accent-600",
              "from-blue-400 to-blue-600",
            ].map((c, i) => (
              <div
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-linear-to-br
                  ${c} border-2 border-card-theme`}
              />
            ))}
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-bold text-primary-theme">
              80+ Clients
            </div>
            <div className="text-[9px] sm:text-[10px] text-tertiary-theme">
              10+ Industries
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Floating Badge — Bottom Right */}
      <div
        className="absolute bottom-6 -right-3 sm:bottom-8 sm:-right-4 animate-float z-10"
        style={{ animationDelay: "0.8s" }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2
            rounded-xl bg-card-theme border border-card-theme shadow-lg backdrop-blur-sm"
        >
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
          <span className="text-[10px] sm:text-xs font-bold text-primary-theme">
            5.0 Rating
          </span>
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
    // ✅ min-h-screen hata diya — auto height
    // ✅ pt-16 = navbar height ke barabar
    <section className="relative overflow-hidden bg-mesh pt-16">
      <HeroBackground />

      <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
        {/* 
          ✅ Mobile:  1 column (text upar, image neeche)
          ✅ Tablet:  1 column
          ✅ Desktop: 2 column (side by side)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* ══════════════════════════
              LEFT COLUMN — Text
          ══════════════════════════ */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="animate-in mb-5 sm:mb-6">
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
              className="animate-in-delay-1 text-3xl sm:text-4xl lg:text-[48px]
                font-bold tracking-tight leading-[1.1] mb-4 sm:mb-5"
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
            <p className="animate-in-delay-2 text-base sm:text-lg text-secondary-theme leading-relaxed max-w-lg mb-5 sm:mb-6">
              From idea to launch — we design and develop{" "}
              <span className="font-semibold text-primary-theme">websites</span>,{" "}
              <span className="font-semibold text-primary-theme">mobile apps</span> &{" "}
              <span className="font-semibold text-primary-theme">custom software</span>{" "}
              for businesses that want to grow.
            </p>

            {/* Highlights */}
            <div className="animate-in-delay-2 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 mb-6 sm:mb-7">
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
            <div className="animate-in-delay-3 flex flex-col sm:flex-row gap-3 mb-8 sm:mb-9 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
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

              <Link href="/portfolio" className="w-full sm:w-auto">
                <button
                  className="group w-full sm:w-auto inline-flex items-center
                    justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm
                    border border-card-theme bg-card-theme text-primary-theme
                    hover:bg-secondary-theme transition-all duration-300
                    hover:scale-[1.02] active:scale-95"
                >
                  View Our Work
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300 opacity-60"
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
                    <Star
                      key={i}
                      size={11}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-xs text-secondary-theme">
                  <span className="font-bold text-primary-theme">80+</span> happy clients
                </span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════
              RIGHT COLUMN — Image
              ✅ Mobile pe bhi show hoga
          ══════════════════════════ */}
          <div className="relative flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
            <HeroRightImage />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;