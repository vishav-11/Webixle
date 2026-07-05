"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// ============================================
// DATA
// ============================================

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO",
    company: "TechVenture India",
    avatar: "RS",
    avatarlinear: "from-blue-500 to-cyan-500",
    rating: 5,
    review:
      "Working with this team was an absolute game-changer for our business. They delivered our e-commerce platform 3 days ahead of schedule and the quality was beyond our expectations. The attention to detail in both design and code is remarkable. Our sales increased by 40% within the first month of launch.",
    project: "E-Commerce Platform",
    projectEmoji: "🛍️",
    highlight: "Sales increased by 40%",
    highlightColor: "text-green-500",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Product Manager",
    company: "HealthFirst App",
    avatar: "PM",
    avatarlinear: "from-purple-500 to-pink-500",
    rating: 5,
    review:
      "Our doctor booking app was a complex project with real-time video calls, payment integration, and a dual-panel dashboard. They handled every technical challenge with ease. Communication was transparent throughout, and they delivered exactly what we envisioned. Highly recommend for any mobile app project.",
    project: "Mobile App Development",
    projectEmoji: "🏥",
    highlight: "Zero bugs on launch day",
    highlightColor: "text-blue-500",
    featured: true,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Founder",
    company: "EduLearn Platform",
    avatar: "JW",
    avatarlinear: "from-green-500 to-emerald-500",
    rating: 5,
    review:
      "I had a very specific vision for my learning management system and they executed it perfectly. The codebase is clean, well-documented, and scalable. We've grown from 500 to 8,000 students in 6 months without a single downtime. Best investment I've made for my startup.",
    project: "LMS Web Platform",
    projectEmoji: "🎓",
    highlight: "500 → 8,000 students",
    highlightColor: "text-primary-500",
    featured: false,
  },
  {
    id: 4,
    name: "Sarah Kim",
    role: "Marketing Director",
    company: "FoodZone Chain",
    avatar: "SK",
    avatarlinear: "from-orange-500 to-yellow-500",
    rating: 5,
    review:
      "The UI/UX design they created for our restaurant app was stunning. Every screen was thoughtfully designed with the end user in mind. Our app store rating jumped from 3.2 to 4.8 after the redesign. The design system they provided makes it easy for our in-house team to maintain consistency.",
    project: "UI/UX Design",
    projectEmoji: "🍔",
    highlight: "Rating: 3.2 → 4.8 ⭐",
    highlightColor: "text-yellow-500",
    featured: false,
  },
  {
    id: 5,
    name: "Arjun Patel",
    role: "CTO",
    company: "FinSmart Solutions",
    avatar: "AP",
    avatarlinear: "from-indigo-500 to-violet-500",
    rating: 5,
    review:
      "We hired them to build our fintech dashboard and they exceeded every metric. The performance optimization was exceptional — page loads under 1 second, real-time data updates, and bank-grade security implementation. They also provided thorough documentation which made our internal team's life much easier.",
    project: "Finance Dashboard",
    projectEmoji: "📊",
    highlight: "Page load under 1 second",
    highlightColor: "text-accent-500",
    featured: false,
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "Operations Head",
    company: "LogiTrack Corp",
    avatar: "EC",
    avatarlinear: "from-rose-500 to-pink-500",
    rating: 5,
    review:
      "Our logistics tracking system needed to handle thousands of real-time data points. They built a robust, scalable solution that works flawlessly. The post-launch support has been exceptional — any issue we report is resolved within hours. Truly a reliable long-term tech partner.",
    project: "Logistics System",
    projectEmoji: "🚛",
    highlight: "Issues resolved in hours",
    highlightColor: "text-rose-500",
    featured: false,
  },
];

const TRUST_STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "80+", label: "Happy Clients" },
];

const PLATFORM_RATINGS = [
  { platform: "Google", rating: "4.9", reviews: "120+", emoji: "🌐" },
  { platform: "Clutch", rating: "4.8", reviews: "45+", emoji: "🏆" },
  { platform: "Upwork", rating: "5.0", reviews: "60+", emoji: "💼" },
];

// ============================================
// SUB COMPONENTS
// ============================================

