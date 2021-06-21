import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () =>
      import('@/pages/home/index.vue')
  }
];

export default routes;
