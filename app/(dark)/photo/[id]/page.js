import React from "react";
import Image from "next/image";

export default async function photopage({ params }) {
  const { id } = await params;
  const formattedId = id ? id.toString().padStart(4, "0") : "0000";
  return (
    <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
      <Image
        src={`/im${formattedId}.jpg`}
        width={1800}
        height={600}
        alt={`Photo ${formattedId}`}
      />
    </div>
  );
}
