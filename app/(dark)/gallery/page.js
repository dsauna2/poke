import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of Poke's Dreamy Disney Getaway - 6 bedroom Kissimmee family rental. See themed rooms (Frozen, Coco, Mario), water slides, heated pool, kitchen, and all amenities. Perfect Orlando vacation home for large families.",
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

export default function Gallery() {
  const arr = Array.from({ length: 68 }, (_, i) => i + 1);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
        <h1 className="font-oswald text-4xl font-extrabold text-gray-700 mb-8">
          Photo Gallery
        </h1>
        <div className="grid md:grid-cols-3 gap-3">
          {arr.map((item) => {
            const formattedItem = item.toString().padStart(4, "0");
            return (
              <Link href={`/photo/${formattedItem}`} key={formattedItem}>
                <Image
                  className="rounded-sm shadow-md"
                  src={`/im${formattedItem}.jpg`}
                  width={1900}
                  height={1267}
                  alt={`Gallery image ${formattedItem}`}
                  key={formattedItem}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
