<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  </main>
</template>
