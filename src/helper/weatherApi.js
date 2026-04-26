import axios from "axios";

// Send a GET request for Forecast to Weather API
const fetchWeather = async (id) => {
  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: import.meta.env.VITE_WEATHER_API,
          q: `id:${id}`,
          days: 3,
          aqi: "no",
          alerts: "no",
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

// Send a GET request for Search/Auto Complete to Weather API
const fetchAutoComplete = async (queryTerm) => {
  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/search.json",
      {
        params: {
          key: import.meta.env.VITE_WEATHER_API,
          q: queryTerm
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching list of locations:", error);
  }
};

export { fetchWeather, fetchAutoComplete };
