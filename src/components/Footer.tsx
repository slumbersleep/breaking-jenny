"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NoiseOverlay } from "./sections/HeroSection";

export function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="relative w-full py-16 px-6 flex flex-col items-center gap-10 bg-[#020202] overflow-hidden">
        <NoiseOverlay />

        <div className="relative z-10 flex flex-col items-center gap-10">
          {/* Wordmark */}
          <span
            className="font-heading text-3xl font-bold text-bj-crimson uppercase tracking-tighter"
            aria-label="Breaking Jenny"
          >
            Breaking Jenny
          </span>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex justify-center">
            <button
              className="font-heading text-bj-caption text-[0.6rem] tracking-[0.3em] uppercase hover:text-bj-text-light transition-colors duration-200 cursor-pointer"
              onClick={() => setShowContact(true)}
            >
              Contact
            </button>
          </nav>

          {/* Bottom */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-16 bg-[#555557]/30" aria-hidden="true" />
            <p className="font-sans text-[#555557]/60 text-[0.6rem] tracking-[0.4em] uppercase">
              &copy; {new Date().getFullYear()} Breaking Jenny. All Evidence Protected.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-8 max-w-sm w-full shadow-2xl"
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 text-[#EFEFEF]/40 hover:text-[#EFEFEF] transition-colors font-heading text-sm tracking-widest"
              >
                ✕
              </button>
              <h3 className="font-heading text-xl font-semibold tracking-widest uppercase text-bj-text-light mb-1">
                Contact
              </h3>
              <p className="text-sm text-bj-text-light/50 mb-6 font-sans">
                For press, media, and general inquiries.
              </p>
              <a
                href="mailto:shanestanley1@gmail.com"
                className="text-bj-crimson hover:text-bj-crimson-hover transition-colors font-medium font-sans"
              >
                shanestanley1@gmail.com
              </a>
              <p className="mt-1 text-sm text-bj-text-light/40 font-sans">
                Shane Stanley
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
