import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layout/DefaultLayout.vue";
import HomePage from "../page/HomePage.vue";
import AboutPage from "../page/AboutPage.vue";
import ServicesPage from "../page/ServicesPage.vue";
import CarsPage from "../page/CarsPage.vue";
import ContactPage from "../page/ContactPage.vue";
import BlogPage from "../page/BlogPage.vue";
import PricingPage from "../page/PricingPage.vue";
import CarDetails from "../page/CarDetails.vue";
import BlogDetails from "../page/BlogDetails.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage,
      },
      {
        path: "/services",
        name: "services",
        component: ServicesPage,
      },
      {
        path: "/cars",
        name: "cars",
        component: CarsPage,
      },
      {
        path: "/car/:id",
        name: "carDetails",
        component: CarDetails,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactPage,
      },
      {
        path: "/blog",
        name: "blog",
        component: BlogPage,
      },
      {
        path: "/blog/:id",
        name: "blogDetails",
        component: BlogDetails,
      },
      {
        path: "/pricing",
        name: "pricing",
        component: PricingPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }; // scroll to the top on page navigation
  },
});

export default router;
