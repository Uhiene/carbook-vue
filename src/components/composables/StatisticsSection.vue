<template>
  <section class="flex flex-col md:flex-row justify-between" ref="statsSection">
    <div v-for="(item, index) in stats" :key="index" 
    :class="['p-6 h-36 md:h-72 w-full md:w-1/4 flex items-center md:justify-center gap-4', index === 0 ? 'bg-blue-300/90' : 'bg-gray-100/60']">
      <h1 class="text-5xl font-light text-blue-500">
        {{ item.count }}
      </h1>
      <p class="text-lg w-10 text-gray-900 leading-tight">{{ item.label }}</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const stats = ref([
  { to: 60, label: "Years Experienced", count: 0 },
  { to: 1090, label: "Total Cars", count: 0 },
  { to: 2590, label: "Happy Customers", count: 0 },
  { to: 67, label: "Total Branches", count: 0 },
]);

const statsSection = ref(null);

const startCounting = () => {
  stats.value.forEach((stat) => {
    let start = 0;
    const increment = stat.to / (2000 / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= stat.to) {
        stat.count = stat.to;
        clearInterval(interval);
      } else {
        stat.count = Math.floor(start);
      }
    }, 16);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(statsSection.value);
      }
    },
    { threshold: 0.5 }
  );
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>

<style></style>
