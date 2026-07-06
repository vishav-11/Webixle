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
  { id: "all", label: "All", icon: MessageCircle },
  { id: "general", label: "General", icon: Users },
  { id: "process", label: "Process", icon: Rocket },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "support", label: "Support", icon: Shield },
];

const FAQS = [
  {
    id: 1,
    category: "general",
    question: "What kind of projects do you take on?",
    answer:
      "We work on landing pages, corporate websites, web applications, mobile apps (iOS & Android), e-commerce platforms, SaaS products, and custom enterprise software.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: 2,
    category: "general",
    question: "Are you a freelancer or a full agency?",
    answer:
      "We are a full development studio. Our team includes a Project Manager, UI/UX Designers, Frontend & Backend Developers, Mobile Developers, and a QA Engineer.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    id: 3,
    category: "general",
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We work with clients across India, USA, UK, UAE, Canada, and Australia. Payments accepted via bank transfer, PayPal, Wise, and crypto.",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
  {
    id: 4,
    category: "process",
    question: "How does the development process work?",
    answer:
      "6 clear phases: Discovery → UI/UX Design (Figma) → Sprint-based Development → Testing & QA → Launch → 30-day Post-Launch Support.",
    icon: Rocket,
    gradient: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 5,
    category: "process",
    question: "How long does it take to build a website or app?",
    answer:
      "Landing page: 3–5 days. Business website: 1–2 weeks. Web app: 4–8 weeks. Mobile app: 6–12 weeks. We give a precise timeline on your free consultation call.",
    icon: Clock,
    gradient: "from-orange-500 to-yellow-500",
    popular: true,
  },
  {
    id: 6,
    category: "process",
    question: "Will I be able to see progress during development?",
    answer:
      "Yes. You get access to a shared project board (Notion/Jira) and weekly progress reports with screenshots and demo links.",
    icon: Rocket,
    gradient: "from-cyan-500 to-blue-500",
    popular: false,
  },
  {
    id: 7,
    category: "pricing",
    question: "How much does it cost to build a website or app?",
    answer:
      "Simple website from ₹15,000. Business website ₹25,000–₹60,000. Web app from ₹80,000. Mobile app from ₹1,20,000. Book a free call for an exact quote.",
    icon: DollarSign,
    gradient: "from-green-500 to-teal-500",
    popular: true,
  },
  {
    id: 8,
    category: "pricing",
    question: "What is your payment structure?",
    answer:
      "Milestone-based: 30% upfront, 40% at mid-milestone, 30% on final delivery. We never ask for 100% payment upfront.",
    icon: DollarSign,
    gradient: "from-indigo-500 to-violet-500",
    popular: false,
  },
  {
    id: 9,
    category: "pricing",
    question: "Do you offer monthly maintenance plans?",
    answer:
      "Yes, starting from ₹3,000/month after the free 30-day support. Covers hosting, security updates, minor changes, and priority bug fixes.",
    icon: RefreshCw,
    gradient: "from-rose-500 to-pink-500",
    popular: false,
  },
  {
    id: 10,
    category: "technical",
    question: "Which technologies do you use?",
    answer:
      "Frontend: Next.js, React, TypeScript, Tailwind. Mobile: Flutter, React Native. Backend: Node.js, Python. DB: PostgreSQL, MongoDB. Cloud: AWS, Vercel.",
    icon: Code2,
    gradient: "from-primary-500 to-blue-500",
    popular: true,
  },
  {
    id: 11,
    category: "technical",
    question: "Will my website be SEO-friendly and fast?",
    answer:
      "Yes — 90+ PageSpeed scores, server-side rendering with Next.js, WebP images, proper meta tags, structured data, and green Core Web Vitals are standard.",
    icon: Code2,
    gradient: "from-green-500 to-cyan-500",
    popular: false,
  },
  {
    id: 12,
    category: "technical",
    question: "Will I own the source code after delivery?",
    answer:
      "100% yes. Full ownership of source code, design files, and documentation pushed to your own repo. NDA signed before we start.",
    icon: Shield,
    gradient: "from-orange-500 to-amber-500",
    popular: true,
  },
  {
    id: 13,
    category: "support",
    question: "What happens after the project is launched?",
    answer:
      "30 days of free post-launch support included. Any bugs or minor adjustments handled at no cost. After that, monthly plans are available.",
    icon: Shield,
    gradient: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 14,
    category: "support",
    question: "Can you maintain or upgrade my existing website?",
    answer:
      "Yes — we start with a code audit, then provide an improvement plan covering performance, security, and new features for any stack.",
    icon: RefreshCw,
    gradient: "from-violet-500 to-purple-500",
    popular: false,
  },
];

// ============================================
// SEARCH BAR
// ============================================

const SearchBar: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => (
  <div className="relative max-w-xl mx-auto">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <Search size={16} className="text-tertiary-theme" />
    </div>
    <input
      type="text"
      placeholder="Search questions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-10 py-3 rounded-xl
        bg-card-theme border border-card-theme
        text-primary-theme placeholder:text-tertiary-theme
        text-sm font-medium focus:outline-none
        focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
        transition-all duration-200"
    />
    {value && (
      <button
        onClick={() => onChange("")}
        className="absolute inset-y-0 right-4 flex items-center
          text-tertiary-theme hover:text-primary-theme transition-colors"
      >
        ✕
      </button>
    )}
  </div>
);

// ============================================
// CATEGORY FILTER
// ============================================

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
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold
            transition-all duration-200 border
            ${
              isActive
                ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20"
                : "bg-card-theme border-card-theme text-secondary-theme hover:border-primary-500/30 hover:text-primary-theme"
            }`}
        >
          <Icon size={13} className={isActive ? "text-white" : "text-tertiary-theme"} />
          {cat.label}
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
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

// ============================================
// FAQ ITEM
// ============================================

const FAQItem: React.FC<{
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ faq, isOpen, onToggle, index }) => {
  const Icon = faq.icon;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${
          isOpen
            ? "border-primary-500/30 bg-gradient-to-br from-primary-500/5 to-accent-500/5 shadow-md"
            : "border-card-theme bg-card-theme hover:border-primary-500/20"
        }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Question Row */}
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left"
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-lg
            bg-gradient-to-br ${faq.gradient} shrink-0 mt-0.5`}
        >
          <Icon size={16} className="text-white" />
        </div>

        {/* Question */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm sm:text-base font-bold leading-snug transition-colors
                ${isOpen ? "text-primary-500" : "text-primary-theme group-hover:text-primary-500"}`}
            >
              {faq.question}
            </span>
            {faq.popular && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full
                  bg-orange-500/10 text-orange-500 border border-orange-500/20 shrink-0"
              >
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Chevron */}
        <div
          className={`flex items-center justify-center w-7 h-7 rounded-lg border shrink-0
            transition-all duration-300
            ${
              isOpen
                ? "border-primary-500/30 bg-primary-500/10 rotate-180"
                : "border-card-theme bg-secondary-theme"
            }`}
        >
          <ChevronDown
            size={14}
            className={isOpen ? "text-primary-500" : "text-secondary-theme"}
          />
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[calc(1rem+2.25rem+0.75rem)] sm:pl-[calc(1.25rem+2.25rem+0.75rem)]">
          <div className="h-px bg-card-theme mb-3" />
          <p className="text-secondary-theme text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// EMPTY STATE
// ============================================

const EmptyState: React.FC<{ query: string }> = ({ query }) => (
  <div className="text-center py-14">
    <div className="text-4xl mb-3">🔍</div>
    <h3 className="text-base font-bold text-primary-theme mb-2">
      No results for "{query}"
    </h3>
    <p className="text-secondary-theme text-sm max-w-xs mx-auto mb-5">
      Try a different keyword or ask us directly.
    </p>
    <a
      href="/contact"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
        bg-primary-600 text-white font-bold text-sm
        hover:bg-primary-700 transition-all duration-200 active:scale-95"
    >
      Ask Us Directly
      <ArrowRight size={13} />
    </a>
  </div>
);

// ============================================
// STILL HAVE QUESTIONS
// ============================================

const StillHaveQuestions: React.FC = () => (
  <div className="relative mt-12 rounded-2xl overflow-hidden border border-card-theme">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />
    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl
            bg-gradient-to-br from-primary-500 to-accent-500 shrink-0"
        >
          <MessageCircle size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-primary-theme mb-0.5">
            Still have questions?
          </h3>
          <p className="text-secondary-theme text-sm">
            We'd love to chat and clear things up.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
            bg-green-500 text-white font-bold text-sm
            hover:bg-green-600 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          💬 WhatsApp
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
            bg-primary-600 text-white font-bold text-sm
            hover:bg-primary-700 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          Book Free Call
          <ArrowRight size={13} />
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

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const counts = FAQ_CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] =
      cat.id === "all"
        ? FAQS.length
        : FAQS.filter((f) => f.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>);

  const popularFaqs = FAQS.filter((f) => f.popular);

  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-10 animate-in">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-4
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <MessageCircle size={12} className="text-primary-500" />
            FAQ
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
              text-primary-theme leading-[1.1] mb-3"
          >
            Questions We Get{" "}
            <span className="gradient-text">All The Time</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto mb-7">
            Honest, clear answers — no fluff.
          </p>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* ── Category Filter ── */}
        {!searchQuery && (
          <div className="mb-8 animate-in-delay-1">
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

        {/* ── Main Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 max-w-5xl mx-auto items-start">

          {/* FAQ List */}
          <div className="space-y-2.5">
            {filteredFaqs.length === 0 ? (
              <EmptyState query={searchQuery} />
            ) : (
              filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  index={index}
                />
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-3 sticky top-24">

            {/* Popular Questions */}
            <div className="p-4 rounded-2xl bg-card-theme border border-card-theme">
              <h4 className="text-xs font-bold text-primary-theme mb-3 flex items-center gap-1.5">
                <span>🔥</span> Most Asked
              </h4>
              <div className="space-y-1.5">
                {popularFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => {
                      setOpenId(faq.id);
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className={`w-full text-left text-xs font-medium px-3 py-2 rounded-lg
                      transition-all duration-200
                      ${
                        openId === faq.id
                          ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                          : "text-secondary-theme hover:text-primary-theme hover:bg-secondary-theme"
                      }`}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden relative">
              <div className="relative z-10">
                <div className="text-xl mb-2">🚀</div>
                <h4 className="text-sm font-bold text-white mb-1">Ready to start?</h4>
                <p className="text-xs text-white/70 mb-3">
                  Free 30-min consultation — no commitment.
                </p>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg
                    bg-white text-primary-700 font-bold text-xs
                    hover:bg-primary-50 transition-all duration-200 active:scale-95"
                >
                  Book Free Call
                  <ArrowRight size={11} />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-3.5 rounded-2xl bg-card-theme border border-card-theme flex items-center gap-3">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg
                  bg-green-500/10 shrink-0"
              >
                <Clock size={16} className="text-green-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary-theme">Fast Response</p>
                <p className="text-[11px] text-tertiary-theme">Reply within 2–4 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <StillHaveQuestions />
      </div>
    </section>
  );
};

export default FAQ;