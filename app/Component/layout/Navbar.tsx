// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { NAV_LINKS, COMPANY } from "@/app/lib/constants";
// import { Button } from "@/app/Component/ui/Button";
// import { cn } from "@/app/lib/utils";
// import Image from "next/image";

// export const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled]   = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [mounted, setMounted]         = useState(false);

//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const pathname = usePathname();

//   /* ---------- Effects ---------- */
//   useEffect(() => { setMounted(true); }, []);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 12);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close drawer on route change
//   useEffect(() => { setIsMobileOpen(false); }, [pathname]);

//   // Lock body scroll when drawer is open
//   useEffect(() => {
//     document.body.style.overflow = isMobileOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isMobileOpen]);

//   /* ---------- Helpers ---------- */
//   const toggleTheme = () =>
//     setTheme(resolvedTheme === "dark" ? "light" : "dark");

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   // Light mode  → show dark logo
//   // Dark mode   → show light logo
//   const logoSrc = !mounted
//     ? "/Image/WebLogo/Dark.png"
//     : resolvedTheme === "dark"
//     ? "/Image/WebLogo/Light.png"
//     : "/Image/WebLogo/Dark.png";

//   /* ---------- Render ---------- */
//   return (
//     <>
//       {/* ═══════════════════════════════════════
//           HEADER
//       ═══════════════════════════════════════ */}
//       <header
//         className={cn(
//           "fixed top-0 left-0 right-0 z-100 transition-all duration-300",
//           isScrolled
//             ? [
//                 "bg-(--navbar-bg)]",
//                 "backdrop-blur-xl",
//                 "border-b border-(--navbar-border)]",
//                 "shadow-(--navbar-shadow)]",
//               ]
//             : "bg-transparent border-b border-transparent"
//         )}
//       >
//         <nav className="container-custom">
//           <div className="flex items-center justify-between h-16">

//             {/* ── Logo ── */}
//             <Link
//               href="/"
//               aria-label={COMPANY.name}
//               className="shrink-0 flex items-center"
//             >
//               <div className="relative h-50 w-50">
//                 <Image
//                   key={logoSrc}
//                   src={logoSrc}
//                   alt={COMPANY.name}
//                   fill
//                   sizes="144px"
//                   className="object-contain object-left"
//                   priority
//                 />
//               </div>
//             </Link>

//             {/* ── Desktop Nav Links ── */}
//             <div className="hidden lg:flex items-center gap-1">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     "nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
//                     isActive(link.href)
//                       ? "text-white bg-primary-50 dark:text-white dark:bg-primary-950/30"
//                       : "text-(--text-secondary)] hover:text-(--text-primary)] hover:bg-(--bg-tertiary)]"
//                   )}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* ── Desktop Actions ── */}
//             <div className="hidden lg:flex items-center gap-3">
//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 aria-label="Toggle theme"
//                 className="
//                   relative p-2.5 rounded-xl transition-all duration-200
//                   bg-(--bg-tertiary)] hover:bg-(--bg-card)]
//                   border border-(--border-primary)]
//                   text-(--text-secondary)] hover:text-(--text-primary)]
//                   shadow-(--shadow-elevation-xs)]
//                   hover:shadow-(--shadow-elevation-sm)]
//                 "
//               >
//                 <AnimatePresence mode="wait" initial={false}>
//                   {mounted && resolvedTheme === "dark" ? (
//                     <motion.span
//                       key="sun"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0,   opacity: 1 }}
//                       exit={{   rotate:  90,  opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="flex"
//                     >
//                       <Sun size={18} />
//                     </motion.span>
//                   ) : (
//                     <motion.span
//                       key="moon"
//                       initial={{ rotate:  90, opacity: 0 }}
//                       animate={{ rotate:   0, opacity: 1 }}
//                       exit={{   rotate: -90,  opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="flex"
//                     >
//                       <Moon size={18} />
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </button>

//               <Link href="/contact">
//                 <Button variant="secondary" size="sm">Sign In</Button>
//               </Link>
//               <Link href="/demo">
//                 <Button variant="primary" size="sm">Get Started</Button>
//               </Link>
//             </div>

//             {/* ── Mobile Actions ── */}
//             <div className="flex lg:hidden items-center gap-1">
//               {/* Mobile Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 aria-label="Toggle theme"
//                 className="
//                   p-2 rounded-lg transition-colors duration-200
//                   text-(--text-secondary)] hover:text-(--text-primary)]
//                   hover:bg-(--bg-tertiary)]
//                 "
//               >
//                 {mounted && resolvedTheme === "dark"
//                   ? <Sun  size={20} />
//                   : <Moon size={20} />
//                 }
//               </button>

