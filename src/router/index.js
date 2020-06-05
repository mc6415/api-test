import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Character from "../views/Character";
import vueDebounce from "vue-debounce";

Vue.use(vueDebounce);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/character/:id",
    name: "Character",
    component: Character
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
