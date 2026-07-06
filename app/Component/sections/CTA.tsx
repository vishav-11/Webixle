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
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp Chat",
    description: "Chat directly — reply in minutes",
    action: "Chat Now",
    href: "https://wa.me/yourphonenumber",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    iconBg: "bg-green-500",
  },
  {
    id: "email",
    icon: Mail,
    label: "Send an Email",
    description: "Drop your requirements in detail",
    action: "Email Us",
    href: "mailto:hello@yourcompany.com",
    gradient: "from-accent-500 to-purple-500",
    bgGradient: "from-accent-500/10 to-purple-500/5",
    border: "border-accent-500/20",
    iconBg: "bg-accent-500",
  },
];

const RECENT_LAUNCHES = [
  { name: "ShopEase", type: "E-Commerce", time: "2 days ago", emoji: "🛍️" },
  { name: "MediCare App", type: "Mobile App", time: "5 days ago", emoji: "🏥" },
  { name: "FinTrack", type: "Dashboard", time: "1 week ago", emoji: "📊" },
];

const TRUST_ITEMS = [
  { emoji: "🔒", text: "NDA Protected" },
  { emoji: "⚡", text: "Quote in 24hrs" },
  { emoji: "🌍", text: "Global Clients" },
  { emoji: "✅", text: "150+ Projects" },
  { emoji: "🎯", text: "On-Time Delivery" },
  { emoji: "💬", text: "24/7 Support" },
];

// ============================================
// FLOATING NOTIFICATION
// ============================================

const LaunchNotification: React.FC<{
  item: (typeof RECENT_LAUNCHES)[0];
  style?: React.CSSProperties;
  className?: string;
}> = ({ item, style, className }) => (
  <div
    className={`absolute flex items-center gap-3 px-4 py-3 rounded-2xl
      bg-white/10 backdrop-blur-md border border-white/20
      shadow-xl animate-float ${className}`}
    style={style}
  >
    <span className="text-xl">{item.emoji}</span>
    <div>
      <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
      <p className="text-xs text-white/60">
        {item.type} · {item.time}
      </p>
    </div>
    <div className="flex items-center gap-1 ml-1">
      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      <span className="text-[10px] font-bold text-green-400">Live</span>
    </div>
  </div>
);

// ============================================
// QUICK EMAIL FORM
// ============================================

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
      <div
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl
          bg-green-500/20 border border-green-500/30"
      >
        <CheckCircle2 size={20} className="text-green-400" />
        <div>
          <p className="font-bold text-white text-sm">We'll be in touch soon!</p>
          <p className="text-xs text-white/60">Check your inbox within 2–4 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl border
          border-white/20 transition-all duration-300
          ${focused ? "bg-white/15 ring-2 ring-white/30" : "bg-white/10"}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter your email address..."
          required
          className="flex-1 bg-transparent px-4 py-2.5 text-white
            placeholder:text-white/40 text-sm font-medium focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
            bg-white text-primary-700 font-bold text-sm
            hover:bg-primary-50 transition-all duration-200 active:scale-95
            shrink-0 whitespace-nowrap"
        >
          Get Free Quote
          <ArrowRight size={13} />
        </button>
      </div>
      <p className="text-xs text-white/40 mt-2 text-center">
        No spam. No credit card. Just a friendly conversation. 🤝
      </p>
    </form>
  );
};

// ============================================
// CONTACT CARD
// ============================================

