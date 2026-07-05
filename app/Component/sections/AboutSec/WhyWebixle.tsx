"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lightbulb,
  Palette,
  Zap,
  TrendingUp,
  Layers,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  HeartHandshake,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const REASONS = [
  {
    id: 1,
    title: "Strong Ideas & Strategy",
    description:
      "Every project starts with deep thinking. We don't just execute — we help you shape the right strategy, target the right audience, and build something with a clear purpose behind it.",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/5",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    dotColor: "bg-yellow-500",
    stat: { value: "100%", label: "Strategy First" },
    emoji: "💡",
  },
  {
    id: 2,
    title: "Clean & Modern Design",
    description:
      "We believe great design is not just how it looks — it's how it works. Every interface we create is visually stunning, user-friendly, and perfectly aligned with your brand identity.",
    icon: Palette,
    gradient: "from-primary-600 to-accent-500",
    bgGradient: "from-primary-500/10 to-accent-500/5",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    dotColor: "bg-primary-500",
    stat: { value: "4.9⭐", label: "Design Rating" },
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Smart Execution",
    description:
      "Ideas mean nothing without proper execution. We follow agile methodology, maintain clean codebases, and deliver products that are scalable, performant, and production-ready from day one.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    stat: { value: "99%", label: "On-Time Delivery" },
    emoji: "⚡",
  },
  {
    id: 4,
    title: "Latest Technologies",
    description:
      "We stay ahead of the curve. Our team constantly upskills and adopts the latest frameworks, tools, and industry trends so your product is always built with future-proof technology.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    dotColor: "bg-green-500",
    stat: { value: "20+", label: "Technologies" },
    emoji: "🚀",
  },
  {
    id: 5,
    title: "All Under One Roof",
    description:
      "No need to coordinate between multiple agencies. We handle design, development, marketing, branding, and video — everything your business needs digitally, managed by one dedicated team.",
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    dotColor: "bg-purple-500",
    stat: { value: "7+", label: "Services Offered" },
    emoji: "🏢",
  },
  {
    id: 6,
    title: "Young & Energetic Team",
    description:
      "We're a team of passionate youngsters who bring fresh energy, modern perspective, and genuine enthusiasm to every project. We treat your project like it's our own business.",
    icon: Users,
    gradient: "from-rose-500 to-orange-500",
    bgGradient: "from-rose-500/10 to-orange-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    dotColor: "bg-rose-500",
    stat: { value: "15+", label: "Team Members" },
    emoji: "👥",
  },
];

const TRUST_POINTS = [
  {
    icon: Shield,
    title: "NDA Protected",
    desc: "Your ideas are safe with us",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your deadlines",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partner",
    desc: "We grow with your business",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Star,
    title: "Top Rated",
    desc: "4.9/5 across all platforms",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Reason Card ── */
const ReasonCard: React.FC<{
  reason: (typeof REASONS)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ reason, index, isActive, onClick }) => {
  const Icon = reason.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 animate-fade-up ${
        isActive
          ? `bg-gradient-to-br ${reason.bgGradient} ${reason.borderColor} shadow-[var(--shadow-elevation-lg)] -translate-y-1`
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevation-md)]"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        {/* Icon + Emoji */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}
          >
            <Icon size={22} className="text-white" />
          </div>
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
            {reason.emoji}
          </span>
        </div>

        {/* Stat Badge */}
        <div
          className={`text-right transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
          }`}
        >
          <div
            className={`text-lg font-extrabold ${reason.iconColor} leading-none`}
          >
            {reason.stat.value}
          </div>
          <div className="text-[10px] text-tertiary-theme font-medium mt-0.5">
            {reason.stat.label}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-bold mb-2 leading-tight transition-colors ${
          isActive
            ? "text-primary-theme"
            : "text-primary-theme group-hover:text-primary-500"
        }`}
      >
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed line-clamp-3">
        {reason.description}
      </p>

      {/* Active Indicator Bottom */}
      <div
        className={`mt-4 flex items-center gap-2 transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${reason.dotColor} animate-pulse`}
        />
        <span className="text-xs font-bold text-secondary-theme">
          See Details →
        </span>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div
          className={`absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </div>
    </div>
  );
};

