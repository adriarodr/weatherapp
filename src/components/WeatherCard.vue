<script setup>
import { ref } from "vue";
// import WeatherForecastDay from '@/components/WeatherForecastDay.vue';
// import WeatherInfo from '@/components/WeatherInfo.vue';

defineProps({
  placeData: Object
});

// const emit = defineEmits(['delete-place']);

// const showDetail = ref(false);

// const removePlace = (placeName) => {
//   emit("delete-place", placeName);
//   showDetail.value = false;
// };
</script>

<template>
  <div class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden bg-blue-500">
  
    <!-- current weather -->
    <div class="text-center flex-1">
      <img :src="place.current.condition.icon" alt="icon" width="200" class="mx-auto -mb-10" />
      <h1 class="text-9xl mb-2">{{ Math.round(place.current.temp_c) }}&deg;</h1>
      <p class="text-2xl">{{ place.current.condition.text }}</p>
    </div>

    <BorderLine />

    <!-- forecast -->
    <div v-for="(day, idx) in place.forecast.forecastday" :key="idx">
      <WeatherForecastDay :day="day" />
    </div>

    <!-- info -->
    <Transition name="fade">
      <div v-show="showDetail">
        <WeatherInfo
          :place="place"
          @close-info="showDetail = false" @remove-place="removePlace(place.location.name)"
        />
      </div>
    </Transition>

      <!-- forecast btn -->
      <div class="flex justify-end items-center gap-1 mt-10">
        <button @click="showDetail = true">More</button>
      </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>