import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import hero from "../../public/hero_2025.webp";
import frozen from "../../public/frozen.jpg";
import { sendEventToFacebook } from "@/lib/utils";
import {
  getLocalBusinessSchema,
  getAccommodationSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";

export const metadata = {
  title:
    "Magical 6-Bedroom Villa Near Disney | Themed Rooms, Private Pool & Water Slides",
  description:
    "Take your family to a magical 6-bedroom villa just 4 miles from Disney! Kids love the Frozen, Mario and Coco themed rooms, plus your own private heated pool and resort water park. Sleeps 13 guests in Kissimmee, FL.",
  openGraph: {
    title: "Poke's Dreamy Disney Getaway | 6 Bedroom Kissimmee Family Rental",
    description:
      "6 bedroom Orlando vacation home for large families. Themed rooms, water slides, heated pool. Just 4 miles from Disney World. Accommodates 13 guests.",
    url: "https://www.pokesdreamydisneygetaway.com/",
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
    title: "Poke's Dreamy Disney Getaway | 6 Bedroom Kissimmee Family Rental",
    description:
      "6 bedroom Orlando vacation home for large families. Just 4 miles from Disney World. Accommodates 13 guests.",
    images: ["/hero_2025.webp"],
  },
  alternates: {
    canonical: "https://www.pokesdreamydisneygetaway.com/",
  },
};

export default async function Home() {
  const localBusinessSchema = getLocalBusinessSchema();
  const accommodationSchema = getAccommodationSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <div>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="accommodation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(accommodationSchema),
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="flex h-screen relative flex-col text-white">
        <figure className="z-10 absolute inset-0">
          <Image
            src={hero}
            className="object-cover h-full"
            alt="Luxury 6-bedroom Disney vacation home with themed rooms and private pool in Kissimmee Florida"
            priority
          />
        </figure>
        <div className="flex flex-col items-center justify-center z-20 relative h-full pt-52">
          <div className="font-oswald text-6xl text-center leading-tight">
            A WHIMSICAL ESCAPE <br />
            NEAR THE MAGIC OF DISNEY
          </div>

          <Link
            href="/book"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-2"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-2">
        <div className="grid md:grid-cols-2 gap-3  my-12">
          <h1 className="font-oswald text-5xl">
            {`WELCOME TO POKE'S DREAMY DISNEY GETAWAY`}
          </h1>
          <p className=" text-base">
            {`Experience the ultimate retreat just 4 miles from Disney World!
            Indulge in thrilling water slides, themed rooms like Frozen, Coco,
            and Mario Game Room, and an entertainer's kitchen. Relax on the
            private patio with a heated pool. Accommodating up to 13 guests in 6
            bedrooms, Poke's Dreamy Disney Getaway is the perfect
            destination for magical memories. Stay connected with high-speed
            Wi-Fi. Unleash the enchantment and book your stay today!`}
          </p>
        </div>
        <div className="my-12">
          <Image
            className="rounded-sm shadow-sm"
            src="/im0017.jpg"
            alt="Mario Game Room"
            width={1200}
            height={800}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-3  my-12">
          <p className="text-base">
            A luxurious haven for Disney enthusiasts. Located just over 4 miles
            from the enchantment of Disney®, this themed home offers the perfect
            retreat. Nestled within the coveted Windsor Hills community,n
            you&apos;ll have access to incredible on-site resort amenities just
            steps away. Step inside this professionally designed and furnished
            space, curated for your comfort and delight. With <b>6 bedrooms</b>{" "}
            accommodating <b>up to 13 guests</b>, everyone will have their own
            space to relax. Immerse yourself in the Disney spirit and embark on
            a journey filled with joy, laughter, and enchanting memories.
            Experience the magic at Poke&apos;s Dreamy Disney Getaway!
          </p>
          <Image
            className=" rounded-sm shadow-sm"
            src={frozen}
            alt="Frozen-themed bedroom with magical Disney decor for kids at Poke's Dreamy Disney Getaway"
          />
        </div>
      </div>
    </div>
  );
}
