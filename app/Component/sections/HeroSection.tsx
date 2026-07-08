"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "@/public/Image/banners/webdevelop.png";
import Banner2 from "@/public/Image/banners/uiux.png";
import Banner3 from "@/public/Image/banners/video.png";
import Banner4 from "@/public/Image/banners/mobiledevelop.png";
import Banner5 from "@/public/Image/banners/blockchain.png";
import Banner6 from "@/public/Image/banners/GraphicDesignBranding.png";
import Banner7 from "@/public/Image/banners/uiux.png";
import Banner8 from "@/public/Image/banners/webdevelop.png";

// ============================================
// TYPES
// ============================================

type Banner = {
  id: number;
  src: StaticImageData;
  alt: string;
};

// ============================================
// BANNER DATA  ← src is StaticImageData, NOT an array
// ============================================

const BANNERS: Banner[] = [
  { id: 1, src: Banner1, alt: "Web Development" },
  { id: 2, src: Banner2, alt: "UI/UX Design" },
  { id: 3, src: Banner3, alt: "Video Editing" },
  { id: 4, src: Banner4, alt: "Mobile Development" },
  { id: 5, src: Banner5, alt: "Blockchain & Web3" },
  { id: 6, src: Banner6, alt: "Graphic Design & Branding" },
  { id: 7, src: Banner7, alt: "UI/UX Design 2" },
  { id: 8, src: Banner8, alt: "Web Development 2" },
];

const AUTO_PLAY_INTERVAL = 4000;

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const transition: Transition = {
  x: { type: "tween", ease: [0.77, 0, 0.175, 1], duration: 0.6 },
  opacity: { duration: 0.25 },
};

// ============================================
// HERO SLIDER
// ============================================

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total          = BANNERS.length;
  const isPausedRef    = useRef(false);   // ← ref so timer closure always sees latest value
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX     = useRef(0);
  const isDraggingRef  = useRef(false);

  // ── go to a specific slide ──────────────────
  const goTo = useCallback(
    (index: number, dir?: number) => {
      const d = dir ?? (index > current ? 1 : -1);
      setDirection(d);
      setCurrent(((index % total) + total) % total);
    },
    [current, total]
  );

  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1,  1), [current, goTo]);

  // ── auto-play (timer never re-creates on every render) ──
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setDirection(1);
        setCurrent((c) => (c + 1) % total);
      }
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]); // runs once on mount

  // ── keyboard navigation ──────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // ── drag / swipe helpers ─────────────────────
  const handleDragStart = (clientX: number) => {
    dragStartX.current  = clientX;
    isDraggingRef.current = true;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ margin: 0, padding: 0 }}
      aria-label="Hero image slider"
      /* pause on hover */
      onMouseEnter={() => { isPausedRef.current = true;  }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      /* mouse drag */
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e)   => handleDragEnd(e.clientX)}
      /* touch swipe */
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e)   => handleDragEnd(e.changedTouches[0].clientX)}
    >
      {/* ══════════════════════════════
          SLIDE TRACK
      ══════════════════════════════ */}
      <div
        className="relative w-full p-2"
        style={{ height: "clamp(200px, 62vw, 100vh)" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 w-full h-full select-none "
          >
            <Image
              src={BANNERS[current].src}        /* ← StaticImageData directly */
              alt={BANNERS[current].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={current === 0}
              draggable={false}
            />

            {/* Bottom-to-top gradient so dots/arrows stay readable */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 45%, rgba(0,0,0,0.08) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ══════════════════════════════
            PROGRESS BAR — top
        ══════════════════════════════ */}
        <div
          className="absolute top-0 left-0 right-0 h-0.75 z-20"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          <motion.div
            key={`bar-${current}`}
            className="h-full"
            style={{
              background: "linear-gradient(90deg, #6366f1, #d946ef)",
              borderRadius: "0 100px 100px 0",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
          />
        </div>

        {/* ══════════════════════════════
            SLIDE COUNTER — top right
        ══════════════════════════════ */}
        <div
          className="absolute top-4 right-4 z-20 text-xs font-semibold tabular-nums"
          style={{
            color: "rgba(255,255,255,0.85)",
            background: "rgba(0,0,0,0.30)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "100px",
            padding: "4px 11px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {String(current + 1).padStart(2, "0")}
          <span style={{ opacity: 0.5 }}> / </span>
          {String(total).padStart(2, "0")}
        </div>

        {/* ══════════════════════════════
            LEFT ARROW
        ══════════════════════════════ */}
        <motion.button
          onClick={prev}
          aria-label="Previous slide"
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.92 }}
          className="
            absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20
            flex items-center justify-center
            w-9 h-9 sm:w-11 sm:h-11 rounded-full
            transition-colors duration-200
          "
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
          }}
        >
          <ChevronLeft size={18} color="#fff" />
        </motion.button>

        {/* ══════════════════════════════
            RIGHT ARROW
        ══════════════════════════════ */}
        <motion.button
          onClick={next}
          aria-label="Next slide"
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.92 }}
          className="
            absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20
            flex items-center justify-center
            w-9 h-9 sm:w-11 sm:h-11 rounded-full
            transition-colors duration-200
          "
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
          }}
        >
          <ChevronRight size={18} color="#fff" />
        </motion.button>

        {/* ══════════════════════════════
            DOTS — bottom center
        ══════════════════════════════ */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5"
          style={{
            background: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "100px",
            padding: "6px 12px",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="flex items-center justify-center"
            >
              <motion.span
                animate={{
                  width:   i === current ? 22 : 7,
                  opacity: i === current ? 1  : 0.40,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="block h-1.75 rounded-full"
                style={{
                  background:
                    i === current
                      ? "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)"
                      : "rgba(255,255,255,0.85)",
                  boxShadow:
                    i === current ? "0 0 8px rgba(99,102,241,0.55)" : "none",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};