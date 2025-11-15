import Script from "next/script";

export const bookWidget = `<div class="ownerrez-widget" data-propertyId="4cace0d1e8f44b069667db5417cb7758" data-widget-type="Booking/Inquiry" data-widgetId="f629c188734b4d1fb0a6d1f039ad19d3"></div>
<script src="https://secure.ownerreservations.com/widget.js"></script>`;

export const reviewsWidget = `
<!-- Reviews -->
<!-- OwnerRez Reviews widget for Poke's Dreamy Disney Getaway -->
<div class="ownerrez-widget" data-propertyId="4cace0d1e8f44b069667db5417cb7758" data-widget-type="Reviews - Reviews" data-widgetId="e3af476690774f16a2847e96448a3f2f"></div>
<script src="https://secure.ownerreservations.com/widget.js"></script>`;

export const availabilityWidget = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-36 min-h-screen">
        <div
          className="ownerrez-widget"
          data-propertyid="4cace0d1e8f44b069667db5417cb7758"
          data-widget-type="Availability - Multiple Month Calendar"
          data-widgetid="76ef1c5a321146ba93c9d4827381a9fb"
        ></div>
      </div>
      <Script
        src="https://app.ownerrez.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export const BookWidget = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto py-36 min-h-screen px-4">
        <div
          className="ownerrez-widget"
          data-propertyid="4cace0d1e8f44b069667db5417cb7758"
          data-widget-type="Booking/Inquiry"
          data-widgetid="f629c188734b4d1fb0a6d1f039ad19d3"
        ></div>
      </div>
      <Script
        src="https://app.ownerrez.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
};
