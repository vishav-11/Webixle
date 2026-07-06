"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  ShoppingCart,
  Layers,
  Headphones,
  CheckCircle,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SERVICES = [
  {
    id: 1,
    title: "Website Development",
    description:
      "High-performance, SEO-friendly websites built with Next.js & React.",
    icon: Code2,
    color: "text-primary-500",
    iconBg: "bg-primary-500/10",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Native & cross-platform mobile apps for iOS & Android using Flutter & React Native.",
    icon: Smartphone,
    color: "text-accent-500",
    iconBg: "bg-accent-500/10",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centric interfaces designed for maximum engagement and intuitive navigation.",
    icon: Palette,
    color: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with payment gateways and inventory management.",
    icon: ShoppingCart,
    color: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    id: 5,
    title: "Custom Software",
    description:
      "Tailor-made enterprise software to automate your business workflows.",
    icon: Layers,
    color: "text-purple-500",
    iconBg: "bg-purple-500/10",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "24/7 technical support, bug fixes, and feature updates to keep your system running.",
    icon: Headphones,
    color: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
];

const WHY_US = [
  "Clean & Scalable Code",
  "Agile Development Process",
  "Transparent Communication",
  "Post-Launch Warranty",
];

// ============================================
// SERVICE CARD
// ============================================

const ServiceCard: React.FC<{
  item: (typeof SERVICES)[0];
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
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl
          ${item.iconBg} mb-4
          group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon
          size={22}
          className={`${item.color} group-hover:rotate-6 transition-transform duration-300`}
        />
      </div>

      {/* Title */}
      <h3
        className="text-base sm:text-lg font-bold text-primary-theme mb-2
          group-hover:text-primary-500 transition-colors leading-tight"
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-4 line-clamp-3 flex-1">
        {item.description}
      </p>

      {/* Learn More */}
      <div
        className="flex items-center gap-1.5 text-sm font-semibold text-primary-500
          group-hover:gap-2.5 transition-all duration-300"
      >
        <span>Learn More</span>
        <ArrowRight size={14} />
      </div>

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
// STATS STRIP
// ============================================

const StatsStrip: React.FC = () => (
  <div
    className="w-full py-6 border-y border-card-theme mt-10
      flex flex-wrap justify-center gap-6 sm:gap-12"
  >
    {WHY_US.map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        <div
          className="w-5 h-5 rounded-full bg-green-500/10
            flex items-center justify-center shrink-0"
        >
          <CheckCircle size={11} className="text-green-500" />
        </div>
        <span className="text-sm font-medium text-primary-theme">{item}</span>
      </div>
    ))}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const Services: React.FC = () => {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-120 h-120 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Our Expertise
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
              text-primary-theme leading-[1.1] mb-3"
          >
            We Build{" "}
            <span className="gradient-text">Digital Products</span>{" "}
            That Matter
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto">
            From concept to launch — we handle every aspect of development with
            high-quality standards.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto animate-in-delay-1">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} item={service} index={index} />
          ))}
        </div>

        {/* ── Trust Strip ── */}
        <div className="animate-in-delay-2">
          <StatsStrip />

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold
                transition-all duration-200 active:scale-95
                shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30"
            >
              Explore All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;