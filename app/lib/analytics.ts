// lib/analytics.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// ✅ Page View Track karo
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: url,
    });
  }
};

// ✅ Custom Events Track karo
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};