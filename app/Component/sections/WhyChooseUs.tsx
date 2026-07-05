"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Users,
  Code2,
  Zap,
  MessageCircle,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const BENEFITS = [
  {
    id: 1,
    title: "On-Time Delivery",
    description:
      "We value deadlines and ensure your project is delivered on time so your business operations never face delays.",
    icon: Clock,
    badge: "Guaranteed",
  },
  {
    id: 2,
    title: "Modern Tech Stack",
    description:
      "We use the latest and most scalable technologies like Next.js, React Native, and Node.js to build future-ready products.",
    icon: Code2,
    badge: "Trendy",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description:
      "Start small today and scale confidently tomorrow. Our development approach is built to support long-term business growth.",
    icon: Zap,
    badge: "Future Ready",
  },
  {
    id: 4,
    title: "Secure by Design",
    description:
      "Data security is our priority. We implement SSL, encryption, and secure authentication protocols for complete protection.",
    icon: ShieldCheck,
    badge: "Secure",
  },
  {
    id: 5,
    title: "Dedicated Team",
    description:
      "Not just a freelancer — you get a dedicated team including project managers, developers, and QA specialists managing your project.",
    icon: Users,
    badge: "Pro Team",
  },
  {
    id: 6,
    title: "24/7 Support",
    description:
      "Our support continues even after launch. We remain available for bug fixes, updates, and ongoing assistance whenever needed.",
    icon: MessageCircle,
    badge: "Always On",
  },
];

// ============================================
// COMPONENTS
// ============================================

const BenefitCard: React.FC<{ item: typeof BENEFITS[0]; index: number }> = ({
  item,
  index,
}) => {
  const Icon = item.icon;

  return (
    <div
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-card-theme border border-card-theme transition-all duration-300 hover:border-primary-500/40 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -inset-0.5 bg-linear-to-r from-primary-500/20 to-accent-500/20 blur-xl rounded-2xl" />
      </div>

      {/* Badge */}
      <div className="mb-4 inline-block">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          {item.badge}
        </span>
      </div>

      {/* Icon Container */}
      <div className="relative mb-5 shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
          <Icon size={24} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-primary-theme mb-3 leading-tight group-hover:text-primary-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-secondary-theme line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Decorative Corner Line */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="w-full h-full text-primary-500/10 transition-transform duration-500 group-hover:scale-110"
        >
          <path d="M0 0 L0 40 L40 40" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

const FeaturedStat: React.FC = () => (
  <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-card-theme bg-secondary-theme p-8 mt-16 md:mt-24">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary-500/5 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-accent-500/5 blur-3xl" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-full max-w-5xl mx-auto z-10">
      {[
        { label: "Client Satisfaction", value: "99%", sub: "of repeat clients" },
        { label: "Projects Delivered", value: "150+", sub: "Since 2019" },
        { label: "Team Size", value: "25+", sub: "Expert Engineers" },
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-theme mb-1 tabular-nums">
            {stat.value}
          </div>
          <div className="text-sm font-bold text-primary-500 uppercase tracking-wide mb-1">
            {stat.label}
          </div>
          <div className="text-xs text-secondary-theme">{stat.sub}</div>
          
          {/* Separator line */}
          {i < 2 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-border-primary-theme" />
          )}
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative section-padding bg-secondary-theme/30 border-y border-border-primary-theme overflow-hidden">
      
      {/* ── Background Ambience ── */}
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute top-[-20%] right-[-10%] w-200 h-200 rounded-full bg-accent-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-160 h-160 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* ── Header Area ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in">
          <BadgeNew variant="primary" dot>Trust & Quality</BadgeNew>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1]">
            More Than Just <br />
            <span className="gradient-text">Code Writers.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-theme max-w-xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that grow your revenue.
          </p>
        </div>

        {/* ── Benefits Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.id} item={benefit} index={index} />
          ))}
        </div>

        {/* ── Highlight Stats Bar ── */}
        <FeaturedStat />

      </div>
    </section>
  );
};

// ── Helper Badge Component ──
const BadgeNew: React.FC<{variant?: string; children: React.ReactNode; dot?: boolean}> = ({ variant, children, dot }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ${
    variant === "primary" 
      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-800" 
      : "bg-success-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  }`}>
    {dot && <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2"></span></span>}
    {children}
  </span>
);