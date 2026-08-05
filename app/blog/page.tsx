// app/blog/page.tsx

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { blogPosts } from "./lib/blog-data";
import Newsletter from "./components/Newsletter";
import { trackEvent } from "@/app/lib/analytics";

const CATEGORIES = [
  "All Posts",
  "Web Development",
  "Mobile App",
  "Blockchain",
  "UI/UX Design",
  "Digital Marketing",
  "Business Growth",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== "All Posts") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackEvent("blog_category_filter", "Blog", category);
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      trackEvent("blog_search", "Blog", query);
    }
  };

  return (
    <>
      {/* ══════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════ */}
      <section className="relative section-padding bg-mesh overflow-hidden pt-28 pb-12">
        <div className="hero-glow" />
        <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-120 h-120 rounded-full bg-accent-500/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-5
              bg-card-theme border border-card-theme text-secondary-theme"
          >
            <Sparkles size={14} />
            Webixle Blog
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-primary-theme mb-4 leading-[1.1]"
          >
            Insights on <span className="linear-text">Design & Development</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary-theme max-w-2xl mx-auto mb-8">
            Expert tips, industry trends, and practical guides to help you build
            better digital products and grow your business.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary-theme"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm font-medium
                  bg-card-theme border border-card-theme text-primary-theme
                  placeholder:text-tertiary-theme focus:outline-none
                  focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                  transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — CATEGORY FILTERS
      ══════════════════════════════ */}
      <section className="py-6 bg-secondary-theme border-y border-card-theme sticky top-16 z-40 backdrop-blur-md bg-secondary-theme/80">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                  transition-all duration-200 shrink-0
                  ${
                    selectedCategory === category
                      ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
                      : "bg-card-theme border border-card-theme text-secondary-theme hover:border-primary-500/20 hover:text-primary-theme"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 3 — FEATURED POST
      ══════════════════════════════ */}
      {featuredPost && selectedCategory === "All Posts" && !searchQuery && (
        <section className="section-padding bg-mesh overflow-hidden">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-primary-500" />
              <h2 className="text-xl font-bold text-primary-theme">Featured Article</h2>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block"
              onClick={() =>
                trackEvent("blog_post_click", "Blog", featuredPost.title)
              }
            >
              <div
                className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8 rounded-2xl
                border border-card-theme bg-card-theme
                hover:border-primary-500/20 hover:shadow-xl
                transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                        text-xs font-bold bg-primary-500 text-white shadow-lg"
                    >
                      <Sparkles size={12} />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-xs font-bold
                      bg-primary-500/10 text-primary-500 mb-4 w-fit"
                  >
                    {featuredPost.category}
                  </span>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-primary-theme mb-4
                      group-hover:text-primary-500 transition-colors leading-tight"
                  >
                    {featuredPost.title}
                  </h3>

                  <p className="text-base text-secondary-theme mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary-theme mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-2 text-primary-500 font-bold
                      group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════
          SECTION 4 — ALL POSTS GRID
      ══════════════════════════════ */}
      <section className="section-padding bg-mesh overflow-hidden">
        <div className="container-custom">
          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-theme">
              {searchQuery
                ? `Search Results (${filteredPosts.length})`
                : selectedCategory === "All Posts"
                ? "Latest Articles"
                : selectedCategory}
            </h2>
            <span className="text-sm text-tertiary-theme">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState searchQuery={searchQuery} />
          )}
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 5 — NEWSLETTER CTA
      ══════════════════════════════ */}
      <section className="section-padding bg-secondary-theme border-y border-card-theme">
        <div className="container-custom max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

// ============================================
// BLOG CARD COMPONENT
// ============================================

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    publishedAt: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group h-full"
      onClick={() => trackEvent("blog_post_click", "Blog", post.title)}
    >
      <div
        className="h-full flex flex-col p-5 rounded-2xl border border-card-theme bg-card-theme
          hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-lg
          transition-all duration-300"
      >
        {/* Image */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Category */}
        <span
          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold
            bg-primary-500/10 text-primary-500 mb-3 w-fit"
        >
          <Tag size={10} />
          {post.category}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-bold text-primary-theme mb-3 line-clamp-2 leading-tight
            group-hover:text-primary-500 transition-colors"
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-secondary-theme mb-4 line-clamp-3 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-card-theme">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-card-theme">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-secondary-theme">
              {post.author.name}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-tertiary-theme">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read More */}
        <div
          className="flex items-center gap-1.5 text-sm font-medium text-primary-500 mt-4
            group-hover:gap-2 transition-all"
        >
          Read Article
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

// ============================================
// EMPTY STATE COMPONENT
// ============================================

function EmptyState({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="text-center py-16">
      <div
        className="w-16 h-16 rounded-full bg-secondary-theme border border-card-theme
          flex items-center justify-center mx-auto mb-4"
      >
        <Search size={24} className="text-tertiary-theme" />
      </div>
      <h3 className="text-xl font-bold text-primary-theme mb-2">
        No Articles Found
      </h3>
      <p className="text-sm text-secondary-theme mb-6 max-w-md mx-auto">
        {searchQuery
          ? `We couldn't find any articles matching "${searchQuery}". Try different keywords or browse all posts.`
          : "No articles available in this category yet. Check back soon!"}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
          bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
          transition-all duration-200 active:scale-95"
      >
        <ArrowRight size={16} />
        Browse All Posts
      </button>
    </div>
  );
}