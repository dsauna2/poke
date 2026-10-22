"use client";
import Script from "next/script";
import { frame, pageTitle } from "@/app/components/ui";

export default function AvailabilityPage() {
  return (
    <div className={`${frame} pt-16 md:pt-28 pb-24 md:pb-40 min-h-[80svh]`}>
      <h1 className={pageTitle}>Availability</h1>
      <p className="mt-4 mb-12 max-w-[50ch] text-[17px] leading-7">
        Pick your dates to see what is open, then book your stay.
      </p>
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
