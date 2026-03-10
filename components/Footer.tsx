import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/book-now", label: "Book Now" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#336aa9]/20 bg-gradient-to-b from-[#f8fafc] to-[#e8f0f8] text-[#2b2f48]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start"
            >
              <Image
                src="/Logo_Circle.png"
                alt="Silver Watch Security"
                width={80}
                height={80}
                className="h-14 w-14 shrink-0 sm:h-20 sm:w-20"
              />
              <Image
                src="/Logo_Name_dark.png"
                alt="Silver Watch Security LTD"
                width={200}
                height={56}
                className="h-10 w-auto sm:h-12"
              />
            </Link>
            <p className="mt-4 text-base font-medium leading-relaxed text-[#2b2f48]/80">
              Professional security solutions across the UK. Trusted by businesses and institutions since 2019.
            </p>
          </div>

          <div className="rounded-xl bg-white/60 p-6 shadow-sm sm:p-6">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#336aa9]">
                Contact Us
              </h3>
              <span className="rounded-full bg-[#336aa9]/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#336aa9]">
                24/7
              </span>
            </div>
            <ul className="mt-5 space-y-4 sm:space-y-4">
              <li>
                <a
                  href="mailto:silverwatchsecurity@gmail.com"
                  className="group flex items-start gap-3 rounded-lg p-3 -m-3 transition-colors hover:bg-[#336aa9]/5 sm:p-0 sm:py-1 sm:pr-2 sm:-m-0"
                >
                  <span className="mt-0.5 shrink-0 text-[#336aa9]">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="break-all text-base font-medium text-[#2b2f48]/80 group-hover:text-[#336aa9]">
                    silverwatchsecurity@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07535216288"
                  className="group flex items-center gap-3 rounded-lg p-3 -m-3 transition-colors hover:bg-[#336aa9]/5 sm:p-0 sm:py-1 sm:pr-2 sm:-m-0"
                >
                  <span className="shrink-0 text-[#336aa9]">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-bold text-[#336aa9] group-hover:text-[#2a5890]">
                    07535 216288
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447535216288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg p-3 -m-3 transition-colors hover:bg-[#25D366]/10 sm:p-0 sm:py-1 sm:pr-2 sm:-m-0"
                >
                  <span className="shrink-0 text-[#25D366]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span className="text-base font-bold text-[#25D366] group-hover:text-[#1da851]">
                    WhatsApp: 07535 216288
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white/60 p-6 shadow-sm">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#336aa9]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-base font-medium text-[#2b2f48]/80 transition-all hover:translate-x-1 hover:text-[#336aa9]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-[#2b2f48]/10 bg-white/40 py-4 text-center text-base font-medium text-[#2b2f48]/60">
          <p>© {new Date().getFullYear()} Silver Watch Security LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
