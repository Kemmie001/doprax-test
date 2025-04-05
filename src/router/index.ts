/** @format */

import ServicesPage from "../pages/ServicesPage.vue";
import Home from "../pages/HomePage.vue";
import SuccessfulDeployment from "../pages/SuccessfulDeployment.vue";
import { createRouter, createWebHistory } from "vue-router";
import EditSevice from "../pages/EditSevice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "SuccessfulDeployment",
    component: SuccessfulDeployment,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
  },
  {
    path: "/edit-services",
    name: "EditServices",
    component: EditSevice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
