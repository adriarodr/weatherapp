<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
// import { useFavoritesStore } from '@/stores/favoritesStore';

const weatherStore = useWeatherStore();
weatherStore.setForecast('london');

// const favoritesStore = useFavoritesStore();
</script>

<template>
  <div>
    <!-- Main Container -->
    <main id="app" class="md:w-4/5 m-7 md:my-14 md:m-auto">
      <h1>Testing...</h1>
      <div v-if="store.isLoading">Fetching the latest weather...</div>

      <div v-else-if="store.error">Uh oh! {{ store.error }}</div>

      <div v-else-if="store.location">
        <h1>{{ store.location.name }}</h1>
      </div>
    </main>
  </div>
</template>
