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
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/30",
  },
  {
    year: "2023 Q1",
    title: "First 10 Clients",
    description: "Delivered our first major web projects and built trust in the market.",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/30",
  },
  {
    year: "2023 Q3",
    title: "Team Expansion",
    description: "Hired designers, marketers, and QA engineers to scale operations.",
    icon: Users,
    color: "text-orange-500",
    bg: "from-orange-500/10 to-yellow-500/5",
    border: "border-orange-500/30",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded services to clients across US, UK, and Middle East markets.",
    icon: Globe,
    color: "text-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/30",
  },
  {
    year: "Present",
    title: "150+ Projects",
    description: "Currently running multiple enterprise projects with high growth trajectory.",
    icon: TrendingUp,
    color: "text-accent-500",
    bg: "from-accent-500/10 to-fuchsia-500/5",
    border: "border-accent-500/30",
  },
];

const HIGHLIGHTS = [
  {
    text: "Full-Service Digital Startup",
    icon: Star,
  },
  {
    text: "Young & Energetic Team",
    icon: Rocket,
  },
  {
    text: "Under One Roof Solution",
    icon: Briefcase,
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Milestone Item ── */
const MilestoneItem: React.FC<{
  item: (typeof MILESTONES)[0];
  index: number;
  isActive: boolean;
}> = ({ item, index, isActive }) => {
  const Icon = item.icon;

  return (
    <div
      className={`group relative flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
        isActive
          ? `bg-linear-to-br ${item.bg} ${item.border}`
          : "bg-card-theme border-card-theme"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Connector Line */}
      <div className="relative flex items-center justify-center">
        <div
          className={`w-0.5 h-full absolute top-0 left-1/2 -translate-x-1/2 transition-colors duration-300 ${
            isActive
              ? "bg-transparent"
              : "bg-border-primary-theme group-hover:border-primary-500/30"
          }`}
        />
        
        {/* Dot */}
        <div
          className={`relative z-10 w-3 h-3 rounded-full shrink-0 shadow-lg transition-all duration-300 ${
            isActive
              ? `${item.color} ring-2 ring-white dark:ring-black ring-offset-2`
              : "bg-border-primary-theme"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        {/* Header Row */}
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className={`text-sm font-extrabold tracking-wide ${
              isActive ? item.color : "text-secondary-theme"
            }`}
          >
            {item.year}
          </span>
          {isActive && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-primary-700 dark:text-primary-100 border border-white/20">
              Recent
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-base leading-tight mb-1 group-hover:${
            isActive ? "" : "text-primary-500"
          } transition-colors ${
            isActive ? "text-primary-theme" : "text-secondary-theme"
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-xs line-clamp-2 leading-relaxed ${
            isActive ? "text-secondary-theme" : "text-tertiary-theme"
          }`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

/* ── Timeline Card ── */
const TimelineCard: React.FC = () => (
  <div className="sticky top-32 w-full max-w-md mx-auto">
    <div className="relative p-6 sm:p-8 rounded-3xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-lg) overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-500/5 blur-2xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 shadow-lg shrink-0">
          <Sparkles size={24} className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-secondary-theme">
            Our Journey
          </p>
          <h3 className="font-bold text-primary-theme text-lg">
            Webixle Evolution
          </h3>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-3 max-h-100 overflow-y-auto pr-2 scrollbar-hide">
        {MILESTONES.map((milestone, index) => (
          <MilestoneItem
            key={milestone.year}
            item={milestone}
            index={index}
            isActive={index === MILESTONES.length - 1}
          />
        ))}
      </div>

      {/* Bottom Badge */}
      <div className="mt-6 pt-4 border-t border-card-theme text-center">
        <p className="text-xs text-tertiary-theme">
          Since {MILESTONES[0].year} — Growing Every Day
        </p>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const OurStory: React.FC = () => {
  return (
    <section className="relative section-padding bg-mesh/30 overflow-hidden">
      
      {/* ── Background Decorations ── */}
      <div className="absolute top-[-20%] left-[-10%] w-200 h-200 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-160 h-160 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ══════════════════════════
              LEFT COLUMN — STORY
          ══════════════════════════ */}
          <div className="order-2 lg:order-1 animate-in">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300 border border-yellow-100 dark:border-yellow-800/40 mb-5 animate-in">
              <Sparkles size={14} className="text-yellow-500" />
              Our Story
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-balance animate-in-delay-1">
              From an Idea to a{" "}
              <span className="gradient-text">Full Digital Studio</span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-lg text-secondary-theme leading-relaxed mb-6 animate-in-delay-1">
              We are a full-service digital startup helping businesses turn ideas into reality through design, development, and marketing. Our team is driven by creativity, innovation, and the energy to build impactful digital solutions that actually stand out.
            </p>

            {/* Mission Paragraph */}
            <p className="text-lg text-secondary-theme leading-relaxed mb-8 animate-in-delay-2">
              From startups to growing brands, we work closely with clients to create scalable, user-focused, and visually engaging products that help businesses grow faster in the digital world.
            </p>

            {/* Key Reasons List */}
            <ul className="space-y-4 mb-10 animate-in-delay-2">
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-950/30 group-hover:bg-primary-600 transition-colors duration-300 shrink-0">
                    <highlight.icon
                      size={16}
                      className="text-primary-600 dark:text-primary-400 group-hover:text-white"
                    />
                  </div>
                  <span className="font-semibold text-primary-theme group-hover:text-primary-500 transition-colors">
                    {highlight.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quote Section */}
            <blockquote className="relative pl-6 border-l-4 border-primary-500/30">
              <p className="text-lg sm:text-xl font-medium text-primary-theme leading-relaxed">
                "We don't just work on projects — we build digital experiences that help brands grow, connect, and scale confidently."
              </p>
              <footer className="mt-2 text-sm text-secondary-theme font-medium">
                — The Webixle Promise
              </footer>
            </blockquote>
          </div>

          {/* ══════════════════════════
              RIGHT COLUMN — VISUAL TIMELINE
          ══════════════════════════ */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center items-start animate-in-delay-2">
            <TimelineCard />
          </div>

          {/* Mobile Timeline Placeholder */}
          <div className="lg:hidden order-3 animate-in-delay-3">
             <div className="text-center p-6 rounded-2xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-800/40">
               <p className="text-sm font-bold text-primary-theme mb-2">Swipe Down to See Our Journey</p>
               <p className="text-xs text-secondary-theme">Scroll down to explore milestones below this section</p>
             </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════
          BOTTOM STRIP
      ══════════════════════════ */}
      <div className="max-w-6xl mx-auto mt-16 lg:mt-20 animate-in-delay-3">
        <div className="relative rounded-2xl overflow-hidden border border-card-theme">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-primary-600/5 to-accent-600/5" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8">
            {/* Left Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-1">
                Ready to Build Something Amazing Together?
              </h3>
              <p className="text-sm text-secondary-theme">
                Join hundreds of happy clients who trusted us.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 whitespace-nowrap shadow-(--shadow-glow) hover:shadow-(--shadow-glow-lg)">
                Start Your Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};