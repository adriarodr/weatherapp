<script setup>
import { current, forecast } from "@/store/store";
import WeatherInfo from "@/components/WeatherInfo.vue";
import BaseCard from "./BaseCard.vue";
</script>

<template>
    <div id="current-weather" class="flex flex-wrap md:flex-nowrap gap-5 md:gap-10 mt-10">
      <!-- Current Weather Information -->
      <BaseCard class="w-full md:w-2/5">
        <p>{{ current?.condition?.text }}</p>

        <div class="flex">
          <p class="text-6xl font-bold my-1.5">{{ current?.temp_c }}&deg;</p>

          <div class="w-20 h-20 overflow-hidden">
            <img class="w-full h-full" :src="'https:' + current?.condition?.icon" :alt=" current?.condition?.text">
          </div>
        </div>

        <p>
          High: {{ forecast?.value?.[0]?.day?.maxtemp_c }}
          &CenterDot;
          Low: {{ forecast?.value?.[0]?.day?.mintemp_c }}
        </p>

        <p>Feels like {{ current?.feelslike_c }} &deg;</p>

        <p class="text-sm mt-12">Last updated: {{ current?.last_updated }}</p>
      </BaseCard>

      <!-- Extra Weather Information -->
      <WeatherInfo />
    </div>
</template>
