<template>
  <div
    class="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg md:w-2/4 mb-2"
  >
    <img
      :src="getImage('person_1.jpg')"
      alt="User Avatar"
      class="w-12 h-12 rounded-full object-cover"
    />

    <div>
      <h4 class="font-semibold text-gray-800">{{ comment.author }}</h4>
      <div class="flex items-center text-green-400">
        <AnFilledStar v-for="star in comment.rating" :key="star" />
        <AnOutlinedStar v-for="star in 5 - comment.rating" :key="star" />
      </div>
      <p class="text-gray-600 mt-1">{{ comment.text }}</p>

      <button
        class="mt-4 px-4 py-2 rounded text-xs font-medium bg-blue-500 text-white hover:bg-blue-600"
      >
        Reply
      </button>
    </div>
  </div>
</template>

<script setup>
import { AnFilledStar } from "@kalimahapps/vue-icons";
import { AnOutlinedStar } from "@kalimahapps/vue-icons";
defineProps({
  comment: Object,
});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>
