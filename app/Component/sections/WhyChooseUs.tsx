"use client";

import React from "react";
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
      "We value deadlines and ensure your project is delivered on time, every time.",
    icon: Clock,
    badge: "Guaranteed",
  },
  {
    id: 2,
    title: "Modern Tech Stack",
    description:
      "We use Next.js, React Native, and Node.js to build scalable, future-ready products.",
    icon: Code2,
    badge: "Trendy",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description:
      "Start small, scale confidently. Our approach supports long-term business growth.",
    icon: Zap,
    badge: "Future Ready",
  },
  {
    id: 4,
    title: "Secure by Design",
    description:
      "SSL, encryption, and secure authentication — your data is always protected.",
    icon: ShieldCheck,
    badge: "Secure",
  },
  {
    id: 5,
    title: "Dedicated Team",
    description:
      "A full team of project managers, developers, and QA specialists on your project.",
    icon: Users,
    badge: "Pro Team",
  },
  {
    id: 6,
    title: "24/7 Support",
    description:
      "We stay available after launch for bug fixes, updates, and ongoing assistance.",
    icon: MessageCircle,
    badge: "Always On",
  },
];

const STATS = [
  { label: "Client Satisfaction", value: "99%", sub: "Repeat clients" },
  { label: "Projects Delivered", value: "150+", sub: "Since 2019" },
  { label: "Team Size", value: "25+", sub: "Expert Engineers" },
];

// ============================================
// BENEFIT CARD
// ============================================

const BenefitCard: React.FC<{
  item: (typeof BENEFITS)[0];
  index: number;
}> = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <div
      className="group relative flex flex-col p-5 sm:p-6 rounded-2xl
        bg-card-theme border border-card-theme
        transition-all duration-300
        hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-md"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Badge + Icon Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Icon */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-lg
            bg-secondary-theme text-primary-500
            group-hover:bg-primary-500 group-hover:text-white
            transition-all duration-300"
        >
          <Icon size={20} strokeWidth={2} />
        </div>

        {/* Badge */}
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1
            rounded-full bg-secondary-theme border border-card-theme text-tertiary-theme"
        >
          {item.badge}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-base font-bold text-primary-theme mb-2 leading-tight
          group-hover:text-primary-500 transition-colors"
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed line-clamp-3">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-b-2xl
          bg-gradient-to-r from-primary-500 to-accent-500
          group-hover:w-full transition-all duration-500"
      />
    </div>
  );
};

// ============================================
// STATS BAR
// ============================================

const StatsBar: React.FC = () => (
  <div
    className="relative rounded-2xl border border-card-theme bg-card-theme
      overflow-hidden mt-12"
  >
    {/* Subtle background blobs */}
    <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-card-theme">
      {STATS.map((stat, i) => (
        <div key={i} className="flex flex-col items-center text-center py-7 px-6">
          <div className="text-3xl sm:text-4xl font-extrabold text-primary-theme mb-1 tabular-nums">
            {stat.value}
          </div>
          <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-0.5">
            {stat.label}
          </div>
          <div className="text-xs text-tertiary-theme">{stat.sub}</div>
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
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-accent-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-12 animate-in">
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
            Trust & Quality
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
              text-primary-theme leading-[1.1] mb-3"
          >
            More Than Just{" "}
            <span className="gradient-text">Code Writers.</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            We combine technical expertise with business acumen to deliver
            solutions that actually grow your revenue.
          </p>
        </div>

        {/* ── Benefits Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in-delay-1">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.id} item={benefit} index={index} />
          ))}
        </div>

        {/* ── Stats Bar ── */}
        <div className="animate-in-delay-2">
          <StatsBar />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;