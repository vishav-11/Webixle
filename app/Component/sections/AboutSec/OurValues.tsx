"use client";

import React from "react";
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
      "We don't just follow trends — we set them. Every project starts with deep research and creative brainstorming to find smarter, better solutions.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-500",
    dot: "bg-blue-500",
    quote: "Innovation distinguishes between a leader and a follower.",
    quoteBy: "Steve Jobs",
    points: [
      "Creative problem solving",
      "Latest technology stack",
      "Future-proof solutions",
      "Research-backed decisions",
    ],
    stat: { value: "50+", label: "Innovative Solutions" },
  },
  {
    id: 2,
    title: "Creativity in Everything",
    subtitle: "Design That Tells a Story",
    description:
      "Creativity is about communication, not just aesthetics. Every pixel is intentional — crafting experiences that resonate and leave a lasting impression.",
    icon: Sparkles,
    gradient: "from-primary-500 to-accent-500",
    color: "text-primary-500",
    dot: "bg-primary-500",
    quote: "Creativity is intelligence having fun.",
    quoteBy: "Albert Einstein",
    points: [
      "Pixel-perfect UI/UX",
      "Brand-aligned visuals",
      "User-first approach",
      "Consistent design systems",
    ],
    stat: { value: "4.9⭐", label: "Design Rating" },
  },
  {
    id: 3,
    title: "Client Partnership",
    subtitle: "Your Success is Our Success",
    description:
      "We treat clients as partners, not customers. Every decision we make is driven by what's best for your growth — and we're in it for the long run.",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-orange-500",
    color: "text-rose-500",
    dot: "bg-rose-500",
    quote: "Coming together is a beginning, staying together is progress.",
    quoteBy: "Henry Ford",
    points: [
      "Transparent communication",
      "Regular progress updates",
      "Ongoing post-launch support",
      "Long-term partnership",
    ],
    stat: { value: "98%", label: "Client Retention" },
  },
  {
    id: 4,
    title: "Execution Excellence",
    subtitle: "We Deliver, Not Just Promise",
    description:
      "Great ideas need flawless execution. Agile process, clean code, thorough testing, and on-time delivery — every single time.",
    icon: Zap,
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-500",
    dot: "bg-green-500",
    quote: "Quality is not an act, it is a habit.",
    quoteBy: "Aristotle",
    points: [
      "Agile methodology",
      "Clean & documented code",
      "Rigorous QA & testing",
      "On-time delivery",
    ],
    stat: { value: "99%", label: "On-Time Delivery" },
  },
];

// ============================================
// VALUE CARD
// ============================================

const ValueCard: React.FC<{
  value: (typeof VALUES)[0];
  index: number;
}> = ({ value, index }) => {
  const Icon = value.icon;

  return (
    <div
      className="group relative p-6 rounded-2xl border border-card-theme bg-card-theme
        hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Subtle Corner Icon Watermark */}
      <div className="absolute -top-4 -right-4 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
        <Icon size={120} className={value.color} strokeWidth={1.5} />
      </div>

      {/* Top Row */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl
            bg-gradient-to-br ${value.gradient} shadow-md
            group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={22} className="text-white" />
        </div>

        {/* Number */}
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full
            bg-secondary-theme border border-card-theme
            text-xs font-extrabold text-tertiary-theme"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Subtitle */}
      <p className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${value.color}`}>
        {value.subtitle}
      </p>

      {/* Title */}
      <h3 className="text-lg font-bold text-primary-theme mb-2.5 leading-tight
        group-hover:text-primary-500 transition-colors"
      >
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed line-clamp-3 mb-4">
        {value.description}
      </p>

      {/* Points */}
      <div className="space-y-1.5 mb-4">
        {value.points.slice(0, 3).map((point) => (
          <div key={point} className="flex items-center gap-2">
            <CheckCircle2 size={12} className={`${value.color} shrink-0`} />
            <span className="text-xs font-medium text-primary-theme">{point}</span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="relative pl-3 border-l-2 border-card-theme mb-4">
        <Quote size={12} className={`${value.color} opacity-60 mb-1`} fill="currentColor" />
        <p className="text-xs italic text-secondary-theme leading-relaxed">
          "{value.quote}"
        </p>
        <p className="text-[10px] text-tertiary-theme mt-1 font-medium">
          — {value.quoteBy}
        </p>
      </div>

      {/* Stat Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-card-theme">
        <div className="flex items-center gap-2">
          <Star size={14} className={value.color} fill="currentColor" />
          <div>
            <div className={`text-base font-extrabold ${value.color} leading-none`}>
              {value.stat.value}
            </div>
            <div className="text-[10px] text-tertiary-theme font-medium">
              {value.stat.label}
            </div>
          </div>
        </div>

        <ArrowRight
          size={14}
          className={`${value.color} opacity-40 group-hover:opacity-100 
            group-hover:translate-x-1 transition-all duration-300`}
        />
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const OurValues: React.FC = () => {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-4
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <Star size={12} className="text-yellow-500" fill="currentColor" />
            Our Core Values
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
            text-primary-theme leading-[1.1] mb-3"
          >
            What Drives Us{" "}
            <span className="gradient-text">Every Single Day</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            Not just words on a wall — these are the principles behind every
            decision, design, and line of code.
          </p>
        </div>

        {/* ── Values Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in-delay-1">
          {VALUES.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center animate-in-delay-3">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent mb-8 max-w-md mx-auto" />
          <p className="text-secondary-theme text-sm mb-5">
            Want to experience these values firsthand?{" "}
            <span className="font-semibold text-primary-theme">
              Let's start a project together.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
                transition-all duration-200 active:scale-95
                shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30"
            >
              Start a Project
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/about#team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                border border-card-theme bg-card-theme text-primary-theme font-bold text-sm
                hover:border-primary-500/30 hover:bg-secondary-theme
                transition-all duration-200 active:scale-95"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;