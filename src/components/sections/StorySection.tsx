"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseOverlay } from "./HeroSection";

const visibleParagraphs = [
  {
    text: "When Max, Jenny's fiancé, suddenly dies, grief is expected.",
    dropCap: true,
  },
  {
    text: null,
    multi: true,
    lines: [
      "What isn't expected is what she finds beneath the floorboards of their home.",
      "Hidden phones.",
      "Secret laptops.",
      "A journal detailing fantasies that blurred into strategy.",
    ],
  },
  {
    text: null,
    multi: true,
    lines: [
      "The cross-dressing partner she bankrolled wasn't simply unfaithful",
      "with both women and men;",
      "he was operating as a high-volume online porn star,",
      "dealing drugs,",
      "and outlining a plan that ended with her dead.",
    ],
  },
];

const expandedParagraphs = [
  {
    lines: [
      "But the deeper shock isn't what Max hid.",
      "It's how long Jenny ignored what was happening in plain sight.",
    ],
  },
  {
    lines: [
      "With the help of a therapist and two relentless advocates, Nic and Shane,",
      "Jenny begins unpacking the evidence Max left behind.",
    ],
  },
  {
    lines: [
      "As she reconstructs the timeline of their relationship,",
      "Jenny is forced to confront something far more destabilizing.",
      "The childhood that left her in pieces.",
      "The husband who stomped on them.",
      "The family that swept the shards under the rug.",
      "The pattern.",
    ],
  },
  {
    lines: [
      "For the first time, she is forced to see that what she called love was often coercion.",
      "What she called loyalty was submission.",
      "What she called strength was survival.",
    ],
  },
  {
    italic: true,
    lines: [
      "Breaking Jenny is a shocking true crime memoir told from the victim's point of view,",
      "but this is not a story about a naive woman duped by a con artist.",
      "It is about a woman who was conditioned to normalize monsters.",
    ],
  },
  {
    lines: [
      "Darkly funny, brutally honest, and emotionally unsparing,",
      "this memoir traces the anatomy of trauma bonding, generational dysfunction,",
      "and psychological control, and the painful, yet powerful awakening that follows.",
    ],
  },
];

export function StorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="py-24 md:py-32 lg:py-40 bg-[#090909] relative overflow-hidden"
      id="synopsis"
      aria-label="The Story"
    >
      <NoiseOverlay />

      {/* Crimson glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(172,18,18,0.09) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Crimson glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(172,18,18,0.13) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Subtle inner glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(172,18,18,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        {/* Paper card */}
        <motion.div
          className="relative bg-[#F6F2EC] p-8 md:p-14 lg:p-20"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 15px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.25)" }}
          initial={{ opacity: 0, y: 32, filter: "blur(8px)", rotate: -1.2 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.07,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          {/* Top-left crimson blur */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(172,18,18,0.12) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
            aria-hidden="true"
          />

          {/* Card header */}
          <header className="space-y-4 mb-12">
            <h2
              className="font-heading font-light uppercase leading-none tracking-tighter text-bj-text-dark"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              The <span className="text-bj-crimson">Story</span>
            </h2>
            <motion.div
              className="h-px bg-bj-crimson/50 w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ transformOrigin: "0% 50%" }}
              aria-hidden="true"
            />
          </header>

          {/* Story body */}
          <div className="font-sans text-[#1A1A1A]/80 font-light text-base md:text-[1.05rem] lg:text-[1.1rem] leading-[1.9]">
            {/* Always visible paragraphs */}
            <p className="mb-5 first-letter:text-[5rem] first-letter:font-heading first-letter:text-bj-crimson first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:uppercase">
              When Max, Jenny&rsquo;s fiancé, suddenly dies, grief is expected.
            </p>
            <p className="mb-5">
              What isn&rsquo;t expected is what she finds beneath the floorboards of their home.<br />
              Hidden phones.<br />
              Secret laptops.<br />
              A journal detailing fantasies that blurred into strategy.
            </p>
            <p className="mb-5">
              The cross-dressing partner she bankrolled wasn&rsquo;t simply unfaithful<br />
              with both women and men;<br />
              he was operating as a high-volume online porn star,<br />
              dealing drugs,<br />
              and outlining a plan that ended with her dead.
            </p>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center gap-2 font-heading text-bj-crimson text-[0.65rem] tracking-[0.3em] uppercase mt-2 mb-2 min-h-[44px]"
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
              >
                <span>{expanded ? "Show less" : "Continue reading"}</span>
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
            </div>

            {/* Desktop: always visible expanded content */}
            <div className="hidden md:block">
              <ExpandedContent />
            </div>

            {/* Mobile: animated expand */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="mobile-expanded"
                  className="md:hidden overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ExpandedContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExpandedContent() {
  return (
    <>
      <p className="mb-5">
        But the deeper shock isn&rsquo;t what Max hid.<br />
        It&rsquo;s how long Jenny ignored what was happening in plain sight.
      </p>
      <p className="mb-5">
        With the help of a therapist and two relentless advocates, Nic and Shane,<br />
        Jenny begins unpacking the evidence Max left behind.
      </p>
      <p className="mb-5">
        As she reconstructs the timeline of their relationship,<br />
        Jenny is forced to confront something far more destabilizing.<br />
        The childhood that left her in pieces.<br />
        The husband who stomped on them.<br />
        The family that swept the shards under the rug.<br />
        The pattern.
      </p>
      <p className="mb-5">
        For the first time, she is forced to see that what she called love was often coercion.<br />
        What she called loyalty was submission.<br />
        What she called strength was survival.
      </p>
      <p className="mb-5">
        <em>Breaking Jenny</em> is a shocking true crime memoir told from the victim&rsquo;s point of view,<br />
        but this is not a story about a naive woman duped by a con artist.<br />
        It is about a woman who was conditioned to normalize monsters.
      </p>
      <p className="mb-8">
        Darkly funny, brutally honest, and emotionally unsparing,<br />
        this memoir traces the anatomy of trauma bonding, generational dysfunction,<br />
        and psychological control, and the painful, yet powerful awakening that follows.
      </p>
      <p
        className="font-heading font-light text-bj-crimson uppercase tracking-tight"
        style={{ fontSize: "clamp(1.2rem, 2.8vw, 2rem)" }}
      >
        Because sometimes we need to break, in order to heal.
      </p>
    </>
  );
}
