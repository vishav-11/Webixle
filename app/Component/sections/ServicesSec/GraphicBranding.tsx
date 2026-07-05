"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PenTool,
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
  Layers,
  Image,
  FileText,
  Package,
  Layout,
  Palette,
  Type,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "Unique, memorable logos that represent your brand identity perfectly across all mediums — digital and print.",
    icon: PenTool,
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-rose-500",
    timeline: "3–5 Days",
    price: "₹5,000",
    features: ["3 Initial Concepts", "Unlimited Revisions", "All File Formats", "Brand Usage Guide"],
  },
  {
    id: 2,
    title: "Brand Identity Kit",
    description:
      "Complete brand identity system — logo, colors, typography, patterns, and brand guidelines in one package.",
    icon: Layers,
    gradient: "from-primary-500 to-accent-500",
    iconColor: "text-primary-500",
    timeline: "1–2 Weeks",
    price: "₹20,000",
    features: ["Logo Suite", "Color Palette", "Typography System", "Brand Guidelines PDF"],
  },
  {
    id: 3,
    title: "Social Media Assets",
    description:
      "Consistent, on-brand social media templates for Instagram, LinkedIn, Twitter, and Facebook.",
    icon: Image,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    timeline: "3–5 Days",
    price: "₹8,000",
    features: ["Post Templates", "Story Templates", "Profile Assets", "Highlight Covers"],
  },
  {
    id: 4,
    title: "Pitch Deck Design",
    description:
      "Investor-ready pitch deck designs that tell your story compellingly and leave a lasting impression.",
    icon: Layout,
    gradient: "from-purple-500 to-violet-500",
    iconColor: "text-purple-500",
    timeline: "3–7 Days",
    price: "₹12,000",
    features: ["Up to 20 Slides", "Custom Illustrations", "Data Visualization", "Editable PPT/Figma"],
  },
  {
    id: 5,
    title: "Print Materials",
    description:
      "Business cards, brochures, flyers, and banners designed for print with CMYK color accuracy.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    timeline: "2–4 Days",
    price: "₹4,000",
    features: ["Business Cards", "Brochures & Flyers", "Print-Ready Files", "CMYK Color Mode"],
  },
  {
    id: 6,
    title: "Packaging Design",
    description:
      "Eye-catching product packaging that stands out on shelves and reinforces your brand story.",
    icon: Package,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    timeline: "5–10 Days",
    price: "₹15,000",
    features: ["3D Mockups", "Print-Ready Files", "Die-Cut Templates", "Brand Integration"],
  },
];

const TOOLS = [
  { name: "Illustrator", emoji: "🖊️", desc: "Vector design" },
  { name: "Photoshop", emoji: "🖼️", desc: "Image editing" },
  { name: "InDesign", emoji: "📄", desc: "Print layouts" },
  { name: "Figma", emoji: "🎨", desc: "Digital design" },
  { name: "After Effects", emoji: "✨", desc: "Logo animation" },
  { name: "Canva Pro", emoji: "🎯", desc: "Social templates" },
];

const FAQS = [
  {
    id: 1,
    q: "What file formats will I receive?",
    a: "You receive all industry-standard formats: SVG, AI, EPS (vector), PNG, JPG (raster), and PDF. Both web-optimized and print-ready versions are included.",
  },
  {
    id: 2,
    q: "How many logo concepts will I see first?",
    a: "We present 3 distinct logo concepts in the first round. You pick one direction and we refine it with unlimited revisions until you're 100% happy.",
  },
  {
    id: 3,
    q: "Do you offer brand strategy as well?",
    a: "Yes. Our brand identity kit includes a brand strategy session where we define your brand personality, target audience, tone of voice, and visual direction before starting design.",
  },
];

const KEY_BENEFITS = [
  { icon: Star, text: "3 Initial Concepts", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Zap, text: "Fast Turnaround", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Shield, text: "All File Formats", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Palette, text: "Brand Consistent", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Type, text: "Typography System", color: "text-accent-500", bg: "bg-accent-500/10" },
  { icon: CheckCircle2, text: "Unlimited Revisions", color: "text-rose-500", bg: "bg-rose-500/10" },
];

