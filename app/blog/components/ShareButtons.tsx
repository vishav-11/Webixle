// app/blog/components/ShareButtons.tsx
// app/blog/components/ShareButtons.tsx - Enhanced version

"use client";

import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Share2,  Link2, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent("blog_share_click", "Share", "Copy Link");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (platform: string) => {
    trackEvent("blog_share_click", "Share", platform);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-primary-theme flex items-center gap-2">
        <Share2 size={16} />
        Share This Article
      </h3>
      <div className="flex flex-col gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare("Twitter")}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1DA1F2]/10 
            border border-[#1DA1F2]/20 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 
            transition-all duration-200 text-sm font-medium group"
        >
          <FaXTwitter size={18} className="shrink-0" />
          <span className="flex-1">Share on Twitter</span>
          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare("Facebook")}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1877F2]/10 
            border border-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2]/20 
            transition-all duration-200 text-sm font-medium group"
        >
          <FaFacebookF size={18} className="shrink-0" />
          <span className="flex-1">Share on Facebook</span>
          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare("LinkedIn")}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0A66C2]/10 
            border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/20 
            transition-all duration-200 text-sm font-medium group"
        >
          <FaLinkedinIn size={18} className="shrink-0" />
          <span className="flex-1">Share on LinkedIn</span>
          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <button
          onClick={copyLink}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-500/10 
            border border-primary-500/20 text-primary-500 hover:bg-primary-500/20 
            transition-all duration-200 text-sm font-medium group"
        >
          {copied ? (
            <>
              <Check size={18} className="shrink-0" />
              <span className="flex-1">Link Copied!</span>
            </>
          ) : (
            <>
              <Link2 size={18} className="shrink-0" />
              <span className="flex-1">Copy Link</span>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}