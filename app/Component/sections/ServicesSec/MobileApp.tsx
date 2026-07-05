"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  DollarSign,
  Zap,
  Shield,
  Star,
  ChevronDown,
  ExternalLink,
  Wifi,
  Bell,
  Map,
  ShoppingBag,
  Users,
  BarChart3,
  Apple,
  Play,
  Code2,
  Layers,
  Heart,
  Truck,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const SUB_SERVICES = [
  {
    id: 1,
    title: "Consumer Apps",
    description:
      "Engaging, user-friendly apps for the mass market. Social platforms, lifestyle apps, entertainment — built for maximum user retention and viral growth.",
    icon: Users,
    gradient: "from-purple-600 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500",
    dotColor: "bg-purple-500",
    timeline: "8–12 Weeks",
    price: "₹1,20,000",
    features: [
      "Social Login (Google/Apple)",
      "Push Notifications",
      "In-App Messaging",
      "User Profiles",
      "Content Feed",
      "Analytics Integration",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Apps",
    description:
      "Full-featured shopping apps with product catalogs, cart management, payment gateways, order tracking, and a checkout flow that maximizes conversions.",
    icon: ShoppingBag,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
    dotColor: "bg-green-500",
    timeline: "8–14 Weeks",
    price: "₹1,50,000",
    features: [
      "Product Catalog",
      "Cart & Wishlist",
      "Razorpay / Stripe Payments",
      "Order Tracking",
      "Push Notifications",
      "Admin Panel",
    ],
  },
  {
    id: 3,
    title: "On-Demand Apps",
    description:
      "Uber-like apps with real-time GPS tracking, driver/provider matching, live updates, and seamless booking flows. Perfect for delivery, rides, and services.",
    icon: Truck,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500",
    dotColor: "bg-orange-500",
    timeline: "10–16 Weeks",
    price: "₹2,00,000",
    features: [
      "Real-Time GPS Tracking",
      "Driver/Provider Matching",
      "In-App Wallet",
      "Live Order Updates",
      "Rating & Reviews",
      "Dual Panel (User + Provider)",
    ],
  },
  {
    id: 4,
    title: "Business & Enterprise",
    description:
      "Internal tools, field service apps, and enterprise mobile solutions with role-based access, offline support, and deep integration with existing systems.",
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    dotColor: "bg-blue-500",
    timeline: "6–12 Weeks",
    price: "₹1,00,000",
    features: [
      "Role-Based Access Control",
      "Offline Mode Support",
      "ERP / CRM Integration",
      "Custom Workflows",
      "Data Export",
      "Secure Authentication",
    ],
  },
  {
    id: 5,
    title: "Healthcare Apps",
    description:
      "HIPAA-compliant health and wellness apps with telemedicine, appointment booking, e-prescriptions, and wearable device integration.",
    icon: Heart,
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-500",
    dotColor: "bg-rose-500",
    timeline: "10–16 Weeks",
    price: "₹1,80,000",
    features: [
      "Video Consultation (WebRTC)",
      "Appointment Booking",
      "E-Prescriptions",
      "Health Records",
      "Wearable Integration",
      "Secure Data Storage",
    ],
  },
  {
    id: 6,
    title: "Location-Based Apps",
    description:
      "Apps powered by real-time maps, geofencing, nearby discovery, and location intelligence. Perfect for travel, local services, and delivery platforms.",
    icon: Map,
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/5",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    timeline: "6–10 Weeks",
    price: "₹90,000",
    features: [
      "Google Maps Integration",
      "Real-Time Location",
      "Geofencing",
      "Nearby Search",
      "Route Optimization",
      "Location History",
    ],
  },
];

const TECH_STACK = [
  {
    category: "Cross-Platform",
    icon: Layers,
    color: "text-purple-500",
    bg: "from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/20",
    items: ["Flutter", "React Native", "Dart", "JavaScript"],
    description: "One codebase, both platforms",
  },
  {
    category: "Native iOS",
    icon: Apple,
    color: "text-blue-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    items: ["Swift", "SwiftUI", "Xcode", "CoreData"],
    description: "100% native Apple experience",
  },
  {
    category: "Native Android",
    icon: Play,
    color: "text-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    items: ["Kotlin", "Jetpack Compose", "Android Studio", "Room DB"],
    description: "Best-in-class Android apps",
  },
  {
    category: "Backend & APIs",
    icon: Code2,
    color: "text-orange-500",
    bg: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    items: ["Node.js", "Firebase", "GraphQL", "WebSockets"],
    description: "Scalable server infrastructure",
  },
];

const PLATFORM_FEATURES = [
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Real-time alerts & engagement",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Wifi,
    title: "Offline Support",
    desc: "Works without internet",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Map,
    title: "GPS & Maps",
    desc: "Real-time location features",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "App Security",
    desc: "End-to-end encryption",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "60fps smooth animations",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Star,
    title: "Store Deployment",
    desc: "App Store & Play Store",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirements & Discovery",
    description:
      "We understand your app idea, target users, platform preferences, and business goals in a detailed consultation.",
    emoji: "🎯",
    bg: "bg-purple-500",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description:
      "Mobile-first wireframes and high-fidelity Figma designs tailored for iOS and Android guidelines.",
    emoji: "🎨",
    bg: "bg-pink-500",
  },
  {
    step: "03",
    title: "App Development",
    description:
      "Sprint-based development with weekly builds shared via TestFlight (iOS) and APK (Android).",
    emoji: "💻",
    bg: "bg-blue-500",
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Device testing across 10+ real devices, OS versions, and screen sizes. Bug-free guarantee.",
    emoji: "🧪",
    bg: "bg-orange-500",
  },
  {
    step: "05",
    title: "Store Submission",
    description:
      "We handle App Store and Play Store submission, review process, and compliance requirements.",
    emoji: "📦",
    bg: "bg-green-500",
  },
  {
    step: "06",
    title: "Launch & Support",
    description:
      "30-day post-launch support. Crash monitoring, performance tracking, and quick bug fixes.",
    emoji: "🚀",
    bg: "bg-primary-500",
  },
];

