import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { absoluteUrl } from "@/lib/seo";
import {
  companiesHouseNumber,
  companiesHouseUrl,
  registeredAddressLines,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us | Silver Watch Security LTD",
  description:
    "Why choose Silver Watch Security? Professional guards, quick response, 24/7 availability, affordable pricing and 100% satisfaction guarantee.",
  keywords: [
    "about Silver Watch Security",
    "security company UK",
    "SIA licensed security",
    "professional guards",
    "24/7 security",
  ],
  openGraph: {
    title: "About Us | Silver Watch Security LTD",
    description:
      "Why choose Silver Watch Security? Professional guards, 24/7 availability, 100% satisfaction guarantee.",
    url: absoluteUrl("/about"),
    type: "website",
    images: [{ url: absoluteUrl("/Secuirty_Guards.jpg"), alt: "Silver Watch Security team" }],
  },
  alternates: { canonical: absoluteUrl("/about") },
};

const reasons = [
  { title: "Professional & Trained Guards", desc: "SIA-licensed and vetted personnel with ongoing training and clear escalation procedures." },
  { title: "Quick Response", desc: "Fast deployment and alarm response when you need it—24/7 availability for urgent requests." },
  { title: "Wide Availability", desc: "We operate across the UK and can scale to your requirements, from single sites to multi-location portfolios." },
  { title: "Well Equipped", desc: "Uniforms, communication systems and reporting tools that meet professional standards." },
  { title: "Affordable Pricing", desc: "Competitive rates without compromising on quality—transparent quotes and no hidden costs." },
  { title: "100% Satisfaction Guarantee", desc: "We stand behind our service and work until you’re happy with the outcome." },
  { title: "One Window Solution", desc: "One point of contact for all your security needs—simplified procurement and management." },
  { title: "Capability", desc: "Experience across retail, corporate, events, healthcare, education, distribution and more." },
  { title: "Reliability", desc: "Consistent attendance, clear processes and dependable cover that you can plan around." },
  { title: "Flexibility", desc: "Short-term, long-term, ad-hoc and 24/7 options to suit your budget and operational needs." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0">
              <h1 className="text-3xl font-extrabold text-[#2b2f48] sm:text-4xl md:text-5xl">
                About Us
              </h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:text-lg md:text-xl">
                Silver Watch Security LTD is a UK-based security company committed to delivering professional, reliable and tailored security solutions. Founded with a focus on quality and client partnership, we have grown to serve businesses, institutions and events across multiple sectors—from retail and corporate offices to healthcare facilities, distribution centres and residential developments.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:text-lg md:text-xl">
                Our team combines industry experience with a hands-on approach. We invest in training, equipment and clear processes so that every deployment meets the highest standards. Whether you need manned guarding, mobile patrols, alarm response or event security, we work with you to design a solution that fits your risks, budget and expectations.
              </p>
            </div>
            <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl shadow-lg lg:aspect-square">
              <Image
                src="/Security-monitoring-cctv.webp"
                alt="Silver Watch Security team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-3xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            We combine experienced personnel, clear processes and a customer-first approach so you get security that works for your business—not just a box-ticking exercise.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-xl border-2 border-[#2b2f48]/5 bg-white p-4 shadow-sm transition-all hover:border-[#336aa9]/30 hover:shadow-md sm:gap-5 sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#336aa9] text-lg font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#2b2f48] group-hover:text-[#336aa9] transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-[#2b2f48]/80">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2b2f48]/10 bg-[#f8fafc] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#2b2f48] sm:text-3xl">
            Registered office & company details
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            <div className="rounded-2xl border-2 border-[#336aa9]/20 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#336aa9]">
                Address
              </h3>
              <address className="mt-3 not-italic text-base font-medium leading-relaxed text-[#2b2f48]/90">
                {registeredAddressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="rounded-2xl border-2 border-[#336aa9]/20 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#336aa9]">
                Companies House
              </h3>
              <p className="mt-3 text-base font-medium text-[#2b2f48]/90">
                Registered in Scotland
              </p>
              <p className="mt-2 text-lg font-bold text-[#2b2f48]">
                <a
                  href={companiesHouseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#336aa9] underline-offset-2 hover:text-[#2a5890] hover:underline"
                >
                  {companiesHouseNumber}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border-2 border-[#336aa9]/20 bg-white p-6 shadow-md transition-all hover:border-[#336aa9]/40 hover:shadow-lg sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#336aa9] text-2xl font-bold text-white shadow-lg">
                V
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#336aa9]">Vision</h3>
              <p className="mt-3 flex-1 text-lg font-medium leading-relaxed text-[#2b2f48]/80">
                To be the security partner of choice for businesses and institutions who value reliability, professionalism and results.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-[#336aa9]/20 bg-white p-6 shadow-md transition-all hover:border-[#336aa9]/40 hover:shadow-lg sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#336aa9] text-2xl font-bold text-white shadow-lg">
                M
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#336aa9]">Mission</h3>
              <p className="mt-3 flex-1 text-lg font-medium leading-relaxed text-[#2b2f48]/80">
                To deliver high-quality security services that protect people, assets and reputations, while building long-term relationships through trust and performance.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-[#336aa9]/20 bg-white p-6 shadow-md transition-all hover:border-[#336aa9]/40 hover:shadow-lg sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#336aa9] text-white shadow-lg">
                <CheckIcon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#336aa9]">Values</h3>
              <p className="mt-3 flex-1 text-lg font-medium leading-relaxed text-[#2b2f48]/80">
                Integrity, professionalism, reliability and customer focus. We do what we say we’ll do and we treat every client and every site with the same high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl">
                Our Approach
              </h2>
              <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:mt-8 sm:space-y-6 sm:text-lg md:text-xl">
                <p>
                  At Silver Watch Security, we believe security should be a partnership, not a commodity. We take time to understand your site, your risks and your objectives before proposing a solution. Our operations team maintains regular contact with clients and site managers to ensure standards are met and any issues are resolved quickly.
                </p>
                <p>
                  We recruit, train and deploy our staff to a consistent standard. All our guards are SIA-licensed where required, and we provide ongoing support and supervision. Our management systems ensure accurate reporting, clear handovers and accountability. When you work with us, you get a dedicated point of contact and a team that is invested in your success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image src="/Security-Services-guard_talking.png" alt="Security professional" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image src="/Security-guard-looking-over-a-rail.jpg" alt="Corporate security" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image src="/CCTV-Installation-Monitoring-1.png" alt="CCTV monitoring" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image src="/Event_security.jpg" alt="Event security" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
