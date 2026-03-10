import type { Metadata } from "next";
import Image from "next/image";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book Now | Get Your Quote | Silver Watch Security LTD",
  description:
    "Get your security quote 24/7. Contact Silver Watch Security via WhatsApp, phone or email. Our experts are available around the clock.",
  keywords: [
    "security quote",
    "get a quote",
    "contact security company",
    "24/7 security",
    "WhatsApp security",
  ],
  openGraph: {
    title: "Book Now | Get Your Quote | Silver Watch Security LTD",
    description:
      "Get your security quote 24/7. Contact via WhatsApp, phone or email. Experts available around the clock.",
    url: absoluteUrl("/book-now"),
    type: "website",
  },
  alternates: { canonical: absoluteUrl("/book-now") },
};

export default function BookNowPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#2b2f48] sm:text-4xl md:text-5xl">
            Get Your Quote
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            Tell us your security requirements and we’ll provide a tailored quote. Choose the option that suits you best.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-extrabold text-[#2b2f48] sm:text-2xl md:text-3xl">
            Three Ways to Book Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium text-[#2b2f48]/70 sm:text-lg">
            Choose your preferred method—we respond quickly to all enquiries.
          </p>
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
            <a
              href="https://wa.me/447535216288"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border-2 border-[#2b2f48]/10 bg-white p-6 text-center transition-all hover:border-[#25D366] hover:bg-[#25D366]/5 hover:shadow-lg sm:p-8"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#2b2f48]">WhatsApp</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#2b2f48]/70 sm:text-base">
                Send your requirements—we’ll respond quickly.
              </p>
              <span className="mt-5 inline-block rounded-lg bg-[#25D366]/10 px-4 py-2 font-bold text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
                07535 216288
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#2b2f48]/50">
                Message now →
              </span>
            </a>
            <a
              href="tel:07535216288"
              className="group flex flex-col rounded-xl border-2 border-[#2b2f48]/10 bg-white p-6 text-center transition-all hover:border-[#336aa9] hover:bg-[#336aa9]/5 hover:shadow-lg sm:p-8"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#336aa9]/10 text-[#336aa9] transition-colors group-hover:bg-[#336aa9]/20">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#2b2f48]">Call</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#2b2f48]/70 sm:text-base">
                Speak directly to our team for an immediate quote.
              </p>
              <span className="mt-5 inline-block rounded-lg bg-[#336aa9]/10 px-4 py-2 font-bold text-[#336aa9] transition-colors group-hover:bg-[#336aa9]/20">
                07535 216288
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#2b2f48]/50">
                Call now →
              </span>
            </a>
            <a
              href="mailto:silverwatchsecurity@gmail.com"
              className="group flex flex-col rounded-xl border-2 border-[#2b2f48]/10 bg-white p-6 text-center transition-all hover:border-[#336aa9] hover:bg-[#336aa9]/5 hover:shadow-lg sm:p-8"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#336aa9]/10 text-[#336aa9] transition-colors group-hover:bg-[#336aa9]/20">
                <MailIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#2b2f48]">Email</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#2b2f48]/70 sm:text-base">
                Send your brief—we’ll reply with a detailed quote.
              </p>
              <span className="mt-5 break-all rounded-lg bg-[#336aa9]/10 px-4 py-2 text-sm font-bold text-[#336aa9] transition-colors group-hover:bg-[#336aa9]/20 sm:text-base">
                silverwatchsecurity@gmail.com
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#2b2f48]/50">
                Email now →
              </span>
            </a>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-xl bg-[#e8f0f8] p-6 sm:mt-16 sm:p-8">
            <div className="absolute right-0 top-0 hidden h-full w-1/3 md:block">
              <Image src="/Concierge-Security.jpg" alt="" fill className="object-cover object-right opacity-20" />
            </div>
            <div className="relative">
              <h2 className="text-xl font-extrabold text-[#2b2f48] sm:text-2xl md:text-3xl">
                24/7 Availability
              </h2>
              <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
              Our security experts are available around the clock to discuss your security needs and provide immediate assistance. Whether you need a quote for ongoing guarding, a one-off event or an urgent alarm response—we’re here to help.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
