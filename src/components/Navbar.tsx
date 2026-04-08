"use client";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#020202]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      aria-label="Site navigation"
    >
      {/* Wordmark */}
      <span className="font-heading text-[1.46rem] md:text-xl tracking-tight text-bj-text-light uppercase select-none">
        Breaking Jenny
      </span>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#synopsis"
          className="font-heading text-bj-text-light/55 text-[0.62rem] tracking-[0.32em] uppercase hover:text-bj-crimson transition-colors duration-200"
        >
          The Story
        </a>
        <a
          href="#authors"
          className="font-heading text-bj-text-light/55 text-[0.62rem] tracking-[0.32em] uppercase hover:text-bj-crimson transition-colors duration-200"
        >
          Authors
        </a>
        <a
          href="#purchase"
          className="bg-bj-crimson text-white font-heading text-[0.62rem] tracking-[0.25em] uppercase px-5 py-2.5 min-h-[38px] hover:bg-bj-crimson-hover transition-colors duration-200"
          style={{ boxShadow: "0 0 20px rgba(172,18,18,0.28)" }}
        >
          Pre-Order
        </a>
      </div>
    </nav>
  );
}
