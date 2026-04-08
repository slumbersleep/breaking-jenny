"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function NoiseOverlay({ opacity = 0.032 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.45' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}

function CrackLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.05 }}
      aria-hidden="true"
    >
      <g stroke="white" fill="none" strokeLinecap="round">
        <path d="M820,0 L816,155 L782,248 L756,385 L730,515 L702,705 L682,900" strokeWidth="1.2" opacity="0.85" />
        <path d="M816,155 L872,215 L913,345 L952,475 L992,655 L1012,900" strokeWidth="0.75" opacity="0.60" />
        <path d="M782,248 L732,272 L682,365 L648,492" strokeWidth="0.65" opacity="0.50" />
        <path d="M756,385 L808,368 L848,408" strokeWidth="0.50" opacity="0.42" />
        <path d="M0,355 L225,335 L455,344 L682,365 L782,248" strokeWidth="0.75" opacity="0.32" />
        <path d="M1440,285 L1205,300 L982,315 L913,345" strokeWidth="0.65" opacity="0.28" />
        <path d="M816,155 L778,134 L735,104 L705,0" strokeWidth="0.55" opacity="0.32" />
        <path d="M816,155 L862,138 L914,112 L972,0" strokeWidth="0.45" opacity="0.28" />
        <path d="M730,515 L672,535 L615,595 L562,705 L534,900" strokeWidth="0.48" opacity="0.38" />
        <path d="M702,705 L762,725 L804,808 L814,900" strokeWidth="0.38" opacity="0.32" />
      </g>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#111111]"
      aria-label="Hero"
    >
      <NoiseOverlay />
      <CrackLines />

      {/* Crimson glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(172,18,18,0.10) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-center min-h-screen">

          {/* Book — right column, order 1 on mobile */}
          <div className="order-1 lg:order-2 flex items-center justify-center pt-8 pb-6 lg:py-0 lg:min-h-screen">
            <div className="relative">
              {/* Book glow */}
              <div
                className="absolute -inset-16 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(172,18,18,0.20) 0%, transparent 68%)",
                  filter: "blur(80px)",
                }}
                aria-hidden="true"
              />
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                  <div
                    className="relative w-[min(96vw,560px)] sm:w-[480px] lg:w-[640px] xl:w-[780px] 2xl:w-[920px]"
                    style={{
                      aspectRatio: "1 / 1.08",
                      WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 50% 44%, black 30%, transparent 72%)",
                      maskImage: "radial-gradient(ellipse 78% 82% at 50% 44%, black 30%, transparent 72%)",
                    }}
                  >
                    <Image
                      src="/book-cover.webp"
                      alt="Breaking Jenny — book cover"
                      fill
                      priority
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 480px, (max-width: 1536px) 780px, 920px"
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text — left column, order 2 on mobile */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-7 px-8 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-6 pb-20 lg:py-0">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <span className="inline-block bg-bj-crimson text-white font-heading text-[0.58rem] tracking-[0.35em] uppercase px-4 py-1.5">
                Based on a True Story
              </span>
            </motion.div>

            {/* Title */}
            <h1
              className="font-heading font-light uppercase leading-[0.88] tracking-tighter text-bj-crimson"
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 9rem)",
                textShadow: "0 0 80px rgba(172,18,18,0.28), 0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              >
                Breaking
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
              >
                Jenny
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p
              className="font-sans text-bj-text-light/60 text-lg md:text-2xl lg:text-2xl leading-snug max-w-lg"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              This isn&rsquo;t just a memoir; it&rsquo;s evidence.
            </motion.p>

            {/* Byline */}
            <motion.p
              className="font-heading text-bj-caption text-[0.65rem] tracking-[0.42em] uppercase border-l-2 border-[#555557]/45 pl-4"
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              by Nic Fairbrother &amp; Shane Stanley
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
            >
              <a
                href="#purchase"
                className="inline-flex items-center justify-center bg-bj-crimson text-white font-heading uppercase tracking-[0.18em] text-sm md:text-base px-10 py-5 min-h-[52px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{ boxShadow: "0 15px 30px rgba(172,18,18,0.35)" }}
              >
                Pre-Order on Amazon
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NoiseOverlay, CrackLines };
