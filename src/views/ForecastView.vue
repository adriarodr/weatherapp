<script setup>
import BaseCard from "@/components/BaseCard.vue";
import ForecastDayTable from "@/components/ForecastDayTable.vue";

</script>

<template>
  <BaseCard class="p-10">
    <h2 class="text-3xl font-bold mb-8">3-Day Forecast</h2>
    <ForecastDayTable />
  </BaseCard>
</template>