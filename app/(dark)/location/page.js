import Map from "@/app/components/map";
import React from "react";
import Script from "next/script";
import Image from "next/image";
import Reveal from "@/app/components/reveal";
import { frame, pageTitle } from "@/app/components/ui";
import { getPlaceSchema, getBreadcrumbSchema } from "@/lib/structured-data";

const photos = [1, 2, 3, 4];

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
  const schemas = [
    ["place-schema", getPlaceSchema()],
    [
      "breadcrumb-schema",
      getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Location", url: "/location" },
      ]),
    ],
  ];

  return (
    <div className={`${frame} pt-16 md:pt-28 pb-24 md:pb-40`}>
      {schemas.map(([id, schema]) => (
        <Script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <h1 className={pageTitle}>Location</h1>
      <p className="mt-6 max-w-[44ch] text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.35]">
        Nestled within the renowned Windsor Hills community, Poke&apos;s Dreamy
        Disney Getaway boasts an exceptional location just around 3 miles from
        Disney World. The neighborhood offers an array of fantastic amenities
        including a pool, aquatic park, daily activities, a movie theater,
        gaming arcades, ping pong tables, and a pool table, ensuring an
        unforgettable and vibrant vacation experience.
      </p>
      <div className="mt-14 md:mt-20 grid sm:grid-cols-2 gap-3 md:gap-4">
        {photos.map((n, i) => (
          <Reveal
            media
            key={n}
            delay={(i % 2) * 120}
            className="relative aspect-[3/2] bg-[#efeadd]"
          >
            <Image
              src={`/condo/condo0${n}.jpg`}
              alt="Windsor Hills resort"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        ))}
      </div>
      <Reveal className="relative mt-3 md:mt-4 h-[320px] md:h-[440px] bg-[#efeadd]">
        <Map />
      </Reveal>
    </div>
  );
}
