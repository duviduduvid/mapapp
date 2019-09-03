import React from 'react';
import './PlaceListItem.css';

const PlaceListItem = ({ place, removeItem }) => (
    <li className="list-item">
      {place.name}
      <button type="button" 
        className="close" 
        onClick={() => removeItem(place)}>
          &times;
      </button>
    </li>
);
  
export default PlaceListItem;