<template>
  <SectionHeading title="Recent Blog" description="Blog"/>
  <section class="flex flex-col md:flex-row  justify-center  gap-6 py-10 md:py-20 p-4">
    <BlogCard 
        v-for="(blog, index) in blogs"
        :key="index"
        :id="blog.id"
        :date="blog.date"
        :title="blog.title"
        :image="blog.image"
        :author="blog.author"
        :description="blog.description"
        :comments="blog.comments"
        :class="'md:w-80'"
    />
  </section>
</template>

<script setup>
import SectionHeading from "../composables/SectionHeading.vue"
import BlogCard from "../cards/BlogCard.vue"
import {blogs} from "../../data/blogData"
</script>

<style>

</style>