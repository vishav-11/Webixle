import React from "react";
import Link from "next/link";

// ============================================
// CONSTANTS
// ============================================

const COMPANY = {
  name: "Webixle",
  description:
    "A full-service digital studio helping businesses turn ideas into reality through design, development, and marketing.",
  email: "contact@webixle.com",
  phone: "+91 8796610171",
  address: "Gurgaon, India",
  social: {
    twitter: "https://twitter.com/webixle",
    linkedin: "https://linkedin.com/company/webixle",
    github: "https://github.com/webixle",
    instagram: "https://instagram.com/webixle",
  },
};

const FOOTER_LINKS = {
  Services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Apps", href: "/services#mobile-app" },
    { label: "Blockchain & Web3", href: "/services#blockchain" },
    { label: "UI/UX Design", href: "/services#uiux-design" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

// ============================================
// SVG ICONS (inline — no dependency)
// ============================================

const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconMail = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
  </svg>
);

const IconMapPin = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconArrowUpRight = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

// Social SVGs
const IconTwitter = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconGithub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

// ============================================
// DATA
// ============================================

const CONTACT_INFO = [
  { icon: IconMail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: IconPhone, text: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: IconMapPin, text: COMPANY.address, href: null },
];

const SOCIAL_LINKS = [
  { icon: IconTwitter, href: COMPANY.social.twitter, label: "Twitter" },
  { icon: IconLinkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: IconGithub, href: COMPANY.social.github, label: "GitHub" },
  { icon: IconInstagram, href: COMPANY.social.instagram, label: "Instagram" },
];

// ============================================
// FOOTER COMPONENT
// ============================================

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-card-theme bg-secondary-theme">
      {/* Top linear line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 shadow-md">
                <IconZap />
              </div>
              <span className="text-xl font-bold text-primary-theme">
                {COMPANY.name}
              </span>
            </Link>

            {/* Description */}
            <p className="text-sm text-secondary-theme leading-relaxed mb-6 max-w-xs">
              {COMPANY.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              {CONTACT_INFO.map(({ icon: Icon, text, href }) =>
                href ? (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-secondary-theme
                      hover:text-primary-500 transition-colors group"
                  >
                    <span className="shrink-0 text-tertiary-theme group-hover:text-primary-500 transition-colors">
                      <Icon size={14} />
                    </span>
                    <span>{text}</span>
                  </a>
                ) : (
                  <div
                    key={text}
                    className="flex items-center gap-2.5 text-sm text-secondary-theme"
                  >
                    <span className="shrink-0 text-tertiary-theme">
                      <Icon size={14} />
                    </span>
                    <span>{text}</span>
                  </div>
                )
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg
                    border border-card-theme bg-card-theme text-tertiary-theme
                    hover:text-primary-500 hover:border-primary-500/30
                    transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-primary-theme uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-secondary-theme
                        hover:text-primary-500 transition-colors duration-200 group"
                    >
                      {link.label}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        <IconArrowUpRight size={11} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-card-theme flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-tertiary-theme">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-1 text-xs text-tertiary-theme">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse mx-0.5">♥</span>
            <span>in India</span>
          </div> */}

          <div className="flex items-center gap-4">
            {FOOTER_LINKS.Legal.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-tertiary-theme hover:text-primary-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;