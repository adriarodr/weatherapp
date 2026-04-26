<script setup>
import { store } from '@/store/store';
import WeatherNav from "@/components/WeatherNav.vue";

</script>

<template>
  <!-- Container -->
  <div class="container grid grid-cols-3 grid-rows-2 mb-4">
    <!-- Display the City, state, country name -->
    <h1 class="text-3xl font-bold col-span-4">
      {{ store.weatherData.location.name }},
      {{ store.weatherData.location.region }},
      {{ store.weatherData.location.country }}
    </h1>

    <!-- Display the current date for the location -->
    <p class="text-lg font-medium mt-2.5 row-start-2 col-span-4">
      {{ new Date(store.weatherData.location.localtime).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
      }) }}
    </p>

    <!-- Navigation for switching views -->
    <WeatherNav class="col-start-2 col-span-3 flex gap-x-20 justify-center mt-5"/>
  </div>

</template>