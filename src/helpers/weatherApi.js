import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

// Send a GET request for Forecast to Weather API
const fetchWeather = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/forecast.json`, {
      params: {
        key: apiKey,
        q: `id:${id}`,
        days: 3,
        aqi: 'no',
        alerts: 'no',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
};

// Send a GET request for Search/Autocomplete to Weather API
const fetchAutoComplete = async (queryTerm) => {
  try {
    const response = await axios.get(`${baseUrl}/search.json`, {
      params: {
        key: apiKey,
        q: queryTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching list of locations:', error);
  }
};

export { fetchWeather, fetchAutoComplete };
