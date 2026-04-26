<template>
  <nav id="nav" class="*:border-2 *:rounded-full *:py-1 *:px-3 *:inline-block *:border-white *:text-white">
    <router-link :to="{ name: 'today' }">Now</router-link>
    <router-link :to="{ name: 'hourly' }">Hourly</router-link>
    <router-link :to="{ name: 'forecast' }">3 Days</router-link>
  </nav>
</template>

<style>
@reference "tailwindcss";

.router-link-active,
.router-link-exact-active {
  @apply bg-white text-black;
}
</style>