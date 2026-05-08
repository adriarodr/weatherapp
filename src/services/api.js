import axios from 'axios';

const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // timeout: 2000,
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export default weatherApi;
