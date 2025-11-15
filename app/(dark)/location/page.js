import Map from "@/app/components/map";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import { getPlaceSchema, getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = {
  title: "Location | Windsor Hills Kissimmee - Only 4 Miles from Disney",
  description:
    "Prime location in Windsor Hills Resort, Kissimmee, FL - just 3-4 miles from Disney World theme parks. Enjoy community amenities: resort pool, aquatic water park, movie theater, gaming arcades, fitness center. Perfect for Disney vacations!",
  openGraph: {
    title: "Location | Windsor Hills Kissimmee - 4 Miles from Disney",
    description:
      "Located in Windsor Hills, Kissimmee, FL, just 3-4 miles from Disney World. Resort amenities include pool, aquatic park, movie theater, and gaming arcades.",
    url: "https://www.pokesdreamydisneygetaway.com/location",
    images: [
      {
        url: "/condo/condo01.jpg",
        width: 1200,
        height: 630,
        alt: "Windsor Hills community amenities",
      },
    ],
  },
  twitter: {
    title: "Location | Windsor Hills Kissimmee - 4 Miles from Disney",
    description:
      "Located in Windsor Hills, Kissimmee, FL, just 3-4 miles from Disney World. Resort amenities available.",
    images: ["/condo/condo01.jpg"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/location",
  },
};

export default function LocationPage() {
  const arr = Array.from({ length: 4 }, (_, i) => i + 1);
  const placeSchema = getPlaceSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Location", url: "/location" },
  ]);

  return (
    <div className="max-w-screen-lg mx-auto py-32 min-h-screen px-4">
      <Script
        id="place-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placeSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <h1 className=" font-oswald text-4xl font-extrabold text-gray-700 my-8">
        LOCATION
      </h1>
      <p className="mb-8">
        Nestled within the renowned Windsor Hills community, Poke&apos;s Dreamy
        Disney Getaway boasts an exceptional location just around 3 miles from
        Disney World. The neighborhood offers an array of fantastic amenities
        including a pool, aquatic park, daily activities, a movie theater,
        gaming arcades, ping pong tables, and a pool table, ensuring an
        unforgettable and vibrant vacation experience.
      </p>
      <div className="grid md:grid-cols-2 gap-2 mb-8">
        {arr.map((item, i) => (
          <Image
            key={i}
            width={720}
            height={480}
            src={`/condo/condo0${item}.jpg`}
            alt={`Condo image ${item}`}
          />
        ))}
      </div>
      <div className=" w-full relative h-[300px]">
        <Map />
      </div>
    </div>
  );
}
