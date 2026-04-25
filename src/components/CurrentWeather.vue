<script setup>
import { store } from "@/store/store";

import WeatherInfo from "@/components/WeatherInfo.vue";

</script>

<template>
    <!-- Location & Current Date -->
    <div>
      <!-- Display the City, state, country name -->
      <h1 class="text-3xl font-bold">
        {{ store.weatherData.location.name }}, {{ store.weatherData.location.region }}, {{ store.weatherData.location.country }}
      </h1>

      <!-- Display the current date for the location -->
      <p class="py-1.5 text-lg font-medium" id="current-date">
        {{ new Date(store.weatherData.location.localtime).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric"
        }) }}
      </p>
    </div>

    <section id="current-weather" class="flex gap-11">
      <!-- Current Weather Information -->
      <div class="bg-black/70 text-white rounded-2xl p-5 w-2/5">
        <p>{{ store.weatherData.current.condition.text }}</p>

        <div class="flex">
          <p class="text-6xl font-bold my-1.5">{{ store.weatherData.current.temp_c }}&deg;</p>
          <img :src="'https:' + store.weatherData.current.condition.icon" alt="icon">
        </div>

        <p>
          High: {{ store.weatherData.forecast.forecastday[0].day.maxtemp_c }}
          &CenterDot;
          Low: {{ store.weatherData.forecast.forecastday[0].day.mintemp_c }}
        </p>

        <p>Feels like {{ store.weatherData.current.feelslike_c }} &deg;</p>

        <p class="text-sm mt-12">Last updated: {{ store.weatherData.current.last_updated }}</p>
      </div>

      <!-- Extra Weather Information -->
      <WeatherInfo />
    </section>
</template>
