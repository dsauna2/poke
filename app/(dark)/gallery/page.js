import React from "react";
import Script from "next/script";
import { frame, pageTitle } from "@/app/components/ui";
import { getPhotos, getRooms } from "@/lib/photos";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import GalleryView from "./gallery-view";

export default function Gallery() {
  const photos = getPhotos();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <div className={`${frame} pt-16 md:pt-28 pb-24 md:pb-40`}>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className={pageTitle}>Photo gallery</h1>
      <p className="mt-4 text-[17px]">{photos.length} photos of the house</p>
      <GalleryView photos={photos} rooms={getRooms(photos)} />
    </div>
  );
}
