"use client";
import Script from "next/script";

export default function AvailabilityPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-36 min-h-screen px-4">
      {/* OwnerRez Multiple Month Calendar widget for Poke's Dreamy Disney Getaway */}
      <div
        className="ownerrez-widget"
        data-propertyid="4cace0d1e8f44b069667db5417cb7758"
        data-widget-type="Availability - Multiple Month Calendar"
        data-widgetid="76ef1c5a321146ba93c9d4827381a9fb"
      ></div>
      <Script
        src="https://app.ownerrez.com/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
