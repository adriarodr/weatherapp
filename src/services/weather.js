import weatherApi from 'api.js';

// Send a GET request for the forecast
const fetchWeather = async (id) => {
  try {
    const response = await weatherApi.get('forecast.json', {
      params: {
        q: `id:${id}`,
        days: 3,
        aqi: 'no',
        alerts: 'no',
      },
      redact: ['key'],
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);

    throw error;
  }
};

// Send a GET request for list of locations
const fetchLocations = async (queryTerm) => {
  try {
    const response = await weatherApi.get('/search.json', {
      params: {
        q: queryTerm,
      },
      redact: ['key'],
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching list of locations:', error);

    throw error;
  }
};

export { fetchWeather, fetchLocations };
