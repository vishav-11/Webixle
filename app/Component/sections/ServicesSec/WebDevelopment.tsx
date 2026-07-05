"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  ShoppingCart,
  LayoutDashboard,
  FileCode2,
  Sparkles,
  Clock,
  DollarSign,
  Zap,
  Shield,
  TrendingUp,
  Star,
  ChevronDown,
  ExternalLink,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "High-converting, beautifully designed landing pages that capture leads and drive sales. Perfect for product launches, campaigns, and startups.",
    icon: FileCode2,
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    timeline: "3–5 Days",
    price: "₹15,000",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Contact Form Integration",
      "Google Analytics Setup",
      "Fast Page Load",
      "CTA Optimization",
    ],
  },
  {
    id: 2,
    title: "Business Websites",
    description:
      "Professional multi-page websites for businesses, agencies, and service providers. Complete with CMS integration so you can manage content easily.",
    icon: Globe,
    gradient: "from-primary-500 to-blue-500",
    bgGradient: "from-primary-500/10 to-blue-500/5",
    borderColor: "border-primary-500/30",
    iconColor: "text-primary-500",
    timeline: "1–2 Weeks",
    price: "₹25,000",
    features: [
      "Multi-Page Design",
      "CMS Integration",
      "Blog Setup",
      "SEO Foundation",
      "Mobile Responsive",
      "Social Media Integration",
    ],
  },
  {
    id: 3,
    title: "Web Applications",
    description:
      "Complex, feature-rich web apps with user authentication, dashboards, real-time data, and custom business logic. Built for scale from day one.",
    icon: Code2,
    gradient: "from-accent-500 to-purple-500",
    bgGradient: "from-accent-500/10 to-purple-500/5",
    borderColor: "border-accent-500/30",
    iconColor: "text-accent-500",
    timeline: "4–8 Weeks",
    price: "₹80,000",
    features: [
      "User Authentication",
      "Role-Based Access",
      "Real-Time Features",
      "REST / GraphQL APIs",
      "Admin Dashboard",
      "Scalable Architecture",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Stores",
    description:
      "Powerful online stores with product management, payment gateway integration, order tracking, and a seamless checkout experience that maximizes conversions.",
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    timeline: "2–5 Weeks",
    price: "₹45,000",
    features: [
      "Product Catalog",
      "Payment Gateway",
      "Order Management",
      "Inventory Tracking",
      "Discount & Coupon System",
      "Customer Accounts",
    ],
  },
  {
    id: 5,
    title: "Admin Dashboards",
    description:
      "Custom admin panels and internal tools with real-time analytics, data tables, charts, and role-based permissions for your business operations.",
    icon: LayoutDashboard,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    timeline: "2–4 Weeks",
    price: "₹40,000",
    features: [
      "Real-Time Analytics",
      "Data Tables & Charts",
      "Role-Based Permissions",
      "Export CSV/PDF",
      "User Management",
      "Activity Logs",
    ],
  },
  {
    id: 6,
    title: "API Development",
    description:
      "Scalable RESTful and GraphQL APIs for mobile apps, third-party integrations, and microservices architecture. Documented, secure, and production-ready.",
    icon: Layers,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    timeline: "1–3 Weeks",
    price: "₹30,000",
    features: [
      "REST & GraphQL APIs",
      "Authentication (JWT/OAuth)",
      "Rate Limiting",
      "API Documentation",
      "Third-Party Integrations",
      "Webhook Support",
    ],
  },
];

