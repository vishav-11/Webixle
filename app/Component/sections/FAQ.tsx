"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Clock,
  DollarSign,
  Code2,
  Shield,
  Rocket,
  RefreshCw,
  Users,
  ArrowRight,
  Search,
} from "lucide-react";

// ============================================
// DATA
// ============================================

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: MessageCircle },
  { id: "general", label: "General", icon: Users },
  { id: "process", label: "Process", icon: Rocket },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "support", label: "Support", icon: Shield },
];

const FAQS = [
  // ── General ──
  {
    id: 1,
    category: "general",
    question: "What kind of projects do you take on?",
    answer:
      "We work on a wide range of digital projects — from simple landing pages and corporate websites to complex web applications, mobile apps (iOS & Android), e-commerce platforms, SaaS products, and custom enterprise software. If you have an idea, let's talk — we'll tell you honestly if it's something we can deliver to the highest standard.",
    icon: Users,
    linear: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: 2,
    category: "general",
    question: "Are you a freelancer or a full agency?",
    answer:
      "We are a full development studio — not a solo freelancer. Our team includes a Project Manager, UI/UX Designers, Frontend Developers, Backend Developers, Mobile Developers, and a QA Engineer. Every project gets a dedicated team, not just one person juggling multiple clients.",
    icon: Users,
    linear: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    id: 3,
    category: "general",
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We work with clients across India, USA, UK, UAE, Canada, and Australia. All communication is in English, we follow international time zones for meetings, and payments are accepted via bank transfer, PayPal, Wise, and crypto. Remote collaboration is fully in our DNA.",
    icon: Users,
    linear: "from-green-500 to-emerald-500",
    popular: false,
  },

  // ── Process ──
  {
    id: 4,
    category: "process",
    question: "How does the development process work?",
    answer:
      "Our process has 6 clear phases: (1) Discovery & Consultation — we understand your requirements deeply. (2) UI/UX Design — Figma prototypes for your approval. (3) Development — sprint-based development with weekly demos. (4) Testing & QA — thorough bug testing on all devices. (5) Launch & Deployment — smooth go-live with zero downtime. (6) Post-Launch Support — 30 days of free support after delivery.",
    icon: Rocket,
    linear: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 5,
    category: "process",
    question: "How long does it take to build a website or app?",
    answer:
      "Timeline depends on project complexity. A simple landing page takes 3–5 days. A standard business website takes 1–2 weeks. A full web application takes 4–8 weeks. A mobile app typically takes 6–12 weeks. During our free consultation call, we give you a precise timeline based on your specific requirements — no generic estimates.",
    icon: Clock,
    linear: "from-orange-500 to-yellow-500",
    popular: true,
  },
  {
    id: 6,
    category: "process",
    question: "Will I be able to see progress during development?",
    answer:
      "Yes — complete transparency is our promise. You get access to a shared project management board (Notion or Jira) where you can track every task in real-time. We also send weekly progress reports with screenshots and demo links. You'll never be left wondering what's happening.",
    icon: Rocket,
    linear: "from-cyan-500 to-blue-500",
    popular: false,
  },

  // ── Pricing ──
  {
    id: 7,
    category: "pricing",
    question: "How much does it cost to build a website or app?",
    answer:
      "Pricing is always custom-scoped — we don't believe in one-size-fits-all packages. A simple website starts from ₹15,000. A standard business website ranges from ₹25,000–₹60,000. A web application starts from ₹80,000. Mobile apps start from ₹1,20,000. These are starting points — the final quote depends on your features and complexity. Book a free consultation to get an exact quote.",
    icon: DollarSign,
    linear: "from-green-500 to-teal-500",
    popular: true,
  },
  {
    id: 8,
    category: "pricing",
    question: "What is your payment structure?",
    answer:
      "We follow a milestone-based payment model to protect both parties. Typically: 30% upfront to begin the project, 40% after design approval and mid-development milestone, and 30% upon final delivery before handover. For larger projects, we break it into more milestones. We never ask for 100% payment upfront.",
    icon: DollarSign,
    linear: "from-indigo-500 to-violet-500",
    popular: false,
  },
  {
    id: 9,
    category: "pricing",
    question: "Do you offer monthly maintenance plans?",
    answer:
      "Yes. After your free 30-day support period, we offer monthly maintenance plans starting from ₹3,000/month. This covers hosting management, security updates, performance monitoring, minor content changes, and priority bug fixes. Think of it as a retainer for peace of mind.",
    icon: RefreshCw,
    linear: "from-rose-500 to-pink-500",
    popular: false,
  },

  // ── Technical ──
  {
    id: 10,
    category: "technical",
    question: "Which technologies do you use?",
    answer:
      "We use modern, battle-tested technologies: Frontend — Next.js, React, TypeScript, Tailwind CSS. Mobile — Flutter and React Native for cross-platform apps. Backend — Node.js, Express, Python/Django. Databases — PostgreSQL, MongoDB, MySQL, Firebase. Cloud & DevOps — AWS, Vercel, Docker, CI/CD pipelines. We always pick the right tool for your specific use case — not just what's trendy.",
    icon: Code2,
    linear: "from-primary-500 to-blue-500",
    popular: true,
  },
  {
    id: 11,
    category: "technical",
    question: "Will my website be SEO-friendly and fast?",
    answer:
      "Yes — performance and SEO are non-negotiable in our development process. We build with Next.js for server-side rendering, optimize all images (WebP format), implement proper meta tags and structured data, achieve 90+ Google PageSpeed scores, and ensure Core Web Vitals are in the green. A fast, SEO-optimized site is the baseline, not an add-on.",
    icon: Code2,
    linear: "from-green-500 to-cyan-500",
    popular: false,
  },
  {
    id: 12,
    category: "technical",
    question: "Will I own the source code after delivery?",
    answer:
      "100% yes. Upon final payment, you receive complete ownership of all source code, design files, database schemas, and documentation. Everything is pushed to your own GitHub/GitLab repository. We sign an NDA before starting — your intellectual property is fully protected from day one.",
    icon: Shield,
    linear: "from-orange-500 to-amber-500",
    popular: true,
  },

  // ── Support ──
  {
    id: 13,
    category: "support",
    question: "What happens after the project is launched?",
    answer:
      "Every project includes 30 days of free post-launch support. During this period, any bugs, issues, or minor adjustments are handled at no extra cost. After 30 days, you can either handle maintenance in-house (we provide thorough documentation) or sign up for one of our monthly support plans.",
    icon: Shield,
    linear: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 14,
    category: "support",
    question: "Can you maintain or upgrade my existing website?",
    answer:
      "Yes — we frequently take over existing projects. Our process starts with a thorough code audit to understand the current state of the codebase. We then provide a detailed improvement plan covering performance, security, and new features. Whether it's a legacy PHP site or a modern React app, we can help.",
    icon: RefreshCw,
    linear: "from-violet-500 to-purple-500",
    popular: false,
  },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Search Bar ── */
const SearchBar: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => (
  <div className="relative max-w-xl mx-auto">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <Search size={18} className="text-tertiary-theme" />
    </div>
    <input
      type="text"
      placeholder="Search your question..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-card-theme border border-card-theme text-primary-theme placeholder:text-tertiary-theme text-sm font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 shadow-(--shadow-elevation-sm)"
    />
    {value && (
      <button
        onClick={() => onChange("")}
        className="absolute inset-y-0 right-4 flex items-center text-tertiary-theme hover:text-primary-theme transition-colors"
      >
        ✕
      </button>
    )}
  </div>
);

/* ── Category Filter ── */
const CategoryFilter: React.FC<{
  activeCategory: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}> = ({ activeCategory, onChange, counts }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {FAQ_CATEGORIES.map((cat) => {
      const Icon = cat.icon;
      const isActive = activeCategory === cat.id;
      return (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
            isActive
              ? "bg-primary-600 text-white shadow-(--shadow-glow)"
              : "bg-card-theme border border-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30"
          }`}
        >
          <Icon size={14} />
          {cat.label}
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
              isActive
                ? "bg-white/20 text-white"
                : "bg-secondary-theme text-tertiary-theme"
            }`}
          >
            {counts[cat.id] || 0}
          </span>
        </button>
      );
    })}
  </div>
);

