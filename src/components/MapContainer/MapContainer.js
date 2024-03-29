import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { addPlace } from '../../actions/action';
import { addPlaceToStorage } from '../../services/local-storage-service';
import * as googleApiKey from '../../googleApiKey.json';

const style = {
  margin: '10px'
};

const initialCenter = { 
  lat: 32.154, 
  lng: 53.834 
};

const MapContainer = ({ google, places, addPlace }) => {
  const geocoder = new google.maps.Geocoder();
  const  [activeMarker, setActiveMarker] = useState({});

  const addNewPlace = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    setActiveMarker({});
    geocoder.geocode({'location': latLng}, results => {
      try {
        const placeName = results
          .find(place => place.types.includes('locality'))
          .address_components[0]
          .long_name;
        
        const newPlace = {
          name: placeName,
          location: {
            lat: latLng.lat(), 
            lng: latLng.lng()
          }
        };
        addPlace(newPlace);
        addPlaceToStorage(newPlace);
      }
      catch (e) {
        alert('No city found in the place you clicked on...');
      }
    });
  };

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
  };

  return (
    <Map
      google={google}
      zoom={3}
      minZoom={1}
      style={style}
      initialCenter={initialCenter}
      onClick={addNewPlace}
    > 
      {places.map((place, index) => 
        <Marker 
          key={index} 
          name={place.name} 
          position={place.location}
          onClick={onMarkerClick}
        />
      )}

      <InfoWindow 
        marker={activeMarker}
        visible={!!activeMarker.name}>
        <p>{activeMarker.name}</p>
      </InfoWindow>
    </Map>
  );
};

const mapStateToProps = state => ({
  places: state.places
});

const mapDispatchToProps = dispatch => ({
  addPlace: place => {
    dispatch(addPlace(place));
  }
});

const Wrapper = GoogleApiWrapper({
  apiKey: googleApiKey.key
})(MapContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
