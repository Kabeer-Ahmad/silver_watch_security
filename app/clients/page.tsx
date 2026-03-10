import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/components/icons";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Clients | Silver Watch Security LTD",
  description:
    "Silver Watch Security works with leading organisations including J&B Medical, Smart Watch Security, Omega 1, Vistar Security and GT Security.",
  keywords: [
    "security company clients",
    "J&B Medical",
    "Omega 1 Security",
    "Vistar Security",
    "GT Security",
  ],
  openGraph: {
    title: "Our Clients | Silver Watch Security LTD",
    description:
      "Trusted by leading organisations across retail, corporate, healthcare and events.",
    url: absoluteUrl("/clients"),
    type: "website",
  },
  alternates: { canonical: absoluteUrl("/clients") },
};

const clients = [
  {
    name: "J&B Medical and Security Services Limited",
    description: "Working alongside J&B Medical and Security Services in delivering coordinated security and support across healthcare and security sectors.",
    rating: 5,
    partnershipYears: 4,
  },
  {
    name: "Smart Watch Security",
    description: "Collaborating with Smart Watch Security on projects requiring integrated technology and manned guarding solutions.",
    rating: 5,
    partnershipYears: 3,
  },
  {
    name: "Omega 1 Security",
    description: "Partnering with Omega 1 Security to provide reliable, professional security coverage for a range of clients and sectors.",
    rating: 5,
    partnershipYears: 4,
  },
  {
    name: "Vistar Security Ltd",
    description: "Supporting Vistar Security Ltd with additional capacity and specialist services for retail, corporate and events.",
    rating: 5,
    partnershipYears: 3,
  },
  {
    name: "GT Security",
    description: "Working with GT Security to deliver high-quality security services and shared best practice across the industry.",
    rating: 5,
    partnershipYears: 2,
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="absolute inset-0">
          <Image src="/Security-Services-main-hero.jpg" alt="" fill className="object-cover opacity-15" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#2b2f48] sm:text-4xl md:text-5xl">
            Our Clients & Partners
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            Silver Watch Security is trusted by businesses and institutions across the UK. We are proud to work with and alongside some of the industry’s leading names.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client.name}
                className="overflow-hidden rounded-xl border-2 border-[#2b2f48]/10 bg-white p-0 shadow-sm transition-all hover:border-[#336aa9]/20 hover:shadow-md"
              >
                <div className="border-b border-[#2b2f48]/5 bg-[#f8fafc] px-6 py-4 sm:px-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h2 className="text-lg font-bold text-[#2b2f48] sm:text-xl">
                      {client.name}
                    </h2>
                    <span className="shrink-0 rounded-full bg-[#336aa9]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#336aa9]">
                      Active Client
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <div className="flex gap-0.5 text-[#336aa9]">
                      {Array.from({ length: client.rating }).map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5" />
                      ))}
                      <span className="ml-1 text-sm font-medium text-[#2b2f48]/70">
                        {client.rating}/5
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-[#336aa9]">
                      {client.partnershipYears}+ years partnership
                    </span>
                  </div>
                </div>
                <p className="p-6 text-base font-medium text-[#2b2f48]/80 sm:p-8 sm:pt-6">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
          <section className="mt-16 sm:mt-20">
            <div className="rounded-2xl border-2 border-[#2b2f48]/10 bg-gradient-to-b from-[#e8f0f8] to-[#f8fafc] p-8 sm:p-12">
              <h2 className="text-center text-2xl font-extrabold text-[#2b2f48] sm:text-3xl">
                And Many More…
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:text-lg">
                We serve numerous other clients across various sectors including retail, corporate offices, events, construction sites, and residential properties. Our commitment to excellence has earned us the trust of businesses and individuals throughout the UK.
              </p>

              <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
                <div className="rounded-xl border border-[#336aa9]/20 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-[#336aa9] sm:text-4xl">50+</p>
                  <p className="mt-1 text-base font-semibold text-[#2b2f48]">Active Clients</p>
                </div>
                <div className="rounded-xl border border-[#336aa9]/20 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-[#336aa9] sm:text-4xl">5+</p>
                  <p className="mt-1 text-base font-semibold text-[#2b2f48]">Years Experience</p>
                </div>
                <div className="rounded-xl border border-[#336aa9]/20 bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-[#336aa9] sm:text-4xl">24/7</p>
                  <p className="mt-1 text-base font-semibold text-[#2b2f48]">Support Available</p>
                </div>
              </div>

              <div className="mt-12 rounded-xl border-2 border-[#336aa9]/30 bg-white p-6 text-center sm:mt-16 sm:p-8">
                <h3 className="text-xl font-extrabold text-[#2b2f48] sm:text-2xl">
                  Join Our Growing Client Base
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-base font-medium text-[#2b2f48]/80">
                  Experience the same level of professional security services that our clients trust.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center rounded-lg bg-[#336aa9] px-6 py-3 font-bold text-white transition-all hover:bg-[#2a5a8f]"
                  >
                    Get Quote
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-[#336aa9] px-6 py-3 font-bold text-[#336aa9] transition-all hover:bg-[#336aa9] hover:text-white"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
