<script setup>
import { ref } from "vue";
import SearchInput from "@/components/SearchInput.vue";
import WeatherCard from "@/components/WeatherCard.vue";
// import { RouterLink, RouterView } from 'vue-router'

const places = ref([]);

const addPlace = (data) => {
  places.value.push(data);
}

const deletePlace = (name) => {
  places.value = places.value.filter(p => p.location.name !== name)
}
</script>

<template>
  <main>
    <div class="text-center mb-6">
      <!-- Local Current Date -->
      {{ new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }}
    </div>

    <!-- Search -->
    <div>
      <SearchInput @place-data="addPlace" />
    </div>

    <!-- Weather cards -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard  :place="place" @delete-place="deletePlace" />
      </div>
    </div>
  </main>
</template>