/* ── Star Rating ── */
const StarRating: React.FC<{ rating: number; size?: number }> = ({
  rating,
  size = 16,
}) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        className={
          i < rating ? "text-yellow-400" : "text-gray-200 dark:text-gray-700"
        }
        fill={i < rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

/* ── Avatar ── */
const Avatar: React.FC<{
  initials: string;
  linear: string;
  size?: "sm" | "md" | "lg";
}> = ({ initials, linear, size = "md" }) => {
  const sizeClasses = {
    sm: "w-9 h-9 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  return (
    <div
      className={`rounded-full bg-linear-to-br ${linear} ${sizeClasses[size]} flex items-center justify-center text-white font-bold shrink-0 ring-2 ring-white/20`}
    >
      {initials}
    </div>
  );
};

/* ── Featured Testimonial Card ── */
const FeaturedCard: React.FC<{ testimonial: (typeof TESTIMONIALS)[0] }> = ({
  testimonial,
}) => (
  <div className="relative p-7 sm:p-9 rounded-2xl bg-linear-to-br from-primary-600 to-accent-600 overflow-hidden group">
    {/* Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "radial-linear(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    />

    {/* Glow Orbs */}
    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />

    {/* Content */}
    <div className="relative z-10">
      {/* Quote Icon */}
      <div className="flex items-start justify-between mb-6">
        <Quote size={40} className="text-white/30" fill="currentColor" />
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-bold text-white">Verified Client</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-medium">
        "{testimonial.review}"
      </p>

      {/* Highlight Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
        <span className="text-lg">{testimonial.projectEmoji}</span>
        <span className="text-sm font-bold text-white">
          {testimonial.highlight}
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20 mb-6" />

      {/* Author + Rating */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            initials={testimonial.avatar}
            linear={testimonial.avatarlinear}
            size="md"
          />
          <div>
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-white/70">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <StarRating rating={testimonial.rating} size={15} />
          <span className="text-xs text-white/70">{testimonial.project}</span>
        </div>
      </div>
    </div>
  </div>
);

/* ── Regular Testimonial Card ── */
const TestimonialCard: React.FC<{
  testimonial: (typeof TESTIMONIALS)[0];
  isActive: boolean;
}> = ({ testimonial, isActive }) => (
  <div
    className={`relative p-6 rounded-2xl border transition-all duration-500 ${
      isActive
        ? "bg-card-theme border-primary-500/30 shadow-(--shadow-elevation-lg) scale-[1.02]"
        : "bg-card-theme border-card-theme opacity-60 scale-95"
    }`}
  >
    {/* Quote Icon */}
    <Quote
      size={28}
      className="text-primary-500/20 mb-4"
      fill="currentColor"
    />

    {/* Rating */}
    <div className="flex items-center gap-3 mb-4">
      <StarRating rating={testimonial.rating} size={14} />
      <span className="text-xs font-bold text-primary-500">
        {testimonial.highlight}
      </span>
    </div>

    {/* Review */}
    <p className="text-secondary-theme text-sm leading-relaxed mb-6 line-clamp-4">
      "{testimonial.review}"
    </p>

    {/* Project Tag */}
    <div className="flex items-center gap-2 mb-5 pb-5 border-b border-card-theme">
      <span className="text-base">{testimonial.projectEmoji}</span>
      <span className="text-xs font-semibold text-primary-500 bg-primary-50 dark:bg-primary-950/40 px-2.5 py-1 rounded-full border border-primary-100 dark:border-primary-800/50">
        {testimonial.project}
      </span>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3">
      <Avatar
        initials={testimonial.avatar}
        linear={testimonial.avatarlinear}
        size="sm"
      />
      <div>
        <p className="text-sm font-bold text-primary-theme">
          {testimonial.name}
        </p>
        <p className="text-xs text-secondary-theme">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);

/* ── Carousel Controls ── */
const CarouselControls: React.FC<{
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}> = ({ current, total, onPrev, onNext }) => (
  <div className="flex items-center gap-4">
    {/* Prev Button */}
    <button
      onClick={onPrev}
      className="flex items-center justify-center w-10 h-10 rounded-xl border border-card-theme bg-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30 transition-all duration-200 active:scale-90"
    >
      <ChevronLeft size={18} />
    </button>

    {/* Dots */}
    <div className="flex items-center gap-2">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i === current
              ? "w-6 h-2 bg-primary-500"
              : "w-2 h-2 bg-border-primary-theme"
          }`}
        />
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={onNext}
      className="flex items-center justify-center w-10 h-10 rounded-xl border border-card-theme bg-card-theme text-secondary-theme hover:text-primary-theme hover:border-primary-500/30 transition-all duration-200 active:scale-90"
    >
      <ChevronRight size={18} />
    </button>
  </div>
);

/* ── Platform Ratings Row ── */
const PlatformRatings: React.FC = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
    {PLATFORM_RATINGS.map((platform, i) => (
      <React.Fragment key={platform.platform}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{platform.emoji}</span>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-primary-theme">
                {platform.rating}
              </span>
              <Star size={13} className="text-yellow-400" fill="currentColor" />
            </div>
            <p className="text-xs text-secondary-theme">
              {platform.platform} · {platform.reviews} reviews
            </p>
          </div>
        </div>
        {i < PLATFORM_RATINGS.length - 1 && (
          <div className="hidden sm:block w-px h-10 bg-border-primary-theme" />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ── Trust Stats Row ── */
const TrustStats: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {TRUST_STATS.map((stat, i) => (
      <div
        key={stat.label}
        className="text-center p-4 rounded-xl bg-card-theme border border-card-theme hover:border-primary-500/30 transition-all duration-200 group"
      >
        <div className="text-2xl sm:text-3xl font-extrabold text-primary-theme mb-1 group-hover:text-primary-500 transition-colors">
          {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-secondary-theme font-medium">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const Testimonials: React.FC = () => {
  const featuredTestimonials = TESTIMONIALS.filter((t) => t.featured);
  const regularTestimonials = TESTIMONIALS.filter((t) => !t.featured);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto Play Logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % regularTestimonials.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, regularTestimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) =>
      prev === 0 ? regularTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % regularTestimonials.length);
  };

  // Show 3 cards at a time — active in center
  const getVisibleCards = () => {
    const total = regularTestimonials.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [
      { testimonial: regularTestimonials[prev], isActive: false },
      { testimonial: regularTestimonials[activeIndex], isActive: true },
      { testimonial: regularTestimonials[next], isActive: false },
    ];
  };

  return (
    <section className="relative section-padding bg-mesh overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute top-0 right-0 w-180 h-180 rounded-full bg-primary-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-140 h-140 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-in">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-300 border border-yellow-100 dark:border-yellow-800/40 mb-4">
            <Star size={13} className="text-yellow-500" fill="currentColor" />
            Client Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-theme leading-[1.1] mb-4">
            Don't Just Take{" "}
            <span className="linear-text">Our Word For It</span>
          </h2>
          <p className="text-lg text-secondary-theme max-w-2xl mx-auto">
            Real feedback from real clients. Here's what people say after
            working with us.
          </p>
        </div>

        {/* ── Platform Ratings ── */}
        <div className="flex justify-center mb-12 animate-in-delay-1">
          <div className="inline-flex items-center px-6 py-4 rounded-2xl bg-card-theme border border-card-theme shadow-(--shadow-elevation-sm)">
            <PlatformRatings />
          </div>
        </div>

        {/* ── Featured Testimonials (Top 2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto animate-in-delay-1">
          {featuredTestimonials.map((t) => (
            <FeaturedCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* ── Carousel (Desktop: 3 cards, Mobile: 1 card) ── */}
        <div className="max-w-5xl mx-auto animate-in-delay-2">
          {/* Desktop Carousel */}
          <div className="hidden md:grid grid-cols-3 gap-5 mb-8">
            {getVisibleCards().map(({ testimonial, isActive }, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                isActive={isActive}
              />
            ))}
          </div>

          {/* Mobile Carousel (Single Card) */}
          <div className="md:hidden mb-6">
            <TestimonialCard
              testimonial={regularTestimonials[activeIndex]}
              isActive={true}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <CarouselControls
              current={activeIndex}
              total={regularTestimonials.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-card-theme bg-card-theme text-xs font-semibold text-secondary-theme hover:text-primary-theme hover:border-primary-500/30 transition-all duration-200"
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </button>
          </div>
        </div>

        {/* ── Trust Stats ── */}
        <div className="mt-16 max-w-4xl mx-auto animate-in-delay-3">
          <TrustStats />
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center animate-in-delay-3">
          <p className="text-secondary-theme text-sm mb-4">
            Join{" "}
            <span className="font-bold text-primary-theme">80+ businesses</span>{" "}
            who trusted us with their digital products.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all duration-200 active:scale-95 shadow-(--shadow-glow) hover:shadow-(--shadow-glow-lg)"
          >
            Start Your Project Today
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};