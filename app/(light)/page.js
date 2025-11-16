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
import {
  MdLocationOn,
  MdPalette,
  MdPeople,
  MdPool,
  MdWaves,
  MdRestaurant,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";

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
        <div className="flex flex-col items-center justify-center z-20 relative h-full pt-52 px-4">
          <div className="font-oswald text-6xl text-center leading-tight max-w-4xl">
            6 Bedroom Themed Villa in Windsor Hills – Minutes From Disney
          </div>

          <Link
            href="/book"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-2"
          >
            Book Now
          </Link>
        </div>
      </div>
      <a
        href="#reviews"
        className="bg-[#4a46e1] hover:bg-[#3d39c5] text-white py-3 px-6 text-center font-bold text-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
      >
        <FaStar /> 61 Five-Star Reviews — Families Love Staying Here
        <FaStar />
      </a>
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Main Intro Section */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              6 Bedroom Disney Vacation Home in Kissimmee with Themed Rooms &
              Private Pool
            </h1>
            <h2 className="font-oswald text-3xl text-gray-700 mb-4">
              {`WELCOME TO POKE'S DREAMY DISNEY GETAWAY`}
            </h2>
          </div>
          <p className="text-base leading-relaxed">
            Experience the ultimate Orlando vacation retreat just 4 miles from
            Walt Disney World! Our spacious 6-bedroom vacation home in the
            prestigious Windsor Hills Resort offers everything your family needs
            for an unforgettable Disney vacation. With magical themed rooms, a
            private heated pool, thrilling water slides, and resort amenities,
            Poke&apos;s Dreamy Disney Getaway is the perfect home base for
            exploring all of Central Florida&apos;s attractions.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="my-16">
          <h2 className="font-oswald text-3xl font-bold mb-8 text-center">
            Why Choose Our Kissimmee Vacation Rental?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdLocationOn className="text-3xl" />
                <h3 className="text-xl font-bold">Perfect Disney Location</h3>
              </div>
              <p className="text-sm">
                Just 4 miles from Magic Kingdom and close to all Disney parks,
                Universal Studios, and SeaWorld. Save time and money on
                transportation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdPalette className="text-3xl" />
                <h3 className="text-xl font-bold">Magical Themed Rooms</h3>
              </div>
              <p className="text-sm">
                Kids love our Frozen-themed bedroom, Coco-themed room, and epic
                Mario Game Room.
                <Link
                  href="/gallery"
                  className="text-blue-600 hover:underline ml-1"
                >
                  View our photo gallery
                </Link>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdPeople className="text-3xl" />
                <h3 className="text-xl font-bold">Sleeps 13 Guests</h3>
              </div>
              <p className="text-sm">
                6 spacious bedrooms with premium bedding ensure everyone has
                their own comfortable space. Perfect for multi-generational
                family trips.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdPool className="text-3xl" />
                <h3 className="text-xl font-bold">Private Heated Pool</h3>
              </div>
              <p className="text-sm">
                Enjoy your own private heated pool and patio area. Perfect for
                morning swims before the parks or relaxing evening dips.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdWaves className="text-3xl" />
                <h3 className="text-xl font-bold">Resort Water Park Access</h3>
              </div>
              <p className="text-sm">
                Windsor Hills Resort features thrilling water slides, splash
                pad, and multiple pools—all included with your stay!
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MdRestaurant className="text-3xl" />
                <h3 className="text-xl font-bold">Gourmet Kitchen</h3>
              </div>
              <p className="text-sm">
                Fully-equipped entertainer&apos;s kitchen with modern
                appliances. Save money by preparing family meals at home.
              </p>
            </div>
          </div>
        </div>

        {/* Mario Game Room Image */}
        <div className="my-16">
          <h2 className="font-oswald text-3xl font-bold mb-6">
            Entertainment for the Whole Family
          </h2>
          <Image
            className="rounded-sm shadow-md"
            src="/im0017.jpg"
            alt="Mario-themed game room with arcade games and entertainment at our Kissimmee vacation rental"
            width={1200}
            height={800}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-base mt-4 leading-relaxed">
            Our custom-designed Mario Game Room features arcade games, gaming
            consoles, and fun decor that kids and adults alike will love.
            It&apos;s the perfect space to unwind after a long day at the theme
            parks. Plus, enjoy high-speed Wi-Fi throughout the home for
            streaming, gaming, and staying connected with friends and family.
          </p>
        </div>

        {/* About Windsor Hills & Location */}
        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div>
            <h2 className="font-oswald text-3xl font-bold mb-4">
              Prime Location in Windsor Hills, Kissimmee
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Poke&apos;s Dreamy Disney Getaway is located in the highly
              sought-after Windsor Hills Resort community in Kissimmee,
              Florida—one of Orlando&apos;s premier vacation home communities.
              This gated resort offers 24/7 security, giving you peace of mind
              during your stay.
            </p>
            <h3 className="text-xl font-bold mb-3">
              Distances to Major Attractions:
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                ✓ <strong>Disney World</strong> - 4 miles (8 minutes)
              </li>
              <li>
                ✓ <strong>Universal Studios</strong> - 15 miles (20 minutes)
              </li>
              <li>
                ✓ <strong>SeaWorld Orlando</strong> - 12 miles (18 minutes)
              </li>
              <li>
                ✓ <strong>LEGOLAND Florida</strong> - 30 miles (35 minutes)
              </li>
              <li>
                ✓ <strong>Orlando International Airport</strong> - 25 miles (30
                minutes)
              </li>
              <li>
                ✓ <strong>Restaurants & Shopping</strong> - 2 miles (5 minutes)
              </li>
            </ul>
            <Link
              href="/location"
              className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
            >
              Explore our location and nearby attractions →
            </Link>
          </div>
          <Image
            className="rounded-sm shadow-md"
            src={frozen}
            alt="Frozen-themed bedroom with magical Disney decor for kids at Poke's Dreamy Disney Getaway in Kissimmee"
          />
        </div>

        {/* Accommodations Details */}
        <div className="my-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="font-oswald text-3xl font-bold mb-6">
            Luxury Accommodations for Large Families
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bedroom Configuration:</h3>
              <ul className="space-y-2 text-base">
                <li>• Master Suite with King Bed & En-Suite Bathroom</li>
                <li>• Queen Bedroom</li>
                <li>• Frozen-Themed Kids Bedroom</li>
                <li>• Coco-Themed Kids Bedroom</li>
                <li>• Additional Bedrooms with Comfortable Beds</li>
                <li>• Sleeper Sofa for Extra Guests</li>
              </ul>
              <p className="mt-4 text-base">
                <strong>Total Capacity:</strong> Sleeps up to 13 guests
                comfortably
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Premium Amenities:</h3>
              <ul className="space-y-2 text-base">
                <li>✓ Private Heated Swimming Pool</li>
                <li>✓ Resort Water Park with Slides</li>
                <li>✓ Mario-Themed Game Room</li>
                <li>✓ Full Gourmet Kitchen</li>
                <li>✓ High-Speed Wi-Fi</li>
                <li>✓ Smart TVs in Multiple Rooms</li>
                <li>✓ In-Unit Washer & Dryer</li>
                <li>✓ Air Conditioning Throughout</li>
                <li>✓ Free Parking</li>
              </ul>
              <Link
                href="/overview"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                View all amenities and house rules →
              </Link>
            </div>
          </div>
        </div>

        {/* Why Book With Us */}
        <div className="my-16">
          <h2 className="font-oswald text-3xl font-bold mb-6 text-center">
            Why Families Love Poke&apos;s Dreamy Disney Getaway
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">
                More Space, More Comfort
              </h3>
              <p className="text-base">
                Unlike cramped hotel rooms, our 6-bedroom vacation home offers
                ample space for everyone to spread out. Kids have their own
                themed rooms, while adults enjoy quiet spaces to relax.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">
                Better Value for Groups
              </h3>
              <p className="text-base">
                When you calculate the cost per person, our vacation home offers
                exceptional value compared to booking multiple hotel rooms—plus
                you get a full kitchen and private pool!
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">
                Family-Owned & Operated
              </h3>
              <p className="text-base">
                We&apos;re a family-owned vacation rental dedicated to providing
                exceptional experiences. We know what families need and
                we&apos;re here to help make your Disney vacation perfect.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Professionally Managed</h3>
              <p className="text-base">
                Our home is professionally cleaned and maintained to the highest
                standards. We provide 24/7 guest support to ensure your stay is
                worry-free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="my-16 bg-gray-50 text-gray-900 p-8 rounded-lg text-center">
          <h2 className="font-oswald text-3xl font-bold mb-4">
            Ready to Book Your Orlando Vacation?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don&apos;t miss out on the perfect home base for your Disney World
            vacation. Our 6-bedroom themed villa books quickly, especially
            during peak seasons and holidays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#4a46e1] hover:bg-[#3d39c5] text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Check Availability & Book Now
            </Link>
            <Link
              href="/gallery"
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              View Photo Gallery
            </Link>
          </div>
        </div>

        {/* SEO-Rich Closing Section */}
        <div className="my-16 text-base leading-relaxed">
          <h2 className="font-oswald text-3xl font-bold mb-4">
            Your Perfect Kissimmee Vacation Home Awaits
          </h2>
          <p className="mb-4">
            Whether you&apos;re planning your first Disney World vacation or
            you&apos;re a seasoned Orlando visitor, Poke&apos;s Dreamy Disney
            Getaway offers the perfect combination of location, amenities, and
            value. Our themed vacation rental in Kissimmee, Florida, provides
            families with a comfortable, convenient, and memorable home away
            from home.
          </p>
          <p className="mb-4">
            Located in the heart of Central Florida&apos;s theme park corridor,
            you&apos;ll have easy access to all of Orlando&apos;s world-famous
            attractions including Magic Kingdom, EPCOT, Hollywood Studios,
            Animal Kingdom, Universal Studios, Islands of Adventure, SeaWorld,
            and countless dining and shopping destinations. After exciting days
            at the parks, return to your private oasis to swim, play games, or
            simply relax by the pool.
          </p>
          <p>
            <Link
              href="/book"
              className="text-blue-600 hover:underline font-semibold"
            >
              Book your stay today
            </Link>{" "}
            and discover why families from around the world choose Poke&apos;s
            Dreamy Disney Getaway as their preferred Orlando vacation rental. We
            look forward to hosting your family and helping create magical
            memories that will last a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
}
