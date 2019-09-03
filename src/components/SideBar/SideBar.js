import React from 'react';
import { connect } from 'react-redux';
import { removePlace } from '../../actions/action';
import PlaceListItem from '../PlaceListItem/PlaceListItem';
import './SideBar.css';

const SideBar = ({ places, removePlace }) => {
  return (
    <div className="sidebar-container">
      <h1>My Favourite Places</h1>
      <ul>
        {places.map((place, index) => 
          <PlaceListItem 
            key={index} 
            place={place}
            removeItem={removePlace}
          />
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = store => ({
  places: store.places
});

const mapDispatchToProps = dispatch => ({
  removePlace: place => {
    dispatch(removePlace(place));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);