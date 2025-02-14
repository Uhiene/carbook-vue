<template>
  <div class="relative w-full h-96 flex items-center">
    <div class="absolute inset-0">
      <img
        src="../../assets/images/bg_3.jpg"
        alt="Background Image"
        class="w-full h-full object-cover object-top"
      />

      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="absolute right-20 md:right-40 px-4">
      <h1 class="text-3xl font-bold mb-4 text-white">
        Do You Want To Earn With Us? <br />
        So Don't Be Late.
      </h1>
      <router-link to="/contact">
        <ButtonComponent text="Become A Driver" />
      </router-link>
    </div>

    <div class="md:absolute inset-0 bg-[#01d28e] clip-slant w-1/2"></div>
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>

<style>
.clip-slant {
  clip-path: polygon(0 0, 90% 0, 70% 100%, 0 100%);
}
</style>
