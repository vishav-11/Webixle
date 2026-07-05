"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Clock,
  Shield,
  Zap,
  Star,
  Calendar,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const QUICK_BENEFITS = [
  { icon: Clock, text: "Free 30-min Consultation" },
  { icon: Shield, text: "NDA Signed Before We Talk" },
  { icon: Zap, text: "Quote Within 24 Hours" },
  { icon: Star, text: "No Commitment Required" },
];

const CONTACT_OPTIONS = [
  {
    id: "call",
    icon: Phone,
    label: "Schedule a Call",
    description: "Book a free 30-min discovery call",
    action: "Book Now",
    href: "/contact",
    linear: "from-blue-500 to-cyan-500",
    bglinear: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp Chat",
    description: "Chat directly — get reply in minutes",
    action: "Chat Now",
    href: "https://wa.me/yourphonenumber",
    linear: "from-green-500 to-emerald-500",
    bglinear: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconBg: "bg-green-500",
  },
  {
    id: "email",
    icon: Mail,
    label: "Send an Email",
    description: "Drop us your requirements in detail",
    action: "Email Us",
    href: "mailto:hello@yourcompany.com",
    linear: "from-accent-500 to-purple-500",
    bglinear: "from-accent-500/10 to-purple-500/5",
    borderColor: "border-accent-500/30",
    iconBg: "bg-accent-500",
  },
];

const RECENT_LAUNCHES = [
  { name: "ShopEase", type: "E-Commerce", time: "2 days ago", emoji: "🛍️" },
  { name: "MediCare App", type: "Mobile App", time: "5 days ago", emoji: "🏥" },
  { name: "FinTrack", type: "Dashboard", time: "1 week ago", emoji: "📊" },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Floating Notification Card ── */
const LaunchNotification: React.FC<{
  item: (typeof RECENT_LAUNCHES)[0];
  style?: React.CSSProperties;
  className?: string;
}> = ({ item, style, className }) => (
  <div
    className={`absolute flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-xl animate-float ${className}`}
    style={style}
  >
    <span className="text-2xl">{item.emoji}</span>
    <div>
      <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
      <p className="text-xs text-white/60">{item.type} · {item.time}</p>
    </div>
    <div className="flex items-center gap-1 ml-1">
      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      <span className="text-[10px] font-bold text-green-400">Live</span>
    </div>
  </div>
);

/* ── Quick Benefit Badge ── */
const BenefitBadge: React.FC<{ item: (typeof QUICK_BENEFITS)[0] }> = ({
  item,
}) => {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 shrink-0">
        <Icon size={12} className="text-white" />
      </div>
      <span className="text-sm font-medium text-white/80">{item.text}</span>
    </div>
  );
};

