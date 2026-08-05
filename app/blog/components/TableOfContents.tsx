// app/blog/components/TableOfContents.tsx

"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from content
    const article = document.querySelector("article");
    if (!article) return;

    const headingElements = article.querySelectorAll("h2");
    const headingData: Heading[] = [];

    headingElements.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      headingData.push({
        id,
        text: heading.textContent || "",
        level: 2,
      });
    });

    setHeadings(headingData);

    // Track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 p-5 rounded-2xl border border-card-theme bg-card-theme">
      <h3 className="text-sm font-bold text-primary-theme mb-4 flex items-center gap-2">
        <List size={16} />
        Table of Contents
      </h3>
      <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium
              transition-all duration-200 line-clamp-2
              ${
                activeId === heading.id
                  ? "bg-primary-500/10 text-primary-500"
                  : "text-secondary-theme hover:bg-secondary-theme hover:text-primary-theme"
              }`}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  );
}