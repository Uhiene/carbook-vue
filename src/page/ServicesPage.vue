<template>
  <BgContainer
    title="Services"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Services', to: '/services' },
    ]"
  />
  <ServiceList />
  <CallToAction />
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import ServiceList from "../components/composables/ServiceList.vue"
import CallToAction from "../components/composables/CallToAction.vue"
</script>

<style></style>
