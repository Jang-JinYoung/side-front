import React, { PropsWithChildren } from 'react';
import { GoogleMap, useLoadScript, Libraries } from '@react-google-maps/api';

export interface IPosition extends google.maps.LatLngLiteral {}

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

interface IProps extends PropsWithChildren {
  containerStyle?: { width: string; height: string };
  center?: IPosition;
  zoom?: number;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

// const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;
const GOOGLE_MAP_API_KEY = 'AIzaSyDOccRDVRUqa-sPgTXqYkOZaXhWUabFwsk';

const Map = ({ containerStyle, center, zoom, children, onClick }: IProps) => {
  const { isLoaded } = useLoadScript({
    id: 'map',
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries, // 장소검색
  });

  if (!isLoaded) return <></>;

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={containerStyle ?? { width: '800px', height: '100vh' }}
      center={center ?? { lat: 36.507757, lng: 127.766922 }}
      zoom={zoom ?? 7}
      onClick={onClick}
      options={options}
    >
      {children}
    </GoogleMap>
  );
};

export default React.memo(Map);
