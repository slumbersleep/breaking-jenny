"use client";
import { motion } from "framer-motion";
import { NoiseOverlay, CrackLines } from "./HeroSection";
import { FadeIn } from "@/components/FadeIn";

export function SocialProofSection() {
  return (
    <section
      className="py-32 md:py-40 lg:py-48 bg-[#090909] relative flex items-center justify-center overflow-hidden"
      aria-label="Praise"
    >
      <NoiseOverlay />
      <CrackLines />

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(172,18,18,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Bottom-right glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(172,18,18,0.09) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      {/* Top-left grey glow */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(80,80,80,0.06) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 w-full">
        <FadeIn>
          <div
            className="relative flex flex-col items-center text-center"
            style={{
              background: "rgba(255,255,255,0.055)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 0 0 1px rgba(172,18,18,0.08) inset, 0 1px 0 rgba(255,255,255,0.12) inset, 0 50px 100px -20px rgba(0,0,0,0.6)",
            }}
          >
            {/* Top shine line */}
            <div
              className="absolute top-0 left-8 right-8 h-px pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }}
              aria-hidden="true"
            />

            {/* Bottom-right glow inside card */}
            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(172,18,18,0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center gap-8 p-10 md:p-20 lg:p-24">
              {/* Label badge */}
              <FadeIn>
                <span className="inline-flex items-center gap-2 font-heading text-bj-crimson text-[0.58rem] tracking-[0.45em] uppercase border border-bj-crimson/35 px-5 py-2">
                  Critical Praise
                </span>
              </FadeIn>

              {/* Quote */}
              <blockquote>
                <FadeIn delay={0.1}>
                  <p className="font-sans italic text-bj-text-light text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.25]">
                    &ldquo;Raw, messy, vulnerable, and achingly human… the story pulls you in and refuses to let go.&rdquo;
                  </p>
                </FadeIn>
              </blockquote>

              {/* Animated divider */}
              <motion.div
                className="h-px bg-bj-crimson/30"
                initial={{ width: 0 }}
                whileInView={{ width: "64px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                aria-hidden="true"
              />

              {/* Attribution */}
              <footer>
                <FadeIn delay={0.2}>
                  <cite className="not-italic flex flex-col items-center gap-2">
                    <span className="font-heading text-bj-crimson tracking-[0.4em] uppercase text-xl md:text-2xl">
                      Nikki Boyer
                    </span>
                    <span className="font-sans text-bj-text-light/40 text-xs md:text-sm tracking-widest uppercase font-medium">
                      Executive Producer, <em>Dying For Sex</em>
                    </span>
                  </cite>
                </FadeIn>
              </footer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
