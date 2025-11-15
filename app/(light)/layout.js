import Footer from "../footer";
import "../globals.css";
import Header from "../header";
import { Analytics } from "@vercel/analytics/react";
import PromoBanner from "../components/PromoBanner";

import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.pokesdreamydisneygetaway.com/"),
  title: {
    default:
      "Poke's Dreamy Disney Getaway | 6 Bedroom Kissimmee Family Rental Near Disney",
    template: "%s | Poke's Dreamy Disney Getaway",
  },
  description:
    "6 bedroom Orlando vacation home for large families. Located in Kissimmee, FL just 4 miles from Disney World. Accommodates 13 guests with themed rooms, water slides, and heated pool.",
  keywords: [
    "Kissimmee family rental",
    "Orlando Disney Rental",
    "Orlando Vacation home",
    "6 bedroom rental",
    "large family rental",
    "Disney vacation home",
    "Kissimmee vacation rental",
    "Windsor Hills rental",
    "Orlando family rental",
    "Themed home",
    "heated pool home",
  ],
  authors: [{ name: "Poke's Dreamy Disney Getaway" }],
  creator: "Poke's Dreamy Disney Getaway",
  publisher: "Poke's Dreamy Disney Getaway",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pokesdreamydisneygetaway.com/",
    siteName: "Poke's Dreamy Disney Getaway",
    title:
      "Poke's Dreamy Disney Getaway | 6 Bedroom Kissimmee Family Rental Near Disney",
    description:
      "6 bedroom Orlando vacation home for large families. Located in Kissimmee, FL just 4 miles from Disney World. Accommodates 13 guests with themed rooms, water slides, and heated pool.",
    images: [
      {
        url: "/hero_2025.webp",
        width: 1200,
        height: 630,
        alt: "Poke's Dreamy Disney Getaway - 6 Bedroom Kissimmee Family Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poke's Dreamy Disney Getaway | 6 Bedroom Kissimmee Family Rental",
    description:
      "6 bedroom Orlando vacation home for large families. Just 4 miles from Disney World. Accommodates 13 guests.",
    images: ["/hero_2025.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/",
  },
  verification: {
    // Add Google Search Console verification if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>
        <PromoBanner />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
