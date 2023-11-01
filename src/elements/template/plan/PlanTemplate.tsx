import React, { useState } from 'react';
import Map, { IPosition } from '@components/Map';
import { MarkerF, StandaloneSearchBox } from '@react-google-maps/api';

const PlanTemplate = () => {
  const [center, setCenter] = useState<IPosition>({
    lat: 36.507757,
    lng: 127.766922,
  });

  const [zoom, setZoom] = useState(11);
  const [markerList, setMarkerList] = useState<IPosition[] | null>(null);

  const [searchBox, setSearchBox] = useState<any>(null);

  const onClickMap = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();

    if (Array.isArray(markerList) && lat && lng) {
      setMarkerList([...markerList, { lat, lng }]);
    } else if (!Array.isArray(markerList) && lat && lng) {
      setMarkerList([{ lat, lng }]);
    }
  };

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

      // 이미지 URL
      // console.log(place.photos[0].getUrl());
      setCenter({ lat, lng });
      setZoom(11);
    }
  };

  return (
    <div style={{ float: 'left' }}>
      <Map center={center} zoom={zoom} onClickMap={onClickMap}>
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
      </Map>
    </div>
  );
};

export default PlanTemplate;
