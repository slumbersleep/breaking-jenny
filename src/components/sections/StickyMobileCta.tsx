"use client";

export function StickyMobileCta() {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 flex md:hidden"
      aria-label="Quick navigation"
      style={{ boxShadow: "0 -10px 30px rgba(172,18,18,0.25)" }}
    >
      {/* The Story */}
      <a
        href="#synopsis"
        className="flex flex-col items-center justify-center flex-1 h-16 bg-bj-crimson text-white hover:bg-bj-crimson-hover transition-colors duration-200 border-r border-white/15 active:scale-95"
      >
        <svg className="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <span className="font-heading text-[0.5rem] tracking-[0.2em] uppercase">The Story</span>
      </a>

      {/* Authors */}
      <a
        href="#authors"
        className="flex flex-col items-center justify-center flex-1 h-16 bg-bj-crimson text-white hover:bg-bj-crimson-hover transition-colors duration-200 border-r border-white/15 active:scale-95"
      >
        <svg className="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <span className="font-heading text-[0.5rem] tracking-[0.2em] uppercase">Authors</span>
      </a>

      {/* Pre-Order */}
      <a
        href="#purchase"
        className="flex flex-col items-center justify-center flex-1 h-16 bg-bj-crimson text-white hover:bg-bj-crimson-hover transition-colors duration-200 active:scale-95"
      >
        <svg className="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <span className="font-heading text-[0.5rem] tracking-[0.2em] uppercase">Pre-Order</span>
      </a>
    </nav>
  );
}