//               {/* Hamburger */}
//               <button
//                 onClick={() => setIsMobileOpen((p) => !p)}
//                 aria-label="Toggle mobile menu"
//                 aria-expanded={isMobileOpen}
//                 className="
//                   p-2 rounded-lg transition-colors duration-200
//                   text-(--text-secondary)] hover:text-(--text-primary)]
//                   hover:bg-(--bg-tertiary)]
//                 "
//               >
//                 <AnimatePresence mode="wait" initial={false}>
//                   {isMobileOpen ? (
//                     <motion.span
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0,   opacity: 1 }}
//                       exit={{   rotate:  90,  opacity: 0 }}
//                       transition={{ duration: 0.15 }}
//                       className="flex"
//                     >
//                       <X size={22} />
//                     </motion.span>
//                   ) : (
//                     <motion.span
//                       key="menu"
//                       initial={{ rotate:  90, opacity: 0 }}
//                       animate={{ rotate:   0, opacity: 1 }}
//                       exit={{   rotate: -90,  opacity: 0 }}
//                       transition={{ duration: 0.15 }}
//                       className="flex"
//                     >
//                       <Menu size={22} />
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </button>
//             </div>

//           </div>
//         </nav>
//       </header>

//       {/* ═══════════════════════════════════════
//           MOBILE DRAWER
//       ═══════════════════════════════════════ */}
//       <AnimatePresence>
//         {isMobileOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{   opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="fixed inset-0 z-90 bg-black/50 backdrop-blur-sm lg:hidden"
//               onClick={() => setIsMobileOpen(false)}
//               aria-hidden="true"
//             />

//             {/* Drawer Panel */}
//             <motion.div
//               role="dialog"
//               aria-modal="true"
//               aria-label="Navigation menu"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{   x: "100%" }}
//               transition={{ type: "spring", damping: 28, stiffness: 220 }}
//               className="
//                 fixed right-0 top-0 bottom-0
//                 z-95 w-70 max-w-[85vw]
//                 lg:hidden
//               "
//             >
//               <div
//                 className="
//                   flex flex-col h-full
//                   bg-(--bg-card)]
//                   border-l border-(--border-primary)]
//                   shadow-2xl
//                 "
//               >

//                 {/* ── Drawer Header ── */}
//                 <div
//                   className="
//                     flex items-center justify-between
//                     px-5 h-16 shrink-0
//                     border-b border-(--border-primary)]
//                   "
//                 >
//                   {/* Logo in drawer */}
//                   <Link
//                     href="/"
//                     onClick={() => setIsMobileOpen(false)}
//                     className="flex items-center"
//                   >
//                     <div className="relative h-40 w-40">
//                       <Image
//                         key={logoSrc}
//                         src={logoSrc}
//                         alt={COMPANY.name}
//                         fill
//                         sizes="112px"
//                         className="object-contain object-left"
//                         priority
//                       />
//                     </div>
//                   </Link>

//                   {/* Close Button */}
//                   <button
//                     onClick={() => setIsMobileOpen(false)}
//                     aria-label="Close menu"
//                     className="
//                       p-2 rounded-lg transition-colors duration-200
//                       text-(--text-secondary)]
//                       hover:text-(--text-primary)]
//                       hover:bg-(--bg-tertiary)]
//                     "
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>

//                 {/* ── Drawer Nav Links ── */}
//                 <nav className="flex-1 overflow-y-auto px-3 py-4">
//                   <ul className="space-y-1">
//                     {NAV_LINKS.map((link, index) => (
//                       <motion.li
//                         key={link.href}
//                         initial={{ opacity: 0, x: 16 }}
//                         animate={{ opacity: 1, x: 0  }}
//                         transition={{
//                           delay: index * 0.05,
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 24,
//                         }}
//                       >
//                         <Link
//                           href={link.href}
//                           onClick={() => setIsMobileOpen(false)}
//                           className={cn(
//                             "flex items-center justify-between",
//                             "w-full px-4 py-3 rounded-xl",
//                             "text-sm font-medium",
//                             "transition-all duration-200",
//                             isActive(link.href)
//                               ? [
//                                   "bg-primary-50 dark:bg-primary-950/40",
//                                   "text-white dark:text-white",
//                                 ]
//                               : [
//                                   "text-white]",
//                                   "hover:text-(--text-primary)]",
//                                   "hover:bg-(--bg-tertiary)]",
//                                 ]
//                           )}
//                         >
//                           <span>{link.label}</span>
//                           {isActive(link.href) && (
//                             <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
//                           )}
//                         </Link>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Divider */}
//                   <div className="my-4 h-px bg-(--border-primary)]" />

