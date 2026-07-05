"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Sparkles,
  HeartHandshake,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  Quote,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const VALUES = [
  {
    id: 1,
    title: "Innovation First",
    subtitle: "We Think Before We Build",
    description:
      "Innovation is at the heart of everything we do. We don't just follow trends — we set them. Every project starts with deep research, creative brainstorming, and a commitment to finding smarter, better solutions that push boundaries and deliver real impact.",
    icon: Rocket,
    linear: "from-blue-600 to-cyan-500",
    bglinear: "from-blue-500/10 to-cyan-500/5",
    lightBg: "bg-blue-500/8",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    textlinear: "from-blue-600 to-cyan-500",
    emoji: "🚀",
    quote: "Innovation distinguishes between a leader and a follower.",
    quoteBy: "Steve Jobs",
    points: [
      "Creative problem solving on every project",
      "Always exploring new technologies",
      "Building future-proof solutions",
      "Research-backed decision making",
    ],
    stat: { value: "50+", label: "Innovative Solutions Built" },
  },
  {
    id: 2,
    title: "Creativity in Everything",
    subtitle: "Design That Tells a Story",
    description:
      "We believe creativity is not just about aesthetics — it's about communication. Every color, every pixel, every interaction is intentional. We craft experiences that don't just look good but feel right, resonate with users, and leave a lasting impression on your audience.",
    icon: Sparkles,
    linear: "from-primary-600 to-accent-500",
    bglinear: "from-primary-500/10 to-accent-500/5",
    lightBg: "bg-primary-500/8",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    dotColor: "bg-primary-500",
    textlinear: "from-primary-600 to-accent-500",
    emoji: "✨",
    quote: "Creativity is intelligence having fun.",
    quoteBy: "Albert Einstein",
    points: [
      "Pixel-perfect UI/UX design",
      "Brand-aligned visual identity",
      "User-first design approach",
      "Consistent design systems",
    ],
    stat: { value: "4.9⭐", label: "Average Design Rating" },
  },
  {
    id: 3,
    title: "Client Partnership",
    subtitle: "Your Success is Our Success",
    description:
      "We don't see clients as just customers — we see them as partners. We invest in understanding your business, your goals, and your challenges. Every decision we make is driven by what's best for your growth. We're not done when the project launches — we're in it for the long run.",
    icon: HeartHandshake,
    linear: "from-rose-500 to-orange-500",
    bglinear: "from-rose-500/10 to-orange-500/5",
    lightBg: "bg-rose-500/8",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    dotColor: "bg-rose-500",
    textlinear: "from-rose-500 to-orange-500",
    emoji: "🤝",
    quote: "Coming together is a beginning, staying together is progress.",
    quoteBy: "Henry Ford",
    points: [
      "Transparent communication always",
      "Regular progress updates",
      "Post-launch ongoing support",
      "Long-term growth partnership",
    ],
    stat: { value: "98%", label: "Client Retention Rate" },
  },
  {
    id: 4,
    title: "Execution Excellence",
    subtitle: "We Deliver, Not Just Promise",
    description:
      "Great ideas are worthless without flawless execution. We follow agile processes, write clean and maintainable code, conduct thorough testing, and deliver on time — every time. Excellence is not an act for us, it's a habit embedded in every step of our workflow.",
    icon: Zap,
    linear: "from-green-500 to-emerald-500",
    bglinear: "from-green-500/10 to-emerald-500/5",
    lightBg: "bg-green-500/8",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    dotColor: "bg-green-500",
    textlinear: "from-green-500 to-emerald-500",
    emoji: "⚡",
    quote: "Quality is not an act, it is a habit.",
    quoteBy: "Aristotle",
    points: [
      "Agile development methodology",
      "Clean & documented codebase",
      "Rigorous QA & testing",
      "100% on-time delivery record",
    ],
    stat: { value: "99%", label: "On-Time Delivery Rate" },
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Value Card (Grid Version) ── */
const ValueCard: React.FC<{
  value: (typeof VALUES)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ value, index, isActive, onClick }) => {
  const Icon = value.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative p-7 rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden animate-fade-up ${
        isActive
          ? `bg-linear-to-br ${value.bglinear} ${value.borderColor} shadow-(--shadow-elevation-lg) -translate-y-2`
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-(--shadow-elevation-md)"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background Emoji (Watermark) */}
      <div className="absolute -bottom-4 -right-4 text-8xl opacity-[0.06] select-none pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-300">
        {value.emoji}
      </div>

      {/* Top Row */}
      <div className="flex items-start justify-between mb-6">
        {/* Icon */}
        <div
          className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${value.linear} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={26} className="text-white" />
          {/* Icon Glow */}
          <div
            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${value.linear} blur-lg opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-300`}
          />
        </div>

        {/* Number Badge */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-extrabold border transition-all duration-300 ${
            isActive
              ? `bg-linear-to-br ${value.linear} text-white border-transparent`
              : "bg-secondary-theme border-card-theme text-tertiary-theme"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Subtitle */}
      <p
        className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors ${
          isActive ? value.iconColor : "text-tertiary-theme"
        }`}
      >
        {value.subtitle}
      </p>

      {/* Title */}
      <h3
        className={`text-xl sm:text-2xl font-bold mb-3 leading-tight transition-colors ${
          isActive
            ? "text-primary-theme"
            : "text-primary-theme group-hover:text-primary-500"
        }`}
      >
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed line-clamp-3 mb-5">
        {value.description}
      </p>

      {/* Stat */}
      <div
        className={`flex items-center gap-3 pt-4 border-t transition-all duration-300 ${
          isActive ? "border-white/20" : "border-card-theme"
        }`}
      >
        <div
          className={`text-2xl font-extrabold ${value.iconColor} leading-none`}
        >
          {value.stat.value}
        </div>
        <div className="text-xs text-tertiary-theme font-medium">
          {value.stat.label}
        </div>
      </div>

      {/* Active Bottom Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${value.linear} transition-all duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

/* ── Expanded Detail View ── */
const ExpandedDetail: React.FC<{ value: (typeof VALUES)[0] }> = ({ value }) => {
  const Icon = value.icon;

  return (
    <div
      className={`relative rounded-3xl border overflow-hidden transition-all duration-500 bg-linear-to-br ${value.bglinear} ${value.borderColor} shadow-(--shadow-elevation-lg)`}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-linear(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Big Emoji Background */}
      <div className="absolute -bottom-8 -right-8 text-[180px] opacity-[0.05] select-none pointer-events-none leading-none">
        {value.emoji}
      </div>

      <div className="relative z-10 p-7 sm:p-10">
        {/* Top Row */}
        <div className="flex items-start justify-between mb-8">
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-linear-to-br ${value.linear} shadow-(--shadow-glow-lg) shrink-0`}
          >
            <Icon size={38} className="text-white" />
          </div>

          {/* Emoji */}
          <span className="text-6xl sm:text-7xl">{value.emoji}</span>
        </div>

        {/* Subtitle */}
        <p
          className={`text-xs font-bold uppercase tracking-widest ${value.iconColor} mb-2`}
        >
          {value.subtitle}
        </p>

        {/* Title */}
        <h3
          className={`text-3xl sm:text-4xl font-bold mb-5 leading-tight bg-linear-to-r ${value.textlinear} bg-clip-text text-transparent`}
        >
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-base text-secondary-theme leading-relaxed mb-8">
          {value.description}
        </p>

        {/* Key Points */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-4">
            How We Live This Value
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {value.points.map((point, i) => (
              <div
                key={point}
                className="flex items-center gap-3 p-3 rounded-xl bg-card-theme border border-card-theme animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br ${value.linear} shrink-0`}
                >
                  <CheckCircle2 size={13} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-primary-theme">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px bg-linear-to-r from-transparent via-current opacity-20 mb-8`}
        />

        {/* Quote */}
        <div className="relative mb-8 pl-5">
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-linear-to-b ${value.linear}`}
          />
          <Quote
            size={20}
            className={`${value.iconColor} opacity-50 mb-2`}
            fill="currentColor"
          />
          <p className="text-lg font-semibold text-primary-theme italic leading-relaxed mb-2">
            "{value.quote}"
          </p>
          <p className="text-sm text-secondary-theme font-medium">
            — {value.quoteBy}
          </p>
        </div>

        {/* Stat + CTA Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Stat */}
          <div
            className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-card-theme border border-card-theme`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${value.linear} shrink-0`}
            >
              <Star size={18} className="text-white" fill="currentColor" />
            </div>
            <div>
              <div
                className={`text-2xl font-extrabold ${value.iconColor} leading-none`}
              >
                {value.stat.value}
              </div>
              <div className="text-xs text-secondary-theme font-medium mt-0.5">
                {value.stat.label}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/contact">
            <button
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-linear-to-r ${value.linear} hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg whitespace-nowrap`}
            >
              Work With Us
              <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Mobile Value Card (Accordion) ── */
const MobileValueCard: React.FC<{
  value: (typeof VALUES)[0];
  index: number;
}> = ({ value, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = value.icon;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 animate-fade-up ${
        isOpen
          ? `bg-linear-to-br ${value.bglinear} ${value.borderColor} shadow-(--shadow-elevation-md)`
          : "bg-card-theme border-card-theme"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <button
        className="w-full flex items-center gap-4 p-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${value.linear} shrink-0 shadow-lg`}
        >
          <Icon size={22} className="text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-bold uppercase tracking-wide ${value.iconColor}`}>
            {value.subtitle}
          </p>
          <h3 className="font-bold text-primary-theme text-lg leading-tight">
            {value.title}
          </h3>
        </div>

        {/* Number + Chevron */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <span className="text-xl">{value.emoji}</span>
          <div
            className={`text-[10px] font-bold text-secondary-theme transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-150" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-6 space-y-5">
          {/* Description */}
          <p className="text-sm text-secondary-theme leading-relaxed">
            {value.description}
          </p>

          {/* Points */}
          <div className="space-y-2">
            {value.points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full bg-linear-to-br ${value.linear} flex items-center justify-center shrink-0`}
                >
                  <CheckCircle2 size={11} className="text-white" />
                </div>
                <span className="text-sm font-medium text-primary-theme">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative pl-4">
            <div
              className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-linear-to-b ${value.linear}`}
            />
            <p className="text-sm font-semibold text-primary-theme italic">
              "{value.quote}"
            </p>
            <p className="text-xs text-secondary-theme mt-1">
              — {value.quoteBy}
            </p>
          </div>

          {/* Stat + CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-card-theme">
            <div>
              <div className={`text-xl font-extrabold ${value.iconColor}`}>
                {value.stat.value}
              </div>
              <div className="text-[10px] text-secondary-theme font-medium">
                {value.stat.label}
              </div>
            </div>
            <Link href="/contact">
              <button
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-linear-to-r ${value.linear} hover:opacity-90 active:scale-95 transition-all duration-200`}
              >
                Work With Us
                <ArrowRight size={13} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Values Summary Strip ── */
const ValuesSummaryStrip: React.FC = () => (
  <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-in-delay-3">
    {VALUES.map((value) => {
      const Icon = value.icon;
      return (
        <div
          key={value.id}
          className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${value.linear} group-hover:scale-110 transition-transform duration-300 shadow-md`}
          >
            <Icon size={22} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-primary-theme group-hover:text-primary-500 transition-colors">
              {value.title}
            </p>
            <p className={`text-xs font-bold mt-0.5 ${value.iconColor}`}>
              {value.stat.value}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const OurValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="relative section-padding bg-secondary-theme/20 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-200 h-200 rounded-full bg-primary-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-160 h-160 rounded-full bg-accent-500/5 blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-800/50 mb-5">
            <Star size={13} className="text-green-500" fill="currentColor" />
            Our Core Values
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            What Drives Us{" "}
            <span className="linear-text">Every Single Day</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Our values are not just words on a wall — they are the principles
            that guide every decision, every design, and every line of code we
            write.
          </p>
        </div>

        {/* ── Desktop: 2x2 Grid + Expanded Detail ── */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Top Grid */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {VALUES.map((value, index) => (
              <ValueCard
                key={value.id}
                value={value}
                index={index}
                isActive={activeValue === index}
                onClick={() => setActiveValue(index)}
              />
            ))}
          </div>

          {/* Bottom: Expanded Detail */}
          <ExpandedDetail value={VALUES[activeValue]} />
        </div>

        {/* ── Mobile: Accordion ── */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {VALUES.map((value, index) => (
            <MobileValueCard key={value.id} value={value} index={index} />
          ))}
        </div>

        {/* ── Values Summary Strip ── */}
        <ValuesSummaryStrip />

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center animate-in-delay-3">
          <div className="w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent mb-10" />
          <p className="text-secondary-theme mb-2 text-lg font-medium">
            These values drive everything we build.
          </p>
          <p className="text-secondary-theme text-sm mb-6">
            Want to experience them firsthand?{" "}
            <span className="font-bold text-primary-theme">
              Let's start a project together.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-(--shadow-glow) hover:shadow-(--shadow-glow-lg)">
                Start a Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </Link>
            <Link href="/about#team">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-card-theme bg-card-theme text-primary-theme font-bold text-sm hover:border-primary-500/30 hover:bg-secondary-theme transition-all duration-200 active:scale-95">
                Meet Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};