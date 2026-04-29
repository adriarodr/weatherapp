<script setup>
import { current } from "@/store/store";
import BaseCard from "./BaseCard.vue";
</script>

<template>
  <BaseCard class="w-5/5 flex flex-col justify-between text-xl
  *:flex *:justify-between *:border-b *:border-b-white/50 *:py-2 md:*:mb-3">
    <div>
      <p>Humidity</p>
      <p>{{ current?.humidity }}%</p>
    </div>

    <div>
      <p>Wind</p>
      <p>{{ current?.wind_kph }} kph {{ current?.dir }}</p>
    </div>

    <div>
      <p>Pressure</p>
      <p>{{ current?.pressure_mb }} mb</p>
    </div>

    <div>
      <p>Precipitation</p>
      <p>{{ current?.precip_mm }} mm</p>
    </div>
  </BaseCard>
</template>
