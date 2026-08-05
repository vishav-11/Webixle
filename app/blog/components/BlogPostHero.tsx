// app/blog/components/BlogPostHero.tsx

import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../lib/blog-data";

interface BlogPostHeroProps {
  post: BlogPost;
}

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden pt-24 pb-8">
      <div className="hero-glow" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary-theme
              hover:text-primary-500 transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            text-xs font-bold uppercase tracking-widest mb-5
            bg-primary-500/10 border border-primary-500/20 text-primary-500">
            <Tag size={12} />
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
            text-primary-theme mb-5 leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-secondary-theme mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary-theme mb-8 pb-8 border-b border-card-theme">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-card-theme">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary-theme">{post.author.name}</div>
                <div className="text-xs text-tertiary-theme">{post.author.role}</div>
              </div>
            </div>

            <span>•</span>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long", day: "numeric", year: "numeric"
              })}</span>
            </div>

            <span>•</span>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-card-theme shadow-xl">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}