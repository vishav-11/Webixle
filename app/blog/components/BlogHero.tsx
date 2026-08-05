// app/blog/components/BlogHero.tsx

import { Calendar, Clock, Tag, User } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "../lib/blog-data";

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="relative section-padding bg-mesh overflow-hidden pt-28 pb-12">
      <div className="hero-glow" />
      <div className="absolute top-0 right-0 w-160 h-160 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-bold uppercase tracking-widest mb-5
              bg-primary-500/10 border border-primary-500/20 text-primary-500"
          >
            <Tag size={12} />
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-primary-theme mb-5 leading-[1.15]"
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-secondary-theme mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary-theme mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-card-theme">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}