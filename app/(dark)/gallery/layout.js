export const metadata = {
  title: "Photo Gallery | See Our Themed Rooms, Pool & Amenities",
  description:
    "Browse 68 photos of Poke's Dreamy Disney Getaway - luxury 6 bedroom vacation home in Kissimmee. See themed rooms (Frozen, Coco, Mario), water slides, heated pool, entertainer's kitchen, and all amenities. Perfect for large families visiting Disney.",
  openGraph: {
    title: "Photo Gallery | Poke's Dreamy Disney Getaway",
    description:
      "Browse photos of our 6 bedroom Kissimmee family rental. Themed rooms, water slides, heated pool, and more. Perfect for large families visiting Disney.",
    url: "https://www.pokesdreamydisneygetaway.com/gallery",
    images: [
      {
        url: "/im0001.jpg",
        width: 1200,
        height: 630,
        alt: "Photo gallery of Poke's Dreamy Disney Getaway",
      },
    ],
  },
  twitter: {
    title: "Photo Gallery | Poke's Dreamy Disney Getaway",
    description:
      "Browse photos of our 6 bedroom Kissimmee family rental. Themed rooms, water slides, heated pool, and more.",
    images: ["/im0001.jpg"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/gallery",
  },
};

export default function Layout({ children, modal }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
