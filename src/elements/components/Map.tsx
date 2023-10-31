import React, { useCallback, useState } from 'react';
import {
  GoogleMap,
  StandaloneSearchBox,
  useLoadScript,
  Libraries,
  MarkerF,
} from '@react-google-maps/api';

interface IPosition {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '800px',
  height: '800px',
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
const libraries: Libraries = ['geometry', 'places'];

// const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;

const Map = () => {
  const [center, setCenter] = useState<IPosition>({
    lat: 36.507757,
    lng: 127.766922,
  });

  const [markerList, setMarkerList] = useState<IPosition[] | null>(null);

  const [zoom, setZoom] = useState(11);

  const { isLoaded } = useLoadScript({
    id: 'map',
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries, // 장소검색
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    // zoom Property 를 위하여 주석처리

    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const [searchBox, setSearchBox] = useState<any>(null);
  const handleLoad = (ref: google.maps.places.SearchBox) => {
    if (ref) {
      // console.log(ref);
      setSearchBox(ref);
    }
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const place = searchBox.getPlaces()[0];
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCenter({ lat, lng });
      setZoom(11);
    }
  };

  const onClickMap = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    // const position = {lat: e.latLng?.lat(), lng: e.latLng?.lng()}

    if (Array.isArray(markerList) && lat && lng) {
      setMarkerList([...markerList, { lat, lng }]);
    } else if (!Array.isArray(markerList) && lat && lng) {
      setMarkerList([{ lat, lng }]);
    }
  };

  if (!isLoaded) return <></>;

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClickMap}
      options={options}
    >
      <StandaloneSearchBox
        onLoad={handleLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          // placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: 'absolute',
            // left: '50%',
            // marginLeft: '-120px',
          }}
        />
      </StandaloneSearchBox>
      {markerList?.map((marker: IPosition) => (
        <MarkerF
          key={marker.lat}
          position={marker}
          // icon={{ url: '/images/icons/map_marker.svg', scale: 5 }}
        />
      ))}
    </GoogleMap>
  );
};

export default React.memo(Map);
