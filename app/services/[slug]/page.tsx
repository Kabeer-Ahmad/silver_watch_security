import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Silver Watch Security" };
  const url = absoluteUrl(`/services/${slug}`);
  return {
    title: `${service.name} | Silver Watch Security LTD`,
    description: service.shortDescription,
    keywords: [service.name, "security UK", "SIA licensed", "Silver Watch Security"],
    openGraph: {
      title: `${service.name} | Silver Watch Security LTD`,
      description: service.shortDescription,
      url,
      type: "website",
      images: service.image
        ? [{ url: absoluteUrl(service.image), alt: service.name }]
        : undefined,
    },
    alternates: { canonical: url },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-white">
      <section className="border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-base font-semibold text-[#336aa9] hover:underline"
          >
            ← All Services
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold text-[#2b2f48] sm:text-3xl md:text-4xl lg:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#2b2f48]/10">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#336aa9]/20 to-[#2b2f48]/20 text-[#2b2f48]/50"
                    aria-hidden
                  >
                    <span className="text-sm font-medium">
                      {service.imagePlaceholder ?? service.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-6 sm:mt-8">
                <p className="text-base font-medium leading-relaxed text-[#2b2f48]/80 sm:text-lg md:text-xl">{service.description}</p>
              </div>
            </div>
            <div>
              {service.highlights && service.highlights.length > 0 && (
                <div className="rounded-xl border border-[#2b2f48]/10 bg-[#e8f0f8] p-4 sm:p-6">
                  <h2 className="text-xl font-bold text-[#2b2f48]">
                    Why choose us for {service.name}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-base font-medium text-[#2b2f48]/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#336aa9]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 rounded-xl border border-[#336aa9]/30 bg-white p-4 sm:mt-6 sm:p-6">
                <p className="text-lg font-bold text-[#2b2f48]">Need this service?</p>
                <p className="mt-2 text-base font-medium text-[#2b2f48]/70">
                  Get a quote or discuss your requirements with our team.
                </p>
                <Link
                  href="/book-now"
                  className="mt-4 inline-block w-full rounded-lg bg-[#336aa9] px-4 py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-[#2a5890]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
