import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const options = {
  // 위성 버튼 안보이게
  mapTypeControl: false,
  // +, - 버튼 안보이게
  zoomControl: false,
  // 우측하단 사람 버튼 안보이게
  streetViewControl: false,
  fullscreenControl: false,
  // gestureHandling: 'greedy',
};

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;

const Map = (props: any) => {
  const [center, setCenter] = useState({
    lat: 36.507757,
    lng: 127.766922,
  });

  const { data } = props;

  useEffect(() => {
    if (data) {
      console.log(data);
      setCenter({
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude),
      });
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // zoom Property 를 위하여 주석처리

    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    ></GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
