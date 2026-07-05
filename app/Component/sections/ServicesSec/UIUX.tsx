"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  DollarSign,
  Shield,
  Star,
  ChevronDown,
  ExternalLink,
  Zap,
  Users,
  Layout,
  Layers,
  MousePointer,
  Eye,
  FileCode2,
  PenTool,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Wireframing & User Flows",
    description:
      "Low and high-fidelity wireframes that map out every user journey before a single line of code is written.",
    icon: Layout,
    gradient: "from-primary-500 to-blue-500",
    iconColor: "text-primary-500",
    timeline: "3–5 Days",
    price: "₹8,000",
    features: ["User Flow Mapping", "Low-Fi Wireframes", "Hi-Fi Wireframes", "Clickable Prototype"],
  },
  {
    id: 2,
    title: "UI Design (Web & Mobile)",
    description:
      "Pixel-perfect, brand-aligned interface designs for websites, dashboards, and mobile apps in Figma.",
    icon: Palette,
    gradient: "from-accent-500 to-purple-500",
    iconColor: "text-accent-500",
    timeline: "1–2 Weeks",
    price: "₹20,000",
    features: ["Web & App Screens", "Component Library", "Dark/Light Mode", "Responsive Design"],
  },
  {
    id: 3,
    title: "Interactive Prototypes",
    description:
      "Fully interactive Figma prototypes that simulate the real product — perfect for client demos and user testing.",
    icon: MousePointer,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    timeline: "3–5 Days",
    price: "₹10,000",
    features: ["Figma Prototype", "Micro Animations", "Gesture Support", "Shareable Link"],
  },
  {
    id: 4,
    title: "Design Systems",
    description:
      "Scalable design systems with reusable components, tokens, and documentation for consistent product UI.",
    icon: Layers,
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    timeline: "1–2 Weeks",
    price: "₹25,000",
    features: ["Component Library", "Design Tokens", "Style Guide", "Dev Handoff Docs"],
  },
  {
    id: 5,
    title: "UX Research & Audit",
    description:
      "Identify usability issues in your existing product through heuristic analysis, user testing, and UX audits.",
    icon: Eye,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    timeline: "3–7 Days",
    price: "₹12,000",
    features: ["Heuristic Evaluation", "User Testing", "Competitor Analysis", "UX Report"],
  },
  {
    id: 6,
    title: "Developer Handoff",
    description:
      "Clean, organized Figma files with auto-layout, design tokens, and complete specs for smooth developer handoff.",
    icon: FileCode2,
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-rose-500",
    timeline: "1–3 Days",
    price: "₹6,000",
    features: ["Figma Auto Layout", "Design Specs", "Asset Export", "Style Documentation"],
  },
];

const DESIGN_PROCESS = [
  { step: "01", title: "Discover", desc: "User research & requirement gathering", emoji: "🔍", bg: "bg-primary-500" },
  { step: "02", title: "Define", desc: "User personas, flows & information architecture", emoji: "📋", bg: "bg-blue-500" },
  { step: "03", title: "Design", desc: "Wireframes, UI design & component library", emoji: "🎨", bg: "bg-accent-500" },
  { step: "04", title: "Prototype", desc: "Interactive prototype for testing & demos", emoji: "⚡", bg: "bg-purple-500" },
  { step: "05", title: "Test", desc: "Usability testing & feedback iterations", emoji: "🧪", bg: "bg-orange-500" },
  { step: "06", title: "Handoff", desc: "Dev-ready Figma files + documentation", emoji: "📦", bg: "bg-green-500" },
];

const TOOLS = [
  { name: "Figma", emoji: "🎨", desc: "Primary design tool" },
  { name: "Adobe XD", emoji: "⚡", desc: "Prototyping" },
  { name: "Maze", emoji: "🧪", desc: "User testing" },
  { name: "Zeplin", emoji: "📐", desc: "Dev handoff" },
  { name: "Miro", emoji: "🗺️", desc: "User flows" },
  { name: "Notion", emoji: "📋", desc: "Documentation" },
];

