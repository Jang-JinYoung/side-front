import React, { useState } from 'react';
import Map, { IPosition } from '@components/Map';
import { MarkerF, StandaloneSearchBox } from '@react-google-maps/api';
import Box from '@atoms/Box';

interface IconClickEvent extends google.maps.MapMouseEvent {
  placeId?: string;
}

export interface IMarker extends IPosition {
  name?: string;
}

const PlanTemplate = () => {
  const [center, setCenter] = useState<IPosition>({
    lat: 36.507757,
    lng: 127.766922,
  });

  const [zoom, setZoom] = useState(11);
  const [markerList, setMarkerList] = useState<IMarker[]>([
    { lat: 12, lng: 12, name: '123' },
    { lat: 13, lng: 13, name: '123' },
    { lat: 14, lng: 14 },
    { lat: 15, lng: 15, name: '123' },
    { lat: 16, lng: 16, name: '123' },
    { lat: 17, lng: 17 },
  ]);

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const onClickMap = (e: IconClickEvent) => {
    console.log(e);
    if (e.latLng) {
      let marker: IMarker = { lat: e.latLng?.lat(), lng: e.latLng?.lng() };

      if (e.placeId) {
        // 장소가 구글에 저장되어있으면, 장소 정보 가져옴
        const google = window.google;
        const placesService = new google.maps.places.PlacesService(
          document.createElement('div'),
        );

        const { placeId } = e;

        placesService.getDetails({ placeId }, (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place?.name) {
              marker = { ...marker, name: place?.name };
              setMarkerList([...markerList, marker]);
            }
            // setPlaceDetails(place);
          } else {
            console.error('장소 정보를 가져오는 중 오류 발생:', status);
          }
        });
      } else {
        setMarkerList([...markerList, marker]);
      }
    }
  };

  const handleLoad = (ref: google.maps.places.SearchBox) => {
    if (ref) {
      // console.log(ref);
      setSearchBox(ref);
    }
  };

  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();

    if (places) {
      console.log(places[0]);
      const { geometry } = places[0];

      if (geometry) {
        const lat = geometry.location?.lat();
        const lng = geometry.location?.lng();
        if (lat && lng) {
          setCenter({ lat, lng });
          setZoom(10);
        }
      }
    }
  };

  /* 여행 계획 삭제 */
  const onPlanRemoveBtnClick = ({ lat, lng }: IMarker) => {
    const newMarkerList = markerList.filter((marker) => {
      if (!(marker.lat === lat && marker.lng === lng)) return marker;
    });

    setMarkerList(newMarkerList);
  };

  /* 이름 없는 장소 이름 저장 */
  const onSetPlaceNameBtnAction = ({ lat, lng, name }: IMarker) => {
    const newMarkerList = markerList.map((marker) => {
      if (marker.lat === lat && marker.lng === lng) {
        return { ...marker, name: name };
      }

      return marker;
    });

    setMarkerList(newMarkerList);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ width: '1230px', height: '100vh' }}
      >

        <Map center={center} zoom={zoom} onClick={onClickMap}>
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
          {markerList?.map((marker: IMarker) => (
            <MarkerF key={marker.lat} position={marker} />
          ))}
        </Map>
        
      </div>
      <div className="trip-plan-list ml-10">
        {markerList?.map((marker: IMarker) => (
          <Box
            key={`${marker.lat},${marker.lng}`}
            onPlanRemoveBtnClick={onPlanRemoveBtnClick}
            onSetPlaceNameBtnAction={onSetPlaceNameBtnAction}
            {...marker}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanTemplate;
