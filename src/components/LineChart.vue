<script setup>
import { ref, computed } from "vue";

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
} from "chart.js";

import { todayHourly } from "@/store/store";

ChartJS.register(Title, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement)

// Get the hourly temperatures
const times = computed(() =>
  todayHourly.value?.map(i => i.time.split(" ")[1]) ?? []
);

// Get the hourly temperatures
const hourlyTemps = computed(() =>
  todayHourly.value?.map(i => i.temp_c) ?? []
);

const chartData = computed(() => ({
  labels: times.value,
  datasets: [
    {
      label: "Hourly Temperatures",
      data: hourlyTemps.value,
      borderColor: "#38bdf8",
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#38bdf8",
      pointRadius: 5,
      pointHoverRadius: 7,
      borderWidth: 3,
      tension: 0.4,
      fill: true,
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    font: {
      size: 22,
      weight: "600",
    }
  }
}));
</script>

<template>
  <div class="m-auto">
    <h3 class="text-2xl text-center mb-10">Hourly Temperatures</h3>
    <div>
      <Line
        id="hourly-temps"
        :options="chartOptions"
        :data="chartData"
        class="bg-white text-black p-4 m-auto w-full"
      />
    </div>
  </div>
</template>
