import React from "react";
import Image from "next/image";

export default function photopage({ params }) {
  return (
    <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
      <Image src={`/im00${params?.id}.jpg`} width={1800} height={600} />{" "}
    </div>
  );
}
