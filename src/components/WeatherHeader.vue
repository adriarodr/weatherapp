<script setup>
import { location, isSaved, addLocation, removeLocation, store } from "@/store/store";
import WeatherNav from "@/components/WeatherNav.vue";

function toggleFavorite() {
  if (isSaved(store.selectedLocation)) {
    removeLocation(store.selectedLocation)
  } else {
    addLocation(store.selectedLocation);
  }
}

</script>

<template>
  <!-- Container -->
  <div class="md:grid md:grid-cols-3 md:grid-rows-2 mb-4">
    <!-- Display the City, state, country name -->
    <h1 class="text-3xl font-bold col-span-4">
      {{ location?.name }},
      {{ location?.region }},
      {{ location?.country }}
    </h1>

    <button @click="toggleFavorite">
      <svg :class="{ active: isSaved(store.selectedLocation) }" id="favorite" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>

    <!-- Display the current date for the location -->
    <p class="text-lg font-medium mt-2.5 row-start-2 col-span-4">
      {{ new Date(location?.localtime).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
      }) }}
    </p>

    <!-- Navigation for switching views -->
    <WeatherNav class="flex justify-between w-full md:col-start-2 md:col-span-3 md:gap-x-20 md:justify-center mt-5
    "/>
  </div>

</template>

<style>
#favorite {
  stroke: white;
}

.active {
  fill: white;
  stroke: white;
}
</style>
