import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ExperienceCardsSlider from "@/components/ExperienceCardsSlider";
import SectorsBubbles from "@/components/SectorsBubbles";
import ReviewsSlider from "@/components/ReviewsSlider";
import { services as servicesData } from "@/lib/services-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Silver Watch Security LTD | Professional Security Services UK",
  description:
    "Professional security guards, mobile patrols, alarm response, key holding and more. SIA-licensed, 24/7. Trusted by businesses across retail, healthcare, corporate and events.",
  keywords: [
    "security guards UK",
    "mobile patrols",
    "alarm response",
    "key holding",
    "manned guarding",
    "SIA licensed",
    "24/7 security",
    "Silver Watch Security",
  ],
  openGraph: {
    title: "Silver Watch Security LTD | Professional Security Services UK",
    description:
      "Professional security guards, mobile patrols, alarm response. SIA-licensed, 24/7. Trusted across the UK.",
    url: absoluteUrl("/"),
    type: "website",
    images: [{ url: absoluteUrl("/Security-Services-main-hero.jpg"), width: 1200, height: 630, alt: "Silver Watch Security" }],
  },
  alternates: { canonical: absoluteUrl("/") },
};

const services = servicesData.map((s) => ({
  name: s.name,
  href: `/services/${s.slug}`,
  short: s.shortDescription,
  image: s.image,
}));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-[#e8f0f8] to-white px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2b2f48] sm:text-4xl md:text-5xl lg:text-6xl">
              Professional Security Solutions You Can Trust
            </h1>
            <p className="mt-4 text-lg font-medium text-[#2b2f48]/80 sm:mt-6 sm:text-xl">
              Silver Watch Security LTD delivers reliable, professional security services across the UK. From manned guarding and mobile patrols to alarm response and events—we protect what matters to you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center rounded-lg bg-[#336aa9] px-5 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-[#2a5890] sm:px-6 sm:text-lg"
              >
                Get a Quote
              </Link>
              <a
                href="tel:07535216288"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#336aa9] px-5 py-3.5 text-base font-bold text-[#336aa9] transition-colors hover:bg-[#336aa9]/5 sm:px-6 sm:text-lg"
              >
                Call 07535 216288
              </a>
              <a
                href="https://wa.me/447535216288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#2b2f48] px-5 py-3.5 text-base font-bold text-[#2b2f48] transition-colors hover:bg-[#2b2f48]/5 sm:px-6 sm:text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full min-w-0 shrink-0 overflow-hidden rounded-2xl shadow-xl lg:aspect-square lg:max-w-xl">
            <Image
              src="/Security-Services-main-hero.jpg"
              alt="Silver Watch Security"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
            />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <SectorsBubbles />

      {/* Experience */}
      <section className="border-y border-[#2b2f48]/5 bg-[#f8fafc] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#336aa9]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#336aa9] sm:px-4 sm:py-1.5 sm:text-sm">
              Trusted Since 2019
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#2b2f48] sm:mt-6 sm:text-4xl md:text-5xl">
              Over 5 Years of Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-3xl px-2 text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:mt-6 sm:px-0 sm:text-xl">
              Silver Watch Security has built a reputation for reliability, professionalism and results. Our team has guarded retail sites, corporate offices, distribution centres, healthcare facilities, events and residential developments—giving us the expertise to tailor solutions to your sector and budget.
            </p>
          </div>

          <ExperienceCardsSlider />

          <div className="mt-10 flex flex-col items-center gap-6 sm:mt-16 sm:flex-row sm:justify-center">
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl bg-[#336aa9] px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-[#2a5890] hover:shadow-lg"
            >
              Learn more about us
            </Link>
            <div className="relative aspect-video w-full max-w-[280px] overflow-hidden rounded-2xl shadow-xl sm:max-w-xs">
              <Image
                src="/Secuirty_Guards.jpg"
                alt="Professional security guards"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#e8f0f8] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-base font-medium text-[#2b2f48]/80 sm:px-0 sm:text-xl">
            From static guarding to mobile patrols, alarm response to events—we offer a full range of professional security solutions.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                {service.image ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2b2f48]/5">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : null}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-[#2b2f48] group-hover:text-[#336aa9]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-[#2b2f48]/70">{service.short}</p>
                  <span className="mt-2 inline-block text-base font-semibold text-[#336aa9] group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-lg bg-[#336aa9] px-5 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#2a5890] sm:px-6 sm:text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSlider />
    </>
  );
}
