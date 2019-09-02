import { ADD_PLACE, REMOVE_PLACE } from './actions-types';

const addPlace = payload => ({ type: ADD_PLACE, payload });
const removePlace = payload => ({ type: REMOVE_PLACE, payload });

export { addPlace, removePlace };