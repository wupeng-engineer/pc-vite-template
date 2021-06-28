import { RouteRecordRaw, RouterView } from 'vue-router';

const router: RouteRecordRaw = {
  path: '/account',
  name: 'account',
  component:  () => RouterView,
  children: [
    {
      path: 'login',
      name: 'account-login',
      component:  () => import('@/pages/account/login/index.vue'),
    },
  ],
};

export default router;
