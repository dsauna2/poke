import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble, Bath } from "lucide-react";
import Script from "next/script";
import living from "../../../public/im0031.jpg";
import Amenities from "./amenities";
import Rules from "./rules";
import Reveal from "@/app/components/reveal";
import { getAccommodationSchema, getPlaceSchema } from "@/lib/structured-data";
import { frame, sectionTitle, pageTitle, buttonInk } from "@/app/components/ui";

const facts = [
  { icon: BedDouble, label: "6 bedrooms" },
  { icon: Bath, label: "4 bathrooms" },
  { icon: Users, label: "13 guests" },
];

const features = [
  "Water slides",
  "Themed Frozen room, Coco room and Mario game room",
  "Entertainer's kitchen",
  "Private patio with pool",
  "Hosts up to 13 guests",
  "Fiber high speed Wi-Fi",
];

export const metadata = {
  title:
    "Property Details | 6 Bed, 4 Bath Themed Home with Pool & Water Slides",
  description:
    "6 bedroom, 4 bathroom luxury themed home in Kissimmee accommodating 13 guests. Features water slides, Frozen/Coco/Mario themed rooms, entertainer's kitchen, heated pool, and fiber Wi-Fi. Windsor Hills, just 4 miles from Disney World.",
  openGraph: {
    title: "Property Overview | 6 Bedroom Kissimmee Family Rental",
    description:
      "6 bedroom, 4 bathroom Orlando vacation home with water slides, themed rooms, heated pool. Accommodates 13 guests. Perfect for large families visiting Disney.",
    url: "https://www.pokesdreamydisneygetaway.com/overview",
    images: [
      {
        url: "/im0031.jpg",
        width: 1200,
        height: 630,
        alt: "Living room at Poke's Dreamy Disney Getaway",
      },
    ],
  },
  twitter: {
    title: "Property Overview | 6 Bedroom Kissimmee Family Rental",
    description:
      "6 bedroom, 4 bathroom Orlando vacation home with water slides, themed rooms, heated pool. Accommodates 13 guests.",
    images: ["/im0031.jpg"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/overview",
  },
};

export default function Overview() {
  const schemas = [
    ["accommodation-schema", getAccommodationSchema()],
    ["place-schema", getPlaceSchema()],
  ];

  return (
    <>
      {schemas.map(([id, schema]) => (
        <Script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative h-[75svh] min-h-[480px] overflow-hidden text-white">
        <figure className="absolute inset-0">
          <Image
            src={living}
            placeholder="blur"
            priority
            fill
            sizes="100vw"
            className="object-cover hero-settle"
            alt="Spacious living room with modern furnishings at Poke's Dreamy Disney Getaway vacation rental"
          />
        </figure>
        <div className="absolute inset-0 bg-black/25" />
        <div className={`absolute inset-x-0 bottom-0 pb-10 md:pb-14 ${frame}`}>
          <h1 className={`${pageTitle} hero-rise`} style={{ "--d": "300ms" }}>
            6 beds, 4 baths, 10 minutes from Disney
          </h1>
        </div>
      </div>

      <section className={`${frame} mt-24 md:mt-40 grid md:grid-cols-12 gap-10 md:gap-8`}>
        <Reveal as="h2" className={`md:col-span-4 ${sectionTitle}`}>
          {`Poke's Dreamy Disney Getaway`}
        </Reveal>
        <div className="md:col-span-8">
          <Reveal
            as="p"
            className="max-w-[40ch] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.3]"
          >
            Enjoy your stay at this gorgeous, themed, freshly renovated home, 4
            miles from Walt Disney World.
          </Reveal>

          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {facts.map(({ icon: Icon, label }, i) => (
              <Reveal as="li" key={label} delay={i * 80} className="flex items-center gap-3 text-[17px]">
                <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
                {label}
              </Reveal>
            ))}
          </ul>

          <ul className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-3 text-[17px] leading-7">
            {features.map((f, i) => (
              <Reveal as="li" key={f} delay={(i % 2) * 80}>
                {f}
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 max-w-[62ch] text-[17px] leading-7 flex flex-col gap-5">
            <p>
              {`Situated just over 4 miles from the enchantment of Disney®, this themed home is the perfect retreat. Located in the coveted Windsor Hills community, you'll have access to incredible on-site resort amenities just steps away. Step inside this professionally designed and furnished home, where every detail has been thoughtfully curated for your comfort and delight.`}
            </p>
            <p>
              {`After your daily adventures, unwind in your private getaway. Whether you're enjoying the outdoor retreat, basking in the sun, or spending quality time with loved ones, Poke's Dreamy Disney Getaway offers the perfect setting for cherished memories. With ample space for up to 13 guests, this home welcomes you into the Disney spirit from the moment you arrive.`}
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <Link href="/availability" className={buttonInk}>
              Check availability
            </Link>
          </Reveal>
        </div>
      </section>

      <Amenities />
      <Rules />
    </>
  );
}
