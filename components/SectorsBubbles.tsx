"use client";

import { useState, useEffect } from "react";

const sectors = [
  "Retail",
  "Distribution",
  "Healthcare",
  "Leisure & NTE",
  "Corporate & Financial",
  "Residential",
  "Events",
  "Hospitals",
  "Ports",
  "Agriculture",
  "Education",
  "Government",
  "Construction",
  "Hospitality",
  "Warehousing",
  "Manufacturing",
];

export default function SectorsBubbles() {
  const [displaySectors, setDisplaySectors] = useState(sectors);

  useEffect(() => {
    setDisplaySectors((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#e8f0f8] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mx-auto max-w-2xl text-sm font-bold leading-snug text-[#2b2f48] sm:text-base sm:leading-normal md:text-lg lg:text-xl">
          We deploy our security solution services across sectors including
        </p>
        <div className="relative mx-auto mt-8 flex min-h-[160px] max-w-4xl flex-wrap items-center justify-center gap-3 px-1 sm:mt-10 sm:min-h-[180px] sm:gap-4 sm:px-0">
          {displaySectors.map((sector, i) => (
            <span
              key={sector}
              className="animate-float inline-flex rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#2b2f48] shadow-md sm:px-5 sm:py-2.5 sm:text-base"
              style={{ animationDelay: `${(i % 6) * 0.5}s` }}
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
