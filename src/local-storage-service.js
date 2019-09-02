export const getPlacesFromStorage = () => 
  JSON.parse(localStorage.getItem('selectedPlaces')) || [];

export const setPlacesToStorage = places => 
  localStorage.setItem('selectedPlaces', JSON.stringify(places));