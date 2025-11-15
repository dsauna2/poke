export const metadata = {
  title: "Book Now | Reserve Your Disney Vacation Home in Kissimmee",
  description:
    "Book your stay at Poke's Dreamy Disney Getaway - luxury 6 bedroom themed home in Kissimmee, FL. Perfect for large families visiting Disney World. Check rates, availability and reserve your magical vacation home today!",
  openGraph: {
    title: "Book Your Stay | Poke's Dreamy Disney Getaway",
    description:
      "Book your stay at our 6 bedroom Kissimmee family rental. Perfect for large families visiting Disney World. Check availability and reserve today.",
    url: "https://www.pokesdreamydisneygetaway.com/book",
    images: [
      {
        url: "/hero_2025.webp",
        width: 1200,
        height: 630,
        alt: "Book your stay at Poke's Dreamy Disney Getaway",
      },
    ],
  },
  twitter: {
    title: "Book Your Stay | Poke's Dreamy Disney Getaway",
    description:
      "Book your stay at our 6 bedroom Kissimmee family rental. Perfect for large families visiting Disney World.",
    images: ["/hero_2025.webp"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/book",
  },
};

export default function BookLayout({ children }) {
  return children;
}
