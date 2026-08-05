// app/blog/components/PostNavigation.tsx

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PostNavigationProps {
  prevPost: { slug: string; title: string } | null;
  nextPost: { slug: string; title: string } | null;
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prevPost ? (
        <Link href={`/blog/${prevPost.slug}`}
          className="group p-5 rounded-2xl border border-card-theme bg-card-theme
            hover:border-primary-500/20 transition-all duration-300">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-tertiary-theme mb-2">
            <ArrowLeft size={12} />
            Previous Post
          </div>
          <h4 className="text-sm font-bold text-primary-theme group-hover:text-primary-500 line-clamp-2">
            {prevPost.title}
          </h4>
        </Link>
      ) : <div />}

      {nextPost && (
        <Link href={`/blog/${nextPost.slug}`}
          className="group p-5 rounded-2xl border border-card-theme bg-card-theme
            hover:border-primary-500/20 transition-all duration-300 text-right">
          <div className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-tertiary-theme mb-2">
            Next Post
            <ArrowRight size={12} />
          </div>
          <h4 className="text-sm font-bold text-primary-theme group-hover:text-primary-500 line-clamp-2">
            {nextPost.title}
          </h4>
        </Link>
      )}
    </div>
  );
}