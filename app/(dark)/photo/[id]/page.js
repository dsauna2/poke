import React from "react";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const formattedId = id ? id.toString().padStart(4, "0") : "0000";
  const imageUrl = `/im${formattedId}.jpg`;

  return {
    title: `Photo ${formattedId}`,
    description: `View photo ${formattedId} of Poke's Dreamy Disney Getaway - 6 bedroom Kissimmee family rental near Disney World. See our themed rooms, amenities, and vacation home features.`,
    openGraph: {
      title: `Photo ${formattedId} | Poke's Dreamy Disney Getaway`,
      description: `Photo ${formattedId} of our 6 bedroom Kissimmee family rental. Themed rooms, water slides, heated pool, and more.`,
      url: `https://www.pokesdreamydisneygetaway.com/photo/${formattedId}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Photo ${formattedId} of Poke's Dreamy Disney Getaway`,
        },
      ],
    },
    twitter: {
      title: `Photo ${formattedId} | Poke's Dreamy Disney Getaway`,
      description: `Photo ${formattedId} of our 6 bedroom Kissimmee family rental.`,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.pokesdreamydisneygetaway.com/photo/${formattedId}`,
    },
  };
}

export default async function photopage({ params }) {
  const { id } = await params;
  const formattedId = id ? id.toString().padStart(4, "0") : "0000";
  return (
    <div className="max-w-screen-lg mx-auto py-44 min-h-screen px-4">
      <Image
        src={`/im${formattedId}.jpg`}
        width={1800}
        height={600}
        alt={`Photo ${formattedId} of Poke's Dreamy Disney Getaway - themed rooms, pool, and amenities`}
      />
    </div>
  );
}
