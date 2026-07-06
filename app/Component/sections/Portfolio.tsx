"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
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
  { id: "all", label: "All", icon: Filter },
  { id: "web", label: "Web", icon: Globe },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ui", label: "UI/UX", icon: Layout },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
];

const PROJECTS = [
  {
    id: 1,
    title: "ShopEase",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "Full-featured online store with Stripe payments and admin dashboard for a fashion brand scaling to 10K+ daily users.",
    tags: ["Next.js", "Node.js", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    liveUrl: "#",
    featured: true,
    emoji: "🛍️",
  },
  {
    id: 2,
    title: "RideOn",
    category: "mobile",
    categoryLabel: "Mobile App",
    description:
      "Cross-platform ride-hailing app with real-time GPS tracking and in-app wallet system.",
    tags: ["Flutter", "Firebase", "Maps"],
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { label: "Downloads", value: "25K+" },
      { label: "Rating", value: "4.8⭐" },
    ],
    liveUrl: "#",
    featured: true,
    emoji: "🚕",
  },
  {
    id: 3,
    title: "FinTrack",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Real-time financial analytics dashboard with AI-powered insights and multi-bank integration.",
    tags: ["React", "Python", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
    stats: [
      { label: "Transactions", value: "1M+" },
      { label: "Banks", value: "15+" },
    ],
    liveUrl: "#",
    featured: false,
    emoji: "📊",
  },
  {
    id: 4,
    title: "MediCare",
    category: "mobile",
    categoryLabel: "Mobile App",
    description:
      "Healthcare app with video consultations, e-prescriptions, and appointment reminders.",
    tags: ["React Native", "WebRTC", "Node.js"],
    gradient: "from-rose-500 to-orange-500",
    stats: [
      { label: "Doctors", value: "500+" },
      { label: "Patients", value: "30K+" },
    ],
    liveUrl: "#",
    featured: false,
    emoji: "🏥",
  },
  {
    id: 5,
    title: "LMS Pro",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Learning Management System with video courses, live classes, and certificate generation.",
    tags: ["Next.js", "AWS S3", "Stripe"],
    gradient: "from-indigo-500 to-violet-500",
    stats: [
      { label: "Students", value: "8K+" },
      { label: "Courses", value: "200+" },
    ],
    liveUrl: "#",
    featured: false,
    emoji: "🎓",
  },
  {
    id: 6,
    title: "FoodZone UI Kit",
    category: "ui",
    categoryLabel: "UI/UX",
    description:
      "Comprehensive design system for restaurant apps — 80+ screens and reusable Figma components.",
    tags: ["Figma", "Design System"],
    gradient: "from-yellow-500 to-orange-500",
    stats: [
      { label: "Screens", value: "80+" },
      { label: "Downloads", value: "1.2K+" },
    ],
    liveUrl: "#",
    featured: false,
    emoji: "🍔",
  },
];

// ============================================
// FILTER TAB
// ============================================

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
      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold
        transition-all duration-200 whitespace-nowrap border
        ${
          isActive
            ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20"
            : "bg-card-theme border-card-theme text-secondary-theme hover:border-primary-500/30 hover:text-primary-theme"
        }`}
    >
      <Icon
        size={13}
        className={isActive ? "text-white" : "text-tertiary-theme"}
      />
      {filter.label}
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
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

// ============================================
// PROJECT CARD
// ============================================

const ProjectCard: React.FC<{
  project: (typeof PROJECTS)[0];
  featured?: boolean;
}> = ({ project, featured = false }) => (
  <div
    className={`group relative rounded-2xl border border-card-theme bg-card-theme overflow-hidden
      transition-all duration-300 hover:-translate-y-1
      hover:border-primary-500/30 hover:shadow-lg`}
  >
    {/* Visual Banner */}
    <div
      className={`relative bg-gradient-to-br ${project.gradient} overflow-hidden
        ${featured ? "h-48 sm:h-52" : "h-40"}`}
    >
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Emoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`select-none drop-shadow-lg group-hover:scale-110
            transition-transform duration-500
            ${featured ? "text-7xl" : "text-6xl"}`}
        >
          {project.emoji}
        </span>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/25 text-white backdrop-blur-sm border border-white/20">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Live dot */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-bold text-white">Live</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      {/* Category */}
      <span
        className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5
          bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
      >
        {project.categoryLabel}
      </span>

      {/* Title */}
      <h3
        className="text-base font-bold text-primary-theme mb-1.5 leading-tight
        group-hover:text-primary-500 transition-colors"
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold px-2 py-1 rounded-md
              bg-secondary-theme border border-card-theme text-tertiary-theme"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider + Stats + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-card-theme">
        {/* Stats */}
        <div className="flex gap-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-sm font-bold text-primary-theme">
                {stat.value}
              </div>
              <div className="text-[10px] text-tertiary-theme">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={project.liveUrl}
          className="flex items-center gap-1.5 text-xs font-bold
            text-primary-500 hover:gap-2.5 transition-all duration-200"
        >
          <ExternalLink size={13} />
          View
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

  const getCount = (filterId: string) =>
    filterId === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === filterId).length;

  return (
    <section className="relative section-padding bg-secondary-theme overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-500/5 blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-10 animate-in">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            text-xs font-bold uppercase tracking-widest mb-4
            bg-card-theme border border-card-theme text-secondary-theme"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
            </span>
            Our Portfolio
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
            text-primary-theme mb-3"
          >
            Work We're{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            Real products, real clients, real results — across multiple
            industries.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-in-delay-1">
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

        {/* ── Grid ── */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-tertiary-theme text-sm">
            No projects in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-in-delay-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured}
              />
            ))}
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-12 text-center animate-in-delay-3">
          <p className="text-sm text-secondary-theme mb-4">
            These are just highlights —{" "}
            <span className="font-semibold text-primary-theme">
              we've built 150+ projects.
            </span>
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold
              transition-all duration-200 active:scale-95
              shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;