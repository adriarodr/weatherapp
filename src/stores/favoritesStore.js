import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

const key = import.meta.env.VITE_API_BASE_URL;

export const useFavoritesStore = defineStore('favorites', () => {
  // STATES
  const favoritesList = useStorage(key, []);

  // ACTIONS
  function addLocation(location) {
    const isSaved = favoritesList.value.some(
      (place) => place.lat === location.lat && place.lon == location.lat,
    );

    if (!isSaved) {
      favoritesList.value.push({
        name: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
      });
    }
  }

  function removeLocation(location) {
    favoritesList.value = favoritesList.value.filter(
      (place) => !(place.lat === location.lat && place.lon == location.lat),
    );
  }

  function clearAll() {
    favoritesList.value = null;
  }

  return {
    favoritesList,
    addLocation,
    removeLocation,
    clearAll,
  };
});
