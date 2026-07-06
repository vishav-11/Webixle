"use client";

import React from "react";
import Link from "next/link";
import {
  Rocket,
  Users,
  Briefcase,
  Star,
  TrendingUp,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const MILESTONES = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started as a small team of 3 passionate developers with a big vision.",
    icon: Rocket,
    color: "text-blue-500",
    dot: "bg-blue-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
  },
  {
    year: "2023 Q1",
    title: "First 10 Clients",
    description: "Delivered our first major web projects and built trust in the market.",
    icon: Briefcase,
    color: "text-purple-500",
    dot: "bg-purple-500",
    bg: "from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/20",
  },
  {
    year: "2023 Q3",
    title: "Team Expansion",
    description: "Hired designers, marketers, and QA engineers to scale operations.",
    icon: Users,
    color: "text-orange-500",
    dot: "bg-orange-500",
    bg: "from-orange-500/10 to-yellow-500/5",
    border: "border-orange-500/20",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded services to clients across US, UK, and Middle East markets.",
    icon: Globe,
    color: "text-green-500",
    dot: "bg-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
  },
  {
    year: "Present",
    title: "150+ Projects",
    description: "Currently running multiple enterprise projects with high growth trajectory.",
    icon: TrendingUp,
    color: "text-accent-500",
    dot: "bg-accent-500",
    bg: "from-accent-500/10 to-fuchsia-500/5",
    border: "border-accent-500/20",
  },
];

const HIGHLIGHTS = [
  { text: "Full-Service Digital Startup", icon: Star },
  { text: "Young & Energetic Team", icon: Rocket },
  { text: "Under One Roof Solution", icon: Briefcase },
];

// ============================================
// MILESTONE ITEM
// ============================================

const MilestoneItem: React.FC<{
  item: (typeof MILESTONES)[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
}> = ({ item, index, isActive, isLast }) => {
  const Icon = item.icon;

  return (
    <div className="flex gap-3">
      {/* Left Rail: Dot + Line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`relative z-10 w-3 h-3 rounded-full shadow-md transition-all duration-300
            ${isActive ? `${item.dot} ring-4 ring-primary-500/10` : "bg-card-theme border-2 border-card-theme"}`}
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-card-theme mt-1" style={{ minHeight: "32px" }} />
        )}
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 mb-3 p-3.5 rounded-xl border transition-all duration-300
          ${
            isActive
              ? `bg-gradient-to-br ${item.bg} ${item.border}`
              : "bg-card-theme border-card-theme hover:border-primary-500/20"
          }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Header Row */}
        <div className="flex items-center gap-2 mb-1.5">
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-md
              ${isActive ? `bg-gradient-to-br ${item.bg}` : "bg-secondary-theme"}`}
          >
            <Icon size={12} className={item.color} />
          </div>
          <span className={`text-xs font-extrabold tracking-wide ${item.color}`}>
            {item.year}
          </span>
          {isActive && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20 uppercase tracking-widest">
              Now
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-primary-theme leading-tight mb-1">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-secondary-theme leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// ============================================
// TIMELINE CARD
// ============================================

const TimelineCard: React.FC = () => (
  <div className="sticky top-32 w-full max-w-md mx-auto">
    <div className="relative p-5 sm:p-6 rounded-3xl bg-card-theme border border-card-theme shadow-lg overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-500/5 blur-2xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl
            bg-gradient-to-br from-primary-500 to-accent-500 shadow-md shrink-0"
        >
          <Sparkles size={20} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary-theme">
            Our Journey
          </p>
          <h3 className="font-bold text-primary-theme text-base">
            Webixle Evolution
          </h3>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative z-10">
        {MILESTONES.map((milestone, index) => (
          <MilestoneItem
            key={milestone.year}
            item={milestone}
            index={index}
            isActive={index === MILESTONES.length - 1}
            isLast={index === MILESTONES.length - 1}
          />
        ))}
      </div>

      {/* Bottom Badge */}
      <div className="mt-3 pt-4 border-t border-card-theme text-center relative z-10">
        <p className="text-xs text-tertiary-theme">
          Since {MILESTONES[0].year} — Growing Every Day
        </p>
      </div>
    </div>
  </div>
);

// ============================================
// MOBILE TIMELINE
// ============================================

const MobileTimeline: React.FC = () => (
  <div className="lg:hidden">
    <div className="p-5 rounded-2xl bg-card-theme border border-card-theme">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-primary-500" />
        <h4 className="text-sm font-bold text-primary-theme">Our Journey</h4>
      </div>
      {MILESTONES.map((milestone, index) => (
        <MilestoneItem
          key={milestone.year}
          item={milestone}
          index={index}
          isActive={index === MILESTONES.length - 1}
          isLast={index === MILESTONES.length - 1}
        />
      ))}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const OurStory: React.FC = () => {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN — STORY ── */}
          <div className="order-2 lg:order-1 animate-in">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                text-xs font-bold uppercase tracking-widest mb-4
                bg-card-theme border border-card-theme text-secondary-theme"
            >
              <Sparkles size={12} className="text-yellow-500" />
              Our Story
            </div>

            {/* Headline */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                leading-[1.1] mb-5 animate-in-delay-1"
            >
              <span className="text-primary-theme">From an Idea to a </span>
              <span className="gradient-text">Full Digital Studio</span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-secondary-theme leading-relaxed mb-4 animate-in-delay-1">
              We're a full-service digital startup helping businesses turn
              ideas into reality through design, development, and marketing —
              driven by creativity, innovation, and the energy to build
              impactful solutions that stand out.
            </p>

            {/* Mission Paragraph */}
            <p className="text-base text-secondary-theme leading-relaxed mb-6 animate-in-delay-2">
              From startups to growing brands, we work closely with clients
              to create scalable, user-focused, and visually engaging products
              that help businesses grow faster.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-7 animate-in-delay-2">
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg
                      bg-primary-500/10 group-hover:bg-primary-600
                      transition-colors duration-300 shrink-0"
                  >
                    <highlight.icon
                      size={14}
                      className="text-primary-500 group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-sm font-semibold text-primary-theme group-hover:text-primary-500 transition-colors">
                    {highlight.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <blockquote className="relative pl-5 border-l-4 border-primary-500/30 mb-8 lg:mb-0">
              <p className="text-base sm:text-lg font-medium text-primary-theme leading-relaxed">
                "We don't just work on projects — we build digital experiences
                that help brands grow, connect, and scale confidently."
              </p>
              <footer className="mt-2 text-xs text-tertiary-theme font-medium">
                — The Webixle Promise
              </footer>
            </blockquote>
          </div>

          {/* ── RIGHT COLUMN — TIMELINE (Desktop) ── */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center items-start animate-in-delay-2">
            <TimelineCard />
          </div>

          {/* Mobile Timeline */}
          <div className="order-3 animate-in-delay-3">
            <MobileTimeline />
          </div>
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <div className="max-w-5xl mx-auto mt-14 animate-in-delay-3">
          <div className="relative rounded-2xl overflow-hidden border border-card-theme">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-7">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-theme mb-1">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-sm text-secondary-theme">
                  Join hundreds of happy clients who trusted us.
                </p>
              </div>

              <Link href="/contact">
                <button
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                    bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
                    transition-all duration-200 active:scale-95 whitespace-nowrap
                    shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30"
                >
                  Start Your Project
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;