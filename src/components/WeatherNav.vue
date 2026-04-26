<template>
  <nav id="nav">
    <router-link class="nav-link" :to="{ name: 'today' }">Now</router-link>
    <router-link class="nav-link" :to="{ name: 'hourly' }">Hourly</router-link>
    <router-link class="nav-link" :to="{ name: 'forecast' }">3 Days</router-link>
  </nav>
</template>

<style>
@reference "tailwindcss";

.nav-link {
  @apply border-2 rounded-full py-1 px-3.5 font-medium inline-block border-white text-white;
}

#nav .router-link-active,
#nav .router-link-active {
  @apply bg-white text-black;
}
</style>