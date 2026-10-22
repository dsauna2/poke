import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { frame } from "@/app/components/ui";
import { getPhotoIds } from "@/lib/photos";

// Pre-rendered at build time: the photo list comes from the public folder,
// which is not on disk in a serverless function at request time.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPhotoIds().map((id) => ({ id }));
}

export default async function PhotoPage({ params }) {
  const { id } = await params;
  if (!getPhotoIds().includes(id)) notFound();

  return (
    <div className={`${frame} pt-10 md:pt-16 pb-24 md:pb-40`}>
      <Link href="/gallery" className="link-slide text-[16px]">
        Back to the gallery
      </Link>
      <Image
        className="mt-8 w-full h-auto"
        src={`/im${id}.jpg`}
        width={2400}
        height={1600}
        sizes="(min-width: 1400px) 1240px, 100vw"
        alt={`Photo ${Number(id)} of Poke's Dreamy Disney Getaway - themed rooms, pool, and amenities`}
        priority
      />
    </div>
  );
}
