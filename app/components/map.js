"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const center = useMemo(
    () => ({
      lat: 28.31842953507693,
      lng: -81.60018801944732,
    }),
    []
  );

  if (loadError) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">
          Error loading map. Please check your Google Maps API key.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return <div className="w-full h-full bg-gray-200 animate-pulse" />;
  }

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Google Maps API key is not configured.</p>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
