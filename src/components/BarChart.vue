<script setup>
import { ref, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

import { todayHourly } from "@/store/store";

// Get the hourly temperatures
const times = computed(() =>
  todayHourly.value?.map(i => i.time.split(" ")[1]) ?? []
);

// Get the hourly temperatures
const rainAmt = computed(() =>
  todayHourly.value?.map(i => i.precip_mm) ?? []
);

const chartData = computed(() => ({
  labels: times.value,
  datasets: [
    {
      label: "Rain Amount in mm",
      data: rainAmt.value,
      borderColor: "#38bdf8",
      backgroundColor: "#38bdf8",
      borderWidth: 3,
      pointRadius: 6,
      barPercentage: 0.8,
      categoryPercentage: 0.7,
    }
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  font: {
      size: 22,
      weight: "600",
  },
}))
</script>

<template>
  <div class="mt-18 m-auto">
    <h3 class="text-2xl text-center mb-8">Rain Amount</h3>
    <Bar
      id="hourly-rain"
      :options="chartOptions"
      :data="chartData"
      class="bg-white text-black p-4 m-auto w-full"
    />
  </div>
</template>
