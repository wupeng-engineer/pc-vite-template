import { RouteRecordRaw } from 'vue-router';

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home-index" */ '@/pages/home/index.vue')
  }
];

export default homeRoutes;
