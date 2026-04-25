<script setup>
import { store } from '@/store/store';

</script>

<template>
  <div class="bg-black/70 text-white rounded-2xl p-5 w-5/5">
    <p>Humidity</p>
    <p>{{ store.weatherData.current.humidity }} %</p>

    <p>Wind</p>
    <p>{{ store.weatherData.current.wind_kph }} kph {{ store.weatherData.current.dir }}</p>

    <p>Pressure</p>
    <p>{{ store.weatherData.current.pressure_mb }} mb</p>

    <p>Precipitation</p>
    <p>{{ store.weatherData.current.precip_mm }} mm</p>

  </div>
</template>