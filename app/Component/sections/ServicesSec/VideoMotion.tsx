"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Video,
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
  Film,
  Play,
  Tv,
  Clapperboard,
  Monitor,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Social Media Reels",
    description:
      "High-retention short-form video content for Instagram, TikTok, and YouTube Shorts optimized for maximum reach.",
    icon: Play,
    gradient: "from-cyan-500 to-teal-500",
    iconColor: "text-cyan-500",
    timeline: "2–3 Days",
    price: "₹3,000",
    features: ["15–60 Sec Reels", "Trending Audio", "Captions & Text", "Platform Optimized"],
  },
  {
    id: 2,
    title: "Motion Graphics",
    description:
      "Animated graphics, lower thirds, transitions, and visual effects that make your brand content stand out.",
    icon: Sparkles,
    gradient: "from-primary-500 to-accent-500",
    iconColor: "text-primary-500",
    timeline: "3–5 Days",
    price: "₹8,000",
    features: ["Logo Animation", "Lower Thirds", "Transitions", "Brand Colors"],
  },
  {
    id: 3,
    title: "Product Demo Videos",
    description:
      "Professional product showcase videos that highlight features, benefits, and use cases to drive conversions.",
    icon: Monitor,
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-500",
    timeline: "3–5 Days",
    price: "₹10,000",
    features: ["Screen Recording", "Voiceover", "Feature Callouts", "CTA Integration"],
  },
  {
    id: 4,
    title: "Animated Explainers",
    description:
      "2D animated explainer videos that simplify complex ideas and communicate your value proposition clearly.",
    icon: Film,
    gradient: "from-purple-500 to-violet-500",
    iconColor: "text-purple-500",
    timeline: "1–2 Weeks",
    price: "₹20,000",
    features: ["Script Writing", "Storyboard", "2D Animation", "Professional VO"],
  },
  
  {
    id: 6,
    title: "Brand Films",
    description:
      "Cinematic brand story videos that emotionally connect with your audience and build long-term brand trust.",
    icon: Clapperboard,
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    timeline: "1–2 Weeks",
    price: "₹25,000",
    features: ["Storyboarding", "Color Grading", "Sound Design", "Cinematic Look"],
  },
];

const TOOLS = [
  { name: "Premiere Pro", emoji: "🎬", desc: "Video editing" },
  { name: "After Effects", emoji: "✨", desc: "Motion graphics" },
  { name: "DaVinci", emoji: "🎨", desc: "Color grading" },
  { name: "Cinema 4D", emoji: "🧊", desc: "3D animation" },
  { name: "Audition", emoji: "🎵", desc: "Audio mixing" },
  { name: "Figma", emoji: "🖼️", desc: "Thumbnails" },
];

const FAQS = [
  {
    id: 1,
    q: "What file formats do you deliver the final video in?",
    a: "We deliver in MP4 (H.264) for web/social, MOV for professional use, and platform-specific formats (1:1, 9:16, 16:9). All files are exported at the highest quality settings.",
  },
  {
    id: 2,
    q: "Do you provide voiceover or just video editing?",
    a: "We provide both. We have a network of professional voiceover artists in multiple languages. You can also provide your own audio and we'll handle the editing and mixing.",
  },
  {
    id: 3,
    q: "How many revision rounds are included?",
    a: "All video packages include 2 free revision rounds. Additional revisions are available at a nominal charge. For ongoing retainer clients, we offer unlimited revisions.",
  },
];

const KEY_BENEFITS = [
  { icon: Zap, text: "Fast Turnaround", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Star, text: "4K Quality Output", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: Shield, text: "Raw Files Included", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: Tv, text: "All Platforms Covered", color: "text-primary-500", bg: "bg-primary-500/10" },
  { icon: Play, text: "Custom Thumbnails", color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: CheckCircle2, text: "2 Revision Rounds", color: "text-orange-500", bg: "bg-orange-500/10" },
];

