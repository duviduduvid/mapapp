const addPlaceToStorage = newPlace => {
  const places = getPlacesFromStorage();
  setPlacesToStorage([...places, newPlace]);
};

const removePlaceFromStorage = removedPlace => {
  const places = getPlacesFromStorage();
  setPlacesToStorage(places.filter(place => place.name !== removedPlace.name));
};

const getPlacesFromStorage = () => 
  JSON.parse(localStorage.getItem('selectedPlaces')) || [];

const setPlacesToStorage = places => 
  localStorage.setItem('selectedPlaces', JSON.stringify(places));

export { addPlaceToStorage, removePlaceFromStorage };
export default getPlacesFromStorage;