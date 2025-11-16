"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function photopage({ params }) {
  const { id } = React.use(params);
  const formattedId = id ? id.toString().padStart(4, "0") : "0000";
  const [imgSrc, setImgSrc] = useState(`/im${formattedId}.webp`);

  return (
    <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
      <Image
        src={imgSrc}
        width={1800}
        height={600}
        alt={`Photo ${formattedId} of Poke's Dreamy Disney Getaway - themed rooms, pool, and amenities`}
        onError={() => setImgSrc(`/im${formattedId}.jpg`)}
      />
    </div>
  );
}