/* ── Contact Option Card ── */
const ContactCard: React.FC<{ option: (typeof CONTACT_OPTIONS)[0] }> = ({
  option,
}) => {
  const Icon = option.icon;
  return (
    <Link
      href={option.href}
      target={option.id === "whatsapp" || option.id === "email" ? "_blank" : undefined}
      className={`group flex items-center gap-4 p-5 rounded-2xl border bg-linear-to-br ${option.bglinear} ${option.borderColor} hover:shadow-(--shadow-elevation-lg) hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-xl ${option.iconBg} bg-linear-to-br ${option.linear} shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={22} className="text-white" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-primary-theme text-base group-hover:text-primary-500 transition-colors">
          {option.label}
        </p>
        <p className="text-sm text-secondary-theme truncate">
          {option.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-theme border border-card-theme text-sm font-bold text-primary-theme group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300 shrink-0">
        {option.action}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </div>
    </Link>
  );
};

/* ── Inline Email Form ── */
const QuickEmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-500/20 border border-green-500/30">
        <CheckCircle2 size={22} className="text-green-400" />
        <div>
          <p className="font-bold text-white text-sm">We'll be in touch soon!</p>
          <p className="text-xs text-white/60">
            Check your inbox within 2–4 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl transition-all duration-300 ${
          focused
            ? "bg-white/15 ring-2 ring-white/30"
            : "bg-white/10"
        } border border-white/20`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter your email address..."
          required
          className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/40 text-sm font-medium focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap"
        >
          Get Free Quote
          <ArrowRight size={14} />
        </button>
      </div>
      <p className="text-xs text-white/40 mt-2 text-center">
        No spam. No credit card. Just a friendly conversation. 🤝
      </p>
    </form>
  );
};

/* ── Urgency Strip ── */
const UrgencyStrip: React.FC = () => (
  <div className="flex items-center justify-center gap-2 flex-wrap">
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
      <Calendar size={14} className="text-yellow-400" />
      <span className="text-sm font-bold text-yellow-300">
        Only 2 project slots left for this month
      </span>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const CTABanner: React.FC = () => {
  return (
    <section className="relative section-padding overflow-hidden">

      {/* ══════════════════════════════════════
          PART 1 — MAIN HERO CTA BANNER
      ══════════════════════════════════════ */}
      <div className="container-custom relative z-10">
        <div className="relative rounded-3xl overflow-hidden">

          {/* ── linear Background ── */}
          <div className="absolute inset-0 bg-linear-to-br from-primary-700 via-primary-600 to-accent-600" />

          {/* ── Animated Mesh Overlay ── */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-linear(rgba(255,255,255,0.8) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* ── Glow Orbs ── */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent-400/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-48 h-48 rounded-full bg-primary-300/10 blur-2xl pointer-events-none" />

          {/* ── Floating Launch Notifications ── */}
          <LaunchNotification
            item={RECENT_LAUNCHES[0]}
            className="top-8 left-8 hidden xl:flex"
            style={{ animationDelay: "0s" }}
          />
          <LaunchNotification
            item={RECENT_LAUNCHES[1]}
            className="bottom-8 left-8 hidden xl:flex"
            style={{ animationDelay: "2s" }}
          />
          <LaunchNotification
            item={RECENT_LAUNCHES[2]}
            className="top-8 right-8 hidden xl:flex"
            style={{ animationDelay: "4s" }}
          />

          {/* ── Main Content ── */}
          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 max-w-4xl mx-auto text-center">

            {/* Sparkle Badge */}
            <div className="flex justify-center mb-6 animate-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                <Sparkles size={15} className="text-yellow-300" />
                <span className="text-sm font-bold text-white">
                  Let's Build Something Great Together
                </span>
                <Sparkles size={15} className="text-yellow-300" />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-in-delay-1 text-balance">
              Your Next Big{" "}
              <span className="relative inline-block">
                Digital Product
                {/* Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 400 12"
                  fill="none"
                >
                  <path
                    d="M2 8C80 3 160 2 200 3C240 4 320 7 398 5"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Starts Here.
            </h2>

            {/* Sub Text */}
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-8 animate-in-delay-2 text-balance">
              From a simple idea to a fully launched product — we handle
              everything. Book a free consultation and get a detailed quote
              within 24 hours.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 animate-in-delay-2">
              {QUICK_BENEFITS.map((benefit) => (
                <BenefitBadge key={benefit.text} item={benefit} />
              ))}
            </div>

            {/* Email Form */}
            <div className="max-w-xl mx-auto mb-6 animate-in-delay-3">
              <QuickEmailForm />
            </div>

            {/* OR Divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto mb-6 animate-in-delay-3">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                or reach us via
              </span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-in-delay-3">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 shadow-xl whitespace-nowrap"
              >
                <Rocket size={16} className="group-hover:rotate-12 transition-transform" />
                Book Free Discovery Call
              </Link>
              <Link
                href="https://wa.me/yourphonenumber"
                target="_blank"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                💬 WhatsApp Us Now
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            PART 2 — URGENCY STRIP
        ══════════════════════════════════════ */}
        <div className="mt-6 animate-in-delay-3">
          <UrgencyStrip />
        </div>

        {/* ══════════════════════════════════════
            PART 3 — THREE CONTACT CARDS
        ══════════════════════════════════════ */}
        <div className="mt-14 animate-in-delay-3">
          {/* Section Label */}
          <p className="text-center text-sm font-bold text-secondary-theme uppercase tracking-widest mb-6">
            Choose How You Want to Connect
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {CONTACT_OPTIONS.map((option) => (
              <ContactCard key={option.id} option={option} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            PART 4 — MINI TRUST BAR
        ══════════════════════════════════════ */}
        <div className="mt-14 animate-in-delay-3">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-6 px-6 rounded-2xl bg-card-theme border border-card-theme">
            {[
              { emoji: "🔒", text: "NDA Protected" },
              { emoji: "⚡", text: "Quote in 24hrs" },
              { emoji: "🌍", text: "Global Clients" },
              { emoji: "✅", text: "150+ Projects Done" },
              { emoji: "🎯", text: "On-Time Delivery" },
              { emoji: "💬", text: "24/7 Support" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 group"
              >
                <span className="text-xl group-hover:scale-125 transition-transform duration-200">
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