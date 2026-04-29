<script setup>
import { onMounted, computed, ref } from "vue";

import { store, setWeather, current,  } from "@/store/store";
import { fetchWeather } from "@/helper/weatherApi";
import { getBackgroundImage } from "@/helper/backgroundImage";

import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import WeatherHeader from "@/components/WeatherHeader.vue";

// Find the image path for the current condition
const imagePath = computed(() => {
  return (current.value?.condition?.code) ? getBackgroundImage(current.value?.condition?.code) : {}
});

// Opens and close the Sidebar
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !(isSidebarOpen.value);
}

onMounted(async () => {
  const data = await fetchWeather(store.selectedLocation);

  setWeather(data);
});
</script>
<template>
  <div
    class="bg-cover bg-center mb-10"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >

    <div class="min-h-screen bg-black/70">
      <!-- The Header / Search Bar -->
      <TheHeader @toggle-sidebar="toggleSidebar" />

      <div class="">
        <!-- The Sidebar for the saved locations -->
        <TheSidebar :open="isSidebarOpen" />

        <!-- Main Container -->
        <main id="app" class="md:w-4/5 m-7 md:my-14 md:m-auto">
          <router-view v-slot="{ Component }" >
            <WeatherHeader />
            <component :is="Component" :key="$route.path"></component>
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>
