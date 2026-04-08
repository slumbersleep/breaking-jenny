"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { NoiseOverlay } from "./HeroSection";

export function FinalCtaSection() {
  return (
    <section
      className="bg-[#090909] relative overflow-hidden"
      id="purchase"
      aria-label="Get Your Copy"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <NoiseOverlay />

      {/* Crimson bloom bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(172,18,18,0.10) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] items-center min-h-[85vh]">

          {/* Book — left */}
          <div className="order-1 lg:order-1 flex items-center justify-center pt-20 pb-8 lg:py-0 lg:min-h-[85vh]">
            <div className="relative">
              {/* Book glow */}
              <div
                className="absolute -inset-16 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(172,18,18,0.28) 0%, transparent 68%)",
                  filter: "blur(80px)",
                }}
                aria-hidden="true"
              />
              <FadeIn>
                <div>
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
                      loading="lazy"
                      sizes="(max-width: 640px) 96vw, (max-width: 1024px) 480px, (max-width: 1536px) 780px, 920px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Text — right */}
          <div className="order-2 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left gap-8 px-8 sm:px-12 lg:pr-16 xl:pr-24 lg:pl-6 pb-20 lg:py-0">

            <FadeIn>
              <div className="space-y-4">
                <p className="font-heading text-bj-crimson/70 text-[0.58rem] tracking-[0.45em] uppercase">
                  Available Now
                </p>
                <h2
                  className="font-heading font-light text-bj-text-light uppercase tracking-tighter leading-none"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
                >
                  Get Your <span className="text-bj-crimson">Copy</span>
                </h2>
                <motion.div
                  className="h-1 bg-bj-crimson mx-auto lg:mx-0"
                  initial={{ width: 0 }}
                  whileInView={{ width: "48px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  aria-hidden="true"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-sans text-bj-text-light/40 text-base md:text-lg leading-relaxed max-w-sm">
                A life reclaimed. A truth revealed. The story that refuses to be silenced.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-bj-crimson text-white font-heading uppercase tracking-[0.2em] text-base md:text-xl px-10 md:px-14 py-5 md:py-7 min-h-[64px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ boxShadow: "0 20px 50px rgba(172,18,18,0.30)" }}
              >
                Pre-Order on Amazon
              </a>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-5 font-sans text-bj-text-light/30 uppercase tracking-widest text-[0.58rem] font-semibold items-center">
                <span>Paperback</span>
                <span className="text-bj-crimson/30">/</span>
                <span>E-Book</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
