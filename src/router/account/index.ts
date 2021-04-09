import { RouteRecordRaw } from 'vue-router';

const homeRoutes: Array<RouteRecordRaw> = [
  {
    name: 'account-login',
    path: 'login',
    component: () =>
      import('@/pages/account/login/index.vue')
  }
];

export default homeRoutes;
