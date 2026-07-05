import React from "react";
import Link from "next/link";
import {
  Zap,
  // Linkedin,
  // Github,
  // Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  X,
} from "lucide-react";
import { COMPANY, FOOTER_LINKS } from "@/app/lib/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-(--border-primary) bg-(--bg-secondary)">
      {/* Top linear line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-primary-500 to-accent-500 shadow-lg">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-(--text-primary)">
                {COMPANY.name}
              </span>
            </Link>

            <p className="text-(--text-secondary) leading-relaxed mb-6 max-w-sm">
              {COMPANY.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Phone, text: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: MapPin, text: COMPANY.address, href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-2.5 text-sm text-(--text-secondary)] hover:text-primary-500 transition-colors group"
                >
                  <Icon
                    size={15}
                    className="shrink-0 mt-0.5 group-hover:text-primary-500 transition-colors"
                  />
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {[
                { icon: X, href: COMPANY.social.twitter, label: "X" },
                // { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
                // { icon: Github, href: COMPANY.social.github, label: "GitHub" },
                // { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-(--border-primary)] bg-(--bg-card)] text-(--text-secondary)] hover:text-primary-500 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 hover:shadow-(--shadow-md)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {(Object.entries(FOOTER_LINKS) as [string, readonly { label: string; href: string }[]][]).map(
            ([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-(--text-primary)] uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 text-sm text-(--text-secondary)] hover:text-primary-500 transition-colors duration-200 group"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-(--text-tertiary)]">
            © {currentYear} {COMPANY.name}, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-(--text-tertiary)]">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">♥</span>
            <span>for the future of work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};