//                   {/* Quick Info */}
//                   <div className="px-4 py-2">
//                     <p className="text-xs text-(--text-tertiary)] font-medium uppercase tracking-wider mb-2">
//                       Quick Actions
//                     </p>
//                     <p className="text-xs text-(--text-tertiary)] leading-relaxed">
//                       Start automating your workflows today. No credit card required.
//                     </p>
//                   </div>
//                 </nav>

//                 {/* ── Drawer Footer ── */}
//                 <div
//                   className="
//                     shrink-0 px-4 py-5 space-y-3
//                     border-t border-(--border-primary)]
//                     bg-(--bg-secondary)]
//                   "
//                 >
//                   {/* Theme Toggle Row */}
//                   <div className="flex items-center justify-between px-1 mb-1">
//                     <span className="text-xs font-medium text-(--text-tertiary)]">
//                       {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
//                     </span>
//                     <button
//                       onClick={toggleTheme}
//                       aria-label="Toggle theme"
//                       className="
//                         flex items-center gap-2 px-3 py-1.5 rounded-lg
//                         text-xs font-medium
//                         bg-(--bg-tertiary)]
//                         text-(--text-secondary)]
//                         hover:text-(--text-primary)]
//                         border border-(--border-primary)]
//                         transition-all duration-200
//                       "
//                     >
//                       {mounted && resolvedTheme === "dark"
//                         ? <><Sun size={13} /> Light</>
//                         : <><Moon size={13} /> Dark</>
//                       }
//                     </button>
//                   </div>

//                   {/* CTA Buttons */}
//                   <Link href="/contact" className="block" onClick={() => setIsMobileOpen(false)}>
//                     <Button variant="secondary" fullWidth>
//                       Sign In
//                     </Button>
//                   </Link>
//                   <Link href="/demo" className="block" onClick={() => setIsMobileOpen(false)}>
//                     <Button variant="primary" fullWidth>
//                       Get Started Free
//                     </Button>
//                   </Link>
//                 </div>

