// app/blog/components/BlogContent.tsx

"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none blog-content">
      <ReactMarkdown
        components={{
          // Headings
          h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-theme mt-12 mb-4 leading-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mt-8 mb-3">
              {children}
            </h3>
          ),
          // Paragraphs
          p: ({ children }) => (
            <p className="text-base sm:text-lg text-secondary-theme leading-relaxed mb-6">
              {children}
            </p>
          ),
          // Strong text
          strong: ({ children }) => (
            <strong className="font-bold text-primary-theme">{children}</strong>
          ),
          // Lists
          ul: ({ children }) => (
            <ul className="space-y-2 my-6 ml-6">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-base sm:text-lg text-secondary-theme flex items-start gap-3">
              <span className="text-primary-500 mt-1.5">•</span>
              <span>{children}</span>
            </li>
          ),
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-6 py-4 my-8 bg-primary-500/5 rounded-r-xl">
              <div className="text-base sm:text-lg text-secondary-theme italic">
                {children}
              </div>
            </blockquote>
          ),
          // Code blocks
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-xl my-6 text-sm"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="px-2 py-1 rounded-lg bg-secondary-theme text-primary-500 text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          },
          // Horizontal rule
          hr: () => (
            <hr className="my-12 border-t-2 border-card-theme" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}