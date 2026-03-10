"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/book-now", label: "Book Now" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2b2f48]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/Logo_Circle.png"
            alt="Silver Watch Security"
            width={64}
            height={64}
            className="h-10 w-10 shrink-0 sm:h-12 sm:w-12 md:h-16 md:w-16"
            priority
          />
          <Image
            src="/Logo_Name_dark.png"
            alt="Silver Watch Security LTD"
            width={220}
            height={64}
            className="h-8 w-auto sm:h-10 md:h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2.5 text-base font-semibold transition-all duration-200 ${
                pathname === link.href
                  ? "bg-[#336aa9]/10 text-[#336aa9]"
                  : "text-[#2b2f48] hover:bg-[#336aa9]/5 hover:text-[#336aa9]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-now"
            className="ml-2 rounded-lg bg-[#336aa9] px-5 py-2.5 text-base font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#2a5890] hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 rounded p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-[#2b2f48] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#2b2f48] ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#2b2f48] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#2b2f48]/10 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-semibold transition-all ${
                  pathname === link.href ? "bg-[#336aa9]/10 text-[#336aa9]" : "text-[#2b2f48] hover:bg-[#336aa9]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-now"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-[#336aa9] px-4 py-2.5 text-center text-base font-bold text-white shadow-md transition-all active:scale-95"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
