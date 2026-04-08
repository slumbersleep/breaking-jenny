"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { NoiseOverlay } from "./HeroSection";

const evidence = [
  { src: "/evidence-1.png", alt: "Personal journal entry", rotA: -2.4, rotB: 1.8 },
  { src: "/evidence-2.png", alt: "Financial records spreadsheet", rotA: 1.6, rotB: -2.2 },
  { src: "/evidence-3.png", alt: "Cashier's check — Kings Auto", rotA: -1.8, rotB: 1.4 },
  { src: "/evidence-4.png", alt: "Financial transaction document", rotA: 2.6, rotB: -1.6 },
  { src: "/evidence-5.png", alt: "Government assistance application", rotA: -1.2, rotB: 2.8 },
  { src: "/evidence-6.png", alt: "Bank cashier's check", rotA: 2.0, rotB: -1.0 },
  { src: "/evidence-7.jpg", alt: "Evidence photograph", rotA: -1.6, rotB: 2.4 },
  { src: "/evidence-8.jpg", alt: "Dating profile screenshot", rotA: 2.2, rotB: -1.8 },
  { src: "/evidence-9.png", alt: "Bubble Gum Studios", rotA: -1.4, rotB: 1.2 },
  { src: "/evidence-10.jpg", alt: "Evidence photograph", rotA: 1.8, rotB: -2.6 },
  { src: "/evidence-11.jpg", alt: "Phone screenshot evidence", rotA: -2.0, rotB: 1.6 },
  { src: "/evidence-12.jpg", alt: "Devices evidence", rotA: 1.2, rotB: -1.4 },
];

// Row B starts from index 3 (like Vercel)
const rowBEvidence = evidence.slice(3);

// Duplicate for seamless loop
const rowA = [...evidence, ...evidence];
const rowB = [...rowBEvidence, ...rowBEvidence];

export function EvidenceSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % evidence.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + evidence.length) % evidence.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section
      className="relative bg-[#090909] overflow-hidden"
      aria-label="Evidence"
      style={{ contain: "layout paint" }}
    >
      <NoiseOverlay />

      {/* Left fade edge */}
      <div
        className="absolute inset-y-0 left-0 w-32 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #090909 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      {/* Right fade edge */}
      <div
        className="absolute inset-y-0 right-0 w-32 md:w-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #090909 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Header badge */}
      <div className="relative z-10 flex justify-center pt-16 pb-10">
        <FadeIn>
          <span className="font-heading text-bj-crimson text-[0.58rem] tracking-[0.45em] uppercase border border-bj-crimson/35 px-5 py-2">
            The Evidence
          </span>
        </FadeIn>
      </div>

      {/* Row A */}
      <div className="evidence-row overflow-hidden pb-5 relative z-10">
        <div
          className="evidence-track-left flex gap-5"
          style={{ width: "max-content", animation: "marquee-left 26s linear infinite", willChange: "transform" }}
        >
          {rowA.map((item, i) => {
            const isOriginal = i < evidence.length;
            return (
              <button
                key={i}
                className="evidence-card shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bj-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
                aria-label={`View evidence: ${item.alt}`}
                style={{ transform: `rotate(${item.rotA}deg)` }}
                onClick={() => setLightboxIndex(i % evidence.length)}
              >
                <div
                  className="evidence-print bg-white"
                  style={{ padding: "7px 7px 22px 7px", boxShadow: "0 6px 24px rgba(0,0,0,0.55)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="block w-auto"
                    style={{ height: "clamp(140px, 20vw, 220px)" }}
                    loading={isOriginal ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row B — desktop only */}
      <div className="hidden md:block evidence-row overflow-hidden pt-2 pb-16 relative z-10">
        <div
          className="evidence-track-right flex gap-5"
          style={{ width: "max-content", animation: "marquee-right 38s linear infinite", willChange: "transform" }}
        >
          {rowB.map((item, i) => {
            return (
              <button
                key={i}
                className="evidence-card shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bj-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
                aria-label={`View evidence: ${item.alt}`}
                style={{ transform: `rotate(${item.rotB}deg)` }}
                onClick={() => setLightboxIndex((i % rowBEvidence.length) + 3)}
              >
                <div
                  className="evidence-print bg-white"
                  style={{ padding: "7px 7px 22px 7px", boxShadow: "0 6px 24px rgba(0,0,0,0.55)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="block w-auto"
                    style={{ height: "clamp(120px, 14vw, 190px)" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile spacer */}
      <div className="md:hidden pb-16" aria-hidden="true" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-4 pb-12 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={evidence[lightboxIndex].src}
                  alt={evidence[lightboxIndex].alt}
                  className="block max-w-full max-h-[70vh] mx-auto"
                />
              </div>

              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Previous"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Next"
              >
                <ChevronRight size={36} />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm">
                {lightboxIndex + 1} / {evidence.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
