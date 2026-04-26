<script setup>
import { store } from '@/store/store';
</script>

<template>
  <div class="bg-black/70 text-white rounded-2xl p-5 w-5/5 flex flex-col justify-between
  *:flex *:justify-between *:border-b *:border-b-white/50 *:pb-4">
    <div>
      <p>Humidity</p>
      <p>{{ store.weatherData.current.humidity }}%</p>
    </div>

    <div>
      <p>Wind</p>
      <p>{{ store.weatherData.current.wind_kph }} kph {{ store.weatherData.current.dir }}</p>
    </div>

    <div>
      <p>Pressure</p>
      <p>{{ store.weatherData.current.pressure_mb }} mb</p>
    </div>

    <div>
      <p>Precipitation</p>
      <p>{{ store.weatherData.current.precip_mm }} mm</p>
    </div>
  </div>
</template>