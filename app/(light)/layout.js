import Footer from "../footer";
import "../globals.css";
import Header from "../header";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${oswald.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
