<template>
  <BgContainer
    title="Read Our Blogs"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Blog', to: '/blog' },
    ]"
  />

  <section class="flex flex-col items-center gap-16 p-4 py-10 md:py-20">
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :author="blog.author"
      :date="blog.date"
      :image="blog.image"
      :description="blog.description"
      :comments="blog.comments"
      :class="'w-5/6 object-cover text-center'"
      :imageHeight="'h-[500px]'"
    />
  </section>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import BlogCard from "../components/cards/BlogCard.vue";
import { blogs } from "../data/blogData";
</script>

<style></style>