//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

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
            /* Light → white/85  |  Dark → bg-card (#1a1a2e) /90 */
            background: isScrolled
              ? isDark
                ? "rgba(15, 15, 26, 0.90)"          /* --bg-primary dark */
                : "rgba(255, 255, 255, 0.90)"        /* --bg-primary light */
              : isDark
              ? "rgba(26, 26, 46, 0.80)"             /* --bg-card dark */
              : "rgba(255, 255, 255, 0.80)",         /* --bg-card light */
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            /* border */
            border: isScrolled
              ? isDark
                ? "none"
                : "none"
              : isDark
              ? "1px solid rgba(255,255,255,0.08)"   /* --border-primary dark */
              : "1px solid rgba(226,232,240,0.80)",  /* --border-primary light */
            borderBottom: isScrolled
              ? isDark
                ? "1px solid rgba(255,255,255,0.06)"
                : "1px solid rgba(226,232,240,0.60)"
              : undefined,
            /* shadow */
            boxShadow: isScrolled
              ? isDark
                ? "0 4px 30px rgba(0,0,0,0.40)"      /* --shadow-md dark */
                : "0 4px 30px rgba(0,0,0,0.07)"      /* --shadow-md light */
              : isDark
              ? "0 8px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 8px 40px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,1)",
          }}
        >
          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-15.5">

              {/* ── Logo ── */}
              <Link
                href="/"
                aria-label={COMPANY.name}
                className="shrink-0 flex items-center group"
              >
                <div className="relative h-50 w-50">
                  <Image
                    key={logoSrc}
                    src={logoSrc}
                    alt={COMPANY.name}
                    fill
                    sizes="120px"
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
                    ? "rgba(255,255,255,0.03)"       /* --bg-tertiary dark subtle */
                    : "rgba(241,245,249,0.80)",       /* --bg-tertiary light */
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
                      "relative px-4 py-2 rounded-full text-sm font-medium",
                      "transition-colors duration-200",
                      isActive(link.href)
                        ? "text-white"
                        : isDark
                        ? "text-[#94a3b8] hover:text-[#f1f5f9]"   /* --text-secondary / --text-primary dark */
                        : "text-[#475569] hover:text-[#0f172a]"    /* --text-secondary / --text-primary light */
                    )}
                  >
                    {/* Active linear pill */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)", /* --linear-primary */
                          boxShadow: "0 4px 15px rgba(99,102,241,0.40)",                  /* --shadow-glow */
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover pill */}
                    {!isActive(link.href) && activeHover === link.href && (
                      <motion.span
                        layoutId="hoverNavPill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: isDark
                            ? "rgba(255,255,255,0.06)"   /* --bg-tertiary dark */
                            : "rgba(226,232,240,0.60)",  /* --border-primary light tint */
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
                    background: isDark
                      ? "rgba(30,30,53,1)"             /* --bg-tertiary dark */
                      : "rgba(241,245,249,1)",          /* --bg-tertiary light */
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(226,232,240,1)",
                    color: isDark ? "#94a3b8" : "#475569", /* --text-secondary */
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
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                      background: "transparent",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"   /* --border-primary dark */
                        : "1px solid rgba(226,232,240,1)",     /* --border-primary light */
                      color: isDark ? "#94a3b8" : "#475569",   /* --text-secondary */
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
                </Link>

                {/* Get Started — linear CTA */}
                <Link href="/demo">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 25px rgba(99,102,241,0.45)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group"
                    style={{
                      background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)", /* --linear-primary */
                      boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                    }}
                  >
                    {/* Shine sweep */}
                    <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <span className="relative flex items-center gap-1.5">
                      <Zap size={14} className="fill-white" />
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
                      <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex"
                      >
                        <X size={20} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex"
                      >
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
            {/* ── Backdrop ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-90 lg:hidden"
              style={{
                background: isDark
                  ? "rgba(5, 5, 15, 0.70)"    /* over --bg-primary dark */
                  : "rgba(15, 23, 42, 0.35)",  /* over --bg-primary light */
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* ── Drawer Panel ── */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed right-3 top-3 bottom-3 z-95 w-75 max-w-[88vw] lg:hidden"
            >
              {/* linear glow ring (matches --linear-primary) */}
              <div
                className="absolute -inset-px rounded-[28px] pointer-events-none"
                style={{
                  background: "linear-linear(135deg, rgba(99,102,241,0.35) 0%, rgba(217,70,239,0.35) 100%)",
                  filter: "blur(1.5px)",
                }}
              />

              {/* Glass panel */}
              <div
                className="relative flex flex-col h-full rounded-[28px] overflow-hidden"
                style={{
                  /* --bg-card per theme */
                  background: isDark
                    ? "rgba(26, 26, 46, 0.92)"   /* --bg-card dark */
                    : "rgba(255, 255, 255, 0.92)",/* --bg-card light */
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"  /* --border-primary dark */
                    : "1px solid rgba(226,232,240,0.90)", /* --border-primary light */
                  boxShadow: isDark
                    ? "0 25px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)" /* --shadow-xl dark */
                    : "0 25px 60px rgba(99,102,241,0.10), inset 0 1px 0 rgba(255,255,255,1)", /* --shadow-xl light */
                }}
              >

                {/* Decorative blobs using brand colours */}
                <div
                  className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
                  style={{
                    background: isDark
                      ? "radial-linear(circle, rgba(99,102,241,0.18) 0%, rgba(217,70,239,0.10) 60%, transparent 100%)"
                      : "radial-linear(circle, rgba(99,102,241,0.08) 0%, rgba(217,70,239,0.04) 60%, transparent 100%)",
                    filter: "blur(35px)",
                  }}
                />
                <div
                  className="absolute bottom-24 left-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: isDark
                      ? "radial-linear(circle, rgba(217,70,239,0.12) 0%, rgba(99,102,241,0.08) 60%, transparent 100%)"
                      : "radial-linear(circle, rgba(217,70,239,0.06) 0%, rgba(99,102,241,0.04) 60%, transparent 100%)",
                    filter: "blur(28px)",
                  }}
                />

                {/* ── Drawer Header ── */}
                <div className="relative flex items-center justify-between px-5 pt-5 pb-4">
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center"
                  >
                    <div className="relative h-11 w-40">
                      <Image
                        key={logoSrc}
                        src={logoSrc}
                        alt={COMPANY.name}
                        fill
                        sizes="160px"
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                  </Link>

                  <motion.button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full transition-all duration-200"
                    style={{
                      background: isDark
                        ? "rgba(30,30,53,1)"             /* --bg-tertiary dark */
                        : "rgba(241,245,249,1)",          /* --bg-tertiary light */
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(226,232,240,1)",
                      color: isDark ? "#64748b" : "#94a3b8", /* --text-tertiary */
                    }}
                  >
                    <X size={15} />
                  </motion.button>
                </div>

                {/* linear divider */}
                <div
                  className="mx-5 h-px mb-3"
                  style={{
                    background: isDark
                      ? "linear-linear(90deg, transparent, rgba(255,255,255,0.07), transparent)"
                      : "linear-linear(90deg, transparent, rgba(99,102,241,0.15), transparent)",
                  }}
                />

                {/* ── Nav Links ── */}
                <nav className="relative flex-1 overflow-y-auto px-3 pb-2">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 + index * 0.055,
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
                          style={
                            isActive(link.href)
                              ? {
                                  /* Active: linear-primary */
                                  background: "linear-linear(135deg, rgba(99,102,241,0.88) 0%, rgba(217,70,239,0.88) 100%)",
                                  color: "#ffffff",
                                  boxShadow: "0 4px 15px rgba(99,102,241,0.30)",
                                }
                              : {
                                  color: isDark ? "#94a3b8" : "#475569", /* --text-secondary */
                                }
                          }
                          onMouseEnter={(e) => {
                            if (!isActive(link.href)) {
                              e.currentTarget.style.background = isDark
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(241,245,249,1)";
                              e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive(link.href)) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569";
                            }
                          }}
                        >
                          <span>{link.label}</span>
                          {isActive(link.href) ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                          ) : (
                            <ArrowRight
                              size={13}
                              style={{ color: isDark ? "#64748b" : "#cbd5e1" }} /* --text-tertiary */
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Quick Info card — matches sidebar cards on contact page */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.30 }}
                    className="mt-4 mx-1 p-4 rounded-2xl"
                    style={{
                      background: isDark
                        ? "linear-linear(135deg, rgba(99,102,241,0.12) 0%, rgba(217,70,239,0.07) 100%)"
                        : "linear-linear(135deg, rgba(99,102,241,0.06) 0%, rgba(217,70,239,0.03) 100%)",
                      border: isDark
                        ? "1px solid rgba(99,102,241,0.20)"
                        : "1px solid rgba(99,102,241,0.12)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles size={13} style={{ color: isDark ? "#818cfb" : "#6366f1" }} />
                      <p
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: isDark ? "#818cfb" : "#6366f1" }} /* --text-brand */
                      >
                        Quick Actions
                      </p>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: isDark ? "#64748b" : "#94a3b8" }} /* --text-tertiary */
                    >
                      Start automating your workflows today. No credit card required.
                    </p>
                  </motion.div>
                </nav>

                {/* linear divider */}
                <div
                  className="mx-5 h-px"
                  style={{
                    background: isDark
                      ? "linear-linear(90deg, transparent, rgba(255,255,255,0.06), transparent)"
                      : "linear-linear(90deg, transparent, rgba(99,102,241,0.12), transparent)",
                  }}
                />

                {/* ── Drawer Footer ── */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.20 }}
                  className="relative shrink-0 px-4 py-5 space-y-3"
                >
                  {/* Theme toggle row */}
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span
                      className="text-xs font-medium"
                      style={{ color: isDark ? "#64748b" : "#94a3b8" }} /* --text-tertiary */
                    >
                      {isDark ? "Dark Mode" : "Light Mode"}
                    </span>
                    <motion.button
                      onClick={toggleTheme}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                      style={{
                        background: isDark
                          ? "rgba(30,30,53,1)"           /* --bg-tertiary dark */
                          : "rgba(241,245,249,1)",        /* --bg-tertiary light */
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid rgba(226,232,240,1)",
                        color: isDark ? "#94a3b8" : "#475569",
                      }}
                    >
                      {mounted && isDark
                        ? <><Sun size={12} />&nbsp;Light</>
                        : <><Moon size={12} />&nbsp;Dark</>
                      }
                    </motion.button>
                  </div>

                  {/* Sign In button */}
                  <Link
                    href="/contact"
                    className="block"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-2.5 rounded-2xl text-sm font-medium transition-all duration-200"
                      style={{
                        background: "transparent",
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid rgba(226,232,240,1)",
                        color: isDark ? "#94a3b8" : "#475569",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(241,245,249,1)";
                        e.currentTarget.style.color = isDark ? "#f1f5f9" : "#0f172a";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569";
                      }}
                    >
                      Sign In
                    </motion.button>
                  </Link>

                  {/* Get Started linear button */}
                  <Link
                    href="/demo"
                    className="block"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.01,
                        boxShadow: "0 8px 25px rgba(99,102,241,0.45)",
                      }}
                      whileTap={{ scale: 0.99 }}
                      className="relative w-full py-2.5 rounded-2xl text-sm font-semibold text-white overflow-hidden group"
                      style={{
                        background: "linear-linear(135deg, #6366f1 0%, #d946ef 100%)", /* --linear-primary */
                        boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                      }}
                    >
                      {/* Shine sweep */}
                      <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Zap size={14} className="fill-white" />
                        Get Started Free
                      </span>
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