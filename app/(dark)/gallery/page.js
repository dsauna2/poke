"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getBreadcrumbSchema } from "@/lib/structured-data";

function GalleryImage({ formattedItem }) {
  const [imgSrc, setImgSrc] = useState(`/im${formattedItem}.webp`);

  return (
    <Image
      className="rounded-sm shadow-md"
      src={imgSrc}
      width={1900}
      height={1267}
      alt={`Photo ${formattedItem} of Poke's Dreamy Disney Getaway - 6 bedroom themed vacation home near Disney`}
      onError={() => setImgSrc(`/im${formattedItem}.jpg`)}
    />
  );
}

export default function Gallery() {
  const arr = Array.from({ length: 68 }, (_, i) => i + 1);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
        <h1 className="font-oswald text-4xl font-extrabold text-gray-700 mb-8">
          Photo Gallery
        </h1>
        <div className="grid md:grid-cols-3 gap-3">
          {arr.map((item) => {
            const formattedItem = item.toString().padStart(4, "0");
            return (
              <Link href={`/photo/${formattedItem}`} key={formattedItem}>
                <GalleryImage formattedItem={formattedItem} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
