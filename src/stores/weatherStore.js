import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import weatherService from '@/services/weatherService';

export const useWeatherStore = defineStore('weather', () => {
  // STATES
  const weatherData = ref(null);
  const error = ref('');
  const isLoading = ref(false);

  // GETTERS
  const location = computed(() => weatherData.value?.location ?? {});

  const current = computed(() => weatherData.value?.current ?? {});

  const forecast = computed(
    () => weatherData.value?.forecast?.forecastday ?? [],
  );

  const todayHourly = computed(() => forecast.value[0]?.hour ?? []);

  // ACTIONS
  async function setForecast(id) {
    isLoading.value = true;
    error.value = '';

    try {
      weatherData.value = await weatherService.fetchForecast(id);
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    weatherData,
    error,
    isLoading,
    location,
    current,
    forecast,
    todayHourly,
    setForecast,
  };
});
