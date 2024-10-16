import { createRouter, createWebHistory } from "vue-router";
import HomePages from "@/pages/Home/HomePages.vue";
import Agent from "@/pages/Agent/Agent.vue";
import DetailAgen from "@/pages/Agent/_UuidAgent.vue";
import Weapon from "@/pages/Weapon/Weapon.vue";
import DetailWeapon from "@/pages/Weapon/_UuidWeapon.vue";
// vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePages,
  },
  {
    path: "/Agent",
    name: "Agent",
    component: Agent,
  },
  {
    path: "/Agent/:id",
    component: DetailAgen,
  },
  {
    path: "/Weapon",
    component: Weapon,
  },
  {
    path: "/Weapon/:id",
    component: DetailWeapon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
