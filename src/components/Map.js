import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.6477451,
  lng: -79.5715815,
};

const mapOptions = { maxZoom: 8, minZoom: 2, fullscreenControl: false, mapTypeControl: false, streetViewControl: false };

function Map({ data, onMarkerClick, settings }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0hz1RmWYsOPfCGZKRemdXvs2E-umR_sU",
    libraries: ["visualization"],
  });

  const [map, setMap] = useState(null);
  const [heatMapLayer, setHeatmapLayer] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (settings.heatmapOn && map && data) {
      showHeatmap();
    } else {
      hideHeatmap();
    }
  }, [data, map, settings]);

  const showHeatmap = () => {
    // if(map && data) {
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
    // }
  };

  const hideHeatmap = () => {
    if (heatMapLayer) {
      heatMapLayer.setMap(null);
    }
  };

  const onLoad = useCallback(function (map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // console.log(map);
    // map.fitBounds(bounds);
    const hmap = new window.google.maps.visualization.HeatmapLayer({
      data: [],
      map: map,
      radius: 60,
      maxIntensity: 10,
    });
    // const infoWindowInstance = new window.google.maps.InfoWindow();

    // setInfoWindow(infoWindowInstance);
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
      options={mapOptions}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {settings.markersOn &&
        data &&
        data.map((datum, i) => (
          <MarkerF
            key={i}
            position={getLatLong(datum)}
            onClick={(e) => {
              console.log(datum);
              // infoWindow.open({
              //   anchor: e.latLng,
              //   map
              // })
              // onMarkerClick(e, datum);
              setInfoWindow({pool: datum, position: getLatLong(datum)});
            }}
            // onLoad={ (...args) => console.log(args) }
          />
        ))}

      {infoWindow && (
        <InfoWindow
          onCloseClick={() => {
            setInfoWindow(null);
          }}
          onLoad={e => {console.log("loaded")}}
          position={infoWindow.position}
        >
          <div className="border rounded bg-slate-200 p-4">
            <div style={{ fontSize: 16, fontColor: `#08233B` }}>{infoWindow.pool.Pools || "UNKNOWN"}</div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <div className="absolute inset-0 bg-orange-600"></div>
  );
}

export default React.memo(Map);
