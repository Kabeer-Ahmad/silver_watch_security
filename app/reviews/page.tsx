import type { Metadata } from "next";
import ReviewsSlider from "@/components/ReviewsSlider";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { reviews } from "@/lib/reviews-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Reviews | Silver Watch Security LTD",
  description:
    "See what our clients say about Silver Watch Security. Trusted by businesses and institutions across the UK.",
  keywords: [
    "Silver Watch Security reviews",
    "security company reviews",
    "client testimonials",
    "security guard reviews UK",
  ],
  openGraph: {
    title: "Reviews | Silver Watch Security LTD",
    description:
      "See what our clients say about Silver Watch Security. Trusted by businesses across the UK.",
    url: absoluteUrl("/reviews"),
    type: "website",
  },
  alternates: { canonical: absoluteUrl("/reviews") },
};

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="absolute inset-0">
          <Image src="/Secuirty_Guards.jpg" alt="" fill className="object-cover opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-[#2b2f48] sm:text-4xl md:text-5xl">
            Client Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            We’re proud of the feedback we receive from our clients. Here’s what some of them have to say about working with Silver Watch Security.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ReviewsSlider />
        </div>
      </section>

      <section className="border-t border-[#2b2f48]/10 bg-[#e8f0f8] py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-[#2b2f48] sm:text-2xl md:text-3xl">
            All Reviews
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-xl bg-white p-4 shadow-sm sm:p-6"
              >
                <div className="flex gap-1 text-[#336aa9]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-3 text-lg font-medium text-[#2b2f48]">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-3">
                  <cite className="not-italic text-lg font-bold text-[#336aa9]">
                    {review.name}
                  </cite>
                  <span className="text-base text-[#2b2f48]/70"> — {review.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base font-medium text-[#2b2f48]/80 sm:text-lg md:text-xl">
            Interested in working with us? Get in touch for a no-obligation quote and join the many businesses who trust Silver Watch Security.
          </p>
          <Link
            href="/book-now"
            className="mt-6 inline-block rounded-lg bg-[#336aa9] px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#2a5890]"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
