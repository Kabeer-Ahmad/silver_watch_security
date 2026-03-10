import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl, defaultKeywords, absoluteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Silver Watch Security LTD | Professional Security Services UK",
  description:
    "Silver Watch Security provides professional security guards, mobile patrols, alarm response, key holding and more across retail, healthcare, corporate and events. SIA-licensed, 24/7 availability.",
  keywords: defaultKeywords,
  authors: [{ name: "Silver Watch Security LTD" }],
  creator: "Silver Watch Security LTD",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Silver Watch Security LTD",
    title: "Silver Watch Security LTD | Professional Security Services UK",
    description:
      "Professional security guards, mobile patrols, alarm response and more. SIA-licensed, 24/7. Trusted across the UK.",
    images: [{ url: absoluteUrl("/Security-Services-main-hero.jpg"), width: 1200, height: 630, alt: "Silver Watch Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silver Watch Security LTD | Professional Security Services UK",
    description: "Professional security guards, mobile patrols, alarm response. SIA-licensed, 24/7 across the UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-w-0 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
