import { ADD_PLACE, REMOVE_PLACE } from '../actions/actions-types';
import { getPlacesFromStorage, setPlacesToStorage } from '../services/local-storage-service';

export const initialState = {
  places: getPlacesFromStorage()
};

function reducer(state = initialState, action) {
  let places = [...state.places];
  const placeActedUpon = action.payload;

  switch(action.type) {

    case ADD_PLACE: 
      places.push(placeActedUpon);
      setPlacesToStorage(places);
      return {places};

    case REMOVE_PLACE:
      places = places.filter(place => place.name !== placeActedUpon.name);
      setPlacesToStorage(places);
      return {places};

    default: 
      return state;
  }
}

export default reducer;
