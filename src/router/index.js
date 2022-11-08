import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home.vue"),
    children: [
      {
        path: "/user",
        name: "user",
        component: () => import("../views/Users.vue"),
      },
      {
        path: '/sorts',
        component: () => import('../views/article/Sorts.vue')
      },
      {
        path: '/article',
        component: () => import('../views/article/Article_list.vue')
      },
      {
        path: '/publish',
        component: () => import('../views/article/Publish.vue')
      },
    ],
  },
];

// 返回一个 router 实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 向外共享 router
export default router;
