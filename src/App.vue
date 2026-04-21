<script setup>
import { ref } from "vue";
import SearchInput from "@/components/SearchInput.vue";
// import { RouterLink, RouterView } from 'vue-router'

const places = ref([]);

const addPlace = (data) => {
  places.value.push(data);
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
  </main>
</template>
