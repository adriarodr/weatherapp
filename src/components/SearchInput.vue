<script setup>
import { reactive } from "vue";

import { fetchWeather, fetchAutoComplete } from "@/helper/weatherApi";
import { setSelectedLocation, setWeather } from "@/store/store";

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

// Get the auto complete from the API
const handleSearch = () => {
  clearTimeout(searchTerm.timeout)
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query != "") {
      const data = await fetchAutoComplete(searchTerm.query);

      searchTerm.results = data
    } else {
      searchTerm.results = null
    }
  }, 500);
};

// Get the data from the API and save it into the store
const getWeather = async (place, id) => {
  const data = await fetchWeather(id);
  setWeather(data);
  setSelectedLocation(place.name);

  // Clear the searchTerm
  searchTerm.query = "";
  searchTerm.results = null;
};
</script>

<template>
  <div>
    <!-- search bar -->
    <form @submit.prevent="onSubmit">
      <div class="bg-transparent border border-white rounded-4xl px-3 flex items-center">
        <!-- Icon -->
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <input
          type="text"
          placeholder="Search for a place"
          class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:border-green-300 ring-inset w-full text-white"
          v-model="searchTerm.query"
          @input = "handleSearch"
        />
      </div>
    </form>

    <!-- search suggestions -->
    <div
      v-if="searchTerm.results !== null"
      class="bg-black/80 top-full absolute w-4/5 max-w-md shadow-lg rounded-lg p-2 m-x-auto">
      <div v-for="place in searchTerm.results" :key="place.id">
        <button @click="getWeather(place, place.id)" class="border-b w-full text-left p-1.5 my-2
        hover:text-green-200 hover:font-bold focus:white focus:border-2">
          {{ place.name }}, {{ place.region }}, {{ place.country }}
        </button>
      </div>
    </div>
  </div>
</template>