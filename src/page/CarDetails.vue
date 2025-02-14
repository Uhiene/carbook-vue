<template>
  <BgContainer
    title="Car Detail"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Cars', to: '/cars' },
    ]"
  />
  <div class="flex justify-center p-4 py-10 md:py-20" v-if="car">
    <div class="w-full md:w-4/5">
      <div class="text-center">
        <img
          v-if="car.image"
          :src="getImage(car.image)"
          alt=""
          class="w-full max-h-96 object-cover"
        />
        <p class="text-sm md:text-lg text-gray-400 mt-2">{{ car.brand }}</p>
        <h1 class="text-xl md:text-3xl font-medium text-gray-700">
          {{ car.name }}
        </h1>
      </div>

      <div class="flex flex-wrap justify-between my-10">
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
      </div>

      <TabsNavigation :cars="cars" />

      <SectionHeading description="Choose Car" title="Related Cars" />
      <div class="my-20 flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CarCard
            v-for="(car, index) in cars.slice(0, 3)"
            :key="index"
            :id="car.id"
            :name="car.name"
            :brand="car.brand"
            :price="car.price"
            :image="car.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BgContainer from "../components/composables/BgContainer.vue";
import { cars } from "../data/carsData";
import { events } from "../data/carDetails";
import EventCard from "../components/carDetails/EventCard.vue";
import TabsNavigation from "../components/carDetails/TabsNavigation.vue";
import SectionHeading from "../components/composables/SectionHeading.vue";
import CarCard from "../components/cards/CarCard.vue";

const route = useRoute();
const car = ref(null);

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};

onMounted(() => {
  const carId = Number(route.params.id);
  car.value = cars.find((c) => c.id == carId) || {};
});
</script>

<style></style>