const TECH_STACK = [
  {
    category: "Frontend",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    items: ["Node.js", "Express.js", "Python", "Django", "FastAPI"],
  },
  {
    category: "Database",
    icon: Database,
    color: "text-orange-500",
    bg: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps",
    icon: Shield,
    color: "text-purple-500",
    bg: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/20",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We understand your requirements, goals, and target audience in a free 30-min call.",
    icon: "🎯",
    color: "text-blue-500",
    bg: "bg-blue-500",
  },
  {
    step: "02",
    title: "Planning & Scope",
    description: "Detailed project scope, tech stack selection, timeline, and milestone planning.",
    icon: "📋",
    color: "text-purple-500",
    bg: "bg-purple-500",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Wireframes and high-fidelity Figma designs. No development starts without your approval.",
    icon: "🎨",
    color: "text-accent-500",
    bg: "bg-accent-500",
  },
  {
    step: "04",
    title: "Development",
    description: "Sprint-based development with weekly demos. Clean, documented, scalable code.",
    icon: "💻",
    color: "text-primary-500",
    bg: "bg-primary-500",
  },
  {
    step: "05",
    title: "Testing & QA",
    description: "Thorough testing across devices, browsers, and screen sizes before delivery.",
    icon: "🧪",
    color: "text-orange-500",
    bg: "bg-orange-500",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Smooth deployment + 30 days free post-launch support. Your success is ours.",
    icon: "🚀",
    color: "text-green-500",
    bg: "bg-green-500",
  },
];

