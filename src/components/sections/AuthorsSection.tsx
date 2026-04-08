"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

interface Author {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: React.ReactNode;
}

const authors: Author[] = [
  {
    name: "Nic Fairbrother",
    role: "Writer",
    image: "/nic-fairbrother.jpg",
    shortBio:
      "Nic Fairbrother is an award-winning Canadian filmmaker and writer who grew up on a farm in a small town. She studied Psychology before transitioning into film, a foundation that continues to shape her character-driven work across film, television, and publishing.",
    fullBio: (
      <>
        <p>
          Nic Fairbrother is an award-winning Canadian filmmaker and writer who
          grew up on a farm in a small town. She studied Psychology before
          transitioning into film, a foundation that continues to shape her
          character-driven work across film, television, and publishing.
        </p>
        <p>
          Her debut short film Monster—which she wrote, directed, produced, and
          starred in—premiered at the Cannes Short Film Corner and received
          international recognition, leading to collaborations with filmmakers
          including Shane Stanley, and later with Sony Pictures Entertainment.
        </p>
        <p>
          Her screenwriting has earned fellowships with Cinestory, support from
          the MovieMaker Production Fund, and top honors at the Nashville Film
          Festival Screenwriting Competition.
        </p>
        <p>
          In addition to her work behind the camera, Fairbrother has an
          extensive background as a performer, with experience in theatre as
          well as film and television, including a lead voice role in the
          animated series <em>Animism: The Gods&#8217; Lake</em>.
        </p>
        <p>
          She is a partner at Akula Literary Partners, where she develops
          projects for film, television, and print.
        </p>
        <p>Breaking Jenny is her debut true-crime novel.</p>
      </>
    ),
  },
  {
    name: "Shane Stanley",
    role: "Two-Time Emmy\u00ae Award-Winning Filmmaker",
    image: "/shane-stanley.jpg",
    shortBio:
      "Shane Stanley is a two-time Emmy\u00ae Award-winning filmmaker whose independent films consistently top global streaming charts. He directed the #1 hits Night Train and Double Threat and produced the #1 box office hit Gridiron Gang starring Dwayne Johnson. He is also the author of the bestselling What You Don't Learn in Film School, recognized by CNN and Forbes as one of the best filmmaking books of its kind.",
    fullBio: (
      <>
        <p>
          A four-time Emmy nominee, Shane Stanley is one of Hollywood&rsquo;s
          most prolific independent producers, with over 65 feature films and
          countless television projects to his credit spanning more than 35
          years. His action-thriller <em>Night Train</em> and action-comedy{" "}
          <em>Double Threat</em> have both charted globally on Netflix, with{" "}
          <em>Double Threat</em> reaching #1 in 43 countries.
        </p>
        <p>
          Raised in Hollywood, Stanley began his career alongside legends such
          as Sylvester Stallone and Martin Scorsese before striking out on his
          own path as an independent filmmaker. His breakout docu-series{" "}
          <em>The Desperate Passage Series</em>, which he produced and directed,
          achieved record-breaking ratings for A&amp;E Television and launched
          his reputation as a master of gripping, character-driven storytelling.
        </p>
        <p>
          He recently completed the music drama{" "}
          <em>Six Days in Evergreen</em> and the historical epic{" "}
          <em>The Legend of Van Dorn</em>, both set for release later this year.
        </p>
      </>
    ),
  },
];

export function AuthorsSection() {
  const [modalAuthor, setModalAuthor] = useState<Author | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalAuthor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalAuthor]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalAuthor(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section
        className="py-24 md:py-32 lg:py-40 bg-[#111111]"
        id="authors"
        aria-label="Meet the Authors"
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col items-center mb-16 md:mb-24 gap-4">
              <h2
                className="font-heading font-light uppercase leading-none tracking-tighter text-bj-text-light text-center"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                The <span className="text-bj-crimson">Authors</span>
              </h2>
              <motion.div
                className="h-px bg-bj-crimson/50 w-full max-w-xs"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "0% 50%" }}
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-24">
            {authors.map((author) => (
              <FadeIn key={author.name}>
                <article className="group cursor-default">
                  {/* Portrait */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 40%, transparent 100%)" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-heading text-3xl md:text-4xl font-light uppercase tracking-tight text-bj-text-light mb-2">
                    {author.name}
                  </h3>

                  {/* Role */}
                  <p className="font-sans text-bj-crimson/70 text-sm mb-5">
                    {author.role}
                  </p>

                  {/* Short bio */}
                  <p className="font-sans text-bj-text-light/55 text-base md:text-lg leading-relaxed font-light mb-7">
                    {author.shortBio}
                  </p>

                  {/* Read full bio — opens modal */}
                  <button
                    type="button"
                    onClick={() => setModalAuthor(author)}
                    className="inline-flex items-center gap-3 font-heading text-bj-crimson text-sm tracking-[0.22em] uppercase font-bold group-hover:gap-5 transition-all duration-300 min-h-[44px]"
                  >
                    Read full bio
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {modalAuthor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={() => setModalAuthor(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setModalAuthor(null)}
                className="absolute top-5 right-5 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors text-xl leading-none font-light"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="p-8 md:p-10">
                {/* Author name — Oswald, matching H2 weight */}
                <h2
                  className="font-heading font-light uppercase leading-none tracking-tight text-bj-text-dark mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
                >
                  {modalAuthor.name}
                </h2>

                {/* Red underline bar */}
                <div className="h-0.5 w-12 bg-bj-crimson mb-6" />

                {/* Full bio text */}
                <div className="space-y-4 font-sans text-[#1A1A1A]/75 text-base leading-relaxed font-light">
                  {modalAuthor.fullBio}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
