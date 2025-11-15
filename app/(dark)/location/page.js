import Map from "@/app/components/map";
import React from "react";
import Image from "next/image";

export default function LocationPage() {
  const arr = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="max-w-screen-lg mx-auto py-32 min-h-screen px-4">
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
