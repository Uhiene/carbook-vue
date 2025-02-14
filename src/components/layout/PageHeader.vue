<template>
  <header
    :class="headerClass"
    class="flex justify-center px-6 z-50 fixed w-full top-0 p-2 bg-white drop-shadow-sm"
  >
    <div class="flex justify-between items-center w-full md:w-5/6 md:relative">
      <PageLogo />
      <nav :class="{'scrolled-nav' : isScrolled}" class="space-x-6 hidden md:flex">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          :class="{ 'active-link': route.path === link.path }"
          >{{ link.name }}
        </router-link>
      </nav>

      <!-- Mobile Hamburger Menu -->
      <div class="flex md:hidden">
        <button @click="toggleMenu" class="text-gray-800 focus:outline-none" aria-label="Toggle mobile menu">
          <FaBarsStaggered />
        </button>

        <div v-if="menuVisible" class="absolute top-16 left-0 bg-white shadow-lg  w-full p-4 flex flex-col space-y-6">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            :class="{ 'active-link': route.path === link.path }"
            @click="closeMenu"
            >{{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import PageLogo from "../composables/PageLogo.vue";
import { useRoute } from "vue-router";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { FaBarsStaggered } from "@kalimahapps/vue-icons";

const route = useRoute();
const isScrolled = ref(false);
const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const closeMenu = () => {
    menuVisible.value = false;
}

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Cars", path: "/cars" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const headerClass = computed(() => ({
  "sm:bg-transparent": !isScrolled.value,
  "sm:bg-white": isScrolled.value,
  "shadow-md": isScrolled.value,
  "p-4": true,
  "sm:py-10": !isScrolled.value,
}));

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
nav a {
  color: white;
  transition: color 0.3s ease;
}

nav.scrolled-nav a {
  color: black !important;
}

nav a.active-link {
  color: #10b981 !important;
  font-weight: bold;
}

</style>
