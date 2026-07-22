"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  MessageCircle,
  Clock,
  Code2,
  Shield,
  Rocket,
  RefreshCw,
  Users,
  ArrowRight,
  Search,
  Zap,
} from "lucide-react";

// ============================================
// SEO STRUCTURED DATA (JSON-LD)
// ============================================

const FAQStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// ============================================
// DATA
// ============================================

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: MessageCircle },
  { id: "general", label: "General", icon: Users },
  { id: "process", label: "Process", icon: Rocket },
  { id: "technical", label: "Technical", icon: Code2 },
  { id: "support", label: "Support", icon: Shield },
];

const FAQS = [
  {
    id: 1,
    category: "general",
    question: "What kind of projects does Webixle take on?",
    answer:
      "We work on a wide range of digital products — landing pages, corporate websites, web applications, mobile apps (iOS & Android), e-commerce platforms, SaaS products, and custom enterprise software. Whether you're a startup or an established business, we tailor our approach to your exact goals.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: 2,
    category: "general",
    question: "Is Webixle a freelancer or a full agency?",
    answer:
      "Webixle is a full-service digital product studio — not a freelancer. Our in-house team includes a Project Manager, UI/UX Designers, Frontend & Backend Developers, Mobile Developers, and a dedicated QA Engineer. You get a complete team, not a single point of failure.",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    id: 3,
    category: "general",
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We actively work with clients across India, USA, UK, UAE, Canada, and Australia. Our communication is async-friendly, and we accommodate different time zones. Payments are accepted via bank transfer, PayPal, Wise, and crypto.",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
  {
    id: 4,
    category: "general",
    question: "What industries does Webixle specialize in?",
    answer:
      "We've built products across fintech, edtech, healthtech, real estate, e-commerce, logistics, and marketing. Our process is industry-agnostic — we learn your domain deeply before we write a single line of code.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    popular: false,
  },
  {
    id: 5,
    category: "process",
    question: "How does Webixle's development process work?",
    answer:
      "We follow 6 structured phases: Discovery & Requirements → UI/UX Design in Figma → Sprint-based Agile Development → Rigorous Testing & QA → Launch & Deployment → 30-day Post-Launch Support. Every phase has clear deliverables and your sign-off before we proceed.",
    icon: Rocket,
    gradient: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 6,
    category: "process",
    question: "How long does it take to build a website or app?",
    answer:
      "Timelines vary by scope — a landing page can be live in 3–5 days, a business website in 1–2 weeks, a web application in 4–8 weeks, and a full mobile app in 6–12 weeks. We provide a precise project timeline on your free consultation call, so you always know what to expect.",
    icon: Clock,
    gradient: "from-orange-500 to-yellow-500",
    popular: true,
  },
  {
    id: 7,
    category: "process",
    question: "Will I be able to track progress during development?",
    answer:
      "Yes, complete transparency is built into our process. You get access to a shared project board (Notion or Jira), weekly progress updates with screenshots, and live demo links at every milestone. You're never left wondering what's happening.",
    icon: Rocket,
    gradient: "from-cyan-500 to-blue-500",
    popular: false,
  },
  {
    id: 8,
    category: "process",
    question: "Do you sign NDAs before starting a project?",
    answer:
      "Yes — we sign a Non-Disclosure Agreement before any project discussion begins. Your ideas, business logic, and data are always protected. Confidentiality is non-negotiable for us.",
    icon: Shield,
    gradient: "from-indigo-500 to-violet-500",
    popular: false,
  },
  {
    id: 9,
    category: "technical",
    question: "What technologies does Webixle use?",
    answer:
      "We use modern, production-proven stacks. Frontend: Next.js, React, TypeScript, Tailwind CSS. Mobile: Flutter, React Native. Backend: Node.js, Python (FastAPI/Django). Databases: PostgreSQL, MongoDB. Cloud & DevOps: AWS, Vercel, Docker, CI/CD pipelines.",
    icon: Code2,
    gradient: "from-primary-500 to-blue-500",
    popular: true,
  },
  {
    id: 10,
    category: "technical",
    question: "Will my website be SEO-friendly and performant?",
    answer:
      "Yes — performance and SEO are built in by default, not bolted on later. We target 90+ PageSpeed scores, use server-side rendering with Next.js, serve WebP images, implement structured data (JSON-LD), proper meta tags, canonical URLs, and ensure green Core Web Vitals across all devices.",
    icon: Code2,
    gradient: "from-green-500 to-cyan-500",
    popular: true,
  },
  {
    id: 11,
    category: "technical",
    question: "Will I own the source code after delivery?",
    answer:
      "100% yes. Full ownership of source code, Figma design files, and all documentation is transferred to you on final delivery. Code is pushed directly to your own Git repository. You own everything — we retain nothing.",
    icon: Shield,
    gradient: "from-orange-500 to-amber-500",
    popular: true,
  },
  {
    id: 12,
    category: "technical",
    question: "Do you build custom designs or use templates?",
    answer:
      "Everything we build is custom-designed from scratch in Figma, tailored to your brand identity and user goals. We never use generic templates. Your product will look and feel completely unique.",
    icon: Code2,
    gradient: "from-rose-500 to-pink-500",
    popular: false,
  },
  {
    id: 13,
    category: "support",
    question: "What happens after the project is launched?",
    answer:
      "Every project includes 30 days of free post-launch support. Any bugs, edge cases, or minor adjustments are handled at no extra cost. After that, flexible monthly maintenance plans are available to keep your product secure and up to date.",
    icon: Shield,
    gradient: "from-primary-500 to-accent-500",
    popular: true,
  },
  {
    id: 14,
    category: "support",
    question: "Can Webixle maintain or upgrade my existing website?",
    answer:
      "Yes. We start with a thorough code and performance audit, then deliver a prioritized improvement roadmap covering speed, security, UX, and new features. We work with any modern tech stack — not just projects we built ourselves.",
    icon: RefreshCw,
    gradient: "from-violet-500 to-purple-500",
    popular: false,
  },
  {
    id: 15,
    category: "support",
    question: "How quickly does Webixle respond to support queries?",
    answer:
      "During active projects, response time is under 2 hours on business days. For post-launch support clients, we respond within 2–4 hours. Critical production issues are treated as emergencies and handled immediately.",
    icon: Clock,
    gradient: "from-teal-500 to-green-500",
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
      type="search"
      placeholder="Search questions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search frequently asked questions"
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
        aria-label="Clear search"
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
  <nav aria-label="FAQ categories">
    <div className="flex flex-wrap justify-center gap-2">
      {FAQ_CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            aria-pressed={isActive}
            aria-label={`Filter by ${cat.label}`}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold
              transition-all duration-200 border
              ${
                isActive
                  ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20"
                  : "bg-card-theme border-card-theme text-secondary-theme hover:border-primary-500/30 hover:text-primary-theme"
              }`}
          >
            <Icon
              size={13}
              className={isActive ? "text-white" : "text-tertiary-theme"}
              aria-hidden="true"
            />
            {cat.label}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-secondary-theme text-tertiary-theme"
              }`}
              aria-label={`${counts[cat.id] || 0} questions`}
            >
              {counts[cat.id] || 0}
            </span>
          </button>
        );
      })}
    </div>
  </nav>
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
  const answerId = `faq-answer-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

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
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left group"
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-lg
            bg-gradient-to-br ${faq.gradient} shrink-0 mt-0.5`}
          aria-hidden="true"
        >
          <Icon size={16} className="text-white" />
        </div>

        {/* Question */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm sm:text-base font-bold leading-snug transition-colors
                ${
                  isOpen
                    ? "text-primary-500"
                    : "text-primary-theme group-hover:text-primary-500"
                }`}
            >
              {faq.question}
            </span>
            {faq.popular && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full
                  bg-orange-500/10 text-orange-500 border border-orange-500/20 shrink-0"
                aria-label="Popular question"
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
          aria-hidden="true"
        >
          <ChevronDown
            size={14}
            className={isOpen ? "text-primary-500" : "text-secondary-theme"}
          />
        </div>
      </button>

      {/* Answer */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[calc(1rem+2.25rem+0.75rem)] sm:pl-[calc(1.25rem+2.25rem+0.75rem)]">
          <div className="h-px bg-card-theme mb-3" aria-hidden="true" />
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
  <div className="text-center py-14" role="status" aria-live="polite">
    <div className="text-4xl mb-3" aria-hidden="true">
      🔍
    </div>
    <h3 className="text-base font-bold text-primary-theme mb-2">
      No results for &quot;{query}&quot;
    </h3>
    <p className="text-secondary-theme text-sm max-w-xs mx-auto mb-5">
      Try a different keyword or reach out — we're happy to answer directly.
    </p>
    <a
      href="https://webixle.com/contact"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
        bg-primary-600 text-white font-bold text-sm
        hover:bg-primary-700 transition-all duration-200 active:scale-95"
    >
      Ask Us Directly
      <ArrowRight size={13} aria-hidden="true" />
    </a>
  </div>
);

// ============================================
// STILL HAVE QUESTIONS
// ============================================

const StillHaveQuestions: React.FC = () => (
  <div className="relative mt-12 rounded-2xl overflow-hidden border border-card-theme">
    <div
      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5"
      aria-hidden="true"
    />
    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl
            bg-gradient-to-br from-primary-500 to-accent-500 shrink-0"
          aria-hidden="true"
        >
          <MessageCircle size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-primary-theme mb-0.5">
            Still have questions?
          </h3>
          <p className="text-secondary-theme text-sm">
            We'd love to chat and clear everything up.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Webixle on WhatsApp"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
            bg-green-500 text-white font-bold text-sm
            hover:bg-green-600 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          💬 WhatsApp Us
        </a>
        <a
          href="https://webixle.com/contact"
          aria-label="Book a free consultation call with Webixle"
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
            bg-primary-600 text-white font-bold text-sm
            hover:bg-primary-700 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          Book Free Call
          <ArrowRight size={13} aria-hidden="true" />
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

  const filteredFaqs = useMemo(
    () =>
      FAQS.filter((faq) => {
        const matchesCategory =
          activeCategory === "all" || faq.category === activeCategory;
        const matchesSearch =
          searchQuery === "" ||
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [activeCategory, searchQuery]
  );

  const counts = useMemo(
    () =>
      FAQ_CATEGORIES.reduce((acc, cat) => {
        acc[cat.id] =
          cat.id === "all"
            ? FAQS.length
            : FAQS.filter((f) => f.category === cat.id).length;
        return acc;
      }, {} as Record<string, number>),
    []
  );

  const popularFaqs = useMemo(() => FAQS.filter((f) => f.popular), []);

  return (
    <>
      {/* SEO: JSON-LD Structured Data */}
      <FAQStructuredData />

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative section-padding bg-mesh overflow-hidden"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Background Blobs */}
        <div
          className="absolute top-0 left-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">

          {/* ── Header ── */}
          <header className="max-w-2xl mx-auto text-center mb-10 animate-in">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                text-xs font-bold uppercase tracking-widest mb-4
                bg-card-theme border border-card-theme text-secondary-theme"
              aria-hidden="true"
            >
              <MessageCircle size={12} className="text-primary-500" />
              FAQ
            </div>

            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight
                text-primary-theme leading-[1.1] mb-3"
            >
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>

            <p className="text-sm sm:text-base text-secondary-theme max-w-xl mx-auto mb-2">
              Everything you want to know about working with{" "}
              <strong className="text-primary-theme font-semibold">
                Webixle
              </strong>{" "}
              — honest answers, no fluff.
            </p>

            <p className="text-xs text-tertiary-theme mb-7">
              Can't find your answer?{" "}
              <a
                href="https://webixle.com/contact"
                className="text-primary-500 hover:underline font-medium"
              >
                Just ask us directly →
              </a>
            </p>

            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </header>

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

          {/* ── Results Count (for search) ── */}
          {searchQuery && filteredFaqs.length > 0 && (
            <p
              className="text-center text-xs text-tertiary-theme mb-5"
              aria-live="polite"
              role="status"
            >
              Showing{" "}
              <span className="font-semibold text-primary-theme">
                {filteredFaqs.length}
              </span>{" "}
              result{filteredFaqs.length !== 1 ? "s" : ""} for &quot;
              {searchQuery}&quot;
            </p>
          )}

          {/* ── Main Layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 max-w-5xl mx-auto items-start">

            {/* FAQ Accordion List */}
            <div
              className="space-y-2.5"
              role="list"
              aria-label="Frequently asked questions"
            >
              {filteredFaqs.length === 0 ? (
                <EmptyState query={searchQuery} />
              ) : (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    role="listitem"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <meta itemProp="name" content={faq.question} />
                    <FAQItem
                      faq={faq}
                      isOpen={openId === faq.id}
                      onToggle={() =>
                        setOpenId(openId === faq.id ? null : faq.id)
                      }
                      index={index}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside
              className="hidden lg:block space-y-3 sticky top-24"
              aria-label="FAQ sidebar"
            >
              {/* Popular Questions */}
              <div className="p-4 rounded-2xl bg-card-theme border border-card-theme">
                <h3 className="text-xs font-bold text-primary-theme mb-3 flex items-center gap-1.5">
                  <span aria-hidden="true">🔥</span> Most Asked
                </h3>
                <nav aria-label="Popular questions">
                  <div className="space-y-1.5">
                    {popularFaqs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          setOpenId(faq.id);
                          setActiveCategory("all");
                          setSearchQuery("");
                        }}
                        aria-current={openId === faq.id ? "true" : undefined}
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
                </nav>
              </div>

              {/* CTA Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden relative">
                <div className="relative z-10">
                  <div className="text-xl mb-2" aria-hidden="true">
                    🚀
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Ready to build something great?
                  </h3>
                  <p className="text-xs text-white/70 mb-3">
                    Free 30-min strategy call — zero commitment, full clarity.
                  </p>
                  <a
                    href="https://webixle.com/contact"
                    aria-label="Book a free consultation call with Webixle"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg
                      bg-white text-primary-700 font-bold text-xs
                      hover:bg-primary-50 transition-all duration-200 active:scale-95"
                  >
                    Book Free Call
                    <ArrowRight size={11} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Response Badge */}
              <div className="p-3.5 rounded-2xl bg-card-theme border border-card-theme flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg
                    bg-green-500/10 shrink-0"
                  aria-hidden="true"
                >
                  <Clock size={16} className="text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-theme">
                    Fast Response
                  </p>
                  <p className="text-[11px] text-tertiary-theme">
                    We reply within 2–4 hours
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-3.5 rounded-2xl bg-card-theme border border-card-theme flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg
                    bg-primary-500/10 shrink-0"
                  aria-hidden="true"
                >
                  <Shield size={16} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-theme">
                    NDA Signed First
                  </p>
                  <p className="text-[11px] text-tertiary-theme">
                    Your ideas stay confidential
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Still Have Questions */}
          <StillHaveQuestions />
        </div>
      </section>
    </>
  );
};

export default FAQ;