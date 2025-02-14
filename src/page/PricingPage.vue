<template>
  <BgContainer
    title="Pricing"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Pricing', to: '/pricing' },
    ]"
  />
  <div class="overflow-x-auto md:w-4/5 mx-auto py-20">
    <table
      class="min-w-[700px] md:min-w-full table-auto border-collapse rounded-lg overflow-hidden"
    >
      <thead class="text-white">
        <tr class="text-center text-lg">
          <th class="p-4 border-r">
            <span>Car</span>
          </th>
          <th class="p-4 border-r polygon bg-blue-500">
            <span>Per Hour</span>
          </th>
          <th class="p-4 border-r polygon bg-gray-900">
            <span>Per Day</span>
          </th>
          <th class="p-4 polygon bg-black">
            <span>Leasing</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(car, index) in cars"
          :key="index"
          class="text-center bg-white transition duration-200 ease-in-out"
        >
          <td class="p-4 flex items-center space-x-6 border-b border-gray-400">
            <img
              :src="getImage(car.image)"
              :alt="car.name"
              class="w-36 h-20 object-cover"
            />
            <div>
              <h2 class="text-xl font-semibold text-gray-800">
                {{ car.name }}
              </h2>
              <div class="flex text-yellow-400 text-lg mt-2">
                <span v-for="star in 5" :key="star">
                  <AnFilledStar v-if="star <= car.rating" />
                  <AnOutlinedStar v-else />
                </span>
              </div>
            </div>
          </td>
          <td
            class="p-4 text-gray-900 border-gray-400 border-r text-xl font-medium border-b"
          >
            ${{ car.ratePerHour }}
          </td>
          <td
            class="p-4 text-gray-900 border-gray-400 border-r text-xl font-medium border-b"
          >
            ${{ car.ratePerDay }}
          </td>
          <td
            class="p-4 text-gray-900 border-gray-400 border-r text-xl font-medium border-b"
          >
            {{ car.leasing }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import { AnFilledStar } from "@kalimahapps/vue-icons";
import { AnOutlinedStar } from "@kalimahapps/vue-icons";
import { cars } from "../data/carsData";

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style>
th.polygon {
  position: relative;
  padding-bottom: 20px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
}
</style>
