import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router';
import homeRoutes from './home';
import accountRoutes from './account';

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/index.vue'),
    children: homeRoutes,
    meta: {}

  },

  {
    name: 'account',
    path: '/account',
    component: () =>
      import(/* webpackChunkName: "account" */ '@/pages/account/index.vue'),
    children: accountRoutes
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior: () => {
    // return desired position
  }
});

export default router;