const VIDEO_FORMATS = [
  { label: "Reels / Shorts", ratio: "9:16", emoji: "📱", desc: "Instagram, TikTok, YT Shorts" },
  { label: "YouTube Videos", ratio: "16:9", emoji: "📺", desc: "YouTube, Website embeds" },
  { label: "Square Posts", ratio: "1:1", emoji: "⬛", desc: "Instagram, LinkedIn posts" },
  { label: "Story Format", ratio: "4:5", emoji: "📸", desc: "Instagram & Facebook stories" },
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
          ? "border-cyan-500/30 bg-cyan-500/5 shadow-[var(--shadow-elevation-md)] -translate-y-1"
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

/* ── Video Formats Grid ── */
const VideoFormats: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    {VIDEO_FORMATS.map((format, index) => (
      <div
        key={format.label}
        className="group flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-card-theme border border-card-theme hover:border-cyan-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        <span className="text-2xl group-hover:scale-125 transition-transform duration-200">
          {format.emoji}
        </span>
        <div>
          <p className="text-xs font-bold text-primary-theme">{format.label}</p>
          <p className="text-[10px] font-extrabold text-cyan-500 mt-0.5">
            {format.ratio}
          </p>
          <p className="text-[9px] text-tertiary-theme mt-0.5 leading-tight">
            {format.desc}
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
              ? "border-cyan-500/30 bg-cyan-500/5"
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
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600" />
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
        <Video size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        Start Your Video Project
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-5">
        Free consultation + quote in 24hrs. All raw files and exports
        included.
      </p>

      <div className="space-y-2 mb-6">
        {[
          "All platform formats included",
          "Raw project files delivered",
          "2 free revision rounds",
          "Custom thumbnail design",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-green-400 shrink-0" />
            <span className="text-xs text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Link href="/contact?service=video-motion">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-cyan-700 font-bold text-sm hover:bg-cyan-50 transition-all duration-200 active:scale-95 shadow-lg">
            Get Video Quote
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

export const VideoMotion: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="video-motion"
      className="relative section-padding bg-secondary-theme/20 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800/50 mb-4">
            <Video size={13} className="text-cyan-500" />
            Video Editing & Motion
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Content That{" "}
            <span className="gradient-text">Stops the Scroll</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            From social media reels to full brand films — we create video
            content that captures attention, tells your story, and drives
            real engagement.
          </p>
        </div>

        {/* ── Quick Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "500+", label: "Videos Edited", color: "text-cyan-500", bg: "bg-cyan-500/10", icon: Video },
            { value: "4K", label: "Max Resolution", color: "text-blue-500", bg: "bg-blue-500/10", icon: Tv },
            { value: "2", label: "Revision Rounds", color: "text-green-500", bg: "bg-green-500/10", icon: Film },
            { value: "₹3K", label: "Starting Price", color: "text-orange-500", bg: "bg-orange-500/10", icon: DollarSign },
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

        {/* ── Sub Services ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10">
              <Sparkles size={15} className="text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold text-primary-theme">
              Video Services We Offer
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

            {/* Video Formats */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10">
                  <Tv size={15} className="text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  All Video Formats Covered
                </h3>
              </div>
              <VideoFormats />
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10">
                  <Video size={15} className="text-primary-500" />
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
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10">
                  <Video size={15} className="text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-theme">
                  Video FAQs
                </h3>
              </div>
              <FAQAccordion />
            </div>
          </div>

          {/* RIGHT: Sticky CTA */}
          <div className="hidden lg:block sticky top-28 space-y-3">
            <CTACard />

            <Link href="/portfolio?category=video">
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-card-theme bg-card-theme hover:border-cyan-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink size={14} className="text-cyan-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-primary-theme">
                  View Video Projects →
                </span>
              </div>
            </Link>

            <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={13} className="text-cyan-600" />
                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400">
                  Starting From
                </span>
              </div>
              <p className="text-xl font-extrabold text-cyan-700 dark:text-cyan-400">
                ₹3,000
              </p>
              <p className="text-xs text-cyan-600/80 mt-0.5">
                Social media reel. Custom quotes available.
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