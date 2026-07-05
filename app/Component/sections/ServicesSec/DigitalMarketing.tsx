"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  DollarSign,
  Star,
  ChevronDown,
  ExternalLink,
  Zap,
  BarChart3,
  Target,
  Users,
  Mail,
  Search,
  Globe,
  LineChart,
  Megaphone,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "SEO & Content",
    description:
      "Rank higher on Google with on-page SEO, technical optimization, and content strategy.",
    icon: Search,
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    timeline: "1–3 Months",
    price: "₹12,000/mo",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Blog Strategy"],
  },
  {
    id: 2,
    title: "Meta & Google Ads",
    description:
      "High-ROI paid campaigns on Facebook, Instagram, and Google Ads to generate leads and sales.",
    icon: Megaphone,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    timeline: "Ongoing",
    price: "₹15,000/mo",
    features: ["Ad Campaign Setup", "Audience Targeting", "A/B Testing", "Conversion Tracking"],
  },
  {
    id: 3,
    title: "Social Media Growth",
    description:
      "Consistent content and strategy to grow your brand presence across Instagram, LinkedIn, and more.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    timeline: "Ongoing",
    price: "₹10,000/mo",
    features: ["Content Calendar", "Post Design", "Reels Strategy", "Engagement Boost"],
  },
  {
    id: 4,
    title: "Email Marketing",
    description:
      "Convert leads into customers with automated email campaigns and funnels.",
    icon: Mail,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    timeline: "1–2 Weeks Setup",
    price: "₹8,000/mo",
    features: ["Email Automation", "Lead Funnels", "Newsletter Setup", "CRM Integration"],
  },
  {
    id: 5,
    title: "Analytics & Tracking",
    description:
      "Data-driven insights with GA4, pixel tracking, and conversion optimization.",
    icon: BarChart3,
    gradient: "from-primary-500 to-accent-500",
    iconColor: "text-primary-500",
    timeline: "3–5 Days",
    price: "₹5,000",
    features: ["GA4 Setup", "Meta Pixel", "Conversion Tracking", "Dashboard Reports"],
  },
  {
    id: 6,
    title: "Growth Strategy",
    description:
      "Complete digital growth roadmap tailored to your business goals and audience.",
    icon: Target,
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-rose-500",
    timeline: "1 Week",
    price: "₹15,000",
    features: ["Market Research", "Competitor Analysis", "Growth Plan", "Funnel Strategy"],
  },
];

const CHANNELS = [
  { name: "Google", emoji: "🔍", desc: "Search traffic" },
  { name: "Meta Ads", emoji: "📘", desc: "FB + Instagram" },
  { name: "YouTube", emoji: "📺", desc: "Video marketing" },
  { name: "LinkedIn", emoji: "💼", desc: "B2B growth" },
  { name: "Email", emoji: "📩", desc: "Lead nurturing" },
  { name: "Website", emoji: "🌐", desc: "Conversion hub" },
];

const KEY_BENEFITS = [
  { icon: TrendingUp, text: "ROI Focused Campaigns", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Target, text: "Precise Targeting", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Zap, text: "Fast Lead Generation", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: LineChart, text: "Data-Driven Decisions", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Globe, text: "Multi-Channel Strategy", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Star, text: "Transparent Reporting", color: "text-orange-500", bg: "bg-orange-500/10" },
];

const FAQS = [
  {
    id: 1,
    q: "How long does it take to see results from digital marketing?",
    a: "Paid ads show results within days. SEO takes 2–3 months for noticeable ranking improvements. Long-term strategies deliver sustainable growth over time.",
  },
  {
    id: 2,
    q: "Do you guarantee leads or sales?",
    a: "We don't guarantee unrealistic numbers, but we focus on ROI-driven campaigns. Our goal is to optimize cost per lead and maximize conversions using data.",
  },
  {
    id: 3,
    q: "Will I get regular reports?",
    a: "Yes. You get weekly or monthly performance reports including traffic, leads, conversions, and ROI metrics with full transparency.",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

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
      className={`group p-5 rounded-2xl border cursor-pointer transition-all duration-300 animate-fade-up ${
        isActive
          ? "border-green-500/30 bg-green-500/5 shadow-[var(--shadow-elevation-md)] -translate-y-1"
          : "bg-card-theme border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient}`}>
          <Icon size={20} className="text-white" />
        </div>
        <p className={`text-sm font-bold ${service.iconColor}`}>{service.price}</p>
      </div>

      <h3 className="text-base font-bold text-primary-theme mb-1.5">
        {service.title}
      </h3>

      <p className="text-xs text-secondary-theme mb-3 line-clamp-2">
        {service.description}
      </p>

      {isActive && (
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-green-500" />
              <span className="text-[10px]">{f}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between text-[10px] text-secondary-theme">
        <span>{service.timeline}</span>
        <span>{isActive ? "✓ Selected" : "Details →"}</span>
      </div>
    </div>
  );
};

/* ── Channels Grid ── */
const ChannelsGrid: React.FC = () => (
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
    {CHANNELS.map((c, i) => (
      <div
        key={c.name}
        className="group flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all animate-fade-up"
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        <span className="text-2xl">{c.emoji}</span>
        <p className="text-xs font-bold">{c.name}</p>
        <p className="text-[9px] text-tertiary-theme">{c.desc}</p>
      </div>
    ))}
  </div>
);

/* ── Benefits ── */
const BenefitsGrid: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {KEY_BENEFITS.map((b, i) => {
      const Icon = b.icon;
      return (
        <div
          key={b.text}
          className="flex items-center gap-3 p-3.5 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 transition-all animate-fade-up"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${b.bg}`}>
            <Icon size={15} className={b.color} />
          </div>
          <span className="text-xs font-semibold">{b.text}</span>
        </div>
      );
    })}
  </div>
);

/* ── FAQ ── */
const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQS.map((faq) => (
        <div key={faq.id} className="rounded-xl border bg-card-theme">
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex justify-between p-4 text-left"
          >
            <span className="text-sm font-bold">{faq.q}</span>
            <ChevronDown size={15} className={openId === faq.id ? "rotate-180" : ""} />
          </button>
          {openId === faq.id && (
            <p className="px-4 pb-4 text-sm text-secondary-theme">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
};

/* ── CTA ── */
const CTACard: React.FC = () => (
  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white">
    <h3 className="text-lg font-bold mb-2">Grow Your Business 🚀</h3>
    <p className="text-sm opacity-80 mb-4">
      Get a free marketing strategy and ROI plan.
    </p>
    <Link href="/contact?service=digital-marketing">
      <button className="w-full py-2.5 bg-white text-green-700 font-bold rounded-xl">
        Get Free Strategy
      </button>
    </Link>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const DigitalMarketing: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-secondary-theme/20">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Grow with{" "}
            <span className="gradient-text">Digital Marketing</span>
          </h2>
          <p className="text-secondary-theme mt-3">
            SEO, ads, and content strategies that drive real results.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SUB_SERVICES.map((s, i) => (
            <SubServiceCard
              key={s.id}
              service={s}
              index={i}
              isActive={active === i}
              onClick={() => setActive(active === i ? -1 : i)}
            />
          ))}
        </div>

        {/* 2-COLUMN */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">

          <div className="space-y-10">
            <ChannelsGrid />
            <BenefitsGrid />
            <FAQAccordion />
          </div>

          <div className="hidden lg:block">
            <CTACard />
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-8">
          <CTACard />
        </div>
      </div>
    </section>
  );
};