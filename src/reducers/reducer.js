import { ADD_PLACE, REMOVE_PLACE } from '../actions/actions-types';
import getPlacesFromStorage from '../services/local-storage-service';

export const initialState = {
  places: getPlacesFromStorage()
};

function reducer(state = initialState, action) {
  let places = [...state.places];
  const placeActedUpon = action.payload;

  switch(action.type) {

    case ADD_PLACE: 
      places.push(placeActedUpon);
      return {places};

    case REMOVE_PLACE:
      places = places.filter(place => place.name !== placeActedUpon.name);
      return {places};

    default: 
      return state;
  }
}

export default reducer;