const KEY_BENEFITS = [
  {
    icon: Smartphone,
    text: "iOS & Android Both",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Zap,
    text: "60fps Smooth UI",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    text: "App Store Ready",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wifi,
    text: "Offline Mode Support",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Code2,
    text: "Clean Architecture",
    color: "text-primary-500",
    bg: "bg-primary-500/10",
  },
  {
    icon: Star,
    text: "Source Code Ownership",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Platform Selector Visual ── */
const PlatformVisual: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<"both" | "ios" | "android">("both");

  return (
    <div className="relative p-6 rounded-2xl bg-card-theme border border-card-theme overflow-hidden">
      {/* BG Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <p className="text-xs font-bold uppercase tracking-widest text-tertiary-theme mb-4">
        Platform Support
      </p>

      {/* Platform Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: "both", label: "Both Platforms", emoji: "📱" },
          { id: "ios", label: "iOS Only", emoji: "" },
          { id: "android", label: "Android Only", emoji: "🤖" },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePlatform(p.id as typeof activePlatform)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activePlatform === p.id
                ? "bg-primary-600 text-white shadow-[var(--shadow-glow)]"
                : "bg-secondary-theme border border-card-theme text-secondary-theme hover:text-primary-theme"
            }`}
          >
            <span>{p.emoji}</span>
            <span className="hidden sm:block">{p.label}</span>
          </button>
        ))}
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* iOS Card */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            activePlatform === "android"
              ? "opacity-40 border-card-theme bg-secondary-theme"
              : "border-blue-500/30 bg-blue-500/5"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <Apple size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-primary-theme">iOS</span>
          </div>
          <div className="space-y-1.5">
            {["iPhone & iPad", "App Store", "Swift / Flutter", "iOS 14+"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[10px] font-medium text-secondary-theme">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Android Card */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            activePlatform === "ios"
              ? "opacity-40 border-card-theme bg-secondary-theme"
              : "border-green-500/30 bg-green-500/5"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
              <Play size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-primary-theme">
              Android
            </span>
          </div>
          <div className="space-y-1.5">
            {["All Android Devices", "Play Store", "Kotlin / Flutter", "Android 8+"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
                  <span className="text-[10px] font-medium text-secondary-theme">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Both Platform Note */}
      {activePlatform === "both" && (
        <div className="mt-3 flex items-center gap-2 p-3 rounded-lg bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-800/40">
          <CheckCircle2 size={14} className="text-green-500 shrink-0" />
          <p className="text-xs font-semibold text-primary-theme">
            One codebase → Both platforms → 40% cost saving
          </p>
        </div>
      )}
    </div>
  );
};

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
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}
        >
          <Icon size={22} className="text-white" />
        </div>
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

      {/* Features Expanded */}
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
          className={`text-xs font-bold transition-all duration-200 ${
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
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-card-theme border border-card-theme shrink-0">
          <Icon size={17} className={stack.color} />
        </div>
        <div>
          <p className={`text-sm font-bold ${stack.color}`}>
            {stack.category}
          </p>
          <p className="text-[10px] text-tertiary-theme">
            {stack.description}
          </p>
        </div>
      </div>
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
    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-primary-500 to-green-500 hidden sm:block" />
    <div className="space-y-4">
      {PROCESS_STEPS.map((step, index) => (
        <div
          key={step.step}
          className="group flex items-start gap-5 p-4 sm:p-5 rounded-2xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:shadow-[var(--shadow-elevation-md)] transition-all duration-300 animate-fade-up"
          style={{ animationDelay: `${index * 0.08}s` }}
        >
          <div className="relative shrink-0">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${step.bg} text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              {step.emoji}
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-card-theme border border-card-theme flex items-center justify-center">
              <span className="text-[9px] font-extrabold text-tertiary-theme">
                {step.step}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h4 className="font-bold text-base text-primary-theme mb-1 group-hover:text-primary-500 transition-colors">
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

/* ── Platform Features Grid ── */
const PlatformFeaturesGrid: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {PLATFORM_FEATURES.map((feature, index) => {
      const Icon = feature.icon;
      return (
        <div
          key={feature.title}
          className="group flex items-center gap-3 p-4 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/20 hover:-translate-y-0.5 transition-all duration-200 animate-fade-up"
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-lg ${feature.bg} shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={17} className={feature.color} />
          </div>
          <div>
            <p className="text-xs font-bold text-primary-theme leading-tight">
              {feature.title}
            </p>
            <p className="text-[10px] text-tertiary-theme mt-0.5">
              {feature.desc}
            </p>
          </div>
        </div>
      );
    })}
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
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-primary-600 to-pink-600" />
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />
    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-pink-400/20 blur-2xl pointer-events-none" />

    <div className="relative z-10 p-7 sm:p-9">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-5 shadow-xl">
        <Smartphone size={28} className="text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">
        Ready to Build Your App?
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6">
        Free consultation + detailed quote within 24 hours. Both iOS &
        Android. No commitment needed.
      </p>

      <div className="space-y-2 mb-7">
        {[
          "Free 30-min consultation call",
          "Both iOS & Android covered",
          "Weekly build demos via TestFlight",
          "App Store submission handled by us",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-400 shrink-0" />
            <span className="text-sm text-white/80 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Link href="/contact?service=mobile-app">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 transition-all duration-200 active:scale-95 shadow-xl">
            Get Free App Dev Quote
            <ArrowRight size={16} />
          </button>
        </Link>
        <Link href="https://wa.me/yourphonenumber" target="_blank">
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
      { value: "50+", label: "Apps Shipped", icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10" },
      { value: "2", label: "Platforms Covered", icon: Layers, color: "text-blue-500", bg: "bg-blue-500/10" },
      { value: "4.8★", label: "Avg App Rating", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/10" },
      { value: "30", label: "Days Free Support", icon: Shield, color: "text-green-500", bg: "bg-green-500/10" },
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
const MobileAppFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      q: "Flutter vs React Native — which is better for my app?",
      a: "Both are excellent for cross-platform development. Flutter gives better performance and pixel-perfect UI (great for complex animations). React Native is better if you have an existing React/JavaScript team. We assess your needs and recommend the right choice during consultation.",
    },
    {
      id: 2,
      q: "How long does it take to build a mobile app?",
      a: "A simple app takes 6–8 weeks. A medium-complexity app (e-commerce, on-demand) takes 10–14 weeks. Complex enterprise apps take 14–20 weeks. We provide an exact timeline after understanding your requirements.",
    },
    {
      id: 3,
      q: "Do you handle App Store and Play Store submission?",
      a: "Yes — completely. We manage the entire submission process including app metadata, screenshots, compliance review, and resolving any rejection issues. You just need an Apple Developer ($99/yr) and Google Play ($25 one-time) account.",
    },
    {
      id: 4,
      q: "Will I get the source code after completion?",
      a: "Absolutely. You get 100% ownership of all source code, assets, and documentation. We push everything to your own GitHub/GitLab repository and sign an NDA before starting.",
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
            openId === faq.id
              ? "border-purple-500/30 bg-purple-500/5"
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
              openId === faq.id ? "max-h-48" : "max-h-0"
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

export const MobileAppDev: React.FC = () => {
  const [activeSubService, setActiveSubService] = useState(0);

  return (
    <section
      id="mobile-app"
      className="relative section-padding bg-secondary-theme/20 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-pink-500/5 blur-[110px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/50 mb-5">
            <Smartphone size={13} className="text-purple-500" />
            Mobile App Development
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Apps That Users{" "}
            <span className="gradient-text">Love & Keep Using</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            We build cross-platform and native mobile apps for iOS and Android
            — from concept to App Store. Smooth, fast, and built to retain users.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <StatsRow />

        {/* ── Sub Services Grid ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 shrink-0">
              <Sparkles size={16} className="text-purple-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
              Types of Apps We Build
            </h3>
          </div>
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

        {/* ── Main 2-Column Layout ── */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start mb-20">

          {/* LEFT COLUMN */}
          <div className="space-y-12">

            {/* Platform Visual */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 shrink-0">
                  <Layers size={16} className="text-blue-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Platform Coverage
                </h3>
              </div>
              <PlatformVisual />
            </div>

            {/* Platform Features */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 shrink-0">
                  <Star size={16} className="text-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Built-In App Features
                </h3>
              </div>
              <PlatformFeaturesGrid />
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
                  <TechStackCard
                    key={stack.category}
                    stack={stack}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 shrink-0">
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  What You Always Get
                </h3>
              </div>
              <KeyBenefits />
            </div>

            {/* Process */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 shrink-0">
                  <Zap size={16} className="text-orange-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Our App Development Process
                </h3>
              </div>
              <ProcessTimeline />
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 shrink-0">
                  <Smartphone size={16} className="text-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-theme">
                  Mobile App FAQs
                </h3>
              </div>
              <MobileAppFAQ />
            </div>
          </div>

          {/* RIGHT: Sticky CTA */}
          <div className="hidden lg:block sticky top-28 space-y-4">
            <CTACard />

            {/* Portfolio Link */}
            <Link href="/portfolio?category=mobile">
              <div className="flex items-center justify-center gap-2 p-4 rounded-xl border border-card-theme bg-card-theme hover:border-purple-500/30 hover:bg-secondary-theme transition-all duration-200 group">
                <ExternalLink
                  size={15}
                  className="text-purple-500 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-bold text-primary-theme">
                  View App Projects →
                </span>
              </div>
            </Link>

            {/* Pricing Note */}
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-800/40">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={14} className="text-purple-600" />
                <span className="text-xs font-bold text-purple-700 dark:text-purple-400">
                  Pricing Starts From
                </span>
              </div>
              <p className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
                ₹90,000
              </p>
              <p className="text-xs text-purple-600/80 dark:text-purple-500 mt-0.5">
                For a basic cross-platform app. Custom quotes available.
              </p>
            </div>
          </div>
        </div>

        {/* ── Mobile CTA ── */}
        <div className="lg:hidden mb-10">
          <CTACard />
        </div>
      </div>
    </section>
  );
};