/* ── Single FAQ Item ── */
const FAQItem: React.FC<{
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ faq, isOpen, onToggle, index }) => {
  const Icon = faq.icon;

  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 overflow-hidden animate-fade-up ${
        isOpen
          ? "border-primary-500/40 bg-linear-to-br from-primary-500/5 to-accent-500/5 shadow-(--shadow-elevation-md)"
          : "border-card-theme bg-card-theme hover:border-primary-500/20"
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Question Row */}
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${faq.linear} shrink-0 mt-0.5 shadow-sm`}
        >
          <Icon size={18} className="text-white" />
        </div>

        {/* Question + Popular Badge */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap">
            <span
              className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                isOpen ? "text-primary-500" : "text-primary-theme group-hover:text-primary-500"
              }`}
            >
              {faq.question}
            </span>
            {faq.popular && (
              <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40 mt-0.5">
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Chevron */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg border border-card-theme bg-secondary-theme shrink-0 transition-all duration-300 ${
            isOpen
              ? "border-primary-500/30 bg-primary-50 dark:bg-primary-950/40 rotate-180"
              : "group-hover:border-primary-500/30"
          }`}
        >
          <ChevronDown
            size={16}
            className={isOpen ? "text-primary-500" : "text-secondary-theme"}
          />
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[calc(1.25rem+2.5rem+1rem)] sm:pl-[calc(1.5rem+2.5rem+1rem)]">
          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-primary-500/20 via-accent-500/20 to-transparent mb-4" />
          <p className="text-secondary-theme text-sm sm:text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Empty State ── */
const EmptyState: React.FC<{ query: string }> = ({ query }) => (
  <div className="text-center py-16">
    <div className="text-5xl mb-4">🔍</div>
    <h3 className="text-lg font-bold text-primary-theme mb-2">
      No results for "{query}"
    </h3>
    <p className="text-secondary-theme text-sm max-w-sm mx-auto">
      We couldn't find an FAQ matching your search. Try a different keyword or
      ask us directly.
    </p>
    <a
      href="/contact"
      className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95"
    >
      Ask Us Directly
      <ArrowRight size={14} />
    </a>
  </div>
);

/* ── Still Have Questions CTA ── */
const StillHaveQuestions: React.FC = () => (
  <div className="relative mt-14 rounded-2xl overflow-hidden border border-card-theme">
    {/* Background */}
    <div className="absolute inset-0 bg-linear-to-br from-primary-600/10 to-accent-600/10" />
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          "radial-linear(circle at 2px 2px, currentColor 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    />

    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-10">
      {/* Left */}
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 shadow-(--shadow-glow) shrink-0">
          <MessageCircle size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-1">
            Still have questions?
          </h3>
          <p className="text-secondary-theme text-sm sm:text-base">
            Can't find what you're looking for? We'd love to chat and clear
            things up.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          💬 WhatsApp Chat
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 whitespace-nowrap shadow-(--shadow-glow)"
        >
          Book Free Call
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Count per category
  const counts = FAQ_CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] =
      cat.id === "all"
        ? FAQS.length
        : FAQS.filter((f) => f.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Popular FAQs (sidebar)
  const popularFaqs = FAQS.filter((f) => f.popular);

  return (
    <section className="relative section-padding bg-secondary-theme/20 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-in">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/50 mb-4">
            <MessageCircle size={13} className="text-primary-500" />
            FAQ
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Questions We Get{" "}
            <span className="linear-text">All The Time</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto mb-8">
            Everything you need to know before starting a project with us.
            Honest, clear answers — no fluff.
          </p>

          {/* Search */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* ── Category Filter ── */}
        {!searchQuery && (
          <div className="mb-10 animate-in-delay-1">
            <CategoryFilter
              activeCategory={activeCategory}
              onChange={(id) => {
                setActiveCategory(id);
                setOpenId(null);
              }}
              counts={counts}
            />
          </div>
        )}

        {/* ── Main Layout: FAQ List + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 max-w-6xl mx-auto items-start">

          {/* ── FAQ List ── */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <EmptyState query={searchQuery} />
            ) : (
              filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                  index={index}
                />
              ))
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden lg:block space-y-4 sticky top-24">
            {/* Popular Questions */}
            <div className="p-5 rounded-2xl bg-card-theme border border-card-theme">
              <h4 className="text-sm font-bold text-primary-theme mb-4 flex items-center gap-2">
                <span className="text-orange-500">🔥</span>
                Most Asked Questions
              </h4>
              <div className="space-y-2">
                {popularFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => {
                      setOpenId(faq.id);
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className={`w-full text-left text-xs font-medium px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      openId === faq.id
                        ? "bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50"
                        : "text-secondary-theme hover:text-primary-theme hover:bg-secondary-theme"
                    }`}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-linear-to-br from-primary-600 to-accent-600 overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-linear(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="relative z-10">
                <div className="text-2xl mb-3">🚀</div>
                <h4 className="text-sm font-bold text-white mb-2">
                  Ready to start?
                </h4>
                <p className="text-xs text-white/70 mb-4">
                  Book a free 30-min consultation call and let's discuss your
                  project.
                </p>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-primary-700 font-bold text-xs hover:bg-primary-50 transition-all duration-200 active:scale-95"
                >
                  Book Free Call
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 rounded-2xl bg-card-theme border border-card-theme flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 shrink-0">
                <Clock size={18} className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-theme">
                  Fast Response
                </p>
                <p className="text-xs text-secondary-theme">
                  We reply within 2–4 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Still Have Questions ── */}
        <StillHaveQuestions />
      </div>
    </section>
  );
};