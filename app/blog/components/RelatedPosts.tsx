// app/blog/components/RelatedPosts.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "../lib/blog-data";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="text-2xl font-bold text-primary-theme mb-6">
        Related Articles
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="h-full p-5 rounded-2xl border border-card-theme bg-card-theme
              hover:border-primary-500/20 hover:-translate-y-1 hover:shadow-lg
              transition-all duration-300">
              
              {/* Image */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category */}
              <span className="inline-block px-2 py-1 rounded-lg text-xs font-bold
                bg-primary-500/10 text-primary-500 mb-3">
                {post.category}
              </span>

              {/* Title */}
              <h4 className="text-base font-bold text-primary-theme mb-2 line-clamp-2
                group-hover:text-primary-500 transition-colors">
                {post.title}
              </h4>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-tertiary-theme mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center gap-1 text-sm font-medium text-primary-500
                group-hover:gap-2 transition-all">
                Read Article
                <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}