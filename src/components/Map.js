import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.6477451,
  lng: -79.5715815,
};

function Map({ data }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0hz1RmWYsOPfCGZKRemdXvs2E-umR_sU",
  });

  const [map, setMap] = useState(null);
  const [showMarkers, setShowMarkers] = useState(false);

  useEffect(() => {
    if (!map) return;
    new window.google.maps.Geocoder().geocode({ address: data[0].locations }, function (results, status) {
      if (status == "OK") {
        //  console.log(results[0].geometry.location.lat())
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
    setShowMarkers(true);
  }, [map]);

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // console.log(map)
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // console.log(isLoaded);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} options={{ disableDefaultUI: true }} center={center} zoom={3} onLoad={onLoad} onUnmount={onUnmount}>
      {showMarkers &&
        data.map((datum, i) => (
          <MarkerF
            key={i}
            position={datum.center}
            onClick={(e) => console.log(e)}
            // onLoad={ (...args) => console.log(args) }
          />
        ))}
    </GoogleMap>
  ) : (
    <div className="absolute inset-0 bg-orange-600"></div>
  );
}

export default React.memo(Map);
