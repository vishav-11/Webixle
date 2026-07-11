"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Banner1 from "@/public/Image/banners/webdevelop.png";
import Banner2 from "@/public/Image/banners/uiux.png";
import Banner3 from "@/public/Image/banners/video.png";
import Banner4 from "@/public/Image/banners/mobiledevelop.png";
import Banner5 from "@/public/Image/banners/blockchain.png";
import Banner6 from "@/public/Image/banners/GraphicDesignBranding.png";
import Banner7 from "@/public/Image/banners/uiux.png";
import Banner8 from "@/public/Image/banners/dgmarketing.png";

// ============================================
// TYPES
// ============================================

type Banner = {
  id: number;
  src: StaticImageData;
  alt: string;
};

// ============================================
// BANNER DATA
// ============================================

const BANNERS: Banner[] = [
  { id: 1, src: Banner1, alt: "Web Development" },
  { id: 2, src: Banner2, alt: "UI/UX Design" },
  { id: 3, src: Banner3, alt: "Video Editing" },
  { id: 4, src: Banner4, alt: "Mobile Development" },
  { id: 5, src: Banner5, alt: "Blockchain & Web3" },
  { id: 6, src: Banner6, alt: "Graphic Design & Branding" },
  { id: 7, src: Banner7, alt: "UI/UX Design 2" },
  { id: 8, src: Banner8, alt: "Digital Marketing" },
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

  const total       = BANNERS.length;
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX  = useRef(0);
  const isDragging  = useRef(false);

  // ── go to specific slide ──
  const goTo = useCallback(
    (index: number, dir?: number) => {
      const d = dir ?? (index > current ? 1 : -1);
      setDirection(d);
      setCurrent(((index % total) + total) % total);
    },
    [current, total]
  );

  // ── Auto-play — never pauses, never stops ──
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  // ── Swipe / Drag helpers ──
  const handleDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) > 50) {
      delta > 0
        ? goTo(current + 1, 1)
        : goTo(current - 1, -1);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      // ✅ Top se 50px margin
      style={{ marginTop: "50px" }}
      aria-label="Hero image slider"
      // ✅ Touch swipe support
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e)   => handleDragEnd(e.changedTouches[0].clientX)}
      // ✅ Mouse drag support
      onMouseDown={(e)  => handleDragStart(e.clientX)}
      onMouseUp={(e)    => handleDragEnd(e.clientX)}
    >
      {/* ══════════════════════════════
          SLIDE TRACK
      ══════════════════════════════ */}
      <div
        className="relative w-full"
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
            className="absolute inset-0 w-full h-full select-none"
          >
            <Image
              src={BANNERS[current].src}
              alt={BANNERS[current].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={current === 0}
              draggable={false}
            />

            {/* Bottom gradient for dots readability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 40%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ══════════════════════════════
            DOTS — bottom center only
            ✅ Progress bar hata diya
            ✅ Counter hata diya
            ✅ Left/Right buttons hata diye
        ══════════════════════════════ */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20
            flex items-center gap-1.5"
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
                className="block h-1.5 rounded-full"
                style={{
                  background:
                    i === current
                      ? "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)"
                      : "rgba(255,255,255,0.85)",
                  boxShadow:
                    i === current
                      ? "0 0 8px rgba(99,102,241,0.55)"
                      : "none",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};