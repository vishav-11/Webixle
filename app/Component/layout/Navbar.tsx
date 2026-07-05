"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/app/lib/constants";
import { Button } from "@/app/Component/ui/Button";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted]         = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  /* ---------- Effects ---------- */
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  /* ---------- Helpers ---------- */
  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Light mode  → show dark logo
  // Dark mode   → show light logo
  const logoSrc = !mounted
    ? "/Image/WebLogo/Dark.png"
    : resolvedTheme === "dark"
    ? "/Image/WebLogo/Light.png"
    : "/Image/WebLogo/Dark.png";

  /* ---------- Render ---------- */
  return (
    <>
      {/* ═══════════════════════════════════════
          HEADER
      ═══════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-100 transition-all duration-300",
          isScrolled
            ? [
                "bg-(--navbar-bg)]",
                "backdrop-blur-xl",
                "border-b border-(--navbar-border)]",
                "shadow-(--navbar-shadow)]",
              ]
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              href="/"
              aria-label={COMPANY.name}
              className="shrink-0 flex items-center"
            >
              <div className="relative h-50 w-50">
                <Image
                  key={logoSrc}
                  src={logoSrc}
                  alt={COMPANY.name}
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(link.href)
                      ? "text-white bg-primary-50 dark:text-white dark:bg-primary-950/30"
                      : "text-(--text-secondary)] hover:text-(--text-primary)] hover:bg-(--bg-tertiary)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Desktop Actions ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  relative p-2.5 rounded-xl transition-all duration-200
                  bg-(--bg-tertiary)] hover:bg-(--bg-card)]
                  border border-(--border-primary)]
                  text-(--text-secondary)] hover:text-(--text-primary)]
                  shadow-(--shadow-elevation-xs)]
                  hover:shadow-(--shadow-elevation-sm)]
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mounted && resolvedTheme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate:  90,  opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex"
                    >
                      <Sun size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate:   0, opacity: 1 }}
                      exit={{   rotate: -90,  opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex"
                    >
                      <Moon size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <Link href="/contact">
                <Button variant="secondary" size="sm">Sign In</Button>
              </Link>
              <Link href="/demo">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </div>

            {/* ── Mobile Actions ── */}
            <div className="flex lg:hidden items-center gap-1">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  p-2 rounded-lg transition-colors duration-200
                  text-(--text-secondary)] hover:text-(--text-primary)]
                  hover:bg-(--bg-tertiary)]
                "
              >
                {mounted && resolvedTheme === "dark"
                  ? <Sun  size={20} />
                  : <Moon size={20} />
                }
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileOpen((p) => !p)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileOpen}
                className="
                  p-2 rounded-lg transition-colors duration-200
                  text-(--text-secondary)] hover:text-(--text-primary)]
                  hover:bg-(--bg-tertiary)]
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate:  90,  opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex"
                    >
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate:   0, opacity: 1 }}
                      exit={{   rotate: -90,  opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex"
                    >
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* ═══════════════════════════════════════
          MOBILE DRAWER
      ═══════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{   opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-90 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{   x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="
                fixed right-0 top-0 bottom-0
                z-95 w-70 max-w-[85vw]
                lg:hidden
              "
            >
              <div
                className="
                  flex flex-col h-full
                  bg-(--bg-card)]
                  border-l border-(--border-primary)]
                  shadow-2xl
                "
              >

                {/* ── Drawer Header ── */}
                <div
                  className="
                    flex items-center justify-between
                    px-5 h-16 shrink-0
                    border-b border-(--border-primary)]
                  "
                >
                  {/* Logo in drawer */}
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center"
                  >
                    <div className="relative h-40 w-40">
                      <Image
                        key={logoSrc}
                        src={logoSrc}
                        alt={COMPANY.name}
                        fill
                        sizes="112px"
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                  </Link>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                    className="
                      p-2 rounded-lg transition-colors duration-200
                      text-(--text-secondary)]
                      hover:text-(--text-primary)]
                      hover:bg-(--bg-tertiary)]
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* ── Drawer Nav Links ── */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0  }}
                        transition={{
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between",
                            "w-full px-4 py-3 rounded-xl",
                            "text-sm font-medium",
                            "transition-all duration-200",
                            isActive(link.href)
                              ? [
                                  "bg-primary-50 dark:bg-primary-950/40",
                                  "text-white dark:text-white",
                                ]
                              : [
                                  "text-white]",
                                  "hover:text-(--text-primary)]",
                                  "hover:bg-(--bg-tertiary)]",
                                ]
                          )}
                        >
                          <span>{link.label}</span>
                          {isActive(link.href) && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="my-4 h-px bg-(--border-primary)]" />

                  {/* Quick Info */}
                  <div className="px-4 py-2">
                    <p className="text-xs text-(--text-tertiary)] font-medium uppercase tracking-wider mb-2">
                      Quick Actions
                    </p>
                    <p className="text-xs text-(--text-tertiary)] leading-relaxed">
                      Start automating your workflows today. No credit card required.
                    </p>
                  </div>
                </nav>

                {/* ── Drawer Footer ── */}
                <div
                  className="
                    shrink-0 px-4 py-5 space-y-3
                    border-t border-(--border-primary)]
                    bg-(--bg-secondary)]
                  "
                >
                  {/* Theme Toggle Row */}
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="text-xs font-medium text-(--text-tertiary)]">
                      {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
                    </span>
                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="
                        flex items-center gap-2 px-3 py-1.5 rounded-lg
                        text-xs font-medium
                        bg-(--bg-tertiary)]
                        text-(--text-secondary)]
                        hover:text-(--text-primary)]
                        border border-(--border-primary)]
                        transition-all duration-200
                      "
                    >
                      {mounted && resolvedTheme === "dark"
                        ? <><Sun size={13} /> Light</>
                        : <><Moon size={13} /> Dark</>
                      }
                    </button>
                  </div>

                  {/* CTA Buttons */}
                  <Link href="/contact" className="block" onClick={() => setIsMobileOpen(false)}>
                    <Button variant="secondary" fullWidth>
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/demo" className="block" onClick={() => setIsMobileOpen(false)}>
                    <Button variant="primary" fullWidth>
                      Get Started Free
                    </Button>
                  </Link>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};