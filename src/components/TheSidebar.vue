<script setup>
import { useRouter } from "vue-router";
import { fetchWeather } from '@/helper/weatherApi';

import { store, setSelectedLocation, setWeather } from '@/store/store';

const router = useRouter();

const props = defineProps({
  open: Boolean,
});

const selectCity = async (location) => {
  setSelectedLocation(location);

  const data = await fetchWeather(location);
  setWeather(data);

  router.push({ name: "today" });
}
</script>

<template>
  <aside
    v-if="open"
    class="bg-black/80 w-full h-lvh py-10 backdrop-blur-3xl md:w-2/12 lg:w-2/12">
    <!-- Displays all the saved locations -->
    <h2 class="text-center text-3xl font-semibold md:text-2xl">Saved Locations</h2>
    <ul class="text-center py-5 text-xl m-auto hover: ">
      <li
        v-for="(location, index) in store.savedLocations || []"
        :key="index"
        @click="selectCity(location)"
      >
        {{ location }}
      </li>
    </ul>
  </aside>
</template>