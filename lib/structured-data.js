const baseUrl = "https://www.pokesdreamydisneygetaway.com";

/**
 * Generate LocalBusiness schema for the vacation rental
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: "Poke's Dreamy Disney Getaway",
    description:
      "6 bedroom Kissimmee family rental accommodating 13 guests. Located just 4 miles from Disney World with themed rooms, water slides, and heated pool.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kissimmee",
      addressRegion: "FL",
      addressCountry: "US",
    },
    email: "poke@pokesdreamydisneygetaway.com",
    url: baseUrl,
    image: `${baseUrl}/hero_2025.webp`,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };
}

/**
 * Generate Accommodation schema for the vacation rental property
 */
export function getAccommodationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": `${baseUrl}/#accommodation`,
    name: "Poke's Dreamy Disney Getaway",
    description:
      "6 bedroom, 4 bathroom vacation rental in Kissimmee, FL. Accommodates up to 13 guests. Features themed rooms (Frozen, Coco, Mario), water slides, heated pool, and entertainer's kitchen. Located in Windsor Hills, just 4 miles from Disney World.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kissimmee",
      addressRegion: "FL",
      addressCountry: "US",
    },
    numberOfRooms: {
      "@type": "QuantitativeValue",
      value: "6",
    },
    numberOfBathroomsTotal: "4",
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: "13",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Water Slides",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Heated Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Themed Rooms",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Entertainer's Kitchen",
        value: true,
      },
    ],
    image: [
      `${baseUrl}/hero_2025.webp`,
      `${baseUrl}/im0017.jpg`,
      `${baseUrl}/frozen.jpg`,
    ],
    url: baseUrl,
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate ImageObject schema for gallery images
 */
export function getImageObjectSchema(imageUrl, imageId) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${baseUrl}${imageUrl}`,
    url: `${baseUrl}${imageUrl}`,
    name: `Photo ${imageId} - Poke's Dreamy Disney Getaway`,
    description: `Photo ${imageId} of Poke's Dreamy Disney Getaway - 6 bedroom Kissimmee family rental`,
    caption: `Photo ${imageId} of the vacation rental property`,
  };
}

/**
 * Generate Organization schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Poke's Dreamy Disney Getaway",
    url: baseUrl,
    logo: `${baseUrl}/poke_logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "poke@pokesdreamydisneygetaway.com",
      contactType: "Customer Service",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=100094922960093"],
  };
}

/**
 * Generate Place schema for location
 */
export function getPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Poke's Dreamy Disney Getaway",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kissimmee",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.2920",
      longitude: "-81.4076",
    },
    containedInPlace: {
      "@type": "Place",
      name: "Windsor Hills",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kissimmee",
        addressRegion: "FL",
      },
    },
  };
}
