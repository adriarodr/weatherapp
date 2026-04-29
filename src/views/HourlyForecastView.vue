<script setup>
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';
import BaseCard from '@/components/BaseCard.vue';
</script>


<template>
  <BaseCard>
    <LineChart aria-label="Hourly Temperatures for today." />
    <BarChart aria-label="Rain Amount for today" />
  </BaseCard>
</template>
