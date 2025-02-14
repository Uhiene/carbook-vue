<template>
  <div class="bg-gray-100/90">
    <SectionHeading title="Happy Clients" description="Testimonial" />
    <section class="py-10 md:py-20 p-4">
      <swiper
        :modules="[Autoplay]"
        :space-between="30"
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="w-full max-w-5xl"
      >
      <swiper-slide v-for="(testimony, index) in testimonys" :key="index">
        <TestimonyCard 
        :name="testimony.name"
        :position="testimony.position"
        :image="testimony.image"
        :comment="testimony.comment"
        />

      </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import SectionHeading from "../composables/SectionHeading.vue";
import {testimonys} from "../../data/testimonyData"
import TestimonyCard from "../cards/TestimonyCard.vue"
</script>

<style></style>
