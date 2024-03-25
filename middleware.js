import { NextRequest, NextResponse, userAgent } from "next/server";
export async function middleware(request) {
  const { device } = userAgent(request);
  console.log("it here");
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
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
