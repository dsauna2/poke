const baseUrl = "https://www.pokesdreamydisneygetaway.com";

export default function sitemap() {
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/overview`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/availability`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  // Generate photo pages (68 photos based on gallery page)
  const photoPages = Array.from({ length: 68 }, (_, i) => {
    const photoId = (i + 1).toString().padStart(4, "0");
    return {
      url: `${baseUrl}/photo/${photoId}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    };
  });

  return [...routes, ...photoPages];
}
