import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
  {
    name: 'account-login',
    path: 'login',
    component: () =>
      import('@/pages/account/login/index.vue')
  }
];

export default routers;
