import { computed, reactive } from "vue";

const STORAGE_KEY = "weatherapp_savedLocations";
const DEFAULT_LOCATION = "Cary";

// Returns the saved locations as an array
function getSavedLocations() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save the current list of locations
function setSavedLocations(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export const store = reactive({
  weatherData: null,
  savedLocations: getSavedLocations(),
  selectedLocation: DEFAULT_LOCATION,
});

export function setWeather(data) {
  store.weatherData = data;
}

export function addLocation(name) {
  if (!store.savedLocations.includes(name)) {
    store.savedLocations.push(name);
    setSavedLocations(store.savedLocations);
  }
}

export function removeLocation(name) {
  const index = store.savedLocations.indexOf(name);

  if (index !== -1) {
    store.savedLocations.splice(index, 1);
    setSavedLocations(store.savedLocations);
  }
}

export function clearAllLocations() {
  store.savedLocations = [];
  localStorage.removeItem(STORAGE_KEY);
}

export function setSelectedLocation(name) {
  store.selectedLocation = name;
}

export function isSaved(name) {
  return store.savedLocations.includes(name);
}

export const location = computed(() =>
  store.weatherData?.location ?? {}
);

export const current = computed(() =>
  store.weatherData?.current ?? {}
);

export const forecast = computed(() =>
  store.weatherData?.forecast?.forecastday ?? {}
);

export const todayHourly = computed(() =>
  forecast.value?.[0]?.hour ?? {}
);
