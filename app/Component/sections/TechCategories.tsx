"use client";

import React from "react";
import {
  Layers,
  Smartphone,
  Server,
  Cloud,
  Terminal,
} from "lucide-react";

// ============================================
// DATA: TECH STACK CATEGORIES
// ============================================

const TECH_CATEGORIES = [
  {
    category: "Frontend Development",
    description: "Modern UI/UX libraries & frameworks for responsive interfaces.",
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js"],
    icon: Layers,
    linear: "from-blue-500 to-cyan-500",
  },
  {
    category: "Mobile Apps",
    description: "Cross-platform solutions for iOS & Android devices.",
    items: ["Flutter", "React Native", "Firebase", "SwiftUI", "Kotlin"],
    icon: Smartphone,
    linear: "from-pink-500 to-purple-500",
  },
  {
    category: "Backend & APIs",
    description: "Robust server-side logic, databases, and scalable APIs.",
    items: ["Node.js", "Express", "Python/Django", "PostgreSQL", "MongoDB"],
    icon: Server,
    linear: "from-green-500 to-emerald-500",
  },
  {
    category: "DevOps & Cloud",
    description: "Deployment, CI/CD pipelines, and cloud infrastructure.",
    items: ["AWS", "Vercel", "Docker", "GitLab CI", "GitHub Actions"],
    icon: Cloud,
    linear: "from-orange-500 to-red-500",
  },
];

// ============================================
// ARROW ICON
// ============================================

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ============================================
// BADGE COMPONENT
// ============================================

const BadgeNew: React.FC<{
  variant?: string;
  children: React.ReactNode;
  dot?: boolean;
}> = ({ children, dot }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
    {dot && (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
      </span>
    )}
    {children}
  </span>
);

// ============================================
// TECH ITEM CHIP
// ============================================

const TechItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-secondary-theme border border-card-theme transition-all duration-200 hover:border-primary-500/50 hover:bg-primary-50 dark:hover:bg-primary-950/20">
    <Terminal
      size={12}
      className="shrink-0 text-primary-500 opacity-70 group-hover:opacity-100 transition-opacity"
    />
    <span className="text-xs sm:text-sm font-medium text-primary-theme truncate">
      {label}
    </span>
  </div>
);

// ============================================
// CATEGORY CARD
// ============================================

const CategoryCard: React.FC<{ item: (typeof TECH_CATEGORIES)[0] }> = ({
  item,
}) => {
  const Icon = item.icon;

  return (
    <div className="group relative flex flex-col p-5 sm:p-6 rounded-2xl bg-card-theme border border-card-theme transition-all duration-300 hover:shadow-(--shadow-elevation-lg) hover:-translate-y-1 animate-fade-up h-full">
      
      {/* Hover linear Overlay */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none bg-linear-to-br ${item.linear} mix-blend-overlay transition-opacity duration-300`}
      />

      {/* Header Row */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon Box */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-gray-100 dark:bg-white/5 group-hover:bg-transparent transition-colors duration-300">
          <Icon
            size={22}
            className={`bg-clip-text text-transparent bg-linear-to-br ${item.linear}`}
          />
        </div>

        {/* Decorative Ping Dot */}
        <div className="relative w-2.5 h-2.5 mt-1">
          <div className="absolute inset-0 bg-primary-500 opacity-30 animate-ping rounded-full" />
          <div className="relative w-full h-full bg-primary-500 opacity-60 rounded-full" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-primary-theme mb-1.5 group-hover:text-primary-500 transition-colors leading-snug">
        {item.category}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-secondary-theme mb-5 line-clamp-2 leading-relaxed">
        {item.description}
      </p>

      {/* Tech Chips — Wrap Layout for all screens */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {item.items.map((tech, i) => (
          <TechItem key={i} label={tech} />
        ))}
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300">
        <ArrowRightIcon
          width={16}
          height={16}
          className="text-primary-500"
        />
      </div>
    </div>
  );
};

// ============================================
// MAIN SECTION
// ============================================

export const TechStack: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary-theme/20 overflow-hidden">

      {/* ── Ambient Background Blobs ── */}
      <div className="absolute top-[-15%] left-[-10%] w-[20rem] sm:w-120 h-80 sm:h-120 rounded-full bg-primary-500/5 blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[20rem] sm:w-120 h-80 sm:h-120 rounded-full bg-accent-500/5 blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <BadgeNew variant="neutral" dot>
            Our Arsenal
          </BadgeNew>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.15]">
            Powered by Modern{" "}
            <br className="hidden sm:block" />
            <span className="linear-text">Technology.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-secondary-theme max-w-xl mx-auto leading-relaxed px-2">
            We don't just follow trends — we build scalable products using
            industry-standard tools for long-term success.
          </p>
        </div>

        {/* ── Cards Grid ──
              xs  : 1 col
              sm  : 1 col
              md  : 2 col
              lg  : 4 col
        ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {TECH_CATEGORIES.map((category, index) => (
            <CategoryCard key={index} item={category} />
          ))}
        </div>

        {/* ── Trust Badge ── */}
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 rounded-full bg-card-theme border border-card-theme shadow-sm text-center">
            <span className="text-xs sm:text-sm text-secondary-theme font-medium">
              Trusted by Developers &amp; Startups Globally
            </span>
            <div className="hidden sm:block h-4 w-px bg-border-primary-theme" />
            <span className="text-xs font-semibold text-primary-500">
              Open Source Contribution 🌱
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};