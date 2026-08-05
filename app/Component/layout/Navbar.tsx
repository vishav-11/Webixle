
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles, ArrowRight, Zap } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isDark = mounted && resolvedTheme === "dark";

  const logoSrc = !mounted
    ? "/Image/WebLogo/Dark.png"
    : isDark
      ? "/Image/WebLogo/Light.png"
      : "/Image/WebLogo/Dark.png";

  return (
    <>
      {/* ══════════════════════════════════════
          HEADER
      ══════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-100 transition-all duration-500",
          isScrolled ? "py-0" : "py-2"
        )}
      >
        {/* ── Glassmorphism Bar ── */}
        <div
          className={cn(
            "mx-auto transition-all duration-500",
            isScrolled
              ? "max-w-full rounded-none"
              : "max-w-[96%] rounded-[100px] mt-3"
          )}
          style={{
            background: isScrolled
              ? isDark
                ? "rgba(15, 15, 26, 0.90)"
                : "rgba(255, 255, 255, 0.90)"
              : isDark
                ? "rgba(26, 26, 46, 0.80)"
                : "rgba(255, 255, 255, 0.80)",

            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",

            borderTop: !isScrolled
              ? isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(226,232,240,0.80)"
              : "none",

            borderLeft: !isScrolled
              ? isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(226,232,240,0.80)"
              : "none",

            borderRight: !isScrolled
              ? isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(226,232,240,0.80)"
              : "none",

            borderBottom: isScrolled
              ? isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(226,232,240,0.60)"
              : isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(226,232,240,0.80)",

            boxShadow: isScrolled
              ? isDark
                ? "0 4px 30px rgba(0,0,0,0.40)"
                : "0 4px 30px rgba(0,0,0,0.07)"
              : isDark
                ? "0 8px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 8px 40px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,1)",
          }}
        >
          <nav className="px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 lg:h-18">

              {/* ── Logo ── */}
              <Link
                href="/"
                aria-label={COMPANY.name}
                className="shrink-0 flex items-center group"
              >
                <div className="relative h-80 w-55 -m-7.5">
                  <Image
                    key={logoSrc}
                    src={logoSrc}
                    alt={COMPANY.name}
                    fill
                    sizes="200px"
                    className="object-contain object-left transition-all duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </Link>

              {/* ── Desktop Nav Pills ── */}
              <div
                className="hidden lg:flex items-center gap-0.5 rounded-full px-2 py-1.5"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(241,245,249,0.80)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(226,232,240,0.80)",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setActiveHover(link.href)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                      isActive(link.href)
                        ? isDark
                          ? "text-white"
                          : "text-[#0f172a]"
                        : isDark
                          ? "text-[#94a3b8] hover:text-white"
                          : "text-[#475569] hover:text-[#0f172a]"
                    )}
                  >
                    {/* Active linear Pill */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)",
                          boxShadow: "0 4px 15px rgba(99,102,241,0.40)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Pill */}
                    {!isActive(link.href) && activeHover === link.href && (
                      <motion.span
                        layoutId="hoverNavPill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(226,232,240,0.60)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* ── Desktop Actions ── */}
              <div className="hidden lg:flex items-center gap-2.5">

                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2.5 rounded-full transition-all duration-200"
                  style={{
                    background: isDark ? "rgba(30,30,53,1)" : "rgba(241,245,249,1)",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(226,232,240,1)",
                    color: isDark ? "#94a3b8" : "#475569",
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                      >
                        <Sun size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                      >
                        <Moon size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Sign In */}
                {/* <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                      background: "transparent",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(226,232,240,1)",
                      color: isDark ? "#94a3b8" : "#475569",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
                      e.currentTarget.style.background = isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(241,245,249,1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    Sign In
                  </motion.button>
                </Link> */}

                {/* Get Started Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 25px rgba(99,102,241,0.45)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group"
                    style={{
                      background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)",
                      boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                    }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <span className="relative flex items-center gap-1.5 text-[#9576F8]">
                      <Zap size={14} className="fill-[#9576F8]" />
                      Get Started
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* ── Mobile Actions ── */}
              <div className="flex lg:hidden items-center gap-1">
                <motion.button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full transition-all duration-200"
                  style={{ color: isDark ? "#94a3b8" : "#475569" }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>

                <motion.button
                  onClick={() => setIsMobileOpen((p) => !p)}
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileOpen}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full transition-all duration-200"
                  style={{ color: isDark ? "#94a3b8" : "#475569" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isMobileOpen ? (
                      <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="flex">
                        <X size={20} />
                      </motion.span>
                    ) : (
                      <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="flex">
                        <Menu size={20} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

            </div>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-90 lg:hidden"
              style={{
                background: isDark ? "rgba(5, 5, 15, 0.70)" : "rgba(15, 23, 42, 0.35)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed right-3 top-3 bottom-3 z-95 w-70 max-w-[88vw] lg:hidden"
            >
              {/* Glow Ring */}
              <div
                className="absolute -inset-px rounded-[28px] pointer-events-none"
                style={{
                  background: "linear-linear(135deg, rgba(99,102,241,0.35) 0%, rgba(217,70,239,0.35) 100%)",
                  filter: "blur(1.5px)",
                }}
              />

              {/* Glass Panel */}
              <div
                className="relative flex flex-col h-full rounded-[28px] overflow-hidden"
                style={{
                  background: isDark ? "rgba(26, 26, 46, 0.92)" : "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(226,232,240,0.90)",
                  boxShadow: isDark
                    ? "0 25px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "0 25px 60px rgba(99,102,241,0.10), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none" style={{ background: isDark ? "radial-linear(circle, rgba(99,102,241,0.18) 0%, rgba(217,70,239,0.10) 60%, transparent 100%)" : "radial-linear(circle, rgba(99,102,241,0.08) 0%, rgba(217,70,239,0.04) 60%, transparent 100%)", filter: "blur(35px)" }} />
                <div className="absolute bottom-24 left-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: isDark ? "radial-linear(circle, rgba(217,70,239,0.12) 0%, rgba(99,102,241,0.08) 60%, transparent 100%)" : "radial-linear(circle, rgba(217,70,239,0.06) 0%, rgba(99,102,241,0.04) 60%, transparent 100%)", filter: "blur(28px)" }} />

                {/* Drawer Header */}
                <div className="relative flex items-center justify-between px-5 pt-5 pb-4">
                  <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center">
                    <div className="relative h-11 w-36">
                      <Image key={logoSrc} src={logoSrc} alt={COMPANY.name} fill sizes="144px" className="object-contain object-left" priority />
                    </div>
                  </Link>

                  <motion.button onClick={() => setIsMobileOpen(false)} aria-label="Close menu" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-full transition-all duration-200" style={{ background: isDark ? "rgba(30,30,53,1)" : "rgba(241,245,249,1)", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(226,232,240,1)", color: isDark ? "#64748b" : "#94a3b8" }}>
                    <X size={15} />
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="mx-5 h-px mb-3" style={{ background: isDark ? "linear-linear(90deg, transparent, rgba(255,255,255,0.07), transparent)" : "linear-linear(90deg, transparent, rgba(99,102,241,0.15), transparent)" }} />

                {/* Nav Links */}
                <nav className="relative flex-1 overflow-y-auto px-3 pb-2">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + index * 0.055, type: "spring", stiffness: 300, damping: 24 }}>
                        <Link href={link.href} onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200" style={isActive(link.href) ? { background: "linear-linear(135deg, rgba(99,102,241,0.88) 0%, rgba(217,70,239,0.88) 100%)", color: "#ffffff", boxShadow: "0 4px 15px rgba(99,102,241,0.30)" } : { color: isDark ? "#94a3b8" : "#475569" }} onMouseEnter={(e) => { if (!isActive(link.href)) { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(241,245,249,1)"; e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a"; } }} onMouseLeave={(e) => { if (!isActive(link.href)) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; } }}>
                          <span
                            style={{
                              color: isActive(link.href)
                                ? isDark
                                  ? "#ffffff"
                                  : "#0f172a"
                                : isDark
                                  ? "#94a3b8"
                                  : "#475569",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {link.label}
                          </span>
                          {isActive(link.href) ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                          ) : (
                            <ArrowRight
                              size={13}
                              style={{ color: isDark ? "#64748b" : "#cbd5e1" }}
                            />
                          )}                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Quick Info Card */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.30 }} className="mt-4 mx-1 p-4 rounded-2xl" style={{ background: isDark ? "linear-linear(135deg, rgba(99,102,241,0.12) 0%, rgba(217,70,239,0.07) 100%)" : "linear-linear(135deg, rgba(99,102,241,0.06) 0%, rgba(217,70,239,0.03) 100%)", border: isDark ? "1px solid rgba(99,102,241,0.20)" : "1px solid rgba(99,102,241,0.12)" }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles size={13} style={{ color: isDark ? "#818cfb" : "#6366f1" }} />
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: isDark ? "#818cfb" : "#6366f1" }}>Quick Actions</p>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>Start automating your workflows today. No credit card required.</p>
                  </motion.div>
                </nav>

                {/* Divider */}
                <div className="mx-5 h-px" style={{ background: isDark ? "linear-linear(90deg, transparent, rgba(255,255,255,0.06), transparent)" : "linear-linear(90deg, transparent, rgba(99,102,241,0.12), transparent)" }} />

                {/* Drawer Footer */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20 }} className="relative shrink-0 px-4 py-5 space-y-3">
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="text-xs font-medium" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>{isDark ? "Dark Mode" : "Light Mode"}</span>
                    <motion.button onClick={toggleTheme} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200" style={{ background: isDark ? "rgba(30,30,53,1)" : "rgba(241,245,249,1)", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(226,232,240,1)", color: isDark ? "#94a3b8" : "#475569" }}>
                      {mounted && isDark ? <><Sun size={12} />&nbsp;Light</> : <><Moon size={12} />&nbsp;Dark</>}
                    </motion.button>
                  </div>

                  {/* <Link href="/contact" className="block" onClick={() => setIsMobileOpen(false)}>
                    <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full py-2.5 rounded-2xl text-sm font-medium transition-all duration-200" style={{ background: "transparent", border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(226,232,240,1)", color: isDark ? "#94a3b8" : "#475569" }} onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(241,245,249,1)"; e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569"; }}>
                      Sign In
                    </motion.button>
                  </Link> */}

                  <Link href="/contact" className="block" onClick={() => setIsMobileOpen(false)}>
                    <motion.button whileHover={{ scale: 1.01, boxShadow: "0 8px 25px rgba(99,102,241,0.45)" }} whileTap={{ scale: 0.99 }} className="relative w-full py-2.5 rounded-2xl text-sm font-semibold text-[#9576F8] overflow-hidden group" style={{ background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)", boxShadow: "0 4px 15px rgba(99,102,241,0.35)" }}>
                      <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center justify-center gap-2 fill-[#9576F8]"><Zap size={14} className="fill-[#9576F8]" />Get Started Free</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};