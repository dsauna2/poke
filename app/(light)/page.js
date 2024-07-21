import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero2.jpg";
import frozen from "../../public/frozen.jpg";
import { sendEventToFacebook } from "@/lib/utils";

export default async function Home() {
  return (
    <div>
      <div className="flex h-screen relative flex-col text-white">
        <figure className="z-10 absolute inset-0">
          <Image
            src={hero}
            placeholder="blur"
            className="object-cover h-full"
            alt="Coco Bedroom Picture"
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
        <div className="my-12" height="300px">
          <Image
            className="rounded-sm shadow-sm"
            src="/im0017.jpg"
            alt="Mario Game Room"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
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
            alt="Frozen Room"
          />
        </div>
      </div>
    </div>
  );
}
