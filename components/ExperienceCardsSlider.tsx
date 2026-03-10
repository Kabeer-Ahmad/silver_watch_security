"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const cards = [
  {
    badge: "5+",
    title: "Years Experience",
    desc: "In the security industry",
  },
  {
    badge: "24/7",
    title: "Availability",
    desc: "Around-the-clock support",
  },
  {
    badge: "100%",
    title: "Satisfaction",
    desc: "Guarantee on every job",
    badgeClass: "min-w-[4.5rem] px-3 text-lg",
  },
  {
    badge: "UK",
    title: "Wide Coverage",
    desc: "Trusted across multiple sectors",
  },
];

const cardBase =
  "group flex flex-col items-center rounded-2xl border-2 border-[#2b2f48]/5 bg-white px-6 py-8 text-center shadow-sm transition-all hover:border-[#336aa9]/30 hover:shadow-lg sm:px-8 sm:py-10";

function Card({
  badge,
  title,
  desc,
  badgeClass = "",
}: {
  badge: string;
  title: string;
  desc: string;
  badgeClass?: string;
}) {
  return (
    <div className={cardBase}>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-[#336aa9] text-2xl font-bold text-white shadow-lg transition-transform group-hover:scale-110 ${badgeClass}`}
      >
        {badge}
      </div>
      <h3 className="mt-6 text-xl font-bold text-[#2b2f48]">{title}</h3>
      <p className="mt-2 text-base font-medium text-[#2b2f48]/70">{desc}</p>
    </div>
  );
}

export default function ExperienceCardsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.clientWidth * 0.82 + 16; // 82% + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), cards.length - 1));
  }, [isMobile]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveFromScroll);
  }, [updateActiveFromScroll]);

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.82 + 16;
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setActiveIndex(i);
  };

  return (
    <>
      {/* Mobile: slider with peek */}
      <div className="mt-10 sm:mt-0 sm:hidden">
        <div
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-[82%] shrink-0 snap-center sm:w-auto"
              style={{ minWidth: "82%" }}
            >
              <Card
                badge={card.badge}
                title={card.title}
                desc={card.desc}
                badgeClass={card.badgeClass ?? ""}
              />
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="mt-5 px-4">
          <div className="flex gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="h-1.5 flex-1 rounded-full transition-colors"
                style={{
                  backgroundColor: i === activeIndex ? "#336aa9" : "rgba(43,47,72,0.2)",
                }}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-sm font-medium text-[#2b2f48]/60">
            {activeIndex + 1} of {cards.length}
          </p>
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="mt-10 hidden gap-6 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Card
            key={i}
            badge={card.badge}
            title={card.title}
            desc={card.desc}
            badgeClass={card.badgeClass ?? ""}
          />
        ))}
      </div>
    </>
  );
}
