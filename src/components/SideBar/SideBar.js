import React from 'react';
import { connect } from 'react-redux';

const style = {
  margin: '10px'
};

const SideBar = ({ places }) => {
  return (
    <div style={style}>
      <h1>My Favourite Places</h1>
      <ul>
        {places.map((place, index) => 
          <li key={index}>{place.name}</li>
        )}
      </ul>
    </div>
    
  );
}

const mapStateToProps = store => ({
  places: store.places
});

export default connect(
  mapStateToProps
)(SideBar);