const BRAND_ELEMENTS = [
  { label: "Logo", emoji: "✍️", desc: "Primary & variations" },
  { label: "Colors", emoji: "🎨", desc: "Primary & secondary palette" },
  { label: "Typography", emoji: "🔤", desc: "Font system & hierarchy" },
  { label: "Patterns", emoji: "◼️", desc: "Brand textures & shapes" },
  { label: "Icons", emoji: "⭐", desc: "Custom icon set" },
  { label: "Guidelines", emoji: "📋", desc: "Brand usage manual" },
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
          ? "border-rose-500/30 bg-rose-500/5 shadow-[var(--shadow-elevation-md)] -translate-y-1"
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

      {/* Features Expanded */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-32 opacity-100 mb-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-1.5">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-green-500 shrink-0" />
              <span className="text-[10px] font-medium text-primary-theme">{f}</span>
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
        <span className={`text-[10px] font-bold ${isActive ? service.iconColor : "text-tertiary-theme"}`}>
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

/* ── Brand Elements Grid ── */
const BrandElements: React.FC = () => (
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
    {BRAND_ELEMENTS.map((el, index) => (
      <div
        key={el.label}
        className="group flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
        style={{ animationDelay: `${index * 0.06}s` }}
      >
        <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
          {el.emoji}
        </span>
        <div>
          <p className="text-xs font-bold text-primary-theme">{el.label}</p>
          <p className="text-[9px] text-tertiary-theme mt-0.5 leading-tight">
            {el.desc}
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
              ? "border-rose-500/30 bg-rose-500/5"
              : "border-card-theme bg-card-theme"
          }`}
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 p-4 text-left"
          >
            <span className="text-sm font-bold text-primary-theme">{faq.q}</span>
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
    <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-accent-600" />
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
        <PenTool size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        Build Your Brand Today
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-5">
        Free brand consultation + detailed proposal in 24hrs. All source
        files included.
      </p>

      <div className="space-y-2 mb-6">
        {[
          "3 unique initial concepts",
          "Unlimited revision rounds",
          "All file formats included",
          "Full brand guidelines PDF",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-400 shrink-0" />
            <span className="text-xs text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Link href="/contact?service=graphic-branding">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-rose-700 font-bold text-sm hover:bg-rose-50 transition-all duration-200 active:scale-95 shadow-lg">
            Get Branding Quote
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

export const GraphicBranding: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="graphic-branding"
      className="relative section-padding bg-mesh overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-rose-800/50 mb-4">
            <PenTool size={13} className="text-rose-500" />
            Graphic Design & Branding
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Brands That People{" "}
            <span className="gradient-text">Remember</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Your brand is your first impression. We craft complete visual
            identities that make your business instantly recognizable,
            trustworthy, and memorable.
          </p>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "100+", label: "Brands Created", color: "text-rose-500", bg: "bg-rose-500/10", icon: PenTool },
            { value: "3", label: "Initial Concepts", color: "text-primary-500", bg: "bg-primary-500/10", icon: Sparkles },
            { value: "∞", label: "Revision Rounds", color: "text-green-500", bg: "bg-green-500/10", icon: Zap },
            { value: "₹5K", label: "Starting Price", color: "text-orange-500", bg: "bg-orange-500/10", icon: DollarSign },
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
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/10">
              <Sparkles size={15} className="text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-primary-theme">
              Branding Services We Offer
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
                  setActiveSubService(activeSubService === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* LEFT */}
          <div className="space-y-10">

            {/* Brand Elements */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/10">
                  <Layers size={15} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  What's Inside a Brand Identity Kit
                </h3>
              </div>
              <BrandElements />
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
                  <PenTool size={15} className="text-primary-500" />
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
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/10">
                  <PenTool size={15} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Branding FAQs
                </h3>
              </div>
              <FAQAccordion />
            </div>
          </div>

          {/* RIGHT: Sticky CTA */}
          <div className="hidden lg:block sticky top-28 space-y-3">
            <CTACard />

            <Link href="/portfolio?category=branding">
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-card-theme bg-card-theme hover:border-rose-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink size={14} className="text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-primary-theme">
                  View Branding Projects →
                </span>
              </div>
            </Link>

            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={13} className="text-rose-600" />
                <span className="text-xs font-bold text-rose-700 dark:text-rose-400">
                  Starting From
                </span>
              </div>
              <p className="text-xl font-extrabold text-rose-700 dark:text-rose-400">
                ₹5,000
              </p>
              <p className="text-xs text-rose-600/80 mt-0.5">
                Logo design. Custom quotes available.
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