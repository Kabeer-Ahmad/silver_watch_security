"use client";

import { useState, useEffect, useCallback } from "react";
import { StarIcon } from "@/components/icons";
import { reviews } from "@/lib/reviews-data";

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      setIndex((i + reviews.length) % reviews.length);
    },
    []
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [index, isPaused, next]);

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-center text-base font-medium text-[#2b2f48]/70 sm:text-lg">
          Trusted by businesses and institutions across the UK
        </p>

        <div
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-[#2b2f48]/5 bg-[#e8f0f8] shadow-lg sm:min-h-[240px]">
            {reviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ease-in-out sm:p-8 md:p-10 ${
                  i === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <blockquote className="text-center">
                  <div className="flex justify-center gap-1 text-[#336aa9]">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <StarIcon key={j} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="mt-4 text-base font-medium text-[#2b2f48] sm:text-lg md:text-xl">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic text-lg font-bold text-[#336aa9]">
                      {review.name}
                    </cite>
                    <span className="text-base text-[#2b2f48]/70"> — {review.role}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#336aa9] bg-white shadow-md transition-all active:scale-95 hover:bg-[#336aa9] hover:text-white sm:h-10 sm:w-10 sm:shadow-none"
              aria-label="Previous review"
            >
              <svg className="h-6 w-6 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex max-w-full flex-wrap justify-center gap-2 overflow-x-auto px-2 py-1 sm:max-w-none sm:gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all min-[480px]:h-2 ${
                    i === index
                      ? "w-7 bg-[#336aa9] min-[480px]:w-6"
                      : "w-2.5 bg-[#2b2f48]/30 hover:bg-[#2b2f48]/50 min-[480px]:w-2"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#336aa9] bg-white shadow-md transition-all active:scale-95 hover:bg-[#336aa9] hover:text-white sm:h-10 sm:w-10 sm:shadow-none"
              aria-label="Next review"
            >
              <svg className="h-6 w-6 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="mt-3 text-center text-sm font-medium text-[#2b2f48]/50">
            {index + 1} of {reviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}
