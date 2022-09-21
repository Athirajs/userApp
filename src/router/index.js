import Vue from "vue";
import VueRouter from "vue-router";
import UsersList from "../views/UsersList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UsersList",
    component: UsersList,
  },
  {
    path: "/user/:id",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/SingleUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
