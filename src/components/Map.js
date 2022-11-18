import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, HeatmapLayer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.6477451,
  lng: -79.5715815,
};

function Map({ data, onMarkerClick, settings }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0hz1RmWYsOPfCGZKRemdXvs2E-umR_sU",
    libraries: ["visualization"]
  });

  const [map, setMap] = useState(null);
  const [heatMapLayer, setHeatmapLayer] = useState(null);
  
  useEffect(() => {
    if(data && settings.heatmapOn){
      showHeatmap();
    }
  },[data])

  useEffect(() => {
    if(settings.heatmapOn) {
      showHeatmap()
    }else {
      hideHeatmap();
    }
  }, [settings]);


  const showHeatmap = () => {
    if(map && data) {
      const dData = data.map((datum, i) => new window.google.maps.LatLng(datum.Lat, datum.Long));
      const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
      ];
      heatMapLayer.setData(dData);
      heatMapLayer.set("gradient", settings.type == "carbon" ? null : gradient);
      heatMapLayer.setMap(map);
    }
  }
  
  const hideHeatmap = () => {
    if(map && data) {
      heatMapLayer.setMap(null);
    }
  }

  // useEffect(() => {
  //   console.log("first", !map)
  //   if (!map) return;
  //   new window.google.maps.Geocoder().geocode({ address: data[0].Locations }, function (results, status) {
  //     console.log(results, status);
  //     // if (status == "OK") {
  //       //  console.log(results[0].geometry.location.lat())
  //     // } else {
  //     //   alert("Geocode was not successful for the following reason: " + status);
  //     // }
  //     setShowMarkers(true);
  //   });
  // }, [map]);

  // useEffect(() => {
  //   if(data!==null) {
  //     setShowMarkers(true);
  //   }else {
  //     setShowMarkers(false);
  //   }
  // }, [data]);

  const onLoad = useCallback(function (map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // console.log(map)
    // map.fitBounds(bounds);
    const hmap = new window.google.maps.visualization.HeatmapLayer({
      data: [],
      map: map,
      radius: 60,
      maxIntensity: 10
    })
    setMap(map);
    setHeatmapLayer(hmap);
    // new window.google.maps.Geocoder().geocode({ address: data[0].Locations }, function (results, status) {
    //   // setShowMarkers(true);
    // });
  }, []);

  const onUnmount = useCallback(function (map) {
    setMap(null);
  }, []);

  const getLatLong = (datum) => {
    if (!datum.Lat || !datum.Long) {
      // console.log(datum);
      return center;
    }
    return {
      lat: datum.Lat,
      lng: datum.Long,
    };
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      clickableIcons={false}
      options={{ maxZoom: 5, minZoom: 2, fullscreenControl: false, mapTypeControl: false, streetViewControl: false }}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {(settings.markersOn && data) &&
        data.map((datum, i) => (
          <MarkerF
            key={i}
            position={getLatLong(datum)}
            onClick={(e) => {
              onMarkerClick(e, datum);
            }}
            // onLoad={ (...args) => console.log(args) }
          />
        ))}
    </GoogleMap>
  ) : (
    <div className="absolute inset-0 bg-orange-600"></div>
  );
}

export default React.memo(Map);
