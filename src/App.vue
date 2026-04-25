<script setup>
import { ref } from "vue";

import { store } from "./store/store";

import SearchInput from "@/components/SearchInput.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";

</script>

<template>
  <!-- Top Navigation -->
  <nav class="bg-black/70 px-6 py-2.5 grid grid-cols-3 items-center">

    <!-- Drawer Icon -->
    <!-- TODO: Make sure this is accessible -->
    <div>
      <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 3V21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="#ffffff" stroke-width="2.136" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>

    <!-- Search Bar -->
    <SearchInput />

    <!-- TODO: Add the ability to switch between C and F -->
    <div>
    </div>
  </nav>

  <!-- Main Sections -->
  <main class="w-4/5 my-14 m-auto">

    <!-- Current Weather Card -->
    <CurrentWeather v-if="store.weatherData !== null"/>

  </main>
</template>