/* ── Right Highlight Panel ── */
const HighlightPanel: React.FC<{ reason: (typeof REASONS)[0] }> = ({
  reason,
}) => {
  const Icon = reason.icon;

  return (
    <div className="sticky top-28 space-y-4">
      {/* Main Highlight Card */}
      <div
        className={`relative rounded-3xl border p-7 sm:p-8 bg-gradient-to-br ${reason.bgGradient} ${reason.borderColor} shadow-[var(--shadow-elevation-lg)] overflow-hidden transition-all duration-500`}
      >
        {/* BG Effects */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon + Emoji Row */}
          <div className="flex items-center justify-between mb-6">
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-[var(--shadow-glow)] shrink-0`}
            >
              <Icon size={30} className="text-white" />
            </div>
            <span className="text-6xl">{reason.emoji}</span>
          </div>

          {/* Label */}
          <p
            className={`text-xs font-bold uppercase tracking-widest ${reason.iconColor} mb-2`}
          >
            Why Webixle
          </p>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-theme mb-4 leading-tight">
            {reason.title}
          </h3>

          {/* Description */}
          <p className="text-secondary-theme leading-relaxed mb-6 text-base">
            {reason.description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-current opacity-20 mb-6" />

          {/* Stat Highlight */}
          <div
            className={`flex items-center gap-4 p-4 rounded-2xl bg-card-theme border border-card-theme mb-6`}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} shrink-0`}
            >
              <CheckCircle2 size={22} className="text-white" />
            </div>
            <div>
              <div
                className={`text-2xl font-extrabold ${reason.iconColor} leading-none`}
              >
                {reason.stat.value}
              </div>
              <div className="text-xs text-secondary-theme font-medium mt-0.5">
                {reason.stat.label}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/contact">
            <button
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${reason.gradient} hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg`}
            >
              Work With Us
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Trust Points Grid */}
      <div className="grid grid-cols-2 gap-3">
        {TRUST_POINTS.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className="group flex flex-col gap-2 p-4 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className={`flex items-center justify-center w-9 h-9 rounded-lg ${point.bg} group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon size={18} className={point.color} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-theme leading-tight">
                  {point.title}
                </p>
                <p className="text-xs text-tertiary-theme mt-0.5">
                  {point.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Mobile Reason Card ── */
const MobileReasonCard: React.FC<{
  reason: (typeof REASONS)[0];
  index: number;
}> = ({ reason, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = reason.icon;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 animate-fade-up ${
        isOpen
          ? `bg-gradient-to-br ${reason.bgGradient} ${reason.borderColor}`
          : "bg-card-theme border-card-theme"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Header */}
      <button
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${reason.gradient} shrink-0`}
        >
          <Icon size={20} className="text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{reason.emoji}</span>
            <h3 className="font-bold text-primary-theme text-base leading-tight">
              {reason.title}
            </h3>
          </div>
          <p className={`text-xs font-bold mt-0.5 ${reason.iconColor}`}>
            {reason.stat.value} {reason.stat.label}
          </p>
        </div>

        {/* Chevron */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg border border-card-theme bg-secondary-theme shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ArrowRight
            size={14}
            className={`transition-transform duration-300 ${
              isOpen ? "-rotate-90" : "rotate-0"
            } text-secondary-theme`}
          />
        </div>
      </button>

      {/* Expanded */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-5 pb-5 space-y-4">
          <p className="text-sm text-secondary-theme leading-relaxed">
            {reason.description}
          </p>
          <Link href="/contact">
            <button
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r ${reason.gradient} hover:opacity-90 active:scale-95 transition-all duration-200`}
            >
              Work With Us
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Comparison Strip ── */
const ComparisonStrip: React.FC = () => (
  <div className="mt-16 max-w-5xl mx-auto animate-in-delay-3">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        {
          label: "Other Agencies",
          points: [
            "❌ Expensive & Slow",
            "❌ Poor Communication",
            "❌ Generic Solutions",
            "❌ Multiple POCs",
          ],
          isUs: false,
        },
        {
          label: "Webixle",
          points: [
            "✅ Affordable & Fast",
            "✅ Transparent Updates",
            "✅ Custom Solutions",
            "✅ One Dedicated Team",
          ],
          isUs: true,
        },
        {
          label: "Solo Freelancers",
          points: [
            "❌ Limited Skills",
            "❌ No Accountability",
            "❌ No Post-Support",
            "❌ Single Person Risk",
          ],
          isUs: false,
        },
      ].map((col) => (
        <div
          key={col.label}
          className={`relative p-5 rounded-2xl border transition-all duration-300 ${
            col.isUs
              ? "bg-gradient-to-br from-primary-600 to-accent-600 border-transparent shadow-[var(--shadow-glow-lg)] scale-[1.03]"
              : "bg-card-theme border-card-theme opacity-80"
          }`}
        >
          {/* Label */}
          <p
            className={`text-sm font-extrabold text-center mb-4 ${
              col.isUs ? "text-white" : "text-secondary-theme"
            }`}
          >
            {col.isUs && (
              <span className="inline-block mb-1 text-yellow-300 text-lg">
                ⭐
              </span>
            )}
            <br />
            {col.label}
          </p>

          {/* Points */}
          <div className="space-y-2.5">
            {col.points.map((point, i) => (
              <p
                key={i}
                className={`text-xs font-medium ${
                  col.isUs ? "text-white/90" : "text-secondary-theme"
                }`}
              >
                {point}
              </p>
            ))}
          </div>

          {/* Best Choice Badge */}
          {col.isUs && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-[10px] font-extrabold whitespace-nowrap shadow-lg">
              BEST CHOICE
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const WhyWebixle: React.FC = () => {
  const [activeReason, setActiveReason] = useState(0);

  return (
    <section className="relative section-padding bg-mesh overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-[45rem] h-[45rem] rounded-full bg-accent-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-primary-500/5 blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 border border-accent-100 dark:border-accent-800/50 mb-5">
            <Sparkles size={13} className="text-accent-500" />
            Why Webixle?
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Built Different.{" "}
            <span className="gradient-text">Delivered Better.</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            At Webixle, we believe great products are built with strong ideas,
            clean design, and smart execution. Here's what makes us stand out.
          </p>
        </div>

        {/* ── Desktop: Grid + Panel ── */}
        <div className="hidden lg:grid grid-cols-[1fr_340px] gap-8 max-w-6xl mx-auto items-start">
          {/* Left: Reasons Grid */}
          <div className="grid grid-cols-2 gap-4">
            {REASONS.map((reason, index) => (
              <ReasonCard
                key={reason.id}
                reason={reason}
                index={index}
                isActive={activeReason === index}
                onClick={() => setActiveReason(index)}
              />
            ))}
          </div>

          {/* Right: Highlight Panel */}
          <HighlightPanel reason={REASONS[activeReason]} />
        </div>

        {/* ── Mobile: Accordion ── */}
        <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
          {REASONS.map((reason, index) => (
            <MobileReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>

        {/* ── Comparison Strip ── */}
        <ComparisonStrip />

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center animate-in-delay-3">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-10" />
          <p className="text-secondary-theme mb-5 text-base">
            Still not convinced?{" "}
            <span className="font-bold text-primary-theme">
              Talk to us for free.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-lg)]">
                Book Free Call
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-card-theme bg-card-theme text-primary-theme font-bold text-sm hover:border-primary-500/30 hover:bg-secondary-theme transition-all duration-200 active:scale-95">
                See Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};