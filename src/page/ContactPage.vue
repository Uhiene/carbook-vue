<template>
  <BgContainer
    title="Contact"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Home', to: '/' },
      { text: 'Contact', to: '/contact' },
    ]"
  />
  <div class="mx-auto p-8 max-w-6xl">
    <div
      class="flex flex-col-reverse md:flex-row gap-10 md:gap-0 justify-between"
    >
      <!-- Contact Details -->
      <div class="space-y-6 md:w-1/3">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex items-start space-x-4 border border-gray-200 p-4 rounded-md"
        >
          <component :is="contact.icon" class="text-blue-500 text-2xl" />
          <div>
            <p class="text-gray-400 mb-2">{{ contact.label }}</p>
            <p class="font-medium text-base">{{ contact.value }}</p>
          </div>
        </div>
      </div>
      <!-- Contact Form -->
      <div class="bg-gray-100/50 p-6 shadow-lg rounded-md md:w-3/5">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700">Name</label>
            <input
              type="text"
              v-model="form.name"
              class="w-full p-3 border rounded-lg bg-white"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              v-model="form.email"
              class="w-full p-3 border rounded-lg bg-white"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full p-3 border rounded-lg bg-white"
              required
            ></textarea>
          </div>

          <ButtonComponent
            type="submit"
            text="Send Message"
            bgColor="bg-blue-500"
            textColor="text-white"
            hoverColor="bg-blue-700"
          />
        </form>
      </div>
    </div>

    <!-- Dummy Map -->
    <div class="mt-10">
        <iframe
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          style="border: 0"
          allowfullscreen
          class="w-full h-[350px] md:h-[700px]"
        ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BgContainer from "../components/composables/BgContainer.vue";
import ButtonComponent from "../components/composables/ButtonComponent.vue"

import {
  AkLocation,
  AnOutlinedMail,
  BsTelephoneFill,
} from "@kalimahapps/vue-icons";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  alert("Message sent!");
  form.value = { name: "", email: "", message: "" };
};

const contacts = ref([
  {
    label: "Address:",
    value: "198 West 21st Street, Suite 721 New York, NY 10016",
    icon: AkLocation,
  },
  { label: "Email:", value: "info@example.com", icon: AnOutlinedMail },
  { label: "Phone:", value: "+1 234 567 890", icon: BsTelephoneFill },
]);
</script>

<style scoped>
input,
textarea {
  border: 1px solid #ccc;
  outline: none;
  transition: border 0.3s;
}
input:focus,
textarea:focus {
  border-color: #007bff;
}
</style>
