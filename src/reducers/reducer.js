import { ADD_PLACE } from '../actions/actions-types';
import { getPlacesFromStorage, setPlacesToStorage } from '../local-storage-service';

export const initialState = {
  places: getPlacesFromStorage()
};

function reducer(state = initialState, action) {
  const places = [...state.places];
  switch(action.type) {
    case ADD_PLACE: 
      places.push(action.payload);
      setPlacesToStorage(places);
      return {places};
    default: 
      return state;
  }
}

export default reducer;
