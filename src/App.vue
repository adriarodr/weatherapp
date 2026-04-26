<script setup>
import TheHeader from "@/components/TheHeader.vue";
import WeatherHeader from "@/components/WeatherHeader.vue";

import { store } from "@/store/store";

</script>

<template>
  <TheHeader />

  <!-- Main Container -->
  <main id="app" class="w-4/5 my-14 m-auto">
    <div v-if="store.weatherData">
      <router-view v-slot="{ Component }" class="main-view">
        <WeatherHeader />
        <component :is="Component" :key="$route.path"></component>
      </router-view>
    </div>

    <div v-else>
        <p>Search for Location</p>
    </div>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
