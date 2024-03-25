import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const sendEventToFacebook = async (eventName, eventData) => {
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        ...eventData,
      },
    ],
    access_token: process.env.FACEBOOK_ACCESS_TOKEN,
  };

  const response = await fetch(
    `https://graph.facebook.com/v14.0/${process.env.FACEBOOK_PIXEL_ID}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();
  console.log("Facebook API Response:", data); // Log the response
};
