<script setup>
import { forecast } from "@/store/store";
</script>

<template>
  <div class="rounded-lg border overflow-hidden border-white/50">
    <table class="rounded-4xl border w-full text-white text-lg text-left table-auto md:table-fixed">
      <thead class="bg-white/10">
        <tr class="">
          <th class="px-6 py-3 font-medium">Day</th>
          <th class="px-6 py-3 font-medium">Condition</th>
          <th class="px-6 py-3 font-medium">High and Low Temperature</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/20">
        <tr
        v-for="forecastday in forecast"
        :key="forecastday.date"
        >
          <td class="px-6 py-4">
            {{new Date(forecastday.date).toLocaleDateString("en-us", {
            weekday: "short",
            month: "short",
            day: "numeric"
            }) }}
          </td>
          <td class="px-6 py-4">
            {{ forecastday.day?.condition?.text }}
          </td>
          <td class="px-6 py-4">
            {{ forecastday.day?.maxtemp_c }}&deg;
            &CenterDot;
            {{ forecastday.day?.mintemp_c }}&deg;
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>