import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getPlacesFromStorage, setPlacesToStorage } from './local-storage-service';
import * as googleApiKey from './googleApiKey.json';

const style = {
  margin: '10px'
};

const initialCenter = { 
  lat: 32.154, 
  lng: 53.834 
};

const MapContainer = ({ google }) => {
  const [places, setPlaces] = useState(getPlacesFromStorage());

  const addPlace = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    setPlaces([...places, {lat: latLng.lat(), lng: latLng.lng()}]);
  };

  useEffect(() => {
    setPlacesToStorage(places);
  }, [places])

  return (
    <Map
      google={google}
      zoom={3}
      minZoom={1}
      style={style}
      initialCenter={initialCenter}
      onClick={addPlace}
    > 
      {places.map((place, index) => 
        <Marker key={index} position={place}/>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: googleApiKey.key
})(MapContainer);