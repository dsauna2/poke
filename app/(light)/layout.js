import Footer from "../footer";
import "../globals.css";
import Header from "../header";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Poke's Dreamy Disney Getaway",
  description: "6 bedroom rental 10 mins from Disney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
