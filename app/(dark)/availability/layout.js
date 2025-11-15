export const metadata = {
  title: "Check Availability | Book Your Disney Vacation Dates",
  description:
    "Check real-time availability for Poke's Dreamy Disney Getaway - 6 bedroom themed home in Kissimmee. View our calendar and find the perfect dates for your Orlando Disney vacation. Sleeps 13 guests with themed rooms and heated pool.",
  openGraph: {
    title: "Availability Calendar | Poke's Dreamy Disney Getaway",
    description:
      "Check availability for our 6 bedroom Kissimmee family rental. View calendar and find perfect dates for your Orlando vacation near Disney World.",
    url: "https://www.pokesdreamydisneygetaway.com/availability",
    images: [
      {
        url: "/hero_2025.webp",
        width: 1200,
        height: 630,
        alt: "Check availability at Poke's Dreamy Disney Getaway",
      },
    ],
  },
  twitter: {
    title: "Availability Calendar | Poke's Dreamy Disney Getaway",
    description:
      "Check availability for our 6 bedroom Kissimmee family rental. View calendar and find perfect dates.",
    images: ["/hero_2025.webp"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/availability",
  },
};

export default function AvailabilityLayout({ children }) {
  return children;
}
