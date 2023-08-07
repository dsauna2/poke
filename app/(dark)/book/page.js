export default function page() {
  return (
    <div className="max-w-screen-lg mx-auto py-32 min-h-screen px-4">
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- OwnerRez Booking/Inquiry widget for Poke's Dreamy Disney Getaway -->
              <div class="ownerrez-widget" data-propertyId="4cace0d1e8f44b069667db5417cb7758" data-widget-type="Booking/Inquiry" data-widgetId="f629c188734b4d1fb0a6d1f039ad19d3"></div>
              <script src="https://secure.ownerreservations.com/widget.js"></script>`,
        }}
      ></div>
    </div>
  );
}
