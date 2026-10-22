import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BedDouble,
  Bath,
  Waves,
  MapPin,
  Gamepad2,
  Baby,
  Coffee,
  Wifi,
  Clock,
  Check,
  Star,
} from "lucide-react";
import Script from "next/script";
import hero from "../../public/hero_2025.webp";
import frozen from "../../public/frozen.jpg";
import gameRoom from "../../public/im0017.jpg";
import Reveal from "../components/reveal";
import {
  getLocalBusinessSchema,
  getAccommodationSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";
import {
  frame,
  sectionTitle,
  pageTitle,
  buttonInk,
  buttonCream,
} from "../components/ui";

const facts = [
  { icon: Users, label: "13 guests" },
  { icon: BedDouble, label: "6 bedrooms" },
  { icon: Bath, label: "4 bathrooms" },
  { icon: Waves, label: "Private pool and jacuzzi" },
  { icon: MapPin, label: "4 miles to Disney World" },
];

const inside = [
  {
    icon: Waves,
    title: "Private pool and jacuzzi",
    text: "Lounge chairs and towels are provided. Pool heating is available for an extra fee.",
  },
  {
    icon: Gamepad2,
    title: "Mario game room",
    text: "Pool table, air hockey, a Street Fighter arcade and a Nintendo Switch.",
  },
  {
    icon: Baby,
    title: "Themed kids' rooms",
    text: "Two bedrooms painted as the worlds of Coco and Frozen.",
  },
  {
    icon: BedDouble,
    title: "Four king bedrooms",
    text: "Each adult bedroom has a smart TV, from 40 to 65 inches.",
  },
  {
    icon: Coffee,
    title: "Full kitchen",
    text: "Coffee bar with free Keurig pods, plus pots, pans, plates and knives.",
  },
  {
    icon: Wifi,
    title: "Fast fiber Wi-Fi",
    text: "Stay connected between park days.",
  },
];

const goodToKnow = [
  { icon: Clock, text: "Check-in 4pm, check-out 10am" },
  { icon: Check, text: "Pets allowed. No smoking, no parties" },
  {
    icon: Waves,
    text: "Windsor Hills resort water park with slides, a splash pad and pools, steps away",
  },
  {
    icon: MapPin,
    text: "Gated community with 24/7 security, free parking, washer and dryer, air conditioning",
  },
];

const nearby = [
  ["Disney World", "4 miles, 8 minutes"],
  ["Restaurants and shopping", "2 miles, 5 minutes"],
  ["SeaWorld Orlando", "12 miles, 18 minutes"],
  ["Universal Studios", "15 miles, 20 minutes"],
  ["Orlando International Airport", "25 miles, 30 minutes"],
  ["LEGOLAND Florida", "30 miles, 35 minutes"],
];

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

export default function Home() {
  const schemas = [
    ["local-business-schema", getLocalBusinessSchema()],
    ["accommodation-schema", getAccommodationSchema()],
    ["organization-schema", getOrganizationSchema()],
  ];

  return (
    <div className="font-figtree font-light text-[#3e3e3e] bg-[#faf7f0]">
      {schemas.map(([id, schema]) => (
        <Script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative h-[calc(100svh-2.4rem)] min-h-[560px] overflow-hidden text-white">
        <figure className="absolute inset-0">
          <Image
            src={hero}
            placeholder="blur"
            priority
            fill
            sizes="100vw"
            className="object-cover hero-settle"
            alt="Coco-themed bedroom at Poke's Dreamy Disney Getaway, a 6-bedroom Disney vacation home in Kissimmee"
          />
        </figure>
        <div className="absolute inset-0 bg-black/25" />
        <div className={`absolute inset-x-0 bottom-0 pb-10 md:pb-14 ${frame}`}>
          <h1
            className={`${pageTitle} hero-rise`}
            style={{ "--d": "300ms" }}
          >
            {`Poke's Dreamy Disney Getaway`}
          </h1>
          <div
            className="hero-rise mt-5 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ "--d": "550ms" }}
          >
            <Link
              href="/availability"
              className={buttonCream}
            >
              Check availability
            </Link>
            <p className="text-[17px]">
              6 themed bedrooms, a private pool, 4 miles from Disney
            </p>
          </div>
        </div>
      </div>

      <section className={`${frame} pt-24 md:pt-40`}>
        <Reveal
          as="p"
          className="mx-auto max-w-[44ch] text-center text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.3]"
        >
          A themed six-bedroom home in Kissimmee for up to 13 guests, with a
          private pool and a Mario game room, four miles from Disney World.
        </Reveal>

        <ul className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10 text-center">
          {facts.map(({ icon: Icon, label }, i) => (
            <Reveal as="li" key={label} delay={i * 80}>
              <Icon
                className="mx-auto h-7 w-7"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <span className="mt-3 block text-[16px] leading-6 font-normal">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <a href="#reviews" className="link-slide inline-flex items-center gap-2 text-[17px]">
            <Star className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
            61 five-star reviews from families who stayed here
          </a>
        </Reveal>
      </section>

      <section className={`${frame} mt-24 md:mt-40`}>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {[
            { src: gameRoom, alt: "Mario game room", caption: "Mario game room" },
            { src: frozen, alt: "Frozen bedroom", caption: "Frozen room" },
          ].map(({ src, alt, caption }, i) => (
            <figure key={caption}>
              <Reveal media delay={i * 150} className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal as="figcaption" delay={i * 150 + 200} className="mt-3 text-[16px]">
                {caption}
              </Reveal>
            </figure>
          ))}
        </div>
      </section>

      <section className={`${frame} mt-24 md:mt-44 grid md:grid-cols-12 gap-10 md:gap-8`}>
        <Reveal
          as="h2"
          className={`md:col-span-4 ${sectionTitle}`}
        >
          {`What's inside`}
        </Reveal>
        <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {inside.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 100} className="flex gap-4">
              <Icon
                className="mt-1 h-6 w-6 shrink-0"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[19px] font-normal leading-7">{title}</h3>
                <p className="mt-1 text-[17px] leading-7">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mt-24 md:mt-44 bg-[#efeadd] py-20 md:py-32">
        <div className={`${frame} grid md:grid-cols-12 gap-10 md:gap-8`}>
          <Reveal
            as="h2"
            className={`md:col-span-4 ${sectionTitle}`}
          >
            Good to know
          </Reveal>
          <div className="md:col-span-8">
            <ul className="flex flex-col gap-5 text-[17px] leading-7">
              {goodToKnow.map(({ icon: Icon, text }, i) => (
                <Reveal as="li" key={text} delay={i * 90} className="flex items-center gap-4">
                  <Icon
                    className="h-6 w-6 shrink-0"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  {text}
                </Reveal>
              ))}
            </ul>

            <Reveal as="h3" className="mt-14 text-[22px] font-normal leading-8">
              How far things are
            </Reveal>
            <dl className="mt-5 grid sm:grid-cols-2 gap-x-12 gap-y-4 text-[17px] leading-7">
              {nearby.map(([place, distance], i) => (
                <Reveal key={place} delay={(i % 2) * 90}>
                  <dt className="font-normal">{place}</dt>
                  <dd>{distance}</dd>
                </Reveal>
              ))}
            </dl>
            <Link
              href="/location"
              className="link-slide mt-6 inline-block text-[17px]"
            >
              See the neighborhood and map
            </Link>

            <Reveal delay={300} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/book"
                className={buttonInk}
              >
                Book your stay
              </Link>
              <Link href="/gallery" className="link-slide text-[17px]">
                See all photos
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