const KEY_BENEFITS = [
  { icon: Zap, text: "90+ PageSpeed Score", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Shield, text: "SSL & Security Hardened", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: TrendingUp, text: "SEO Optimized from Day 1", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Smartphone, text: "100% Mobile Responsive", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Code2, text: "Clean & Documented Code", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Star, text: "Source Code Ownership", color: "text-orange-500", bg: "bg-orange-500/10" },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Section Header ── */
const SectionHeader: React.FC = () => (
  <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 mb-5">
      <Globe size={13} className="text-blue-500" />
      Web Development
    </div>

    {/* Headline */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
      Websites & Apps That{" "}
      <span className="gradient-text">Actually Perform</span>
    </h2>
    <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
      We don't just build websites — we engineer digital experiences that load
      fast, rank high, convert visitors, and scale with your business growth.
    </p>
  </div>
);

/* ── Sub Service Card ── */
const SubServiceCard: React.FC<{
  service: (typeof SUB_SERVICES)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden animate-fade-up ${
        isActive
          ? `bg-gradient-to-br ${service.bgGradient} ${service.borderColor} shadow-[var(--shadow-elevation-lg)] -translate-y-1`
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <Icon size={22} className="text-white" />
        </div>

        {/* Price Tag */}
        <div className="text-right">
          <p className="text-[10px] text-tertiary-theme font-medium">
            Starting from
          </p>
          <p className={`text-base font-extrabold ${service.iconColor}`}>
            {service.price}
          </p>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-bold mb-2 leading-tight transition-colors ${
          isActive
            ? "text-primary-theme"
            : "text-primary-theme group-hover:text-primary-500"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-secondary-theme leading-relaxed mb-4 line-clamp-2">
        {service.description}
      </p>

      {/* Features (Expanded) */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-y-2 gap-x-3">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle2
                size={12}
                className="text-green-500 shrink-0 mt-0.5"
              />
              <span className="text-xs font-medium text-primary-theme leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock size={12} className="text-tertiary-theme" />
          <span className="text-xs font-semibold text-secondary-theme">
            {service.timeline}
          </span>
        </div>
        <span
          className={`text-xs font-bold transition-all duration-200 flex items-center gap-1 ${
            isActive ? service.iconColor : "text-tertiary-theme"
          }`}
        >
          {isActive ? "Selected ✓" : "View Details"}
        </span>
      </div>

      {/* Active Bottom Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

/* ── Tech Stack Card ── */
const TechStackCard: React.FC<{
  stack: (typeof TECH_STACK)[0];
  index: number;
}> = ({ stack, index }) => {
  const Icon = stack.icon;

  return (
    <div
      className={`p-5 rounded-2xl bg-gradient-to-br ${stack.bg} border ${stack.border} animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-lg bg-card-theme border border-card-theme shrink-0`}
        >
          <Icon size={17} className={stack.color} />
        </div>
        <p className={`text-sm font-bold ${stack.color} uppercase tracking-wide`}>
          {stack.category}
        </p>
      </div>

      {/* Tech Items */}
      <div className="flex flex-wrap gap-2">
        {stack.items.map((item) => (
          <span
            key={item}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-card-theme border border-card-theme text-primary-theme"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Process Timeline ── */
const ProcessTimeline: React.FC = () => (
  <div className="relative">
    {/* Connector Line */}
    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-primary-500 to-green-500 hidden sm:block" />

    <div className="space-y-4">
      {PROCESS_STEPS.map((step, index) => (
        <div
          key={step.step}
          className="group flex items-start gap-5 p-4 sm:p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:shadow-[var(--shadow-elevation-md)] transition-all duration-300 animate-fade-up"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          {/* Step Number Circle */}
          <div className="relative shrink-0">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${step.bg} text-white text-lg font-bold shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              {step.icon}
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-card-theme border border-card-theme flex items-center justify-center">
              <span className="text-[9px] font-extrabold text-tertiary-theme">
                {step.step}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <h4 className={`font-bold text-base text-primary-theme mb-1 group-hover:${step.color} transition-colors`}>
              {step.title}
            </h4>
            <p className="text-sm text-secondary-theme leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Key Benefits Grid ── */
const KeyBenefits: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {KEY_BENEFITS.map((benefit, index) => {
      const Icon = benefit.icon;
      return (
        <div
          key={benefit.text}
          className="group flex items-center gap-3 p-4 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-lg ${benefit.bg} shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={17} className={benefit.color} />
          </div>
          <span className="text-xs font-semibold text-primary-theme leading-tight">
            {benefit.text}
          </span>
        </div>
      );
    })}
  </div>
);

/* ── CTA Card ── */
const CTACard: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    {/* Gradient BG */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary-600 to-accent-600" />
    {/* Pattern */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />
    {/* Orbs */}
    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-400/20 blur-2xl pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 p-7 sm:p-9">
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-5 shadow-xl">
        <Globe size={28} className="text-white" />
      </div>

      {/* Text */}
      <h3 className="text-2xl font-bold text-white mb-2">
        Ready to Build Your Website?
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6">
        Get a free consultation and detailed quote within 24 hours. No
        commitment required.
      </p>

      {/* Highlights */}
      <div className="space-y-2 mb-7">
        {[
          "Free 30-min consultation call",
          "Detailed quote in 24 hours",
          "NDA signed before we begin",
          "30 days post-launch support",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-400 shrink-0" />
            <span className="text-sm text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Link href="/contact?service=web-development">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 shadow-xl">
            Get Free Web Dev Quote
            <ArrowRight size={16} />
          </button>
        </Link>
        <Link
          href="https://wa.me/yourphonenumber"
          target="_blank"
        >
          <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200 active:scale-95">
            💬 WhatsApp for Quick Chat
          </button>
        </Link>
      </div>
    </div>
  </div>
);

/* ── Stats Row ── */
const StatsRow: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
    {[
      { value: "80+", label: "Websites Built", icon: Globe, color: "text-blue-500", bg: "bg-blue-500/10" },
      { value: "90+", label: "PageSpeed Score", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
      { value: "100%", label: "Mobile Ready", icon: Smartphone, color: "text-green-500", bg: "bg-green-500/10" },
      { value: "30", label: "Days Free Support", icon: Shield, color: "text-purple-500", bg: "bg-purple-500/10" },
    ].map((stat) => {
      const Icon = stat.icon;
      return (
        <div
          key={stat.label}
          className="group flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={20} className={stat.color} />
          </div>
          <div className={`text-2xl font-extrabold ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-xs text-secondary-theme font-medium">
            {stat.label}
          </div>
        </div>
      );
    })}
  </div>
);

/* ── FAQ Accordion ── */
const WebDevFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      q: "How long does it take to build a website?",
      a: "Timeline depends on complexity. A landing page takes 3–5 days. A business website takes 1–2 weeks. A full web application takes 4–8 weeks. We give you an exact timeline during our free consultation.",
    },
    {
      id: 2,
      q: "What technologies do you use for web development?",
      a: "We use Next.js and React for frontend, Node.js/Express or Python for backend, PostgreSQL/MongoDB for databases, and deploy on AWS or Vercel. We always choose the right stack for your specific project.",
    },
    {
      id: 3,
      q: "Will I own the source code after completion?",
      a: "Yes — 100%. Upon final payment, you receive complete ownership of all source code, Figma files, and documentation. Everything is pushed to your own GitHub repository.",
    },
    {
      id: 4,
      q: "Do you provide hosting and domain setup?",
      a: "Yes. We handle complete deployment including domain configuration, SSL certificates, server setup, and performance optimization. We also offer ongoing hosting management plans.",
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
            openId === faq.id
              ? "border-blue-500/30 bg-blue-500/5"
              : "border-card-theme bg-card-theme"
          }`}
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 p-4 text-left"
          >
            <span className="text-sm font-bold text-primary-theme">
              {faq.q}
            </span>
            <ChevronDown
              size={16}
              className={`text-secondary-theme shrink-0 transition-transform duration-300 ${
                openId === faq.id ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${
              openId === faq.id ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="px-4 pb-4 text-sm text-secondary-theme leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const WebDevelopment: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="web-development"
      className="relative section-padding bg-mesh overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-[45rem] h-[45rem] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-primary-500/5 blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Section Header ── */}
        <SectionHeader />

        {/* ── Stats Row ── */}
        <StatsRow />

        {/* ══════════════════════════════════════
            PART 1: SUB SERVICES
        ══════════════════════════════════════ */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 shrink-0">
              <Sparkles size={16} className="text-blue-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
              What We Can Build For You
            </h3>
          </div>

          {/* Sub Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUB_SERVICES.map((service, index) => (
              <SubServiceCard
                key={service.id}
                service={service}
                index={index}
                isActive={activeSubService === index}
                onClick={() =>
                  setActiveSubService(
                    activeSubService === index ? -1 : index
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            PART 2: MAIN CONTENT (2 Column)
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-20">

          {/* LEFT: Process + Tech Stack + Benefits */}
          <div className="space-y-12">

            {/* Key Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 shrink-0">
                  <Star size={16} className="text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  What You Always Get
                </h3>
              </div>
              <KeyBenefits />
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 shrink-0">
                  <Code2 size={16} className="text-primary-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Technologies We Use
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECH_STACK.map((stack, index) => (
                  <TechStackCard key={stack.category} stack={stack} index={index} />
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 shrink-0">
                  <Zap size={16} className="text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Our Development Process
                </h3>
              </div>
              <ProcessTimeline />
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-500/10 shrink-0">
                  <Globe size={16} className="text-accent-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Web Dev FAQs
                </h3>
              </div>
              <WebDevFAQ />
            </div>
          </div>

          {/* RIGHT: Sticky CTA Card */}
          <div className="hidden lg:block sticky top-28">
            <CTACard />

            {/* Portfolio Link */}
            <Link href="/portfolio?category=web">
              <div className="mt-4 flex items-center justify-center gap-2 p-4 rounded-xl border border-card-theme bg-card-theme hover:border-primary-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink
                  size={15}
                  className="text-primary-500 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-bold text-primary-theme">
                  View Web Projects →
                </span>
              </div>
            </Link>

            {/* Pricing Note */}
            <div className="mt-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={14} className="text-green-600" />
                <span className="text-xs font-bold text-green-700 dark:text-green-400">
                  Pricing Starts From
                </span>
              </div>
              <p className="text-2xl font-extrabold text-green-700 dark:text-green-400">
                ₹15,000
              </p>
              <p className="text-xs text-green-600/80 dark:text-green-500 mt-0.5">
                For a basic landing page. Custom quotes available.
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile CTA (Bottom) ── */}
        <div className="lg:hidden mb-10">
          <CTACard />
        </div>
      </div>
    </section>
  );
};