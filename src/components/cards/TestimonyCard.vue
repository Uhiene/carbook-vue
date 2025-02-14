<template>
  <div class="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 h-96 text-center">
    <img :src="getImage(image)" alt="" class="w-24 h-24 rounded-full object-cover mb-4"> 
    <p class="text-gray-400 text-md my-3">{{ comment }}</p>
    <h2 class="text-xl font-semibold">{{ name }}</h2>
    <p class="text-md text-blue-500">{{ position }}</p>
  </div>
</template>

<script setup>
defineProps({
    name: String,
    position: String,
    image: String,
    comment: String
})

const getImage = (imageName) => {
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href
}
</script>

<style>

</style>