import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services | Silver Watch Security LTD",
  description:
    "Professional security services: security guards, mobile patrols, alarm response, key holding, concierge, empty property, events, CCTV, dog handling and more.",
  keywords: [
    "security guards UK",
    "mobile patrols",
    "alarm response",
    "key holding",
    "event security",
    "SIA licensed",
    "manned guarding",
  ],
  openGraph: {
    title: "Services | Silver Watch Security LTD",
    description:
      "Security guards, mobile patrols, alarm response, key holding, concierge, events and more. Professional security across the UK.",
    url: absoluteUrl("/services"),
    type: "website",
    images: [{ url: absoluteUrl("/Security-Services-main-hero.jpg"), alt: "Silver Watch Security services" }],
  },
  alternates: { canonical: absoluteUrl("/services") },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#2b2f48] sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            From manned guarding and mobile patrols to alarm response and events—we offer a full range of professional security solutions tailored to your sector and budget.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#2b2f48]/10 bg-white shadow-sm transition-all hover:border-[#336aa9]/30 hover:shadow-lg"
              >
                {service.image ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-[#2b2f48]/5">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="text-xl font-bold text-[#2b2f48] group-hover:text-[#336aa9]">
                    {service.name}
                  </h2>
                  <p className="mt-3 flex-1 text-base font-medium text-[#2b2f48]/70">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-block text-base font-semibold text-[#336aa9] group-hover:underline">
                    Read full details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
