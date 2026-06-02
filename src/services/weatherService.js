import weatherApi from '@/services/api';

export default {
  // Gets the weather data
  async fetchForecast(id) {
    const response = await weatherApi.get('/forecast.json', {
      params: {
        q: `${id}`,
        days: 3,
        aqi: 'no',
        alerts: 'no',
      },
    });

    return response.data;
  },

  // Gets the autocomplete/search list
  // async searchLocations(queryTerm) {
  //   const response = await weatherApi.get('/search.json', {
  //     params: {
  //       q: queryTerm,
  //     },
  //   });

  //   return response.data;
  // },
};
