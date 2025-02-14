<template>
  <div>
    <SectionHeading title="Our Latest Services" description="Services" />
  </div>
  <div class="flex flex-col md:flex-row items-center justify-center gap-6 py-10 md:py-20">
    <div
    v-for="(event, index) in events"
    :key="index"
    class="w-full md:w-60"
    >
    <div class="bg-blue-500 w-20 h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center mx-auto mt-4">
        <component :is="event.icon" class="text-white text-2xl md:text-4xl"/>
    </div>

    <div class="p-4 text-center">
        <h2 class="text-lg font-semibold text-gray-800 mt-2">{{ event.title }}</h2>
        <p class="text-md text-gray-400 mt-2">{{ event.description }}</p>
    </div>


    </div>
  </div>
</template>

<script setup>
import SectionHeading from "./SectionHeading.vue";
import { ref } from "vue";
import { AkHeart, IcCity, MaAirport } from "@kalimahapps/vue-icons";

const events = ref([
  {
    title: "Wedding Ceremony",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: AkHeart,
  },
  {
    title: "City Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
  {
    title: "Airport Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: MaAirport,
  },
  {
    title: "Whole City Tour",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
]);
</script>

<style></style>