const ContactCard: React.FC<{ option: (typeof CONTACT_OPTIONS)[0] }> = ({
  option,
}) => {
  const Icon = option.icon;
  return (
    <Link
      href={option.href}
      target={option.id !== "call" ? "_blank" : undefined}
      className={`group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border
        bg-gradient-to-br ${option.bgGradient} ${option.border}
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-11 h-11 rounded-xl
          bg-gradient-to-br ${option.gradient} shrink-0 shadow-md
          group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} className="text-white" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-primary-theme text-sm group-hover:text-primary-500 transition-colors">
          {option.label}
        </p>
        <p className="text-xs text-secondary-theme truncate mt-0.5">
          {option.description}
        </p>
      </div>

      {/* Action */}
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
          bg-secondary-theme border border-card-theme
          text-xs font-bold text-primary-theme
          group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600
          transition-all duration-300 shrink-0"
      >
        {option.action}
        <ArrowRight
          size={12}
          className="group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </div>
    </Link>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const CTABanner: React.FC = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative z-10">

        {/* ── PART 1: MAIN CTA BANNER ── */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-accent-400/20 blur-3xl pointer-events-none" />

          {/* Floating Notifications */}
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

          {/* Content */}
          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-18 max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="flex justify-center mb-5 animate-in">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/15 backdrop-blur-sm border border-white/25"
              >
                <Sparkles size={13} className="text-yellow-300" />
                <span className="text-sm font-bold text-white">
                  Let's Build Something Great Together
                </span>
                <Sparkles size={13} className="text-yellow-300" />
              </div>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white
                leading-[1.1] tracking-tight mb-5 animate-in-delay-1"
            >
              Your Next Big{" "}
              <span className="relative inline-block">
                Digital Product
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 400 10"
                  fill="none"
                >
                  <path
                    d="M2 6C80 3 160 2 200 2.5C240 3 320 6 398 4"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Starts Here.
            </h2>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg text-white/75 leading-relaxed
                max-w-xl mx-auto mb-7 animate-in-delay-2"
            >
              From idea to launched product — we handle everything. Book a free
              consultation and get a detailed quote within 24 hours.
            </p>

            {/* Benefits */}
            <div
              className="flex flex-wrap items-center justify-center
                gap-x-5 gap-y-2.5 mb-8 animate-in-delay-2"
            >
              {QUICK_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.text} className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shrink-0">
                      <Icon size={11} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/80">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Email Form */}
            <div className="max-w-xl mx-auto mb-5 animate-in-delay-3">
              <QuickEmailForm />
            </div>

            {/* OR Divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto mb-5 animate-in-delay-3">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                or reach us via
              </span>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center
                gap-3 animate-in-delay-3"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-7 py-3 rounded-xl
                  bg-white text-primary-700 font-bold text-sm
                  hover:bg-primary-50 transition-all duration-200 active:scale-95
                  shadow-xl whitespace-nowrap"
              >
                <Rocket
                  size={15}
                  className="group-hover:rotate-12 transition-transform"
                />
                Book Free Discovery Call
              </Link>
              <Link
                href="https://wa.me/yourphonenumber"
                target="_blank"
                className="flex items-center gap-2 px-7 py-3 rounded-xl
                  bg-white/10 backdrop-blur-sm border border-white/25
                  text-white font-bold text-sm
                  hover:bg-white/20 transition-all duration-200 active:scale-95
                  whitespace-nowrap"
              >
                💬 WhatsApp Us Now
              </Link>
            </div>
          </div>
        </div>

        {/* ── PART 2: URGENCY STRIP ── */}
        <div className="mt-5 flex justify-center animate-in-delay-3">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-yellow-500/10 border border-yellow-500/20"
          >
            <Calendar size={13} className="text-yellow-500" />
            <span className="text-sm font-bold text-yellow-500">
              Only 2 project slots left for this month
            </span>
          </div>
        </div>

        {/* ── PART 3: CONTACT CARDS ── */}
        <div className="mt-12 animate-in-delay-3">
          <p className="text-center text-xs font-bold text-tertiary-theme uppercase tracking-widest mb-5">
            Choose How You Want to Connect
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {CONTACT_OPTIONS.map((option) => (
              <ContactCard key={option.id} option={option} />
            ))}
          </div>
        </div>

        {/* ── PART 4: TRUST BAR ── */}
        <div className="mt-10 animate-in-delay-3">
          <div
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-8
              py-5 px-6 rounded-2xl bg-card-theme border border-card-theme"
          >
            {TRUST_ITEMS.map((item) => (
              <div key={item.text} className="flex items-center gap-2 group">
                <span className="text-lg group-hover:scale-125 transition-transform duration-200">
                  {item.emoji}
                </span>
                <span
                  className="text-xs sm:text-sm font-semibold text-secondary-theme
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

export default CTABanner;