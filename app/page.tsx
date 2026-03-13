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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f0f8] via-white to-[#e8f0f8]/80 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(51,106,169,0.12) 0%, transparent 45%),
              radial-gradient(circle at 80% 70%, rgba(43,47,72,0.06) 0%, transparent 40%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14 lg:flex-row lg:items-center lg:gap-16">
          <div className="min-w-0 flex-1">
            <h1 className="animate-hero-title relative border-l-[4px] border-[#336aa9] pl-4 sm:pl-5 md:border-l-[5px] md:pl-6">
              <span className="block font-black uppercase tracking-[0.12em] text-[#336aa9] text-[0.65rem] sm:text-xs md:text-sm">
                Trusted across the UK
              </span>
              <span className="mt-2 block text-[1.65rem] font-black leading-[1.08] tracking-[-0.035em] text-[#2b2f48] [text-shadow:0_1px_0_rgba(255,255,255,0.8)] sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.06] xl:text-[3.45rem]">
                Professional Security{" "}
                <span className="relative inline-block text-[#336aa9]">
                  <span
                    className="absolute -bottom-0.5 left-[-2%] right-[-2%] top-[62%] -skew-x-6 rounded-sm bg-[#336aa9]/20"
                    aria-hidden
                  />
                  <span className="relative">Solutions</span>
                </span>{" "}
                <span className="text-[#2b2f48]">You Can Trust</span>
              </span>
            </h1>
            {/* Corner-frame text block */}
            <div className="animate-hero-frame relative mt-6 sm:mt-8">
              <span
                className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-[3px] border-t-[3px] border-[#336aa9] sm:h-12 sm:w-12"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-r-[3px] border-t-[3px] border-[#336aa9] sm:h-12 sm:w-12"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 border-b-[3px] border-l-[3px] border-[#2b2f48]/35 sm:h-12 sm:w-12"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b-[3px] border-r-[3px] border-[#2b2f48]/35 sm:h-12 sm:w-12"
                aria-hidden
              />
              <div className="border border-[#2b2f48]/10 bg-white/70 px-5 py-6 shadow-sm backdrop-blur-sm sm:px-8 sm:py-8">
                <p className="animate-hero-text text-base font-medium leading-relaxed text-[#2b2f48]/90 sm:text-lg md:text-xl">
                  Welcome to Silver Watch Security LTD, your trusted partner for comprehensive security
                  solutions in the United Kingdom. At Silver Watch Security, we take pride in delivering
                  top-notch security services tailored to meet the unique needs of our clients.
                </p>
              </div>
            </div>
            <div className="animate-hero-buttons mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/book-now"
                className="col-span-2 inline-flex items-center justify-center rounded-lg bg-[#336aa9] px-5 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[#2a5890] hover:shadow-lg active:scale-[0.98] sm:col-span-1 sm:w-auto sm:px-6 sm:text-lg"
              >
                Get a Quote
              </Link>
              <a
                href="tel:07535216288"
                className="inline-flex min-w-0 items-center justify-center rounded-lg border-2 border-[#336aa9] px-3 py-3.5 text-center text-sm font-bold leading-tight text-[#336aa9] transition-all hover:bg-[#336aa9]/5 active:scale-[0.98] sm:min-w-0 sm:px-6 sm:text-lg"
              >
                Call 07535 216288
              </a>
              <a
                href="https://wa.me/447535216288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-0 items-center justify-center rounded-lg border-2 border-[#25D366] px-3 py-3.5 text-center text-sm font-bold leading-tight text-[#25D366] transition-all hover:bg-[#25D366]/10 active:scale-[0.98] sm:px-6 sm:text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="animate-hero-image relative aspect-[4/3] w-full min-w-0 shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[#2b2f48]/10 lg:aspect-square lg:max-w-xl">
            <Image
              src="/Security-Services-main-hero.jpg"
              alt="Silver Watch Security"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2b2f48]/20 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <div className="animate-section-in" style={{ animationDelay: "0.15s" }}>
        <SectorsBubbles />
      </div>

      {/* Experience */}
      <section className="animate-section-in border-y border-[#2b2f48]/5 bg-[#f8fafc] py-12 sm:py-20 lg:py-24">
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
          <h2 className="animate-section-in text-center text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-base font-medium text-[#2b2f48]/80 sm:px-0 sm:text-xl">
            From static guarding to mobile patrols, alarm response to events—we offer a full range of professional security solutions.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="animate-services-card group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ animationDelay: `${Math.min(i * 0.05, 0.6)}s` }}
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
