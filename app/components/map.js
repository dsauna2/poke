"use client";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const GoogleMap = () => {
  return (
    //The <Map></Map> need the following props
    //initialCenter={} will be the center on the Map
    <Map
      google={window.google}
      zoom={13}
      style={mapStyles}
      initialCenter={{
        lat: 28.31842953507693,
        lng: -81.60018801944732,
      }}
    >
      <Marker
        position={{
          lat: 28.31842953507693,
          lng: -81.60018801944732,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(GoogleMap);
