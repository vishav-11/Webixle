// app/blog/components/ProgressBar.tsx

"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-secondary-theme z-50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}