<template>
  <div>
    <img
      :src="getImage(image)"
      alt=""
      :class="['object-cover h-56 w-full', imageHeight]"
    />

    <div class="space-y-2 pt-5">
      <p class="text-sm text-blue-500">
        {{ date }} {{ author }} {{ comments?.length }} comments
      </p>
      <h2 class="text-xl font-medium text-gray-800 mt-2">{{ title }}</h2>
      <router-link :to="`/blog/${id}`">
        <ButtonComponent text="Read More" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../composables/ButtonComponent.vue";

defineProps({
  id: Number,
  title: String,
  author: String,
  comments: Number,
  date: String,
  image: String,
  imageHeight: { type: String, default: "h-56" },
});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style></style>