const FAQS = [
  {
    id: 1,
    q: "What deliverables will I receive?",
    a: "You receive organized Figma files with all screens, a component library, design tokens, prototype links, and a handoff document. Everything your dev team needs to build pixel-perfect.",
  },
  {
    id: 2,
    q: "How many revision rounds are included?",
    a: "All our UI/UX packages include unlimited revisions until you're satisfied. We don't cap revisions because we believe in getting it right, not just done.",
  },
  {
    id: 3,
    q: "Can you redesign my existing product?",
    a: "Yes. We start with a UX audit of your current product, identify pain points, and redesign with user data in mind. Many of our best results come from redesign projects.",
  },
];

const KEY_BENEFITS = [
  { icon: Users, text: "User-Centered Design", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Eye, text: "Accessibility First", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Zap, text: "Fast Turnaround", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Shield, text: "Source Files Included", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Star, text: "Unlimited Revisions", color: "text-accent-500", bg: "bg-accent-500/10" },
  { icon: PenTool, text: "Brand Consistent", color: "text-rose-500", bg: "bg-rose-500/10" },
];

// ============================================
// SUB COMPONENTS
// ============================================

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
      className={`group relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 animate-fade-up ${
        isActive
          ? "border-primary-500/30 bg-primary-500/5 shadow-[var(--shadow-elevation-md)] -translate-y-1"
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div
          className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <Icon size={20} className="text-white" />
        </div>
        <div className="text-right">
          <p className="text-[10px] text-tertiary-theme">Starting from</p>
          <p className={`text-sm font-extrabold ${service.iconColor}`}>
            {service.price}
          </p>
        </div>
      </div>

      {/* Title + Desc */}
      <h3 className="text-base font-bold text-primary-theme mb-1.5 group-hover:text-primary-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-xs text-secondary-theme leading-relaxed mb-3 line-clamp-2">
        {service.description}
      </p>

      {/* Features (Expanded) */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-32 opacity-100 mb-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-1.5">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-green-500 shrink-0" />
              <span className="text-[10px] font-medium text-primary-theme">
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-tertiary-theme" />
          <span className="text-[10px] font-semibold text-secondary-theme">
            {service.timeline}
          </span>
        </div>
        <span
          className={`text-[10px] font-bold ${
            isActive ? service.iconColor : "text-tertiary-theme"
          }`}
        >
          {isActive ? "Selected ✓" : "Details →"}
        </span>
      </div>

      {/* Active Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

/* ── Design Process ── */
const DesignProcess: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {DESIGN_PROCESS.map((step, index) => (
      <div
        key={step.step}
        className="group flex items-center gap-3 p-4 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
        style={{ animationDelay: `${index * 0.07}s` }}
      >
        {/* Step Icon */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${step.bg} text-white text-lg shrink-0 group-hover:scale-110 transition-transform duration-300 relative`}
        >
          {step.emoji}
          {/* Step Number */}
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-card-theme border border-card-theme flex items-center justify-center">
            <span className="text-[8px] font-extrabold text-tertiary-theme">
              {step.step}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="min-w-0">
          <p className="text-sm font-bold text-primary-theme group-hover:text-primary-500 transition-colors truncate">
            {step.title}
          </p>
          <p className="text-[10px] text-tertiary-theme leading-tight mt-0.5 line-clamp-2">
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* ── Tools Grid ── */
const ToolsGrid: React.FC = () => (
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
    {TOOLS.map((tool, index) => (
      <div
        key={tool.name}
        className="group flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
        style={{ animationDelay: `${index * 0.06}s` }}
      >
        <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
          {tool.emoji}
        </span>
        <div>
          <p className="text-xs font-bold text-primary-theme">{tool.name}</p>
          <p className="text-[9px] text-tertiary-theme mt-0.5">{tool.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ── Key Benefits ── */
const KeyBenefits: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {KEY_BENEFITS.map((benefit, index) => {
      const Icon = benefit.icon;
      return (
        <div
          key={benefit.text}
          className="group flex items-center gap-3 p-3.5 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg ${benefit.bg} shrink-0 group-hover:scale-110 transition-transform`}
          >
            <Icon size={15} className={benefit.color} />
          </div>
          <span className="text-xs font-semibold text-primary-theme leading-tight">
            {benefit.text}
          </span>
        </div>
      );
    })}
  </div>
);

/* ── FAQ Accordion ── */
const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQS.map((faq) => (
        <div
          key={faq.id}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
            openId === faq.id
              ? "border-primary-500/30 bg-primary-500/5"
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
              size={15}
              className={`text-secondary-theme shrink-0 transition-transform duration-300 ${
                openId === faq.id ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
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

/* ── CTA Card ── */
const CTACard: React.FC = () => (
  <div className="relative rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-purple-600" />
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-3xl pointer-events-none" />

    <div className="relative z-10 p-6 sm:p-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4 shadow-xl">
        <Palette size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        Start Your Design Project
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-5">
        Free design consultation + detailed proposal within 24 hours.
        Figma files fully yours.
      </p>

      <div className="space-y-2 mb-6">
        {[
          "Unlimited revision rounds",
          "Figma source files included",
          "Mobile + web screens covered",
          "Dev-ready handoff docs",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-400 shrink-0" />
            <span className="text-xs text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Link href="/contact?service=uiux-design">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-all duration-200 active:scale-95 shadow-lg">
            Get Design Quote
            <ArrowRight size={15} />
          </button>
        </Link>
        <Link href="https://wa.me/yourphonenumber" target="_blank">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-200 active:scale-95">
            💬 WhatsApp Chat
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const UIUXDesign: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="uiux-design"
      className="relative section-padding bg-secondary-theme/20 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 mb-4">
            <Palette size={13} className="text-primary-500" />
            UI/UX Design
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Design That{" "}
            <span className="gradient-text">Users Love</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            User-centered interfaces that balance beauty with function.
            Every pixel is intentional, every flow is tested, and every
            design is built to convert.
          </p>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "200+", label: "Screens Designed", color: "text-primary-500", bg: "bg-primary-500/10", icon: Layout },
            { value: "4.9★", label: "Design Rating", color: "text-yellow-500", bg: "bg-yellow-500/10", icon: Star },
            { value: "∞", label: "Revision Rounds", color: "text-green-500", bg: "bg-green-500/10", icon: Zap },
            { value: "₹6K", label: "Starting Price", color: "text-accent-500", bg: "bg-accent-500/10", icon: DollarSign },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                  <Icon size={17} className={stat.color} />
                </div>
                <div className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-secondary-theme font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Sub Services Grid ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
              <Sparkles size={15} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-primary-theme">
              Design Services We Offer
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* ── 2-Column Layout ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* LEFT */}
          <div className="space-y-10">

            {/* Design Process */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
                  <Zap size={15} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Our Design Process
                </h3>
              </div>
              <DesignProcess />
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-500/10">
                  <PenTool size={15} className="text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Tools We Use
                </h3>
              </div>
              <ToolsGrid />
            </div>

            {/* Key Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10">
                  <CheckCircle2 size={15} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  What You Always Get
                </h3>
              </div>
              <KeyBenefits />
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
                  <Palette size={15} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Design FAQs
                </h3>
              </div>
              <FAQAccordion />
            </div>
          </div>

          {/* RIGHT: Sticky CTA */}
          <div className="hidden lg:block sticky top-28 space-y-3">
            <CTACard />

            <Link href="/portfolio?category=design">
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-card-theme bg-card-theme hover:border-primary-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink size={14} className="text-primary-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-primary-theme">
                  View Design Projects →
                </span>
              </div>
            </Link>

            <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={13} className="text-primary-600" />
                <span className="text-xs font-bold text-primary-700 dark:text-primary-400">
                  Starting From
                </span>
              </div>
              <p className="text-xl font-extrabold text-primary-700 dark:text-primary-400">
                ₹6,000
              </p>
              <p className="text-xs text-primary-600/80 mt-0.5">
                Developer handoff. Custom quotes available.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-10">
          <CTACard />
        </div>
      </div>
    </section>
  );
};