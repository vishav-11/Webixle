"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  GiftIcon,
  Globe,
  Smartphone,
  Layout,
  ShoppingBag,
  Filter,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const FILTERS = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "web", label: "Web Apps", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "ui", label: "UI/UX", icon: Layout },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
];

const PROJECTS = [
  {
    id: 1,
    title: "ShopEase — E-Commerce Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "A full-featured online store with real-time inventory, Stripe payments, and an admin dashboard built for a fashion brand scaling to 10K+ daily users.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-600 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Revenue", value: "₹50L+" },
      { label: "Uptime", value: "99.9%" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    emoji: "🛍️",
  },
  {
    id: 2,
    title: "RideOn — Cab Booking App",
    category: "mobile",
    categoryLabel: "Mobile App",
    description:
      "A cross-platform ride-hailing app with real-time GPS tracking, driver matching algorithm, and in-app wallet system.",
    tags: ["Flutter", "Firebase", "Google Maps", "Node.js"],
    gradient: "from-purple-600 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    stats: [
      { label: "Downloads", value: "25K+" },
      { label: "Rating", value: "4.8⭐" },
      { label: "Cities", value: "12" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    emoji: "🚕",
  },
  {
    id: 3,
    title: "FinTrack — Finance Dashboard",
    category: "web",
    categoryLabel: "Web App",
    description:
      "A real-time financial analytics dashboard with AI-powered insights, budget tracking, and multi-bank account integration.",
    tags: ["React", "TypeScript", "Python", "PostgreSQL"],
    gradient: "from-green-600 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    stats: [
      { label: "Transactions", value: "1M+" },
      { label: "Accuracy", value: "99.7%" },
      { label: "Banks", value: "15+" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    emoji: "📊",
  },
  {
    id: 4,
    title: "MediCare — Doctor Booking App",
    category: "mobile",
    categoryLabel: "Mobile App",
    description:
      "A healthcare app connecting patients with doctors. Features include video consultations, e-prescriptions, and appointment reminders.",
    tags: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    gradient: "from-rose-600 to-orange-500",
    bgGradient: "from-rose-500/10 to-orange-500/5",
    stats: [
      { label: "Doctors", value: "500+" },
      { label: "Patients", value: "30K+" },
      { label: "Consults", value: "5K/day" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    emoji: "🏥",
  },
  {
    id: 5,
    title: "LMS Pro — Learning Platform",
    category: "web",
    categoryLabel: "Web App",
    description:
      "A full-featured Learning Management System with video courses, live classes, quizzes, and certificate generation.",
    tags: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    gradient: "from-indigo-600 to-violet-500",
    bgGradient: "from-indigo-500/10 to-violet-500/5",
    stats: [
      { label: "Students", value: "8K+" },
      { label: "Courses", value: "200+" },
      { label: "Rating", value: "4.9⭐" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    emoji: "🎓",
  },
  {
    id: 6,
    title: "FoodZone — Restaurant UI Kit",
    category: "ui",
    categoryLabel: "UI/UX Design",
    description:
      "A comprehensive design system and UI kit for restaurant apps — 80+ screens, reusable components, and a full Figma prototype.",
    tags: ["Figma", "Design System", "Prototype", "UI Kit"],
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/5",
    stats: [
      { label: "Screens", value: "80+" },
      { label: "Components", value: "200+" },
      { label: "Downloads", value: "1.2K+" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    emoji: "🍔",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Filter Tab Button ── */
const FilterTab: React.FC<{
  filter: (typeof FILTERS)[0];
  isActive: boolean;
  onClick: () => void;
  count: number;
}> = ({ filter, isActive, onClick, count }) => {
  const Icon = filter.icon;
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-primary-600 text-white shadow-(--shadow-glow)"
          : "bg-card-theme border border-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30"
      }`}
    >
      <Icon size={15} className={isActive ? "text-white" : "text-tertiary-theme group-hover:text-primary-500"} />
      {filter.label}
      <span
        className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
          isActive
            ? "bg-white/20 text-white"
            : "bg-secondary-theme text-tertiary-theme"
        }`}
      >
        {count}
      </span>
    </button>
  );
};

/* ── Featured Project Card (Large) ── */
const FeaturedCard: React.FC<{ project: (typeof PROJECTS)[0] }> = ({
  project,
}) => (
  <div className="group relative col-span-1 md:col-span-2 rounded-2xl border border-card-theme bg-card-theme overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-(--shadow-elevation-lg)">
    {/* Top Gradient Visual Area */}
    <div
      className={`relative h-56 sm:h-64 bg-linear-to-br ${project.gradient} overflow-hidden`}
    >
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating Emoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-8xl sm:text-9xl select-none drop-shadow-2xl opacity-90 group-hover:scale-110 transition-transform duration-500">
          {project.emoji}
        </span>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-black/30 text-white backdrop-blur-sm border border-white/20">
          ⭐ Featured
        </span>
      </div>

      {/* Live Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-bold text-white">Live</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 sm:p-8">
      {/* Category + Tags Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50">
          {project.categoryLabel}
        </span>
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary-theme border border-card-theme text-secondary-theme"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-3 group-hover:text-primary-500 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-secondary-theme text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-card-theme">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-xl font-bold text-primary-theme">
              {stat.value}
            </div>
            <div className="text-xs text-secondary-theme font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href={project.liveUrl}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-(--shadow-glow)"
        >
          <ExternalLink size={14} />
          View Live
        </Link>
        <Link
          href={project.githubUrl}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary-theme border border-card-theme text-primary-theme text-sm font-bold hover:border-primary-500/30 transition-all duration-200 active:scale-95"
        >
          <GiftIcon size={14} />
          Source Code
        </Link>
      </div>
    </div>
  </div>
);

/* ── Regular Project Card ── */
const ProjectCard: React.FC<{
  project: (typeof PROJECTS)[0];
  index: number;
}> = ({ project, index }) => (
  <div
    className="group relative rounded-2xl border border-card-theme bg-card-theme overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500/30 hover:shadow-(--shadow-elevation-lg) animate-fade-up"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    {/* Visual Area */}
    <div
      className={`relative h-44 bg-linear-to-br ${project.gradient} overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-7xl select-none drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
          {project.emoji}
        </span>
      </div>

      {/* Live Badge */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-bold text-white">Live</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      {/* Category */}
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-500 block mb-2">
        {project.categoryLabel}
      </span>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-primary-theme mb-2 leading-tight group-hover:text-primary-500 transition-colors line-clamp-1">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold px-2 py-1 rounded-md bg-secondary-theme border border-card-theme text-secondary-theme"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-4 pb-4 mb-4 border-b border-card-theme">
        {project.stats.slice(0, 2).map((stat) => (
          <div key={stat.label}>
            <div className="text-base font-bold text-primary-theme">
              {stat.value}
            </div>
            <div className="text-[10px] text-secondary-theme font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <Link
          href={project.liveUrl}
          className="flex items-center gap-1.5 text-sm font-bold text-primary-500 hover:gap-2.5 transition-all duration-200"
        >
          View Project
          <ArrowRight size={14} />
        </Link>
        <Link
          href={project.githubUrl}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-theme border border-card-theme hover:border-primary-500/30 text-secondary-theme hover:text-primary-theme transition-all duration-200"
        >
          <GiftIcon size={14} />
        </Link>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  const getCount = (filterId: string) =>
    filterId === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === filterId).length;

  return (
    <section className="relative section-padding bg-secondary-theme/20 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-accent-50 dark:bg-accent-950/40 text-accent-700 dark:text-accent-300 border border-accent-100 dark:border-accent-800/50 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            Our Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Work We're{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Real products. Real clients. Real results. Here's a snapshot of what
            we've built across different industries.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 animate-in-delay-1">
          {FILTERS.map((filter) => (
            <FilterTab
              key={filter.id}
              filter={filter}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              count={getCount(filter.id)}
            />
          ))}
        </div>

        {/* ── Projects Grid ── */}
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-secondary-theme">
              No projects found in this category.
            </div>
          ) : (
            <>
              {/* Featured Projects (2-col span) */}
              {featuredProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {featuredProjects.map((project) => (
                    <FeaturedCard key={project.id} project={project} />
                  ))}
                </div>
              )}

              {/* Regular Projects */}
              {regularProjects.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center animate-in-delay-3">
          <p className="text-secondary-theme mb-5 text-sm">
            These are just a few highlights.{" "}
            <span className="text-primary-theme font-semibold">
              We've built 150+ projects
            </span>{" "}
            across industries.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-(--shadow-glow) hover:shadow-(--shadow-glow-lg)"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};