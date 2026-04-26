import { reactive } from "vue";

export const store = reactive({
  weatherData: null,

  setWeather(data) {
    this.weatherData = data;
  }
});
