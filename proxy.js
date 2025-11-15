import { NextRequest, NextResponse, userAgent } from "next/server";

export async function proxy(request) {
  // Fire and forget - don't block the request
  const { device } = userAgent(request);
  const payload = {
    data: [
      {
        event_name: "pageView",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          client_user_agent: device.type,
          ph: [null],
        },
        custom_data: {
          path: request.nextUrl.pathname,
        },
      },
    ],
    access_token: process.env.FACEBOOK_ACCESS_TOKEN,
  };

  // Don't await - fire and forget to avoid blocking
  fetch(
    `https://graph.facebook.com/v14.0/${process.env.FACEBOOK_PIXEL_ID}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  ).catch((error) => {
    console.error("Facebook Pixel error:", error);
  });

  // Return next to continue the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/overview", "/location"],
};

