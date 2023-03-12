import React, { useCallback, useEffect, useState} from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useQuery } from "react-query";

console.log(process.env);
type conutryInfo = {
  latitude: string;
  longitude: string;
};

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


async function fetchUser(): Promise<conutryInfo> {
  const response = await fetch(`http://localhost:8081/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const Map = () => {
  const { isLoading, data, error } = useQuery<conutryInfo>(['user'], () => fetchUser());

  const [center, setCenter] = useState({
    lat: 36.507757,
    lng: 127.766922,
  });

  // useEffect(() => {
  //   if(data) {
  //     console.log(data);
  //     setCenter({lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)});
  //   }
  // }, [data])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY ?? "temp",
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

  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  // if (error) {
  //   return <>Error: {error}</>;
  // }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
