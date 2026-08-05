// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getBlogPost, getRelatedPosts, blogPosts } from "../lib/blog-data";
import BlogPostHero from "../components/BlogPostHero";
import BlogContent from "../components/BlogContent";
import TableOfContents from "../components/TableOfContents";
import ShareButtons from "../components/ShareButtons";
import AuthorCard from "../components/AuthorCard";
import Newsletter from "../components/Newsletter";
import RelatedPosts from "../components/RelatedPosts";
import ProgressBar from "../components/ProgressBar";
import PostNavigation from "../components/PostNavigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  // ✅ Next.js 15+ requires await for params
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const postUrl = `https://webixle.com/blog/${post.slug}`;

  // Get navigation posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <ProgressBar />
      <BlogPostHero post={post} />

      <section className="section-padding bg-mesh overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="p-6 sm:p-10 rounded-2xl border border-card-theme bg-card-theme shadow-md">
                <BlogContent content={post.content} />

                <div className="my-10 border-t-2 border-card-theme" />

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-primary-theme mb-3">Tagged In:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium
                          bg-secondary-theme border border-card-theme text-secondary-theme"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Card Mobile */}
              <div className="mt-8 lg:hidden">
                <AuthorCard author={post.author} />
              </div>

              {/* Post Navigation */}
              <div className="mt-8">
                <PostNavigation prevPost={prevPost} nextPost={nextPost} />
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <Newsletter />
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <RelatedPosts posts={relatedPosts} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="hidden lg:block">
                <TableOfContents />
              </div>

              <div className="hidden lg:block">
                <AuthorCard author={post.author} />
              </div>

              <ShareButtons url={postUrl} title={post.title} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

// ✅ Generate static paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Webixle Blog`,
    description: post.excerpt,
  };
}