"use client";
import Script from "next/script";

export default function BookingWidget() {
  return (
    <>
      {/* OwnerRez Booking/Inquiry widget for Poke's Dreamy Disney Getaway */}
      <div
        className="ownerrez-widget"
        data-propertyid="4cace0d1e8f44b069667db5417cb7758"
        data-widget-type="Booking/Inquiry"
        data-widgetid="f629c188734b4d1fb0a6d1f039ad19d3"
      ></div>
      <Script
        src="https://app.ownerrez.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

