// app/blog/components/Newsletter.tsx

"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { trackEvent } from "@/app/lib/analytics";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    trackEvent("newsletter_subscribe", "Newsletter", email);

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-500/10 border border-primary-500/20">
      <div className="text-center max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-4">
          <Mail size={20} className="text-primary-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-primary-theme mb-2">
          Stay Updated
        </h3>
        <p className="text-sm text-secondary-theme mb-6">
          Get the latest insights on web development, design trends, and business growth
          delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-sm font-medium text-green-500">
              Thanks for subscribing!
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-sm font-medium
                bg-secondary-theme border border-card-theme text-primary-theme
                placeholder:text-tertiary-theme focus:outline-none
                focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                transition-all duration-200"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm
                transition-all duration-200 active:scale-95
                disabled:opacity-70 disabled:cursor-not-allowed
                shadow-md shadow-primary-500/25 whitespace-nowrap"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}