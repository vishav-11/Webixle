"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import {
  ArrowRight,
  X,
  ExternalLink,
  Globe,
  Smartphone,
  Layout,
  ShoppingBag,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ECommerce from "@/public/Image/project/E-commerce.png";
import CryptoNest from "@/public/Image/project/crypto.png";
import Engineering from "@/public/Image/project/eng.png";
import Psychologist from "@/public/Image/project/Psychologist.png";

// ============================================
// TYPES
// ============================================

interface ProjectDetail {
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  liveUrl?: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  tags: string[];
  gradient: string;
  stats: { label: string; value: string }[];
  image: StaticImageData; // ✅ Fixed: was string
  featured: boolean;
  emoji: string;
  details?: ProjectDetail;
}

// ============================================
// DATA
// ============================================

const FILTERS = [
  { id: "all", label: "All", icon: Filter },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
  { id: "web", label: "Web App", icon: Globe },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ui", label: "UI/UX", icon: Layout },
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ShopEase",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "Full-featured online store with Stripe payments and admin dashboard for a fashion brand scaling to 10K+ daily users.",
    tags: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    stats: [
      { label: "Daily Users", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    image: ECommerce,
    featured: true,
    emoji: "🛍️",
    details: undefined,
  },
  {
    id: 2,
    title: "CryptoNest",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Crypto trading, staking & wallet platform with real-time charts, portfolio tracking, and secure wallet management.",
    tags: ["React", "Web3.js", "Node.js", "PostgreSQL"],
    gradient: "from-amber-500 via-orange-500 to-yellow-600",
    stats: [
      { label: "Volume", value: "$2M+" },
      { label: "Users", value: "5K+" },
    ],
    image: CryptoNest,
    featured: true,
    emoji: "₿",
    details: undefined,
  },
  {
    id: 3,
    title: "TechInstrument",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Professional engineering & instrumentation website showcasing products, certifications, and technical specifications.",
    tags: ["Next.js", "Tailwind", "CMS"],
    gradient: "from-slate-600 via-blue-700 to-cyan-700",
    stats: [
      { label: "Products", value: "500+" },
      { label: "Clients", value: "120+" },
    ],
    image: Engineering,
    featured: false,
    emoji: "⚙️",
    details: undefined,
  },
  {
    id: 4,
    title: "MindEase",
    category: "web",
    categoryLabel: "Web App",
    description:
      "Psychologist practice website with online booking, session management, blog, and secure client portal.",
    tags: ["Next.js", "Stripe", "Supabase"],
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
    stats: [
      { label: "Bookings", value: "1K+" },
      { label: "Rating", value: "4.9⭐" },
    ],
    image: Psychologist,
    featured: false,
    emoji: "🧠",
    details: undefined,
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
  project: Project;
  featured?: boolean;
  onOpenModal: (project: Project) => void;
}> = ({ project, featured = false, onOpenModal }) => (
  <div
    className={`group relative rounded-2xl border border-card-theme bg-card-theme overflow-hidden
      transition-all duration-300 hover:-translate-y-1.5
      hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10`}
  >
    {/* ── Visual Banner ── */}
    <div
      className={`relative bg-linear-to-br ${project.gradient} overflow-hidden
        ${featured ? "h-52" : "h-44"}`}
    >
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

      {/* Emoji overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className={`select-none drop-shadow-2xl group-hover:scale-110
            transition-transform duration-500 opacity-20
            ${featured ? "text-8xl" : "text-7xl"}`}
        >
          {project.emoji}
        </span>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Category pill */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20">
          {project.categoryLabel}
        </span>
      </div>

      {/* Title on banner bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold text-white leading-tight drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </div>

    {/* ── Content ── */}
    <div className="p-5">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
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

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Stats + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-card-theme">
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

        <button
          onClick={() => onOpenModal(project)}
          className="flex items-center gap-1.5 text-xs font-bold
            text-primary-500 hover:gap-2.5 transition-all duration-200
            hover:text-primary-600"
        >
          <ExternalLink size={13} />
          View Details
        </button>
      </div>
    </div>
  </div>
);

// ============================================
// PROJECT MODAL  ✅ Fixed: hooks now always run
// ============================================

const ProjectModal: React.FC<{
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
}> = ({ project, allProjects, onClose, onNavigate }) => {
  // ✅ Fixed: All hooks BEFORE any conditional return
  const currentIndex = project
    ? allProjects.findIndex((p) => p.id === project.id)
    : -1;

  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;

  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  // ✅ Fixed: useCallback so deps array is stable
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && prevProject) onNavigate(prevProject);
      if (e.key === "ArrowRight" && nextProject) onNavigate(nextProject);
    },
    [onClose, prevProject, nextProject, onNavigate]
  );

  useEffect(() => {
    if (!project) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, handleKey]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // ✅ Conditional return AFTER all hooks
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl
          bg-card-theme border border-card-theme shadow-2xl
          flex flex-col overflow-hidden"
        // ✅ stop click from bubbling to backdrop
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Banner ── */}
        <div
          className={`relative h-52 bg-linear-to-br ${project.gradient} shrink-0`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-2 rounded-xl
              bg-black/30 hover:bg-black/50 backdrop-blur-sm
              border border-white/20 text-white transition-all duration-200"
          >
            <X size={16} />
          </button>

          {/* Prev */}
          {prevProject && (
            <button
              onClick={() => onNavigate(prevProject)}
              aria-label={`Previous: ${prevProject.title}`}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-xl
                bg-black/30 hover:bg-black/50 backdrop-blur-sm
                border border-white/20 text-white transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Next — ✅ Fixed: was overlapping close button */}
          {nextProject && (
            <button
              onClick={() => onNavigate(nextProject)}
              aria-label={`Next: ${nextProject.title}`}
              className="absolute right-14 top-1/2 -translate-y-1/2 z-10 p-2 rounded-xl
                bg-black/30 hover:bg-black/50 backdrop-blur-sm
                border border-white/20 text-white transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1 block">
              {project.categoryLabel}
            </span>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg
                  bg-secondary-theme border border-card-theme text-secondary-theme"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`grid gap-3 ${
              project.stats.length <= 2
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-4"
            }`}
          >
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 bg-secondary-theme border border-card-theme text-center"
              >
                <div className="text-lg font-bold text-primary-theme">
                  {stat.value}
                </div>
                <div className="text-[11px] text-tertiary-theme mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
              About
            </h4>
            <p className="text-sm text-secondary-theme leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Details */}
          {project.details ? (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
                  Overview
                </h4>
                <p className="text-sm text-secondary-theme leading-relaxed">
                  {project.details.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
                  The Challenge
                </h4>
                <p className="text-sm text-secondary-theme leading-relaxed">
                  {project.details.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-2">
                  Our Solution
                </h4>
                <p className="text-sm text-secondary-theme leading-relaxed">
                  {project.details.solution}
                </p>
              </div>

              {project.details.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.details.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-secondary-theme"
                      >
                        <span
                          className={`mt-0.5 w-4 h-4 rounded-full bg-linear-to-br
                            ${project.gradient} flex items-center justify-center shrink-0`}
                        >
                          <span className="text-white text-[8px] font-bold">
                            ✓
                          </span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.details.results.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {project.details.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-secondary-theme"
                      >
                        <span className="text-primary-500 font-bold mt-0.5 shrink-0">
                          →
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-xl border border-dashed border-card-theme p-6 text-center">
              <p className="text-sm text-tertiary-theme">
                Detailed case study coming soon.
              </p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="shrink-0 px-6 py-4 border-t border-card-theme flex items-center justify-between gap-3">
          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {allProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate(p)}
                aria-label={`Go to ${p.title}`}
                className={`rounded-full transition-all duration-200 ${
                  p.id === project.id
                    ? "w-5 h-1.5 bg-primary-500"
                    : "w-1.5 h-1.5 bg-tertiary-theme hover:bg-secondary-theme"
                }`}
              />
            ))}
          </div>

          {/* Action */}
          {project.details?.liveUrl ? (
            <Link
              href={project.details.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold
                transition-all duration-200 active:scale-95
                shadow-md shadow-primary-500/25"
            >
              <ExternalLink size={13} />
              Live Site
            </Link>
          ) : (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                bg-secondary-theme hover:bg-card-theme text-secondary-theme
                text-xs font-bold transition-all duration-200 border border-card-theme"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  const getCount = (filterId: string) =>
    filterId === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === filterId).length;

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section className="relative section-padding bg-secondary-theme overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-500/5 blur-[80px] pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* ── Header ── */}
          <div className="text-center mb-10 animate-in">
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
              Work We&apos;re <span className="linear-text">Proud Of</span>
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
              No projects in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 animate-in-delay-2">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={project.featured}
                  onOpenModal={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* ── CTA ── */}
          <div className="mt-12 text-center animate-in-delay-3">
            <p className="text-sm text-secondary-theme mb-4">
              These are just highlights —{" "}
              <span className="font-semibold text-primary-theme">
                we&apos;ve delivered 50+ successful projects.
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

      {/* ── Modal ── */}
      <ProjectModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={handleCloseModal}
        onNavigate={setSelectedProject}
      />
    </>
  );
};

export default Portfolio;